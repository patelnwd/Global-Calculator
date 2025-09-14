"use client";

import Link from "next/link";
import { Calculator } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-violet-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="flex items-center gap-2 text-xl font-semibold">
          <Calculator className="w-6 h-6" />
          Global Calculator
        </Link>
        <nav className="flex gap-6 text-sm">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/calculators" className="hover:underline">
            Calculators
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
