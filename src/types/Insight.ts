import { PortableTextBlock } from "sanity";
import { Author } from "./Author";
import { Category } from "./Category";
import { Tag } from "./Tag";
import { Resource } from "./Resource";

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
	resources:Resource[];
	categories:Category[];
	publishedAt: Date;
	estimatedReadingTime:Number;
	body: PortableTextBlock[];
}