/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  MessageCircle, 
  Phone, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Menu, 
  X, 
  ArrowRight,
  Navigation,
  Wrench,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  ChevronDown,
  HelpCircle,
  Briefcase,
  GraduationCap,
  Train,
  CalendarCheck
} from "lucide-react";
import { useState, useEffect } from "react";

const WHATSAPP_LINK = "https://wa.me/918932082250"; // Live Customer Support
const PHONE_LINK = "tel:+918932082250"; // Contact Hot-line

const FAQS = [
  {
    question: "How fast do you really arrive?",
    answer: "Our response team is stationed dynamically across key districts. We guarantee a concierge technician will arrive at your home or office driveway within 10 minutes of dispatch, or your service is completely complimentary."
  },
  {
    question: "Do you require a monthly membership subscription?",
    answer: "Absolutely not. carBB is built as an ultra-premium, on-demand pay-as-you-go service. You only pay for what you need, when you need it—no hidden terms, contracts, or monthly bloat."
  },
  {
    question: "How is a doorstep repair better than a tow truck?",
    answer: "Standard towing wastes 2-3 hours of your morning, exposes you to grease, and runs the risk of damaging your luxury vehicle's bumper or alignment. with carBB, you stay clean inside finishing your morning coffee while we handle the repair in your driveway."
  },
  {
    question: "What types of vehicles do you handle?",
    answer: "We repair luxury sedans, sports cars, premium SUVs, electric vehicles (EVs), and standard commuter cars. Our technicians bring advanced specialized tire lift tools that treat elite wheels with pristine care."
  },
  {
    question: "Is the repair permanent?",
    answer: "Yes, our certified auto concierge technicians use industry-best hot cure vulcanized patches and premium plugs that exceed roadside safety standards, fully reassuring your daily drive."
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const fadeIn = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#121211] flex flex-col font-sans antialiased selection:bg-[#121211]/10">
      
      {/* Background Gradients & Ambient Effects */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-20%] w-[60%] h-[50%] rounded-full bg-stone-200/40 blur-[150px]" />
        <div className="absolute top-[30%] right-[-10%] w-[50%] h-[60%] rounded-full bg-orange-100/25 blur-[180px]" />
        <div className="absolute bottom-[10%] left-[10%] w-[50%] h-[50%] rounded-full bg-amber-50/30 blur-[160px]" />
      </div>

      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#faf8f5]/85 backdrop-blur-xl border-b border-stone-200/60 h-16 shadow-xs" : "h-20 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#121211] rounded-xl flex items-center justify-center shadow-md">
              <Navigation className="text-[#faf8f5] w-5 h-5 rotate-45" />
            </div>
            <span className="font-display font-black text-2xl tracking-tight text-[#121211]">
              car<span className="text-[#8c826c]">BB</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-stone-600">
            <a href="#scenario" className="hover:text-[#121211] transition-colors">The Dilemma</a>
            <a href="#how-it-works" className="hover:text-[#121211] transition-colors">How It Works</a>
            <a href="#pricing" className="hover:text-[#121211] transition-colors">Pricing</a>
            <a href="#guarantee" className="hover:text-[#121211] transition-colors">The Guarantee</a>
            <a href="#faq" className="hover:text-[#121211] transition-colors">FAQs</a>
          </div>

          <div className="flex items-center gap-4">
            <motion.a 
              href={WHATSAPP_LINK}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="hidden sm:flex items-center gap-2 bg-[#121211] hover:bg-stone-850 text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-md"
            >
              <MessageCircle className="w-4 h-4 text-green-400 group-hover:scale-110" />
              Instant Direct Launch
            </motion.a>
            <motion.button 
              whileTap={{ scale: 0.90 }}
              className="md:hidden text-stone-700 hover:text-black p-2 -mr-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-[#faf8f5]/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 md:hidden px-6"
        >
          <a href="#scenario" onClick={() => setIsMenuOpen(false)} className="text-2xl font-display font-semibold text-stone-900 hover:text-[#8c826c] transition-colors py-2 px-4">The Dilemma</a>
          <a href="#how-it-works" onClick={() => setIsMenuOpen(false)} className="text-2xl font-display font-semibold text-stone-900 hover:text-[#8c826c] transition-colors py-2 px-4">How it works</a>
          <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="text-2xl font-display font-semibold text-stone-900 hover:text-[#8c826c] transition-colors py-2 px-4">Pricing</a>
          <a href="#guarantee" onClick={() => setIsMenuOpen(false)} className="text-2xl font-display font-semibold text-stone-900 hover:text-[#8c826c] transition-colors py-2 px-4">Guarantee</a>
          <a href="#faq" onClick={() => setIsMenuOpen(false)} className="text-2xl font-display font-semibold text-stone-900 hover:text-[#8c826c] transition-colors py-2 px-4">FAQs</a>
          <motion.a 
            href={WHATSAPP_LINK}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.94 }}
            className="flex items-center justify-center gap-3 bg-[#121211] text-white w-full max-w-xs py-5 rounded-2xl font-black text-xl shadow-xl shadow-stone-900/20"
          >
            <MessageCircle className="w-6 h-6 text-green-400 animate-pulse" />
            WhatsApp Now
          </motion.a>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 md:pt-52 md:pb-36 px-6 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-100 border border-stone-200 text-xs font-semibold tracking-widest uppercase text-[#8c826c]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8c826c] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#8c826c]"></span>
              </span>
              Premium At-Home Tire Concierge
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-black leading-[1.12] tracking-tight text-[#121211]">
              Don&apos;t Waste Your Morning <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#121211] via-[#8c826c] to-[#45423c]">
                Fixing a Flat Tire.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto font-light leading-relaxed">
              We bring complete master-grade tire diagnostics and rapid vulcanized recovery directly to your driveway. Stay impeccably dressed, clean, and perfectly on time.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 max-w-lg mx-auto sm:max-w-none"
          >
            <motion.a 
              href={WHATSAPP_LINK}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#121211] hover:bg-stone-850 text-white min-h-[64px] px-8 py-5 rounded-2xl font-black text-lg shadow-xl shadow-stone-900/10 transition-colors group"
            >
              <MessageCircle className="w-6 h-6 text-green-400 group-hover:scale-110 transition-transform" />
              WhatsApp for Fast Dispatch
              <ArrowRight className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </motion.a>
            <motion.a 
              href={PHONE_LINK}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white border border-stone-200 text-[#121211] hover:bg-stone-50 min-h-[64px] px-8 py-5 rounded-2xl font-bold text-lg transition-colors shadow-sm"
            >
              <Phone className="w-5 h-5 text-[#8c826c]" />
              Call Support Now
            </motion.a>
          </motion.div>

          {/* Quick Stats banner */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="pt-10 flex flex-wrap justify-center gap-x-12 gap-y-4 text-xs font-semibold uppercase tracking-widest text-[#8c826c]"
          >
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#8c826c]" /> Guaranteed 10m Response
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#8c826c]" /> Certified Tech Professionals
            </span>
            <span className="flex items-center gap-2">
              <Wrench className="w-4 h-4 text-[#8c826c]" /> Completely Dust & Hassle-Free
            </span>
          </motion.div>
        </div>
      </section>      {/* "Some mornings don't give second chances" Scenario Section */}
      <section id="scenario" className="px-6 py-20 relative z-10 bg-[#f3eee3] border-y border-stone-200/80">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-sm font-bold tracking-widest uppercase text-[#8c826c] block">The High-Stakes Reality</span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-[#121211] leading-tight">
              Some mornings don&apos;t give <span className="text-[#8c826c]">second chances.</span>
            </h2>
            <p className="text-stone-600 text-lg">
              You walk outside expecting a completely normal day. You are dressed perfectly for:
            </p>
 
            {/* Quick scenarios dynamic slider/grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
              {[
                { icon: <Briefcase className="text-[#8c826c] w-5 h-5" />, title: "An Interview" },
                { icon: <Train className="text-[#8c826c] w-5 h-5" />, title: "A Train to Catch" },
                { icon: <GraduationCap className="text-[#8c826c] w-5 h-5" />, title: "College Exams" },
                { icon: <CalendarCheck className="text-[#8c826c] w-5 h-5" />, title: "An Important Meeting" }
              ].map((item, index) => (
                <div key={index} className="p-4 rounded-2xl bg-[#faf8f5] border border-stone-200/60 flex flex-col items-center justify-center text-center gap-3 shadow-xs">
                  <div className="p-2 bg-stone-100 rounded-xl">
                    {item.icon}
                  </div>
                  <span className="font-semibold text-sm text-stone-800">{item.title}</span>
                </div>
              ))}
            </div>
 
            <div className="pt-8 max-w-2xl mx-auto font-sans">
              <div className="p-5 rounded-2xl bg-red-50 border border-red-200 text-stone-850 text-lg inline-flex items-center gap-3 shadow-sm">
                <AlertTriangle className="text-red-500 flex-shrink-0 animate-bounce" />
                <span>
                  THEN YOU SEE IT: <strong className="text-red-650 tracking-wide font-black">FLAT TIRE.</strong>
                </span>
              </div>
              <p className="text-[#8c826c] mt-4 text-sm tracking-widest uppercase font-black">
                Now you have two choices:
              </p>
            </div>
          </div>
 
          {/* Side-by-side Option Battle (VS) */}
          <div className="grid md:grid-cols-2 gap-8 items-stretch pt-2 relative">
            
            {/* Visual VS Anchor */}
            <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#faf8f5] border border-stone-200/80 items-center justify-center font-display font-black text-xl text-[#8c826c] shadow-md z-25">
              VS
            </div>
 
            {/* Option 01 */}
            <motion.div 
              {...fadeIn}
              className="p-8 rounded-3xl bg-white border border-stone-200 hover:border-stone-300 transition-all flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex justify-between items-center gap-4 flex-wrap mb-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#121211] bg-stone-100 px-3.5 py-1.5 rounded-full border border-stone-200">
                    Option 01
                  </span>
                  <span className="text-[#8c826c] text-xs font-bold uppercase tracking-wider">Traditional Route</span>
                </div>
                <h3 className="text-2xl font-display font-extrabold text-stone-900 mb-6 flex items-center gap-2">
                  Become a mechanic.
                </h3>
                <ul className="space-y-4">
                  {[
                    "Find repair shops yourself",
                    "Waste precious time searching",
                    "Forced to change your vital plans",
                    "Completely ruin your elegant clothes",
                    "End up greasy, late, and stressed"
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3 text-stone-600">
                      <span className="text-red-500 font-black mt-0.5">✕</span>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-8 border-t border-stone-200/60 mt-8 text-xs text-stone-500 font-medium font-sans">
                Results: Worn down tire hands, delayed arrival, ruined high-stakes schedule.
              </div>
            </motion.div>
 
            {/* Option 02 */}
            <motion.div 
              {...fadeIn}
              className="p-8 rounded-3xl bg-[#121211] border border-stone-800 transition-all flex flex-col justify-between shadow-xl relative overflow-hidden group text-white"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#faf8f5]/5 rounded-full blur-2xl group-hover:bg-[#faf8f5]/10 transition-all" />
              <div>
                <div className="flex justify-between items-center gap-4 flex-wrap mb-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#faf8f5] bg-stone-900 border border-stone-800 px-3.5 py-1.5 rounded-full">
                    Option 02
                  </span>
                  <span className="text-[#8c826c] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-ping" />
                    carBB Choice
                  </span>
                </div>
                <h3 className="text-2xl font-display font-extrabold text-white mb-6">
                  Keep getting ready.
                </h3>
                <ul className="space-y-4">
                  {[
                    "Simply open WhatsApp",
                    "Instantly share your current location",
                    "carBB handles it immediately",
                    "Stay clean, safe, and professional",
                    "A flawless recovery on your terms"
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3 text-stone-200">
                      <CheckCircle2 className="w-5 h-5 text-[#8c826c] flex-shrink-0 mt-0.5" />
                      <span className="font-semibold">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-8 border-t border-stone-800 mt-8 flex items-center justify-between gap-4">
                <span className="text-xs text-[#faf8f5]/85 font-black uppercase tracking-widest">
                  Elite driveway concierge
                </span>
                <span className="text-[10px] bg-[#8c826c] text-white px-2 py-0.5 rounded font-black uppercase">
                  Highly Advised
                </span>
              </div>
            </motion.div>
 
          </div>
        </div>
      </section>

      {/* How it Works section with premium layout */}
      <section id="how-it-works" className="px-6 py-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="text-sm font-bold tracking-widest uppercase text-[#8c826c]">The 3-Step Process</span>
            <h2 className="text-4xl md:text-5xl font-display font-black text-[#121211]">Effortless recovery in 3 Steps</h2>
            <p className="text-stone-600 max-w-xl mx-auto font-light leading-relaxed">Skip the mechanics. Reclaim your schedule beautifully.</p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <MessageCircle className="w-8 h-8" />,
                title: "1. Send a WhatsApp",
                desc: "Send a quick WhatsApp message with your current location coordinates. We handle the lookup immediately.",
                step: "01"
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "2. Tech Dispatched",
                desc: "A fully trained and certified carBB tech is dispatched to your driveway instantly.",
                step: "02"
              },
              {
                icon: <Wrench className="w-8 h-8" />,
                title: "3. Fixed in Driveway",
                desc: "Your flat tire is fixed right in your driveway while you finish getting prepared for the day inside.",
                step: "03"
              }
            ].map((step, i) => (
              <motion.div 
                key={i}
                variants={fadeIn}
                className="relative group p-8 bg-white border border-[#121211]/10 rounded-3xl hover:border-[#8c826c] hover:bg-stone-50/50 transition-all hover:-translate-y-2 shadow-xs"
              >
                <div className="absolute -top-4 -right-4 text-7xl font-black text-[#121211]/5 group-hover:text-[#8c826c]/10 transition-colors italic">
                  {step.step}
                </div>
                <div className="w-16 h-16 bg-[#121211] text-[#faf8f5] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#8c826c] transition-all shadow-md">
                  {step.icon}
                </div>
                <h3 className="text-xl font-display font-bold mb-3 text-[#121211]">{step.title}</h3>
                <p className="text-stone-600 leading-relaxed text-sm font-light">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Embedded Guarantee Banner */}
      <section id="guarantee" className="px-6 py-12 z-10">
        <motion.div 
          {...fadeIn}
          className="max-w-5xl mx-auto bg-gradient-to-br from-[#1c1c1a] to-[#121211] rounded-3xl p-8 md:p-12 relative overflow-hidden border border-white/[0.04] text-white shadow-xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid md:grid-cols-2 gap-12 items-center relative">
            <div className="space-y-6">
              <div className="w-12 h-12 bg-stone-900 rounded-2xl flex items-center justify-center border border-white/5">
                <ShieldCheck className="text-[#8c826c] w-7 h-7" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white leading-tight">The carBB Promise</h2>
              <p className="text-stone-400 text-lg leading-relaxed font-light">
                Elite concierge service means we never leave you stranded. We guarantee rapid completion or pay you back for the delay.
              </p>
              <ul className="space-y-4">
                {[
                  "Book in seconds - arrive in 10 minutes",
                  "Fixed directly in your driveway — no towing required",
                  "Pristine professional tools & certified mechanics",
                  "No dirty hands, clean clothes, flawless schedule"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-stone-200 text-sm font-medium">
                    <CheckCircle2 className="w-5 h-5 text-[#8c826c] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Guarantee badge graphic */}
            <div className="flex justify-center items-center">
              <div className="relative p-8 rounded-full border border-stone-850 bg-[#1c1c1b] w-64 h-64 flex flex-col justify-center items-center text-center shadow-2xl">
                <div className="absolute inset-2 rounded-full border border-dashed border-[#8c826c]/20" />
                <span className="text-[#8c826c] font-bold uppercase tracking-widest text-[10px]">Response Time</span>
                <span className="text-5xl font-black font-display text-white mt-1">10m</span>
                <span className="text-stone-400 text-xs mt-1">Guaranteed Arrival</span>
                <Clock className="w-5 h-5 text-[#8c826c] mt-3 animate-pulse" />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* High-Converting Flat Fee Transparency Section */}
      <section id="pricing" className="px-6 py-12 relative z-10 bg-[#faf8f5]">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-3">
            <span className="text-sm font-bold tracking-widest uppercase text-[#8c826c]">Total Transparency</span>
            <h2 className="text-4xl md:text-5xl font-display font-black text-[#121211]">Pragmatic pricing, zero friction.</h2>
            <p className="text-stone-600 max-w-lg mx-auto font-light leading-relaxed">
              No subscription contracts. No surprise hidden overhead. Pay only when you require elite assistance.
            </p>
          </div>

          <motion.div 
            {...fadeIn}
            className="rounded-3xl p-8 md:p-12 border border-stone-200 bg-white space-y-8 relative overflow-hidden shadow-xs"
          >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#121211] via-[#8c826c] to-[#45423c]" />
            
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#121211] bg-stone-100 border border-stone-200 px-3.5 py-1.5 rounded-full">
                Flat Concierge Fee
              </span>
              <div className="flex items-baseline justify-center gap-2 mt-4">
                <span className="text-2xl font-light text-[#8c826c]">₹</span>
                <span className="text-6xl md:text-7xl font-display font-black text-[#121211] tracking-tight">499</span>
                <span className="text-stone-500 font-medium">/visit</span>
              </div>
              <p className="text-xs text-[#8c826c] tracking-wider font-semibold uppercase mt-2">
                Guaranteed 10-Minute Dispatch & Home Setup
              </p>
            </div>

            <div className="border-t border-stone-100 pt-8 grid grid-cols-2 gap-4 text-left max-w-md mx-auto">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#8c826c] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[#121211] font-bold text-sm">Emergency Diagnostics</h4>
                  <p className="text-stone-500 text-xs mt-0.5">Full multi-point tire wellness scan.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#8c826c] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[#121211] font-bold text-sm">Driveway Clean-Up</h4>
                  <p className="text-stone-500 text-xs mt-0.5">Pristine cleanup. No grease residue.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <motion.a 
                href={WHATSAPP_LINK}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 bg-[#121211] text-[#faf8f5] hover:bg-[#222221] w-full sm:w-auto px-10 py-5 rounded-2xl font-black text-lg shadow-md border border-[#121211]/10"
              >
                <MessageCircle className="w-6 h-6 text-green-400" />
                Launch Dispatch For ₹499
              </motion.a>
              <p className="text-[11px] text-stone-500 mt-3 font-medium">
                *Standard vulcanized patches or valve core parts added transparently on-site as required.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Accordion FAQs Section */}
      <section id="faq" className="px-6 py-24 relative z-10">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <span className="text-sm font-bold tracking-widest uppercase text-[#8c826c]">Common Concerns</span>
            <h2 className="text-4xl md:text-5xl font-display font-black text-[#121211]">Frequently Asked Questions</h2>
            <p className="text-stone-600 max-w-xl mx-auto font-light leading-relaxed">
              Everything you need to know about our premium doorstep tire services.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <motion.div 
                key={index}
                className="bg-white border border-[#121211]/10 rounded-2xl overflow-hidden hover:border-[#8c826c] transition-all"
              >
                <motion.button 
                  whileTap={{ scale: 0.985 }}
                  className="w-full px-6 py-5 flex justify-between items-center text-left text-[#121211] font-medium hover:text-[#8c826c] transition-colors gap-4 cursor-pointer focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-display font-bold text-lg">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-[#8c826c] transition-transform duration-300 ${openFaq === index ? "rotate-180" : ""}`} 
                  />
                </motion.button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-stone-600 text-sm leading-relaxed border-t border-stone-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Targeted conversion CTA inside FAQ */}
          <div className="p-8 rounded-3xl bg-[#121211] text-center border border-stone-800 space-y-6 text-white shadow-xl">
            <h3 className="text-2xl font-display font-bold text-white">Do you still have questions?</h3>
            <p className="text-stone-400 text-sm max-w-xl mx-auto font-light leading-relaxed">
              Skip the reading. Let a friendly concierge coordinator resolve your exact emergency real-time over text.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto sm:max-w-none">
              <motion.a 
                href={WHATSAPP_LINK}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 bg-[#faf8f5] hover:bg-stone-100 text-[#121211] w-full sm:w-auto px-8 py-4.5 rounded-xl font-bold text-sm shadow-xl"
              >
                <MessageCircle className="w-5 h-5 text-green-600" />
                Ask Us On WhatsApp
              </motion.a>
              <motion.a 
                href={PHONE_LINK} 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 bg-stone-905 hover:bg-stone-900 border border-stone-800 text-stone-200 w-full sm:w-auto px-8 py-4.5 rounded-xl font-bold text-sm"
              >
                <Phone className="w-4 h-4 text-[#8c826c]" />
                Speak to Coordinator
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      {/* Final Action-Inspiring Conversion Section */}
      <section className="px-6 py-24 overflow-hidden relative z-10">
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-stone-200/30 rounded-full blur-[150px]" />
        </div>

        <motion.div 
          {...fadeIn}
          className="max-w-4xl mx-auto bg-gradient-to-br from-[#1c1c1a] to-[#121211] rounded-[3rem] p-12 md:p-20 text-center space-y-10 border border-white/[0.04] shadow-2xl"
        >
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8c826c]">Save Your Day Now</span>
            <h2 className="text-4xl md:text-6xl font-display font-black text-white leading-tight">Ready to get moving?</h2>
            <p className="text-stone-400 text-lg md:text-xl font-light">
              Don&apos;t wait around with grease on your sleeves. Let carBB handle the stress while you handle the success.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-md mx-auto sm:max-w-none">
            <motion.a 
              href={WHATSAPP_LINK}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto flex items-center justify-center gap-4 bg-white text-[#121211] border-4 border-[#8c826c]/20 px-10 py-5.5 rounded-3xl font-bold text-xl shadow-2xl hover:bg-stone-50"
            >
              <MessageCircle className="w-8 h-8 text-green-600" />
              WhatsApp Dispatch
            </motion.a>
            <motion.a 
              href={PHONE_LINK}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto text-stone-300 hover:text-white font-bold flex items-center justify-center gap-2 py-4 px-6 group transition-colors"
            >
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform text-[#8c826c]" />
              Or call now
            </motion.a>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 opacity-40 text-sm italic text-stone-400">
            <span>&copy; 2026 carBB Elite Concierge</span>
            <div className="flex gap-8">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Sticky Mobile CTA Bar - Fully optimized with premium haptic physics */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1 }}
        className="fixed bottom-6 left-6 right-6 z-50 md:hidden"
      >
        <div className="bg-white/95 backdrop-blur-2xl p-3.5 rounded-3xl flex gap-3 shadow-2xl border border-stone-200/80">
          <motion.a 
            href={WHATSAPP_LINK}
            whileTap={{ scale: 0.94 }}
            className="flex-1 bg-[#121211] text-[#faf8f5] hover:bg-black min-h-[56px] px-5 py-4 rounded-2xl font-black flex items-center justify-center gap-2.5 text-sm shadow-xl"
          >
            <MessageCircle className="w-5 h-5 text-green-400 animate-pulse" />
            WhatsApp Dispatch
          </motion.a>
          <motion.a 
            href={PHONE_LINK}
            whileTap={{ scale: 0.90 }}
            className="bg-stone-100 text-[#121211] p-4 rounded-2xl flex items-center justify-center border border-stone-200/60 min-w-[56px] min-h-[56px] active:bg-stone-200"
          >
            <Phone className="w-5 h-5 text-[#8c826c]" />
          </motion.a>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="py-12 border-t border-stone-200/60 px-6 z-10 relative bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 opacity-80">
            <div className="w-8 h-8 bg-[#121211] rounded-lg flex items-center justify-center">
              <Navigation className="text-[#faf8f5] w-4 h-4 rotate-45" />
            </div>
            <span className="font-display font-bold text-sm text-[#121211]">carBB</span>
          </div>
          
          <div className="flex gap-8 text-xs font-bold text-stone-500 uppercase tracking-widest">
            <a href="https://www.instagram.com/midikaif/" target="_blank" rel="noopener noreferrer" className="hover:text-[#8c826c] transition-colors">Instagram</a>
            <a href="https://www.linkedin.com/in/md-kaif-khan/" target="_blank" rel="noopener noreferrer" className="hover:text-[#8c826c] transition-colors">LinkedIn</a>
          </div>
          
          <p className="text-xs text-stone-500 font-light">
            Premium Doorstep Auto Concierge. Not for roadside emergency situations on active state highways.
          </p>
        </div>
      </footer>
    </div>
  );
}
