import {NextRequest} from 'next/server';
import {iMotorcycle} from '@/interfaces/iMotorcycle.ts';

export async function GET(
  _request: NextRequest,
  {params}: {params: Promise<{motorcycleMake: string}>}
) {
  const make = (await params).motorcycleMake;

  const url = `https://api.api-ninjas.com/v1/motorcycles?make=${encodeURIComponent(
    make
  )}`;

  const response = await fetch(url, {
    headers: {
      'X-Api-Key': process.env.API_NINJAS_KEY!,
    },
    next: {
      revalidate: 60 * 60,
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('API Ninjas error:', errorText);

    return new Response('Failed to fetch motorcycles', {
      status: response.status,
    });
  }

  const motorcycles: iMotorcycle[] = await response.json();
  const headers = {'Content-Type': 'application/json'};

  return new Response(JSON.stringify(motorcycles), {
    status: 200,
    headers,
  });
}
