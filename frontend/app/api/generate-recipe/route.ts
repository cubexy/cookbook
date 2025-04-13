import { NextRequest } from "next/server";
import { API_CONFIG } from "../config";
import { handleApiError } from "../utils";

// POST /api/generate-recipe
export async function POST(request: NextRequest) {
  try {
    // Extract the prompt from the request
    const { prompt } = await request.json();

    if (!prompt || typeof prompt !== "string") {
      return Response.json({ message: "Prompt is required" }, { status: 400 });
    }

    // Create request to backend streaming endpoint
    const response = await fetch(`${API_CONFIG.BACKEND_URL}/generate-recipe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt })
    });

    // Handle errors
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return Response.json(
        { message: errorData.message || `Error ${response.status}: ${response.statusText}` },
        { status: response.status }
      );
    }

    // Forward the streaming response directly
    return new Response(response.body, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache, no-transform",
        Connection: "keep-alive"
      }
    });
  } catch (error) {
    return handleApiError(error);
  }
}
