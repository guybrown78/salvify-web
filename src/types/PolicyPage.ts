import { PortableTextBlock } from "sanity";

export type PolicyPage = {
	_id: string;
	_createdAt: Date;
	title: string;
	slug: string;
	order: number;
	content: PortableTextBlock[];
}