import { Project } from "@/types/Project";
import { Page } from "@/types/Page";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Insight } from "@/types/Insight";
import { PolicyPage } from "@/types/PolicyPage";
import { Category } from "@/types/Category";
import { Faq } from "@/types/Faq";
import { Feature, FeatureMenuItem } from "@/types/Feature";
import type { IndustrySolution, IndustrySolutionMenuItem } from '@/types/IndustrySolution'
import { Testimonial } from "@/types/Testimonial";

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

// FEATURES
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
	heroVisual,
	heroComponentKey,
	"heroSvg": { "url": heroSvg.asset->url, "alt": heroSvg.alt },
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

	ctaTitle,
	ctaBody,

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

// USE CASES
export const useCaseBySlugQuery = groq`*[_type == "useCase" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  template,

  // Hero
  "heroEyebrow": coalesce(heroEyebrow, "Use case"),
  "heroTitle": coalesce(heroTitle, title),
  heroSubTitle,
  overview,
  heroVisual,
  heroComponentKey,
  "heroSvg": { "url": heroSvg.asset->url, "alt": heroSvg.alt },
  "heroImage": { "url": heroImage.asset->url, "alt": heroImage.alt },

  // Problem / Challenge
  "problemEyebrow": coalesce(problemEyebrow, "Why this matters"),
  problemTitle,
  problemIntro,
  problemPoints,
  "problemImage": { "url": problemImage.asset->url, "alt": problemImage.alt },
  problemComponentKey,

  // How Salvify helps
  howItWorks,
  howVisual,
  howComponentKey,
  "howImage": { "url": howImage.asset->url, "alt": howImage.alt },

  // Benefits (reuse Benefit library)
  benefitsIntro,
  benefits[]{
    useCaseBenefitTitle,
    benefit->{ _id, title, statement, icon }
  },

  // Who it’s for
	audiencesTitle,
  audiencesIntro,
  audiences,

  // Related content (use cases + features)
  relatedContent[]->{
    _type,
    _id,
    title,
    "slug": slug.current,
    // for menu cards
    "label": coalesce(menuLabel, title),
    menuIcon,
    menuDescription
  },

  // CTA
  "ctaTitle": coalesce(ctaTitle, "Ready to simplify your inventory?"),
  ctaBody,

  // SEO
  metaDescription,
  keywords,
  publishedAt
}`

// Menu list (same ordering approach as Features)
export const useCasesMenuQuery = groq`
  *[_type == "useCase" && defined(slug.current) && coalesce(inMenu, true)]
  | order(coalesce(menuOrder, 100) asc, coalesce(menuLabel, title) asc)
  {
    _id,
    "slug": slug.current,
    "label": coalesce(menuLabel, title),
    template,
    menuOrder,
    menuIcon,
    menuDescription
  }
`

// Lightweight list (for indexes/sitemaps/admin)
export const useCasesListQuery = groq`
  *[_type == "useCase"]{
    _id,
    title,
    "slug": slug.current,
    publishedAt
  } | order(coalesce(menuOrder, 100) asc, title asc)
`

// Helpers (match your Feature helpers style)
export async function getUseCasesMenu() {
  return createClient(clientConfig).fetch(useCasesMenuQuery)
}

export async function getUseCases() {
  return createClient(clientConfig).fetch(useCasesListQuery)
}

export async function getUseCase(slug: string) {
  return createClient(clientConfig).fetch(useCaseBySlugQuery, { slug })
}



// INDUSTRY SOLUTIONS
export const industrySolutionBySlugQuery = groq`*[_type == "industry-solution" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,

	// Linked base industry
  industryRef->{ _id, title, "slug": slug.current },

  // Navigation
  inMenu,
  menuLabel,
  menuIcon,
  menuDescription,
  menuOrder,

  // Hero
  "heroEyebrow": coalesce(heroEyebrow, "Industry"),
  "heroTitle": coalesce(heroTitle, title),
  heroSubTitle,
  overview,
  "heroImage": { "url": heroImage.asset->url, "alt": heroImage.alt },

  // Regulatory / context
  regulatoryContext,

  // Challenges
  challengesTitle,
  challenges[]{ title, summary },

  // How Salvify Helps
  helpTitle,
  helpBlocks[]{
    title,
    summary,
    featureRef->{ _id, title, "slug": slug.current }
  },

  // Benefits (reuse Benefit library)
  benefitsIntro,
  industryBenefits[]{
    industryBenefitTitle,
    benefit->{ _id, title, statement, icon },
    featureRef->{ _id, title, "slug": slug.current }
  },

  // Feature Highlights
  featureHighlights[]->{ _id, title, "slug": slug.current },

  // Related Use Cases / Features
  // relatedContent[]->{
  //   _type,
  //   _id,
  //   title,
  //   "slug": slug.current,
  //   // for menu cards
  //   "label": coalesce(menuLabel, title),
  //   menuIcon,
  //   menuDescription
  // },

  // Operational Flow
  flowTitle,
  operationalSteps[]{ stepTitle, stepBody },

  // Impact Stats
  impactStats[]{ value, label, note },

  // Proof
  testimonials[]->{
    _id,
    quote,
    author,
    role,
    organisation
  },
  // caseStudies[]->{
  //   _id,
  //   title,
  //   "slug": slug.current,
  //   summary
  // },

  // CTA
  "ctaTitle": coalesce(ctaTitle, "Ready to simplify medicine management for your team?"),
  ctaBody,

  // SEO
  metaDescription,
  keywords,
  noindex,
  "ogImage": { "url": ogImage.asset->url, "alt": ogImage.alt },
  publishedAt
}`


export const industrySolutionsMenuQuery = groq`
  *[_type == "industry-solution" && defined(slug.current) && coalesce(inMenu, true)]
  | order(coalesce(menuOrder, 100) asc, coalesce(menuLabel, title) asc)
  {
    _id,
    "slug": slug.current,
    "label": coalesce(menuLabel, title),
    menuOrder,
    menuIcon,
    menuDescription
  }
`

export const industrySolutionsListQuery = groq`
  *[_type == "industry-solution"]{
    _id,
    title,
    "slug": slug.current,
    publishedAt
  } | order(coalesce(menuOrder, 100) asc, title asc)
`

export async function getIndustrySolutionsMenu() {
  return createClient(clientConfig).fetch(industrySolutionsMenuQuery)
}

export async function getIndustrySolutions() {
  return createClient(clientConfig).fetch(industrySolutionsListQuery)
}

export async function getIndustrySolution(slug: string) {
  return createClient(clientConfig).fetch(industrySolutionBySlugQuery, { slug })
}



// Single list (for admin, pages, or feed)
export const testimonialsListQuery = groq`
  *[_type == "testimonial"]{
    _id,
    author,
    message,
    role,
    company,
    companyUrl,
    "industry": industry[]->{
      _id,
      title,
      "slug": slug.current
    },
    publishedAt
  } | order(coalesce(publishedAt, _createdAt) desc)
`

export async function getTestimonials(): Promise<Testimonial[]> {
  return createClient(clientConfig).fetch(testimonialsListQuery)
}

// Filter by linked Industry (optional helper)
export const testimonialsByIndustryIdQuery = groq`
  *[_type == "testimonial" && $industryId in industry[]._ref]{
    _id,
    author,
    message,
    role,
    company,
    companyUrl,
    "industry": industry[]->{
      _id,
      title,
      "slug": slug.current
    },
    publishedAt
  } | order(coalesce(publishedAt, _createdAt) desc)[0...$limit]
`

export async function getTestimonialsByIndustryId(industryId: string, limit = 6): Promise<Testimonial[]> {
  return createClient(clientConfig).fetch(testimonialsByIndustryIdQuery, { industryId, limit })
}