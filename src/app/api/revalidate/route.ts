import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(req: NextRequest) {
	// console.log(req.json())
	
  const { _type, secret } = await req.json();
	console.log('Headers:', req.headers);
	console.log('Content-Type:', req.headers.get('content-type'));
	console.log('Raw Body:', await req.text());
	console.log(_type, secret, process.env.SANITY_SECRET_TOKEN, secret === process.env.SANITY_SECRET_TOKEN)
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