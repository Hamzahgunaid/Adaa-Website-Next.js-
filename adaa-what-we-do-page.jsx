import React, { useState } from 'react';

const AdaaWhatWeDoPage = () => {
  const [activeService, setActiveService] = useState(null);

  // Brand colors from spec
  const colors = {
    primaryNavy: '#1E3A5F',
    secondaryTeal: '#5BB5B0',
    accentLightBlue: '#7ECBD4',
    ctaOrange: '#F7931E',
    accentYellow: '#FFC72C',
    accentGreen: '#8DC63F',
  };

  // Service Icons - Formal/Institutional
  const Icons = {
    MagnifyingGlass: ({ size = 48 }) => (
      <svg viewBox="0 0 48 48" width={size} height={size} fill="none">
        <circle cx="20" cy="20" r="14" stroke={colors.primaryNavy} strokeWidth="2.5" />
        <line x1="30" y1="30" x2="42" y2="42" stroke={colors.primaryNavy} strokeWidth="3" strokeLinecap="round" />
        <circle cx="14" cy="18" r="3.5" fill={colors.ctaOrange} />
        <circle cx="24" cy="16" r="3" fill={colors.accentYellow} />
        <circle cx="20" cy="25" r="3.5" fill={colors.accentGreen} />
      </svg>
    ),

    // Strategic Advisory - Target/Crosshair
    StrategicAdvisory: ({ color = colors.ctaOrange, size = 48 }) => (
      <svg viewBox="0 0 48 48" width={size} height={size} fill="none">
        <circle cx="24" cy="24" r="18" stroke={color} strokeWidth="2" />
        <circle cx="24" cy="24" r="12" stroke={color} strokeWidth="1.5" opacity="0.6" />
        <circle cx="24" cy="24" r="6" stroke={color} strokeWidth="1.5" opacity="0.4" />
        <circle cx="24" cy="24" r="2.5" fill={color} />
        <line x1="24" y1="2" x2="24" y2="10" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <line x1="24" y1="38" x2="24" y2="46" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <line x1="2" y1="24" x2="10" y2="24" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <line x1="38" y1="24" x2="46" y2="24" stroke={color} strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),

    // M&E Systems - Chart with checkmark
    MESystems: ({ color = colors.secondaryTeal, size = 48 }) => (
      <svg viewBox="0 0 48 48" width={size} height={size} fill="none">
        <rect x="6" y="28" width="8" height="14" rx="1" fill={color} opacity="0.4" />
        <rect x="17" y="20" width="8" height="22" rx="1" fill={color} opacity="0.6" />
        <rect x="28" y="12" width="8" height="30" rx="1" fill={color} opacity="0.8" />
        <path d="M10 32 L21 24 L32 16" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="38" cy="10" r="8" fill={color} />
        <path d="M34 10 L37 13 L42 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),

    // Digital Innovation - Circuit/nodes
    DigitalInnovation: ({ color = colors.accentYellow, size = 48 }) => (
      <svg viewBox="0 0 48 48" width={size} height={size} fill="none">
        <rect x="16" y="16" width="16" height="16" rx="3" stroke={color} strokeWidth="2" />
        <rect x="20" y="20" width="8" height="8" rx="1" fill={color} />
        <line x1="24" y1="4" x2="24" y2="16" stroke={color} strokeWidth="1.5" />
        <line x1="24" y1="32" x2="24" y2="44" stroke={color} strokeWidth="1.5" />
        <line x1="4" y1="24" x2="16" y2="24" stroke={color} strokeWidth="1.5" />
        <line x1="32" y1="24" x2="44" y2="24" stroke={color} strokeWidth="1.5" />
        <line x1="16" y1="16" x2="8" y2="8" stroke={color} strokeWidth="1.5" />
        <line x1="32" y1="16" x2="40" y2="8" stroke={color} strokeWidth="1.5" />
        <line x1="16" y1="32" x2="8" y2="40" stroke={color} strokeWidth="1.5" />
        <line x1="32" y1="32" x2="40" y2="40" stroke={color} strokeWidth="1.5" />
        <circle cx="24" cy="4" r="3" fill={color} />
        <circle cx="24" cy="44" r="3" fill={color} />
        <circle cx="4" cy="24" r="3" fill={color} />
        <circle cx="44" cy="24" r="3" fill={color} />
        <circle cx="8" cy="8" r="2.5" fill={color} opacity="0.6" />
        <circle cx="40" cy="8" r="2.5" fill={color} opacity="0.6" />
        <circle cx="8" cy="40" r="2.5" fill={color} opacity="0.6" />
        <circle cx="40" cy="40" r="2.5" fill={color} opacity="0.6" />
      </svg>
    ),

    // Capacity Building - Building blocks
    CapacityBuilding: ({ color = colors.accentGreen, size = 48 }) => (
      <svg viewBox="0 0 48 48" width={size} height={size} fill="none">
        <rect x="8" y="32" width="32" height="10" rx="2" fill={color} opacity="0.4" />
        <rect x="12" y="22" width="24" height="10" rx="2" fill={color} opacity="0.6" />
        <rect x="16" y="12" width="16" height="10" rx="2" fill={color} opacity="0.8" />
        <rect x="20" y="4" width="8" height="8" rx="2" fill={color} />
        <path d="M24 44 L24 8 M18 14 L24 6 L30 14" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
      </svg>
    ),

    // Arrow icon
    Arrow: ({ size = 20, color = "currentColor" }) => (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    ),

    // Check icon
    Check: ({ size = 20, color = "currentColor" }) => (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 13l4 4L19 7" />
      </svg>
    ),
  };

  // Services Data
  const services = [
    {
      id: 'strategic-advisory',
      Icon: Icons.StrategicAdvisory,
      title: 'Strategic Advisory & Evidence-Based Design',
      shortDesc: 'Program design combining rapid contextual analysis with systematic stakeholder engagement for locally-owned interventions.',
      color: colors.ctaOrange,
      overview: 'We help organizations design programs that are effective, locally owned, and sustainable. Our approach combines rapid contextual analysis with systematic stakeholder engagement, ensuring interventions are evidence-based and locally owned from design through implementation.',
      offerings: [
        { title: 'Contextual Analysis & Assessments', desc: 'Understand root causes and priorities to guide program design' },
        { title: 'Institutional & Stakeholder Mapping', desc: 'Align interventions with local systems and capacities' },
        { title: 'Donor Requirements & Due Diligence', desc: 'Ensure funding readiness and compliance' },
        { title: 'Localization Strategies & Program Development', desc: 'Strengthen ownership and program relevance' },
      ],
      cta: 'Contact us to discuss how we can support your program design needs',
    },
    {
      id: 'me-systems',
      Icon: Icons.MESystems,
      title: 'Monitoring, Evaluation & Results Systems',
      shortDesc: 'Independent verification and real-time data collection through field networks across Yemen\'s governorates.',
      color: colors.secondaryTeal,
      overview: 'We improve learning, accountability, and performance through practical, context-sensitive methods. Leveraging field networks across Yemen\'s governorates, we deliver independent verification and real-time data collection in contexts where access is severely constrained.',
      offerings: [
        { title: 'Independent Monitoring & Evaluations', desc: 'Reliable verification through field-based and remote approaches' },
        { title: 'Data Collection & Synthesis', desc: 'Flexible methods to ensure coverage, quality, and timeliness' },
        { title: 'Results & Adaptive Management', desc: 'Turn insights into actionable program guidance' },
        { title: 'Outcome Harvesting & Systems-Based MEL', desc: 'Capture change, resilience, and contribution pathways' },
      ],
      cta: 'Learn how our M&E expertise can strengthen your programs',
    },
    {
      id: 'digital-innovation',
      Icon: Icons.DigitalInnovation,
      title: 'Innovation, Technology & Digital Transformation',
      shortDesc: 'Responsible AI and practical innovation for organizational effectiveness in resource-constrained environments.',
      color: colors.accentYellow,
      overview: 'We deploy responsible AI and machine learning to automate complex data synthesis, enabling real-time decision support in resource-constrained environments. Our solutions are designed for low-bandwidth contexts and limited technical capacity, applying practical, context-appropriate innovation to enhance organizational effectiveness.',
      offerings: [
        { title: 'Geospatial & Climate Intelligence', desc: 'Support planning, risk analysis, and prioritization across climate resilience, water resources, agriculture, and area-based interventions' },
        { title: 'Business Intelligence & Decision-Support Systems', desc: 'Turn operational, financial, and performance data into actionable insights for strategic management' },
        { title: 'AI & Automation for Enhanced Efficiency', desc: 'Apply responsible AI to streamline analysis, improve responsiveness, and reduce operational complexity' },
        { title: 'Digital Transformation Advisory', desc: 'Embed data-driven practices and innovation into workflows, strengthening institutional capacity and adaptive management' },
      ],
      cta: 'Explore how innovation can transform your operations',
    },
    {
      id: 'capacity-building',
      Icon: Icons.CapacityBuilding,
      title: 'Capacity Strengthening, Governance & Institutional Development',
      shortDesc: 'Building organizational resilience through people, processes, and systems for sustainable transformation.',
      color: colors.accentGreen,
      overview: 'We enhance organizational resilience and performance through people, processes, and systems, fostering sustainable institutional transformation. Our approach builds lasting capacity that enables organizations to navigate complexity and deliver results independently.',
      offerings: [
        { title: 'Organizational Assessments & Change Management', desc: 'Improve structures, processes, and effectiveness' },
        { title: 'Capacity-Building & Coaching', desc: 'Empower local actors and strengthen leadership' },
        { title: 'Governance & Service Delivery Systems', desc: 'Promote transparency, accountability, and oversight' },
        { title: 'Leadership & Institutional Development', desc: 'Foster learning, empowerment, and sustainable performance' },
      ],
      cta: 'Partner with us to build lasting institutional capacity',
    },
  ];

  // Adaa' Logo Icon Component (from official Logo_Icon_only.svg)
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
              { label: 'What We Do', active: true },
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

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAFBFC' }}>
      <Navigation />

      {/* Page Hero */}
      <section className="relative overflow-hidden border-b border-gray-200" style={{ backgroundColor: colors.primaryNavy }}>
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 300" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-8 py-20">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <span>/</span>
            <span className="text-white">What We Do</span>
          </div>

          <h1 className="text-5xl font-bold text-white mb-4">What We Do</h1>
          <p className="text-xl text-white/70 max-w-3xl">
            Integrated solutions that empower humanitarian, recovery, and development actors 
            to achieve sustainable impact, accountability, and institutional resilience.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl">
            <p className="text-lg text-gray-700 leading-relaxed">
              Adaa' Foundation provides integrated solutions that empower humanitarian, recovery, 
              and development actors to achieve sustainable impact, accountability, and institutional 
              resilience. Our approach blends evidence-based design, practical monitoring, innovation, 
              and tailored capacity strengthening to help organizations respond effectively and perform 
              at their best.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview - Quick Navigation */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-4 gap-4">
            {services.map((service, i) => (
              <a
                key={i}
                href={`#${service.id}`}
                className="group flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all"
              >
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${service.color}15` }}
                >
                  <service.Icon color={service.color} size={28} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 
                    className="font-semibold text-sm truncate group-hover:text-opacity-80 transition-colors"
                    style={{ color: colors.primaryNavy }}
                  >
                    {service.title.split('&')[0].trim()}
                  </h3>
                  <span 
                    className="text-xs flex items-center gap-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: service.color }}
                  >
                    Jump to section <Icons.Arrow size={12} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Sections */}
      {services.map((service, index) => (
        <section 
          key={service.id}
          id={service.id}
          className={`py-20 ${index % 2 === 0 ? 'bg-white' : ''}`}
          style={{ backgroundColor: index % 2 === 0 ? 'white' : '#FAFBFC' }}
        >
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-12 gap-12 items-start">
              {/* Left Column - Main Info */}
              <div className="col-span-5">
                {/* Service Number & Icon */}
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    <service.Icon color={service.color} size={40} />
                  </div>
                  <span 
                    className="text-5xl font-bold opacity-10"
                    style={{ color: service.color }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Title */}
                <h2 
                  className="text-2xl font-bold mb-4"
                  style={{ color: colors.primaryNavy }}
                >
                  {service.title}
                </h2>

                {/* Overview */}
                <p className="text-gray-600 leading-relaxed mb-8">
                  {service.overview}
                </p>

                {/* CTA */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 font-semibold transition-all hover:gap-3"
                  style={{ color: service.color }}
                >
                  {service.cta}
                  <Icons.Arrow size={18} color={service.color} />
                </a>
              </div>

              {/* Right Column - Offerings */}
              <div className="col-span-7">
                <div 
                  className="rounded-xl p-8"
                  style={{ backgroundColor: `${service.color}05`, border: `1px solid ${service.color}15` }}
                >
                  <h3 
                    className="text-sm font-semibold tracking-wider uppercase mb-6"
                    style={{ color: service.color }}
                  >
                    What We Offer
                  </h3>

                  <div className="space-y-4">
                    {service.offerings.map((offering, i) => (
                      <div 
                        key={i}
                        className="flex items-start gap-4 p-4 rounded-lg bg-white"
                        style={{ border: `1px solid ${service.color}10` }}
                      >
                        <div 
                          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${service.color}15` }}
                        >
                          <Icons.Check size={16} color={service.color} />
                        </div>
                        <div>
                          <h4 
                            className="font-semibold mb-1"
                            style={{ color: colors.primaryNavy }}
                          >
                            {offering.title}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {offering.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Cross-Service Value Proposition */}
      <section className="py-20" style={{ backgroundColor: colors.primaryNavy }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <span 
              className="text-sm font-semibold tracking-wider uppercase"
              style={{ color: colors.secondaryTeal }}
            >
              Our Approach
            </span>
            <h2 className="text-3xl font-bold text-white mt-2">
              Integrated Solutions for Complex Challenges
            </h2>
            <p className="text-white/70 mt-4 max-w-2xl mx-auto">
              Our services work together to deliver comprehensive support across the program lifecycle.
            </p>
          </div>

          {/* Visual representation of integrated services */}
          <div className="relative">
            {/* Connection lines - simplified */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div 
                className="w-64 h-64 rounded-full border-2 border-dashed opacity-20"
                style={{ borderColor: colors.secondaryTeal }}
              />
            </div>

            {/* Service nodes */}
            <div className="relative grid grid-cols-4 gap-8">
              {services.map((service, i) => (
                <div 
                  key={i}
                  className="text-center p-6 rounded-xl transition-all hover:scale-105"
                  style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                >
                  <div 
                    className="w-16 h-16 rounded-xl mx-auto mb-4 flex items-center justify-center"
                    style={{ backgroundColor: `${service.color}20` }}
                  >
                    <service.Icon color={service.color} size={36} />
                  </div>
                  <h3 className="text-white font-semibold text-sm">
                    {service.title.split('&')[0].trim()}
                  </h3>
                  <p className="text-white/50 text-xs mt-2">
                    {service.shortDesc.substring(0, 60)}...
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key differentiators */}
          <div className="grid grid-cols-3 gap-8 mt-16">
            {[
              { 
                title: 'From Strategy to Systems', 
                desc: 'We translate vision into practice, embedding learning and sustainability across all levels of intervention.' 
              },
              { 
                title: 'Context-Sensitive Methods', 
                desc: 'Our approaches are adapted to Yemen\'s complex operational environment and access constraints.' 
              },
              { 
                title: 'Sustainable Impact', 
                desc: 'We build lasting capacity that enables organizations to deliver results independently.' 
              },
            ].map((item, i) => (
              <div 
                key={i}
                className="p-6 rounded-xl"
                style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
              >
                <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 
            className="text-3xl font-bold mb-4"
            style={{ color: colors.primaryNavy }}
          >
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us to discuss how our services can support your organization's goals in Yemen.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button 
              className="px-8 py-4 text-white font-semibold rounded-md transition-all hover:shadow-lg"
              style={{ backgroundColor: colors.ctaOrange }}
            >
              Contact Us
            </button>
            <button 
              className="px-8 py-4 font-semibold rounded-md transition-all hover:bg-gray-100"
              style={{ color: colors.primaryNavy, border: `1.5px solid ${colors.primaryNavy}25` }}
            >
              View Our Work
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AdaaWhatWeDoPage;
