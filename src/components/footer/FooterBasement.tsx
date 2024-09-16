
import { Container } from "@/components/Container";
import { 
	FaXTwitter,
	FaLinkedinIn,
} from "react-icons/fa6"

const FooterBasement = () => {
	return (
		<div className="mt-4 border-t border-slate-200/50 bg-salvify-secondary" >
			<Container>
				<div className="flex items-center justify-between py-10">
					
						<p className="text-xs text-slate-300">
							Copyright &copy; {new Date().getFullYear()} Salvify. All&nbsp;rights&nbsp;reserved.
						</p>

						<div className="flex items-center justify-end space-x-4 text-xl">
							<a 
								href="https://linkedin.com/company/salvify" 
								target="_blank" 
								className="text-slate-300 hover:text-salvify-primary transition"
								aria-label="Salvify on LinkedIn">
									<FaLinkedinIn />
								</a>
							
						</div>
					</div>
			</Container>
		</div>
	)
}

export default FooterBasement