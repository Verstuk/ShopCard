"use client";

import Link from "next/link";
import { createClient } from "../../supabase/client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { UserCircle, Cog, Crown, Settings } from "lucide-react";
import { useRouter } from "next/navigation";

export default function DashboardNavbar() {
  const supabase = createClient();
  const router = useRouter();

  return (
    <nav className="w-full border-b border-steampunk-bronze bg-steampunk-dark py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link
            href="/dashboard"
            prefetch
            className="flex items-center gap-2 text-2xl font-bold text-steampunk-brass hover:text-steampunk-pink transition-colors"
          >
            <Cog className="w-8 h-8" />
            <span className="font-black tracking-tight">STEAMCRAFT</span>
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          <Link
            href="/pricing"
            className="px-4 py-2 text-sm font-bold text-steampunk-brass hover:text-steampunk-pink transition-colors flex items-center gap-2"
          >
            <Crown className="w-4 h-4" />
            UPGRADE
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-steampunk-brass hover:text-steampunk-pink hover:bg-steampunk-bronze/20"
              >
                <UserCircle className="h-6 w-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-steampunk-dark border-steampunk-bronze"
            >
              <DropdownMenuItem
                className="text-steampunk-brass hover:text-steampunk-pink hover:bg-steampunk-bronze/20 cursor-pointer"
                onClick={() => router.push("/dashboard/settings")}
              >
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem
                className="text-steampunk-brass hover:text-steampunk-pink hover:bg-steampunk-bronze/20 cursor-pointer"
                onClick={async () => {
                  await supabase.auth.signOut();
                  router.push("/sign-in");
                }}
              >
                <UserCircle className="w-4 h-4 mr-2" />
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
