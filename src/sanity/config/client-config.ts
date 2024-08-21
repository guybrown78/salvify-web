

const config = {
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,

	dataset:  process.env.NEXT_PUBLIC_SANITY_DATASET as string,
	
	useCdn: true,

	apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION as string,
};

export default config