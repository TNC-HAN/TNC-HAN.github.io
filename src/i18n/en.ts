import type { Dictionary } from './types';

/** English texts. Structure: see types.ts. */
export const en: Dictionary = {
  meta: {
    htmlLang: 'en',
    ogLocale: 'en_GB',
    languageName: 'English',
    legalNote:
      'This page is provided in German, as required by German law. The German version is legally binding.',
  },
  nav: {
    home: 'Home',
    services: 'Services',
    about: 'About',
    contact: 'Contact',
    cta: 'Consultation',
    menu: 'Menu',
    skip: 'Skip to content',
    language: 'Choose language',
    primary: 'Main navigation',
  },
  common: {
    learnMore: 'Learn more',
    pause: 'Pause animation',
    play: 'Resume animation',
    previous: 'Previous area',
    next: 'Next area',
    slide: 'Area',
    phone: 'Phone',
    email: 'Email',
    whatsapp: 'WhatsApp',
    booking: 'Book a meeting online',
    bookingPending:
      'Online booking is coming soon – until then, please call, email or message us on WhatsApp.',
    whatsappMessage:
      'Hello, I would like to arrange a confidential initial consultation with NEXXCON-24.',
    riskTitle: 'Risk notice',
    faqTitle: 'Frequently asked questions',
    placeholderNote: 'Placeholder – replace before publishing',
    backHome: 'Back to home',
    breadcrumbHome: 'Home',
  },

  launcher: {
    phoneTitle: 'How would you like to call?',
    phoneLead: 'Choose your phone app. On a smartphone, the phone app opens directly.',
    emailTitle: 'How would you like to write?',
    emailLead: 'Choose your email program. On a smartphone, your default mail app opens directly.',
    defaultPhone: 'Default phone app',
    defaultPhoneHint: 'e.g. Phone Link, CRM or call-centre dialer',
    defaultEmail: 'Default email program',
    defaultEmailHint: 'e.g. Outlook, Apple Mail, Thunderbird, eM Client',
    sipHint: '3CX, MicroSIP, Zoiper, sipgate, Placetel …',
    calltoHint: 'Power dialers & CRM telephony (callto)',
    macOnly: 'Mac / iPhone only',
    browserHint: 'opens in browser',
    copyHint: 'opens mailbox, address is copied',
    copyNumber: 'Copy number',
    copyAddress: 'Copy address',
    copied: 'Copied to clipboard',
    remember: 'Remember my choice on this device',
    change: 'Choose another program',
    close: 'Close',
    notOpened: 'No program opened?',
    chooseOther: 'Choose another',
    emailSubject: 'Enquiry via the NEXXCON-24 website',
  },

  home: {
    seo: {
      title: 'NEXXCON-24 · Business Consulting, Off-Market Real Estate & AI Automation',
      description:
        'Business consulting and coaching for SMEs, off-market and investment real estate in D-A-CH, Europe, Turkey and Northern Cyprus, AI automation and relocation coaching – personal, discreet, from a single source.',
    },
    hero: {
      eyebrow: 'Business · Real Estate · Intelligence',
      title: 'Clarity for decisions',
      titleAccent: 'that create value.',
      lead: 'NEXXCON-24 supports business owners, real estate agents, investors and family offices where substance matters: in the strategic direction of the company, in discreet real estate investment and placement, in automation with artificial intelligence and in a new start, expansion or exit abroad.',
      primary: 'Confidential consultation',
      secondary: 'View services',
      trust: [
        'Free and without obligation',
        'Personal, not a call centre',
        'Discretion as standard',
      ],
    },
    marquee: [
      'SME strategies',
      '1:1 coaching for business owners',
      'Interim management',
      'Change management',
      'Webinars & in-house seminars',
      'Succession and M&A',
      'Off-market real estate',
      'Investment property',
      'Special-purpose property',
      'D-A-CH',
      'Europe',
      'Turkey',
      'Northern Cyprus',
      'Dubai (UAE)',
      'USA',
      'AI automation',
      'AI assistants',
      'AI agents',
      'Relocation support',
      'Family offices',
    ],
    areas: {
      eyebrow: 'Business areas',
      title: 'Four disciplines. One point of contact.',
      lead: 'Business, real estate, technology and life planning are more closely connected than conventional consulting reflects. We think them through together – and deliver results instead of slide decks.',
    },
    process: {
      eyebrow: 'How we work',
      title: 'From the first conversation to implementation.',
      lead: 'A clear four-step process – transparent, reliable and traceable at every stage.',
      steps: [
        {
          title: 'Initial consultation',
          text: 'Confidential and free of charge: we listen, understand your situation and clarify what really matters to you.',
        },
        {
          title: 'Analysis',
          text: 'Figures, market, processes and risks – thoroughly reviewed and presented so you see the facts at a glance.',
        },
        {
          title: 'Strategy',
          text: 'A concrete recommendation with options, effort, timeline and the next three steps.',
        },
        {
          title: 'Implementation',
          text: 'We implement with you, coordinate partners and specialists and remain your dedicated contact until the goal is reached.',
        },
      ],
    },
    why: {
      eyebrow: 'Why NEXXCON-24',
      title: 'Advice with conviction.',
      lead: 'How you will recognise working with us – and what we want to be measured by.',
      items: [
        {
          title: 'An entrepreneur’s perspective',
          text: 'We advise as if our own capital were at stake: pragmatic, data-driven and willing to voice uncomfortable truths.',
        },
        {
          title: 'Access beyond the portals',
          text: 'Off-market properties, investors and opportunities from a network built personally over decades.',
        },
        {
          title: 'At home across borders',
          text: 'D-A-CH, Europe, Turkey and Northern Cyprus – with language skills, cultural understanding and partners on the ground.',
        },
        {
          title: 'Technology as a lever',
          text: 'AI and automation wherever they noticeably reduce time, cost and errors – never as an end in itself.',
        },
      ],
    },
    regions: {
      eyebrow: 'Markets',
      title: 'Where we work for you.',
      lead: 'Investment property and business projects in four markets – with local knowledge, personal contacts and one point of contact for everything.',
      items: [
        {
          title: 'D-A-CH',
          text: 'Germany, Austria, Switzerland: residential and commercial buildings, portfolios and projects with substance.',
        },
        {
          title: 'Europe',
          text: 'Selected locations with stable conditions, solid demand and development potential.',
        },
        {
          title: 'Turkey',
          text: 'From Istanbul to the Turkish Riviera – from penthouse to seaside villa, supported through to the land register.',
        },
        {
          title: 'Northern Cyprus',
          text: 'Mediterranean property, new-build and existing – a genuine alternative to Spain and Dubai.',
        },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Frequently asked questions.',
      items: [
        {
          q: 'Who is NEXXCON-24 the right partner for?',
          a: 'For owners and managing directors of small and medium-sized companies, for private and institutional investors, for family offices and for people planning a new start abroad – wherever advice from a single source is needed.',
        },
        {
          q: 'What does the initial consultation cost?',
          a: 'Nothing. The initial consultation is free and without obligation. Afterwards you receive an honest assessment of whether and how we can help you – and what that means in concrete terms.',
        },
        {
          q: 'What does off-market mean?',
          a: 'Off-market properties are not advertised publicly on portals but brokered discreetly through personal networks. This protects sellers’ privacy and gives buyers opportunities with less competition.',
        },
        {
          q: 'Do you also work internationally?',
          a: 'Yes. Besides the D-A-CH region, we support investments and projects in Europe, Turkey and Northern Cyprus as well as relocation plans to the USA and Dubai – in German, English and Turkish.',
        },
        {
          q: 'How quickly can AI be put to work in a company?',
          a: 'First automations are often productive within a few weeks. We start by analysing where the greatest benefit lies at low risk and expand step by step from there.',
        },
      ],
    },
    cta: {
      eyebrow: 'Next step',
      title: 'Let’s talk about your plans.',
      text: 'Briefly describe your situation. You will receive an honest assessment – confidential, eye to eye and without obligation.',
      reassurance: 'We will get back to you personally.',
    },
  },

  services: {
    consulting: {
      seo: {
        title: 'Business Consulting, Coaching & Consulting for SMEs · NEXXCON-24',
        description:
          'Strategy, growth, financing, succession and coaching for owners and managing directors of small and medium-sized companies – pragmatic, data-driven and built for long-term success.',
      },
      label: 'Coaching & Consulting',
      card: {
        title: 'Business consulting, coaching & consulting',
        text: 'Strategic support for SMEs – from realignment, growth and financing all the way to succession.',
        points: [
          'Strategy & business model',
          'Expansion & processes',
          'Coaching for business owners',
          'Interim/change management',
          'Succession, M&A, exit',
        ],
      },
      slide: {
        kicker: '01 · Consulting',
        title: 'SME strategies from practice,\nfor practice.',
        text: 'Consulting and coaching for owners and managing directors of SMEs.',
      },
      hero: {
        eyebrow: '01 · Business consulting, coaching & consulting',
        title: 'Strategy that works in everyday business.',
        lead: 'Small and medium-sized companies don’t need concepts for the drawer. They need clear priorities, reliable figures and a sparring partner who takes responsibility – today for the next steps, tomorrow for securing your company in the long term.',
      },
      offerings: {
        eyebrow: 'Services',
        title: 'What we do for your company.',
        items: [
          {
            title: 'Strategy & business model',
            text: 'Sharpen positioning, assess markets and set up the business model so it still works five years from now.',
          },
          {
            title: 'Growth & expansion',
            text: 'Open up new markets, locations, products and sales channels in a structured way – with business case and milestones.',
          },
          {
            title: 'Processes & organisation',
            text: 'Simplify workflows, clarify responsibilities, cut costs – and anchor improvements for good.',
          },
          {
            title: 'Financing & capital',
            text: 'Create business plan and projections, prepare bank and investor meetings, structure access to capital.',
          },
          {
            title: 'Coaching for business owners',
            text: 'Confidential sparring on leadership, decisions and personal effectiveness – eye to eye.',
          },
          {
            title: 'Succession, M&A & exit',
            text: 'Selling, buying or handing over a business – carefully prepared, realistically valued, discreetly managed.',
          },
        ],
      },
      audience: {
        eyebrow: 'Who it’s for',
        title: 'For entrepreneurs who want to shape the future.',
        items: [
          'Owners and managing directors of small and medium-sized companies',
          'Family businesses facing a generational change',
          'Founders and growth companies before the next step',
          'Investors who want structured support for their holdings',
        ],
      },
      approach: {
        eyebrow: 'Our approach',
        title: 'Implementation, not slides.',
        text: 'We work with a few effective levers and measurable milestones. You stay in control of your company at all times – we provide pace, structure and make sure plans turn into results.',
        points: [
          'Clear priorities from the first meeting',
          'A dedicated, personal contact',
          'Transparent effort and costs',
        ],
      },
      faq: [
        {
          q: 'How long does a typical consulting project take?',
          a: 'Anything from a compact strategy workshop lasting a few days to support over several months. We agree scope, duration and budget together and bindingly after the initial consultation.',
        },
        {
          q: 'What is the difference between coaching and consulting?',
          a: 'Consulting delivers analyses, concepts and implementation for the company. Coaching strengthens you personally as an entrepreneur – in leadership, decisions and self-organisation. The two combine well.',
        },
      ],
      cta: {
        title: 'Where will your company be in twelve months?',
        text: 'Let’s identify, in a confidential initial consultation, the levers that move your company forward now and secure it for the long term.',
      },
    },

    realEstate: {
      seo: {
        title:
          'Off-Market & Investment Real Estate · D-A-CH, Europe, Turkey, Northern Cyprus · NEXXCON-24',
        description:
          'Discreet access to off-market and investment property in Germany, Austria, Switzerland, Europe, Turkey and Northern Cyprus – with analysis, due diligence and support through to closing.',
      },
      label: 'Real Estate & Investment',
      card: {
        title: 'Real estate advisory –\noff-market & investments',
        text: 'Exclusive access to investment property in D-A-CH, Europe, Turkey and Northern Cyprus – discreet, reviewed, personally supported.',
        points: [
          'Off-market access',
          'Investment & location analysis',
          'Due diligence analyses',
          'International markets',
          'Global connections',
        ],
      },
      slide: {
        kicker: '02 · Real Estate',
        title: 'Properties not everyone gets to see – but you do, with us.',
        text: 'Off-market and investment property in D-A-CH, Europe, Turkey and Northern Cyprus.',
      },
      hero: {
        eyebrow: '02 · Real estate advisory – off-market & investment',
        title: 'Properties not everyone gets to see.',
        lead: 'The best opportunities rarely appear on portals. We discreetly connect investors with off-market and investment property, review every opportunity before you commit time and capital – and place your own properties precisely with the right buyers.',
      },
      offerings: {
        eyebrow: 'Services',
        title: 'From search profile to closing.',
        items: [
          {
            title: 'Global off-market access',
            text: 'Selected properties and investors from our personal and international networks – confidential, fast, lucrative; before “the market” sees them.',
          },
          {
            title: 'Investment analyses – so the bottom line always stays green',
            text: 'Market-driven optimisation of your investor profile: locations, yields, costs, financing and value development – clearly calculated, with opportunities and risks put into context. Your decision aid with all relevant facts and figures.',
          },
          {
            title: 'Due diligence analyses',
            text: 'Meticulous review of all facts and figures – from the building fabric, tenant structure and leases to long-term profitability and savings potential.',
          },
          {
            title: 'Selling without publicity',
            text: 'Realistic valuation and maximum proceeds through targeted placement with vetted buyers – no portal listing.',
          },
          {
            title: 'International investments',
            text: 'Turkey and Northern Cyprus: from location and review to transfer of ownership and key handover.',
          },
          {
            title: 'Portfolio & strategy',
            text: 'Real estate as a core building block of your wealth and business strategy – expansion, reallocation or exit.',
          },
        ],
      },
      audience: {
        eyebrow: 'Who it’s for',
        title: 'For discerning investors.',
        items: [
          'Private investors and high-net-worth individuals',
          'Family offices and asset managers',
          'Entrepreneurs with business or private property needs',
          'Owners who want to sell discreetly and at the best price',
        ],
      },
      approach: {
        eyebrow: 'Markets',
        title: 'D-A-CH · Europe · Turkey · Northern Cyprus.',
        text: 'Every market follows its own rules. We know the processes, costs and cultural specifics – and work with local partners we know personally and trust.',
        points: [
          'German, English and Turkish',
          'Personal partner network on site',
          'One point of contact for everything',
        ],
      },
      faq: [
        {
          q: 'How do I get access to off-market offers?',
          a: 'After an initial consultation we create your search profile together. We present suitable properties to you in confidence – usually after signing a non-disclosure agreement.',
        },
        {
          q: 'Do you also support purchases in Turkey and Northern Cyprus?',
          a: 'Yes. We support you from property selection and review through to the transfer of ownership, working with local specialists we have known for years.',
        },
        {
          q: 'What does your support with buying or selling cost?',
          a: 'That depends on the type and scope of the mandate – for example a search mandate, investment analysis, due diligence or a discreet sale. We agree the fee transparently and in writing before any costs arise. The initial consultation is free and without obligation.',
        },
        {
          q: 'From what size is working together worthwhile?',
          a: 'There is no fixed minimum. What matters is a clear plan and a realistic search profile. Our focus is on residential and commercial buildings, portfolios, development projects and special-purpose property, as well as high-quality residential property in Turkey and Northern Cyprus.',
        },
        {
          q: 'What is special-purpose property?',
          a: 'Property with a specific use and its own market environment – for example hotels, care and healthcare property, medical centres, logistics and commercial space, or leisure property. It requires specialist know-how in valuation, operators and contracts – and offers opportunities of its own.',
        },
        {
          q: 'How discreet is an off-market sale?',
          a: 'Your property does not appear on any portal. We first present it anonymously to selected, vetted prospects; full documents are only shared after a non-disclosure agreement has been signed. You stay in control of who learns what, and when.',
        },
        {
          q: 'How do you make sure buyers and investors are serious?',
          a: 'Before sharing confidential documents, we check the prospect’s identity, acquisition profile and proof of funds or financing confirmation – including the legally required identification. That way you know who is serious before the first meeting.',
        },
        {
          q: 'What is the difference between investment analysis and due diligence?',
          a: 'The investment analysis answers early on whether a property pays off and fits your strategy. Due diligence checks before signing whether all assumptions hold – structurally, commercially and for tax purposes, together with specialists from our network.',
        },
        {
          q: 'How long does due diligence take?',
          a: 'That depends on the type of property, the documents available and the location. For well-documented properties it is often a few weeks; larger portfolios or properties abroad take correspondingly longer. We agree the timetable together at the outset.',
        },
        {
          q: 'Do you also help with financing?',
          a: 'We prepare the calculation, property documents and investor profile so that banks can decide quickly. We do not arrange financing ourselves; on request we put you in touch with banks and licensed financing partners.',
        },
      ],
      cta: {
        title: 'Looking for your next investment?',
        text: 'Share your search profile with us – or the property you want to sell discreetly. We will get back to you confidentially with an initial assessment.',
      },
      risk: 'Real estate investments involve risks, such as fluctuations in value, rent defaults, financing, currency and legal risks abroad. The content of this website does not constitute investment, legal or tax advice, nor an offer to buy or sell. Past performance is not a reliable indicator of future results.',
    },

    ai: {
      seo: {
        title: 'AI Automation for Small and Medium-Sized Companies · NEXXCON-24',
        description:
          'Practical artificial intelligence: process automation, AI assistants, dashboards and web apps for SMEs – efficient, traceable, secure and GDPR-compliant.',
      },
      label: 'IT & AI Automation',
      card: {
        title: 'AI automation for SMEs',
        text: 'Automate operational processes, make knowledge usable, noticeably relieve teams – securely and GDPR-compliant.',
        points: [
          'AI potential analyses',
          'Workflow automation',
          'AI assistants / AI agents',
          'Smart office & smart home',
          'Implementation & onboarding',
        ],
      },
      slide: {
        kicker: '03 · Intelligence',
        title: 'AI that empowers you and your people – and doesn’t replace them.',
        text: 'Automation and AI assistants for small and medium-sized companies.',
      },
      hero: {
        eyebrow: '03 · AI automation for SMEs',
        title: 'AI that takes work off your plate.',
        lead: 'Artificial intelligence is no longer a topic for large corporations only. We find out where it noticeably relieves your company, automate your operational processes step by step – and implement solutions your team enjoys using safely.',
      },
      offerings: {
        eyebrow: 'Services',
        title: 'From idea to running process.',
        items: [
          {
            title: 'AI potential analysis',
            text: 'Where is the greatest benefit at low risk? A prioritised list with effort, benefit and payback.',
          },
          {
            title: 'Workflow automation',
            text: 'From enquiry to invoice: operational processes automated end to end, traceable and secure.',
          },
          {
            title: 'AI assistants',
            text: 'Digital colleagues for sales, customer service, onboarding and internal knowledge – in your tone of voice.',
          },
          {
            title: 'Data & reporting',
            text: 'KPIs, dashboards and reports generated automatically instead of compiled by hand.',
          },
          {
            title: 'Web & apps',
            text: 'Portals, cockpits and digital tools that make processes visible and manageable.',
          },
          {
            title: 'Training & operation',
            text: 'Your team learns to use AI safely – and we remain your contact in ongoing operation.',
          },
        ],
      },
      audience: {
        eyebrow: 'Who it’s for',
        title: 'For companies that want to become more efficient.',
        items: [
          'SMEs with many recurring office and administrative tasks',
          'Sales and service teams with a high volume of enquiries',
          'Real estate and consulting firms with document-heavy processes',
          'Managing directors who want to introduce AI safely and systematically',
        ],
      },
      approach: {
        eyebrow: 'Our approach',
        title: 'Start small, learn fast, scale with purpose.',
        text: 'We begin with a clearly defined use case, measure the benefit and only then scale. Data protection, security and traceability are an integral part of every solution from day one.',
        points: [
          'Start small, measure benefit',
          'Data protection & security built in',
          'Your team is empowered',
        ],
      },
      faq: [
        {
          q: 'Do we need our own IT experts for AI automation?',
          a: 'No. We take care of design, implementation and support and train your team to use the solutions safely and independently in daily work.',
        },
        {
          q: 'How do you handle data protection?',
          a: 'We select tools and settings according to your requirements, process as little personal data as possible and document all workflows transparently.',
        },
      ],
      cta: {
        title: 'Which task should AI take off your hands first?',
        text: 'In a short conversation we find the use case with the fastest, measurable benefit.',
      },
    },
  },

  about: {
    seo: {
      title: 'About · NEXXCON-24 · Nexxus – Business & IT. Consulting',
      description:
        'NEXXCON-24 is the advisory brand of Nexxus – Business & IT. Consulting, based in Laatzen near Hanover: business consulting, real estate investment and AI automation from a single source.',
    },
    hero: {
      eyebrow: 'About us',
      title: 'Personal. Discreet. Entrepreneurial.',
      lead: 'NEXXCON-24 is run by Nexxus – Business & IT. Consulting, based in Laatzen near Hanover. We combine business consulting, real estate expertise, technology and international experience into advice from a single source – personally managed and backed by a network built over decades.',
    },
    profile: {
      eyebrow: 'Your contact',
      title: 'Dipl.-Imb. Ümit Törün',
      role: 'Founder & Advisor',
      bio: 'Born in ’73, father of 3 (now married) children, creative lateral thinker, ex!banker, tireless business leader & optimist ;-)\nWith more than 33 years of know-how, know-what & experience, we get you to your goals …\nWith heart, mind, body & soul and plenty of passion – from practice, for practice.\nMore about me in a first get-to-know-you conversation 😊',
    },
    values: {
      eyebrow: 'Values',
      title: 'What we stand for.',
      items: [
        {
          title: 'Confidentiality',
          text: 'What you entrust to us stays with us. Discretion is not negotiable – it is the foundation of every engagement.',
        },
        {
          title: 'Honesty',
          text: 'We also tell you when something is not worth it. Better an honest no today than an expensive disappointment tomorrow.',
        },
        {
          title: 'Reliability',
          text: 'Clear agreements, a dedicated contact and availability you can rely on.',
        },
      ],
    },
    brands: {
      eyebrow: 'Brands',
      title: 'nexxcon & nexxus',
      text: 'nexxcon “business RE solutions” stands for business and real estate solutions, nexxus CONSULTING for advisory, IT and AI. Together they form NEXXCON-24 – the address for entrepreneurs and investors who expect more than standard solutions.',
    },
  },

  contact: {
    seo: {
      title: 'Contact · Confidential Consultation · NEXXCON-24',
      description:
        'Contact NEXXCON-24 in Laatzen near Hanover by phone, email or WhatsApp. Initial consultation free and without obligation – in person, by video or phone.',
    },
    hero: {
      eyebrow: 'Contact',
      title: 'Let’s talk.',
      lead: 'Phone, email, WhatsApp or a booked appointment – choose the channel you prefer. We will get back to you personally and promptly.',
    },
    channels: {
      title: 'How to reach us',
      phoneText: 'Direct and personal',
      emailText: 'For documents and detailed enquiries',
      whatsappText: 'Quick and easy',
      bookingText: 'Choose your preferred time',
    },
    prepare: {
      title: 'Helpful for a good first conversation',
      items: [
        'Briefly, your concern and your goal',
        'Your preferred time frame',
        'For real estate: region, property type and budget range',
        'For AI automation: the task that takes the most time',
        'For relocation: preferred country, timeline and family situation',
      ],
    },
    location: {
      title: 'Location',
      text: 'In-person meetings in Laatzen and the Hanover region, or at your premises. Nationally and internationally we advise by video or phone – in German, English and Turkish.',
    },
  },

  legal: {
    imprint: {
      title: 'Legal notice (Impressum) · NEXXCON-24',
      description: 'Legal notice of Nexxus – Business & IT. Consulting (NEXXCON-24).',
    },
    privacy: {
      title: 'Privacy policy · NEXXCON-24',
      description: 'Information on the processing of personal data on this website.',
    },
  },

  notFound: {
    seo: {
      title: 'Page not found · NEXXCON-24',
      description: 'The requested page does not exist.',
    },
    title: 'This page does not exist.',
    text: 'It may have moved. The home page will get you back on track.',
  },

  footer: {
    claim:
      'Business consulting, off-market real estate, AI automation and relocation coaching – personal, discreet, from a single source.',
    servicesTitle: 'Services',
    companyTitle: 'Company',
    contactTitle: 'Contact',
    imprint: 'Legal notice',
    privacy: 'Privacy',
    rights: 'All rights reserved.',
    brandsNote: 'A brand of',
  },
};
