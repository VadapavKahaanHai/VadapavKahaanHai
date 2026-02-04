import type { APIRoute } from "astro";
import { generateOgImageForSite } from "@utils/generateOgImages";

export const GET: APIRoute = async () => {
  try {
    const buffer = await generateOgImageForSite();
    return new Response(new Uint8Array(buffer), {
      headers: { "Content-Type": "image/png" },
    });
  } catch (error) {
    console.error("Failed to generate OG image:", error);
    // Return a 500 error instead of crashing
    return new Response("Failed to generate OG image", { status: 500 });
  }
};
