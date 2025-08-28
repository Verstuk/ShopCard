"use client";

import { useState } from "react";
import DashboardNavbar from "@/components/dashboard-navbar";
import {
  Crown,
  Check,
  Sparkles,
  Zap,
  Star,
  ArrowLeft,
  CreditCard,
  Shield,
  Infinity,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  color: string;
  icon: React.ReactNode;
}

const pricingPlans: PricingPlan[] = [
  {
    id: "free",
    name: "APPRENTICE",
    price: 0,
    period: "forever",
    description: "Perfect for getting started with steampunk creation",
    features: [
      "3 product cards per month",
      "Basic AI image generation",
      "Standard templates",
      "PNG export",
      "Community support",
    ],
    color: "steampunk-bronze",
    icon: <Sparkles className="w-8 h-8" />,
  },
  {
    id: "pro",
    name: "CRAFTSMAN",
    price: 19,
    period: "month",
    description: "For serious creators who need more power",
    features: [
      "50 product cards per month",
      "Advanced AI generation",
      "Premium templates",
      "All export formats",
      "Priority support",
      "Custom branding",
      "Batch processing",
    ],
    popular: true,
    color: "steampunk-pink",
    icon: <Crown className="w-8 h-8" />,
  },
  {
    id: "enterprise",
    name: "MASTER",
    price: 49,
    period: "month",
    description: "Ultimate power for professional creators",
    features: [
      "Unlimited product cards",
      "Premium AI models",
      "Exclusive templates",
      "API access",
      "White-label solution",
      "Dedicated support",
      "Team collaboration",
      "Advanced analytics",
    ],
    color: "steampunk-brass",
    icon: <Star className="w-8 h-8" />,
  },
];

export default function PricingPage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSelectPlan = async (planId: string) => {
    setSelectedPlan(planId);
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      // Redirect to dashboard after successful payment
      window.location.href = "/dashboard";
    }, 3000);
  };

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

        <div className="relative pt-20 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Back button */}
              <Link
                href="/dashboard"
                className="inline-flex items-center text-steampunk-brass hover:text-steampunk-pink transition-colors mb-8 font-bold"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                BACK TO DASHBOARD
              </Link>

              {/* Main headline */}
              <div className="text-center mb-16">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tighter leading-none">
                  CHOOSE
                  <br />
                  <span className="text-steampunk-pink text-5xl sm:text-7xl lg:text-8xl block -mt-2">
                    YOUR
                  </span>
                  <span className="text-steampunk-brass text-3xl sm:text-5xl lg:text-6xl block -mt-4">
                    PLAN
                  </span>
                </h1>
                <p className="text-xl text-steampunk-copper font-bold max-w-2xl mx-auto">
                  Unlock the full power of steampunk creation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Plans */}
      <main className="py-16 bg-gradient-to-b from-steampunk-dark to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {pricingPlans.map((plan) => (
                <Card
                  key={plan.id}
                  className={`relative bg-black/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? "border-steampunk-pink shadow-lg shadow-steampunk-pink/25"
                      : "border-steampunk-bronze hover:border-steampunk-pink"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-steampunk-pink text-white px-6 py-2 rounded-full text-sm font-black">
                        MOST POPULAR
                      </div>
                    </div>
                  )}

                  <CardHeader className="text-center pb-8">
                    <div
                      className={`text-${plan.color} mb-4 p-4 bg-steampunk-dark rounded-full w-fit mx-auto`}
                    >
                      {plan.icon}
                    </div>
                    <CardTitle className="text-2xl font-black text-white mb-2">
                      {plan.name}
                    </CardTitle>
                    <div className="mb-4">
                      <span className="text-4xl font-black text-white">
                        ${plan.price}
                      </span>
                      <span className="text-steampunk-copper font-medium ml-2">
                        /{plan.period}
                      </span>
                    </div>
                    <CardDescription className="text-steampunk-copper text-center">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center text-gray-300"
                        >
                          <Check className="w-5 h-5 text-steampunk-brass mr-3 flex-shrink-0" />
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      onClick={() => handleSelectPlan(plan.id)}
                      disabled={isProcessing && selectedPlan === plan.id}
                      className={`w-full py-6 text-lg font-black transition-all duration-300 ${
                        plan.popular
                          ? "bg-steampunk-pink hover:bg-steampunk-accent text-white"
                          : plan.id === "free"
                            ? "bg-steampunk-bronze hover:bg-steampunk-copper text-white"
                            : "bg-steampunk-brass hover:bg-steampunk-copper text-steampunk-dark"
                      }`}
                    >
                      {isProcessing && selectedPlan === plan.id ? (
                        <>
                          <CreditCard className="w-5 h-5 mr-2 animate-pulse" />
                          PROCESSING...
                        </>
                      ) : plan.id === "free" ? (
                        <>
                          <Sparkles className="w-5 h-5 mr-2" />
                          START FREE
                        </>
                      ) : (
                        <>
                          <Crown className="w-5 h-5 mr-2" />
                          UPGRADE NOW
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Features Comparison */}
            <section className="mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-12 text-center tracking-tight">
                FEATURE <span className="text-steampunk-pink">COMPARISON</span>
              </h2>

              <Card className="bg-black/50 border-steampunk-bronze backdrop-blur-sm overflow-hidden">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-steampunk-bronze">
                          <th className="text-left p-6 text-steampunk-brass font-black">
                            FEATURES
                          </th>
                          <th className="text-center p-6 text-steampunk-bronze font-black">
                            APPRENTICE
                          </th>
                          <th className="text-center p-6 text-steampunk-pink font-black">
                            CRAFTSMAN
                          </th>
                          <th className="text-center p-6 text-steampunk-brass font-black">
                            MASTER
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            feature: "Product Cards per Month",
                            free: "3",
                            pro: "50",
                            enterprise: "Unlimited",
                          },
                          {
                            feature: "AI Image Generation",
                            free: "Basic",
                            pro: "Advanced",
                            enterprise: "Premium",
                          },
                          {
                            feature: "Templates",
                            free: "Standard",
                            pro: "Premium",
                            enterprise: "Exclusive",
                          },
                          {
                            feature: "Export Formats",
                            free: "PNG",
                            pro: "All Formats",
                            enterprise: "All + API",
                          },
                          {
                            feature: "Support",
                            free: "Community",
                            pro: "Priority",
                            enterprise: "Dedicated",
                          },
                        ].map((row, index) => (
                          <tr
                            key={index}
                            className="border-b border-steampunk-bronze/30"
                          >
                            <td className="p-6 text-white font-bold">
                              {row.feature}
                            </td>
                            <td className="p-6 text-center text-steampunk-copper">
                              {row.free}
                            </td>
                            <td className="p-6 text-center text-steampunk-pink font-bold">
                              {row.pro}
                            </td>
                            <td className="p-6 text-center text-steampunk-brass font-bold">
                              {row.enterprise}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Security & Trust */}
            <section className="text-center">
              <h3 className="text-2xl font-black text-white mb-8">
                SECURE <span className="text-steampunk-pink">PAYMENT</span>
              </h3>
              <div className="flex justify-center items-center gap-8 text-steampunk-copper">
                <div className="flex items-center gap-2">
                  <Shield className="w-6 h-6" />
                  <span className="font-bold">256-bit SSL</span>
                </div>
                <div className="flex items-center gap-2">
                  <CreditCard className="w-6 h-6" />
                  <span className="font-bold">Stripe Secure</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-6 h-6" />
                  <span className="font-bold">Instant Access</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
