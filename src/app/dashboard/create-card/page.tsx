"use client";

import { useState } from "react";
import DashboardNavbar from "@/components/dashboard-navbar";
import {
  Sparkles,
  Image,
  FileText,
  Download,
  Wand2,
  Palette,
  Settings,
  ArrowLeft,
  Loader2,
  AlertCircle,
} from "lucide-react";
import {
  generateProductDescriptionAction,
  generateProductImageAction,
} from "@/app/actions";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function CreateCard() {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [isGeneratingDescription, setIsGeneratingDescription] = useState(false);
  const [generatedImage, setGeneratedImage] = useState("");
  const [generatedDescription, setGeneratedDescription] = useState("");
  const [error, setError] = useState("");

  const handleGenerateImage = async () => {
    if (!productName) return;
    setIsGeneratingImage(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("productName", productName);
      if (productDescription) {
        formData.append("productDescription", productDescription);
      }

      const result = await generateProductImageAction(formData);

      if (result.error) {
        setError(result.error);
      } else if (result.imageUrl) {
        setGeneratedImage(result.imageUrl);
      }
    } catch (err) {
      setError("Failed to generate image. Please try again.");
    } finally {
      setIsGeneratingImage(false);
    }
  };

  const handleGenerateDescription = async () => {
    if (!productName) return;
    setIsGeneratingDescription(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("productName", productName);
      if (productDescription) {
        formData.append("productDescription", productDescription);
      }

      const result = await generateProductDescriptionAction(formData);

      if (result.error) {
        setError(result.error);
      } else if (result.description) {
        setProductDescription(result.description);
        setGeneratedDescription(result.description);
      }
    } catch (err) {
      setError("Failed to generate description. Please try again.");
    } finally {
      setIsGeneratingDescription(false);
    }
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
                  CREATE
                  <br />
                  <span className="text-steampunk-pink text-5xl sm:text-7xl lg:text-8xl block -mt-2">
                    PRODUCT
                  </span>
                  <span className="text-steampunk-brass text-3xl sm:text-5xl lg:text-6xl block -mt-4">
                    CARD
                  </span>
                </h1>
                <p className="text-xl text-steampunk-copper font-bold max-w-2xl mx-auto">
                  AI-Powered Steampunk Design Generator
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-16 bg-gradient-to-b from-steampunk-dark to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Column - Form */}
              <div className="space-y-8">
                {/* Product Information */}
                <Card className="bg-black/50 border-steampunk-bronze backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl font-black text-black flex items-center">
                      <Settings className="w-6 h-6 mr-3 text-steampunk-brass" />
                      PRODUCT DETAILS
                    </CardTitle>
                    <CardDescription className="text-steampunk-copper">
                      Enter your product information to get started
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <Label className="text-steampunk-brass font-bold mb-2 block">
                        Product Name
                      </Label>
                      <Input
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        placeholder="Enter product name..."
                        className="bg-steampunk-dark/50 border-steampunk-bronze text-black placeholder:text-gray-400 focus:border-steampunk-pink"
                      />
                    </div>
                    <div>
                      <Label className="text-steampunk-brass font-bold mb-2 block">
                        Product Description (Optional)
                      </Label>
                      <Textarea
                        value={productDescription}
                        onChange={(e) => setProductDescription(e.target.value)}
                        placeholder="Describe your product..."
                        rows={4}
                        className="bg-steampunk-dark/50 border-steampunk-bronze text-black placeholder:text-gray-400 focus:border-steampunk-pink resize-none"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* AI Generation Controls */}
                <Card className="bg-black/50 border-steampunk-bronze backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl font-black text-white flex items-center">
                      <Wand2 className="w-6 h-6 mr-3 text-steampunk-pink" />
                      AI GENERATION
                    </CardTitle>
                    <CardDescription className="text-steampunk-copper">
                      Generate stunning visuals and compelling descriptions
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {error && (
                      <div className="bg-red-900/50 border border-red-500 text-red-200 p-4 rounded-lg flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                        <span className="font-medium">{error}</span>
                      </div>
                    )}

                    <div className="grid sm:grid-cols-2 gap-4">
                      <Button
                        onClick={handleGenerateImage}
                        disabled={
                          !productName ||
                          isGeneratingImage ||
                          isGeneratingDescription
                        }
                        className="bg-steampunk-pink hover:bg-steampunk-accent text-white font-bold py-6 text-lg disabled:opacity-50"
                      >
                        {isGeneratingImage ? (
                          <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            GENERATING...
                          </>
                        ) : (
                          <>
                            <Image className="w-5 h-5 mr-2" />
                            GENERATE IMAGE
                          </>
                        )}
                      </Button>
                      <Button
                        onClick={handleGenerateDescription}
                        disabled={
                          !productName ||
                          isGeneratingDescription ||
                          isGeneratingImage
                        }
                        className="bg-steampunk-brass hover:bg-steampunk-copper text-steampunk-dark font-bold py-6 text-lg disabled:opacity-50"
                      >
                        {isGeneratingDescription ? (
                          <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            GENERATING...
                          </>
                        ) : (
                          <>
                            <FileText className="w-5 h-5 mr-2" />
                            GENERATE TEXT
                          </>
                        )}
                      </Button>
                    </div>

                    {generatedDescription && (
                      <div>
                        <Label className="text-steampunk-brass font-bold mb-2 block">
                          Generated Description
                        </Label>
                        <Textarea
                          value={generatedDescription}
                          onChange={(e) =>
                            setGeneratedDescription(e.target.value)
                          }
                          rows={4}
                          className="bg-steampunk-dark/50 border-steampunk-bronze text-black focus:border-steampunk-pink resize-none"
                        />
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Customization Options */}
                <Card className="bg-black/50 border-steampunk-bronze backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl font-black text-white flex items-center">
                      <Palette className="w-6 h-6 mr-3 text-steampunk-copper" />
                      CUSTOMIZATION
                    </CardTitle>
                    <CardDescription className="text-steampunk-copper">
                      Fine-tune your steampunk aesthetic
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {[
                        { name: "Bronze", color: "bg-steampunk-bronze" },
                        { name: "Copper", color: "bg-steampunk-copper" },
                        { name: "Brass", color: "bg-steampunk-brass" },
                        { name: "Pink", color: "bg-steampunk-pink" },
                      ].map((theme) => (
                        <button
                          key={theme.name}
                          className={`${theme.color} h-12 rounded-lg border-2 border-transparent hover:border-white transition-all duration-200 hover:scale-105`}
                          title={theme.name}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Preview */}
              <div className="space-y-8">
                <Card className="bg-black/50 border-steampunk-bronze backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl font-black text-white flex items-center">
                      <Sparkles className="w-6 h-6 mr-3 text-steampunk-pink" />
                      LIVE PREVIEW
                    </CardTitle>
                    <CardDescription className="text-steampunk-copper">
                      See your product card come to life
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {/* Product Card Preview */}
                    <div className="bg-gradient-to-br from-steampunk-dark to-black p-8 rounded-xl border border-steampunk-bronze">
                      <div className="aspect-square bg-steampunk-bronze/20 rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                        {generatedImage ? (
                          <img
                            src={generatedImage}
                            alt={productName || "Product"}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        ) : (
                          <div className="text-center">
                            <Image className="w-16 h-16 text-steampunk-bronze mx-auto mb-4" />
                            <p className="text-steampunk-copper font-medium">
                              Generate an image to see preview
                            </p>
                          </div>
                        )}
                      </div>

                      <h3 className="text-2xl font-black text-white mb-3">
                        {productName || "Product Name"}
                      </h3>

                      <p className="text-steampunk-copper leading-relaxed mb-6">
                        {productDescription ||
                          "Generate or enter a description to see it here..."}
                      </p>

                      <div className="flex gap-3">
                        <div className="bg-steampunk-pink text-white px-4 py-2 rounded-lg font-bold text-sm">
                          PREMIUM QUALITY
                        </div>
                        <div className="bg-steampunk-brass text-steampunk-dark px-4 py-2 rounded-lg font-bold text-sm">
                          HANDCRAFTED
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Export Options */}
                <Card className="bg-black/50 border-steampunk-bronze backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl font-black text-white flex items-center">
                      <Download className="w-6 h-6 mr-3 text-steampunk-brass" />
                      EXPORT OPTIONS
                    </CardTitle>
                    <CardDescription className="text-steampunk-copper">
                      Save and share your creation
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Link href="/dashboard">
                      <Button
                        disabled={!productName}
                        className="w-full bg-steampunk-pink hover:bg-steampunk-accent text-white font-bold py-4 text-lg"
                      >
                        <Download className="w-5 h-5 mr-2" />
                        SAVE & VIEW HISTORY
                      </Button>
                    </Link>
                    <div className="grid grid-cols-2 gap-4">
                      <Button
                        disabled={!productName}
                        variant="outline"
                        className="border-steampunk-brass text-steampunk-brass hover:bg-steampunk-brass/20 font-bold"
                        onClick={() => {
                          // Copy HTML functionality
                          const htmlContent = `<div class="product-card">${productName}</div>`;
                          navigator.clipboard.writeText(htmlContent);
                        }}
                      >
                        COPY HTML
                      </Button>
                      <Button
                        disabled={!productName}
                        variant="outline"
                        className="border-steampunk-copper text-steampunk-copper hover:bg-steampunk-copper/20 font-bold"
                        onClick={() => {
                          // Share functionality
                          const shareUrl = window.location.href;
                          navigator.clipboard.writeText(shareUrl);
                        }}
                      >
                        SHARE LINK
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
