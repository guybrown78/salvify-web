'use client'

import clsx from "clsx"
import React from 'react'
import { usePathname } from 'next/navigation'
import { FaChevronRight } from 'react-icons/fa6'
import Link from "next/link"

type Props = {}
export default function InsightBreadcrumbs({  }:Props){

	const paths = usePathname()
	const pathNames = paths.split('/').filter( path => path )
	const listClasses = "font-medium text-slate-500"
	const activeClasses = "font-semibold text-slate-600"

	const pages = pathNames.map((link, index) => {
		let href = `/${pathNames.slice(0, index + 1).join('/')}`
		let current = paths === href;
		let itemClasses = paths === href ? `${listClasses} ${activeClasses}` : listClasses
		return {
			name:link,
			href,
			id:index,
			itemClasses,
			current
		}
	})
	// remove the first element (insights)
	pages.shift();

	return(
		<div className="mb-4">
			<nav className="relative flex" aria-label="Breadcrumb">
				<ol role="list" className="flex items-center space-x-1 sm:space-x-4">
					<li>
						<div className="flex items-center">
							<Link href="/insights" className="text-xs font-semibold text-salvify-primary hover:text-salvify-primary/50">
								<span className="hidden sm:inline">Salvify </span>Insights
							</Link>
						</div>
					</li>
					{pages.map((page) => {
						return (
							<React.Fragment key={page.id}>
								<li className="flex">
									<div className="flex items-center">
										<FaChevronRight className="h-2 w-2 flex-shrink-0 text-slate-400" aria-hidden="true" />
										<Link
											href={page.href}
											className={clsx('flex-auto overflow-hidden ml-1 sm:ml-4 text-xs hover:text-slate-700', page.itemClasses)}
											aria-current={page.current ? 'page' : undefined}
										>
											<span className="inline max-w-full overflow-hidden text-ellipsis">{page.name}</span>
										</Link>
									</div>
								</li>
							</React.Fragment>
						
					)})}
				</ol>
			</nav>
		</div>
	)
}