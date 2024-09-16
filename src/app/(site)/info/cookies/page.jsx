
import { Container } from '@/components/Container'
import { Footer } from '@/components/footer/Footer'
import { Header } from '@/components/Header'


export default function Home() {
  return (
    <>
      <Header />
      <main>
				<section
					id="cookies"
					aria-label="Cookie Policy"
					className="py-20 sm:py-32"
				>
					<Container>
						<div className="mx-auto max-w-7xl px-6 lg:px-8">
							<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none space-y-4">
								<h2 className='text-lg font-bold'>Cookie Policy for Salvify.co.uk</h2>
								<p>Last updated: September 2023</p>

								<h3 className='font-semibold'>1. Introduction</h3>
								<p>Welcome to Salvify.co.uk. This website is owned and operated by Salvify (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). We use cookies and similar technologies on our website to enhance your browsing experience. This Cookie Policy explains how we use cookies, what types of cookies we use, and your choices regarding cookies. By using our website, you consent to the use of cookies as described in this policy.</p>

								<h3 className='font-semibold'>2. What Are Cookies?</h3>
								<p>Cookies are small text files that are placed on your device (computer, smartphone, tablet) when you visit a website. They are widely used to make websites work more efficiently, improve user experiences, and provide information to website owners.</p>
								<h3 className='font-semibold'>3. How We Use Cookies</h3>
								<p>We use cookies for various purposes, including but not limited to:</p>
								<p>Essential Cookies: These cookies are necessary for the website to function properly. They enable core functionality such as page navigation and access to secure areas of the website.</p>
								<p>Analytical/Performance Cookies: These cookies help us understand how visitors use our website, allowing us to improve its performance. They collect information about how visitors interact with the website, such as which pages are visited most frequently.</p>
								<p>Functionality Cookies: These cookies enhance your user experience by remembering your preferences and choices. For example, they may remember your language preferences or username.</p>
								<p>Targeting/Advertising Cookies: These cookies are used to deliver advertisements that are relevant to you and your interests. They may also limit the number of times you see an ad and help measure the effectiveness of advertising campaigns.</p>


								<h3 className='font-semibold'>4. Types of Cookies We Use</h3>
								<p>Session Cookies: These cookies are temporary and are deleted from your device when you close your browser.</p>		
								<p>Persistent Cookies: These cookies remain on your device for a specified period or until you manually delete them.</p>

								<h3 className='font-semibold'>5. Your Choices Regarding Cookies</h3>
								<p>You can manage your cookie preferences by adjusting your browser settings. Most web browsers allow you to accept or reject cookies, as well as delete existing cookies. Please note that if you choose to disable cookies, some features of our website may not function properly.</p>

								<h3 className='font-semibold'>6. Third-Party Cookies</h3>
								<p>We may also use third-party cookies provided by trusted partners for analytics, advertising, and other purposes. These cookies are subject to the privacy policies of these third parties.</p>

								<h3 className='font-semibold'>7. Changes to this Cookie Policy</h3>
								<p>We may update this Cookie Policy to reflect changes in our use of cookies or legal requirements. Please check this page periodically for updates.</p>

								<h3 className='font-semibold'>8. Contact Us</h3>
								<p>If you have any questions or concerns about our Cookie Policy, please contact us at info@salvify.co.uk.</p>
							</div>
						</div>
					</Container>
				</section>
      </main>
      <Footer />
    </>
  )
}