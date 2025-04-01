"use client"
import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Animation hooks for different sections
  const heroAnimation = useScrollAnimation()
  const purposeAnimation = useScrollAnimation()
  const servicesAnimation = useScrollAnimation()
  const clientGetAnimation = useScrollAnimation()
  const caseStudiesAnimation = useScrollAnimation()
  const faqAnimation = useScrollAnimation()
  const ctaAnimation = useScrollAnimation()

  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <header className="container mx-auto py-4 flex justify-between items-center relative z-50">
        <div className="font-bold text-2xl">TundraOps</div>
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="hover:text-[#ef4823] transition-colors font-bold">
            About
          </a>
          <a href="#services" className="hover:text-[#ef4823] transition-colors font-bold">
            Services
          </a>
          <a href="#case-studies" className="hover:text-[#ef4823] transition-colors font-bold">
            Case Studies
          </a>
          <a href="#contact" className="hover:text-[#ef4823] transition-colors font-bold">
            Contact
          </a>
        </nav>
        <Button variant="ghost" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg p-4 md:hidden z-50">
            <nav className="flex flex-col space-y-4">
              <a
                href="#about"
                className="hover:text-[#ef4823] transition-colors font-bold py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#services"
                className="hover:text-[#ef4823] transition-colors font-bold py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#case-studies"
                className="hover:text-[#ef4823] transition-colors font-bold py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Case Studies
              </a>
              <a
                href="#contact"
                className="hover:text-[#ef4823] transition-colors font-bold py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        ref={heroAnimation.ref}
        className={`container mx-auto py-12 md:py-16 transition-all duration-1000 ease-out ${
          heroAnimation.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
              GROWTH
              <br />
              AUTOMATION AGENCY
            </h1>
            <div className="flex flex-wrap gap-2 mt-6">
              <span className="text-sm border border-gray-300 rounded-full px-4 py-1">2023 Best Agency</span>
              <span className="text-sm border border-gray-300 rounded-full px-4 py-1">World Class Agency</span>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="aspect-video bg-gray-800 rounded-md overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <Button variant="ghost" className="rounded-full w-16 h-16 bg-white/10 backdrop-blur-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-play"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </Button>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-gray-600">
                The art of visual communication, creatively impacting the world around us-one good design at a time,
                design like you mean it!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What makes us special / Purpose Section */}
      <section
        ref={purposeAnimation.ref}
        className={`container mx-auto py-16 border-t border-gray-200 transition-all duration-1000 ease-out ${
          purposeAnimation.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          <div className="flex flex-col items-start">
            <div className="w-16 h-16 rounded-full border-2 border-[#ef4823] flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-down-right text-[#ef4823]"
              >
                <path d="m7 7 10 10" />
                <path d="M17 7v10H7" />
              </svg>
            </div>
            <p className="text-gray-700 mb-8">
              We are an Creative agency, based in New York. Vision Every company is performing best online. Mission
              Helping businesses to find the perfect and most successful strategy, to be online.
            </p>
            <Button
              variant="outline"
              className="rounded-full bg-[#ef4823] text-white hover:bg-[#ef4823]/90 hover:text-white border-none shadow-lg shadow-[#ef4823]/20 px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 text-base sm:text-lg md:text-xl font-bold w-full sm:w-auto transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#ef4823]/30"
            >
              Get Started!
              <span className="ml-2 bg-white text-[#ef4823] p-1 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-sparkles"
                >
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                  <path d="M5 3v4" />
                  <path d="M19 17v4" />
                  <path d="M3 5h4" />
                  <path d="M17 19h4" />
                </svg>
              </span>
            </Button>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-[#ef4823] mb-4">What makes us special</h3>
            <p className="text-gray-700">
              Is to deliver awesome for our clients. By awesome, this should be a tangible impact on their business. We
              exist as a partner to businesses, crafting strategies that are aligned with our client's business goals.
              In every campaign and project, the results we aim to achieve are clear, the measures are clear and most
              importantly we are transparent throughout.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-[#ef4823] mb-4">Our purpose</h3>
            <p className="text-gray-700">
              Is to deliver awesome for our clients. By awesome, this should be a tangible impact on their business. We
              exist as a partner to businesses, crafting strategies that are aligned with our client's business goals.
              In every campaign and project, the results we aim to achieve are clear, the measures are clear and most
              importantly we are transparent throughout.
            </p>
          </div>

          <div className="flex flex-col space-y-8">
            <div>
              <div className="text-5xl font-bold flex items-baseline">
                30k<span className="text-[#ef4823] text-3xl ml-1">+</span>
              </div>
              <div className="text-[#ef4823] font-medium">Project Completed</div>
            </div>
            <div>
              <div className="text-5xl font-bold">70k</div>
              <div className="text-[#ef4823] font-medium">Clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold">100k</div>
              <div className="text-[#ef4823] font-medium">Customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}

      {/* Services Section */}
      <section
        id="services"
        ref={servicesAnimation.ref}
        className={`container mx-auto py-16 border-t border-gray-200 transition-all duration-1000 ease-out ${
          servicesAnimation.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl font-bold mb-12">SERVICES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-sm transform rotate-3 hover:rotate-0 transition-transform">
            <div className="h-32 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-users"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mt-4 mb-2">Lead generation</h3>
            <p className="text-gray-600 text-sm">
              Attract high-quality prospects with our data-driven lead generation strategies that convert visitors into
              valuable customers.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm transform -rotate-3 hover:rotate-0 transition-transform">
            <div className="h-32 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-settings"
              >
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mt-4 mb-2">Automation</h3>
            <p className="text-gray-600 text-sm">
              Streamline your workflows and save time with our custom AI automation solutions that handle repetitive
              tasks with precision.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm transform rotate-3 hover:rotate-0 transition-transform">
            <div className="h-32 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-file-text"
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" x2="8" y1="13" y2="13" />
                <line x1="16" x2="8" y1="17" y2="17" />
                <line x1="10" x2="8" y1="9" y2="9" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mt-4 mb-2">Content creation</h3>
            <p className="text-gray-600 text-sm">
              Generate engaging, SEO-optimized content at scale with our AI-powered content creation tools that maintain
              your brand voice.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm transform -rotate-3 hover:rotate-0 transition-transform">
            <div className="h-32 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-clipboard-check"
              >
                <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                <path d="m9 14 2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mt-4 mb-2">Onboarding</h3>
            <p className="text-gray-600 text-sm">
              Create seamless customer experiences with intelligent onboarding processes that reduce friction and
              increase satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* What Our Client Get Section */}
      <section
        ref={clientGetAnimation.ref}
        className={`container mx-auto py-16 border-t border-gray-200 transition-all duration-1000 ease-out ${
          clientGetAnimation.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl font-bold mb-12">WHAT OUR CLIENT GET</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="rounded-lg overflow-hidden h-[350px]">
            <Image
              src="/placeholder.svg?height=350&width=600"
              alt="Team collaboration"
              width={600}
              height={350}
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="py-4 justify-start">
                  <div className="flex items-center">
                    <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                      01
                    </div>
                    <h3 className="text-xl font-semibold text-left">Full Service Solutions</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600 pl-12">
                    Everything you need to optimize all aspects of your brand's growth. Our comprehensive approach
                    ensures no opportunity is missed.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="py-4 justify-start">
                  <div className="flex items-center">
                    <div className="bg-white border border-gray-200 text-black rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                      02
                    </div>
                    <h3 className="text-xl font-semibold text-left">Innovative Strategies</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600 pl-12">
                    Cutting-edge approaches tailored to your specific industry and goals. We stay ahead of trends to
                    give you a competitive advantage.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="py-4 justify-start">
                  <div className="flex items-center">
                    <div className="bg-white border border-gray-200 text-black rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                      03
                    </div>
                    <h3 className="text-xl font-semibold text-left">Creative Excellence</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600 pl-12">
                    Award-winning design and content that captures attention and drives engagement. Our creative team
                    delivers memorable experiences.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="py-4 justify-start">
                  <div className="flex items-center">
                    <div className="bg-white border border-gray-200 text-black rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                      04
                    </div>
                    <h3 className="text-xl font-semibold text-left">Proven Results</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600 pl-12">
                    Data-driven approaches with measurable outcomes and transparent reporting. We focus on delivering
                    real ROI for your business.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section
        id="case-studies"
        ref={caseStudiesAnimation.ref}
        className={`container mx-auto py-16 border-t border-gray-200 transition-all duration-1000 ease-out ${
          caseStudiesAnimation.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl font-bold mb-12">CASE STUDIES</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item, index) => (
            <div
              key={item}
              className={`bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 ease-out ${
                caseStudiesAnimation.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="aspect-video bg-gray-100 relative">
                <Image
                  src={`/placeholder.svg?height=300&width=500&text=Case Study ${item}`}
                  alt={`Case Study ${item}`}
                  width={500}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Case Study {item}</h3>
                <p className="text-gray-600 mb-4">
                  How we helped a leading company increase their conversion rate by 150%.
                </p>
                <Button variant="link" className="text-[#ef4823] p-0 hover:text-[#ef4823]/80 group">
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right ml-2 transition-transform duration-300 group-hover:translate-x-2"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section
        ref={faqAnimation.ref}
        className={`bg-black text-white py-16 transition-all duration-1000 ease-out ${
          faqAnimation.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">FAQ</h2>
              <p className="text-gray-400">More about product design services</p>
            </div>
            <div className="md:col-span-2">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-b border-gray-800">
                  <AccordionTrigger className="text-white hover:text-[#ef4823] justify-start">
                    How long is the process?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400">
                    Our typical project timeline ranges from 4-12 weeks depending on the scope and complexity. We'll
                    provide a detailed timeline during our initial consultation.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-b border-gray-800">
                  <AccordionTrigger className="text-white hover:text-[#ef4823] justify-start">
                    What if I come with just an idea?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400">
                    That's perfect! We specialize in taking ideas from concept to completion. Our discovery process will
                    help refine your vision into an actionable plan.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-b border-gray-800">
                  <AccordionTrigger className="text-white hover:text-[#ef4823] justify-start">
                    How many iterations can you offer?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400">
                    Our standard packages include 2-3 rounds of revisions. Additional iterations can be arranged based
                    on project needs.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="border-b border-gray-800">
                  <AccordionTrigger className="text-white hover:text-[#ef4823] justify-start">
                    Do you have experience working with enterprise companies?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400">
                    Yes, we've worked with organizations of all sizes, from startups to Fortune 500 companies. Our team
                    has the expertise to handle enterprise-level requirements.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" className="border-b border-gray-800">
                  <AccordionTrigger className="text-white hover:text-[#ef4823] justify-start">
                    What engagement models do you offer?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400">
                    We offer project-based, retainer, and dedicated team models to suit different needs and budgets. We
                    can discuss which option works best for your specific requirements.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6" className="border-b border-gray-800">
                  <AccordionTrigger className="text-white hover:text-[#ef4823] justify-start">
                    What is your availability?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400">
                    We typically book projects 2-4 weeks in advance. For urgent needs, we offer expedited services at a
                    premium rate. Contact us to discuss your timeline.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        id="contact"
        ref={ctaAnimation.ref}
        className={`container mx-auto py-16 border-t border-gray-200 transition-all duration-1000 ease-out ${
          ctaAnimation.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Let's start
              <br />
              something
              <br />
              new together
            </h2>
            <Button className="bg-[#ef4823] hover:bg-[#ef4823]/90 text-white rounded-full px-8 py-6 text-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#ef4823]/30">
              Get in touch
            </Button>
          </div>
          <div className="w-32 h-32 rounded-full bg-[#ef4823]"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto py-8 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <nav className="flex space-x-6 mb-4 md:mb-0">
            <a href="#about" className="text-sm hover:text-[#ef4823] transition-colors font-bold">
              About
            </a>
            <a href="#services" className="text-sm hover:text-[#ef4823] transition-colors font-bold">
              Services
            </a>
            <a href="#case-studies" className="text-sm hover:text-[#ef4823] transition-colors font-bold">
              Project
            </a>
            <a href="#contact" className="text-sm hover:text-[#ef4823] transition-colors font-bold">
              Contact
            </a>
          </nav>
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-[#ef4823] hover:text-[#ef4823] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-[#ef4823] hover:text-[#ef4823] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-[#ef4823] hover:text-[#ef4823] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-[#ef4823] hover:text-[#ef4823] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-twitter"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <div>© 2023 Creative Agency Template by Insdre</div>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-[#ef4823] transition-colors">
              Privacy policy
            </a>
            <a href="#" className="hover:text-[#ef4823] transition-colors">
              Terms & Agreements
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

