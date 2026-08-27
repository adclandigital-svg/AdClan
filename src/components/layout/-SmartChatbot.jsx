"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import "./chats.css";
import { 
  FaComment,
  FaComments,
  FaCommentDots,
  FaPhoneAlt,
  FaWhatsapp,
  FaRobot,
  FaHeadset,
  FaUserTie
} from "react-icons/fa";

/* ===================== YOUR DATA (UNCHANGED) ===================== */

const intents = [
  // =========================================================================
  // SECTION 1: GREETINGS & INITIAL TOUCHPOINTS
  // =========================================================================

  {
    keys: [
      "hi",
      "hello",
      "hey",
      "hi there",
      "hello there",
      "hey adclan",
      "good morning",
      "good afternoon",
      "good evening",
      "namaste",
      "hola",
      "greetings",
      "hi team",
      "hello team",
      "hey team",
      "are you there",
      "anyone there",
      "adclan hi",
    ],
    reply:
      "Hello 👋 Welcome to Adclan! You know, someone wise once said we were given two ears and one mouth so we could listen twice as much as we speak. That's our entire philosophy here. I'm your AI assistant, and I'm here to listen. How can I help you today?",
    sentiment: "friendly",
    collect: false,
  },

  {
    keys: ["namaste", "namaskar", "pranam", "shubh prabhat"],
    reply:
      "नमस्ते! 🙏 Warm greetings from the Adclan team. We're delighted to connect with you. How may we assist you today?",
    sentiment: "warm",
    collect: false,
  },

  // =========================================================================
  // SECTION 2: ABOUT ADCLAN – PHILOSOPHY, MISSION, IDENTITY
  // =========================================================================

  {
    keys: [
      "about adclan",
      "about us",
      "your company",
      "who are you",
      "tell me about yourself",
      "adclan who",
      "company profile",
      "introduce yourself",
      "adclan background",
      "your story",
      "how did adclan start",
      "your journey",
      "about your agency",
      "marketing agency delhi",
      "adclan media",
    ],
    reply:
      "Adclan is a full-service marketing and communications agency based in New Delhi NCR. Our entire philosophy is built around one simple idea: we were given two ears and one mouth so we could listen twice as much as we speak. We prefer to be involved with brands right from their birth—laying out the step-by-step roadmap for launch, competitor positioning, and market establishment. We're not just a vendor; we're a partner who listens first, strategizes second, and executes third. Our team of 5+ dedicated members serves 10+ happy clients with an 80% success rate. We recently onboarded Shweta Tiwari as brand ambassador for Kidsmate Cycles and work with groups like Galaxy Group and Ace Hanei. Would you like to know more about a specific service?",
    collect: false,
    sentiment: "informative",
  },

  {
    keys: [
      "two ears one mouth",
      "listen more speak less",
      "your philosophy",
      "listening philosophy",
      "why two ears",
      "listen first",
      "adclan philosophy",
      "your approach",
      "your methodology",
      "what makes you different",
      "why should i choose you",
      "unique selling point",
      "usp",
      "differentiator",
    ],
    reply:
      "That's the heart of who we are. 'When the creator made us with two ears and one mouth, it was clear that we were meant to listen more and speak less.' At Adclan, we do exactly that. We listen and listen and listen to our clients before we ever open our mouth. Most agencies walk in with a pitch deck. We walk in with open ears. This philosophy shapes everything—from our brand strategy to our media buying. It's not a tagline; it's our operating system. How can we listen to your brand story today?",
    sentiment: "passionate",
    collect: true, // This often leads to a conversation
  },

  {
    keys: [
      "why name adclan",
      "meaning of adclan",
      "name meaning",
      "adclan etymology",
      "behind the name",
      "clan meaning",
      "advertising clan",
      "ad clan",
    ],
    reply:
      "Great question! 'Adclan' is a fusion of 'Advertising' and 'Clan'. We see ourselves as a clan—a close-knit tribe of strategists, creatives, and media experts who operate as one family. Unlike a faceless corporation, a clan shares knowledge, protects its members, and fights for a common cause: your brand's success. We liked the sound of it, and more importantly, we live by it. We're not just an agency; we're your clan.",
    collect: false,
    sentiment: "storytelling",
  },

  {
    keys: [
      "when was adclan founded",
      "established year",
      "founded",
      "since when",
      "company age",
      "how old",
      "years in business",
      "experience years",
    ],
    reply:
      "While we keep our founding year a bit低调 (humble) on our site, what we can tell you is that we have 5+ core team members and have successfully delivered for 10+ happy clients with an 80% success rate. Our experience spans across traditional media, digital, OTT, and BTL activations. Age is just a number—it's the quality of work and the strength of relationships that define us. Would you like to discuss your project specifically?",
    collect: true,
  },

  // =========================================================================
  // SECTION 3: SERVICE OVERVIEW & CAPABILITIES
  // =========================================================================

  {
    keys: [
      "services",
      "what do you do",
      "your services",
      "adclan services",
      "what do you offer",
      "tell me about your services",
      "what can you do for me",
      "service list",
      "capabilities",
      "full service",
      "360 marketing",
      "integrated marketing",
      "marketing solutions",
      "digital solutions",
      "service portfolio",
      "offerings",
      "work",
      "what you offer",
      "service categories",
    ],
    reply:
      "We offer end-to-end, integrated marketing solutions that span both offline and online. Here is our complete capability map:\n\n🎯 **BRAND & CREATIVE**\n• Brand Strategy (Birth-to-Launch Roadmap)\n• Creative Strategy (Positioning, Core Message, Tone)\n• Logo & Visual Identity\n• Campaign Development\n\n📺 **MEDIA**\n• Media Strategy (Print, TV, Radio, Outdoor, Digital)\n• Media Buying (Leveraging volume for best ROI)\n• OTT Marketing (Disney+Hotstar, YouTube TV)\n\n📱 **DIGITAL**\n• Website Development\n• SEO & SMO\n• PPC & Performance Ads\n• Social Media Marketing\n• Content Creation\n\n🎬 **PRODUCTION**\n• TV Commercials\n• Radio Spots\n• Print Production\n• Photography & 3D Rendering\n\n🎪 **BTL & EXPERIENTIAL**\n• Events & Activations\n• Direct Marketing\n• Brand Experiences\n\nWhich service area aligns with your current business goal?",
    collect: true,
    suggestions: [
      "Brand Strategy",
      "Media Buying",
      "OTT Marketing",
      "BTL Activities",
      "Production",
      "Digital",
    ],
  },

  {
    keys: [
      "integrated marketing",
      "360 degree",
      "below the line above the line",
      "atl btl ttl",
      "through the line",
      "full funnel",
      "full service agency",
      "one stop shop",
    ],
    reply:
      "Yes—we are a true 360-degree, integrated marketing agency. We don't silo offline from online, or brand from performance. Our media team covers Print, TV, Radio, Outdoor, and Digital under one roof. Our BTL team creates on-ground magic, while our digital team drives pixels. We believe the most powerful campaigns are those where the TV commercial, the Instagram reel, and the mall activation all sing the same song. Need help integrating your next campaign?",
    collect: true,
  },

  // =========================================================================
  // SECTION 4: BRAND STRATEGY – CORE USP
  // =========================================================================

  {
    keys: [
      "brand strategy",
      "brand birth",
      "launch brand",
      "new brand",
      "brand roadmap",
      "establish brand",
      "comprehensive roadmap",
      "brand launch",
      "brand positioning",
      "competitor analysis",
      "brand establishment",
      "step by step brand",
      "0 to 1 brand",
      "startup branding",
      "new company branding",
    ],
    reply:
      "This is where we truly differentiate ourselves. We prefer to be involved with brands right from the stage of their birth. Why? Because that's when we can provide a truly comprehensive roadmap—one that considers your competitors, your prospective market, and your unique value proposition. We layout the step-by-step procedure for your brand to be established. It's not just a logo drop; it's a launch manifesto. Do you have a new brand or product you're planning to launch?",
    collect: true,
    suggestions: [
      "New Brand Launch",
      "Brand Roadmap Consultation",
      "Competitive Analysis",
    ],
  },

  {
    keys: [
      "rebrand",
      "rebranding",
      "brand refresh",
      "change brand",
      "update brand identity",
      "modernize brand",
      "old brand new look",
      "brand evolution",
    ],
    reply:
      "While our specialty is brand birth, we absolutely handle strategic rebrands as well. Sometimes a brand needs to evolve, shed its old skin, or appeal to a new generation. Our process for rebranding involves deep listening to understand where you've been, where you are, and where you want to go. We don't just change the logo; we realign the brand strategy. Interested in a rebrand consultation?",
    collect: true,
  },

  {
    keys: [
      "brand audit",
      "brand health check",
      "evaluate my brand",
      "brand analysis",
      "brand review",
      "how is my brand doing",
    ],
    reply:
      "A brand audit is often the first step in our engagement. We analyze your current brand positioning, visual identity, messaging, market perception, and competitor landscape. We identify gaps between where your brand is and where it could be. Would you like us to conduct a preliminary brand audit for you?",
    collect: true,
  },

  // =========================================================================
  // SECTION 5: CREATIVE STRATEGY
  // =========================================================================

  {
    keys: [
      "creative strategy",
      "campaign message",
      "core message",
      "tone of voice",
      "campaign positioning",
      "creative platform",
      "target group",
      "campaign tenor",
      "ad campaign idea",
      "creative concept",
      "big idea",
      "campaign theme",
    ],
    reply:
      "Our creative strategy begins with a thorough understanding of your target group—not just demographics, but psychographics, behaviors, and motivations. We then craft the creative platform or positioning for your brand. This is where your campaign's core message, tone, and tenor are arrived at. It's the soul of your communication. Before we write a single headline or shoot a single frame, we define *what* we need to say and *how* we need to say it. Do you have a campaign in mind you'd like to brainstorm?",
    collect: true,
  },

  {
    keys: [
      "target audience",
      "target group",
      "tg",
      "customer profiling",
      "who is my customer",
      "audience insight",
      "consumer insight",
    ],
    reply:
      "Understanding the target group is the cornerstone of our creative and media strategy. We don't guess; we analyze. We look at demographic data, consumption patterns, media habits, and psychographic triggers. Whether your TG is Gen Z on Instagram, housewives watching afternoon television, or B2B decision-makers on LinkedIn, we tailor the message and the medium accordingly. Who are you trying to reach?",
    collect: true,
  },

  // =========================================================================
  // SECTION 6: MEDIA STRATEGY
  // =========================================================================

  {
    keys: [
      "media strategy",
      "media plan",
      "which media",
      "tv or digital",
      "offline media",
      "media channels",
      "media mix",
      "budget allocation media",
      "print tv radio outdoor",
      "cross media",
      "multichannel",
    ],
    reply:
      "Our media team crafts the optimal strategy based on a deep understanding of your target audience. We don't have a bias toward digital or traditional—we have a bias toward what works. We analyze the when, how, and where of media consumption for your specific TG, while ensuring efficiency and strict budget alignment. Our coverage includes:\n\n📰 **Print** – Newspapers, Magazines\n📺 **Television** – GEC, News, Niche\n📻 **Radio** – FM, Community\n🪧 **Outdoor** – Hoardings, Transit, Ambient\n💻 **Digital** – Websites, Social, Search, Programmatic\n\nNeed help deciding where to invest your next rupee?",
    collect: true,
  },

  {
    keys: ["media planning", "media planner", "plan my campaign"],
    reply:
      "Media planning is the science of spending money to make money. We analyze reach, frequency, impact, and cost efficiency to build a plan that maximizes ROI. We don't just buy spots; we architect exposures. Share your budget and target audience with me, and I can have our media team prepare a sample plan.",
    collect: true,
  },

  // =========================================================================
  // SECTION 7: MEDIA BUYING – KEY STRENGTH
  // =========================================================================

  {
    keys: [
      "media buying",
      "buy media",
      "media procurement",
      "best media prices",
      "media negotiation",
      "media vehicles",
      "tv buying",
      "print buying",
      "radio buying",
      "outdoor media",
      "media providers",
      "cheapest media rates",
      "media discounts",
      "bulk buying",
      "agency commission",
    ],
    reply:
      "This is one of our core strengths. As a natural extension to our media strategy, our media buying function focuses on the **highest ROI in the minimum time frame**. We remove your hassle of accessing the spectrum of media providers across the country and negotiating the best prices. Because we are a regular business provider to these media vehicles—TV channels, newspapers, outdoor contractors—we leverage our volume to get you rates you simply cannot get on your own. It's not just about buying; it's about buying smarter. Do you have an upcoming campaign that requires media negotiation?",
    collect: true,
    suggestions: [
      "TV Rate Negotiation",
      "Print Media Buying",
      "Radio Spots",
      "Outdoor Hoardings",
    ],
  },

  {
    keys: ["empanelment", "media empanelment", "registered agency"],
    reply:
      "Yes, Adclan is an empaneled/recognized agency with major media publishers and broadcasters. This empanelment status allows us to offer you accredited agency rates, which include recognized discounts not available to direct advertisers. We handle the entire paperwork and credit process. You get the benefit without the headache.",
    collect: true,
  },

  {
    keys: ["roi media", "media effectiveness", "media measurement"],
    reply:
      "We define media ROI not by outputs (impressions, TRPs) but by outcomes (footfalls, inquiries, sales). Our media buying is always tethered to your business objectives. We use various tracking mechanisms—from custom URLs to call tracking to redemption codes—to measure what actually works. We then optimize in-flight to shift budget from underperforming to overperforming vehicles.",
    collect: false,
  },

  // =========================================================================
  // SECTION 8: OTT MARKETING – SPECIALIZED SERVICE
  // =========================================================================

  {
    keys: [
      "ott",
      "ott marketing",
      "hotstar",
      "disney+ hotstar",
      "disney plus hotstar",
      "youtube tv",
      "streaming ads",
      "connected tv",
      "ott platforms",
      "streaming service advertising",
      "netflix ads",
      "amazon prime video ads",
      "jio cinema",
      "zee5",
      "sony liv",
      "voot",
      "mx player",
      "ott strategy",
    ],
    reply:
      "Yes! We specialize in OTT (Over-The-Top) marketing. As traditional TV viewership fragments, OTT platforms offer targeted, measurable, and engaged audiences. We leverage platforms like **Disney+Hotstar, YouTube TV, JioCinema, ZEE5, Sony LIV, and more** to reach your audience directly—whether it's through programmatic guaranteed deals or premium sponsorship integrations. Our tailored strategies ensure your brand gets the exposure it needs on the right streaming services, driving brand awareness and maximizing impact. With cord-cutting accelerating, OTT is no longer 'nice to have'; it's essential. Which platform are you most interested in?",
    collect: true,
    suggestions: [
      "Disney+Hotstar Ads",
      "YouTube TV Campaign",
      "OTT Strategy Consultation",
      "JioCinema Advertising",
    ],
  },

  {
    keys: ["smart tv ads", "connected tv", "ctv"],
    reply:
      "Connected TV (CTV) advertising is a key subset of our OTT offering. We help brands appear on the big screen in the living room, but with the targeting precision of digital. This is especially powerful for premium brands, automobile launches, and lifestyle products. Ready to get on the big screen?",
    collect: true,
  },

  {
    keys: ["programmatic ott", "programmatic video"],
    reply:
      "We execute programmatic OTT buys that combine the impact of television with the efficiency of digital targeting. We can target by geography, content genre, device type, and even time of day. This minimizes waste and maximizes relevance.",
    collect: true,
  },

  // =========================================================================
  // SECTION 9: PRODUCTION SERVICES
  // =========================================================================

  {
    keys: [
      "production",
      "film production",
      "tv commercial",
      "tvc",
      "ad film",
      "radio spots",
      "audio studio",
      "3d render",
      "photography",
      "printing press",
      "commercial production",
      "video production",
      "print production",
      "catalog shoot",
      "product shoot",
      "studio rental",
      "post production",
      "editing",
    ],
    reply:
      "Different media require different production facilities, and we have extended teams of highly experienced professionals to meet every requirement:\n\n🎬 **Film & TVC** – Full production houses, directors, DOPs\n📻 **Radio** – Audio studios, voice-over artists, sound engineers\n📸 **Photography** – Product, people, catalog, architectural\n🖨️ **Print** – High-end printing presses, pre-press\n🎨 **3D & CGI** – 3D render artists, architectural visualization, product animation\n\nWe manage the entire production value chain so you don't have to coordinate with multiple vendors. One brief. One point of contact. Delivered. Do you have a specific production requirement?",
    collect: true,
    suggestions: [
      "TV Commercial Production",
      "Product Photography",
      "Radio Jingle",
      "3D Rendering",
      "Print Collateral",
    ],
  },

  {
    keys: [
      "cgi",
      "3d animation",
      "product visualization",
      "architectural rendering",
    ],
    reply:
      "Yes, we have specialized 3D render artists and CGI experts on our extended team. Whether you need photorealistic product visualization, architectural walkthroughs for real estate, or animated explainer videos, we can create it. This is especially useful when physical prototypes aren't ready or for visualizing large-scale projects like housing societies.",
    collect: true,
  },

  {
    keys: ["voice over", "voice artist", "dubbing", "radio jingle"],
    reply:
      "We have access to a vast library of voice-over artists across Indian languages—Hindi, English, regional. From deep baritone for corporate films to energetic youthful voices for radio, we match the perfect voice to your brand persona. We also compose original radio jingles. Need a voice sample?",
    collect: true,
  },

  // =========================================================================
  // SECTION 10: BTL & EXPERIENTIAL MARKETING
  // =========================================================================

  {
    keys: [
      "btl",
      "below the line",
      "events",
      "activations",
      "direct marketing",
      "experiential marketing",
      "brand activation",
      "on ground activation",
      "roadshow",
      "mall activation",
      "college activation",
      "sampling",
      "product launch event",
      "consumer connect",
      "live experience",
    ],
    reply:
      "We excel in Below-The-Line (BTL) marketing. This is where the digital and TV screens switch off, and your consumer meets your brand face-to-face. We create targeted, experiential campaigns that connect with your audience on a personal level:\n\n🎪 **Events** – Product launches, press conferences, seminars\n🛍️ **Mall Activations** – High-footfall consumer engagement\n🏫 **College Activations** – Gen Z connect, campus ambassadorship\n🏘️ **Resident Welfare Association (RWA) Activations** – Direct home reach\n🚚 **Roadshows & Mobile Vans** – Take the brand to the people\n📬 **Direct Marketing** – Samplings, door-drops, leaflets\n\nWe create immersive brand experiences that leave a lasting impression. Planning an activation soon?",
    collect: true,
    suggestions: [
      "Mall Activation",
      "College Campaign",
      "Product Launch Event",
      "Roadshow",
    ],
  },

  {
    keys: [
      "rwa activation",
      "resident welfare association",
      "housing society marketing",
      "apartment marketing",
    ],
    reply:
      "RWA activations are a highly effective BTL tactic for targeting affluent, localized audiences. We set up engagement zones in large housing societies—especially effective for premium products, automotive, education, and healthcare. We've executed successful RWA campaigns for multiple brands in NCR. Want to explore this for your brand?",
    collect: true,
  },

  // =========================================================================
  // SECTION 11: DIGITAL MARKETING
  // =========================================================================

  {
    keys: [
      "digital marketing",
      "social media",
      "seo",
      "ppc",
      "content creation",
      "smo",
      "social media optimization",
      "website development",
      "online ads",
      "google ads",
      "facebook ads",
      "instagram marketing",
      "linkedin marketing",
      "performance marketing",
      "digital strategy",
    ],
    reply:
      "We offer full-scale digital marketing services designed to boost your brand's visibility and engagement. This is fully integrated with our overall media strategy to ensure consistency across online and offline channels.\n\n🌐 **Websites** – Corporate, E-commerce, Landing Pages\n🔍 **SEO** – On-page, Off-page, Technical, Local\n📱 **Social Media** – Strategy, Content, Community Management\n💰 **PPC** – Google Ads, Meta Ads, Performance Max\n✍️ **Content** – Copywriting, Blogs, Creatives, Reels\n📊 **Analytics** – Reporting, Dashboarding, Insights\n\nAre you looking to improve your digital presence, generate leads, or build your brand online?",
    collect: true,
    suggestions: [
      "Website Development",
      "SEO Audit",
      "Google Ads",
      "Social Media Management",
    ],
  },

  {
    keys: [
      "website development",
      "company website",
      "corporate website",
      "responsive website",
      "cms website",
    ],
    reply:
      "We build websites that are fast, responsive, and aligned with your brand identity. Whether you need a simple 5-page corporate brochure site or a complex custom portal, our team delivers. We focus on UX, speed, and SEO-readiness. Do you have a website requirement?",
    collect: true,
  },

  {
    keys: ["seo audit", "website audit", "seo health check"],
    reply:
      "Yes, we conduct comprehensive SEO audits. We analyze your website's technical health, on-page optimization, backlink profile, and content relevance. We provide a detailed report with actionable recommendations. Would you like us to perform a free preliminary audit for your website?",
    collect: true,
  },

  // =========================================================================
  // SECTION 12: KIDSMATE & SHWETA TIWARI – RECENT WORK
  // =========================================================================

  {
    keys: [
      "shweta tiwari",
      "kidsmate",
      "kidsmate cycles",
      "shweta tiwari adclan",
      "brand ambassador",
      "celebrity endorsement",
      "kids cycle",
      "recent work",
      "latest campaign",
      "new project",
      "case study",
    ],
    reply:
      "Yes! We are incredibly proud of this partnership. We recently onboarded the talented **Shweta Tiwari** as the **Brand Ambassador for Kidsmate Cycles**. It was a fantastic 360-degree project where we managed the brand strategy, creative development, and media execution. Shweta's warmth and credibility as a mother figure perfectly aligned with Kidsmate's promise of quality and safety for children. This is a prime example of how we match the right celebrity face to the right brand narrative. Are you exploring celebrity endorsements for your brand?",
    collect: true,
    suggestions: [
      "Celebrity Endorsement Strategy",
      "Kidsmate Campaign Details",
      "Shweta Tiwari Partnership",
    ],
  },

  {
    keys: [
      "kidsmate shweta tiwari ad",
      "kidsmate commercial",
      "kidsmate tv commercial",
    ],
    reply:
      "The Kidsmate TV commercial featuring Shweta Tiwari was conceptualized and produced by us. It aired across leading GEC channels and digital platforms, focusing on the emotional bond between a mother and child while highlighting the durability and design of Kidsmate cycles. Would you like to see the case study or creative samples?",
    collect: true,
  },

  {
    keys: ["celebrity management", "celebrity booking", "influencer marketing"],
    reply:
      "We handle end-to-end celebrity and influencer partnerships. This includes talent scouting, contract negotiation, creative integration, and campaign measurement. Our recent work with Shweta Tiwari for Kidsmate demonstrates our capability in this space. Who are you looking to associate with?",
    collect: true,
  },

  // =========================================================================
  // SECTION 13: CLIENTS, INDUSTRIES & CASE STUDIES
  // =========================================================================

  {
    keys: [
      "clients",
      "who you work with",
      "your clients",
      "client list",
      "brands you worked with",
      "portfolio",
      "case studies",
      "previous work",
      "work samples",
      "showcase",
      "what have you built",
      "success stories",
      "results",
      "testimonials",
    ],
    reply:
      "We've been privileged to partner with some wonderful brands! While we maintain strict confidentiality with many client partnerships until they publicly announce, we can share that we have **10+ Happy Clients** and have worked with:\n\n🚲 **Kidsmate Cycles** – Celebrity onboarding (Shweta Tiwari) & 360° campaign\n🏢 **Galaxy Group** – Real estate marketing\n🏗️ **Ace Hanei** – Construction & infrastructure\n\nOur experience spans across **Real Estate, Education, FMCG, Healthcare, Automotive, and B2B Services**. We maintain an **80% Success Rate**, which we're quite proud of. We'd be happy to share relevant case studies specific to your industry under NDA. Which industry are you in?",
    collect: true,
    suggestions: [
      "Real Estate Case Studies",
      "Education Marketing",
      "FMCG Campaigns",
      "Kidsmate Case Study",
    ],
  },

  {
    keys: ["galaxy group", "ace hanei", "galaxy adclan"],
    reply:
      "Yes, we have partnered with **Galaxy Group** and **Ace Hanei**, both esteemed names in the real estate and construction sectors. Our work with them spans brand strategy, media planning, and outdoor campaigns. Real estate is one of our core competency areas. Are you a real estate developer or builder?",
    collect: true,
  },

  {
    keys: [
      "real estate clients",
      "builder clients",
      "property marketing clients",
    ],
    reply:
      "We have significant experience in the real estate sector, working with groups like Galaxy Group and Ace Hanei. We understand the unique challenges of real estate marketing: high-ticket consideration, local targeting, and the need for prestige. Our services for real estate include project branding, site photography/drone shots, outdoor hoardings, newspaper advertising, and digital lead generation. Are you launching a new project?",
    collect: true,
  },

  {
    keys: ["education clients", "school marketing clients"],
    reply:
      "Education is another key vertical for us. We've worked with K-12 schools, higher education institutions, and coaching centers. Our approach combines parent outreach (ATL) with student engagement (BTL & Digital). Are you looking to boost admissions?",
    collect: true,
  },

  // =========================================================================
  // SECTION 14: TEAM, CULTURE & CREDENTIALS
  // =========================================================================

  {
    keys: [
      "team size",
      "how many employees",
      "team members",
      "your team",
      "who works at adclan",
      "agency size",
      "headcount",
    ],
    reply:
      "We are a lean, highly specialized core team of **5+ dedicated members**. But we punch significantly above our weight! We also have extended teams of highly experienced professionals—production houses, 3D render artists, photographers, and technical experts—who we bring in based on project requirements. This model allows us to offer 360-degree solutions while maintaining low overheads and passing that efficiency to you. You get agency expertise with boutique attention.",
    collect: false,
  },

  {
    keys: ["culture", "work culture", "agency culture", "adclan culture"],
    reply:
      "Our culture is rooted in the 'Clan' philosophy. We operate like a family—supportive, transparent, and fiercely protective of our work and our clients. We believe in listening first, egos at the door, and celebrating wins together. It's a flat hierarchy where the best idea wins, regardless of who it comes from. We also believe in work-life balance; burnt-out creatives don't produce great work.",
    collect: false,
  },

  {
    keys: [
      "credentials",
      "capability deck",
      "company presentation",
      "agency credentials deck",
    ],
    reply:
      "We do have a detailed credentials presentation that covers our philosophy, services, team, and select case studies. I'd be happy to have our team share that with you via email. Could you please share your name, company, and email address?",
    collect: true,
  },

  // =========================================================================
  // SECTION 15: PRICING, BUDGET & QUOTATION (NO SPECIFIC NUMBERS)
  // =========================================================================

  {
    keys: [
      "price",
      "pricing",
      "cost",
      "charges",
      "how much",
      "budget",
      "quote",
      "estimate",
      "quotation",
      "investment",
      "fees",
      "rates",
      "how much you charge",
      "what will it cost",
      "expenses",
    ],
    reply:
      "I'd be happy to help you with a custom quotation. At Adclan, every project is unique—we don't believe in one-size-fits-all pricing. The investment depends entirely on your specific scope, media weight, production requirements, and timeline.\n\n**To give you an accurate estimate, could you please share a few details?**\n\n1️⃣ **Service Area** – Brand Strategy, Media, Digital, Production, BTL?\n2️⃣ **Scope** – What exactly do you need? (e.g., TVC shoot, 6-month SEO, newspaper campaign)\n3️⃣ **Timeline** – When do you plan to launch?\n4️⃣ **Budget Range** – Even a broad range helps us tailor the solution\n\nOnce you share these, I'll have our team prepare a detailed, line-item quotation for you. Sound good?",
    collect: true,
  },

  {
    keys: ["media budget", "advertising budget"],
    reply:
      "Media budgets vary widely based on markets, duration, and mediums. For a Delhi-NCR focused print campaign, the budget will differ from a national TV campaign. Our strength is maximizing whatever budget you have—whether it's ₹5 lakhs or ₹5 crores. We'll recommend the optimal media mix to achieve your goals within your budget. What range are you working with?",
    collect: true,
  },

  {
    keys: ["production budget", "tvc cost", "radio ad cost", "event budget"],
    reply:
      "Production costs are highly variable based on creative complexity, talent (celebrities vs. voice-over artists), locations, and post-production requirements. For example, a TVC featuring a celebrity like Shweta Tiwari involves different budgeting than an animated explainer video. Once you share your creative brief, we can provide a precise cost estimate. Would you like to discuss a specific production need?",
    collect: true,
  },

  {
    keys: ["retainer", "monthly retainer", "annual contract"],
    reply:
      "Yes, we work on retainer models for clients requiring ongoing support—typically for digital marketing, social media management, SEO, or media buying retainers. Our retainers are customized based on the scope of work and man-hours required. Would you like a retainer proposal?",
    collect: true,
  },

  // =========================================================================
  // SECTION 16: PAYMENT, GST & CONTRACTS
  // =========================================================================

  {
    keys: [
      "payment",
      "payment terms",
      "how to pay",
      "payment methods",
      "gst",
      "gst invoice",
      "tax invoice",
      "billing",
    ],
    reply:
      "💳 **Payment Information:**\n\n**We accept:**\n✅ UPI (Google Pay, PhonePe, Paytm)\n✅ NEFT/RTGS Bank Transfer\n✅ Credit/Debit Cards (via link)\n✅ Net Banking\n✅ Cheque\n✅ PayPal (for international clients)\n\n**GST:**\n• 18% GST applicable on all services\n• GST invoice provided with valid input tax credit\n• Our GSTN will be shared on the invoice\n\n**Terms:**\n📋 Typically 50% advance to commence work, 50% on completion/final delivery. Monthly retainers are billed at the beginning of the month. Specific terms can be discussed for long-term engagements.",
    collect: false,
  },

  {
    keys: [
      "contract",
      "agreement",
      "nda",
      "confidentiality",
      "legal agreement",
      "service agreement",
      "terms",
      "legal documents",
      "msa",
      "master service agreement",
      "sow",
      "statement of work",
    ],
    reply:
      "📄 **Absolutely—we believe in transparent partnerships.**\n\n**We provide:**\n✅ **NDA (Non-Disclosure Agreement)** – To protect your ideas, data, and business information. Can be mutual or one-way, signed before any detailed discussions.\n✅ **Service Agreement / MSA** – Clear scope of work, payment terms & schedule, timeline commitments, revision policy, ownership rights, and termination clauses.\n✅ **Maintenance Contracts** – For ongoing website or media retainers, with defined SLAs.\n\nAll documents are legally valid, customized to your project, and available for review before signing. Digitally signed options are available for speed.\n\n**Need us to send an NDA to get started?** Just share the email address of your legal or procurement contact.",
    collect: true,
  },

  {
    keys: [
      "ownership rights",
      "who owns the work",
      "copyright",
      "intellectual property",
      "ip",
    ],
    reply:
      "Upon final payment, you own 100% of the work product—the brand strategy documents, the creative assets, the website code, the finished TVC. We do not retain any ownership or royalties. We may request permission to showcase the work in our portfolio, but that's entirely optional and at your discretion.",
    collect: false,
  },

  // =========================================================================
  // SECTION 17: KNOWLEDGE CENTER & INSIGHTS
  // =========================================================================

  {
    keys: [
      "knowledge center",
      "blog",
      "articles",
      "read",
      "latest news",
      "marketing agency delhi ncr",
      "adclan media article",
      "insights",
      "thought leadership",
      "marketing tips",
    ],
    reply:
      "We regularly share insights and perspectives on our **Knowledge Center**! One of our featured articles is:\n\n📝 **'Adclan Media – The Marketing Agency You Were Looking For in Delhi NCR'**\n\nIt talks about the reality of running a business—how it's a full-time job—and why partnering with the right agency who listens first makes all the difference. We also publish updates on our latest campaigns and industry trends.\n\nWould you like me to email you the link to our Knowledge Center?",
    collect: false,
  },

  {
    keys: [
      "delhi ncr agency",
      "agency in delhi",
      "noida agency",
      "gurgaon agency",
      "delhi marketing company",
    ],
    reply:
      "Yes, we are proudly headquartered in **New Delhi, India**, and serve clients across the Delhi NCR region—including Noida, Gurugram, Ghaziabad, and Faridabad. We understand the local media landscape, regional consumer behavior, and have strong relationships with local media vendors. As our article says, we're 'The Marketing Agency You Were Looking For in Delhi NCR'. Are you based in NCR?",
    collect: false,
  },

  // =========================================================================
  // SECTION 18: CONTACT, LOCATION & CONSULTATION
  // =========================================================================

  {
    keys: [
      "contact",
      "call",
      "phone",
      "mobile",
      "whatsapp",
      "email",
      "reach",
      "get in touch",
      "callback",
      "talk to human",
      "speak to someone",
      "contact person",
      "customer support",
      "talk to team",
      "human agent",
      "start the conversation",
      "reach out",
    ],
    reply:
      "We would genuinely love to start a conversation with you. In fact, our website invites everyone with: *'Let’s bring your ideas to life — reach out and let’s start the conversation.'*\n\n📞 **Phone / WhatsApp:** +91-9891505451\n📧 **Email:** info@adclan.in\n📍 **Office Address:** New Delhi, India (exact location shared upon appointment)\n🕙 **Business Hours:** Monday–Friday, 9:00 AM – 6:00 PM\n\n**How would you like to connect?**\n1️⃣ I can schedule a callback from our team\n2️⃣ I can email you our detailed contact information\n3️⃣ I can share our office address for an in-person meeting\n4️⃣ I can connect you with a consultant right now via chat\n\nJust let me know your preference!",
    collect: true,
    suggestions: [
      "Schedule a callback",
      "Send contact details by email",
      "Office address",
      "Talk to consultant now",
    ],
  },

  {
    keys: [
      "book consultation",
      "discovery call",
      "strategy call",
      "free consultation",
      "meet with team",
      "discuss project",
      "project discussion",
      "get quote",
      "free strategy session",
      "initial meeting",
      "kickoff meeting",
    ],
    reply:
      "I'd be delighted to schedule a free, no-obligation consultation with our team! This is where we listen—really listen—to your brand, your challenges, and your goals.\n\n📅 **Consultation Includes:**\n• 30-45 minute strategy call\n• Deep dive into your business objectives\n• Initial thoughts and recommendations\n• Custom quotation (if required)\n\n**Available Slots:**\n🕙 Monday–Friday: 10:00 AM – 6:00 PM\n🕙 Saturday: 11:00 AM – 3:00 PM\n\n**How would you like to connect?**\n📞 Phone Call\n📱 Video Call (Google Meet / Zoom)\n💬 WhatsApp / Telegram\n🏢 In-person (Delhi NCR office)\n\n**Please share:**\n1. Your name & company\n2. Preferred date & time\n3. Brief overview of your project/requirement\n4. Your contact number/email\n\nI'll confirm the appointment with you immediately!",
    collect: true,
  },

  {
    keys: [
      "office address",
      "visit you",
      "your location",
      "where are you located",
      "delhi office",
      "ncr office",
      "map",
      "directions",
    ],
    reply:
      "We are headquartered in **New Delhi, India**. For security and privacy reasons, we share our exact office address and floor details directly with confirmed visitors. We'd be happy to welcome you for a face-to-face meeting—just let us know when you'd like to visit! 🏢",
    collect: true,
  },

  // =========================================================================
  // SECTION 19: CAREERS & INTERNSHIPS
  // =========================================================================

  {
    keys: [
      "career",
      "careers",
      "jobs",
      "hiring",
      "vacancy",
      "internship",
      "fresher",
      "work with us",
      "join adclan",
      "job opening",
      "recruitment",
    ],
    reply:
      "We're always on the lookout for talented, hungry, and humble individuals who want to make their mark in the advertising and marketing world. While we don't have a public careers page, we encourage passionate candidates to reach out directly.\n\n📧 **Email your resume and portfolio to:** careers@adclan.in\n\nWe value:\n✅ Strong listening skills (yes, really)\n✅ Creative thinking\n✅ Hunger to learn\n✅ Team player mentality\n\nIf you think you'd be a good fit for our 'clan', please send us your details!",
    collect: false,
  },

  // =========================================================================
  // SECTION 20: URGENT SUPPORT & EMERGENCIES
  // =========================================================================

  {
    keys: [
      "urgent",
      "emergency",
      "asap",
      "immediate",
      "now",
      "quick help",
      "urgent support",
      "website down",
      "critical issue",
      "emergency fix",
      "last minute",
      "deadline approaching",
      "crisis",
    ],
    reply:
      "🚨 **Urgent Support Protocol Activated**\n\nFor immediate, time-sensitive issues, please use the following dedicated channels:\n\n📞 **Emergency Hotline:** +91-9891505451\n   (Available 24/7 for critical client emergencies)\n\n📧 **Priority Email:** urgent@adclan.in\n   (Response within 30 minutes during business hours)\n\n**What's the nature of your urgency?**\n⚠️ Website/Campaign not working\n🔒 Security or technical breach\n💳 Payment gateway issues\n⚡ Critical bug/error\n🎯 Live campaign not delivering\n📉 Sudden performance drop\n🏢 Press/Media crisis\n\n**I can also:**\n• Escalate this conversation to our senior management team immediately\n• Schedule an emergency callback within 15 minutes\n• Create a priority support ticket\n\nPlease share brief details, and we'll mobilize our team right away.",
    sentiment: "urgent",
    priority: "high",
    collect: true,
  },

  // =========================================================================
  // SECTION 21: THANK YOU & APPRECIATION
  // =========================================================================

  {
    keys: [
      "thanks",
      "thank you",
      "thx",
      "ty",
      "appreciate",
      "helpful",
      "great help",
      "thanks a lot",
      "thank you so much",
      "appreciate your help",
      "thanks for your help",
      "grateful",
      "you're awesome",
      "good bot",
    ],
    reply:
      "You're most welcome! 😊 It's genuinely my pleasure to help. Remember, our entire philosophy is built on listening—so if you have more questions, a project to discuss, or just want to bounce around some ideas, I'm all ears. Is there anything else I can assist you with today?",
    sentiment: "grateful",
    collect: false,
  },

  // =========================================================================
  // SECTION 22: FAREWELL & EXIT
  // =========================================================================

  {
    keys: [
      "bye",
      "goodbye",
      "see you",
      "exit",
      "close",
      "end chat",
      "that's all",
      "thank you bye",
      "talk to you later",
      "see you later",
      "have a good day",
      "have a great day",
      "bye bye",
      "cya",
      "gtg",
    ],
    reply:
      "Thank you for reaching out to Adclan today! 👋\n\n📧 **Keep in touch:** info@adclan.in\n📞 **Call us:** +91-9891505451\n🌐 **Visit our website:** www.adclan.in\n📝 **Read our insights:** Knowledge Center on our site\n\nRemember, we're always here to listen—whenever you're ready to start that conversation. Have a fantastic day ahead! ✨",
    sentiment: "farewell",
    collect: false,
  },

  // =========================================================================
  // SECTION 23: HELP & FALLBACK – CATCH-ALL
  // =========================================================================

  {
    keys: [
      "help",
      "support",
      "what can you do",
      "assist",
      "capabilities",
      "features",
      "what services do you offer",
      "help me",
      "i need help",
      "can you help",
      "how can you help",
      "what's possible",
      "adclan help",
      "i have a question",
    ],
    reply:
      "I'm your Adclan AI assistant, and I'm here to help you navigate everything we do. Based on [adclan.in](https://adclan.in), here’s exactly what I can assist you with:\n\n🎯 **BRAND & STRATEGY**\n• Brand Strategy (Birth-to-Launch Roadmap)\n• Creative Strategy & Campaign Positioning\n• Competitor & Market Analysis\n\n📺 **MEDIA**\n• Media Strategy (Print, TV, Radio, Outdoor, Digital)\n• Media Buying (Best ROI, Volume Negotiation)\n• OTT Marketing (Disney+Hotstar, YouTube TV, JioCinema)\n\n🎬 **PRODUCTION**\n• TV Commercials & Ad Films\n• Radio Jingles & Audio Production\n• Photography & 3D Rendering\n• Print Production\n\n🎪 **BTL & EVENTS**\n• Brand Activations & Roadshows\n• Mall & College Activations\n• Direct Marketing & Sampling\n\n📱 **DIGITAL**\n• Website Development\n• SEO & Social Media\n• PPC & Performance Ads\n• Content Creation\n\n🤝 **ABOUT ADCLAN**\n• Our 'Listen More, Speak Less' Philosophy\n• Team & Clients (Kidsmate, Galaxy Group, Ace Hanei)\n• Knowledge Center & Insights\n• Contact & Consultation Booking\n\n**Just type whatever you need help with**—for example: 'Tell me about OTT marketing', 'I need a media buying quote', 'Shweta Tiwari campaign', or 'Book a consultation'—and I'll guide you!",
    sentiment: "helpful",
    collect: false,
  },
];

const refusalWords = [
  "no",
  "not now",
  "later",
  "don't",
  "dont",
  "skip",
  "cancel",
  "stop",
  "nah",
  "maybe later",
  "never",
];
const positiveWords = [
  "yes",
  "sure",
  "okay",
  "ok",
  "yeah",
  "yep",
  "please",
  "go ahead",
  "proceed",
];
const interestWords = [
  "interested",
  "want",
  "need",
  "looking for",
  "require",
  "project",
  "start",
  "begin",
  "build",
  "create",
  "develop",
];

const initialQuickReplies = [
  "Tell me about services",
  "What's the pricing?",
  "Show portfolio",
  "Contact details",
  "Book consultation",
  "Talk to human agent",
];

const suggestionContexts = {
  default: [
    "Tell me about services",
    "What's the pricing?",
    "Show portfolio",
    "Contact details",
    "Book consultation",
    "Talk to human agent",
  ],
  afterNo: [
    "What else can you help with?",
    "Tell me about Adclan",
    "Show your work",
    "How to contact you?",
    "Pricing information",
    "Start over",
  ],
  services: [
    "Website Design",
    "SEO Services",
    "Social Media Marketing",
    "Branding Package",
    "Content Creation",
    "Performance Ads",
  ],
  pricing: [
    "Get Estimate",
    "Custom Quote",
    "Package Pricing",
    "Budget Planning",
    "Compare Plans",
    "Request Callback",
  ],
  contact: [
    "Schedule Call",
    "Email Now",
    "Live Chat",
    "Visit Office",
    "Team Connect",
    "Urgent Support",
  ],
  portfolio: [
    "Web Design Examples",
    "SEO Case Studies",
    "Social Media Work",
    "Branding Projects",
    "Industry Specific",
    "Client Testimonials",
  ],
};

const API_ENDPOINT = "/api/leads";

/* ===================== COMPONENT ===================== */

export default function LeadChatbot() {
  const [open, setOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: Date.now() + Math.random(),
      from: "bot",
      text: "Hi 👋 I'm Adclan AI Assistant! I'm here to help with services, pricing, portfolio, or connecting you with our team. How can I assist you today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [step, setStep] = useState(null);
  const [lead, setLead] = useState({
    name: "",
    email: "",
    phone: "",
    need: "",
    source: "chatbot",
    interestLevel: 0,
  });
  const [isTyping, setIsTyping] = useState(false);
  const [suggestions, setSuggestions] = useState(initialQuickReplies);
  const [suggestionContext, setSuggestionContext] = useState("default");
  const [chatHistory, setChatHistory] = useState([]);
  const [isSending, setIsSending] = useState(false);

  // NEW: Track lead collection state for the entire session
  const [leadCollectionState, setLeadCollectionState] = useState({
    hasBeenAsked: false, // Whether we've asked for lead info
    hasBeenCollected: false, // Whether we successfully collected contact info
    hasBeenRefused: false, // Whether user refused to provide info
    lastAskTime: null, // When we last asked
  });

  const [userSession, setUserSession] = useState({
    id: `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    startTime: new Date(),
    messageCount: 0,
    intentCounts: {},
    interestDetected: false,
  });

  const bodyRef = useRef(null);
  const inputRef = useRef(null);
  const messagesEndRef = useRef(null);
  const sendLockRef = useRef(false);
  const messageIdCounter = useRef(0);

  /* ---------------- AUTO SCROLL ---------------- */
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  /* ---------------- SCROLL FIX ---------------- */
  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;

    const onWheel = (e) => {
      e.stopPropagation();
      el.scrollTop += e.deltaY;
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  /* ---------------- AUTO FOCUS ---------------- */
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 150);
  }, [open]);

  /* ---------------- UPDATE SUGGESTIONS ---------------- */
  useEffect(() => {
    if (suggestionContexts[suggestionContext]) {
      setSuggestions(suggestionContexts[suggestionContext]);
    }
  }, [suggestionContext]);

  /* ---------------- VALIDATORS ---------------- */
  const isValidName = (v) => /^[a-zA-Z][a-zA-Z\s]{1,49}$/.test(v.trim());
  const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
  const isValidPhone = (v) => /^[6-9]\d{9}$/.test(v.replace(/\D/g, ""));
  const normalizePhone = (v) => v.replace(/\D/g, "");

  /* ---------------- INTEREST ---------------- */
  const detectInterest = (text) => {
    const lower = text.toLowerCase();
    return interestWords.some((w) => lower.includes(w));
  };

  /* ---------------- SESSION TRACKING ---------------- */
  const trackIntent = useCallback((intentKey) => {
    setUserSession((prev) => ({
      ...prev,
      messageCount: prev.messageCount + 1,
      intentCounts: {
        ...prev.intentCounts,
        [intentKey]: (prev.intentCounts[intentKey] || 0) + 1,
      },
    }));
  }, []);

  const saveChatHistory = useCallback(() => {
    const history = {
      sessionId: userSession.id,
      startTime: userSession.startTime,
      endTime: new Date(),
      messageCount: userSession.messageCount,
      intents: userSession.intentCounts,
      messages: messages.slice(1),
      leadCaptured: lead.name && (lead.email || lead.phone) ? lead : null,
    };
    setChatHistory((prev) => [...prev, history]);
    console.log("📊 Chat History:", history);
  }, [messages, lead, userSession]);

  /* ---------------- API CALL ---------------- */
  const sendLeadToAPI = useCallback(
    async (leadData) => {
      console.log("📤 [API CALL] Attempting to send lead to API:", leadData);

      if (!leadData.email && !leadData.phone) {
        console.log("⚠️ [API CALL] No email or phone — skipping");
        return { success: false };
      }

      setIsSending(true);

      try {
        const payload = {
          ...leadData,
          sessionId: userSession.id,
          timestamp: new Date().toISOString(),
          pageUrl: window.location.href,
          userAgent: navigator.userAgent,
          status: "new",
          leadScore: calculateLeadScore(leadData),
        };

        Object.keys(payload).forEach((k) => {
          if (payload[k] === "" || payload[k] == null) delete payload[k];
        });

        console.log("📤 [API CALL] Sending to:", API_ENDPOINT, payload);

        // 🔥 REAL API CALL — uncomment when endpoint ready
        const res = await fetch(API_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const data = await res.json();
        if (!res.ok) throw data;

        console.log("✅ [API CALL] Lead sent");
        return { success: true };
      } catch (err) {
        console.error("❌ [API CALL] Error:", err);
        return { success: false };
      } finally {
        setIsSending(false);
      }
    },
    [userSession.id],
  );

  const calculateLeadScore = (leadData) => {
    let score = 0;
    if (leadData.name) score += 25;
    if (leadData.email) score += 30;
    if (leadData.phone) score += 30;
    if (leadData.need && leadData.need.length > 10) score += 15;
    return score;
  };

  /* ---------------- HELPERS ---------------- */
  const isRefusal = (text) => {
    const lower = text.toLowerCase();
    return refusalWords.some((w) => lower.includes(w));
  };

  const isPositive = (text) => {
    const lower = text.toLowerCase();
    return positiveWords.some((w) => lower.includes(w));
  };

  const detectIntent = (text) => {
    const lower = text.toLowerCase();
    const matched = intents.find((i) => i.keys.some((k) => lower.includes(k)));

    if (matched) {
      trackIntent(matched.keys[0]);
      if (matched.keys.some((k) => k === "service"))
        setSuggestionContext("services");
      else if (matched.keys.some((k) => k === "price"))
        setSuggestionContext("pricing");
      else if (matched.keys.some((k) => k === "contact"))
        setSuggestionContext("contact");
      else if (matched.keys.some((k) => k === "portfolio"))
        setSuggestionContext("portfolio");
    }
    return matched;
  };

  const simulateTyping = (cb, delay = 900) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      cb?.();
    }, delay);
  };

  const resetLeadFlow = () => {
    setStep(null);
    setLead({
      name: "",
      email: "",
      phone: "",
      need: "",
      source: "chatbot",
      interestLevel: 0,
    });
    // Don't reset leadCollectionState - we want to remember if we've asked/collected
  };

  const addMessage = (from, text) => {
    const id = Date.now() + messageIdCounter.current++;
    setMessages((prev) => [...prev, { id, from, text, timestamp: new Date() }]);
  };

  // FIXED: Check if we should collect lead - ONLY ONCE PER SESSION
  const shouldCollectLead = (intent) => {
    // If intent doesn't want to collect, don't collect
    if (!intent?.collect) return false;

    // If we've already collected lead info in this session, don't ask again
    if (leadCollectionState.hasBeenCollected) return false;

    // If user has explicitly refused in this session, don't ask again
    if (leadCollectionState.hasBeenRefused) return false;

    // If we've already asked in this session, don't ask again
    if (leadCollectionState.hasBeenAsked) return false;

    return true;
  };

  // Call this when we start the lead collection flow
  const startLeadCollection = () => {
    setLeadCollectionState((prev) => ({
      ...prev,
      hasBeenAsked: true,
      lastAskTime: new Date(),
    }));
    setStep("name");
  };

  // Call this when lead is successfully collected
  const markLeadCollected = () => {
    setLeadCollectionState((prev) => ({
      ...prev,
      hasBeenCollected: true,
      hasBeenAsked: true,
    }));
  };

  // Call this when user refuses
  const markLeadRefused = () => {
    setLeadCollectionState((prev) => ({
      ...prev,
      hasBeenRefused: true,
      hasBeenAsked: true,
    }));
  };

  /* ---------------- SEND MESSAGE (FIXED) ---------------- */
  const sendMessage = async () => {
    const text = input.trim();
    if (!text || isTyping || isSending || sendLockRef.current) return;

    sendLockRef.current = true;
    setTimeout(() => (sendLockRef.current = false), 150);

    addMessage("user", text);
    setInput("");

    const intent = detectIntent(text);

    if (detectInterest(text)) {
      setUserSession((prev) => ({ ...prev, interestDetected: true }));
      setLead((prev) => ({ ...prev, interestLevel: prev.interestLevel + 1 }));
    }

    if (step) {
      await handleStep(text);
    } else if (intent && shouldCollectLead(intent)) {
      // ONLY ask for lead info ONCE per session
      simulateTyping(() => {
        addMessage("bot", intent.reply);
        setTimeout(() => {
          simulateTyping(() => {
            addMessage(
              "bot",
              "I'd be happy to connect you with our team! May I have your name?",
            );
            startLeadCollection();
          }, 700);
        }, 800);
      });
    } else if (intent) {
      simulateTyping(() => addMessage("bot", intent.reply));
    } else {
      const fallbacks = [
        "I'm not sure I understand. Could you rephrase that?",
        "I'm still learning! Could you ask about our services, pricing, or portfolio?",
        "That's interesting! At the moment, I can best help with information about Adclan's services. What specifically would you like to know?",
      ];
      simulateTyping(() =>
        addMessage(
          "bot",
          fallbacks[Math.floor(Math.random() * fallbacks.length)],
        ),
      );
    }
  };

  /* ---------------- STEP HANDLER (FIXED) ---------------- */
  const handleStep = async (text) => {
    switch (step) {
      case "name":
        if (!isValidName(text)) {
          addMessage(
            "bot",
            "That doesn't look like a valid name 😅 Could you please enter your full name (2-50 characters)?",
          );
        } else {
          setLead((prev) => ({ ...prev, name: text.trim() }));
          simulateTyping(() => {
            addMessage("bot", `Nice to meet you, ${text.trim()}!`);
            setTimeout(() => {
              addMessage(
                "bot",
                "May I have your email or phone number so our team can contact you?",
              );
              setStep("contact");
            }, 700);
          });
        }
        break;

      case "contact": {
        const isEmail = isValidEmail(text);
        const phone = normalizePhone(text);
        const isPhone = isValidPhone(phone);

        if (isEmail) {
          setLead((prev) => ({ ...prev, email: text.trim() }));
          simulateTyping(() => {
            addMessage("bot", "Email saved! 📧");
            setTimeout(() => {
              addMessage(
                "bot",
                "Would you like to share your phone number too? (Optional)",
              );
              setStep("phone_optional");
            }, 700);
          });
        } else if (isPhone) {
          setLead((prev) => ({ ...prev, phone }));
          simulateTyping(() => {
            addMessage("bot", "Phone number saved! 📞");
            setTimeout(() => {
              addMessage(
                "bot",
                "Would you like to share your email too? (Optional)",
              );
              setStep("email_optional");
            }, 700);
          });
        } else if (isRefusal(text) || text.trim().toLowerCase() === "skip") {
          // User refused to provide contact info
          markLeadRefused();
          simulateTyping(() => {
            addMessage(
              "bot",
              "No worries 🙂 You can still ask me about our services. What would you like to know?",
            );
            resetLeadFlow();
          });
        } else {
          addMessage(
            "bot",
            "Please provide a valid email (name@example.com) or 10-digit Indian phone number.",
          );
        }
        break;
      }

      case "phone_optional": {
        if (isRefusal(text) || text.trim().toLowerCase() === "skip") {
          simulateTyping(() => {
            addMessage(
              "bot",
              "No problem! Could you tell me about your project or what you're looking to build?",
            );
            setStep("need");
          });
        } else {
          const phone = normalizePhone(text);
          if (isValidPhone(phone)) {
            setLead((prev) => ({ ...prev, phone }));
            simulateTyping(() => {
              addMessage("bot", "Phone number added! 📞");
              setTimeout(() => {
                addMessage(
                  "bot",
                  "Could you tell me about your project or what you're looking to build?",
                );
                setStep("need");
              }, 700);
            });
          } else {
            addMessage(
              "bot",
              "That phone number seems invalid. Please enter a valid 10-digit Indian mobile number, or type 'skip' to continue.",
            );
          }
        }
        break;
      }

      case "email_optional":
        if (isRefusal(text) || text.trim().toLowerCase() === "skip") {
          simulateTyping(() => {
            addMessage(
              "bot",
              "No problem! Could you tell me about your project or what you're looking to build?",
            );
            setStep("need");
          });
        } else if (isValidEmail(text)) {
          setLead((prev) => ({ ...prev, email: text.trim() }));
          simulateTyping(() => {
            addMessage("bot", "Email added! 📧");
            setTimeout(() => {
              addMessage(
                "bot",
                "Could you tell me about your project or what you're looking to build?",
              );
              setStep("need");
            }, 700);
          });
        } else {
          addMessage(
            "bot",
            "That email doesn't look right. Please enter a valid email address (e.g., name@company.com), or type 'skip' to continue.",
          );
        }
        break;

      case "need":
        if (text.trim().length < 3) {
          addMessage(
            "bot",
            "Could you please describe your requirement a bit more? (Minimum 3 characters)",
          );
        } else {
          const finalLead = {
            ...lead,
            need: text.trim(),
            timestamp: new Date().toISOString(),
          };
          console.log("✅ [LEAD COMPLETE] Lead captured:", finalLead);

          if (finalLead.email || finalLead.phone) {
            // Mark lead as collected
            markLeadCollected();

            simulateTyping(() => {
              addMessage("bot", "Perfect! I have all the details. 🎯");
              setTimeout(async () => {
                addMessage(
                  "bot",
                  "Saving your information and connecting you with our team...",
                );
                const result = await sendLeadToAPI(finalLead);

                if (result.success) {
                  addMessage("bot", `Thank you ${lead.name}! 🙌`);
                  setTimeout(() => {
                    addMessage(
                      "bot",
                      `Our team will contact you shortly ${finalLead.email ? `at ${finalLead.email}` : ""}${finalLead.email && finalLead.phone ? " or " : ""}${finalLead.phone ? `at ${finalLead.phone}` : ""}.`,
                    );
                    setTimeout(() => {
                      addMessage(
                        "bot",
                        "Is there anything else I can help with?",
                      );
                      resetLeadFlow();
                    }, 900);
                  }, 700);
                } else {
                  addMessage("bot", `Thank you ${lead.name}! 🙌`);
                  setTimeout(() => {
                    addMessage(
                      "bot",
                      "I've noted your requirements. Our team will contact you soon.",
                    );
                    setTimeout(() => {
                      addMessage(
                        "bot",
                        "Is there anything else I can help with?",
                      );
                      resetLeadFlow();
                    }, 900);
                  }, 700);
                }
              }, 900);
            });
          } else {
            simulateTyping(() => {
              addMessage("bot", `Thank you ${lead.name}!`);
              setTimeout(() => {
                addMessage(
                  "bot",
                  `I've made a note of your interest in "${text.trim()}".`,
                );
                setTimeout(() => {
                  addMessage(
                    "bot",
                    "If you'd like our team to contact you, please provide your email or phone number.",
                  );
                  resetLeadFlow();
                }, 900);
              }, 700);
            });
          }
        }
        break;
    }
  };

  /* ---------------- QUICK REPLIES ---------------- */
  const handleQuickReply = (reply) => {
    if (sendLockRef.current) return;
    setInput(reply);
    requestAnimationFrame(() => sendMessage());
  };

  /* ---------------- CLOSE ---------------- */
  const handleClose = () => {
    if (lead.name && (lead.email || lead.phone)) {
      const partialLead = {
        ...lead,
        timestamp: new Date().toISOString(),
        status: "partial",
        need: lead.need || "Not specified",
      };
      console.log("📤 [CLOSE] Sending partial lead on close:", partialLead);
      sendLeadToAPI(partialLead);
    }

    saveChatHistory();
    setOpen(false);
  };

  /* ===================== JSX ===================== */

  return (
    <>
      <div className={`chat-float-wrapper ${open ? "active" : ""}`}>
        {/* MAIN BUTTON */}
        <button className="chat-main-btn" onClick={() => setToggle(!toggle)}>
          {toggle ? "✕" : <FaComment/>}
        </button>

        {/* ACTION BUTTONS */}
        <div className={`chat-actions ${toggle ? "show" : ""}`}>
          <a href="tel:+91-9891505451" className="action-btn call">
            <FaPhoneAlt/>
          </a>

          <a
            href="https://wa.me/9891505451"
            target="_blank"
            rel="noopener noreferrer"
            className="action-btn whatsapp"
          >
            <FaWhatsapp/>
          </a>

          <a className="action-btn chat" onClick={() =>{setOpen(!open); setToggle(false);}}>
            <FaComment/>
          </a>
        </div>
      </div>

      <div className={`chat-box ${open ? "show" : ""}`}>
        <div className="chat-header">
          <div className="header-content">
            <div className="avatar">🤖</div>
            <div>
              <h3>Adclan AI Assistant</h3>
              <p className="status">
                <span className="status-dot"></span>
                {isTyping ? "Typing..." : isSending ? "Saving..." : "Online"}
              </p>
            </div>
          </div>
          <button className="close-btn" onClick={handleClose}>
            ✕
          </button>
        </div>

        <div className="chat-body" ref={bodyRef}>
          {messages.map((m) => (
            <div key={m.id} className={`msg ${m.from}`}>
              <div className="msg-content">
                {m.text.split("\n").map((line, idx) => (
                  <p key={`${m.id}-line-${idx}`}>{line}</p>
                ))}
              </div>
              <span className="msg-time">
                {m.timestamp.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
          ))}

          {isTyping && (
            <div className="msg bot" key="typing-indicator">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* {suggestions.length > 0 && !step && !isTyping && !isSending && (
          <div className="quick-replies">
            {suggestions.slice(0, 4).map((suggestion, idx) => (
              <button
                key={`suggestion-${idx}-${suggestion}`}
                className="quick-reply"
                onClick={() => handleQuickReply(suggestion)}
              >
                {suggestion}
              </button>
            ))}
          </div>
        )} */}

        <div>
          <div className="chat-input">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={
                isSending
                  ? "Saving your information..."
                  : "Type your message here..."
              }
              onKeyDown={(e) => {
                if (
                  e.key === "Enter" &&
                  !isTyping &&
                  !isSending &&
                  input.trim()
                ) {
                  e.preventDefault();
                  sendMessage();
                }
              }}
              disabled={isTyping || isSending}
            />
            <button
              onClick={sendMessage}
              disabled={isTyping || isSending || !input.trim()}
              className="send-btn"
            >
              {isSending ? "⏳" : isTyping ? "..." : "↑"}
            </button>
          </div>
          <div className="chat-footer">
            <small>
              {isSending
                ? "Saving your details to our system..."
                : step === "contact" ||
                    step === "phone_optional" ||
                    step === "email_optional"
                  ? "💡 Contact info helps our team reach you"
                  : "💡 Ask about our services, pricing, or portfolio"}
            </small>
          </div>
        </div>
      </div>
    </>
  );
}
