import { Project } from "@/types/Project";
import { Page } from "@/types/Page";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Insight } from "@/types/Insight";
import { PolicyPage } from "@/types/PolicyPage";
import { Category } from "@/types/Category";
import { Faq } from "@/types/Faq";
import { Feature, FeatureMenuItem } from "@/types/Feature";

export async function getProjects():Promise<Project[]> {
	return createClient(clientConfig).fetch(
		groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`
	)
}

export async function getProject(slug:string):Promise<Project> {
	return createClient(clientConfig).fetch(
		groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`, 
		{ slug }
	)
}


export async function getPages():Promise<Page[]> {
	return createClient(clientConfig).fetch(
		groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
    }`
	)
}
export async function getPage(slug:string):Promise<Page> {
	return createClient(clientConfig).fetch(
		groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
			content
    }`, 
		{ slug }
	)
}
export async function getPolicyPages():Promise<PolicyPage[]> {
	return createClient(clientConfig).fetch(
		groq`*[_type == "policyPage"]{
      _id,
      _createdAt,
      title,
			order,
      "slug": slug.current,
    }`
	)
}
export async function getPolicyPage(slug:string):Promise<PolicyPage> {
	return createClient(clientConfig).fetch(
		groq`*[_type == "policyPage" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
			content,
			updatedAt
    }`, 
		{ slug }
	)
}
export async function getInsights():Promise<Insight[]> {
	return createClient(clientConfig).fetch(
		groq`*[_type == "insightArticle"] | order(publishedAt desc){
      _id,
      _createdAt,
      title,
      "slug": slug.current,
			overview,
			publishedAt,
			"coverImage": coverImage.asset->url,
			author-> {
				name, 
				"image": image.asset->url
			},
			categories[]->{
				_id,
				title,
				"slug": slug.current,
			},
			tags[]->{
				_id,
				title,
				description
			},
			body
    }`
	)
}
export async function getLatestInsights():Promise<Insight[]> {
	return createClient(clientConfig).fetch(
		groq`*[_type == "insightArticle"]
    | order(publishedAt desc)
    [0..2]
		{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
			overview,
			publishedAt,
			"coverImage": coverImage.asset->url,
    }`
	)
}
export async function getMoreInsights(insight:Insight):Promise<Insight[]> {
	return createClient(clientConfig).fetch(
		// | slice(0, 3)
		// && count(categories[]._ref in $insightCategories) > 0
		groq`
			*[_type == 'insightArticle'  && _id != $insightID] 
			| order(publishedAt desc)
    	[0..2]
			{
				_id,
				_createdAt,
				title,
				"slug": slug.current,
				overview,
				"coverImage": coverImage.asset->url,
				publishedAt,
			}
		`, { 
			insightID: insight._id, 
			insightCategories: insight.categories 
		}
	)
}
export async function getInsight(slug:string):Promise<Insight> {
	return createClient(clientConfig).fetch(
		groq`*[_type == "insightArticle" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
			subTitle,
      "slug": slug.current,
			overview,
			publishedAt,
			"coverImage": coverImage.asset->url,
			"insightImage": insightImage.asset->url,
			author-> {
				name, 
				role,
				linkedin,
				"image": image.asset->url
			},
			categories[]->{
				_id,
				title,
				"slug": slug.current,
			},
			tags[]->{
				_id,
				title,
				description
			},
			"estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ),
			body,
			metaDescription,
			keywords,
			resources[]->{
				_id,
				title,
				domain,
				url
			},
    }`, 
		{ slug }
	)
}

export async function getCategories():Promise<Category[]> {
	return createClient(clientConfig).fetch(
		groq`*[_type == "category"]{
      _id,
      _createdAt,
      title,
			description,
      "slug": slug.current,
			"insights": *[_type == 'insightArticle' && references(^._id)] {
				_id,
				title,
				"slug": slug.current,
				publishedAt,
			}
    }`
	)
}

export async function getCategory(slug:string):Promise<Category> {
	return createClient(clientConfig).fetch(
		groq`
		*[_type == 'category' && slug.current == $slug][0] {
			_id,
			_createdAt,
			title,
			description,
			metaDescription,
			keywords,
			"insights": *[_type == 'insightArticle' && references(^._id)] {
				_id,
				title,
				"slug": slug.current,
				overview,
				publishedAt,
				"coverImage": coverImage.asset->url,
			}
		}`, 
		{ slug }
	)
}

export async function getFaqs():Promise<Faq[]> {
	return createClient(clientConfig).fetch(
		groq`*[_type == "faq"]{
      _id,
      _createdAt,
      question,
			answer
    }`
	)
}

export const featureBySlugQuery = 
groq`*[_type == "feature" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  template,

	heroEyebrow,
  "heroTitle": coalesce(heroTitle, title),
  "heroEyebrow": coalesce(heroEyebrow, "Platform feature"),
	heroSubTitle,
  overview,
  "heroImage": { "url": heroImage.asset->url, "alt": heroImage.alt },

	"problemEyebrow": coalesce(problemEyebrow, "Why this matters"),
	problemTitle,
	problemIntro,
	problemPoints,
	"problemImage": { "url": problemImage.asset->url, "alt": problemImage.alt },
	problemComponentKey,


	howItWorks,
	howVisual,
	howComponentKey,
	"howImage": { "url": howImage.asset->url, "alt": howImage.alt },


  benefitsIntro,
  benefits[]{
    featureBenefitTitle,
    benefit->{ _id, title, statement, icon }
  },

  body,
  metaDescription,
  keywords,
  publishedAt
}`;


export const featuresMenuQuery = groq`
	*[_type == "feature" && defined(slug.current) && coalesce(inMenu, true)]
	| order(coalesce(menuOrder, 100) asc, coalesce(menuLabel, title) asc)
	{
		_id,
		"slug": slug.current,
		"label": coalesce(menuLabel, title),
		template,
		menuOrder,  
		menuIcon,
  	menuDescription
	}`;

export async function getFeaturesMenu(): Promise<FeatureMenuItem[]> {
  return createClient(clientConfig).fetch(featuresMenuQuery);
}


export async function getFeatures():Promise<Feature[]> {
	return createClient(clientConfig).fetch(
		groq`*[_type == "feature"]{
      _id,
  title,
  subTitle,
  "slug": slug.current,
    }`
	)
}

export async function getFeature(slug: string):Promise<Feature> {
  return createClient(clientConfig).fetch(featureBySlugQuery, { slug });
}


