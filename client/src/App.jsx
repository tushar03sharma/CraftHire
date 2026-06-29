import { useEffect, useState } from 'react';
import { checkHealth } from './services/api';

function App() {
  const [status, setStatus] = useState('checking...');

  useEffect(() => {
    checkHealth()
      .then(data => setStatus(data.message))
      .catch(() => setStatus('backend unreachable ❌'));
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold text-white">CraftHire : AI Resume Builder 🚀</h1>
      <p className="text-slate-400">{status}</p>
    </div>
  );
}

export default App;