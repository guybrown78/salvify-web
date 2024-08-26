import { PortableTextBlock } from "sanity";
import { Author } from "./Author";
import { Category } from "./Category";
import { Tag } from "./Tag";

export type Insight = {
	_id: string;
	_createdAt: Date;
	title: string;
	subTitle?: string;
	slug: string;
	overview:PortableTextBlock[];
	metaDescription:string,
	keywords:string,
	author:Author,
	coverImage: string;
	insightImage: string;
	tags:Tag[];
	categories:Category[]
	publishedAt: Date;
	estimatedReadingTime:Number;
	body: PortableTextBlock[];
}