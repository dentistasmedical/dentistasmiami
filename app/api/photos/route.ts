import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const photoName = searchParams.get('name');
  
  if (!photoName) {
    return NextResponse.json(
      { success: false, error: 'Photo name is required' },
      { status: 400 }
    );
  }

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  
  if (!apiKey) {
    return NextResponse.json(
      { success: false, error: 'Google Places API key not configured' },
      { status: 500 }
    );
  }

  try {
    const photoUrl = `https://places.googleapis.com/v1/${photoName}/media?maxHeightPx=800&maxWidthPx=800&key=${apiKey}`;
    
    const response = await fetch(photoUrl);
    
    if (!response.ok) {
      return NextResponse.json(
        { success: false, error: 'Failed to fetch photo' },
        { status: response.status }
      );
    }

    const imageBuffer = await response.arrayBuffer();
    const contentType = response.headers.get('content-type') || 'image/jpeg';

    return new NextResponse(imageBuffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
      },
    });
  } catch (error) {
    console.error('Photo API Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    );
  }
}