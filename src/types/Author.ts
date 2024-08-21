import { PortableTextBlock } from "sanity";

export type Author = {
	_id: string;
	_createdAt: Date;
	name: string;
	slug: string;
	role: string;
	image: string;
	linkedin: string;
	bio: PortableTextBlock[];
}