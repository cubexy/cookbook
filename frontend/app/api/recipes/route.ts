import { NextRequest, NextResponse } from "next/server";
import { fetchFromBackend, handleApiError } from "../utils";

// GET /api/recipes
export async function GET() {
  try {
    const response = await fetchFromBackend("/recipes");
    const recipes = await response.json();

    return NextResponse.json(recipes);
  } catch (error) {
    return handleApiError(error);
  }
}

// POST /api/recipes
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const response = await fetchFromBackend("/recipes", {
      method: "POST",
      body: JSON.stringify(body)
    });

    const newRecipe = await response.json();
    return NextResponse.json(newRecipe, { status: 201 });
  } catch (error) {
    return handleApiError(error);
  }
}
