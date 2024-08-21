import clsx from "clsx"
import { ReactNode } from "react"


type Props = {
	title:string,
	description?:string,
	className?:string,
	children?:ReactNode
}
export default function InsightCategory({ title, description, className, children }:Props){

	return(
		<div 
			title={description ? `${title} | ${description}` : title} 
			className={clsx("inline-flex items-center gap-x-0.5 rounded-md bg-slate-50 px-2 py-1 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-500/10", className)}>
				{title}
				{ children }
			</div>
	)
}