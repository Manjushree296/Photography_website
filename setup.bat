@echo off
REM Photography Portfolio Setup Script for Windows

echo.
echo ========================================
echo 📸 Photography Portfolio Setup
echo ========================================
echo.

REM Check if Node is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js is not installed. Please install it first.
    echo Download from: https://nodejs.org/
    pause
    exit /b 1
)

echo ✓ Node.js is installed
echo.

REM Backend Setup
echo 📦 Setting up Backend...
cd backend

REM Check if node_modules exists
if not exist "node_modules" (
    echo Installing backend dependencies...
    call npm install
) else (
    echo ✓ Backend dependencies already installed
)

REM Create .env file if it doesn't exist
if not exist ".env" (
    echo Creating .env file from .env.example...
    copy .env.example .env
    echo ⚠️  Please update .env with your MongoDB connection string
) else (
    echo ✓ .env file exists
)

cd ..
echo ✓ Backend setup complete
echo.

REM Frontend Setup
echo 📦 Setting up Frontend...
cd frontend

REM Check if node_modules exists
if not exist "node_modules" (
    echo Installing frontend dependencies...
    call npm install
) else (
    echo ✓ Frontend dependencies already installed
)

REM Create .env file if it doesn't exist
if not exist ".env" (
    echo REACT_APP_API_URL=http://localhost:5000/api > .env
    echo ✓ Frontend .env created
) else (
    echo ✓ Frontend .env file exists
)

cd ..
echo ✓ Frontend setup complete
echo.

echo ============================================
echo ✅ Setup Complete!
echo ============================================
echo.
echo Next steps:
echo.
echo 1. Update backend\.env with your MongoDB URI
echo    MongoDB URI format: mongodb://localhost:27017/photography-portfolio
echo.
echo 2. Start MongoDB (if using local):
echo    mongod
echo.
echo 3. Open Command Prompt and navigate to project
echo.
echo 4. Seed database (from backend directory):
echo    cd backend
echo    npm run seed
echo.
echo 5. Start Backend Server (keep this running):
echo    npm run dev
echo    (Server will run on http://localhost:5000)
echo.
echo 6. Open another Command Prompt in the same directory
echo.
echo 7. Start Frontend (from frontend directory):
echo    cd frontend
echo    npm start
echo    (Opens http://localhost:3000 automatically)
echo.
echo 8. Open http://localhost:3000 in your browser
echo.
echo ============================================
echo.
pause
