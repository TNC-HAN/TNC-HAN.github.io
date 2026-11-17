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
        'Advisory for entrepreneurs, investors and family offices: SME consulting and coaching, off-market and investment real estate in the DACH region, Europe, Turkey and Northern Cyprus, and AI automation for SMEs.',
    },
    hero: {
      eyebrow: 'Business · Real Estate · Intelligence',
      title: 'Clarity for decisions',
      titleAccent: 'that create value.',
      lead: 'NEXXCON-24 supports entrepreneurs, investors and family offices where substance matters: in shaping the company, in discreet real estate investment and in automation with artificial intelligence.',
      primary: 'Confidential consultation',
      secondary: 'Explore services',
      trust: [
        'Free and without obligation',
        'Personal, not a call centre',
        'Discretion as standard',
      ],
    },
    marquee: [
      'SME strategy',
      'Executive coaching',
      'Off-market real estate',
      'Investment property',
      'DACH region',
      'Europe',
      'Turkey',
      'Northern Cyprus',
      'AI automation',
      'Process digitalisation',
      'Family offices',
    ],
    areas: {
      eyebrow: 'Business areas',
      title: 'Three disciplines. One point of contact.',
      lead: 'Business, real estate and technology are more closely linked than traditional advisory reflects. We think them through together – and deliver results, not slide decks.',
    },
    process: {
      eyebrow: 'How we work',
      title: 'From first conversation to execution.',
      lead: 'A clear process you can follow at every stage.',
      steps: [
        {
          title: 'Initial consultation',
          text: 'Confidential and free of charge: we understand your situation, goals and priorities.',
        },
        {
          title: 'Analysis',
          text: 'Figures, market, processes and risks – assessed soberly and explained clearly.',
        },
        {
          title: 'Strategy',
          text: 'A concrete recommendation with options, effort and next steps.',
        },
        {
          title: 'Execution',
          text: 'We actively support implementation, coordinate partners and remain available.',
        },
      ],
    },
    why: {
      eyebrow: 'Why NEXXCON-24',
      title: 'Advice with conviction.',
      lead: 'What clients should value in working with us – and what we hold ourselves to.',
      items: [
        {
          title: 'An entrepreneur’s view',
          text: 'We advise as if our own capital were at stake: pragmatic, data-driven, actionable.',
        },
        {
          title: 'Access beyond the portals',
          text: 'Off-market properties and opportunities from a personally grown network.',
        },
        {
          title: 'Cross-border',
          text: 'Experience in the DACH region, Europe, Turkey and Northern Cyprus – including cultural and language bridges.',
        },
        {
          title: 'Technology built in',
          text: 'AI and automation as levers for efficiency – never as an end in themselves.',
        },
      ],
    },
    regions: {
      eyebrow: 'Markets',
      title: 'Where we work for you.',
      lead: 'Investment property and business projects in four markets – with local knowledge and one point of contact.',
      items: [
        {
          title: 'DACH',
          text: 'Germany, Austria, Switzerland: investment property, residential and commercial buildings, portfolios.',
        },
        {
          title: 'Europe',
          text: 'Selected locations with stable conditions and growth potential.',
        },
        {
          title: 'Turkey',
          text: 'Major cities and coastal regions – support from selection to land registry.',
        },
        {
          title: 'Northern Cyprus',
          text: 'New-build and existing projects, locally connected, with a clear view of legal matters and risks.',
        },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Frequently asked questions.',
      items: [
        {
          q: 'Who is NEXXCON-24 the right partner for?',
          a: 'For owners and managing directors of small and medium-sized enterprises, private and institutional investors, and family offices in the German-speaking region looking for advice from a single source.',
        },
        {
          q: 'What does the initial consultation cost?',
          a: 'Nothing. The initial consultation is free and without obligation. Afterwards you receive a clear assessment of whether and how we can help.',
        },
        {
          q: 'What does off-market mean?',
          a: 'Off-market properties are not advertised publicly on portals but brokered discreetly through networks. This protects sellers and gives buyers opportunities with less competition.',
        },
        {
          q: 'Do you work internationally?',
          a: 'Yes. Besides the DACH region we support investments and projects in Europe, Turkey and Northern Cyprus – in German, English and Turkish.',
        },
        {
          q: 'How quickly can AI be put to work in a company?',
          a: 'First automations are often productive within a few weeks. We start with an analysis of where the greatest benefit lies at low risk.',
        },
      ],
    },
    cta: {
      eyebrow: 'Next step',
      title: 'Let’s talk about your plans.',
      text: 'Briefly describe your situation. You will receive an honest assessment – confidential, on equal terms and without obligation.',
      reassurance: 'We will get back to you personally.',
    },
  },

  services: {
    consulting: {
      seo: {
        title: 'Business Consulting, Coaching & Advisory for SMEs · NEXXCON-24',
        description:
          'Strategy, growth, succession and coaching for owners and managing directors of small and medium-sized enterprises – pragmatic, data-driven and focused on execution.',
      },
      label: 'Coaching & Consulting',
      card: {
        title: 'Business consulting, coaching & advisory',
        text: 'Strategic support for SMEs – from realignment and growth to succession.',
        points: [
          'Strategy & business model',
          'Growth & processes',
          'Coaching for entrepreneurs',
          'Succession, M&A, exit',
        ],
      },
      slide: {
        kicker: '01 · Consulting',
        title: 'Strategy that works in practice.',
        text: 'Consulting and coaching for owners and managing directors of SMEs.',
      },
      hero: {
        eyebrow: '01 · Business consulting, coaching & advisory',
        title: 'Strategy that works in practice.',
        lead: 'Small and medium-sized companies do not need concepts that end up in a drawer. They need clear priorities and a sparring partner who takes responsibility. That is exactly what we offer.',
      },
      offerings: {
        eyebrow: 'Services',
        title: 'What we do for your company.',
        items: [
          {
            title: 'Strategy & business model',
            text: 'Sharpen positioning, assess markets, make the business model future-proof.',
          },
          {
            title: 'Growth & expansion',
            text: 'Open up new markets, locations and sales channels in a structured way.',
          },
          {
            title: 'Processes & organisation',
            text: 'Simplify workflows, clarify responsibilities, reduce costs.',
          },
          {
            title: 'Financing & capital',
            text: 'Business plans, preparation for bank and investor meetings, structured access to capital.',
          },
          {
            title: 'Coaching for entrepreneurs',
            text: 'Confidential sparring on leadership, decisions and personal effectiveness.',
          },
          {
            title: 'Succession, M&A & exit',
            text: 'Selling, buying or handing over a company – prepared, discreet, with a clear roadmap.',
          },
        ],
      },
      audience: {
        eyebrow: 'Who it is for',
        title: 'For entrepreneurs who want to shape the future.',
        items: [
          'Owners and managing directors of small and medium-sized enterprises',
          'Family businesses facing a generational change',
          'Founders and growth companies before their next step',
          'Investors who want structured support for their holdings',
        ],
      },
      approach: {
        eyebrow: 'Our approach',
        title: 'Execution, not slides.',
        text: 'We work with a few clear levers and measurable milestones. You stay in control at all times – we provide pace and structure.',
        points: ['Clear priorities from the start', 'A dedicated contact', 'Transparent effort'],
      },
      faq: [
        {
          q: 'How long does a typical consulting project take?',
          a: 'Anything from a compact strategy workshop to support over several months. We agree scope and duration together after the initial consultation.',
        },
        {
          q: 'What is the difference between coaching and consulting?',
          a: 'Consulting delivers analyses and recommendations for the company. Coaching strengthens you personally as an entrepreneur – in leadership, decisions and self-organisation. Both can be combined.',
        },
      ],
      cta: {
        title: 'Where will your company be in twelve months?',
        text: 'Let’s identify the most important levers in a confidential initial consultation.',
      },
    },

    realEstate: {
      seo: {
        title:
          'Off-Market & Investment Real Estate · DACH, Europe, Turkey, Northern Cyprus · NEXXCON-24',
        description:
          'Discreet access to off-market and investment property in the DACH region, Europe, Turkey and Northern Cyprus – with analysis, due diligence and support through to completion.',
      },
      label: 'Real estate & investment',
      card: {
        title: 'Real estate advisory – off-market & investment',
        text: 'Discreet access to investment property in the DACH region, Europe, Turkey and Northern Cyprus.',
        points: [
          'Off-market access',
          'Investment & location analysis',
          'Due diligence & support',
          'International markets',
        ],
      },
      slide: {
        kicker: '02 · Real Estate',
        title: 'Property not everyone sees.',
        text: 'Off-market and investment property in DACH, Europe, Turkey and Northern Cyprus.',
      },
      hero: {
        eyebrow: '02 · Real estate advisory – off-market & investment',
        title: 'Property not everyone sees.',
        lead: 'The best opportunities rarely appear on portals. We discreetly connect investors with off-market and investment property – and review every opportunity before you commit time and capital.',
      },
      offerings: {
        eyebrow: 'Services',
        title: 'From search profile to completion.',
        items: [
          {
            title: 'Off-market access',
            text: 'Properties not offered publicly, from a personally grown network.',
          },
          {
            title: 'Investment analysis',
            text: 'Location, yield, costs and risks – calculated transparently and put into context.',
          },
          {
            title: 'Due diligence',
            text: 'Review of documents, condition and framework together with specialist partners.',
          },
          {
            title: 'Selling without publicity',
            text: 'Discreet marketing for owners who do not want a portal listing.',
          },
          {
            title: 'International investments',
            text: 'Support in Turkey and Northern Cyprus – from location to transfer of ownership.',
          },
          {
            title: 'Portfolio & strategy',
            text: 'Real estate as a building block of your wealth and business strategy.',
          },
        ],
      },
      audience: {
        eyebrow: 'Who it is for',
        title: 'For discerning investors.',
        items: [
          'Private investors and high-net-worth individuals',
          'Family offices and wealth managers',
          'Entrepreneurs with business or private property needs',
          'Owners who wish to sell discreetly',
        ],
      },
      approach: {
        eyebrow: 'Markets',
        title: 'DACH · Europe · Turkey · Northern Cyprus.',
        text: 'Every market has its own rules. We know the differences – legal, tax and cultural – and work with vetted local partners.',
        points: [
          'German, English and Turkish',
          'Local partner network',
          'One contact for everything',
        ],
      },
      faq: [
        {
          q: 'How do I get access to off-market offers?',
          a: 'After an initial consultation we create your search profile together. We present suitable properties confidentially – often only after a non-disclosure agreement has been signed.',
        },
        {
          q: 'Do you also support purchases in Turkey and Northern Cyprus?',
          a: 'Yes. We accompany you from selecting the property and reviewing it through to the transfer of ownership, working with local lawyers and specialist partners.',
        },
      ],
      cta: {
        title: 'Looking for your next investment?',
        text: 'Share your search profile with us – we will get back to you confidentially with an initial assessment.',
      },
      risk: 'Real estate investments involve risks, such as fluctuations in value, rent defaults, financing, currency and legal risks abroad. The content of this website does not constitute investment, legal or tax advice, nor an offer to buy or sell. Past performance is not a reliable indicator of future results.',
    },

    ai: {
      seo: {
        title: 'AI Automation for Small and Medium-Sized Enterprises · NEXXCON-24',
        description:
          'Putting artificial intelligence to practical use: process automation, AI assistants and workflows for SMEs – privacy-aware, measurable and without technical overhead.',
      },
      label: 'IT & AI automation',
      card: {
        title: 'AI automation for SMEs',
        text: 'Automate recurring work, make knowledge usable, relieve your teams.',
        points: [
          'Potential analysis',
          'Workflow automation',
          'AI assistants',
          'Training & operation',
        ],
      },
      slide: {
        kicker: '03 · Intelligence',
        title: 'AI that takes work off your plate.',
        text: 'Automation and AI assistants for small and medium-sized enterprises.',
      },
      hero: {
        eyebrow: '03 · AI automation for SMEs',
        title: 'AI that takes work off your plate.',
        lead: 'Artificial intelligence is no longer just for corporations. We identify where it brings noticeable relief to your company – and implement solutions your team actually uses.',
      },
      offerings: {
        eyebrow: 'Services',
        title: 'From idea to running process.',
        items: [
          {
            title: 'AI potential analysis',
            text: 'Where is the greatest benefit at low risk? A clear, prioritised list.',
          },
          {
            title: 'Workflow automation',
            text: 'Quotes, emails, documents and data flows – automated and traceable.',
          },
          {
            title: 'AI assistants',
            text: 'Assistants for sales, customer service and internal knowledge – tailored to your processes.',
          },
          {
            title: 'Data & reporting',
            text: 'Prepare key figures and reports automatically instead of compiling them by hand.',
          },
          {
            title: 'Web & apps',
            text: 'Digital tools and interfaces that make processes visible and manageable.',
          },
          {
            title: 'Training & operation',
            text: 'Your team learns to use AI safely – we remain your contact in day-to-day operation.',
          },
        ],
      },
      audience: {
        eyebrow: 'Who it is for',
        title: 'For companies that want to become more efficient.',
        items: [
          'SMEs with many recurring office and administrative tasks',
          'Sales and service teams handling high volumes of enquiries',
          'Real estate and advisory firms with document-heavy processes',
          'Managing directors who want to introduce AI safely and systematically',
        ],
      },
      approach: {
        eyebrow: 'Our approach',
        title: 'Start small, learn fast.',
        text: 'We begin with a clearly defined use case, measure the benefit and only then scale. Data protection and traceability are part of the solution from day one.',
        points: ['Start small, measure value', 'Privacy in focus', 'Your team is enabled'],
      },
      faq: [
        {
          q: 'Do we need our own IT experts for AI automation?',
          a: 'No. We handle design and implementation and train your team to use the solutions safely in everyday work.',
        },
        {
          q: 'How do you handle data protection?',
          a: 'We select tools and settings according to your requirements, process as little personal data as possible and document the workflows transparently.',
        },
      ],
      cta: {
        title: 'Which task should AI take over first?',
        text: 'In a short conversation we find the use case with the fastest benefit.',
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
      lead: 'NEXXCON-24 is run by Nexxus – Business & IT. Consulting, based in Laatzen near Hanover. We combine business consulting, real estate expertise and technology into advice from a single source.',
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
          text: 'What you entrust to us stays with us. Discretion is the foundation of every engagement.',
        },
        {
          title: 'Honesty',
          text: 'We also tell you when something is not worth it. No promises we cannot keep.',
        },
        {
          title: 'Reliability',
          text: 'Clear agreements, a dedicated contact, dependable availability.',
        },
      ],
    },
    brands: {
      eyebrow: 'Brands',
      title: 'nexxcon & nexxus',
      text: 'nexxcon “business RE solutions” stands for business and real estate solutions, nexxus CONSULTING for advisory and IT. Together they form NEXXCON-24.',
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
      lead: 'Choose the channel you prefer. We will get back to you personally.',
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
      ],
    },
    location: {
      title: 'Location',
      text: 'In-person meetings in Laatzen and the Hanover region; nationally and internationally by video or phone.',
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
    claim: 'Business consulting, off-market real estate and AI automation – from a single source.',
    servicesTitle: 'Services',
    companyTitle: 'Company',
    contactTitle: 'Contact',
    imprint: 'Legal notice',
    privacy: 'Privacy',
    rights: 'All rights reserved.',
    brandsNote: 'A brand of',
  },
};
