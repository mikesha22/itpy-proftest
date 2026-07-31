@echo off
setlocal
cd /d "%~dp0"

set "TARGET=components\TestApp.tsx"

if not exist "%TARGET%" (
  echo ERROR: %TARGET% not found.
  echo Put this file in the project root next to package.json.
  pause
  exit /b 1
)

powershell -NoProfile -ExecutionPolicy Bypass -Command ^
  "$p='%TARGET%'; $s=[System.IO.File]::ReadAllText($p); $old='if (stage === \"result\" && result) return ^<ResultView payload={result} shareId={shareId} /^>;'; $new='if (stage === \"result\" && result) {`r`n    return ^<ResultView payload={result} onRestart={resetTest} /^>;`r`n  }'; if (-not $s.Contains($old)) { Write-Host 'Target line not found. The file may already be fixed.' -ForegroundColor Yellow; exit 2 }; $s=$s.Replace($old,$new); [System.IO.File]::WriteAllText($p,$s,(New-Object System.Text.UTF8Encoding($false))); Write-Host 'TestApp.tsx fixed successfully.' -ForegroundColor Green"

if errorlevel 2 (
  pause
  exit /b 2
)
if errorlevel 1 (
  echo ERROR: Could not update TestApp.tsx.
  pause
  exit /b 1
)

echo.
echo Running production build...
call pnpm run build
if errorlevel 1 (
  echo.
  echo Build failed. Send the error log.
  pause
  exit /b 1
)

echo.
echo SUCCESS. Now commit and push the changed file.
pause
