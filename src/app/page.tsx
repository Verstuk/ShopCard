import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Palette,
  Zap,
  Download,
  Crown,
  Star,
  ArrowUpRight,
  Cog,
  Wrench,
  Settings,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  // Placeholder user data - replace with actual API call later
  const user = null; // Set to null for logged out state, or { id: '1', email: 'user@example.com' } for logged in

  return (
    <div className="min-h-screen bg-steampunk-dark">
      <Navbar />
      <Hero />

      {/* Features Section */}
      <section
        id="features"
        className="py-32 bg-gradient-to-b from-steampunk-dark to-black"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-black text-white mb-6 tracking-tight">
              POWERFUL <span className="text-steampunk-pink">AI FEATURES</span>
            </h2>
            <p className="text-xl text-steampunk-copper max-w-3xl mx-auto font-medium">
              Revolutionary steampunk design tools powered by cutting-edge
              artificial intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "AI Image Generation",
                description:
                  "Create stunning steampunk product visuals with advanced AI technology",
                color: "steampunk-pink",
              },
              {
                icon: <Palette className="w-8 h-8" />,
                title: "Custom Aesthetics",
                description:
                  "Personalize every element with vintage industrial design options",
                color: "steampunk-brass",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Smart Descriptions",
                description:
                  "AI-powered compelling product copy that converts visitors",
                color: "steampunk-copper",
              },
              {
                icon: <Download className="w-8 h-8" />,
                title: "One-Click Export",
                description:
                  "Download images, share to social, or copy HTML/CSS instantly",
                color: "steampunk-bronze",
              },
              {
                icon: <Cog className="w-8 h-8" />,
                title: "Responsive Design",
                description:
                  "Perfect display across desktop, tablet, and mobile devices",
                color: "steampunk-pink",
              },
              {
                icon: <Crown className="w-8 h-8" />,
                title: "Premium Templates",
                description:
                  "Access exclusive steampunk card designs and layouts",
                color: "steampunk-brass",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-black/50 border-steampunk-bronze hover:border-steampunk-pink transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                <CardHeader>
                  <div
                    className={`text-${feature.color} mb-4 p-3 bg-steampunk-dark rounded-full w-fit`}
                  >
                    {feature.icon}
                  </div>
                  <CardTitle className="text-2xl font-black text-white mb-2">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="py-32 bg-gradient-to-b from-black to-steampunk-dark"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-black text-white mb-6 tracking-tight">
              CHOOSE YOUR <span className="text-steampunk-pink">PLAN</span>
            </h2>
            <p className="text-xl text-steampunk-copper max-w-3xl mx-auto font-medium">
              Unlock the full power of AI-driven steampunk design creation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <Card className="bg-black/50 border-steampunk-bronze hover:border-steampunk-copper transition-all duration-300">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-steampunk-bronze rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-3xl font-black text-white mb-2">
                  STARTER
                </CardTitle>
                <div className="text-5xl font-black text-steampunk-brass mb-2">
                  FREE
                </div>
                <CardDescription className="text-gray-400">
                  Perfect for trying out our platform
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    "5 AI-generated cards per month",
                    "Basic steampunk templates",
                    "Standard export options",
                    "Community support",
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-steampunk-brass" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-steampunk-bronze hover:bg-steampunk-copper text-white font-bold py-3 mt-8">
                  Get Started Free
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="bg-black/50 border-steampunk-pink hover:border-steampunk-accent transition-all duration-300 scale-105 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-steampunk-pink text-white px-6 py-2 rounded-full text-sm font-bold">
                  MOST POPULAR
                </div>
              </div>
              <CardHeader className="text-center pb-8 pt-8">
                <div className="w-16 h-16 bg-steampunk-pink rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-3xl font-black text-white mb-2">
                  PRO
                </CardTitle>
                <div className="text-5xl font-black text-steampunk-pink mb-2">
                  $29
                </div>
                <CardDescription className="text-gray-400">
                  per month
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    "Unlimited AI-generated cards",
                    "Premium steampunk templates",
                    "Advanced customization options",
                    "Priority support",
                    "Commercial usage rights",
                    "Export to all formats",
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-steampunk-pink" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-steampunk-pink hover:bg-steampunk-accent text-white font-bold py-3 mt-8">
                  Start Pro Trial
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="bg-black/50 border-steampunk-brass hover:border-steampunk-copper transition-all duration-300">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-steampunk-brass rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-3xl font-black text-white mb-2">
                  ENTERPRISE
                </CardTitle>
                <div className="text-5xl font-black text-steampunk-brass mb-2">
                  $99
                </div>
                <CardDescription className="text-gray-400">
                  per month
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    "Everything in Pro",
                    "Custom brand integration",
                    "API access",
                    "Dedicated account manager",
                    "White-label solutions",
                    "24/7 premium support",
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-steampunk-brass" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-steampunk-brass hover:bg-steampunk-copper text-white font-bold py-3 mt-8">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-b from-steampunk-dark to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-8 tracking-tight">
            READY TO CREATE <span className="text-steampunk-pink">MAGIC?</span>
          </h2>
          <p className="text-xl text-steampunk-copper mb-12 max-w-3xl mx-auto font-medium">
            Join thousands of creators who are already crafting stunning
            steampunk product cards with our AI-powered platform.
          </p>
          <Link
            href="/dashboard"
            className="inline-flex items-center px-12 py-6 text-white bg-steampunk-pink rounded-xl hover:bg-steampunk-accent transition-all duration-300 text-xl font-black shadow-2xl hover:shadow-steampunk-pink/25 hover:scale-105"
          >
            <Sparkles className="mr-3 w-6 h-6" />
            START CREATING NOW
            <ArrowUpRight className="ml-3 w-6 h-6" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
