// API client for backend communication

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export async function callResearchAPI(query: string, userId?: string) {
  const response = await fetch(`${API_URL}/api/research`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, userId }),
  });

  if (!response.ok) {
    throw new Error('Research API failed');
  }

  return response.json();
}

export async function updatePrompt(secret: string, newPrompt: string) {
  const response = await fetch(`${API_URL}/api/admin/updatePrompt`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ secret, newPrompt }),
  });

  if (!response.ok) {
    throw new Error('Update prompt failed');
  }

  return response.json();
}

