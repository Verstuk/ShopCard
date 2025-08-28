"use server";

import { encodedRedirect } from "@/utils/utils";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from "../../supabase/server";

export const signUpAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const fullName = formData.get("full_name")?.toString() || "";
  const supabase = await createClient();
  const origin = headers().get("origin");

  if (!email || !password) {
    return encodedRedirect(
      "error",
      "/sign-up",
      "Email and password are required",
    );
  }

  const {
    data: { user },
    error,
  } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
      data: {
        full_name: fullName,
        email: email,
      },
    },
  });

  console.log("After signUp", error);

  if (error) {
    console.error(error.code + " " + error.message);
    return encodedRedirect("error", "/sign-up", error.message);
  }

  if (user) {
    try {
      const { error: updateError } = await supabase.from("users").insert({
        id: user.id,
        name: fullName,
        full_name: fullName,
        email: email,
        user_id: user.id,
        token_identifier: user.id,
        created_at: new Date().toISOString(),
      });

      if (updateError) {
        console.error("Error updating user profile:", updateError);
      }
    } catch (err) {
      console.error("Error in user profile creation:", err);
    }
  }

  return encodedRedirect(
    "success",
    "/sign-up",
    "Thanks for signing up! Please check your email for a verification link.",
  );
};

export const signInAction = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return encodedRedirect("error", "/sign-in", error.message);
  }

  return redirect("/dashboard");
};

export const forgotPasswordAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const supabase = await createClient();
  const origin = headers().get("origin");
  const callbackUrl = formData.get("callbackUrl")?.toString();

  if (!email) {
    return encodedRedirect("error", "/forgot-password", "Email is required");
  }

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/auth/callback?redirect_to=/protected/reset-password`,
  });

  if (error) {
    console.error(error.message);
    return encodedRedirect(
      "error",
      "/forgot-password",
      "Could not reset password",
    );
  }

  if (callbackUrl) {
    return redirect(callbackUrl);
  }

  return encodedRedirect(
    "success",
    "/forgot-password",
    "Check your email for a link to reset your password.",
  );
};

export const resetPasswordAction = async (formData: FormData) => {
  const supabase = await createClient();

  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  if (!password || !confirmPassword) {
    encodedRedirect(
      "error",
      "/protected/reset-password",
      "Password and confirm password are required",
    );
  }

  if (password !== confirmPassword) {
    encodedRedirect(
      "error",
      "/dashboard/reset-password",
      "Passwords do not match",
    );
  }

  const { error } = await supabase.auth.updateUser({
    password: password,
  });

  if (error) {
    encodedRedirect(
      "error",
      "/dashboard/reset-password",
      "Password update failed",
    );
  }

  encodedRedirect("success", "/protected/reset-password", "Password updated");
};

export const signOutAction = async () => {
  const supabase = await createClient();
  await supabase.auth.signOut();
  return redirect("/sign-in");
};

export const createSubscriptionAction = async (formData: FormData) => {
  const planId = formData.get("planId")?.toString();
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return encodedRedirect("error", "/sign-in", "Please sign in to continue");
  }

  if (!planId) {
    return encodedRedirect("error", "/pricing", "Please select a plan");
  }

  try {
    // Here you would integrate with Stripe or your payment processor
    // For now, we'll simulate the subscription creation

    const { error: updateError } = await supabase
      .from("users")
      .update({
        subscription_plan: planId,
        subscription_status: "active",
        updated_at: new Date().toISOString(),
      })
      .eq("id", user.id);

    if (updateError) {
      console.error("Error updating subscription:", updateError);
      return encodedRedirect(
        "error",
        "/pricing",
        "Failed to update subscription",
      );
    }

    return encodedRedirect(
      "success",
      "/dashboard",
      "Subscription updated successfully!",
    );
  } catch (err) {
    console.error("Error in subscription creation:", err);
    return encodedRedirect("error", "/pricing", "Something went wrong");
  }
};

export const generateProductDescriptionAction = async (formData: FormData) => {
  const productName = formData.get("productName")?.toString();
  const productDescription = formData.get("productDescription")?.toString();

  if (!productName) {
    return { error: "Product name is required" };
  }

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return { error: "OpenRouter API key not configured" };
  }

  try {
    const systemPrompt = `You are a professional copywriter specializing in steampunk-themed product descriptions. Create compelling, atmospheric product descriptions that capture the essence of Victorian-era industrial aesthetics combined with fantastical steam-powered technology.

Guidelines:
- Use rich, descriptive language that evokes the steampunk aesthetic
- Incorporate elements like brass, copper, gears, steam, clockwork, and Victorian craftsmanship
- Focus on the product's unique features and craftsmanship
- Keep descriptions between 50-150 words
- Use an elegant, sophisticated tone
- Emphasize quality, authenticity, and attention to detail`;

    const userPrompt = `Create a steampunk product description for: "${productName}"${productDescription ? `. Additional context: ${productDescription}` : ""}`;

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer":
            process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
          "X-Title": "Steampunk Product Card Generator",
        },
        body: JSON.stringify({
          model: "anthropic/claude-3.5-sonnet",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userPrompt },
          ],
          max_tokens: 300,
          temperature: 0.7,
        }),
      },
    );

    if (!response.ok) {
      const errorData = await response.text();
      console.error("OpenRouter API error:", errorData);
      return { error: "Failed to generate description" };
    }

    const data = await response.json();
    const generatedDescription = data.choices?.[0]?.message?.content;

    if (!generatedDescription) {
      return { error: "No description generated" };
    }

    return { description: generatedDescription };
  } catch (error) {
    console.error("Error generating description:", error);
    return { error: "Failed to generate description" };
  }
};

export const generateProductImageAction = async (formData: FormData) => {
  const productName = formData.get("productName")?.toString();
  const productDescription = formData.get("productDescription")?.toString();

  if (!productName) {
    return { error: "Product name is required" };
  }

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return { error: "OpenRouter API key not configured" };
  }

  try {
    const imagePrompt = `Create a high-quality steampunk-themed product image of "${productName}". The image should feature:

- Victorian-era industrial aesthetic with brass, copper, and bronze materials
- Intricate mechanical details like gears, pipes, gauges, and clockwork elements
- Steam-powered or clockwork mechanisms visible
- Rich, warm lighting that highlights metallic surfaces
- Professional product photography style with clean background
- Detailed craftsmanship and vintage industrial design
- Atmospheric steampunk elements like steam wisps or glowing elements
${productDescription ? `\n- Additional context: ${productDescription}` : ""}

Style: Professional product photography, steampunk aesthetic, high detail, warm lighting, clean composition`;

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer":
            process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
          "X-Title": "Steampunk Product Card Generator",
        },
        body: JSON.stringify({
          model: "openai/dall-e-3",
          messages: [
            {
              role: "user",
              content: [
                {
                  type: "text",
                  text: `Generate an image: ${imagePrompt}`,
                },
              ],
            },
          ],
          max_tokens: 1000,
        }),
      },
    );

    if (!response.ok) {
      const errorData = await response.text();
      console.error("OpenRouter API error:", errorData);
      return { error: "Failed to generate image" };
    }

    const data = await response.json();
    const imageUrl = data.choices?.[0]?.message?.content;

    if (!imageUrl) {
      return { error: "No image generated" };
    }

    return { imageUrl };
  } catch (error) {
    console.error("Error generating image:", error);
    return { error: "Failed to generate image" };
  }
};

export const saveProductCardAction = async (formData: FormData) => {
  const productName = formData.get("productName")?.toString();
  const productDescription = formData.get("productDescription")?.toString();
  const generatedImage = formData.get("generatedImage")?.toString();
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return encodedRedirect("error", "/sign-in", "Please sign in to continue");
  }

  if (!productName) {
    return encodedRedirect(
      "error",
      "/dashboard/create-card",
      "Product name is required",
    );
  }

  try {
    const { error: insertError } = await supabase.from("product_cards").insert({
      user_id: user.id,
      name: productName,
      description: productDescription || "",
      image_url: generatedImage || "",
      created_at: new Date().toISOString(),
    });

    if (insertError) {
      console.error("Error saving product card:", insertError);
      return encodedRedirect(
        "error",
        "/dashboard/create-card",
        "Failed to save product card",
      );
    }

    return encodedRedirect(
      "success",
      "/dashboard",
      "Product card saved successfully!",
    );
  } catch (err) {
    console.error("Error in product card creation:", err);
    return encodedRedirect(
      "error",
      "/dashboard/create-card",
      "Something went wrong",
    );
  }
};
