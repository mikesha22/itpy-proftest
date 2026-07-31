@echo off
setlocal
cd /d "%~dp0"

echo Checking update...
git apply --check itpy-proftest_restart_student-only.patch
if errorlevel 1 (
  echo.
  echo The patch could not be applied. Make sure these files are from the current main branch.
  pause
  exit /b 1
)

echo Applying update...
git apply itpy-proftest_restart_student-only.patch
if errorlevel 1 (
  echo Failed to apply update.
  pause
  exit /b 1
)

echo.
echo Update applied successfully.
echo Run: npm run build
pause
