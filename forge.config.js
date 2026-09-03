const { FusesPlugin } = require('@electron-forge/plugin-fuses');
const { FuseV1Options, FuseVersion } = require('@electron/fuses');

const makers = [
    {
        name: '@electron-forge/maker-squirrel',
        config: {
            name: 'second-brain',
            productName: 'Second Brain',
            shortcutName: 'Second Brain',
            setupIcon: 'src/assets/logo.ico',
            createDesktopShortcut: true,
            createStartMenuShortcut: true,
        },
    },
    {
        name: '@electron-forge/maker-zip',
        platforms: ['win32', 'darwin', 'linux'],
    },
];

if (process.platform === 'darwin') {
    makers.push({
        name: '@electron-forge/maker-dmg',
        platforms: ['darwin'],
    });
}

if (process.platform === 'linux') {
    makers.push({
        name: '@reforged/maker-appimage',
        platforms: ['linux'],
        config: {
            options: {
                name: 'Second Brain',
                productName: 'Second Brain',
                genericName: 'AI Assistant',
                description: 'AI assistant for interviews and learning',
                categories: ['Development', 'Education'],
                icon: 'src/assets/logo.png',
            },
        },
    });
}

module.exports = {
    packagerConfig: {
        asar: true,
        extraResource: ['./src/assets/SystemAudioDump'],
        name: 'Second Brain',
        icon: 'src/assets/logo',
        ignore: [
            /\.exe$/,
            /\.nupkg$/,
            /\.zip$/,
            /Second-brain-banner\.png$/,
            /second-brain-logo\.png$/,
        ],
    },
    rebuildConfig: {},
    makers,
    plugins: [
        {
            name: '@electron-forge/plugin-auto-unpack-natives',
            config: {},
        },
        new FusesPlugin({
            version: FuseVersion.V1,
            [FuseV1Options.RunAsNode]: false,
            [FuseV1Options.EnableCookieEncryption]: true,
            [FuseV1Options.EnableNodeOptionsEnvironmentVariable]: false,
            [FuseV1Options.EnableNodeCliInspectArguments]: false,
            [FuseV1Options.EnableEmbeddedAsarIntegrityValidation]: true,
            [FuseV1Options.OnlyLoadAppFromAsar]: true,
        }),
    ],
};
