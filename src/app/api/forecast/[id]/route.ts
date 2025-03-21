import { NextRequest, NextResponse } from "next/server";
const OWM_TOKEN = process.env.OWM_TOKEN;
import { OWM_API_URL } from "@/lib/constants";

export async function GET(req: NextRequest) {
  const id = req.nextUrl.pathname.split("/").pop();

  if (!OWM_TOKEN) {
    return NextResponse.json({ error: "OpenWeatherMap API token is missing" }, { status: 500 });
  }

  if (!id || id.trim() === "") {
    return NextResponse.json({ error: "City ID is missing or invalid" }, { status: 400 });
  }

  const fetchUrl = `${OWM_API_URL}/forecast.json?q=${id?.toLowerCase()}&days=5&aqi=no&alerts=no&key=${OWM_TOKEN}`;

  try {
    const response = await fetch(fetchUrl);

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: errorData.message || `Failed to fetch data for city: ${id}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return NextResponse.json({ error: `Failed to fetch data with query ${id}` }, { status: 500 });
  }
}
