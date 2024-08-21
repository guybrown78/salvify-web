
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from './src/sanity/schemas';

const config = defineConfig({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,

	dataset:  process.env.NEXT_PUBLIC_SANITY_DATASET as string,


	title: "Salvify Website",

	useCdn: true,

	apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION as string,

	basePath: "/admin",

	plugins: [deskTool()],

	schema: { types: schemas }

})

export default config;	