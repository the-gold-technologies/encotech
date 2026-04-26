import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowLeftIcon,
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
  ArrowRightIcon } from
'lucide-react';
// Comprehensive Data Map for all 12 Insights
const insightsData = [
// Case Studies
{
  id: 1,
  slug: 'obra-c-thermal-success',
  title: "The Obra 'C' Thermal Success",
  category: 'Case Study',
  description:
  'Executing complex IBR piping erection and commissioning for a massive 2x660 MW project in Uttar Pradesh.',
  date: 'March 2024',
  location: 'Uttar Pradesh, India',
  image:
  'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=2400',
  content: [
  {
    type: 'paragraph',
    text: "The Obra 'C' Thermal Power Project represents a significant milestone in India's journey towards robust and reliable energy infrastructure. Encotec Energy India was entrusted with the critical task of IBR (Indian Boiler Regulations) piping erection, testing, and commissioning for this massive 2x660 MW supercritical thermal power plant."
  },
  {
    type: 'heading',
    text: 'Project Scope and Complexity'
  },
  {
    type: 'paragraph',
    text: 'The scope of work encompassed the complete erection of high-pressure piping systems, a task demanding unparalleled precision and adherence to stringent safety standards. The project involved handling thousands of tons of specialized alloy steel pipes, requiring advanced welding techniques and rigorous non-destructive testing (NDT).'
  },
  {
    type: 'quote',
    text: "Our approach was rooted in meticulous planning and the deployment of highly skilled manpower. We understood that the integrity of the IBR piping is paramount to the plant's operational safety and efficiency."
  },
  {
    type: 'heading',
    text: 'Overcoming Challenges'
  },
  {
    type: 'paragraph',
    text: 'Executing a project of this magnitude in a challenging environment required innovative solutions. We implemented advanced project management tools to track progress in real-time, ensuring seamless coordination between engineering, procurement, and construction teams. Our proactive approach to risk management allowed us to anticipate potential bottlenecks and mitigate them effectively.'
  },
  {
    type: 'list',
    items: [
    'Zero lost-time incidents during the entire 18-month execution phase.',
    'Achieved 100% first-time-right welding quality on critical high-pressure joints.',
    'Completed the commissioning phase 2 weeks ahead of the baseline schedule.']

  },
  {
    type: 'heading',
    text: 'Value Delivered'
  },
  {
    type: 'paragraph',
    text: "The successful completion of the Obra 'C' project not only reinforced Encotec's position as a leader in power plant engineering but also contributed significantly to the region's energy security. The plant now operates at peak efficiency, delivering reliable power to millions of homes and businesses."
  }]

},
{
  id: 2,
  slug: 'ensuring-reliability-rajpura',
  title: "Ensuring Reliability for Punjab's Power Heart",
  category: 'Case Study',
  description:
  "Comprehensive O&M for the 2x700 MW Rajpura Supercritical Power Plant, managing operations with an owner's mindset.",
  date: 'January 2024',
  location: 'Rajpura, Punjab',
  image:
  'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=2400',
  content: [
  {
    type: 'paragraph',
    text: "At Rajpura, we don't just see a massive 1,400 MW plant; we see the energy that fuels homes, businesses, and lives across Punjab. Since 2018, our team has been on the ground, treating this supercritical facility as if it were our own. Managing a plant of this scale requires more than just technical expertise - it requires continuous care and foresight."
  },
  {
    type: 'heading',
    text: 'The Project & Partner'
  },
  {
    type: 'paragraph',
    text: 'This comprehensive O&M engagement for the 2x700 MW Rajpura Supercritical Power Plant is executed in partnership with Nabha Power Limited (L&T Power Division).'
  },
  {
    type: 'heading',
    text: 'Our Hands-On Approach'
  },
  {
    type: 'paragraph',
    text: 'Our 250+ engineers provide a full spectrum of services to keep the heart of this plant beating at peak efficiency. This includes:'
  },
  {
    type: 'list',
    items: [
    'Precision Maintenance: From the boilers and turbines to the critical balance of plant (BOP) equipment.',
    'Smart Planning: We utilize condition monitoring and meticulous O&M planning to address potential issues before they cause downtime.',
    "Expert Overhauling: We manage both annual and major capital overhauling, ensuring the plant's long-term health and performance."]

  },
  {
    type: 'heading',
    text: 'The Human Impact'
  },
  {
    type: 'paragraph',
    text: 'By maintaining a supercritical plant with such high standards, we are helping to provide more efficient, reliable, and cleaner power for the region, proving that large-scale engineering can have a local, human touch.'
  },
  {
    type: 'quote',
    text: "We don't just see a massive 1,400 MW plant; we see the energy that fuels homes, businesses, and lives across Punjab."
  }]

},
{
  id: 3,
  slug: 'greener-future-gujarat-solar',
  title: 'Engineering a Greener Future in the Sands of Gujarat',
  category: 'Case Study',
  description:
  'End-to-end installation and commissioning of a 10 MWp ground-mounted solar project, turning intense sun into sustainable power.',
  date: 'November 2023',
  location: 'Jainabad, Gujarat',
  image:
  'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=2400',
  content: [
  {
    type: 'paragraph',
    text: 'Transitioning to renewable energy is a journey, and at Jainabad, Gujarat, Encotec was proud to lead the way. In 2013, we took on the challenge of bringing a 10 MWp ground-mounted solar project to life, turning the intense Gujarat sun into a sustainable power source.'
  },
  {
    type: 'heading',
    text: 'The Project & Partner'
  },
  {
    type: 'paragraph',
    text: 'This 10 MWp Solar PV Installation and Commissioning project was successfully delivered in partnership with Moser Baer Engineering & Construction Ltd.'
  },
  {
    type: 'heading',
    text: 'Building with Precision'
  },
  {
    type: 'paragraph',
    text: 'Our team managed the project from the ground up, focusing on every technical detail to ensure the best energy yield for our client:'
  },
  {
    type: 'list',
    items: [
    'Site-Specific Design: We started with a detailed design review tailored to the unique site conditions.',
    'Full-Scale Erection: Our engineers handled the mounting of polycrystalline modules, complex cabling, and the installation of array junction boxes and inverters.',
    'Grid Readiness: We concluded with rigorous testing and commissioning, ensuring the project was perfectly synchronized with the grid.']

  },
  {
    type: 'heading',
    text: 'The Human Impact'
  },
  {
    type: 'paragraph',
    text: "This project wasn't just about installing panels; it was about Encotec's commitment to bridging the gap to a renewable future. By delivering a high-performing solar asset, we helped our partners take a significant step toward a cleaner tomorrow."
  },
  {
    type: 'quote',
    text: 'Transitioning to renewable energy is a journey, and at Jainabad, Gujarat, Encotec was proud to lead the way.'
  }]

},
{
  id: 4,
  slug: 'powering-gateway-india-airport',
  title: 'Powering the Gateway to India',
  category: 'Case Study',
  description:
  'Specialized utility and electrical O&M for Indira Gandhi International Airport, ensuring the critical nervous system remains flawless.',
  date: 'September 2023',
  location: 'New Delhi, India',
  image:
  'https://images.unsplash.com/photo-1436491865332-7a61a109db05?auto=format&fit=crop&q=80&w=2400',
  content: [
  {
    type: 'paragraph',
    text: 'An international airport never sleeps, and neither does the infrastructure that supports it. At Indira Gandhi International Airport (IGI) in New Delhi, Encotec serves as a trusted auxiliary partner, ensuring that the critical electrical "nervous system" of one of the world\'s busiest hubs remains flawless.'
  },
  {
    type: 'heading',
    text: 'The Project & Partner'
  },
  {
    type: 'paragraph',
    text: 'We provide Specialized Utility and Electrical O&M for Indira Gandhi International Airport (DIAL) in partnership with GMR Group / DIAL.'
  },
  {
    type: 'heading',
    text: 'Reliability Under Pressure'
  },
  {
    type: 'paragraph',
    text: 'Managing airport utilities requires a specialized set of skills and a deep commitment to safety. Our team oversees:'
  },
  {
    type: 'list',
    items: [
    'High-Voltage Assets: Operation and maintenance of both Air Insulated (AIS) and Gas Insulated (GIS) substations.',
    'Uninterrupted Support: Managing DG sets and critical terminal blocks to ensure power is always available, even in emergencies.',
    'Safety First: Our work includes managing Fire Protection Systems (FPS) and Public Health Engineering (PHE) for both landside and airside facilities.']

  },
  {
    type: 'heading',
    text: 'The Human Impact'
  },
  {
    type: 'paragraph',
    text: "Behind every seamless take-off and every bright terminal is a team of Encotec experts working quietly to ensure the safety and comfort of millions of travelers. We take pride in being the silent force that keeps India's gateway running."
  },
  {
    type: 'quote',
    text: 'An international airport never sleeps, and neither does the infrastructure that supports it.'
  }]

},
// News
{
  id: 5,
  slug: 'insurance-surety-bonds-replace-bank-guarantees',
  title: 'Insurance Surety Bonds Replace Bank Guarantees in Power Sector',
  category: 'News',
  description:
  'Ministry of Power introduces Insurance Surety Bonds as an alternative to traditional Bank Guarantees across all power procurement frameworks.',
  date: 'April 8, 2026',
  image:
  'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2400',
  content: [
  {
    type: 'paragraph',
    text: 'In a significant move to improve the "ease of doing business," the Ministry of Power has issued a directive allowing Insurance Surety Bonds (ISBs) as an alternative to traditional Bank Guarantees (BGs) across all power procurement frameworks. This reform is designed to reduce the liquidity burden on developers and utilities.'
  },
  {
    type: 'heading',
    text: 'Why It Matters to Encotec'
  },
  {
    type: 'paragraph',
    text: 'This flexibility in financial instruments makes it easier for engineering and O&M partners to participate in large-scale infrastructure projects without tying up massive amounts of capital in banks. For Encotec, this opens up new opportunities to engage in larger projects with reduced financial barriers.'
  },
  {
    type: 'paragraph',
    text: 'Source: https://solarquarter.com/2026/04/08/ministry-of-power-introduces-insurance-surety-bonds-to-replace-bank-guarantees-in-the-power-sector/'
  }]

},
{
  id: 6,
  slug: 'india-270gw-peak-power-demand',
  title: 'India Braces for Record 270 GW Peak Power Demand',
  category: 'News',
  description:
  'India is fully prepared to handle a record 270 GW peak power demand this summer through strengthened generation capacity and grid management.',
  date: 'March 20, 2026',
  image:
  'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=2400',
  content: [
  {
    type: 'paragraph',
    text: 'Union Minister Manohar Lal Khattar announced that India is fully prepared to handle a record 270 GW peak power demand this summer. To meet this surge, the government has focused on strengthening generation capacity, ensuring coal availability for thermal plants, and enhancing grid management.'
  },
  {
    type: 'heading',
    text: 'Why It Matters to Encotec'
  },
  {
    type: 'paragraph',
    text: "As a specialist in thermal O&M and grid synchronization, Encotec's expertise in maintaining plant reliability is critical during these high-pressure peak periods. Our teams ensure that the plants we manage operate at maximum availability when the nation needs it most."
  },
  {
    type: 'paragraph',
    text: 'Source: https://www.eqmagpro.com/india-prepared-to-handle-record-270-gw-peak-power-demand-this-summer-eq/'
  }]

},
{
  id: 7,
  slug: 'green-signal-3200mw-thermal-projects',
  title: 'Green Signal for 3,200 MW of New Thermal Projects',
  category: 'News',
  description:
  'Expert Appraisal Committee recommends environmental clearance for two massive 1,600 MW ultra-supercritical coal-based projects.',
  date: 'April 6, 2026',
  image:
  'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=2400',
  content: [
  {
    type: 'paragraph',
    text: 'The Expert Appraisal Committee has recommended environmental clearance for two massive 1,600 MW coal-based ultra-supercritical projects. One project by JSW Thermal Energy is slated for West Bengal, while Torrent Power will develop a project in Madhya Pradesh. Both will utilize ultra-supercritical technology and domestic coal.'
  },
  {
    type: 'heading',
    text: 'Why It Matters to Encotec'
  },
  {
    type: 'paragraph',
    text: "With Encotec's extensive experience in supercritical thermal O&M (like the Rajpura and Shree Singaji plants), these new high-tech units represent significant future opportunities for specialized engineering services."
  },
  {
    type: 'paragraph',
    text: 'Source: https://powerpeakdigest.com/power-sector-news-roundup-for-april-6-2026/'
  }]

},
{
  id: 8,
  slug: 'ghaziabad-mandates-rooftop-solar',
  title: 'Ghaziabad Mandates Rooftop Solar for New Buildings',
  category: 'News',
  description:
  'Ghaziabad makes rooftop solar installations mandatory for all building plan approvals, aligning with national solar adoption efforts.',
  date: 'April 9, 2026',
  image:
  'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=2400',
  content: [
  {
    type: 'paragraph',
    text: 'In a push for local energy independence, Ghaziabad has made rooftop solar installations mandatory for all building plan approvals. This aligns with national efforts like the PM Surya Ghar: Muft Bijli Yojana, which has already seen millions of households adopt solar power.'
  },
  {
    type: 'heading',
    text: 'Why It Matters to Encotec'
  },
  {
    type: 'paragraph',
    text: 'This local mandate reflects the broader surge in the renewable energy sector, where Encotec provides full-lifecycle support from feasibility reports to testing and commissioning.'
  },
  {
    type: 'paragraph',
    text: 'Sources: https://www.eqmagpro.com/india-prepared-to-handle-record-270-gw-peak-power-demand-this-summer-eq/ and https://jmkresearch.com/wp-content/uploads/2026/03/Q4-2025-RE-Report-Oct-Dec_JMK-Research.pdf'
  }]

},
{
  id: 9,
  slug: '765kv-transmission-corridor-commissioned',
  title: 'Massive 765 kV Transmission Corridor Commissioned',
  category: 'News',
  description:
  'A new 765 kV double-circuit transmission corridor spanning 700 km between Fatehgarh and Beawar has been commissioned for renewable energy evacuation.',
  date: 'April 6, 2026',
  image:
  'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=2400',
  content: [
  {
    type: 'paragraph',
    text: 'A new 765 kV double-circuit transmission corridor spanning 700 kilometres between Fatehgarh and Beawar has been commissioned. This project is essential for the high-capacity evacuation of renewable energy and includes the integration of advanced 765/400 kV substations.'
  },
  {
    type: 'heading',
    text: 'Why It Matters to Encotec'
  },
  {
    type: 'paragraph',
    text: "Encotec's specialized service line in Transmission & Distribution (up to 765 kV) and its expertise in substation O&M perfectly match the technical requirements of these new high-voltage corridors."
  },
  {
    type: 'paragraph',
    text: 'Source: https://powerpeakdigest.com/power-sector-news-roundup-for-april-6-2026/'
  }]

},
{
  id: 10,
  slug: 'new-directions-imported-coal-power-plants',
  title: 'New Directions for Imported Coal-Based Power Plants',
  category: 'News',
  description:
  'Ministry of Power issues fresh directions under Section 11 of the Electricity Act to ensure imported coal plants remain operational during high-demand months.',
  date: 'March 27, 2026',
  image:
  'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2400',
  content: [
  {
    type: 'paragraph',
    text: 'The Ministry of Power has issued fresh directions under Section 11 of the Electricity Act to generating companies using imported coal. These directions are aimed at ensuring that these plants remain operational and contribute to the national grid to prevent power shortages during the upcoming high-demand months.'
  },
  {
    type: 'heading',
    text: 'Why It Matters to Encotec'
  },
  {
    type: 'paragraph',
    text: 'Maintaining imported coal-based units requires meticulous O&M planning and overhauling support, areas where Encotec provides essential back-office and on-site engineering expertise.'
  },
  {
    type: 'paragraph',
    text: 'Source: https://powermin.gov.in/en/announcements'
  }]

},
// Blogs
{
  id: 11,
  slug: 'owners-mindset-power-plant-care',
  title:
  "Treating Your Power Plant Like Our Own: The Magic of the Owner's Mindset",
  category: 'Blog',
  description:
  "What does having an Owner's Mindset mean for the people on the ground? It means our 250+ engineers see a vital asset that supports thousands of lives.",
  date: 'April 2026',
  readTime: '6 min read',
  image:
  'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=2400',
  content: [
  {
    type: 'paragraph',
    text: 'At Encotec, we often talk about having an "Owner\'s mindset". But what does that actually mean for the people on the ground? It means that when our 250+ engineers step onto a site, they aren\'t just looking at a contract; they are looking at a vital asset that supports thousands of lives.'
  },
  {
    type: 'heading',
    text: 'Continuous Care and Foresight'
  },
  {
    type: 'paragraph',
    text: "Whether we are managing a massive 2x700 MW supercritical plant in Rajpura or a captive unit in Goa, our approach is built on continuous care and foresight. We don't just wait for things to break; we use advanced condition monitoring and performance diagnostics to stay ahead of the curve."
  },
  {
    type: 'quote',
    text: "For us, energy isn't just about megawatts — it's about the 1,800+ dedicated staff members who show up every day to keep the world moving."
  },
  {
    type: 'heading',
    text: 'Precision and Accountability'
  },
  {
    type: 'paragraph',
    text: "By treating every boiler, turbine, and auxiliary system with the same precision and accountability an owner would, we've been able to help our partners achieve peak efficiency and long-term reliability. This philosophy is what sets Encotec apart in the energy services landscape."
  }]

},
{
  id: 12,
  slug: 'sunbeams-to-megawatts-renewable-future',
  title:
  'From Sunbeams to Megawatts: Engineering the Journey to a Renewable Future',
  category: 'Blog',
  description:
  'Our journey into renewables is a commitment to sustainable development — bridging the gap between traditional power and a solar future.',
  date: 'March 2026',
  readTime: '7 min read',
  image:
  'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=2400',
  content: [
  {
    type: 'paragraph',
    text: 'The transition to green energy is one of the greatest challenges of our time, and at Encotec, we believe in "finding new ways to energy solutions". Our journey into renewables isn\'t just a business line; it\'s a commitment to sustainable development and leaving the world better than we found it.'
  },
  {
    type: 'heading',
    text: 'Technical Mastery at Every Stage'
  },
  {
    type: 'paragraph',
    text: 'Bridging the gap between traditional power and a solar future requires technical mastery at every stage. We support our partners through the entire lifecycle — starting from pre-feasibility reports and site assessments to the precision erection of polycrystalline modules.'
  },
  {
    type: 'quote',
    text: 'By combining our deep engineering roots with innovative solar technology, we are helping to ensure that the clean energy of tomorrow is as reliable as the power of today.'
  },
  {
    type: 'heading',
    text: 'Impactful Projects'
  },
  {
    type: 'paragraph',
    text: 'Our experience spans impactful projects like the 10 MWp Solar PV project in Gujarat and the 125 MW Solar Thermal project in Pokharan. Each project reinforces our commitment to bridging the gap to a renewable future.'
  }]

},
{
  id: 13,
  slug: 'silent-force-behind-your-flight',
  title:
  'Powering the Gateway: The Specialized World of Airport Utility Management',
  category: 'Blog',
  description:
  'What keeps an international airport running flawlessly 24/7? Behind the scenes at DIAL and Noida International Airport, Encotec is at work.',
  date: 'February 2026',
  readTime: '5 min read',
  image:
  'https://images.unsplash.com/photo-1436491865332-7a61a109db05?auto=format&fit=crop&q=80&w=2400',
  content: [
  {
    type: 'paragraph',
    text: 'Have you ever wondered what keeps an international airport running flawlessly 24/7? Behind the scenes of the bustling terminals at Indira Gandhi International Airport (DIAL) and the upcoming Noida International Airport (YIAPL), Encotec is at work.'
  },
  {
    type: 'heading',
    text: 'A Unique Blend of Expertise'
  },
  {
    type: 'paragraph',
    text: 'Managing critical infrastructure for global hubs requires a unique blend of high-voltage expertise and a safety-first culture. Our teams oversee everything from AIS and GIS substations to the Fire Protection Systems (FPS) and Public Health Engineering (PHE) that ensure traveler comfort and safety.'
  },
  {
    type: 'quote',
    text: "It's a high-pressure job, but with our triple ISO certifications in Quality, Environment, and Safety, we take pride in being the silent force that ensures your journey begins and ends with a smile."
  },
  {
    type: 'heading',
    text: 'Trusted Security Partner'
  },
  {
    type: 'paragraph',
    text: 'We hold specific security clearances from the Bureau of Civil Aviation Security (BCAS), allowing us to act as a trusted auxiliary partner in these high-security environments. This level of trust is earned through consistent performance and unwavering commitment to safety standards.'
  }]

}];

export function InsightDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  // Scroll to top on mount and when slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  const article = insightsData.find((item) => item.slug === slug);
  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-50 px-6">
        <h1 className="text-4xl font-black text-neutral-900 mb-4">
          Article Not Found
        </h1>
        <p className="text-neutral-600 mb-8 text-center max-w-md">
          The insight you are looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/insights"
          className="px-8 py-4 bg-brand-pink text-white text-sm font-bold tracking-wider uppercase hover:bg-[#a0004f] transition-colors duration-300">
          
          Back to Insights
        </Link>
      </div>);

  }
  // Get 3 related articles (excluding current)
  const relatedArticles = insightsData.
  filter((item) => item.id !== article.id).
  slice(0, 3);
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Case Study':
        return 'bg-brand-pink text-white';
      case 'News':
        return 'bg-blue-500 text-white';
      case 'Blog':
        return 'bg-green-500 text-white';
      default:
        return 'bg-neutral-800 text-white';
    }
  };
  return (
    <main className="w-full bg-white min-h-screen selection:bg-brand-pink selection:text-white pb-20">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 lg:px-10 py-4 flex justify-between items-center bg-white/90 backdrop-blur-md border-b border-neutral-100">
        <Link to="/" className="flex items-center">
          <img
            src="/encotec-768x179.png"
            alt="Encotec - Member of Dornier Group"
            className="h-10 w-auto" />
          
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-neutral-200 text-xs font-medium text-neutral-600">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
            SINCE 2011
          </div>
          <Link
            to="/about"
            className="text-sm font-medium text-neutral-700 hover:text-brand-pink transition-colors">
            
            About
          </Link>
          <Link
            to="/services"
            className="text-sm font-medium text-neutral-700 hover:text-brand-pink transition-colors">
            
            Services
          </Link>
          <Link to="/insights" className="text-sm font-medium text-brand-pink">
            Insights
          </Link>
          <Link
            to="/careers"
            className="text-sm font-medium text-neutral-700 hover:text-brand-pink transition-colors">
            
            Careers
          </Link>
          <Link
            to="/certifications"
            className="text-sm font-medium text-neutral-700 hover:text-brand-pink transition-colors">
            
            Certifications
          </Link>
          <Link
            to="/leadership"
            className="text-sm font-medium text-neutral-700 hover:text-brand-pink transition-colors">
            
            Leadership
          </Link>
        </div>

        <Link
          to="/contact"
          className="px-6 py-2.5 bg-brand-pink text-white text-xs font-bold tracking-wider uppercase hover:bg-[#a0004f] transition-colors duration-300">
          
          Contact Us
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[70vh] w-full bg-neutral-900 text-white overflow-hidden flex items-end pb-20">
        <motion.div
          style={{
            y
          }}
          className="absolute inset-0">
          
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover opacity-50" />
          
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent" />
        </motion.div>

        <div className="max-w-4xl mx-auto px-6 lg:px-10 relative z-10 w-full">
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8
            }}>
            
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-pink hover:gap-3 transition-all duration-300 mb-8">
              
              <ArrowLeftIcon size={16} />
              Back to Insights
            </Link>

            <div className="mb-6">
              <span
                className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider ${getCategoryColor(article.category)}`}>
                
                {article.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-8">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-neutral-300">
              <div className="flex items-center gap-2">
                <CalendarIcon size={16} />
                {article.date}
              </div>
              {article.location &&
              <div className="flex items-center gap-2">
                  <MapPinIcon size={16} />
                  {article.location}
                </div>
              }
              {article.readTime &&
              <div className="flex items-center gap-2">
                  <ClockIcon size={16} />
                  {article.readTime}
                </div>
              }
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8,
              delay: 0.2
            }}
            className="prose prose-lg prose-neutral max-w-none">
            
            {/* Render Rich Content */}
            <div className="space-y-8 text-neutral-700 leading-relaxed text-lg">
              {article.content.map((block, index) => {
                if (block.type === 'paragraph') {
                  return (
                    <p
                      key={index}
                      className={
                      index === 0 ?
                      'text-xl text-neutral-900 font-medium leading-relaxed' :
                      ''
                      }>
                      
                      {block.text}
                    </p>);

                }
                if (block.type === 'heading') {
                  return (
                    <h2
                      key={index}
                      className="text-3xl font-black text-neutral-900 mt-12 mb-6 tracking-tight">
                      
                      {block.text}
                    </h2>);

                }
                if (block.type === 'quote') {
                  return (
                    <blockquote
                      key={index}
                      className="p-8 my-12 bg-brand-panel border-l-4 border-brand-pink">
                      
                      <p className="text-xl text-neutral-900 font-medium italic m-0">
                        "{block.text}"
                      </p>
                    </blockquote>);

                }
                if (block.type === 'list' && block.items) {
                  return (
                    <ul key={index} className="space-y-4 my-8">
                      {block.items.map((item, i) =>
                      <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-pink mt-2.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      )}
                    </ul>);

                }
                return null;
              })}
            </div>
          </motion.div>

          {/* Share / Tags section could go here */}
          <div className="mt-16 pt-8 border-t border-neutral-200 flex justify-between items-center">
            <div className="text-sm font-bold text-neutral-900 uppercase tracking-wider">
              Share this article
            </div>
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-brand-pink hover:text-white transition-colors">
                in
              </button>
              <button className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-brand-pink hover:text-white transition-colors">
                tw
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Insights */}
      <section className="py-24 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-black text-neutral-900 uppercase tracking-tight">
              Related Insights
            </h2>
            <Link
              to="/insights"
              className="text-sm font-bold text-brand-pink hover:text-[#a0004f] transition-colors uppercase tracking-wider">
              
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map((item, index) =>
            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1
              }}
              whileHover={{
                y: -8
              }}
              className="group bg-white border border-neutral-200 hover:border-brand-pink/30 transition-all duration-300 overflow-hidden flex flex-col">
              
                <Link
                to={`/insights/${item.slug}`}
                className="flex flex-col h-full">
                
                  <div className="relative h-48 overflow-hidden">
                    <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600" />
                  
                    <div className="absolute top-4 left-4">
                      <span
                      className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${getCategoryColor(item.category)}`}>
                      
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-black text-neutral-900 mb-3 uppercase tracking-tight group-hover:text-brand-pink transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed mb-6 line-clamp-2 flex-grow">
                      {item.description}
                    </p>
                    <div className="inline-flex items-center gap-2 text-xs font-bold text-neutral-900 group-hover:text-brand-pink transition-colors uppercase tracking-wider mt-auto">
                      Read More
                      <ArrowRightIcon size={14} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-neutral-200 bg-white mt-auto">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row justify-between items-center text-neutral-500 text-sm">
          <div className="font-black text-neutral-900 text-xl mb-4 md:mb-0 tracking-tighter">
            ENCOTEC
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-pink transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-brand-pink transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-brand-pink transition-colors">
              Contact
            </a>
          </div>
          <div className="mt-4 md:mt-0">© 2024 Encotec Engineering.</div>
        </div>
      </footer>
    </main>);

}