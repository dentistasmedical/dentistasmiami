import { NextRequest, NextResponse } from 'next/server';
export const revalidate = 21600;
// Predefined coordinates for Miami neighborhoods
const NEIGHBORHOOD_COORDS: Record<string, { lat: number; lng: number }> = {
  'hialeah': { lat: 25.8576, lng: -80.2781 },
  'kendall': { lat: 25.6790, lng: -80.3173 },
  'doral': { lat: 25.8195, lng: -80.3553 },
  'brickell': { lat: 25.7617, lng: -80.1918 },
  'coral-gables': { lat: 25.7217, lng: -80.2683 },
  'sweetwater': { lat: 25.7623, lng: -80.3731 },
  'little-havana': { lat: 25.7654, lng: -80.2201 },
  'westchester': { lat: 25.7545, lng: -80.3370 },
  'miami': { lat: 25.7617, lng: -80.1918 },
};

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const neighborhood = searchParams.get('neighborhood')?.toLowerCase() || 'miami';
  const radius = parseInt(searchParams.get('radius') || '8000');

  const apiKey = process.env.GOOGLE_PLACES_API_KEY || process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;
  
  if (!apiKey) {
    return NextResponse.json(
      { success: false, error: 'Google Places API key not configured' },
      { status: 500 }
    );
  }

  try {
    const coords = NEIGHBORHOOD_COORDS[neighborhood] || NEIGHBORHOOD_COORDS['miami'];
    const { lat, lng } = coords;

    console.log(`Searching for dentists near ${neighborhood} (${lat}, ${lng}) with ${radius}m radius`);

    // NEW PLACES API - Search Nearby with Field Masking
    const searchUrl = 'https://places.googleapis.com/v1/places:searchNearby';
    
    const searchResponse = await fetch(searchUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'places.id,places.displayName,places.formattedAddress,places.location,places.rating,places.userRatingCount,places.photos'
      },
      body: JSON.stringify({
        includedTypes: ['dentist'],
        maxResultCount: 20,
        locationRestriction: {
          circle: {
            center: {
              latitude: lat,
              longitude: lng
            },
            radius: radius
          }
        }
      })
    });

    const searchData = await searchResponse.json();

    if (!searchData.places || searchData.places.length === 0) {
      return NextResponse.json({
        success: true,
        count: 0,
        dentists: [],
      });
    }

    console.log(`Found ${searchData.places.length} dentists, fetching details...`);

    // Fetch Place Details for each dentist to get phone numbers
    // Using field masking to only get phone number (cheap!)
    const dentistsWithDetails = await Promise.all(
      searchData.places.slice(0, 20).map(async (place: any) => {
        try {
          // Extract just the place ID from the full resource name
          const placeId = place.id.split('/').pop();
          const detailsUrl = `https://places.googleapis.com/v1/places/${placeId}`;
          
          const detailsResponse = await fetch(detailsUrl, {
            method: 'GET',
            headers: {
              'X-Goog-Api-Key': apiKey,
              'X-Goog-FieldMask': 'nationalPhoneNumber,internationalPhoneNumber'
            }
          });

          const details = await detailsResponse.json();
          
          console.log(`Phone for ${place.displayName?.text}:`, details.nationalPhoneNumber || details.internationalPhoneNumber || 'none');

          return {
            id: place.id,
            name: place.displayName?.text || 'Dentista',
            slug: (place.displayName?.text || 'dentista').toLowerCase().replace(/[^a-z0-9]+/g, '-'),
            neighborhood: neighborhood.charAt(0).toUpperCase() + neighborhood.slice(1).replace(/-/g, ' '),
            address: place.formattedAddress || '',
            phone: details.nationalPhoneNumber || details.internationalPhoneNumber || '',
            image: place.photos?.[0]?.name
              ? `https://places.googleapis.com/v1/${place.photos[0].name}/media?maxHeightPx=800&maxWidthPx=800&key=${apiKey}`
              : undefined,
            rating: place.rating || undefined,
            reviewCount: place.userRatingCount || undefined,
          };
        } catch (error) {
          console.error(`Error fetching details for ${place.displayName?.text}:`, error);
          // Return basic info without phone if details fetch fails
          return {
            id: place.id,
            name: place.displayName?.text || 'Dentista',
            slug: (place.displayName?.text || 'dentista').toLowerCase().replace(/[^a-z0-9]+/g, '-'),
            neighborhood: neighborhood.charAt(0).toUpperCase() + neighborhood.slice(1).replace(/-/g, ' '),
            address: place.formattedAddress || '',
            phone: '',
            image: place.photos?.[0]?.name
              ? `https://places.googleapis.com/v1/${place.photos[0].name}/media?maxHeightPx=800&maxWidthPx=800&key=${apiKey}`
              : undefined,
            rating: place.rating || undefined,
            reviewCount: place.userRatingCount || undefined,
          };
        }
      })
    );

    console.log(`Successfully processed ${dentistsWithDetails.length} dentists`);

    return NextResponse.json({
      success: true,
      count: dentistsWithDetails.length,
      dentists: dentistsWithDetails,
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    );
  }
}