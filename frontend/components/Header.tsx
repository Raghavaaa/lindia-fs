"use client";
import Link from "next/link";
import Image from "next/image";
import { useAppStore } from "@/lib/store";

export default function Header() {
  const { logoDataUrl } = useAppStore();
  return (
    <header className="w-full border-b border-black/5 dark:border-white/10 bg-white dark:bg-zinc-900">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          {logoDataUrl ? (
            <Image src={logoDataUrl} alt="Logo" width={36} height={36} className="h-9 w-9 rounded-xl object-cover" />
          ) : (
            <div className="h-9 w-9 rounded-xl bg-black/10 dark:bg-white/10 flex items-center justify-center text-xs font-semibold">LI</div>
          )}
          <span className="text-lg font-semibold tracking-tight">LegalIndia.ai</span>
        </Link>
        <nav className="flex items-center gap-3">
          <Link href="/about" className="text-sm text-zinc-700 dark:text-zinc-300 hover:underline">About</Link>
          <Link href="/login" className="inline-flex items-center justify-center rounded-xl px-3 py-2 text-sm font-medium bg-white dark:bg-zinc-800 border border-black/10 dark:border-white/10 text-zinc-900 dark:text-zinc-100">Login</Link>
          <Link href="/settings" className="inline-flex items-center justify-center rounded-xl px-3 py-2 text-sm font-medium text-white bg-black hover:bg-zinc-800">Settings</Link>
        </nav>
      </div>
    </header>
  );
}


