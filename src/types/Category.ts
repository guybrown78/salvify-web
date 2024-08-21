
import { PortableTextBlock } from "sanity";
import { Insight } from "./Insight";

export type Category = {
	_id: string;
	_createdAt: Date;
	title: string;
	slug: string;
	description: PortableTextBlock[];
	metaDescription:string,
	keywords:string,
	insights?:Insight[]
}