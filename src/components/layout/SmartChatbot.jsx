// "use client";
// import { useState, useRef, useEffect, useCallback } from "react";
// import "./chats.css";

// const intents = [
//   /* ================= GREETINGS ================= */
//   {
//     keys: ["hi", "hello", "hey", "good morning", "good afternoon", "good evening"],
//     reply: "Hello 👋 Welcome to Adclan! I'm your AI assistant. How can I help you today?",
//     sentiment: "friendly"
//   },

//   /* ================= SERVICES OVERVIEW ================= */
//   {
//     keys: ["service", "services", "offer", "work", "what do you do", "offerings"],
//     reply: "We offer end-to-end digital growth solutions:\n\n• Website Design & Development\n• Branding & Visual Identity\n• SEO & Organic Growth\n• Social Media Marketing\n• Performance Ads (Google & Meta)\n• E-commerce Solutions\n• Content Creation (Reels, Creatives, Videos)\n• Lead Generation Funnels\n• Website Maintenance & Optimization\n\nWhich service would you like to explore?",
//     collect: true,
//     suggestions: ["Website Design", "SEO", "Google Ads", "Branding", "Social Media"]
//   },

//   /* ================= WEBSITE DESIGN ================= */
//   {
//     keys: ["website", "web design", "website development", "new website", "build website", "redesign website"],
//     reply: "We design high-conversion, mobile-first websites including:\n\n• Corporate websites\n• Landing pages\n• Portfolio websites\n• E-commerce stores\n• Custom web apps\n\nOur sites are fast, SEO-ready, and optimized for leads. Want a quick quote?",
//     collect: true,
//     suggestions: ["Business Website", "E-commerce Store", "Landing Page"]
//   },

//   {
//     keys: ["ecommerce", "online store", "shopify", "woocommerce", "sell online"],
//     reply: "Yes! We build high-performance e-commerce stores on Shopify, WooCommerce, and custom stacks — including product setup, payment gateways, and conversion optimization. Want to discuss your store?",
//     collect: true,
//     suggestions: ["Shopify Store", "WooCommerce Store", "Custom E-commerce"]
//   },

//   {
//     keys: ["website cost", "website price", "website charges", "how much for website"],
//     reply: "Website pricing depends on pages, features, and complexity. Typical ranges:\n\n• Business website: ₹25k – ₹75k\n• E-commerce store: ₹60k – ₹2L+\n• Landing pages: ₹8k – ₹20k\n\nWant a custom estimate?",
//     collect: true
//   },

//   {
//     keys: ["website timeline", "how long website", "delivery time website"],
//     reply: "Most websites take:\n\n• Landing page: 3–5 days\n• Business website: 7–14 days\n• E-commerce store: 2–4 weeks\n\nTimelines depend on content readiness and features. Want to start?",
//     collect: true
//   },

//   {
//     keys: ["website redesign", "revamp website", "improve website", "old website"],
//     reply: "Yes — we specialize in website redesigns focused on:\n\n• Speed optimization\n• Conversion improvement\n• Modern UI/UX\n• SEO performance\n\nWould you like a free website audit?",
//     collect: true,
//     suggestions: ["Free Website Audit", "Speed Optimization", "UI Redesign"]
//   },

//   /* ================= BRANDING ================= */
//   {
//     keys: ["branding", "brand identity", "logo", "brand design", "visual identity"],
//     reply: "Our branding services include:\n\n• Logo design\n• Brand guidelines\n• Color systems\n• Typography\n• Social & marketing creatives\n\nWe help brands stand out and convert. Want to see samples?",
//     collect: true,
//     suggestions: ["Logo Design", "Full Branding", "Brand Refresh"]
//   },

//   {
//     keys: ["logo cost", "logo pricing", "logo charges"],
//     reply: "Logo design typically ranges from ₹5k – ₹25k depending on concepts and revisions. Want a custom quote?",
//     collect: true
//   },

//   /* ================= SEO ================= */
//   {
//     keys: ["seo", "search engine optimization", "rank on google", "google ranking", "organic traffic"],
//     reply: "We provide result-driven SEO including:\n\n• Website audit & fixes\n• Keyword research\n• On-page SEO\n• Technical SEO\n• Content optimization\n• Local SEO\n• Link building\n\nWant a free SEO audit?",
//     collect: true,
//     suggestions: ["Free SEO Audit", "Local SEO", "Technical SEO"]
//   },

//   {
//     keys: ["local seo", "google maps ranking", "near me search", "gmb", "google my business"],
//     reply: "Yes — we specialize in Local SEO & Google Maps ranking through:\n\n• GMB optimization\n• Local citations\n• Reviews strategy\n• Location landing pages\n\nWant to rank in your city?",
//     collect: true
//   },

//   {
//     keys: ["seo pricing", "seo cost", "seo charges"],
//     reply: "SEO packages typically start from ₹12k/month depending on competition and goals. Want a tailored plan?",
//     collect: true
//   },

//   {
//     keys: ["seo results", "seo timeline", "how long seo", "seo guarantee"],
//     reply: "SEO usually shows visible results in 60–90 days. While rankings can't be guaranteed, we focus on sustainable traffic and lead growth. Want a roadmap?",
//     collect: false
//   },

//   /* ================= PERFORMANCE MARKETING ================= */
//   {
//     keys: ["google ads", "ppc", "paid ads", "search ads", "display ads"],
//     reply: "We run high-ROI Google Ads campaigns including:\n\n• Search ads\n• Display ads\n• Shopping ads\n• YouTube ads\n\nFocused on leads, sales, and ROI — not vanity clicks. Want a campaign plan?",
//     collect: true,
//     suggestions: ["Lead Generation Ads", "E-commerce Ads", "YouTube Ads"]
//   },

//   {
//     keys: ["facebook ads", "meta ads", "instagram ads", "paid social"],
//     reply: "We create conversion-focused Facebook & Instagram ads including:\n\n• Lead ads\n• Sales campaigns\n• Retargeting funnels\n• Creative production\n\nWant to scale your business?",
//     collect: true,
//     suggestions: ["Lead Ads", "E-commerce Sales", "Retargeting"]
//   },

//   {
//     keys: ["ads pricing", "ppc cost", "ad management charges"],
//     reply: "Ad management typically starts from ₹8k–₹20k/month excluding ad spend, depending on scale and complexity. Want a plan?",
//     collect: true
//   },

//   {
//     keys: ["roi", "results", "performance", "leads guarantee", "sales growth"],
//     reply: "We focus on measurable ROI — leads, sales, and growth metrics — with weekly reporting and optimization. Want sample results?",
//     collect: false
//   },

//   /* ================= SOCIAL MEDIA MARKETING ================= */
//   {
//     keys: ["social media", "instagram marketing", "facebook marketing", "linkedin marketing", "social management"],
//     reply: "We manage and grow brands on Instagram, Facebook, LinkedIn, and more through:\n\n• Content calendars\n• Reels & creatives\n• Community management\n• Growth campaigns\n• Influencer collaborations\n\nWant to grow your brand online?",
//     collect: true,
//     suggestions: ["Instagram Growth", "LinkedIn Marketing", "Reels Strategy"]
//   },

//   {
//     keys: ["reels", "video content", "short videos", "instagram reels"],
//     reply: "Yes! We create scroll-stopping reels and short-form videos for:\n\n• Instagram\n• YouTube Shorts\n• Facebook\n• LinkedIn\n\nWant content ideas for your niche?",
//     collect: true
//   },

//   {
//     keys: ["social media pricing", "smm cost", "social media charges"],
//     reply: "Social media management packages typically start from ₹10k/month depending on platforms and content volume. Want a custom plan?",
//     collect: true
//   },

//   /* ================= CONTENT CREATION ================= */
//   {
//     keys: ["content", "creatives", "graphic design", "marketing creatives", "posts design"],
//     reply: "We create high-converting:\n\n• Social media creatives\n• Ad banners\n• Website graphics\n• Reels & videos\n• Email creatives\n\nWant sample work?",
//     collect: true
//   },

//   {
//     keys: ["copywriting", "content writing", "website content", "seo content", "blogs"],
//     reply: "Yes — we provide conversion-focused copywriting and SEO content including:\n\n• Website copy\n• Landing pages\n• Blogs & articles\n• Ad copy\n• Email campaigns\n\nWant content for your business?",
//     collect: true
//   },

//   /* ================= LEAD GENERATION ================= */
//   {
//     keys: ["lead generation", "get leads", "more enquiries", "sales leads", "customer acquisition"],
//     reply: "We build complete lead generation systems using:\n\n• Landing pages\n• Paid ads\n• Funnels\n• CRM integration\n• Retargeting\n\nWant a lead growth plan?",
//     collect: true
//   },

//   /* ================= PROCESS & ONBOARDING ================= */
//   {
//     keys: ["process", "how do you work", "workflow", "onboarding", "steps"],
//     reply: "Our process is simple:\n\n1️⃣ Discovery & goals\n2️⃣ Strategy & planning\n3️⃣ Design & execution\n4️⃣ Launch & optimization\n5️⃣ Reporting & scaling\n\nWant to start a project?",
//     collect: false
//   },

//   {
//     keys: ["timeline", "delivery", "how long", "project duration"],
//     reply: "Project timelines vary by scope but we always share a clear delivery plan upfront. Want an estimated timeline for your project?",
//     collect: true
//   },

//   /* ================= INDUSTRIES ================= */
//   {
//     keys: ["industry", "experience", "worked with", "clients", "niche"],
//     reply: "We've worked with brands across:\n\n• Real estate\n• Healthcare\n• Education\n• E-commerce\n• Hospitality\n• SaaS\n• Manufacturing\n• Startups\n\nWhat industry are you in?",
//     collect: true
//   },

//   {
//     keys: ["real estate marketing", "property marketing", "builder marketing"],
//     reply: "We specialize in real estate lead generation using:\n\n• Google & Meta ads\n• Landing pages\n• CRM integrations\n• Local SEO\n\nWant real estate leads?",
//     collect: true
//   },

//   {
//     keys: ["education marketing", "school marketing", "coaching marketing", "edtech"],
//     reply: "We help schools, colleges, and coaching institutes generate admissions using digital campaigns and SEO. Want student leads?",
//     collect: true
//   },

//   {
//     keys: ["healthcare marketing", "clinic marketing", "doctor marketing", "hospital marketing"],
//     reply: "We grow clinics and hospitals using Local SEO, Google Ads, websites, and reputation management. Want patient leads?",
//     collect: true
//   },

//   /* ================= SUPPORT & MAINTENANCE ================= */
//   {
//     keys: ["support", "maintenance", "website maintenance", "ongoing support"],
//     reply: "Yes — we offer monthly website maintenance including:\n\n• Security updates\n• Speed optimization\n• Backups\n• Content updates\n• Bug fixes\n\nWant maintenance support?",
//     collect: true
//   },

//   {
//     keys: ["hosting", "domain", "email hosting", "server"],
//     reply: "Yes — we assist with:\n\n• Domain registration\n• Hosting setup\n• Business emails\n• SSL certificates\n\nNeed help setting this up?",
//     collect: true
//   },

//   /* ================= PAYMENTS & CONTRACTS ================= */
//   {
//     keys: ["payment", "pricing model", "billing", "invoice", "gst"],
//     reply: "We accept UPI, bank transfer, and online payments. GST invoices are provided. Want a quotation?",
//     collect: false
//   },

//   {
//     keys: ["contract", "agreement", "nda", "confidentiality"],
//     reply: "Yes — we sign NDAs and service agreements to protect your data, ideas, and business information. Want us to send one?",
//     collect: true
//   },

//   {
//     keys: ["refund", "cancellation", "money back"],
//     reply: "Refunds depend on project stage and scope. We always ensure transparency before starting. Want to discuss?",
//     collect: false
//   },

//   /* ================= OWNERSHIP & RIGHTS ================= */
//   {
//     keys: ["ownership", "source code", "website ownership", "design ownership"],
//     reply: "You own 100% of your website, designs, and assets after project completion and payment. Want more details?",
//     collect: false
//   },

//   {
//     keys: ["revisions", "changes", "iterations"],
//     reply: "We include multiple revision rounds depending on your package to ensure you're fully satisfied. Want to know how many?",
//     collect: false
//   },

//   /* ================= RESULTS & GUARANTEES ================= */
//   {
//     keys: ["guarantee", "results guarantee", "lead guarantee"],
//     reply: "While we can't legally guarantee rankings or sales, we focus on ROI-driven strategies and transparent performance reporting. Want sample results?",
//     collect: false
//   },

//   /* ================= CAREERS ================= */
//   {
//     keys: ["career", "jobs", "hiring", "vacancy", "internship"],
//     reply: "We’re always looking for creative talent! You can explore openings on our Careers page or email careers@adclan.in.",
//     collect: false
//   },

//   /* ================= CONTACT ================= */
//   {
//     keys: ["contact", "call", "phone", "email", "reach", "get in touch", "callback"],
//     reply: "📞 Phone: +91-9891505451\n📧 Email: info@adclan.in\n📍 Office: New Delhi, India\n⏰ Hours: Mon–Fri, 9AM–6PM\n\nWould you like me to:\n1️⃣ Schedule a callback\n2️⃣ Email you our details\n3️⃣ Connect you with a consultant?",
//     collect: true,
//     suggestions: ["Schedule callback", "Email details", "Talk to consultant"]
//   },

//   /* ================= LOCATION ================= */
//   {
//     keys: ["location", "address", "office", "where are you", "based"],
//     reply: "We're headquartered in New Delhi, India and serve clients globally. Would you like office directions or a virtual meeting?",
//     collect: false
//   },

//   /* ================= THANKS ================= */
//   {
//     keys: ["thanks", "thank you", "appreciate", "helpful"],
//     reply: "You're most welcome! 😊 Is there anything else I can help you with today?",
//     sentiment: "grateful"
//   },

//   /* ================= GOODBYE ================= */
//   {
//     keys: ["bye", "goodbye", "see you", "exit", "close"],
//     reply: "Thank you for chatting with Adclan! 👋 We'll be here whenever you need us. Have a great day!",
//     sentiment: "farewell"
//   },

//   /* ================= HELP ================= */
//   {
//     keys: ["help", "support", "what can you do", "assist"],
//     reply: "I can help you with:\n\n• Services & pricing\n• Website & SEO audits\n• Lead generation strategies\n• Portfolio & case studies\n• Booking consultations\n• Connecting with our team\n\nWhat would you like to explore?",
//     sentiment: "helpful"
//   },

//   /* ================= URGENT ================= */
//   {
//     keys: ["urgent", "emergency", "asap", "immediate", "now"],
//     reply: "For urgent matters, please call +91-9891505451 or email urgent@adclan.in. I can also escalate your request instantly. What’s the urgency?",
//     sentiment: "urgent",
//     priority: "high",
//     collect: true
//   }
// ];

// const refusalWords = ["no", "not now", "later", "don't", "dont", "skip", "cancel", "stop", "nah", "maybe later" ,"never"];
// const positiveWords = ["yes", "sure", "okay", "ok", "yeah", "yep", "please", "go ahead", "proceed"];
// const interestWords = ["interested", "want", "need", "looking for", "require", "project", "start", "begin", "build", "create", "develop"];

// const initialQuickReplies = [
//   "Tell me about services",
//   "What's the pricing?",
//   "Show portfolio",
//   "Contact details",
//   "Book consultation",
//   "Talk to human agent"
// ];

// // Context-based suggestions
// const suggestionContexts = {
//   default: [
//     "Tell me about services",
//     "What's the pricing?",
//     "Show portfolio",
//     "Contact details",
//     "Book consultation",
//     "Talk to human agent"
//   ],
//   afterNo: [
//     "What else can you help with?",
//     "Tell me about Adclan",
//     "Show your work",
//     "How to contact you?",
//     "Pricing information",
//     "Start over"
//   ],
//   services: [
//     "Website Design",
//     "SEO Services",
//     "Social Media Marketing",
//     "Branding Package",
//     "Content Creation",
//     "Performance Ads"
//   ],
//   pricing: [
//     "Get Estimate",
//     "Custom Quote",
//     "Package Pricing",
//     "Budget Planning",
//     "Compare Plans",
//     "Request Callback"
//   ],
//   contact: [
//     "Schedule Call",
//     "Email Now",
//     "Live Chat",
//     "Visit Office",
//     "Team Connect",
//     "Urgent Support"
//   ],
//   portfolio: [
//     "Web Design Examples",
//     "SEO Case Studies",
//     "Social Media Work",
//     "Branding Projects",
//     "Industry Specific",
//     "Client Testimonials"
//   ]
// };

// // API endpoint - replace with your actual endpoint
// const API_ENDPOINT = "https://your-api-endpoint.com/api/leads";

// export default function LeadChatbot() {
//   const [open, setOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     { id: Date.now(), from: "bot", text: "Hi 👋 I'm Adclan AI Assistant! I'm here to help with services, pricing, portfolio, or connecting you with our team. How can I assist you today?", timestamp: new Date() }
//   ]);
//   const [input, setInput] = useState("");
//   const [step, setStep] = useState(null);
//   const [lead, setLead] = useState({ name: "", email: "", phone: "", need: "", source: "chatbot", interestLevel: 0 });
//   const [isTyping, setIsTyping] = useState(false);
//   const [suggestions, setSuggestions] = useState(initialQuickReplies);
//   const [suggestionContext, setSuggestionContext] = useState("default");
//   const [chatHistory, setChatHistory] = useState([]);
//   const [isSending, setIsSending] = useState(false);
//   const [userSession, setUserSession] = useState({
//     id: `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
//     startTime: new Date(),
//     messageCount: 0,
//     intentCounts: {},
//     interestDetected: false
//   });

//   const bodyRef = useRef(null);
//   const inputRef = useRef(null);
//   const messagesEndRef = useRef(null);

//   // Scroll to bottom when messages change
//   const scrollToBottom = () => {
//     if (messagesEndRef.current) {
//       messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages, isTyping]);

//   useEffect(() => {
//     if (open && inputRef.current) {
//       setTimeout(() => inputRef.current.focus(), 300);
//     }
//   }, [open]);

//   // Update suggestions based on context
//   useEffect(() => {
//     if (suggestionContexts[suggestionContext]) {
//       setSuggestions(suggestionContexts[suggestionContext]);
//     }
//   }, [suggestionContext]);

//   /* ---------------- VALIDATORS ---------------- */
//   const isValidName = (v) => /^[a-zA-Z][a-zA-Z\s]{1,49}$/.test(v.trim());
//   const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
//   const isValidPhone = (v) => /^[6-9]\d{9}$/.test(v.replace(/\D/g, ""));
//   const normalizePhone = (v) => v.replace(/\D/g, "");

//   /* ---------------- INTEREST DETECTION ---------------- */
//   const detectInterest = (text) => {
//     const lower = text.toLowerCase();
//     return interestWords.some((w) => lower.includes(w));
//   };

//   /* ---------------- SESSION & ANALYTICS ---------------- */
//   const trackIntent = useCallback((intentKey) => {
//     setUserSession(prev => ({
//       ...prev,
//       messageCount: prev.messageCount + 1,
//       intentCounts: {
//         ...prev.intentCounts,
//         [intentKey]: (prev.intentCounts[intentKey] || 0) + 1
//       }
//     }));
//   }, []);

//   const saveChatHistory = useCallback(() => {
//     const history = {
//       sessionId: userSession.id,
//       startTime: userSession.startTime,
//       endTime: new Date(),
//       messageCount: userSession.messageCount,
//       intents: userSession.intentCounts,
//       messages: messages.slice(1),
//       leadCaptured: lead.name && (lead.email || lead.phone) ? lead : null
//     };
//     setChatHistory(prev => [...prev, history]);
//     console.log("📊 Chat History:", history);
//   }, [messages, lead, userSession]);

//   /* ---------------- SEND LEAD TO API ---------------- */
//   const sendLeadToAPI = useCallback(async (leadData) => {
//     console.log("📤 [API CALL] Attempting to send lead to API:", leadData);

//     // Check if we have at least email OR phone to send
//     if (!leadData.email && !leadData.phone) {
//       console.log("⚠️ [API CALL] No email or phone provided, skipping API call");
//       return { success: false, message: "No contact information provided" };
//     }

//     setIsSending(true);

//     try {
//       const payload = {
//         ...leadData,
//         sessionId: userSession.id,
//         timestamp: new Date().toISOString(),
//         pageUrl: window.location.href,
//         userAgent: navigator.userAgent,
//         status: "new",
//         leadScore: calculateLeadScore(leadData)
//       };

//       console.log("📤 [API CALL] Sending lead to API payload:", payload);

//       // Remove empty fields before sending
//       Object.keys(payload).forEach(key => {
//         if (payload[key] === "" || payload[key] === null || payload[key] === undefined) {
//           delete payload[key];
//         }
//       });

//       // IMPORTANT: API IS CALLED HERE
//       console.log("📤 [API CALL] Would send to:", API_ENDPOINT);

//       // For now, simulate API call with delay
//       await new Promise(resolve => setTimeout(resolve, 800));

//       console.log("✅ [API CALL] Lead sent successfully (simulated)");

//       // TODO: Replace with your actual API call
//       /*
//       const response = await fetch(API_ENDPOINT, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json'
//         },
//         body: JSON.stringify(payload)
//       });

//       const data = await response.json();

//       if (response.ok) {
//         console.log("✅ [API CALL] Lead sent successfully:", data);
//         return { success: true, data };
//       } else {
//         console.error("❌ [API CALL] API Error:", data);
//         return { success: false, error: data };
//       }
//       */

//       return { success: true, data: { id: Date.now(), ...payload } };

//     } catch (error) {
//       console.error("❌ [API CALL] Network Error:", error);
//       return { success: false, error: error.message };
//     } finally {
//       setIsSending(false);
//     }
//   }, [userSession.id]);

//   const calculateLeadScore = (leadData) => {
//     let score = 0;
//     if (leadData.name) score += 25;
//     if (leadData.email) score += 30;
//     if (leadData.phone) score += 30;
//     if (leadData.need && leadData.need.length > 10) score += 15;
//     return score;
//   };

//   /* ---------------- AI ENHANCEMENTS ---------------- */
//   const isRefusal = (text) => {
//     const lower = text.toLowerCase();
//     return refusalWords.some((w) => lower.includes(w));
//   };

//   const isPositive = (text) => {
//     const lower = text.toLowerCase();
//     return positiveWords.some((w) => lower.includes(w));
//   };

//   const detectIntent = (text) => {
//     const lower = text.toLowerCase();
//     const matchedIntent = intents.find((i) => i.keys.some((k) => lower.includes(k)));

//     if (matchedIntent) {
//       trackIntent(matchedIntent.keys[0]);

//       // Update suggestion context based on intent
//       if (matchedIntent.keys.some(k => k === "service")) {
//         setSuggestionContext("services");
//       } else if (matchedIntent.keys.some(k => k === "price")) {
//         setSuggestionContext("pricing");
//       } else if (matchedIntent.keys.some(k => k === "contact")) {
//         setSuggestionContext("contact");
//       } else if (matchedIntent.keys.some(k => k === "portfolio")) {
//         setSuggestionContext("portfolio");
//       }
//     }

//     return matchedIntent;
//   };

//   const updateSuggestionContext = useCallback((context) => {
//     setSuggestionContext(context);
//   }, []);

//   /* ---------------- MESSAGE HANDLING ---------------- */
//   const simulateTyping = (callback, minDelay = 1000) => {
//     setIsTyping(true);
//     setTimeout(() => {
//       setIsTyping(false);
//       if (callback) callback();
//     }, minDelay);
//   };

//   const resetLeadFlow = () => {
//     setStep(null);
//     setLead({ name: "", email: "", phone: "", need: "", source: "chatbot", interestLevel: 0 });
//     setSuggestionContext("default");
//   };

//   // Add message with unique ID to prevent React errors
//   const addMessage = (from, text) => {
//     const newMessage = {
//       id: Date.now() + Math.random(),
//       from,
//       text,
//       timestamp: new Date()
//     };
//     setMessages(prev => [...prev, newMessage]);
//   };

//   const shouldCollectLead = (text, intent) => {
//     // Only collect if:
//     // 1. Intent has collect: true AND
//     // 2. User shows real interest OR it's a contact/urgent request

//     if (!intent.collect) return false;

//     const lower = text.toLowerCase();
//     const hasInterest = detectInterest(text) || isPositive(text);

//     // For contact/urgent intents, always collect
//     if (intent.keys.some(k => k === "contact" || k === "urgent")) {
//       return true;
//     }

//     // For service intents, only collect if user shows interest
//     if (intent.keys.some(k => k === "service" || k === "price")) {
//       return hasInterest || userSession.interestDetected;
//     }

//     return false;
//   };

//   const sendMessage = async () => {
//     const text = input.trim();
//     if (!text || isTyping || isSending) return;

//     // 1. Show user message immediately
//     addMessage("user", text);
//     setInput("");

//     const intent = detectIntent(text);

//     // Check if user shows interest
//     if (detectInterest(text)) {
//       setUserSession(prev => ({ ...prev, interestDetected: true }));
//       setLead(prev => ({ ...prev, interestLevel: prev.interestLevel + 1 }));
//     }

//     if (step) {
//       // Handle current step
//       await handleStep(text);
//     } else if (intent && shouldCollectLead(text, intent)) {
//       // Show intent response
//       simulateTyping(() => {
//         addMessage("bot", intent.reply);

//         // Only ask for lead info if user is genuinely interested
//         setTimeout(() => {
//           if (lead.interestLevel >= 1 || intent.keys.some(k => k === "contact" || k === "urgent")) {
//             simulateTyping(() => {
//               addMessage("bot", "I'd be happy to connect you with our team! May I have your name?");
//               setStep("name");
//             });
//           }
//         }, 1000);
//       });
//     } else if (intent) {
//       // Just show response without collecting lead
//       simulateTyping(() => {
//         addMessage("bot", intent.reply);
//       });
//     } else {
//       // Fallback response
//       const fallbacks = [
//         "I'm not sure I understand. Could you rephrase that?",
//         "I'm still learning! Could you ask about our services, pricing, or portfolio?",
//         "That's interesting! At the moment, I can best help with information about Adclan's services. What specifically would you like to know?"
//       ];
//       const randomFallback = fallbacks[Math.floor(Math.random() * fallbacks.length)];

//       simulateTyping(() => {
//         addMessage("bot", randomFallback);
//       });
//     }
//   };

//   const handleStep = async (text) => {
//     switch (step) {
//       case "name":
//         if (!isValidName(text)) {
//           addMessage("bot", "That doesn't look like a valid name 😅 Could you please enter your full name (2-50 characters)?");
//         } else {
//           setLead(prev => ({ ...prev, name: text.trim() }));
//           simulateTyping(() => {
//             addMessage("bot", `Nice to meet you, ${text.trim()}!`);
//             setTimeout(() => {
//               addMessage("bot", "May I have your email or phone number so our team can contact you?");
//               setStep("contact");
//             }, 800);
//           });
//         }
//         break;

//       case "contact":
//         const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(text.trim());
//         const phone = normalizePhone(text);
//         const isPhone = /^[6-9]\d{9}$/.test(phone);

//         if (isEmail) {
//           setLead(prev => ({ ...prev, email: text.trim() }));
//           simulateTyping(() => {
//             addMessage("bot", "Email saved! 📧");
//             setTimeout(() => {
//               addMessage("bot", "Would you like to share your phone number too? (Optional)");
//               setStep("phone_optional");
//             }, 800);
//           });
//         } else if (isPhone) {
//           setLead(prev => ({ ...prev, phone }));
//           simulateTyping(() => {
//             addMessage("bot", "Phone number saved! 📞");
//             setTimeout(() => {
//               addMessage("bot", "Would you like to share your email too? (Optional)");
//               setStep("email_optional");
//             }, 800);
//           });
//         } else {
//           addMessage("bot", "Please provide a valid email (name@example.com) or 10-digit Indian phone number.");
//         }
//         break;

//       case "phone_optional":
//         if (text.trim().toLowerCase() === "skip" || text.trim() === "") {
//           simulateTyping(() => {
//             addMessage("bot", "No problem! Could you tell me about your project or what you're looking to build?");
//             setStep("need");
//           });
//         } else {
//           const phone = normalizePhone(text);
//           if (isValidPhone(phone)) {
//             setLead(prev => ({ ...prev, phone }));
//             simulateTyping(() => {
//               addMessage("bot", "Phone number added! 📞");
//               setTimeout(() => {
//                 addMessage("bot", "Could you tell me about your project or what you're looking to build?");
//                 setStep("need");
//               }, 800);
//             });
//           } else {
//             addMessage("bot", "That phone number seems invalid. Please enter a valid 10-digit Indian mobile number, or type 'skip' to continue.");
//           }
//         }
//         break;

//       case "email_optional":
//         if (text.trim().toLowerCase() === "skip" || text.trim() === "") {
//           simulateTyping(() => {
//             addMessage("bot", "No problem! Could you tell me about your project or what you're looking to build?");
//             setStep("need");
//           });
//         } else {
//           if (isValidEmail(text)) {
//             setLead(prev => ({ ...prev, email: text.trim() }));
//             simulateTyping(() => {
//               addMessage("bot", "Email added! 📧");
//               setTimeout(() => {
//                 addMessage("bot", "Could you tell me about your project or what you're looking to build?");
//                 setStep("need");
//               }, 800);
//             });
//           } else {
//             addMessage("bot", "That email doesn't look right. Please enter a valid email address (e.g., name@company.com), or type 'skip' to continue.");
//           }
//         }
//         break;

//       case "need":
//         if (text.trim().length < 3) {
//           addMessage("bot", "Could you please describe your requirement a bit more? (Minimum 3 characters)");
//         } else {
//           const finalLead = { ...lead, need: text.trim(), timestamp: new Date().toISOString() };
//           console.log("✅ [LEAD COMPLETE] Lead captured:", finalLead);

//           if (finalLead.email || finalLead.phone) {
//             console.log("📤 [API TRIGGER] Calling API with lead data...");

//             setIsSending(true);
//             simulateTyping(() => {
//               addMessage("bot", "Perfect! I have all the details. 🎯");
//               setTimeout(async () => {
//                 addMessage("bot", "Saving your information and connecting you with our team...");

//                 const result = await sendLeadToAPI(finalLead);
//                 setIsSending(false);

//                 if (result.success) {
//                   addMessage("bot", `Thank you ${lead.name}! 🙌`);
//                   setTimeout(() => {
//                     addMessage("bot", `Our team will contact you shortly ${lead.email ? `at ${lead.email}` : ''}${lead.email && lead.phone ? ' or ' : ''}${lead.phone ? `at ${lead.phone}` : ''}.`);
//                     setTimeout(() => {
//                       addMessage("bot", "Is there anything else I can help with?");
//                       resetLeadFlow();
//                     }, 1000);
//                   }, 800);
//                 } else {
//                   addMessage("bot", `Thank you ${lead.name}! 🙌`);
//                   setTimeout(() => {
//                     addMessage("bot", "I've noted your requirements. Our team will contact you soon.");
//                     setTimeout(() => {
//                       addMessage("bot", "Is there anything else I can help with?");
//                       resetLeadFlow();
//                     }, 1000);
//                   }, 800);
//                 }
//               }, 1000);
//             });
//           } else {
//             simulateTyping(() => {
//               addMessage("bot", `Thank you ${lead.name}!`);
//               setTimeout(() => {
//                 addMessage("bot", `I've made a note of your interest in "${text.trim()}".`);
//                 setTimeout(() => {
//                   addMessage("bot", "If you'd like our team to contact you, please provide your email or phone number.");
//                   resetLeadFlow();
//                 }, 1000);
//               }, 800);
//             });
//           }
//         }
//         break;
//     }
//   };

//   const handleQuickReply = (reply) => {
//     setInput(reply);
//     // Small delay to ensure state updates
//     setTimeout(() => {
//       sendMessage();
//     }, 50);
//   };

//   const handleClose = () => {
//     // Only send partial lead if we have name AND contact info
//     if (lead.name && (lead.email || lead.phone)) {
//       const partialLead = {
//         ...lead,
//         timestamp: new Date().toISOString(),
//         status: "partial",
//         need: lead.need || "Not specified"
//       };
//       console.log("📤 [CLOSE] Sending partial lead on close:", partialLead);
//       sendLeadToAPI(partialLead);
//     }

//     saveChatHistory();
//     setOpen(false);
//   };

//   return (
//     <>
//       <button className={`chat-float ${open ? "active" : ""}`} onClick={() => setOpen(!open)}>
//         {open ? "✕" : "💬"}
//         <span className="float-pulse"></span>
//         <span className="float-tooltip">Chat with us!</span>
//       </button>

//       <div className={`chat-box ${open ? "show" : ""}`}>
//         <div className="chat-header">
//           <div className="header-content">
//             <div className="avatar">🤖</div>
//             <div>
//               <h3>Adclan AI Assistant</h3>
//               <p className="status">
//                 <span className="status-dot"></span>
//                 {isTyping ? "Typing..." : isSending ? "Saving..." : "Online"}
//               </p>
//             </div>
//           </div>
//           <button className="close-btn" onClick={handleClose}>✕</button>
//         </div>

//         <div className="chat-body" ref={bodyRef}>
//           {messages.map((m) => (
//             <div key={m.id} className={`msg ${m.from}`}>
//               <div className="msg-content">
//                 {m.text.split('\n').map((line, idx) => (
//                   <p key={idx}>{line}</p>
//                 ))}
//               </div>
//               <span className="msg-time">
//                 {m.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//               </span>
//             </div>
//           ))}

//           {isTyping && (
//             <div className="msg bot" key="typing">
//               <div className="typing-indicator">
//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </div>
//             </div>
//           )}

//           <div ref={messagesEndRef} />
//         </div>

//         {suggestions.length > 0 && !step && !isTyping && !isSending && (
//           <div className="quick-replies">
//             {suggestions.slice(0, 4).map((suggestion, idx) => (
//               <button
//                 key={idx}
//                 className="quick-reply"
//                 onClick={() => handleQuickReply(suggestion)}
//               >
//                 {suggestion}
//               </button>
//             ))}
//           </div>
//         )}

//         <div className="chat-input">
//           <input
//             ref={inputRef}
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder={isSending ? "Saving your information..." : "Type your message here..."}
//             onKeyDown={(e) => {
//               if (e.key === "Enter" && !isTyping && !isSending && input.trim()) {
//                 e.preventDefault();
//                 sendMessage();
//               }
//             }}
//             disabled={isTyping || isSending}
//           />
//           <button
//             onClick={sendMessage}
//             disabled={isTyping || isSending || !input.trim()}
//             className="send-btn"
//           >
//             {isSending ? "⏳" : isTyping ? "..." : "↑"}
//           </button>
//         </div>

//         <div className="chat-footer">
//           <small>
//             {isSending ? "Saving your details to our system..." :
//              step === "contact" || step === "phone_optional" || step === "email_optional" ?
//              "💡 Contact info helps our team reach you" :
//              "💡 Ask about our services, pricing, or portfolio"}
//           </small>
//         </div>
//       </div>
//     </>
//   );
// }

"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import "./chats.css";

/* ===================== YOUR DATA (UNCHANGED) ===================== */

const intents = [
  {
    keys: [
      "hi",
      "hello",
      "hey",
      "good morning",
      "good afternoon",
      "good evening",
    ],
    reply:
      "Hello 👋 Welcome to Adclan! I'm your AI assistant. How can I help you today?",
    sentiment: "friendly",
  },
  {
    keys: [
      "service",
      "services",
      "offer",
      "work",
      "what do you do",
      "offerings",
    ],
    reply:
      "We offer end-to-end digital growth solutions:\n\n• Website Design & Development\n• Branding & Visual Identity\n• SEO & Organic Growth\n• Social Media Marketing\n• Performance Ads (Google & Meta)\n• E-commerce Solutions\n• Content Creation (Reels, Creatives, Videos)\n• Lead Generation Funnels\n• Website Maintenance & Optimization\n\nWhich service would you like to explore?",
    collect: true,
    suggestions: [
      "Website Design",
      "SEO",
      "Google Ads",
      "Branding",
      "Social Media",
    ],
  },
  {
    keys: [
      "website",
      "web design",
      "website development",
      "new website",
      "build website",
      "redesign website",
    ],
    reply:
      "We design high-conversion, mobile-first websites including:\n\n• Corporate websites\n• Landing pages\n• Portfolio websites\n• E-commerce stores\n• Custom web apps\n\nOur sites are fast, SEO-ready, and optimized for leads. Want a quick quote?",
    collect: true,
    suggestions: ["Business Website", "E-commerce Store", "Landing Page"],
  },
  {
    keys: [
      "ecommerce",
      "online store",
      "shopify",
      "woocommerce",
      "sell online",
    ],
    reply:
      "Yes! We build high-performance e-commerce stores on Shopify, WooCommerce, and custom stacks — including product setup, payment gateways, and conversion optimization. Want to discuss your store?",
    collect: true,
    suggestions: ["Shopify Store", "WooCommerce Store", "Custom E-commerce"],
  },
  {
    keys: [
      "website cost",
      "website price",
      "website charges",
      "how much for website",
    ],
    reply:
      "Website pricing depends on pages, features, and complexity. Typical ranges:\n\n• Business website: ₹25k – ₹75k\n• E-commerce store: ₹60k – ₹2L+\n• Landing pages: ₹8k – ₹20k\n\nWant a custom estimate?",
    collect: true,
  },
  {
    keys: ["website timeline", "how long website", "delivery time website"],
    reply:
      "Most websites take:\n\n• Landing page: 3–5 days\n• Business website: 7–14 days\n• E-commerce store: 2–4 weeks\n\nTimelines depend on content readiness and features. Want to start?",
    collect: true,
  },
  {
    keys: [
      "website redesign",
      "revamp website",
      "improve website",
      "old website",
    ],
    reply:
      "Yes — we specialize in website redesigns focused on:\n\n• Speed optimization\n• Conversion improvement\n• Modern UI/UX\n• SEO performance\n\nWould you like a free website audit?",
    collect: true,
    suggestions: ["Free Website Audit", "Speed Optimization", "UI Redesign"],
  },
  {
    keys: [
      "branding",
      "brand identity",
      "logo",
      "brand design",
      "visual identity",
    ],
    reply:
      "Our branding services include:\n\n• Logo design\n• Brand guidelines\n• Color systems\n• Typography\n• Social & marketing creatives\n\nWe help brands stand out and convert. Want to see samples?",
    collect: true,
    suggestions: ["Logo Design", "Full Branding", "Brand Refresh"],
  },
  {
    keys: ["logo cost", "logo pricing", "logo charges"],
    reply:
      "Logo design typically ranges from ₹5k – ₹25k depending on concepts and revisions. Want a custom quote?",
    collect: true,
  },
  {
    keys: [
      "seo",
      "search engine optimization",
      "rank on google",
      "google ranking",
      "organic traffic",
    ],
    reply:
      "We provide result-driven SEO including:\n\n• Website audit & fixes\n• Keyword research\n• On-page SEO\n• Technical SEO\n• Content optimization\n• Local SEO\n• Link building\n\nWant a free SEO audit?",
    collect: true,
    suggestions: ["Free SEO Audit", "Local SEO", "Technical SEO"],
  },
  {
    keys: [
      "local seo",
      "google maps ranking",
      "near me search",
      "gmb",
      "google my business",
    ],
    reply:
      "Yes — we specialize in Local SEO & Google Maps ranking through:\n\n• GMB optimization\n• Local citations\n• Reviews strategy\n• Location landing pages\n\nWant to rank in your city?",
    collect: true,
  },
  {
    keys: ["seo pricing", "seo cost", "seo charges"],
    reply:
      "SEO packages typically start from ₹12k/month depending on competition and goals. Want a tailored plan?",
    collect: true,
  },
  {
    keys: ["seo results", "seo timeline", "how long seo", "seo guarantee"],
    reply:
      "SEO usually shows visible results in 60–90 days. While rankings can't be guaranteed, we focus on sustainable traffic and lead growth. Want a roadmap?",
    collect: false,
  },
  {
    keys: ["google ads", "ppc", "paid ads", "search ads", "display ads"],
    reply:
      "We run high-ROI Google Ads campaigns including:\n\n• Search ads\n• Display ads\n• Shopping ads\n• YouTube ads\n\nFocused on leads, sales, and ROI — not vanity clicks. Want a campaign plan?",
    collect: true,
    suggestions: ["Lead Generation Ads", "E-commerce Ads", "YouTube Ads"],
  },
  {
    keys: ["facebook ads", "meta ads", "instagram ads", "paid social"],
    reply:
      "We create conversion-focused Facebook & Instagram ads including:\n\n• Lead ads\n• Sales campaigns\n• Retargeting funnels\n• Creative production\n\nWant to scale your business?",
    collect: true,
    suggestions: ["Lead Ads", "E-commerce Sales", "Retargeting"],
  },
  {
    keys: ["ads pricing", "ppc cost", "ad management charges"],
    reply:
      "Ad management typically starts from ₹8k–₹20k/month excluding ad spend, depending on scale and complexity. Want a plan?",
    collect: true,
  },
  {
    keys: ["roi", "results", "performance", "leads guarantee", "sales growth"],
    reply:
      "We focus on measurable ROI — leads, sales, and growth metrics — with weekly reporting and optimization. Want sample results?",
    collect: false,
  },
  {
    keys: [
      "social media",
      "instagram marketing",
      "facebook marketing",
      "linkedin marketing",
      "social management",
    ],
    reply:
      "We manage and grow brands on Instagram, Facebook, LinkedIn, and more through:\n\n• Content calendars\n• Reels & creatives\n• Community management\n• Growth campaigns\n• Influencer collaborations\n\nWant to grow your brand online?",
    collect: true,
    suggestions: ["Instagram Growth", "LinkedIn Marketing", "Reels Strategy"],
  },
  {
    keys: ["reels", "video content", "short videos", "instagram reels"],
    reply:
      "Yes! We create scroll-stopping reels and short-form videos for:\n\n• Instagram\n• YouTube Shorts\n• Facebook\n• LinkedIn\n\nWant content ideas for your niche?",
    collect: true,
  },
  {
    keys: ["social media pricing", "smm cost", "social media charges"],
    reply:
      "Social media management packages typically start from ₹10k/month depending on platforms and content volume. Want a custom plan?",
    collect: true,
  },
  {
    keys: [
      "content",
      "creatives",
      "graphic design",
      "marketing creatives",
      "posts design",
    ],
    reply:
      "We create high-converting:\n\n• Social media creatives\n• Ad banners\n• Website graphics\n• Reels & videos\n• Email creatives\n\nWant sample work?",
    collect: true,
  },
  {
    keys: [
      "copywriting",
      "content writing",
      "website content",
      "seo content",
      "blogs",
    ],
    reply:
      "Yes — we provide conversion-focused copywriting and SEO content including:\n\n• Website copy\n• Landing pages\n• Blogs & articles\n• Ad copy\n• Email campaigns\n\nWant content for your business?",
    collect: true,
  },
  {
    keys: [
      "lead generation",
      "get leads",
      "more enquiries",
      "sales leads",
      "customer acquisition",
    ],
    reply:
      "We build complete lead generation systems using:\n\n• Landing pages\n• Paid ads\n• Funnels\n• CRM integration\n• Retargeting\n\nWant a lead growth plan?",
    collect: true,
  },
  {
    keys: ["process", "how do you work", "workflow", "onboarding", "steps"],
    reply:
      "Our process is simple:\n\n1️⃣ Discovery & goals\n2️⃣ Strategy & planning\n3️⃣ Design & execution\n4️⃣ Launch & optimization\n5️⃣ Reporting & scaling\n\nWant to start a project?",
    collect: false,
  },
  {
    keys: ["timeline", "delivery", "how long", "project duration"],
    reply:
      "Project timelines vary by scope but we always share a clear delivery plan upfront. Want an estimated timeline for your project?",
    collect: true,
  },
  {
    keys: ["industry", "experience", "worked with", "clients", "niche"],
    reply:
      "We've worked with brands across:\n\n• Real estate\n• Healthcare\n• Education\n• E-commerce\n• Hospitality\n• SaaS\n• Manufacturing\n• Startups\n\nWhat industry are you in?",
    collect: true,
  },
  {
    keys: ["real estate marketing", "property marketing", "builder marketing"],
    reply:
      "We specialize in real estate lead generation using:\n\n• Google & Meta ads\n• Landing pages\n• CRM integrations\n• Local SEO\n\nWant real estate leads?",
    collect: true,
  },
  {
    keys: [
      "education marketing",
      "school marketing",
      "coaching marketing",
      "edtech",
    ],
    reply:
      "We help schools, colleges, and coaching institutes generate admissions using digital campaigns and SEO. Want student leads?",
    collect: true,
  },
  {
    keys: [
      "healthcare marketing",
      "clinic marketing",
      "doctor marketing",
      "hospital marketing",
    ],
    reply:
      "We grow clinics and hospitals using Local SEO, Google Ads, websites, and reputation management. Want patient leads?",
    collect: true,
  },
  {
    keys: ["support", "maintenance", "website maintenance", "ongoing support"],
    reply:
      "Yes — we offer monthly website maintenance including:\n\n• Security updates\n• Speed optimization\n• Backups\n• Content updates\n• Bug fixes\n\nWant maintenance support?",
    collect: true,
  },
  {
    keys: ["hosting", "domain", "email hosting", "server"],
    reply:
      "Yes — we assist with:\n\n• Domain registration\n• Hosting setup\n• Business emails\n• SSL certificates\n\nNeed help setting this up?",
    collect: true,
  },
  {
    keys: ["payment", "pricing model", "billing", "invoice", "gst"],
    reply:
      "We accept UPI, bank transfer, and online payments. GST invoices are provided. Want a quotation?",
    collect: false,
  },
  {
    keys: ["contract", "agreement", "nda", "confidentiality"],
    reply:
      "Yes — we sign NDAs and service agreements to protect your data, ideas, and business information. Want us to send one?",
    collect: true,
  },
  {
    keys: ["refund", "cancellation", "money back"],
    reply:
      "Refunds depend on project stage and scope. We always ensure transparency before starting. Want to discuss?",
    collect: false,
  },
  {
    keys: ["ownership", "source code", "website ownership", "design ownership"],
    reply:
      "You own 100% of your website, designs, and assets after project completion and payment. Want more details?",
    collect: false,
  },
  {
    keys: ["revisions", "changes", "iterations"],
    reply:
      "We include multiple revision rounds depending on your package to ensure you're fully satisfied. Want to know how many?",
    collect: false,
  },
  {
    keys: ["guarantee", "results guarantee", "lead guarantee"],
    reply:
      "While we can't legally guarantee rankings or sales, we focus on ROI-driven strategies and transparent performance reporting. Want sample results?",
    collect: false,
  },
  {
    keys: ["career", "jobs", "hiring", "vacancy", "internship"],
    reply:
      "We’re always looking for creative talent! You can explore openings on our Careers page or email careers@adclan.in.",
    collect: false,
  },
  {
    keys: [
      "contact",
      "call",
      "phone",
      "email",
      "reach",
      "get in touch",
      "callback",
    ],
    reply:
      "📞 Phone: +91-9891505451\n📧 Email: info@adclan.in\n📍 Office: New Delhi, India\n⏰ Hours: Mon–Fri, 9AM–6PM\n\nWould you like me to:\n1️⃣ Schedule a callback\n2️⃣ Email you our details\n3️⃣ Connect you with a consultant?",
    collect: true,
    suggestions: ["Schedule callback", "Email details", "Talk to consultant"],
  },
  {
    keys: ["location", "address", "office", "where are you", "based"],
    reply:
      "We're headquartered in New Delhi, India and serve clients globally. Would you like office directions or a virtual meeting?",
    collect: false,
  },
  {
    keys: ["thanks", "thank you", "appreciate", "helpful"],
    reply:
      "You're most welcome! 😊 Is there anything else I can help you with today?",
    sentiment: "grateful",
  },
  {
    keys: ["bye", "goodbye", "see you", "exit", "close"],
    reply:
      "Thank you for chatting with Adclan! 👋 We'll be here whenever you need us. Have a great day!",
    sentiment: "farewell",
  },
  {
    keys: ["help", "support", "what can you do", "assist"],
    reply:
      "I can help you with:\n\n• Services & pricing\n• Website & SEO audits\n• Lead generation strategies\n• Portfolio & case studies\n• Booking consultations\n• Connecting with our team\n\nWhat would you like to explore?",
    sentiment: "helpful",
  },
  {
    keys: ["urgent", "emergency", "asap", "immediate", "now"],
    reply:
      "For urgent matters, please call +91-9891505451 or email urgent@adclan.in. I can also escalate your request instantly. What’s the urgency?",
    sentiment: "urgent",
    priority: "high",
    collect: true,
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
    hasBeenAsked: false,      // Whether we've asked for lead info
    hasBeenCollected: false,  // Whether we successfully collected contact info
    hasBeenRefused: false,    // Whether user refused to provide info
    lastAskTime: null,        // When we last asked
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
    setMessages((prev) => [
      ...prev,
      { id, from, text, timestamp: new Date() },
    ]);
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
    setLeadCollectionState(prev => ({
      ...prev,
      hasBeenAsked: true,
      lastAskTime: new Date()
    }));
    setStep("name");
  };

  // Call this when lead is successfully collected
  const markLeadCollected = () => {
    setLeadCollectionState(prev => ({
      ...prev,
      hasBeenCollected: true,
      hasBeenAsked: true
    }));
  };

  // Call this when user refuses
  const markLeadRefused = () => {
    setLeadCollectionState(prev => ({
      ...prev,
      hasBeenRefused: true,
      hasBeenAsked: true
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
      <button
        className={`chat-float ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        {open ? "✕" : "💬"}
        <span className="float-pulse"></span>
        <span className="float-tooltip">Chat with us!</span>
      </button>

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

        {suggestions.length > 0 && !step && !isTyping && !isSending && (
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
        )}

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
    </>
  );
}
