import React from 'react'
import { getProjects } from "@/sanity/sanity-utils";
import Link from 'next/link';

const ProjectPage = async () => {

	const projects = await getProjects()

	return (
		<div>
			<ul>
				{
					projects?.map(project => <li key={project._id}>
						<Link href={`/projects/${project.slug}`}>{project.name}</Link>
					</li>)
				}
			</ul>
		</div>
	)
}

export default ProjectPage