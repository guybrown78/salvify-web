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
			className={clsx("inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20", className)}>
				#{title}
			</div>
	)
}