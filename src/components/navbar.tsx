import Link from "next/link";
import { Button } from "./ui/button";
import { Cog, Sparkles } from "lucide-react";
import UserProfile from "./user-profile";

export default function Navbar() {
  // Placeholder user data - replace with actual API call later
  const user = null; // Set to null for logged out state, or { id: '1', email: 'user@example.com' } for logged in

  return (
    <nav className="w-full border-b border-steampunk-bronze bg-steampunk-dark py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          href="/"
          prefetch
          className="flex items-center gap-2 text-2xl font-bold text-steampunk-brass hover:text-steampunk-pink transition-colors"
        >
          <Cog className="w-8 h-8" />
          <span className="font-black tracking-tight">ЭЛЕМЕНТАРНО</span>
        </Link>
        <div className="flex gap-4 items-center">
          {user ? (
            <>
              <Link
                href="/dashboard"
                className="px-6 py-2 text-sm font-bold text-steampunk-brass hover:text-steampunk-pink transition-colors"
              >
                <Button className="bg-steampunk-bronze hover:bg-steampunk-copper text-white font-bold">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Создай карточку
                </Button>
              </Link>
              <UserProfile />
            </>
          ) : (
            <>
              <Link
                href="/sign-in"
                className="px-6 py-2 text-sm font-bold text-steampunk-brass hover:text-steampunk-pink transition-colors"
              >
                Вход
              </Link>
              <Link
                href="/sign-up"
                className="px-6 py-3 text-sm font-bold text-white bg-steampunk-pink rounded-lg hover:bg-steampunk-accent transition-colors shadow-lg"
              >
                Начни творить
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
