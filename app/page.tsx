
'use client';

import { useEffect, useState } from "react";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-4">SorteAgora 🎉</h1>
      {isClient ? (
        <p>Pronto para rodar a roleta!</p>
      ) : (
        <p>Carregando...</p>
      )}
    </main>
  );
}
