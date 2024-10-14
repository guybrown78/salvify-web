import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(req: NextRequest) {
  const { _type, secret } = await req.json();
  
  if (secret !== process.env.SANITY_SECRET_TOKEN) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  try {
    let pathToRevalidate = '';

    switch (_type) {
      case 'faq':
        pathToRevalidate = '/faq';
        break;
      case 'insightArticle':
        pathToRevalidate = '/insights';
        break;
      default:
        return NextResponse.json({ message: 'Unknown type' }, { status: 400 });
    }

    if (pathToRevalidate) {
      revalidatePath(pathToRevalidate);
      return NextResponse.json({ revalidated: true });
    } else {
      return NextResponse.json({ message: 'Invalid path' }, { status: 400 });
    }
  } catch (err) {
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 });
  }
}