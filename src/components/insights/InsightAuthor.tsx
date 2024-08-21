import Image from "next/image"
import { FaLinkedin } from "react-icons/fa6";

type Props = {
	name:string,
	role:string,
	imageURL:string,
	linkedinURL:string
}
export default function InsightAuthor({ name, role, imageURL, linkedinURL }:Props){

	return(
		<div className="group block flex-shrink-0">
			<div className="flex items-center">
				<div>
					<Image 
						src={imageURL}
						alt={name}
						width={950}
						height={512}
						className="inline-block h-9 w-9 rounded-full object-cover"
					/>
				</div>
				<div className="ml-3">
					<p className="text-sm font-medium text-slate-700 flex items-center">{ name } 
						<span className="ml-1">
							<a href={linkedinURL} target="_blank" className="text-slate-500 text-sm hover:text-green-500 transition">
								<FaLinkedin />
							</a>
						</span>
					</p>
					<p className="text-xs font-medium text-slate-400 ">{ role }</p>
				</div>
				<div className="ml-3 ">
					
					
				</div>
			</div>
		</div>
	)
}