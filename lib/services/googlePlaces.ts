interface PlaceResult {
  place_id: string;
  name: string;
  vicinity: string;
  formatted_address?: string;
  rating?: number;
  user_ratings_total?: number;
  photos?: Array<{
    photo_reference: string;
  }>;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
}

interface DentistSearchParams {
  location: string;
  radius?: number;
}

// Predefined coordinates for Miami neighborhoods
const NEIGHBORHOOD_COORDS: Record<string, { lat: number; lng: number }> = {
  'Hialeah': { lat: 25.8576, lng: -80.2781 },
  'Kendall': { lat: 25.6790, lng: -80.3173 },
  'Doral': { lat: 25.8195, lng: -80.3553 },
  'Brickell': { lat: 25.7617, lng: -80.1918 },
  'Coral Gables': { lat: 25.7217, lng: -80.2683 },
  'Sweetwater': { lat: 25.7623, lng: -80.3731 },
  'Little Havana': { lat: 25.7654, lng: -80.2201 },
  'Westchester': { lat: 25.7545, lng: -80.3370 },
  'Miami Beach': { lat: 25.7907, lng: -80.1300 },
  'Downtown Miami': { lat: 25.7743, lng: -80.1937 },
  'Aventura': { lat: 25.9565, lng: -80.1390 },
  'Coconut Grove': { lat: 25.7282, lng: -80.2436 },
};

export async function searchDentists({ location, radius = 5000 }: DentistSearchParams) {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY || process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;
  
  if (!apiKey) {
    throw new Error('Google Places API key not configured');
  }

  try {
    // Get coordinates for the neighborhood
    const coords = NEIGHBORHOOD_COORDS[location] || NEIGHBORHOOD_COORDS['Downtown Miami'];
    const { lat, lng } = coords;

    console.log(`Searching for dentists near ${location} (${lat}, ${lng})`);

    // Use the Nearby Search endpoint
    const searchUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius}&type=dentist&keyword=dentista&key=${apiKey}`;
    
    const searchResponse = await fetch(searchUrl);
    const searchData = await searchResponse.json();

    console.log('Google Places API Response Status:', searchData.status);

    if (searchData.status === 'ZERO_RESULTS') {
      console.log('No dentists found in this area');
      return [];
    }

    if (searchData.status !== 'OK') {
      console.error('Google Places API Error:', searchData);
      throw new Error(`Places API error: ${searchData.status} - ${searchData.error_message || 'Unknown error'}`);
    }

    console.log(`Found ${searchData.results.length} dentists`);
    return searchData.results as PlaceResult[];
    
  } catch (error) {
    console.error('Error searching dentists:', error);
    throw error;
  }
}

export async function getDentistDetails(placeId: string) {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY || process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;
  
  if (!apiKey) {
    throw new Error('Google Places API key not configured');
  }

  try {
    const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,formatted_address,formatted_phone_number,rating,user_ratings_total,website,photos,opening_hours,reviews&key=${apiKey}`;
    
    const response = await fetch(detailsUrl);
    const data = await response.json();

    if (data.status !== 'OK') {
      throw new Error(`Places Details API error: ${data.status}`);
    }

    return data.result;
  } catch (error) {
    console.error('Error fetching dentist details:', error);
    throw error;
  }
}

export function getPhotoUrl(photoReference: string, maxWidth: number = 400): string {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY || process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;
  return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${maxWidth}&photo_reference=${photoReference}&key=${apiKey}`;
}

// Convert Google Places result to our Dentist type
export function convertPlaceToDentist(place: PlaceResult, neighborhood: string) {
  // Extract city/neighborhood from vicinity if available
  const addressParts = (place.vicinity || place.formatted_address || '').split(',');
  const city = addressParts[1]?.trim() || neighborhood;

  return {
    id: place.place_id,
    name: place.name,
    slug: place.place_id, // Use place_id as slug for now
    neighborhood: city,
    address: place.vicinity || place.formatted_address || '',
    phone: '',
    rating: place.rating,
    reviewCount: place.user_ratings_total,
    image: place.photos?.[0]
      ? getPhotoUrl(place.photos[0].photo_reference, 800)
      : undefined,
    // Defaults - would need Place Details API call to get more info
    speaksSpanish: true,
    acceptsMedicaid: false,
    emergencies: false,
    featured: false,
  };
}