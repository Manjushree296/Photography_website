#!/bin/bash

# Photography Portfolio Setup Script

echo "🚀 Starting Photography Portfolio Setup..."
echo ""

# Check if Node is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install it first."
    exit 1
fi

echo "✓ Node.js is installed"
echo ""

# Backend Setup
echo "📦 Setting up Backend..."
cd backend

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "Installing backend dependencies..."
    npm install
else
    echo "✓ Backend dependencies already installed"
fi

# Create .env file if it doesn't exist
if [ ! -f ".env" ]; then
    echo "Creating .env file from .env.example..."
    cp .env.example .env
    echo "⚠️  Please update .env with your MongoDB connection string"
else
    echo "✓ .env file exists"
fi

cd ..
echo "✓ Backend setup complete"
echo ""

# Frontend Setup
echo "📦 Setting up Frontend..."
cd frontend

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "Installing frontend dependencies..."
    npm install
else
    echo "✓ Frontend dependencies already installed"
fi

# Create .env file if it doesn't exist
if [ ! -f ".env" ]; then
    echo "REACT_APP_API_URL=http://localhost:5000/api" > .env
    echo "✓ Frontend .env created"
else
    echo "✓ Frontend .env file exists"
fi

cd ..
echo "✓ Frontend setup complete"
echo ""

echo "============================================"
echo "✅ Setup Complete!"
echo "============================================"
echo ""
echo "Next steps:"
echo ""
echo "1. Update backend/.env with your MongoDB URI"
echo ""
echo "2. Start MongoDB (if using local):"
echo "   mongod"
echo ""
echo "3. Seed database (from backend directory):"
echo "   npm run seed"
echo ""
echo "4. Start Backend Server (from backend directory):"
echo "   npm run dev"
echo ""
echo "5. Start Frontend (from frontend directory, in new terminal):"
echo "   npm start"
echo ""
echo "6. Open http://localhost:3000 in your browser"
echo ""
echo "============================================"
