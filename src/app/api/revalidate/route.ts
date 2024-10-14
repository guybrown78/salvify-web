

import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret');
  const pathToRevalidate = req.nextUrl.searchParams.get('path');

  if (secret !== process.env.SANITY_SECRET_TOKEN) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  try {
    if (typeof pathToRevalidate === 'string') {
      await res.revalidate(pathToRevalidate);
      return NextResponse.json({ revalidated: true });
    } else {
      return NextResponse.json({ message: 'Invalid path' }, { status: 400 });
    }
  } catch (err) {
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 });
  }
}

