# LegalIndia.ai - Full Stack Application

A full-stack AI-powered legal research assistant for Indian law, with separate frontend and backend.

## Project Structure

```
lindia-fullstack/
├── frontend/          # Next.js frontend application
├── backend/           # Next.js backend API server
└── README.md          # This file
```

## Setup Instructions

### Backend Setup

1. Navigate to backend folder:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file with:
```
HF_TOKEN=your_huggingface_token
DEEPSEEK_API_KEY=your_deepseek_api_key
PROMPT_BASE=Refine and clarify the legal research query for Indian law.
ADMIN_SECRET=your_admin_secret
```

4. Run backend server:
```bash
npm run dev    # Development on port 3001
npm start      # Production on port 3001
```

### Frontend Setup

1. Navigate to frontend folder:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file with:
```
NEXT_PUBLIC_API_URL=http://localhost:3001
```

4. Run frontend:
```bash
npm run dev    # Development on port 3000
npm start      # Production on port 3000
```

## Deployment

### Backend (Railway)
- Deploy the `backend/` folder to Railway
- Set environment variables in Railway dashboard
- Backend will handle API routes and database

### Frontend (Vercel/Railway)
- Deploy the `frontend/` folder
- Set `NEXT_PUBLIC_API_URL` to your backend URL
- Frontend will serve the UI and make API calls to backend

## Features

- **Legal Research**: AI-powered research using InLegalBERT and DeepSeek
- **Database**: SQLite database for storing research queries and settings
- **Admin Panel**: Update prompts and manage settings
- **Full Stack**: Separate frontend and backend for scalable deployment

## Tech Stack

- **Frontend**: Next.js 15, React 19, Tailwind CSS
- **Backend**: Next.js 15 API Routes, SQLite
- **AI**: Hugging Face (InLegalBERT), DeepSeek API

