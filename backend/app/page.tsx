export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <h1>LegalIndia Backend API</h1>
      <p>API server is running.</p>
      <ul>
        <li><a href="/api/research">/api/research</a> - Legal research endpoint (POST)</li>
        <li><a href="/api/admin/updatePrompt">/api/admin/updatePrompt</a> - Update prompt (POST)</li>
      </ul>
    </div>
  );
}

