import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  ChevronRight, 
  MapPin, 
  Mail, 
  PhoneCall, 
  Flame, 
  Truck, 
  Scale, 
  Briefcase, 
  Layers, 
  Users, 
  Award, 
  FileCheck2,
  Menu,
  X,
  MessageSquare,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import ContactForm from './components/ContactForm';

// Image constants generated in our workspace
const HERO_IMG = "/src/assets/images/midcliff_hero_1781598613885.jpg";
const SCRAP_IMG = "/src/assets/images/midcliff_scrap_1781598629919.jpg";
const TRUCK_IMG = "/src/assets/images/midcliff_truck_1781598645414.jpg";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const stats = [
    { value: '5+', label: 'Zimbabwe Fleet Trucks' },
    { value: '1,000+', label: 'Tonnes Transported annually' },
    { value: '100%+', label: 'Load Scaling Accuracy' },
    { value: '24/7', label: 'Commercial Operations' }
  ];

  const coreServices = [
    {
      icon: <Layers className="w-6 h-6 text-amber-500" />,
      title: "Premium Steel Hardware",
      description: "Direct distributor of S275/355 industrial carbon steel beams, channels, reinforcing round bars, and stainless sheeting. Formulated for heavy construction and mining standards."
    },
    {
      icon: <Scale className="w-6 h-6 text-amber-500" />,
      title: "Scrap Purchase & Recycle",
      description: "High-yield recycling of non-ferrous copper bare-wires, tubing, yellow brass, machinery gears, aluminum castings, and heavy melting steel from contractors and mining blocks."
    },
    {
      icon: <Truck className="w-6 h-6 text-amber-500" />,
      title: "Logistics & Fleet Transport",
      description: "Nationwide haulage in Zimbabwe using 15T tippers, 30T drop-side tri-axle configurations, and heavy-duty lowbeds. Full inland transit insurance coverage is guaranteed."
    }
  ];

  const handleNavScroll = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-amber-500 selection:text-slate-950">
      
      {/* ----------------- Header & Sticky Navbar ----------------- */}
      <header className="sticky top-0 z-50 bg-slate-950 text-white shadow-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Branding / Logo */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center text-slate-950 font-black tracking-tight shadow-md">
                <Flame className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <h1 className="font-extrabold text-lg tracking-tight uppercase leading-none">
                  Midcliff <span className="text-amber-500">Investments</span>
                </h1>
                <p className="text-[10px] text-slate-400 font-mono tracking-wider mt-0.5 uppercase">
                  Steel & Logistics · Zimbabwe
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-slate-300">
              <button onClick={() => handleNavScroll('about-section')} className="hover:text-amber-500 transition-colors">Who We Are</button>
              <button onClick={() => handleNavScroll('services-section')} className="hover:text-amber-500 transition-colors">Our Divisions</button>
              <button onClick={() => handleNavScroll('scrap-details-section')} className="hover:text-amber-500 transition-colors">Scrap & Recycling</button>
              <button onClick={() => handleNavScroll('quote-calculator-section')} className="hover:text-amber-500 transition-colors">Enquiry Guide</button>
              <button onClick={() => handleNavScroll('contact-section')} className="hover:text-amber-500 transition-colors text-amber-500">Contact Midlands HQ</button>
            </nav>

            {/* CTA action and Mobile Hamburguer */}
            <div className="flex items-center gap-4">
              <a 
                href="https://wa.me/263772968434"
                target="_blank"
                rel="noreferrer"
                className="hidden sm:flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 font-extrabold text-xs uppercase tracking-wider text-white px-4 py-2.5 rounded-lg transition-all active:scale-95 shadow-md shadow-emerald-500/10"
              >
                <PhoneCall size={14} /> +263 77 296 8434
              </a>

              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu panel */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-slate-900 border-t border-slate-800 px-4 py-5 space-y-3 font-semibold text-sm uppercase tracking-wide text-slate-300"
          >
            <button onClick={() => handleNavScroll('about-section')} className="block w-full text-left hover:text-amber-500 py-1 transition-colors">Who We Are</button>
            <button onClick={() => handleNavScroll('services-section')} className="block w-full text-left hover:text-amber-500 py-1 transition-colors">Our Divisions</button>
            <button onClick={() => handleNavScroll('scrap-details-section')} className="block w-full text-left hover:text-amber-500 py-1 transition-colors">Scrap & Recycling</button>
            <button onClick={() => handleNavScroll('quote-calculator-section')} className="block w-full text-left hover:text-amber-500 py-1 transition-colors">Inquiry Guide</button>
            <button onClick={() => handleNavScroll('contact-section')} className="block w-full text-left text-amber-500 py-1 transition-colors">Contact Midlands HQ</button>
            <a 
              href="https://wa.me/263772968434"
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 font-extrabold text-xs text-white p-3 rounded-lg w-full"
            >
              <PhoneCall size={14} /> WhatsApp Hotline
            </a>
          </motion.div>
        )}
      </header>

      {/* ----------------- Hero / Welcome Screen ----------------- */}
      <section className="bg-slate-950 relative overflow-hidden" id="hero-banner-section">
        <div className="absolute inset-0 bg-slate-950/70 z-10" />
        <div className="absolute inset-0 z-0">
          <img 
            src={HERO_IMG} 
            alt="Midcliff steelworks depot" 
            className="w-full h-full object-cover object-center filter grayscale contrast-125"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 flex flex-col justify-center min-h-[550px]">
          <div className="max-w-3xl space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 text-amber-500 border border-amber-500/25 text-xs font-mono tracking-widest uppercase font-bold rounded-full"
            >
              <ShieldCheck size={14} className="text-amber-500" /> Redcliff Midlands Industrial Hub
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black font-sans text-white tracking-tight leading-tight uppercase"
            >
              Forging Strength.<br className="hidden sm:inline" /> Transporting <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Zimbabwe forward.</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed"
            >
              Midcliff Investments is Midlands leading structural metal authority. We distribute premium industrial carbon and alloy steels, operate professional scrap recycling yards, and run robust flatbed cargo transport systems locally.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="pt-6 flex flex-wrap gap-4"
            >
              <a 
                href="https://wa.me/263772968434"
                target="_blank"
                rel="noreferrer"
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs uppercase tracking-wider px-6 py-4 rounded-xl transition-all shadow-lg active:scale-95 flex items-center gap-2"
              >
                Inquire on WhatsApp <ChevronRight size={16} />
              </a>
              <button 
                onClick={() => handleNavScroll('contact-section')}
                className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-bold text-xs uppercase tracking-wider px-6 py-4 rounded-xl transition-all active:scale-95"
              >
                Inquire on Bulk Supply
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ----------------- Stats bar ----------------- */}
      <section className="bg-slate-900 border-y border-slate-800 text-white py-8" id="stats-banner-view">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-800 text-center md:text-left">
            {stats.map((stat, i) => (
              <div key={i} className="pt-4 md:pt-0 md:px-6 first:pt-0">
                <span className="text-3xl font-black font-mono text-amber-500 block tracking-tight">{stat.value}</span>
                <span className="text-[11px] text-slate-400 uppercase font-bold tracking-wider mt-1 block">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- About Us & Location Context ----------------- */}
      <section className="py-16 md:py-24 bg-white" id="about-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side: narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold text-amber-500 uppercase tracking-widest block mb-2 font-mono">
                  Legacy & Operations
                </span>
                <h3 className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-950 tracking-tight leading-tight">
                  Central Midlands Heavy Metal Core
                </h3>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Headquartered along the historic <b>Oldsteelworks Road in Redcliff Midlands</b>, Midcliff Investments sits at the epicenter of Zimbabwe’s metal manufacturing belt. We serve a vast network of commercial builders, artisanal fabricators, engineering yards, agricultural operations, and remote mining blocks.
              </p>
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex items-start gap-4">
                <div className="p-2 bg-slate-900 text-amber-500 rounded-xl shrink-0">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-slate-900">Double Action Advantage</h4>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1 leading-relaxed">
                    By integrating steel distribution directly with our proprietary recycling yard and transport fleet, we create a closed circle. We deliver pristine structural alloys, purchase residual workshop scrap to reduce landfill footprints, and manage end-to-end transport securely.
                  </p>
                </div>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Our fleet of specialized flats, bulk tippers, and mechanized lifters ensures that heavy industrial steel products are routed exactly where they belong—safely off-truck at construction sites and warehouse decks throughout Gweru, Harare, Bulawayo, Beitbridge, and beyond.
              </p>
            </div>

            {/* Right side: Truck visual split */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={TRUCK_IMG} 
                  alt="Midcliff logistics truck fleet" 
                  className="w-full h-[350px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/10 to-transparent" />
                
                {/* Embedded quick address banner over image */}
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <div className="flex items-center gap-2 text-amber-400">
                    <MapPin size={16} />
                    <span className="text-[10px] uppercase font-mono font-black tracking-widest">VISIT OUR CO-ORDINATES</span>
                  </div>
                  <h4 className="font-bold text-sm">1430/31 Oldsteelworks Rd</h4>
                  <p className="text-[11px] text-slate-300">Redcliff Midlands, Zimbabwe</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ----------------- Corporate Divisions Overview ----------------- */}
      <section className="py-16 bg-slate-50 border-t border-slate-100" id="services-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-amber-500 uppercase tracking-widest block font-mono">
              Core Business Activities
            </span>
            <h3 className="font-sans font-black text-3xl sm:text-4xl text-slate-950 tracking-tight uppercase">
              Our Professional Services
            </h3>
            <p className="text-slate-500 text-sm">
              We operate three major divisions to supply raw industrial inventory, purchase post-industrial scrap waste, and maintain rapid cross-country shipping channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-white border border-slate-150-inset p-8 rounded-2xl shadow-md hover:shadow-xl hover:border-amber-500/20 transition-all group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-slate-950 rounded-xl flex items-center justify-center text-amber-500 shadow-md">
                    {service.icon}
                  </div>
                  <h4 className="font-sans font-bold text-lg text-slate-900 group-hover:text-amber-600 transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center text-xs font-bold text-slate-900 group-hover:text-amber-600 transition-colors cursor-pointer" onClick={() => handleNavScroll('quote-calculator-section')}>
                  View Supply Rates <ChevronRight size={14} className="ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- Active Estimation Desk (The Core Tabs) ----------------- */}
      <section className="py-16 md:py-24 bg-slate-950 text-white relative overflow-hidden" id="quote-calculator-section">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-900/50 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold text-amber-500 uppercase tracking-widest block font-mono">
              Direct Quotations & Pricing
            </span>
            <h3 className="font-sans font-black text-3xl sm:text-4xl text-white tracking-tight uppercase">
              How to Inquire for Rates
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm">
              We have integrated our procurement, recycling, and dispatch departments directly with our WhatsApp commercial hotline. Tap below to launch your query immediately:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Box 1: Steel */}
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="relative w-10 h-10 bg-amber-500/10 text-amber-500 rounded-lg flex items-center justify-center">
                  <Layers size={20} />
                </div>
                <h4 className="text-lg font-bold text-white uppercase tracking-tight">Steel Supply Quotations</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Send your project requirements (bar diameter size, beam dimensions, alloy grade preference, and required tonnage). We provide formal, written price bids.
                </p>
              </div>
              <a 
                href="https://wa.me/263772968434?text=Hi%20Midcliff%20Investments%2C%20I'm%20writing%20to%20request%20a%20Steel%20Supply%20quotation."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider py-3 px-4 rounded-xl transition-all"
              >
                Inquire on WhatsApp <ArrowUpRight size={14} />
              </a>
            </div>

            {/* Box 2: Scrap */}
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="relative w-10 h-10 bg-amber-500/10 text-amber-500 rounded-lg flex items-center justify-center">
                  <Scale size={20} />
                </div>
                <h4 className="text-lg font-bold text-white uppercase tracking-tight">Scrap Trade Valuation</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Share approximate weight and material type (copper wires, red brass, machinery cast aluminum, scrap steel). We'll reply with the absolute best active local price.
                </p>
              </div>
              <a 
                href="https://wa.me/263772968434?text=Hi%20Midcliff%20Investments%2C%20I%20have%20metal%20scrap%20available%20and%20would%20like%20to%20request%20an%20active%20rate%20evaluation."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider py-3 px-4 rounded-xl transition-all"
              >
                Inquire on WhatsApp <ArrowUpRight size={14} />
              </a>
            </div>

            {/* Box 3: Logistics */}
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="relative w-10 h-10 bg-amber-500/10 text-amber-500 rounded-lg flex items-center justify-center">
                  <Truck size={20} />
                </div>
                <h4 className="text-lg font-bold text-white uppercase tracking-tight">Logistics & Dispatch</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Provide cargo volume details (15T Tippers or 30T drop-side flatbeds), pickup region, and Zimbabwe destination city. Peter will quote our immediate truck slot.
                </p>
              </div>
              <a 
                href="https://wa.me/263772968434?text=Hi%20Midcliff%20Investments%2C%20I'm%20writing%20to%20inquire%20about%20logistics%20freight%20availability%20and%20rates."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider py-3 px-4 rounded-xl transition-all"
              >
                Inquire on WhatsApp <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          <div className="mt-12 text-center text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-center gap-2 bg-slate-900/40 p-4 rounded-xl border border-slate-900/80 max-w-2xl mx-auto">
            <span className="font-bold text-amber-500 animate-pulse">Fast Response Support:</span>
            <span>All direct inquiries receive prioritized response. For formal email bulk RFP submissions, please contact <a href="mailto:peterchiramba1450@gmail.com" className="text-white hover:underline font-bold">peterchiramba1450@gmail.com</a>.</span>
          </div>
        </div>
      </section>

      {/* ----------------- Detailed Scrap Metal Info Section (Nice banner layout) ----------------- */}
      <section className="py-16 md:py-20 bg-white" id="scrap-details-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Scrap photo left block */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-100">
                <img 
                  src={SCRAP_IMG} 
                  alt="Commercial graded scrap copper wire" 
                  className="w-full h-[320px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-emerald-600/95 backdrop-blur text-white text-[10px] font-mono tracking-widest uppercase font-black px-3 py-1 rounded-full border border-emerald-500/50">
                  Approved Collector
                </div>
              </div>
            </div>

            {/* Scrap details text right block */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold text-amber-500 uppercase tracking-widest block mb-2 font-mono">
                  Sourcing & Sustainability
                </span>
                <h3 className="font-sans font-extrabold text-3xl text-slate-900 tracking-tight leading-tight uppercase">
                  Responsible Metals Trading
                </h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                We collect ferrous Scrap (such as raw roofing panels, machinery frames, structural plates) as well as valuable non-ferrous raw materials (including polished yellow brass plumbing fittings, stripped bare copper cables, aluminum beverage containers, and vehicle lead-acid components).
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl space-y-1.5ClassName">
                  <h4 className="font-sans font-bold text-xs text-slate-900 uppercase tracking-wider">High Cash Conversion</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">We settle values on certified weight tickets using local physical or wire USD payments immediately upon grading analysis.</p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl">
                  <h4 className="font-sans font-bold text-xs text-slate-900 uppercase tracking-wider">Industrial Sorting & Processing</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">We compress, shear, bundle and melt processed scrap to supply verified alloy ingots to foundry systems locally and globally.</p>
                </div>
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Attention: For safety regulations under Zimbabwean law, scrap operators are required to register valid national IDs and company credentials for bulk cable, copper, or railway track sales. We maintain strict compliance checks.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ----------------- Contact Us Form Frame ----------------- */}
      <section className="py-16 md:py-24 bg-slate-100 border-t border-slate-200" id="contact-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      {/* ----------------- Footer Section ----------------- */}
      <footer className="bg-slate-950 text-slate-450 border-t border-slate-900 text-xs py-12 text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Base Split footer */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-amber-500 text-slate-950 rounded flex items-center justify-center font-bold font-mono">
                  M
                </div>
                <h4 className="font-black text-white uppercase text-sm tracking-tight">Midcliff Investments</h4>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Industrial hardware distributor, certified metals buyer & transporter locally in Zimbabwe. Delivering structural resilience nationwide.
              </p>
            </div>

            <div className="space-y-3">
              <h5 className="font-extrabold uppercase text-white tracking-widest text-[11px] text-amber-500">Legal Divisions</h5>
              <ul className="space-y-1.5 text-slate-300">
                <li className="hover:text-white transition-colors cursor-pointer" onClick={() => handleNavScroll('about-section')}>Ferrous Trading Desk</li>
                <li className="hover:text-white transition-colors cursor-pointer" onClick={() => handleNavScroll('services-section')}>Non-Ferrous Alloys</li>
                <li className="hover:text-white transition-colors cursor-pointer" onClick={() => handleNavScroll('quote-calculator-section')}>Bulk Freight & Shipping</li>
                <li className="hover:text-white transition-colors cursor-pointer" onClick={() => handleNavScroll('scrap-details-section')}>Scrap Reclamation</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h5 className="font-extrabold uppercase text-white tracking-widest text-[11px] text-amber-500">Primary Hub Contacts</h5>
              <div className="space-y-2 text-slate-300">
                <p className="flex items-center gap-1.5">
                  <MapPin size={12} className="text-amber-500 shrink-0" />
                  <span>1430/31 Oldsteelworks Rd, Redcliff</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <Mail size={12} className="text-amber-500 shrink-0" />
                  <a href="mailto:peterchiramba1450@gmail.com" className="hover:underline text-[11px]">peterchiramba1450@gmail.com</a>
                </p>
                <p className="flex items-center gap-1.5">
                  <PhoneCall size={12} className="text-emerald-400 shrink-0" />
                  <span>+263 77 296 8434 (Hotline)</span>
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <h5 className="font-extrabold uppercase text-white tracking-widest text-[11px] text-amber-500">Corporate Compliance</h5>
              <p className="text-[11px] text-slate-300 bg-slate-900/60 p-3 rounded-lg border border-slate-900 leading-normal font-medium">
                A registered company with NSSA certificate of compliance.
              </p>
            </div>
          </div>

          {/* Solid line separator */}
          <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row justify-between items-center text-[11px] text-slate-500 font-medium">
            <p>© {new Date().getFullYear()} Midcliff Investments Pvt Ltd. All rights reserved.</p>
            <div className="mt-4 sm:mt-0 flex gap-4">
              <span className="hover:text-white cursor-pointer transition-colors">Privacy and Terms of Carriage</span>
              <span>·</span>
              <span className="hover:text-white cursor-pointer transition-colors">Metallurgy Sourcing Standards</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
