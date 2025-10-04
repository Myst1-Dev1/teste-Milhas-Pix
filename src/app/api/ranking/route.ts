import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const mile_value = searchParams.get("mile_value");

  if (!mile_value) {
    return NextResponse.json(
      { error: "Parâmetro mile_value é obrigatório" },
      { status: 400 }
    );
  }

  const numericValue = parseFloat(mile_value);

  if (isNaN(numericValue) || numericValue < 14 || numericValue > 16.56) {
    return NextResponse.json(
      { error: "O valor deve estar entre 14,00 e 16,56" },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      `https://api.milhaspix.com/simulate-ranking?mile_value=${mile_value}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );

    const data = await response.json();

    // se a API não devolver array, normalizamos para []
    if (!Array.isArray(data)) {
      return NextResponse.json([], { status: 200 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erro ao buscar ranking" },
      { status: 500 }
    );
  }
}