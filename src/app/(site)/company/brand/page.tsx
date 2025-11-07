import { Container } from '@/components/Container'
import { ContentH2, ContentH3 } from '@/components/content/Titles'
import { ContentP, ContentStack } from '@/components/content/Typography'
import { HeroH1, HeroH2 } from '@/components/hero'
import { Logo } from '@/components/Logo'
import Script from 'next/script'
import React from 'react'

const BrandGuidlinePage = () => {
  return (
    <main role="main">
			
      <Container>
        <section
          id="brand-guidlines-hero"
          aria-labelledby="brand-guidlines-hero"
          className="py-12 lg:py-16"
        >
          <HeroH1 title="Brand Guidelines" />
          <HeroH2 subTitle="Resources and guidance for using the Salvify brand with confidence and consistency." />
        </section>

 				{/* OVERVIEW */}
				<section id="brand-overview" className="py-12 sm:py-16">
					<ContentH2 title="Brand Overview" />
					<ContentStack>
						<ContentP>
							Salvify empowers medical professionals by simplifying medicine management and compliance through intuitive, reliable digital tools. Our purpose is to give healthcare teams confidence in care by reducing administrative burden and preventing waste.
						</ContentP>
						<ContentP>
							Every partner and collaborator plays a part in maintaining that trust. These guidelines ensure Salvify is presented with the same professionalism, empathy, and clarity that define our platform and our people.
						</ContentP>
					</ContentStack>
				</section>

        {/* INTRODUCTION */}
        <section id="brand-introduction" className="py-12 sm:py-16">
          <ContentH2 title="Our Brand" />
          <ContentStack>
            <ContentP>
             	Salvify stands for clarity, care, and confidence, ensuring medical professionals can work with precision and peace of mind. These guidelines exist to help our partners, suppliers, and collaborators use the Salvify brand correctly and consistently, wherever it appears.
            </ContentP>
            <ContentP>
              Whether you&apos;re creating documentation, web content, or printed
              materials, this page provides the approved logos, colours, and
              usage examples to maintain a clear, trustworthy identity across
              every interaction.
            </ContentP>
          </ContentStack>
        </section>

				{/* CORE VALUES */}
				<section id="brand-values" className="py-12 sm:py-16">
					<ContentH2 title="Core Values" />
					<ul className="mt-6 list-disc list-inside text-ink/80 space-y-2">
						<li><strong>Efficiency:</strong> Streamlining processes to save time and reduce risk.</li>
						<li><strong>Compassion:</strong> Designing with empathy for frontline realities.</li>
						<li><strong>Reliability:</strong> Building dependable, consistent tools that professionals can trust.</li>
						<li><strong>Clarity:</strong> Communicating and designing with transparency and simplicity.</li>
						<li><strong>Innovation:</strong> Continuously evolving with predictive, AI-driven insights.</li>
					</ul>
				</section>

				{/* CORE VALUES */}
				<section id="brand-tagline" className="py-12 sm:py-16">
				<ContentH2 title="Tagline and Messaging" />
					<ContentStack>
						<ContentP>
							Our tagline <strong>“Confidence in Care”</strong> is the cornerstone of all brand communication. Use it to reinforce trust and professionalism, never as a slogan or filler.
						</ContentP>
						{/* <ContentP>
							For extended copy, you may use: <em>“Confidence in Care – your trusted digital partner in medicine management.”</em>
						</ContentP> */}
					</ContentStack>
				</section>

        {/* LOGOS */}
        <section id="brand-logos" className="py-12 sm:py-16">
          <ContentH2 title="Logo Usage" />
          <ContentH3
            title="Primary and alternative versions"
            color="ink"
            weight="normal"
          />
          <ContentP>
            Our primary logo should be used wherever possible. It&apos;s default
            appearance colors are two-tone 
            <span className="font-mono">(brand/teal and ink)</span> on light
            backgrounds, or as 
            <span className="font-mono">(brand/teal and white)</span> on dark
            backgrounds.
          </ContentP>
          <ContentP>
            The logo can also be used as a flat colour, generally as 
            <span className="font-mono">(White)</span> on black/dark/brand
            backgrounds or <span className="font-mono">(Black)</span> on
            white/light backgrounds
          </ContentP>
          <ContentP>
            The symbol may be used independently when space is limited.
          </ContentP>

          <div className="my-4 flex w-full flex-col items-center justify-center gap-6 sm:flex-row sm:flex-wrap">
            <div className="flex-inline sm:p-18 w-full min-w-96 bg-white p-12 sm:max-w-96">
              <Logo />
            </div>
            <div className="flex-inline sm:p-18 w-full min-w-96 bg-ink p-12 sm:max-w-96">
              <Logo palette="dark" />
            </div>
            <div className="flex-inline sm:p-18 w-full min-w-96 bg-black p-12 sm:max-w-96">
              <Logo palette="dark" />
            </div>
            <div className="flex-inline sm:p-18 w-full min-w-96 bg-surface p-12 sm:max-w-96">
              <Logo palette="default" />
            </div>
            <div className="flex-inline sm:p-18 w-full min-w-96 bg-surface-muted p-12 sm:max-w-96">
              <Logo palette="default" />
            </div>
            <div className="flex-inline sm:p-18 w-full min-w-96 bg-brand-500 p-12 sm:max-w-96">
              <Logo palette="white" />
            </div>
            <div className="flex-inline sm:p-18 w-full min-w-96 bg-white p-12 sm:max-w-96">
              <Logo palette="black" />
            </div>
          </div>

          <ul className="mt-8 list-inside list-disc text-ink/80">
            <li>Maintain clear space equal to the height of the “S”.</li>
            <li>Do not alter colours, proportions, or rotate the logo.</li>
            <li>
              Do not apply effects or place the logo on complex backgrounds.
            </li>
          </ul>

          <div className="mt-10">
            <a
              href="/assets/salvify-brand-assets.zip"
              className="hover:bg-brand-600 inline-flex items-center rounded-xl bg-brand-500 px-5 py-3 font-semibold text-white transition"
            >
              Download logo pack
            </a>
          </div>
        </section>

        {/* COLOURS */}
        <section id="brand-colours" className="py-12 sm:py-16">
          <ContentH2 title="Colour Palette" />
          <ContentP>
            Salvify&apos;s colours reflect our focus on clarity and clinical
            confidence. The teal primary stands for safety and reliability,
            supported by neutral inks for balance.
          </ContentP>

          {/* <VisualHolder>
      Display brand-500, brand-700, ink, and surface swatches with hex codes.
    </VisualHolder> */}
          <div className="my-4 flex w-full flex-col items-center justify-center gap-6 text-center font-brand text-xl font-extrabold sm:flex-row sm:flex-wrap">
            <div className="flex-inline sm:p-18 w-full min-w-96 rounded-sm bg-brand-500 p-12 sm:max-w-96">
              <p className="text-white">Brand (brand-500)</p>
            </div>
            <div className="flex-inline sm:p-18 w-full min-w-96 rounded-sm bg-ink p-12 sm:max-w-96">
              <p className="text-white">Ink</p>
            </div>
            <div className="flex-inline sm:p-18 w-full min-w-96 rounded-sm bg-surface p-12 sm:max-w-96">
              <p className="text-fg">Surface</p>
            </div>
            <div className="flex-inline sm:p-18 w-full min-w-96 rounded-sm bg-surface-muted p-12 sm:max-w-96">
              <p className="text-fg">Surface-Muted</p>
            </div>
            <div className="flex-inline sm:p-18 w-full min-w-96 rounded-sm bg-brand-700 p-12 sm:max-w-96">
              <p className="text-white">Dark-Surface (brand-700)</p>
            </div>

            <div className="flex-inline sm:p-18 w-full min-w-96 rounded-sm bg-accent p-12 sm:max-w-96">
              <p className="text-white">Accent</p>
            </div>
          </div>

          <div className="flex flex-col justify-evenly sm:flex-row">
            <div>
          
              <h5 className="mt-8 text-sm font-extrabold uppercase">Primary</h5>
              <ul className="mt-2 space-y-2">
                <li>
                  <div className="inline-flex">
                    <div className="mr-2 size-6 bg-brand-500"></div>
                    <strong>Brand / Teal (brand-500)</strong>
                  </div>

                  <ul className="mb-1 ml-8 space-y-1 uppercase">
                    <li>Screen (RGB): R0 G187 B183</li>
                    <li>Process (CMYK): C73 M0 Y35 K0</li>
                    <li>Hex: #00bbb7</li>
                  </ul>
                </li>
                <li>
                  <div className="inline-flex">
                    <div className="mr-2 size-6 bg-ink"></div>
                    <strong>Ink</strong>
                  </div>
                  <ul className="mb-1 ml-8 space-y-1 uppercase">
                    <li>Screen (RGB): R23 G33 B68</li>
                    <li>Process (CMYK): C100 M91 Y42 K45</li>
                    <li>Hex: #172144</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="mt-8 text-sm font-extrabold uppercase">
                Secondary
              </h5>
              <ul className="mt-2 space-y-2">
                <li>
                  <div className="inline-flex">
                    <div className="mr-2 size-6 bg-surface"></div>
                    <strong>Surface</strong>
                  </div>

                  <ul className="mb-1 ml-8 space-y-1 uppercase">
                    <li>Screen (RGB): R240 G244 B248</li>
                    <li>Process (CMYK): C7 M3 Y2 K0</li>
                    <li>Hex: #f0f4f8</li>
                  </ul>
                </li>
                <li>
                  <div className="inline-flex">
                    <div className="mr-2 size-6 bg-surface-muted"></div>
                    <strong>Surface Muted</strong>
                  </div>
                  <ul className="mb-1 ml-8 space-y-1 uppercase">
                    <li>Screen (RGB): R223 G236 B239</li>
                    <li>Process (CMYK): C16 M2 Y6 K0</li>
                    <li>Hex: #dfecef</li>
                  </ul>
                </li>
                <li>
                  <div className="inline-flex">
                    <div className="mr-2 size-6 bg-brand-700"></div>
                    <strong>Dark Surface (brand-700)</strong>
                  </div>
                  <ul className="mb-1 ml-8 space-y-1 uppercase">
                    <li>Screen (RGB): R7 G130 B140</li>
                    <li>Process (CMYK): C84 M26 Y39 K10</li>
                    <li>Hex: #07828C</li>
                  </ul>
                </li>
                <li>
                  <div className="inline-flex">
                    <div className="mr-2 size-6 bg-accent"></div>
                    <strong>Accent</strong>
                  </div>
                  <ul className="mb-1 ml-8 space-y-1 uppercase">
                    <li>Screen (RGB): R237 G148 B114</li>
                    <li>Process (CMYK): C2 M52 Y57 K0</li>
                    <li>Hex: #ED9472</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          {/* <ContentP>
            Maintain strong contrast between text and background to meet WCAG AA
            accessibility standards.
          </ContentP> */}
        </section>

        {/* TYPOGRAPHY */}
        <section id="brand-typography" className="py-12 sm:py-16">
          <ContentH2 title="Typography" />
          <ContentStack>
            <ContentP>
              Salvify&apos;s typography combines approachability and clarity. Our
              primary font, <strong>Nunito</strong>, carries warmth and
              precision for headings and callouts. <strong>Poppins</strong> 
              complements it for body copy, ensuring readability across digital
              and print materials.
            </ContentP>

            <div className="mt-12 grid gap-12 md:grid-cols-2">
              {/* Nunito */}
              <div>
                <ContentH3 title="Primary Typeface: Nunito" color="ink" />
                <ContentP>
                  Used for headers and call-out text. Choose weights carefully
                  to match context and hierarchy.
                </ContentP>
                <ul className="mt-6 list-inside list-disc text-ink/80">
                  <li>
                    <span className="font-brand font-extrabold">
                      Nunito ExtraBold:
                    </span> Headers and key statements
                  </li>
                  <li>
                    <span className="font-brand font-normal">
                      Nunito Regular:
                    </span> Subheadings and accent text
                  </li>
                  <li>
                    <span className="font-brand font-light">Nunito Light:</span> Large display text or subtle highlights
                  </li>
                </ul>
                <ContentP className="mt-4 text-sm text-ink/60">
                  Available on Google Fonts: 
                  <a
                    href="https://fonts.google.com/specimen/Nunito"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-brand-500"
                  >
                    Nunito
                  </a>
                </ContentP>
                <div className="mt-6 rounded-lg bg-surface p-4">
                  <ContentP className="font-brand text-lg font-normal">
                    ABCDEFGHIJKLMNOPQRSTUVWXYZ
                    <br />
                    abcdefghijklmnopqrstuvwxyz
                    <br />
                    0123456789
                  </ContentP>
                </div>
              </div>

              {/* Poppins */}
              <div>
                <ContentH3 title="Secondary Typeface: Poppins" color="ink" />
                <ContentP className="mt-4 text-ink/80">
                  Used for body text and long-form content. Provides a clean,
                  professional foundation that pairs well with Nunito.
                </ContentP>
                <ul className="mt-6 list-inside list-disc text-ink/80">
                  <li>
                    <span className="font-normal">Poppins Regular:</span>
                    Default body text
                  </li>
                  <li>
                    <span className="font-semibold">Poppins SemiBold:</span>
                    Emphasis within paragraphs
                  </li>
                  <li>
                    <span className="font-light">Poppins Light:</span>
                    Supporting captions or secondary information
                  </li>
                </ul>
                <ContentP className="mt-4 text-sm text-ink/60">
                  Available on Google Fonts: 
                  <a
                    href="https://fonts.google.com/specimen/Poppins"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-brand-500"
                  >
                    Poppins
                  </a>
                </ContentP>
                <div className="mt-6 rounded-lg bg-surface p-4">
                  <ContentP className="font-[Poppins] text-lg font-normal">
                    ABCDEFGHIJKLMNOPQRSTUVWXYZ
                    <br />
                    abcdefghijklmnopqrstuvwxyz
                    <br />
                    0123456789
                  </ContentP>
                </div>
              </div>
            </div>

            <ContentP className="mt-12 text-sm text-ink/60">
              Always use these fonts from a trusted source. Avoid substitutions
              to maintain brand consistency and accessibility across platforms.
            </ContentP>
          </ContentStack>
        </section>

        {/* TONE OF VOICE */}
        <section id="brand-voice" className="py-12 sm:py-16">
          <ContentH2 title="Tone of Voice" />
          <ContentStack>
            <ContentP>
              Our voice is professional, empathetic, and clear, always focused on care, compliance, and confidence. We use plain English and communicate with empathy and authority.
            </ContentP>

            <ul className="mt-8 list-inside list-disc text-ink/80">
              <li>Use UK English spelling throughout.</li>
              <li>Be factual and concise; avoid buzzwords or exaggeration.</li>
              <li>
                Keep healthcare professionalism at the core of all messaging.
              </li>
              <li>Focus on clarity and reassurance over sales language.</li>
            </ul>
          </ContentStack>
        </section>

        {/* IMAGERY */}
        <section id="brand-imagery" className="py-12 sm:py-16">
          <ContentH2 title="Imagery and Illustration" />
          <ContentStack>
            <ContentP>
              Images should feel authentic, calm, and clinically relevant. Use
              natural lighting and avoid over-styled or generic stock
              photography. Illustrations should be clean, minimal, and reflect
              healthcare environments or digital workflows. Show real healthcare settings — equipment, teams, and moments of preparation — not staged or commercial poses.
            </ContentP>
          </ContentStack>
        </section>

   			{/* Iconography */}
        <section id="brand-icons" className="py-12 sm:py-16">
   				<ContentH2 title="Iconography" />
						<ContentStack>
							<ContentP>
								 Salvify uses outline icons from the <code>react-icons/hi2</code> Heroicons 2 set. Icons should be simple, consistent in stroke weight, and used to support meaning — never as decoration.
							</ContentP>
						</ContentStack>
        </section>

      </Container>
    </main>
  )
}

export default BrandGuidlinePage
