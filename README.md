# Story Forge – Frontend

This is the frontend interface for **Story Forge**, a narrative game platform that turns books into interactive text-adventure experiences powered by local large language models. Built using Vite and React, the frontend provides a responsive, accessible UI that complements the AI-driven storytelling from the backend.

## Features

- Minimalist, book-inspired layout
- Two gameplay modes:
  - **Story Mode**: Low model temperature, stays faithful to the original narrative
  - **Forge Mode**: High model temperature, allows creative AI branching
- Button-based input for structured interaction
- Title, preface, and mode selection screens
- Scrollable text log with responsive formatting
- Option to export gameplay as a `.txt` file

## Requirements

- Node.js 18 or higher
- Backend running locally at `http://localhost:8000`
- `npm` (or `yarn`) for package management

## Installation
git clone https://github.com/yourusername/storyforge-frontend.git
cd storyforge-frontend
npm install

## Running the App
npm run dev

The app will be available at `http://localhost:5173`.

## Project Structure

storyforge-frontend/
├── src/
│   ├── components/         # UI elements (Buttons, Screens, Header)
│   ├── pages/              # Title, Mode Selection, Game
│   ├── assets/             # Images and fonts
│   ├── App.jsx             # Root component
│   └── main.jsx            # Entry point
├── public/
│   └── favicon.ico
├── vite.config.js
└── package.json

## Notes

- Designed for offline use and local exhibitions
- Uses `fetch()` to call FastAPI backend endpoints for gameplay actions.
- Backend must be running for the frontend to function.

## License

Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)  
© 2025 Matthew Nazarian
```
