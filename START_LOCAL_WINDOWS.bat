@echo off
setlocal
cd /d "%~dp0"

echo Checking Node.js...
where node.exe >nul 2>nul
if errorlevel 1 goto no_node

where npm.cmd >nul 2>nul
if errorlevel 1 goto no_node

echo Installing project dependencies...
call npm.cmd install
if errorlevel 1 goto install_error

echo.
echo Starting the site at http://localhost:3000
echo Keep this window open while using the site.
echo Press Ctrl+C to stop the server.
echo.
start "" http://localhost:3000
call npm.cmd run dev

goto end

:no_node
echo.
echo Node.js was not found.
echo Install the LTS version from https://nodejs.org/
echo Then close this window and run this file again.
pause
exit /b 1

:install_error
echo.
echo Failed to install project dependencies.
echo Check your internet connection and try again.
pause
exit /b 1

:end
endlocal
