import clsx from "clsx"

type Props = {
	title:string,
	description:string,
	className?:string,
}
export default function InsightTag({ title, description, className }:Props){

	return(
		<div 
			title={`#${title} | ${description}`} 
			className={clsx("inline-flex items-center rounded-full bg-salvify-primary/10 px-2 py-1 text-xs font-medium text-salvify-primary ring-1 ring-inset ring-salvify-primary/20", className)}>
				#{title}
			</div>
	)
}