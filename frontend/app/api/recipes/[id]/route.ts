import { NextRequest, NextResponse } from "next/server";
import { fetchFromBackend, handleApiError } from "../../utils";

interface RouteParams {
  params: {
    id: string;
  };
}

// GET /api/recipes/[id]
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = params;
    const response = await fetchFromBackend(`/recipes/${id}`);
    const recipe = await response.json();

    return NextResponse.json(recipe);
  } catch (error) {
    return handleApiError(error);
  }
}

// PATCH /api/recipes/[id]
export async function PATCH(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = params;
    const body = await request.json();

    const response = await fetchFromBackend(`/recipes/${id}`, {
      method: "PATCH",
      body: JSON.stringify(body)
    });

    const updatedRecipe = await response.json();
    return NextResponse.json(updatedRecipe);
  } catch (error) {
    return handleApiError(error);
  }
}

// DELETE /api/recipes/[id]
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = params;

    const response = await fetchFromBackend(`/recipes/${id}`, {
      method: "DELETE"
    });

    const deletedRecipe = await response.json();
    return NextResponse.json(deletedRecipe);
  } catch (error) {
    return handleApiError(error);
  }
}
