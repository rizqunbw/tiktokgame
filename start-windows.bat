@echo off
cd /d "%~dp0"
where npm >nul 2>nul || (echo Install Node.js from https://nodejs.org/ && pause && exit /b 1)
if not exist node_modules call npm install
npm run dev
pause
