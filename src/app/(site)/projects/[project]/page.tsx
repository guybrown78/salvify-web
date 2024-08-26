import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
	params: { project:string }
}

const ProjectPage = async ({ params }:Props) => {

	const slug = params.project;
	const project = await getProject(slug)


	return (
		<div className="max-w-5xl mx-auto w-full py-10">

			<header className="flex justify-between items-center">
				<h1 className="mt-2 bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent text-3xl drop-shadow-md font-extrabold mr-10">{project.name}</h1>
				<a href={project.url} title="View Project" target="_blank" rel="noopener noreferrer" className="bg-green-100 rounded-lg text-salvify-primary font-bold py-3 px-4 whitespace-nowrap cursor-pointer hover:bg-green-300 hover:text-green-900 transition">View Project</a>
			</header>


			<div className="mt-5 prose prose-slate lg:prose-lg">
				<PortableText value={project.content} />
			</div>

			<Image 
				src={project.image}
				alt={project.name}
				width={1920}
				height={1080}
				className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
			/>
		</div>
	)
}

export default ProjectPage