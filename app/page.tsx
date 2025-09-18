"use client";
import { AnimatedBeamMultipleOutputDemo } from "@/components/demos/animated-beam-demo";
import { AnimatedShinyTextDemo } from "@/components/demos/animated-shiny-text-demo";
import BoxRevealDemo from "@/components/demos/box-reveal-demo";
import { CoverDemo } from "@/components/demos/cover-demo";
import { ScrollBasedVelocityDemo } from "@/components/demos/scroll-based-velocity-demo";
import { WordPullUpDemo } from "@/components/demos/word-pull-up-demo";
import BoxReveal from "@/components/magicui/box-reveal";
import NumberTicker from "@/components/magicui/number-ticker";
import { InfiniteMovingLogos } from "@/components/ui/infinite-moving-logos";
import Image from "next/image";
import Link from "next/link";
import { PiCheckBold } from "react-icons/pi";
import { Link as ScrollLink, Element } from "react-scroll";
import { IconStarFilled } from "@tabler/icons-react";
import { ShootingStarsAndStarsBackgroundDemo } from "@/components/demos/shooting-stars-demo";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";

const services = [
  {
    icon: "/images/s_1.png",
    title: "Facebook, Instagram & TikTok Ads",
    description:
      "Reach your audience with precision and scale using our tailored Facebook, Instagram, and TikTok ad services.",
  },
  {
    icon: "/images/s_2.png",
    title: "Google PPC & YouTube Ads",
    description:
      "Maximize visibility and drive conversions with our strategic Google PPC and YouTube ad campaigns.",
  },
  {
    icon: "/images/s_3.png",
    title: "Funnel Strategy & Landing Page Creation",
    description:
      "Convert more leads with expertly crafted funnels and high-converting landing pages.",
  },
  {
    icon: "/images/s_4.png",
    title: "Email Marketing & Retargeting",
    description:
      "Engage and retain your customers with personalized email marketing and retargeting strategies.",
  },
  {
    icon: "/images/s_5.png",
    title: "Ad Copywriting & Creative Strategy",
    description:
      "Craft compelling ad copy and creative strategies that resonate with your target audience.",
  },
  {
    icon: "/images/s_6.png",
    title: "Creative Strategy & Email Automations",
    description:
      "Automate and optimize your marketing efforts with innovative strategies and email automation.",
  },
];

export default function Home() {
  return (
    <div className="overflow-clip inset-0 -z-10 h-full w-full bg-[#121212] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <Element
        name="top"
        className="sticky top-0 z-50 w-full bg-[#121212] shadow-xl border-b border-[#232323]"
      >
        <div className="flex items-center justify-between px-4 md:px-10 py-4 max-w-[1600px] mx-auto">
          {/* Logo Left */}
          <Link href="/" className="flex items-center gap-x-3 group">
            <Image
              src="/logo/logo.svg"
              alt="AdsStarter Logo"
              width={48}
              height={48}
              className="drop-shadow-lg"
            />
            <span className="text-2xl md:text-3xl font-extrabold gradient-text tracking-tight group-hover:scale-110 transition-transform duration-200">AdsStarter</span>
          </Link>

          {/* Nav Center */}
          <nav className="hidden md:flex gap-x-8 items-center text-white font-semibold text-lg">
            <ScrollLink to="services" smooth={true} className="hover:gradient-text transition-colors cursor-pointer text-white">Services</ScrollLink>
            <ScrollLink to="process" smooth={true} className="hover:gradient-text transition-colors cursor-pointer text-white">Our Process</ScrollLink>
            <ScrollLink to="pricing" smooth={true} className="hover:gradient-text transition-colors cursor-pointer text-white">Pricing</ScrollLink>
            <ScrollLink to="guarentees" smooth={true} className="hover:gradient-text transition-colors cursor-pointer text-white">Guarantees</ScrollLink>
          </nav>

          {/* CTA Right */}
          <div className="flex items-center gap-x-4">
            <a href="tel:519400200" className="hidden lg:inline-block">
              <span className="px-4 py-2 rounded-md text-lg font-semibold gradient-text hover:underline transition-all">(519)-400-200</span>
            </a>
            <a
              href="https://calendly.com/khamareclarke/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-7 text-lg font-bold rounded-[8px] shadow-lg bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-700 text-white border-0 hover:scale-110 hover:from-blue-700 hover:to-blue-500 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <span className="text-white">Book a Call</span>
            </a>
          </div>
        </div>
      </Element>

      <main className="md:pb-10">
        <section className="fade-in relative flex flex-col items-center justify-center min-h-[60vh] px-4 py-16 md:py-32 bg-[#181C22] rounded-xl shadow-xl overflow-hidden mb-10">
          {/* Headline */}
          <h1 className="text-center text-4xl md:text-6xl font-extrabold leading-tight mb-6 gradient-text drop-shadow-lg fade-in" style={{ animationDelay: '0.1s' }}>
            Launch Your Reach<br className="hidden md:block" /> with High-Converting Ad Campaigns
          </h1>
          {/* Subtext */}
          <p className="text-center text-lg md:text-2xl text-white/80 max-w-2xl mb-10 font-medium fade-in" style={{ animationDelay: '0.25s' }}>
            We build and launch ad systems that grow your business on autopilot. Performance-first paid ads, funnel strategy, and automation for brands that want to scale.
          </p>
          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 md:justify-center items-center mb-6 fade-in" style={{ animationDelay: '0.4s' }}>
            <a href="https://calendly.com/khamareclarke/new-meeting" target="_blank" rel="noopener noreferrer" className="py-4 px-10 md:text-xl font-bold rounded-[8px] shadow-lg bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-700 text-white border-0 hover:scale-110 hover:from-blue-700 hover:to-blue-500 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-link">
              Book a Free Strategy Call
            </a>
            <Link href="/showcase" className="py-4 px-10 md:text-xl font-bold rounded-[8px] border-2 border-blue-400 text-blue-300 bg-[#181C22] hover:bg-blue-900 hover:text-white transition-colors duration-200">
              See Campaign Examples
            </Link>
          </div>
          {/* Decorative Background (optional) */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <AnimatedShinyTextDemo />
          </div>
        </section>

        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-14">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center text-left md:justify-items-center md:mx-auto mt-10 md:mt-16">
            <BoxReveal boxColor={"#ffd700"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center gradient-text">
                <PiCheckBold className="text-xl text-yellow-500" />
                Facebook & Instagram Ads
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#ffd700"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center gradient-text">
                <PiCheckBold className="text-xl text-yellow-500" />
                Google PPC & YouTube Ads
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#ffd700"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center gradient-text">
                <PiCheckBold className="text-xl text-yellow-500" />
                Funnel Strategy & Landing Page Creation
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#ffd700"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center gradient-text">
                <PiCheckBold className="text-xl text-yellow-500" />
                Email Marketing & Retargeting
              </p>
            </BoxReveal>
          </div>

          <section className="fade-in w-full flex flex-col md:flex-row items-center justify-between gap-8 my-12 px-4 py-10 bg-[#181C22] rounded-2xl shadow-xl border border-[#232c3b] max-w-[1600px] mx-auto">
  <div className="flex-1 flex flex-col items-center md:items-start">
    <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4 gradient-text">Trusted by fast moving brands worldwide</h2>
    <div className="flex gap-x-10 md:gap-x-16 mt-4">
      <div className="flex flex-col items-center">
        <span className="text-4xl md:text-6xl font-extrabold gradient-text drop-shadow-lg"><NumberTicker value={325} />+</span>
        <span className="text-white/80 text-lg mt-2 font-medium">Happy Clients</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-4xl md:text-6xl font-extrabold gradient-text drop-shadow-lg"><NumberTicker value={32} />+</span>
        <span className="text-white/80 text-lg mt-2 font-medium">Niches Scaled</span>
    </div>
  </div>
</div>
<div className="flex-1 flex items-center justify-center w-full mt-10 md:mt-0">
  <section className="fade-in overflow-hidden w-full max-w-lg">
    <InfiniteMovingLogos
      speed="slow"
      direction="left"
        items={[
            {
              logo: "/logo/client-1.svg",
              name: "Client 1 Logo",
            },
            {
              logo: "/logo/client-2.svg",
              name: "Client 2 Logo",
            },
            {
              logo: "/logo/client-3.svg",
              name: "Client 3 Logo",
            },
            {
              logo: "/logo/client-4.svg",
              name: "Client 4 Logo",
            },
          ]}
      />
    </section>
  </div>
</section>
        </div>
      </main>

      <Element name="services">
  <section className="fade-in w-full bg-[#181C22] rounded-2xl shadow-xl border border-[#232c3b] px-4 md:px-10 py-14 max-w-[1600px] mx-auto my-16">
    <h2 className="text-center text-3xl md:text-5xl font-extrabold gradient-text mb-4">Built from the ground up</h2>
    <p className="text-center text-lg md:text-2xl text-white/80 max-w-2xl mx-auto mb-10 font-medium">
      All of our services are designed to help your business stand out
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {services.map((service) => (
        <div
          key={service.title}
          className="flex flex-col items-center text-center bg-[#232c3b] rounded-xl shadow-lg p-8 hover:scale-110 transition-transform duration-200 border border-[#232c3b]"
        >
          <span className="text-5xl mb-4">
            {service.title === "Facebook, Instagram & TikTok Ads" && "📱"}
            {service.title === "Google PPC & YouTube Ads" && "🎯"}
            {service.title === "Funnel Strategy & Landing Page Creation" && "🛠️"}
            {service.title === "Email Marketing & Retargeting" && "📧"}
            {service.title === "Ad Copywriting & Creative Strategy" && "✍️"}
            {service.title === "Creative Strategy & Email Automations" && "🤖"}
          </span>
          <h3 className="text-xl md:text-2xl font-bold gradient-text mb-2">{service.title}</h3>
          <p className="text-white/80 text-base md:text-lg font-medium mb-0">{service.description}</p>
        </div>
      ))}
    </div>
  </section>
</Element>

      <section className="fade-in py-20">
        <ScrollBasedVelocityDemo />
      </section>

      <Element name="process">
  <section className="fade-in w-full bg-[#181C22] rounded-2xl shadow-xl border border-[#232c3b] px-4 md:px-10 py-14 max-w-[1600px] mx-auto my-16">
    <h2 className="text-center text-3xl md:text-5xl font-extrabold gradient-text mb-4">Our Launch Method</h2>
    <p className="text-center text-lg md:text-2xl text-white/80 max-w-2xl mx-auto mb-10 font-medium">
      All of our services are designed to help your business to get noticed.
    </p>
    <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-1/2 mx-auto gap-10 mb-12">
      <div className="w-full md:w-1/2 order-2 md:order-1">
        <AnimatedBeamMultipleOutputDemo />
      </div>
      <ol className="flex flex-col gap-8 w-full">
  <li className="flex items-start gap-x-4">
    <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-white font-bold text-xl shadow-lg">1</span>
    <div>
      <h4 className="text-xl font-bold gradient-text mb-1">Strategize</h4>
      <p className="text-white/80 text-base md:text-lg font-medium">We analyze your goals and market for maximum scale potential.</p>
    </div>
  </li>
  <li className="flex items-start gap-x-4">
    <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-white font-bold text-xl shadow-lg">2</span>
    <div>
      <h4 className="text-xl font-bold gradient-text mb-1">Launch & Optimize</h4>
      <p className="text-white/80 text-base md:text-lg font-medium">We launch, test, and optimize campaigns for rapid growth.</p>
    </div>
  </li>
  <li className="flex items-start gap-x-4">
    <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-white font-bold text-xl shadow-lg">3</span>
    <div>
      <h4 className="text-xl font-bold gradient-text mb-1">Scale Results</h4>
      <p className="text-white/80 text-base md:text-lg font-medium">We double down on what works to drive measurable, scalable results.</p>
    </div>
  </li>
</ol>
  </div>
  </section>
</Element>

        <Element name="pricing">
        <section className="fade-in w-full bg-[#181C22] rounded-2xl shadow-xl border border-[#232c3b] px-2 md:px-4 py-8 max-w-[1600px] mx-auto my-10">
  <h2 className="text-center text-2xl md:text-4xl font-extrabold gradient-text mb-4">Pricing Plans</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {/* Starter Plan */}
    <div className="flex flex-col items-center text-center bg-[#232c3b] rounded-xl shadow-lg p-4 border border-[#232c3b]">
      <span className="text-5xl mb-4">🚀</span>
      <h3 className="text-lg md:text-xl font-bold gradient-text mb-1">Starter – The Launch Pad</h3>
      <span className="text-2xl font-extrabold text-white mb-2">£497 /mo</span>
      <ul className="text-white/80 text-sm md:text-base font-medium mb-4 space-y-1">
        <li>🎯 Facebook & Instagram Ads (laser-targeted campaigns)</li>
        <li>🛠️ Basic Funnel (Landing + Thank You)</li>
        <li>📧 Entry Email Retargeting Sequence</li>
        <li>📊 Monthly Performance Report</li>
        <li>⚡ Designed for startups ready to break through</li>
      </ul>
      <button className="mt-auto py-2 px-6 rounded-lg font-bold bg-gradient-to-r from-blue-500 to-cyan-400 text-white hover:from-blue-700 hover:to-cyan-600 transition-all transition-link">Start My Launch</button>
    </div>
    {/* Growth Plan */}
    <div className="flex flex-col items-center text-center bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl shadow-lg p-4 border-2 border-blue-400 card-hover">
      <span className="text-5xl mb-4">💼</span>
      <h3 className="text-lg md:text-xl font-bold text-white mb-1">Growth – The Scale Engine</h3>
      <span className="text-2xl font-extrabold text-white mb-2">£997 /mo</span>
      <ul className="text-white text-sm md:text-base font-medium mb-4 space-y-1">
        <li>✅ Facebook + Instagram + Google Ads (multi-channel growth)</li>
        <li>✅ Full Funnel Build (4+ pages, lead → sale)</li>
        <li>✅ Advanced Retargeting & Nurture Sequences</li>
        <li>✅ Bi-Weekly Optimization Calls</li>
        <li>✅ A/B Testing for Conversions</li>
        <li>⚡ Built for businesses ready to scale hard</li>
      </ul>
      <button className="mt-auto py-2 px-6 rounded-lg font-bold bg-white text-blue-700 border-2 border-blue-400 hover:bg-blue-100 transition-all">Scale My Business</button>
    </div>
    {/* Empire Plan */}
    <div className="flex flex-col items-center text-center bg-[#232c3b] rounded-xl shadow-lg p-4 border border-[#232c3b]">
      <span className="text-5xl mb-4">👑</span>
      <h3 className="text-lg md:text-xl font-bold gradient-text mb-1">Empire – The Ultimate Launch System</h3>
      <span className="text-2xl font-extrabold text-white mb-2">£1,997 /mo</span>
      <ul className="text-white/80 text-sm md:text-base font-medium mb-4 space-y-1">
        <li>🚀 Omnichannel Domination (FB, IG, Google, YouTube)</li>
        <li>🧭 Premium Funnel Build (6+ conversion-optimized pages)</li>
        <li>📧 Advanced Email + SMS Automations (24/7 sales machine)</li>
        <li>🎨 Unlimited Creative Strategy & Ad Copywriting</li>
        <li>📊 Weekly Optimization + ROI Performance Dashboard</li>
        <li>👤 Dedicated Ads Manager = your ads co-pilot</li>
        <li>🔥 Priority Support – skip the queue, instant fixes</li>
        <li>💰 ROI Guarantee: If we don’t deliver growth, your next month is FREE*</li>
      </ul>
      <button className="mt-auto py-2 px-6 rounded-lg font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 transition-all">Launch My Empire</button>
    </div>
  </div>
</section>
</Element>

<Element name="guarentees">
  <section className="fade-in w-full bg-[#181C22] rounded-2xl shadow-xl border border-[#232c3b] px-4 md:px-10 py-14 max-w-[1600px] mx-auto my-16">
    <h2 className="text-center text-3xl md:text-5xl font-extrabold gradient-text mb-8">Our Guarantees to You</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="flex flex-col items-center text-center bg-[#232c3b] rounded-xl shadow-lg p-8 border border-[#232c3b] card-hover">
        <span className="text-5xl mb-4">⚡</span>
        <h3 className="text-xl md:text-2xl font-bold gradient-text mb-2">Fast Delivery</h3>
        <p className="text-white/80 text-base md:text-lg font-medium mb-0">1-2 weeks delivery for most projects. Call us for more information.</p>
      </div>
      <div className="flex flex-col items-center text-center bg-[#232c3b] rounded-xl shadow-lg p-8 border border-[#232c3b] card-hover">
        <span className="text-5xl mb-4">💬</span>
        <h3 className="text-xl md:text-2xl font-bold gradient-text mb-2">24/7 Support</h3>
        <p className="text-white/80 text-base md:text-lg font-medium mb-0">We offer 24/7 support for all our clients. Call us for more information.</p>
      </div>
      <div className="flex flex-col items-center text-center bg-[#232c3b] rounded-xl shadow-lg p-8 border border-[#232c3b] card-hover">
        <span className="text-5xl mb-4">💸</span>
        <h3 className="text-xl md:text-2xl font-bold gradient-text mb-2">Affordable Pricing</h3>
        <p className="text-white/80 text-base md:text-lg font-medium mb-0">Affordable pricing for all our clients.</p>
      </div>
    </div>
  </section>
</Element>

      <section className="fade-in my-10 md:py-20 xl:w-4/5 2xl:w-[68%] md:mx-auto">
      <LetsMakeThingsHappenSection />
      </section>

      <div className="w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-700 mb-0" />
<footer className="bg-[#181C22] py-16 px-6 md:px-12 border-t-0 mt-0">

  <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-12 md:gap-20">
    {/* Brand & Contact */}
    <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-4">
      <div className="flex items-center gap-3 mb-3">
        <Image src="/logo/logo.svg" width={48} height={48} alt="AdsStarter Logo" className="drop-shadow-lg" />
        <span className="text-2xl md:text-3xl font-extrabold gradient-text tracking-tight">AdsStarter</span>
      </div>
      <p className="text-white/80 text-base md:text-lg">519-200-5000</p>
      <p className="text-white/80 text-base md:text-lg">admin@adsstarter.com</p>
    </div>
    {/* Navigation */}
    <div className="flex-1 flex flex-col items-center md:items-start gap-2">
      <span className="font-bold text-white/80 mb-2">Navigation</span>
      <Link href="/" className="text-blue-400 hover:underline">Home</Link>
            <a href="https://calendly.com/khamareclarke/new-meeting" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Book a Call</a>
      <Link href="#process" className="text-blue-400 hover:underline">Our Process</Link>
      <Link href="#guarentees" className="text-blue-400 hover:underline">Guarantees</Link>
    </div>
    {/* Newsletter Signup */}
    <div className="flex-1 flex flex-col items-center md:items-start gap-3">
      <span className="font-bold text-white/80 mb-2">Stay in the loop</span>
      <form className="flex w-full max-w-xs">
        <input type="email" placeholder="Your email" className="flex-1 px-3 py-2 rounded-l bg-[#232c3b] text-white placeholder:text-white/50 focus:outline-none" />
        <button type="submit" className="px-4 py-2 rounded-r bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold hover:from-blue-700 hover:to-cyan-600 transition-all">Subscribe</button>
      </form>
      <span className="text-xs text-white/50 mt-1">No spam. Unsubscribe anytime.</span>
    </div>
    {/* Social & Legal */}
    <div className="flex-1 flex flex-col items-center md:items-end gap-4">
                </div>
  </div>
  <div className="flex justify-center gap-8 mb-6">
  <a href="https://facebook.com" target="_blank" rel="noopener" className="hover:scale-110 transition-transform">
    <svg className="w-7 h-7 text-blue-500 fill-current" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0"/></svg>
  </a>
  <a href="https://instagram.com" target="_blank" rel="noopener" className="hover:scale-110 transition-transform">
    <svg className="w-7 h-7 text-blue-500 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.602.433 3.635 1.4c-.967.967-1.269 2.14-1.328 3.417C2.013 8.332 2 8.741 2 12c0 3.259.013 3.668.072 4.948.059 1.277.361 2.45 1.328 3.417.967.967 2.14 1.269 3.417 1.328C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.277-.059 2.45-.361 3.417-1.328.967-.967 1.269-2.14 1.328-3.417.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.059-1.277-.361-2.45-1.328-3.417-.967-.967-2.14-1.269-3.417-1.328C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
  </a>
  <a href="https://tiktok.com" target="_blank" rel="noopener" className="hover:scale-110 transition-transform">
    <svg className="w-7 h-7 text-blue-500 fill-current" viewBox="0 0 48 48"><path d="M41.3 17.4c.1.8.1 1.5.1 2.3 0 9.5-7.2 20.5-20.5 20.5-4.1 0-7.9-1.2-11.1-3.3.6.1 1.2.2 1.9.2 3.4 0 6.5-1.2 9-3.2-3.2-.1-5.8-2.1-6.7-5 .4.1.8.2 1.2.2.6 0 1.3-.1 1.9-.3-3.3-.7-5.7-3.5-5.7-6.9v-.1c1 .6 2.1 1 3.3 1.1-2-1.3-3.3-3.5-3.3-6.1 0-1.3.3-2.5.9-3.5 3.5 4.3 8.8 7.1 14.7 7.4-.1-.5-.2-1-.2-1.5 0-3.8 3.1-6.9 6.9-6.9 2 0 3.7.8 5 2.1 1.6-.3 3.1-.9 4.5-1.7-.5 1.6-1.6 2.9-3.1 3.7 1.4-.2 2.7-.5 3.9-1.1-1 1.4-2.1 2.7-3.5 3.7z"/></svg>
  </a>
  <a href="https://linkedin.com" target="_blank" rel="noopener" className="hover:scale-110 transition-transform">
    <svg className="w-7 h-7 text-blue-500 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-8.5 19h-3v-8h3v8zm-1.5-9.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 9.268h-3v-4.604c0-1.099-.021-2.513-1.532-2.513-1.534 0-1.768 1.197-1.768 2.434v4.683h-3v-8h2.881v1.093h.041c.401-.762 1.379-1.562 2.84-1.562 3.036 0 3.6 2 3.6 4.591v5.878z"/></svg>
  </a>
</div>
<div className="border-t border-[#232c3b] pt-8 mt-12">
  <div className="flex flex-wrap justify-center gap-x-10 gap-y-2 mb-3">
    <Link href="/privacy-policy" className="text-blue-400 hover:underline text-sm transition-link">Privacy Policy</Link>
    <span className="text-white/40">|</span>
    <Link href="/sitemap" className="text-blue-400 hover:underline text-sm transition-link">Sitemap</Link>
    <span className="text-white/40">|</span>
    <Link href="/" className="text-blue-400 hover:underline text-sm transition-link">Terms</Link>
  </div>
  <div className="text-center text-white/60 text-xs">
    &copy; 2025 <span className="gradient-text font-bold">AdsStarter</span>. All Rights Reserved.
  </div>
</div>
</footer>
  </div>
  );
}
