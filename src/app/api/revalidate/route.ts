import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret');
  const { _type } = await req.json();

  if (secret !== process.env.SANITY_SECRET_TOKEN) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  try {
    let pathsToRevalidate: string[] = [];

    switch (_type) {
      case 'faq':
        pathsToRevalidate.push('/faq');
        break;
      case 'insightArticle':
        pathsToRevalidate.push('/insights', '/'); // Revalidate insights and home page
        break;
      default:
        return NextResponse.json({ message: 'Unknown type' }, { status: 400 });
    }

    // Revalidate all necessary paths
    for (const path of pathsToRevalidate) {
      revalidatePath(path);
    }

    return NextResponse.json({ revalidated: true });
  } catch (err) {
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 });
  }
}