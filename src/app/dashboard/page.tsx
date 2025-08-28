import DashboardNavbar from "@/components/dashboard-navbar";
import {
  InfoIcon,
  UserCircle,
  Sparkles,
  Cog,
  Palette,
  Zap,
  Download,
  Crown,
  Star,
} from "lucide-react";
import { redirect } from "next/navigation";
import { createClient } from "../../../supabase/server";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Dashboard() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <div className="min-h-screen bg-steampunk-dark">
      <DashboardNavbar />

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-steampunk-dark">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-steampunk-bronze via-steampunk-copper to-steampunk-brass" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative pt-20 pb-32">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-6xl mx-auto">
              {/* Main headline with dramatic typography */}
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
                YOUR
                <br />
                <span className="text-steampunk-pink text-6xl sm:text-8xl lg:text-9xl block -mt-4">
                  CREATIVE
                </span>
                <span className="text-steampunk-brass text-4xl sm:text-6xl lg:text-7xl block -mt-8">
                  DASHBOARD
                </span>
              </h1>

              <div className="mb-12">
                <p className="text-xl sm:text-2xl text-steampunk-copper mb-4 font-bold max-w-3xl mx-auto">
                  Welcome back, {user.email}
                </p>
                <div className="bg-steampunk-bronze/20 text-sm p-3 px-6 rounded-lg text-steampunk-brass flex gap-2 items-center justify-center max-w-2xl mx-auto border border-steampunk-bronze">
                  <InfoIcon size="16" className="text-steampunk-brass" />
                  <span className="font-medium">
                    Protected workspace for authenticated creators
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Dashboard Content */}
      <main className="py-16 bg-gradient-to-b from-steampunk-dark to-black">
        <div className="container mx-auto px-4">
          {/* Quick Actions */}
          <section className="mb-20">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-12 text-center tracking-tight">
              QUICK <span className="text-steampunk-pink">ACTIONS</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: <Sparkles className="w-8 h-8" />,
                  title: "Create New Card",
                  description: "Generate AI-powered steampunk product cards",
                  color: "steampunk-pink",
                  href: "/dashboard/create-card",
                },
                {
                  icon: <Crown className="w-8 h-8" />,
                  title: "Upgrade Plan",
                  description: "Unlock premium features",
                  color: "steampunk-bronze",
                  href: "/pricing",
                },
              ].map((action, index) => (
                <Link href={action.href} key={index}>
                  <Card className="bg-black/50 border-steampunk-bronze hover:border-steampunk-pink transition-all duration-300 hover:scale-105 backdrop-blur-sm cursor-pointer">
                    <CardHeader className="text-center">
                      <div
                        className={`text-${action.color} mb-4 p-4 bg-steampunk-dark rounded-full w-fit mx-auto`}
                      >
                        {action.icon}
                      </div>
                      <CardTitle className="text-xl font-black text-white mb-2">
                        {action.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-300 text-center leading-relaxed">
                        {action.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>

          {/* Creation History Section */}
          <section className="max-w-6xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-12 text-center tracking-tight">
              CREATION <span className="text-steampunk-pink">HISTORY</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  id: 1,
                  title: "Vintage Brass Compass",
                  description:
                    "Antique navigation instrument with intricate engravings",
                  createdAt: "2 hours ago",
                  image:
                    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=80",
                  status: "completed",
                },
                {
                  id: 2,
                  title: "Steam-Powered Timepiece",
                  description:
                    "Mechanical clock with visible gears and steam vents",
                  createdAt: "1 day ago",
                  image:
                    "https://images.unsplash.com/photo-1509048191080-d2e2678e3449?w=400&q=80",
                  status: "completed",
                },
                {
                  id: 3,
                  title: "Copper Goggles Set",
                  description:
                    "Protective eyewear with adjustable brass fittings",
                  createdAt: "3 days ago",
                  image:
                    "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&q=80",
                  status: "completed",
                },
                {
                  id: 4,
                  title: "Mechanical Arm Prosthetic",
                  description:
                    "Victorian-era inspired artificial limb with brass joints",
                  createdAt: "5 days ago",
                  image:
                    "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&q=80",
                  status: "completed",
                },
                {
                  id: 5,
                  title: "Steam Engine Model",
                  description:
                    "Miniature locomotive with working pistons and wheels",
                  createdAt: "1 week ago",
                  image:
                    "https://images.unsplash.com/photo-1544306094-e2dcf9479da3?w=400&q=80",
                  status: "completed",
                },
                {
                  id: 6,
                  title: "Brass Telescope",
                  description:
                    "Astronomical observation device with leather grip",
                  createdAt: "2 weeks ago",
                  image:
                    "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&q=80",
                  status: "completed",
                },
              ].map((card) => (
                <Card
                  key={card.id}
                  className="bg-black/50 border-steampunk-bronze hover:border-steampunk-pink transition-all duration-300 hover:scale-105 backdrop-blur-sm cursor-pointer group"
                >
                  <div className="aspect-video relative overflow-hidden rounded-t-lg">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3">
                      <div className="bg-steampunk-pink/90 text-white text-xs px-2 py-1 rounded-full font-bold">
                        {card.status.toUpperCase()}
                      </div>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-black text-white mb-1 line-clamp-1">
                      {card.title}
                    </CardTitle>
                    <p className="text-sm text-steampunk-copper font-medium">
                      {card.createdAt}
                    </p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-gray-300 text-sm leading-relaxed line-clamp-2">
                      {card.description}
                    </CardDescription>
                    <div className="flex gap-2 mt-4">
                      <Button
                        size="sm"
                        className="bg-steampunk-pink hover:bg-steampunk-accent text-white font-bold flex-1"
                      >
                        <Download className="w-4 h-4 mr-1" />
                        Export
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-steampunk-bronze text-steampunk-brass hover:bg-steampunk-bronze/20"
                      >
                        <Star className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Empty State for when no cards exist */}
            <div className="text-center py-16 hidden">
              <div className="w-24 h-24 bg-steampunk-bronze/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-12 h-12 text-steampunk-brass" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4">
                NO CARDS CREATED YET
              </h3>
              <p className="text-steampunk-copper mb-8 max-w-md mx-auto">
                Start creating your first steampunk product card to see it
                appear in your history.
              </p>
              <Button className="bg-steampunk-pink hover:bg-steampunk-accent text-white font-bold px-8 py-3">
                <Sparkles className="w-5 h-5 mr-2" />
                CREATE FIRST CARD
              </Button>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 text-center">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-8 tracking-tight">
              START <span className="text-steampunk-pink">CREATING</span>
            </h2>
            <p className="text-xl text-steampunk-copper mb-8 max-w-2xl mx-auto font-medium">
              Ready to craft your next steampunk masterpiece?
            </p>
            <Link href="/dashboard/create-card">
              <Button className="px-12 py-6 text-white bg-steampunk-pink rounded-xl hover:bg-steampunk-accent transition-all duration-300 text-xl font-black shadow-2xl hover:shadow-steampunk-pink/25 hover:scale-105">
                <Sparkles className="mr-3 w-6 h-6" />
                CREATE NEW CARD
              </Button>
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}
