import { ReactNode } from "react";

export function PageShell({ title, intro, children }: { title: string; intro: string; children: ReactNode }) {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <header className="mb-8 max-w-3xl">
        <h1 className="text-balance text-4xl font-semibold tracking-tight text-white md:text-5xl">{title}</h1>
        <p className="mt-3 text-base text-zinc-400 md:text-lg">{intro}</p>
      </header>
      {children}
    </main>
  );
}
