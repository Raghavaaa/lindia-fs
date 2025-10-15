# Full Stack Structure - LegalIndia.ai

## Overview
This is version **a9b3dba** extracted into separate frontend and backend.

## Directory Structure

```
lindia-fullstack/
├── frontend/               # Next.js Frontend Application
│   ├── app/
│   │   ├── about/         # About page
│   │   ├── dashboard/     # Dashboard page
│   │   ├── login/         # Login page
│   │   ├── privacy/       # Privacy policy
│   │   ├── settings/      # Settings page
│   │   ├── terms/         # Terms of service
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Home page
│   ├── components/        # React components
│   │   ├── ClientGate.tsx
│   │   ├── ClientSelectionModal.tsx
│   │   ├── Header.tsx
│   │   ├── ResearchModal.tsx
│   │   ├── SessionProvider.tsx
│   │   └── Sidebar.tsx
│   ├── lib/
│   │   ├── api.ts         # API client for backend calls
│   │   └── store.tsx      # Client-side state management
│   ├── public/            # Static assets
│   ├── .env.example       # Environment variables template
│   ├── .gitignore
│   ├── eslint.config.mjs
│   ├── next.config.ts
│   ├── package.json       # Frontend dependencies (no sqlite)
│   ├── postcss.config.mjs
│   ├── README.md
│   └── tsconfig.json
│
├── backend/               # Next.js Backend API Server
│   ├── app/
│   │   ├── api/
│   │   │   ├── research/
│   │   │   │   └── route.ts      # POST /api/research
│   │   │   └── admin/
│   │   │       └── updatePrompt/
│   │   │           └── route.ts  # POST /api/admin/updatePrompt
│   │   ├── layout.tsx    # Minimal layout
│   │   └── page.tsx      # API info page
│   ├── lib/
│   │   └── db.ts         # SQLite database functions
│   ├── .env.example      # Environment variables template
│   ├── .gitignore
│   ├── eslint.config.mjs
│   ├── next.config.ts
│   ├── package.json      # Backend dependencies (includes sqlite)
│   ├── railway.json      # Railway deployment config
│   ├── README.md
│   └── tsconfig.json
│
├── README.md             # Main README
└── STRUCTURE.md          # This file
```

## Key Features

### Frontend (Port 3000)
- **No Database**: Pure UI/UX layer
- **API Client**: Calls backend via `lib/api.ts`
- **State Management**: Client-side store in `lib/store.tsx`
- **Pages**: Home, Dashboard, Settings, Login, About, Privacy, Terms
- **Components**: Modals, Sidebar, Header, etc.

### Backend (Port 3001)
- **API Routes**: Research and Admin endpoints
- **Database**: SQLite for storing queries and settings
- **AI Integration**: 
  - InLegalBERT (Hugging Face)
  - DeepSeek API (fallback)
- **No UI**: Only API routes and minimal info page

## Environment Variables

### Frontend `.env.local`
```
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### Backend `.env`
```
HF_TOKEN=your_huggingface_token
DEEPSEEK_API_KEY=your_deepseek_api_key
PROMPT_BASE=Refine and clarify the legal research query for Indian law.
ADMIN_SECRET=your_admin_secret
```

## Running Locally

### 1. Start Backend
```bash
cd backend
npm install
cp .env.example .env  # Edit with your API keys
npm run dev           # Runs on http://localhost:3001
```

### 2. Start Frontend
```bash
cd frontend
npm install
echo "NEXT_PUBLIC_API_URL=http://localhost:3001" > .env.local
npm run dev           # Runs on http://localhost:3000
```

### 3. Access
- Frontend: http://localhost:3000
- Backend API: http://localhost:3001

## Deployment

### Backend → Railway
1. Create new Railway project
2. Connect `backend/` folder
3. Set environment variables in Railway
4. Railway auto-detects Next.js and deploys
5. Note your backend URL (e.g., `https://yourapp.railway.app`)

### Frontend → Vercel/Railway/Netlify
1. Create new project
2. Connect `frontend/` folder
3. Set environment variable:
   - `NEXT_PUBLIC_API_URL=https://yourapp.railway.app`
4. Deploy

## API Endpoints

### POST /api/research
**Request:**
```json
{
  "query": "What are the property laws in Karnataka?",
  "userId": "optional_user_id"
}
```

**Response:**
```json
{
  "result": "AI-generated legal research response...",
  "id": "rq_abc123"
}
```

### POST /api/admin/updatePrompt
**Request:**
```json
{
  "secret": "your_admin_secret",
  "newPrompt": "New base prompt for queries"
}
```

**Response:**
```json
{
  "message": "Prompt updated successfully"
}
```

## Technology Stack

- **Framework**: Next.js 15.5.5
- **React**: 19.1.0
- **Styling**: Tailwind CSS 4
- **Database**: SQLite (backend only)
- **AI**: Hugging Face InLegalBERT + DeepSeek
- **Language**: TypeScript 5

## Version
Based on commit **a9b3dba** - "feat(deploy): add Railway deployment configuration and env example"

This is the working version with DeepSeek integration and Railway config, extracted as-is with no modifications.

