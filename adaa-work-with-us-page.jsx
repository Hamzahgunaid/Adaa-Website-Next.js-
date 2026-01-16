import React, { useState } from 'react';

// Adaa' Foundation Work With Us Page
// Brand Colors from Style Guide
const colors = {
  primaryNavy: '#1E3A5F',
  secondaryTeal: '#5BB5B0',
  accentLightBlue: '#7ECBD4',
  ctaOrange: '#F7931E',
  accentYellow: '#FFC72C',
  accentGreen: '#8DC63F',
  bodyText: '#4A4A4A',
  lightBg: '#F8FAFB',
  white: '#FFFFFF'
};

// Logo Icon
const AdaaLogoIcon = ({ size = 44 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129.2206 133.3814" width={size} height={size}>
    <path d="M124.2641,32.3462c26.0608,20.9457,29.4977,58.2052,7.6747,83.2182-19.0945,21.8871-51.2045,27.1489-76.3915,14.0879l-19.45,22.2944L17.0785,136.6614l19.45-22.2943L52.49,96.0733a36.3057,36.3057,0,0,0,8.1614,9.1876c15.8943,12.7765,39.5705,10.7649,52.8792-4.49a35.0411,35.0411,0,0,0-4.68-50.7561,38.825,38.825,0,0,0-42.0369-4.0373L47.5942,30.53a63.6,63.6,0,0,1,76.67,1.8159Z" transform="translate(-17.0785 -18.5653)" fill="#285994" fillRule="evenodd"/>
    <path d="M84.6425,53.8061A24.3972,24.3972,0,1,1,60.2453,78.2034,24.3981,24.3981,0,0,1,84.6425,53.8061Z" transform="translate(-17.0785 -18.5653)" fill="#4794af" fillRule="evenodd"/>
    <path d="M63.2926,57.4591a8.8164,8.8164,0,1,1-8.8162,8.8165,8.8157,8.8157,0,0,1,8.8162-8.8165Z" transform="translate(-17.0785 -18.5653)" fill="#f49e2b" fillRule="evenodd"/>
    <path d="M43.8956,69.8015a5.29,5.29,0,1,1-5.29,5.29,5.29,5.29,0,0,1,5.29-5.29Z" transform="translate(-17.0785 -18.5653)" fill="#fed401" fillRule="evenodd"/>
    <path d="M27.1418,76.8562a4.4067,4.4067,0,1,1-4.4074,4.4075,4.4061,4.4061,0,0,1,4.4074-4.4075Z" transform="translate(-17.0785 -18.5653)" fill="#63b66d" fillRule="evenodd"/>
    <path d="M27.1431,43.35a4.41,4.41,0,1,1-4.4087,4.41,4.41,4.41,0,0,1,4.4087-4.41Z" transform="translate(-17.0785 -18.5653)" fill="#2f82c3" fillRule="evenodd"/>
    <path d="M43.0142,96.2532a.8808.8808,0,1,1-.88.88.88.88,0,0,1,.88-.88Z" transform="translate(-17.0785 -18.5653)" fill="#db3626" fillRule="evenodd"/>
    <path d="M48.3046,55.6948a4.41,4.41,0,1,1-4.409,4.4089,4.4093,4.4093,0,0,1,4.409-4.4089Z" transform="translate(-17.0785 -18.5653)" fill="#8e65a7" fillRule="evenodd"/>
  </svg>
);

// Navigation Component
const Navigation = () => (
  <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-8 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <AdaaLogoIcon size={48} />
          <div className="border-l border-gray-200 pl-3">
            <span className="text-xl font-bold tracking-tight" style={{ color: colors.primaryNavy }}>Adaa' Consulting</span>
            <span className="block text-xs text-gray-500 tracking-wide">Driving Impact with Evidence and Innovation</span>
          </div>
        </div>

        <div className="flex items-center gap-1">
          {[
            { label: 'About Us', active: false },
            { label: 'What We Do', active: false },
            { label: 'Our Work', active: false },
            { label: 'Knowledge', active: false },
            { label: 'Contact', active: false },
          ].map((item, i) => (
            <button 
              key={i}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                item.active 
                  ? 'bg-gray-100' 
                  : 'hover:bg-gray-50'
              }`}
              style={{ color: colors.primaryNavy }}
            >
              {item.label}
            </button>
          ))}
          <button 
            className="ml-4 px-4 py-2 text-sm font-medium rounded-md border-2 transition-all hover:bg-gray-50 flex items-center gap-2"
            style={{ borderColor: colors.primaryNavy, color: colors.primaryNavy }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <circle cx="12" cy="12" r="10"/>
              <line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            <span>EN</span>
            <span className="text-gray-300">|</span>
            <span className="text-gray-400">عربي</span>
          </button>
        </div>
      </div>
    </div>
  </nav>
);

// Adaa' Full Logo White Version (for footer)
const AdaaFullLogoWhite = ({ width = 220 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 432.3685 133.3814" width={width} style={{ height: 'auto' }}>
    <path d="M139.9168,39.91c26.0608,20.9456,29.4977,58.2052,7.6747,83.2181C128.497,145.0147,96.387,150.2765,71.2,137.2156L51.75,159.51,32.7312,144.2246l19.45-22.2942,15.9611-18.2939a36.3044,36.3044,0,0,0,8.1615,9.1876c15.8942,12.7766,39.57,10.765,52.8791-4.49a35.0411,35.0411,0,0,0-4.68-50.7561,38.8246,38.8246,0,0,0-42.0368-4.0373L63.247,38.0936a63.5992,63.5992,0,0,1,76.67,1.8159Z" transform="translate(-32.7312 -26.1286)" fill="#FFFFFF" fillRule="evenodd"/>
    <path d="M100.2953,61.3694A24.3972,24.3972,0,1,1,75.898,85.7667a24.3981,24.3981,0,0,1,24.3973-24.3973Z" transform="translate(-32.7312 -26.1286)" fill="rgba(255,255,255,0.8)" fillRule="evenodd"/>
    <path d="M78.9453,65.0224a8.8164,8.8164,0,1,1-8.8162,8.8164,8.8156,8.8156,0,0,1,8.8162-8.8164Z" transform="translate(-32.7312 -26.1286)" fill="rgba(255,255,255,0.9)" fillRule="evenodd"/>
    <path d="M59.5484,77.3647a5.29,5.29,0,1,1-5.29,5.29,5.2905,5.2905,0,0,1,5.29-5.29Z" transform="translate(-32.7312 -26.1286)" fill="rgba(255,255,255,0.85)" fillRule="evenodd"/>
    <path d="M42.7945,84.42a4.4067,4.4067,0,1,1-4.4073,4.4075A4.406,4.406,0,0,1,42.7945,84.42Z" transform="translate(-32.7312 -26.1286)" fill="rgba(255,255,255,0.8)" fillRule="evenodd"/>
    <path d="M42.7958,50.9129a4.41,4.41,0,1,1-4.4086,4.41,4.41,4.41,0,0,1,4.4086-4.41Z" transform="translate(-32.7312 -26.1286)" fill="rgba(255,255,255,0.75)" fillRule="evenodd"/>
    <path d="M58.667,103.8164a.8808.8808,0,1,1-.88.88.88.88,0,0,1,.88-.88Z" transform="translate(-32.7312 -26.1286)" fill="rgba(255,255,255,0.7)" fillRule="evenodd"/>
    <path d="M63.9574,63.258a4.41,4.41,0,1,1-4.409,4.409,4.4095,4.4095,0,0,1,4.409-4.409Z" transform="translate(-32.7312 -26.1286)" fill="rgba(255,255,255,0.75)" fillRule="evenodd"/>
    <path d="M185.4078,105.7323v-.6552c0-4.9468,1.9009-7.3384,5.7852-7.3384h.8149l-.5434,3.8984c-2.5533.0987-2.7974,1.3433-2.7974,4.4883,0,2.1294.9233,3.2432,2.6616,3.2432h11.3262c1.7383,0,2.6343-1.0811,2.6343-3.1118v-5.93l3.205-2.2935v7.7969c0,5.0781-1.9282,7.5679-5.9482,7.5679H191.3287C187.336,113.3984,185.4078,110.8759,185.4078,105.7323Z" transform="translate(-32.7312 -26.1286)" fill="#FFFFFF"/>
    <path d="M193.0382,65.1781l-2.3042,5.8677-4.417.5757,9.832-24.4048h3.4566l9.5635,24.4048-4.57-.5757-2.2275-5.6875Z" transform="translate(-32.7312 -26.1286)" fill="#FFFFFF"/>
    <path d="M211.8531,61.9027c0-6.1191,3.0723-9.9345,8.2574-9.9345a9.054,9.054,0,0,1,4.8388,1.3677V45.849l4.3018.6836V71.55h-4.1865l-.0381-1.2241a9.5017,9.5017,0,0,1-5.07,1.4761C214.964,71.8017,211.8531,68.1659,211.8531,61.9027Z" transform="translate(-32.7312 -26.1286)" fill="#FFFFFF"/>
    <path d="M233.1261,66.5463c0-4.2837,4.6474-7.5229,11.2529-7.1992l.7686.0361c0-2.9516-.8833-4.2114-3.8409-4.2114a18.2382,18.2382,0,0,0-6.5293,1.5478l.1153-3.2036a19.3343,19.3343,0,0,1,7.4126-1.6919c4.3784,0,7.0669,2.34,7.0669,6.8389V71.5136H245.109V69.75a9.7141,9.7141,0,0,1-6.0684,2.0156C235.5074,71.7655,233.1261,69.6777,233.1261,66.5463Z" transform="translate(-32.7312 -26.1286)" fill="#FFFFFF"/>
    <path d="M253.2472,66.5463c0-4.2837,4.6474-7.5229,11.2529-7.1992l.7686.0361c0-2.9516-.8829-4.2114-3.8409-4.2114a18.2382,18.2382,0,0,0-6.5293,1.5478l.1153-3.2036a19.3343,19.3343,0,0,1,7.4126-1.6919c4.3784,0,7.0669,2.34,7.0669,6.8389V71.5136h-4.2627V69.75a9.7165,9.7165,0,0,1-6.0689,2.0156C255.6285,71.7655,253.2472,69.6777,253.2472,66.5463Z" transform="translate(-32.7312 -26.1286)" fill="#FFFFFF"/>
    <path d="M287.0011,59.6713c0-7.6675,3.5722-12.2026,10.9072-12.2026a20.0384,20.0384,0,0,1,8.1426,1.5478l.6142,3.6353c-3.8408-1.1875-6.0293-1.6914-8.4492-1.6914-4.4941,0-6.99,2.7715-6.99,8.7109,0,5.9751,2.4961,8.6748,6.99,8.6748,2.4961,0,4.6475-.5039,8.4492-1.62l-.6142,3.6a20.0384,20.0384,0,0,1-8.1426,1.5479C290.5733,71.8735,287.0011,67.3383,287.0011,59.6713Z" transform="translate(-32.7312 -26.1286)" fill="#FFFFFF"/>
    <path d="M310.5011,61.9027c0-6.1552,3.5332-9.9345,9.1406-9.9345s9.1406,3.7793,9.1406,9.9345c0,6.1192-3.5722,9.899-9.1406,9.899C314.0343,71.8017,310.5011,68.0219,310.5011,61.9027Z" transform="translate(-32.7312 -26.1286)" fill="#FFFFFF"/>
    <path d="M342.1437,56.0717a8.8457,8.8457,0,0,0-5.07,2.0156V71.5136h-4.2626V52.4l4.2626.6841v.9717a11.3085,11.3085,0,0,1,6.2227-1.9077c4.07,0,6.375,2.0879,6.375,6.3715V71.5136h-4.2627v-12.13C345.4083,57.1156,344.4093,56.0717,342.1437,56.0717Z" transform="translate(-32.7312 -26.1286)" fill="#FFFFFF"/>
    <path d="M353.547,70.6855V67.23a21.329,21.329,0,0,0,7.2588,1.4761c3.8789,0,4.0713-1.98,4.0713-2.3755,0-1.44-1.6514-1.98-4.34-2.8438-2.7656-.8642-6.5674-2.0161-6.5674-5.9033,0-3.5635,3.11-5.8672,8.3721-5.8672a18.01,18.01,0,0,1,6.875,1.3316v3.4555c-3.2646-1.2236-4.7627-1.4394-6.1445-1.4394-2.8037,0-4.417,1.0078-4.417,2.3037,0,1.4394,1.6894,2.0156,4.5312,2.9155a17.6766,17.6766,0,0,1,4.2256,1.8355,4.6734,4.6734,0,0,1,2.1885,3.9594c0,3.6358-3.2647,6.0113-8.2568,6.0113A21.5926,21.5926,0,0,1,353.547,70.6855Z" transform="translate(-32.7312 -26.1286)" fill="#FFFFFF"/>
    <path d="M373.4757,65.61V52.4l4.2627.6841V64.7465c0,2.3037,1.0371,3.3115,3.3037,3.3115a8.865,8.865,0,0,0,5.0312-1.98V52.4l4.2627.6841V71.6215h-4.2627V70.0736a11.1372,11.1372,0,0,1-6.2216,1.9078C375.8185,71.9814,373.4757,69.8578,373.4757,65.61Z" transform="translate(-32.7312 -26.1286)" fill="#FFFFFF"/>
    <path d="M399.7413,46.7128V71.5136h-4.3008V45.9926Z" transform="translate(-32.7312 -26.1286)" fill="#FFFFFF"/>
    <path d="M419.4776,45.0927a2.2,2.2,0,1,1-2.3427,2.16A2.3124,2.3124,0,0,1,419.4776,45.0927Z" transform="translate(-32.7312 -26.1286)" fill="#FFFFFF"/>
    <path d="M436.1066,56.0717a8.8457,8.8457,0,0,0-5.07,2.0156V71.5136h-4.2627V52.4l4.2627.6841v.9717a11.3085,11.3085,0,0,1,6.2227-1.9077c4.07,0,6.375,2.0879,6.375,6.3715V71.5136h-4.2627v-12.13C439.3712,57.1156,438.3722,56.0717,436.1066,56.0717Z" transform="translate(-32.7312 -26.1286)" fill="#FFFFFF"/>
    <path d="M448.8927,77.4887l.8056-3.2754a14.66,14.66,0,0,0,5.6465,1.2236c3.38,0,5.377-1.4394,5.377-3.8872V70.5419a9.0562,9.0562,0,0,1-4.84,1.3677c-5.0312,0-8.2568-3.7075-8.2568-9.9346,0-6.2993,3.11-9.935,8.1035-9.935a8.7554,8.7554,0,0,1,4.9932,1.5478V52.2919l4.3008.6841V71.5854c0,4.4638-3.4942,7.3071-9.0635,7.3071A19.3115,19.3115,0,0,1,448.8927,77.4887Z" transform="translate(-32.7312 -26.1286)" fill="#FFFFFF"/>
  </svg>
);

// Social Media Icons
const SocialIcons = {
  Facebook: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  ),
  LinkedIn: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
};

// Footer Component
const Footer = () => (
  <footer style={{ backgroundColor: colors.primaryNavy }}>
    <div className="max-w-7xl mx-auto px-8 py-16">
      <div className="grid grid-cols-4 gap-12">
        <div className="col-span-1">
          <div className="mb-6">
            <AdaaFullLogoWhite width={200} />
          </div>
          <p className="text-white/70 text-sm leading-relaxed">
            Driving Impact with Evidence and Innovation
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {['About Us', 'What We Do', 'Our Work', 'Knowledge Products'].map((link, i) => (
              <li key={i}>
                <a href="#" className="text-white/60 text-sm hover:text-white transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2">
            {['Strategic Advisory', 'M&E Systems', 'Digital Innovation', 'Capacity Building'].map((link, i) => (
              <li key={i}>
                <a href="#" className="text-white/60 text-sm hover:text-white transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-white/60 text-sm">
            <li>Aden, Republic of Yemen</li>
            <li>info@adaa-foundation.org</li>
            <li>www.adaa-foundation.org</li>
          </ul>
          <div className="flex items-center gap-3 mt-4">
            <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all">
              <SocialIcons.Facebook />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all">
              <SocialIcons.LinkedIn />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-12 pt-8 flex items-center justify-between">
        <span className="text-white/40 text-sm">© 2025 Adaa' Consulting. All rights reserved.</span>
        <div className="flex items-center gap-4">
          <a href="#" className="text-white/40 text-sm hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="text-white/40 text-sm hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

// Sample job openings data
const jobOpenings = [
  {
    id: 1,
    title: "M&E Specialist",
    type: "Full-time",
    location: "Aden, Yemen",
    department: "Monitoring & Evaluation",
    posted: "January 2026",
    description: "Lead monitoring and evaluation activities for humanitarian and development programs across multiple governorates.",
    requirements: [
      "5+ years experience in M&E for humanitarian/development programs",
      "Strong quantitative and qualitative research skills",
      "Fluency in Arabic and English",
      "Experience working in Yemen or similar contexts"
    ]
  },
  {
    id: 2,
    title: "Data Analyst",
    type: "Full-time",
    location: "Aden, Yemen",
    department: "Innovation & Technology",
    posted: "January 2026",
    description: "Support data collection, analysis, and visualization for institutional performance and program monitoring.",
    requirements: [
      "3+ years experience in data analysis",
      "Proficiency in Excel, Power BI, or similar tools",
      "Experience with GIS software preferred",
      "Strong attention to detail and analytical thinking"
    ]
  },
  {
    id: 3,
    title: "Capacity Building Coordinator",
    type: "Full-time",
    location: "Aden, Yemen",
    department: "Institutional Development",
    posted: "December 2025",
    description: "Design and deliver capacity strengthening programs for local civil society organizations and government partners.",
    requirements: [
      "4+ years experience in capacity building or training",
      "Experience developing organizational policies and manuals",
      "Strong facilitation and communication skills",
      "Knowledge of donor compliance requirements"
    ]
  }
];

// Consultancy areas
const consultancyAreas = [
  {
    title: "Monitoring & Evaluation",
    icon: "chart",
    areas: ["Third-party monitoring", "Program evaluations", "Data collection", "Outcome harvesting"]
  },
  {
    title: "Strategic Advisory",
    icon: "compass",
    areas: ["Contextual analysis", "Stakeholder mapping", "Program design", "Localization strategies"]
  },
  {
    title: "Digital Innovation",
    icon: "code",
    areas: ["GIS & mapping", "Dashboard development", "AI applications", "Digital transformation"]
  },
  {
    title: "Institutional Development",
    icon: "building",
    areas: ["Organizational assessments", "Policy development", "Governance systems", "Change management"]
  }
];

// Partnership benefits
const partnershipBenefits = [
  {
    title: "Locally Rooted, Globally Aligned",
    description: "Yemeni-led with international standards. Our leadership team provides the political sensitivity and contextual intelligence required for effective programming while maintaining the technical rigor expected by international partners.",
    icon: "globe"
  },
  {
    title: "Multidisciplinary Expertise",
    description: "Comprehensive solutions to complex challenges. Our team integrates expertise in humanitarian operations, policy analysis, digital systems, AI innovation, governance reform, and economic development.",
    icon: "users"
  },
  {
    title: "Independent & Trusted",
    description: "Reliable partner for verification and due diligence. We are trusted by global agencies for impartial, high-quality assessments and strategic guidance.",
    icon: "shield"
  },
  {
    title: "From Strategy to Scale",
    description: "Translating vision into lasting practice. We embed learning and sustainability across all levels of intervention through systematic approaches that ensure lasting institutional change.",
    icon: "trending"
  },
  {
    title: "Adaptive & Agile",
    description: "Flexible support in complex environments. Operating successfully through conflict escalations, currency crises, and access constraints, we've maintained uninterrupted service delivery when others couldn't.",
    icon: "refresh"
  }
];

// Icons
const Icons = {
  globe: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  users: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  shield: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  ),
  trending: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  ),
  refresh: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
      <polyline points="23 4 23 10 17 10" />
      <polyline points="1 20 1 14 7 14" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  ),
  chart: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
  compass: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  ),
  code: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  building: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <line x1="9" y1="22" x2="9" y2="18" />
      <line x1="15" y1="22" x2="15" y2="18" />
      <line x1="9" y1="6" x2="9" y2="6.01" />
      <line x1="15" y1="6" x2="15" y2="6.01" />
      <line x1="9" y1="10" x2="9" y2="10.01" />
      <line x1="15" y1="10" x2="15" y2="10.01" />
      <line x1="9" y1="14" x2="9" y2="14.01" />
      <line x1="15" y1="14" x2="15" y2="14.01" />
    </svg>
  ),
  briefcase: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  mapPin: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  clock: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  arrowRight: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  handshake: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
    </svg>
  ),
  userPlus: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="8.5" cy="7" r="4" />
      <line x1="20" y1="8" x2="20" y2="14" />
      <line x1="23" y1="11" x2="17" y2="11" />
    </svg>
  ),
  clipboard: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      <line x1="12" y1="11" x2="12" y2="17" />
      <line x1="9" y1="14" x2="15" y2="14" />
    </svg>
  ),
  check: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  send: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  )
};

// Tab Button Component
const TabButton = ({ active, icon, label, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-3 px-6 py-4 font-medium transition-all duration-200 border-b-3 ${
      active 
        ? 'border-current bg-white' 
        : 'border-transparent hover:bg-white/50'
    }`}
    style={{ 
      color: active ? colors.ctaOrange : colors.bodyText,
      borderBottomWidth: '3px'
    }}
  >
    {icon}
    <span>{label}</span>
  </button>
);

// Job Card Component
const JobCard = ({ job }) => {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300">
      <div className="p-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
          <div>
            <h3 
              className="text-xl font-semibold mb-2"
              style={{ color: colors.primaryNavy }}
            >
              {job.title}
            </h3>
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Icons.mapPin />
                {job.location}
              </span>
              <span className="flex items-center gap-1">
                <Icons.briefcase />
                {job.type}
              </span>
              <span className="flex items-center gap-1">
                <Icons.clock />
                Posted {job.posted}
              </span>
            </div>
          </div>
          <span 
            className="inline-block px-3 py-1 text-sm font-medium rounded-full"
            style={{ 
              backgroundColor: `${colors.secondaryTeal}15`,
              color: colors.secondaryTeal
            }}
          >
            {job.department}
          </span>
        </div>
        
        {/* Description */}
        <p className="text-gray-600 mb-4">
          {job.description}
        </p>
        
        {/* Expandable Requirements */}
        {expanded && (
          <div className="mb-4 p-4 rounded-lg" style={{ backgroundColor: colors.lightBg }}>
            <h4 
              className="font-semibold mb-3 text-sm"
              style={{ color: colors.primaryNavy }}
            >
              Requirements
            </h4>
            <ul className="space-y-2">
              {job.requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                  <span style={{ color: colors.accentGreen }} className="mt-0.5">
                    <Icons.check />
                  </span>
                  {req}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-sm font-medium transition-colors"
            style={{ color: colors.secondaryTeal }}
          >
            {expanded ? 'Show Less' : 'View Requirements'}
          </button>
          <button 
            className="flex items-center gap-2 px-5 py-2 rounded-lg font-medium text-white transition-colors"
            style={{ backgroundColor: colors.ctaOrange }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e8850f'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = colors.ctaOrange}
          >
            Apply Now
            <Icons.arrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

// Partnership Benefit Card
const BenefitCard = ({ benefit, index }) => {
  const IconComponent = Icons[benefit.icon];
  
  return (
    <div 
      className="p-6 rounded-xl transition-all duration-300 hover:shadow-lg"
      style={{ backgroundColor: colors.white }}
    >
      <div 
        className="w-14 h-14 rounded-lg flex items-center justify-center mb-4"
        style={{ 
          backgroundColor: `${colors.secondaryTeal}15`,
          color: colors.secondaryTeal
        }}
      >
        <IconComponent />
      </div>
      <h3 
        className="text-lg font-semibold mb-3"
        style={{ color: colors.primaryNavy }}
      >
        {benefit.title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        {benefit.description}
      </p>
    </div>
  );
};

// Consultancy Area Card
const ConsultancyCard = ({ area }) => {
  const IconComponent = Icons[area.icon];
  
  return (
    <div className="bg-white rounded-lg p-6 border border-gray-100 hover:shadow-md transition-all duration-300">
      <div 
        className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
        style={{ 
          backgroundColor: `${colors.accentYellow}20`,
          color: colors.primaryNavy
        }}
      >
        <IconComponent />
      </div>
      <h3 
        className="font-semibold mb-3"
        style={{ color: colors.primaryNavy }}
      >
        {area.title}
      </h3>
      <ul className="space-y-2">
        {area.areas.map((item, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
            <span 
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: colors.secondaryTeal }}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Main Work With Us Page Component
const AdaaWorkWithUsPage = () => {
  const [activeTab, setActiveTab] = useState('partner');

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.lightBg }}>
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section 
        className="relative py-20 px-4"
        style={{ backgroundColor: colors.primaryNavy }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-72 h-72 rounded-full" 
               style={{ backgroundColor: colors.secondaryTeal }} />
          <div className="absolute bottom-10 left-10 w-56 h-56 rounded-full" 
               style={{ backgroundColor: colors.accentLightBlue }} />
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-sm mb-6 opacity-80">
            <span className="text-white">Home</span>
            <span className="text-white">/</span>
            <span style={{ color: colors.accentLightBlue }}>Work With Us</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Work With Us
          </h1>

          {/* Subtitle */}
          <p 
            className="text-lg md:text-xl max-w-3xl mx-auto"
            style={{ color: colors.accentLightBlue }}
          >
            Join our mission to strengthen institutions and drive sustainable impact in Yemen through partnership, employment, or consultancy.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-gray-50 border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex overflow-x-auto">
            <TabButton
              active={activeTab === 'partner'}
              icon={<Icons.handshake />}
              label="Partner With Us"
              onClick={() => setActiveTab('partner')}
            />
            <TabButton
              active={activeTab === 'careers'}
              icon={<Icons.userPlus />}
              label="Careers"
              onClick={() => setActiveTab('careers')}
            />
            <TabButton
              active={activeTab === 'consultancy'}
              icon={<Icons.clipboard />}
              label="Consultancy Roster"
              onClick={() => setActiveTab('consultancy')}
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        
        {/* Partner With Us Tab */}
        {activeTab === 'partner' && (
          <div>
            {/* Introduction */}
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 
                className="text-3xl font-bold mb-4"
                style={{ color: colors.primaryNavy }}
              >
                Partner With Us
              </h2>
              <p className="text-lg text-gray-600">
                We are your locally rooted partner for monitoring, evaluation, strategic advisory, and digital innovation in Yemen — delivering the contextual intelligence and technical rigor needed to achieve lasting change.
              </p>
            </div>

            {/* Why Partner Section */}
            <div className="mb-16">
              <h3 
                className="text-xl font-semibold text-center mb-8"
                style={{ color: colors.secondaryTeal }}
              >
                Why Partner With Adaa'
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {partnershipBenefits.map((benefit, index) => (
                  <BenefitCard key={index} benefit={benefit} index={index} />
                ))}
              </div>
            </div>

            {/* Partnership Types */}
            <div 
              className="rounded-xl p-8 mb-12"
              style={{ backgroundColor: `${colors.primaryNavy}08` }}
            >
              <h3 
                className="text-xl font-semibold text-center mb-8"
                style={{ color: colors.primaryNavy }}
              >
                Partnership Opportunities
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 text-center">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: `${colors.ctaOrange}15` }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke={colors.ctaOrange} strokeWidth="2" className="w-8 h-8">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                  </div>
                  <h4 
                    className="font-semibold mb-2"
                    style={{ color: colors.primaryNavy }}
                  >
                    Implementation Partners
                  </h4>
                  <p className="text-sm text-gray-600">
                    Collaborate on program delivery, capacity building, and institutional development initiatives.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: `${colors.secondaryTeal}15` }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke={colors.secondaryTeal} strokeWidth="2" className="w-8 h-8">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  </div>
                  <h4 
                    className="font-semibold mb-2"
                    style={{ color: colors.primaryNavy }}
                  >
                    Research & Knowledge
                  </h4>
                  <p className="text-sm text-gray-600">
                    Joint research, knowledge products, and evidence generation for humanitarian and development sectors.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: `${colors.accentGreen}15` }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke={colors.accentGreen} strokeWidth="2" className="w-8 h-8">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </div>
                  <h4 
                    className="font-semibold mb-2"
                    style={{ color: colors.primaryNavy }}
                  >
                    Donors & Funding
                  </h4>
                  <p className="text-sm text-gray-600">
                    Third-party monitoring, due diligence, and independent verification services for funding organizations.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div 
              className="rounded-xl p-8 text-center"
              style={{ backgroundColor: colors.primaryNavy }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Partner?
              </h3>
              <p 
                className="mb-6 max-w-lg mx-auto"
                style={{ color: colors.accentLightBlue }}
              >
                Get in touch to discuss how Adaa' Foundation can support your programs and objectives in Yemen.
              </p>
              <button 
                className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-medium text-white transition-colors"
                style={{ backgroundColor: colors.ctaOrange }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e8850f'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = colors.ctaOrange}
              >
                <Icons.send />
                Get in Touch
              </button>
            </div>
          </div>
        )}

        {/* Careers Tab */}
        {activeTab === 'careers' && (
          <div>
            {/* Introduction */}
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 
                className="text-3xl font-bold mb-4"
                style={{ color: colors.primaryNavy }}
              >
                Join Our Team
              </h2>
              <p className="text-lg text-gray-600">
                Join a team of Yemeni professionals working at the intersection of humanitarian action, innovation, and institutional development. At Adaa', you'll contribute to meaningful change while growing your expertise alongside local and international partners.
              </p>
            </div>

            {/* Why Join Us */}
            <div 
              className="rounded-xl p-8 mb-12"
              style={{ backgroundColor: `${colors.accentLightBlue}15` }}
            >
              <h3 
                className="text-xl font-semibold text-center mb-6"
                style={{ color: colors.primaryNavy }}
              >
                Why Work at Adaa'
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { title: "Meaningful Impact", desc: "Work on projects that directly improve lives in Yemen" },
                  { title: "Professional Growth", desc: "Develop expertise with local and international exposure" },
                  { title: "Innovation Focus", desc: "Apply cutting-edge tools and methodologies" },
                  { title: "Collaborative Culture", desc: "Join a supportive, multidisciplinary team" }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                      style={{ backgroundColor: colors.white }}
                    >
                      <span 
                        className="text-xl font-bold"
                        style={{ color: colors.secondaryTeal }}
                      >
                        {index + 1}
                      </span>
                    </div>
                    <h4 
                      className="font-semibold mb-1"
                      style={{ color: colors.primaryNavy }}
                    >
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Current Openings */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h3 
                  className="text-xl font-semibold"
                  style={{ color: colors.primaryNavy }}
                >
                  Current Openings
                </h3>
                <span 
                  className="px-3 py-1 rounded-full text-sm font-medium"
                  style={{ 
                    backgroundColor: `${colors.accentGreen}15`,
                    color: colors.accentGreen
                  }}
                >
                  {jobOpenings.length} positions available
                </span>
              </div>
              <div className="space-y-4">
                {jobOpenings.map(job => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            </div>

            {/* No suitable position */}
            <div 
              className="rounded-lg p-6 border-l-4"
              style={{ 
                backgroundColor: colors.white,
                borderColor: colors.secondaryTeal
              }}
            >
              <h4 
                className="font-semibold mb-2"
                style={{ color: colors.primaryNavy }}
              >
                Don't see a suitable position?
              </h4>
              <p className="text-gray-600 mb-4">
                We're always interested in hearing from talented professionals. Send us your CV and we'll keep you in mind for future opportunities.
              </p>
              <button 
                className="text-sm font-medium flex items-center gap-2"
                style={{ color: colors.ctaOrange }}
              >
                Submit General Application
                <Icons.arrowRight />
              </button>
            </div>
          </div>
        )}

        {/* Consultancy Roster Tab */}
        {activeTab === 'consultancy' && (
          <div>
            {/* Introduction */}
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 
                className="text-3xl font-bold mb-4"
                style={{ color: colors.primaryNavy }}
              >
                Consultancy Roster
              </h2>
              <p className="text-lg text-gray-600">
                We maintain a roster of qualified consultants for specialized assignments across our service areas. Join our network to be considered for upcoming opportunities.
              </p>
            </div>

            {/* Consultancy Areas */}
            <div className="mb-12">
              <h3 
                className="text-xl font-semibold text-center mb-8"
                style={{ color: colors.secondaryTeal }}
              >
                Areas of Expertise We Seek
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {consultancyAreas.map((area, index) => (
                  <ConsultancyCard key={index} area={area} />
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div 
              className="rounded-xl p-8 mb-12"
              style={{ backgroundColor: `${colors.primaryNavy}08` }}
            >
              <h3 
                className="text-xl font-semibold text-center mb-8"
                style={{ color: colors.primaryNavy }}
              >
                Benefits of Joining Our Roster
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: "📋",
                    title: "Diverse Assignments",
                    desc: "Access to varied projects across humanitarian, development, and institutional sectors"
                  },
                  {
                    icon: "🌐",
                    title: "Network Expansion",
                    desc: "Connect with international organizations, UN agencies, and donor communities"
                  },
                  {
                    icon: "📈",
                    title: "Professional Development",
                    desc: "Gain experience in innovative methodologies and cutting-edge approaches"
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 text-center">
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h4 
                      className="font-semibold mb-2"
                      style={{ color: colors.primaryNavy }}
                    >
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Form Preview */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div 
                className="p-6 border-b border-gray-100"
                style={{ backgroundColor: colors.lightBg }}
              >
                <h3 
                  className="text-xl font-semibold"
                  style={{ color: colors.primaryNavy }}
                >
                  Apply to Join Our Roster
                </h3>
                <p className="text-gray-600 mt-1">
                  Complete the form below to be considered for consultancy opportunities.
                </p>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input 
                      type="text"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-opacity-50"
                      style={{ focusRingColor: colors.secondaryTeal }}
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input 
                      type="email"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-opacity-50"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input 
                      type="tel"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-opacity-50"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Area of Expertise *
                    </label>
                    <select className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-opacity-50 text-gray-600">
                      <option value="">Select your primary expertise</option>
                      <option value="me">Monitoring & Evaluation</option>
                      <option value="strategic">Strategic Advisory</option>
                      <option value="digital">Digital Innovation</option>
                      <option value="institutional">Institutional Development</option>
                    </select>
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Brief Bio / Summary of Experience *
                  </label>
                  <textarea 
                    rows="4"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-opacity-50"
                    placeholder="Describe your relevant experience and expertise..."
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload CV / Resume *
                  </label>
                  <div 
                    className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:border-gray-400 transition-colors"
                    style={{ borderColor: colors.accentLightBlue }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke={colors.secondaryTeal} strokeWidth="2" className="w-10 h-10 mx-auto mb-2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="17 8 12 3 7 8" />
                      <line x1="12" y1="3" x2="12" y2="15" />
                    </svg>
                    <p className="text-sm text-gray-600">
                      Drag and drop your file here, or <span style={{ color: colors.ctaOrange }}>browse</span>
                    </p>
                    <p className="text-xs text-gray-400 mt-1">PDF, DOC, DOCX (Max 5MB)</p>
                  </div>
                </div>
                <button 
                  className="w-full md:w-auto px-8 py-3 rounded-lg font-medium text-white transition-colors flex items-center justify-center gap-2"
                  style={{ backgroundColor: colors.ctaOrange }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e8850f'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = colors.ctaOrange}
                >
                  Submit Application
                  <Icons.send />
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Bottom CTA */}
      <section 
        className="py-12 px-4"
        style={{ backgroundColor: colors.white }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-2xl font-bold mb-4"
            style={{ color: colors.primaryNavy }}
          >
            Have Questions?
          </h2>
          <p className="text-gray-600 mb-6">
            Our team is available to discuss partnership opportunities, career questions, or consultancy inquiries.
          </p>
          <a 
            href="mailto:info@adaa-foundation.org"
            className="inline-flex items-center gap-2 font-medium"
            style={{ color: colors.ctaOrange }}
          >
            info@adaa-foundation.org
            <Icons.arrowRight />
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AdaaWorkWithUsPage;
