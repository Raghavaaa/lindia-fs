# LegalIndia.ai - Backend

Next.js backend API server for LegalIndia.ai legal research assistant.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```
HF_TOKEN=your_huggingface_token
DEEPSEEK_API_KEY=your_deepseek_api_key
PROMPT_BASE=Refine and clarify the legal research query for Indian law.
ADMIN_SECRET=your_admin_secret
```

3. Run development server:
```bash
npm run dev
```

Backend runs on http://localhost:3001

## API Endpoints

- `POST /api/research` - Legal research query
- `POST /api/admin/updatePrompt` - Update system prompt (requires ADMIN_SECRET)

## Environment Variables

- `HF_TOKEN`: Hugging Face API token
- `DEEPSEEK_API_KEY`: DeepSeek API key
- `PROMPT_BASE`: Base prompt for legal queries
- `ADMIN_SECRET`: Secret for admin endpoints

## Database

SQLite database stored in `legal.db`. Automatically created on first run.

## Deployment

Deploy to Railway:
1. Connect your GitHub repository
2. Set environment variables in Railway dashboard
3. Railway will auto-detect and deploy

