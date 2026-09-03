# Second Brain

A high-performance, real-time AI copilot that provides discreet contextual answers, working code, and live assistance using screen capture and fast speech transcription.

![Second Brain Banner](Second-brain-banner.png)

## Features

- ⚡ **Real-time Speech Transcription**: Sub-second voice capture powered by Groq `whisper-large-v3-turbo`.
- 🔑 **Multi-Key Failover**: Automatic round-robin cycling across multiple API keys.
- 💻 **Code & Technical Answers**: Instant answers and working code for LeetCode, System Design, and technical questions.
- 🖥️ **Multimodal Context**: Unified screen capture and audio memory window.
- 🪟 **Stealth Overlay**: Discreet, always-on-top window with click-through and stealth modes.

## Developer Guide

### Prerequisites

- Node.js 18+
- Groq API Key(s) from [Groq Console](https://console.groq.com/keys)

### Setup & Run

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Saini-Yogesh/Second-Brain.git
   cd Second-Brain
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the app**:
   ```bash
   npm start
   ```

4. **Package / Build installers**:
   ```bash
   npm run make
   ```

## Keyboard Shortcuts

| Action | Windows / Linux | macOS |
| --- | --- | --- |
| **Move Window** | `Ctrl + Arrow Keys` | `Cmd + Arrow Keys` |
| **Toggle Visibility** | `Ctrl + \` | `Cmd + \` |
| **Toggle Click-Through** | `Ctrl + M` | `Cmd + M` |
| **Next / Previous Response** | `Ctrl + ]` / `Ctrl + [` | `Cmd + ]` / `Cmd + [` |
| **Ask Next Step** | `Ctrl + Enter` | `Cmd + Enter` |
| **Scroll Up / Down** | `Ctrl + Shift + Up / Down` | `Cmd + Shift + Up / Down` |
| **Emergency Erase** | `Ctrl + Shift + E` | `Cmd + Shift + E` |
