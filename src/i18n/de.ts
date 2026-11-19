import type { Dictionary } from './types';

/** Deutsche Texte (Hauptsprache). Struktur siehe types.ts. */
export const de: Dictionary = {
  meta: {
    htmlLang: 'de-DE',
    ogLocale: 'de_DE',
    languageName: 'Deutsch',
    legalNote: '',
  },
  nav: {
    home: 'Start',
    services: 'Leistungen',
    about: 'Über uns',
    contact: 'Kontakt',
    cta: 'Erstgespräch',
    menu: 'Menü',
    skip: 'Zum Inhalt springen',
    language: 'Sprache wählen',
    primary: 'Hauptnavigation',
  },
  common: {
    learnMore: 'Mehr erfahren',
    pause: 'Animation anhalten',
    play: 'Animation fortsetzen',
    previous: 'Vorheriger Bereich',
    next: 'Nächster Bereich',
    slide: 'Bereich',
    phone: 'Telefon',
    email: 'E-Mail',
    whatsapp: 'WhatsApp',
    booking: 'Termin online buchen',
    bookingPending:
      'Online-Terminbuchung folgt in Kürze – bis dahin gerne per Telefon, E-Mail oder WhatsApp.',
    whatsappMessage:
      'Guten Tag, ich interessiere mich für ein vertrauliches Erstgespräch mit NEXXCON-24.',
    riskTitle: 'Risikohinweis',
    faqTitle: 'Häufige Fragen',
    placeholderNote: 'Platzhalter – vor Veröffentlichung ersetzen',
    backHome: 'Zur Startseite',
    breadcrumbHome: 'Start',
  },

  launcher: {
    phoneTitle: 'Womit möchten Sie anrufen?',
    phoneLead:
      'Wählen Sie Ihr Telefonprogramm. Auf dem Smartphone öffnet sich direkt die Telefon-App.',
    emailTitle: 'Womit möchten Sie schreiben?',
    emailLead:
      'Wählen Sie Ihr E-Mail-Programm. Auf dem Smartphone öffnet sich direkt Ihre Standard-Mail-App.',
    defaultPhone: 'Standard-Telefonprogramm',
    defaultPhoneHint: 'z. B. Smartphone-Link, CRM- oder Callcenter-Dialer',
    defaultEmail: 'Standard-E-Mail-Programm',
    defaultEmailHint: 'z. B. Outlook, Apple Mail, Thunderbird, eM Client',
    sipHint: '3CX, MicroSIP, Zoiper, sipgate, Placetel …',
    calltoHint: 'Power-Dialer & CRM-Telefonie (callto)',
    macOnly: 'nur Mac / iPhone',
    browserHint: 'öffnet im Browser',
    copyHint: 'öffnet Postfach, Adresse wird kopiert',
    copyNumber: 'Nummer kopieren',
    copyAddress: 'Adresse kopieren',
    copied: 'In die Zwischenablage kopiert',
    remember: 'Auswahl auf diesem Gerät merken',
    change: 'Anderes Programm wählen',
    close: 'Schließen',
    notOpened: 'Es hat sich kein Programm geöffnet?',
    chooseOther: 'Anderes wählen',
    emailSubject: 'Anfrage über die Website NEXXCON-24',
  },

  home: {
    seo: {
      title: 'NEXXCON-24 · Unternehmensberatung, Off-Market-Immobilien & KI-Automation',
      description:
        'Beratung für Unternehmer, Investoren und Family Offices: KMU-Consulting und Coaching, Off-Market- und Investmentimmobilien in D-A-CH, Europa, Türkei und Nordzypern sowie KI-Automation für den Mittelstand.',
    },
    hero: {
      eyebrow: 'Business · Real Estate · Intelligence',
      title: 'Klarheit für Entscheidungen,',
      titleAccent: 'die Werte schaffen.',
      lead: 'NEXXCON-24 begleitet Unternehmer, Investoren und Family Offices dort, wo es um Substanz geht: bei der Ausrichtung des Unternehmens, beim diskreten Immobilieninvestment und bei der Automatisierung mit künstlicher Intelligenz.',
      primary: 'Vertrauliches Erstgespräch',
      secondary: 'Leistungen ansehen',
      trust: [
        'Unverbindlich & kostenfrei',
        'Persönlich statt Callcenter',
        'Diskretion als Standard',
      ],
    },
    marquee: [
      'KMU-Strategie',
      'Coaching für Unternehmer',
      'Off-Market-Immobilien',
      'Investmentimmobilien',
      'D-A-CH',
      'Europa',
      'Türkei',
      'Nordzypern',
      'KI-Automation',
      'Prozessdigitalisierung',
      'Family Offices',
    ],
    areas: {
      eyebrow: 'Geschäftsbereiche',
      title: 'Drei Disziplinen. Ein Ansprechpartner.',
      lead: 'Unternehmen, Immobilien und Technologie hängen enger zusammen, als es klassische Beratung abbildet. Wir denken sie gemeinsam – und liefern Ergebnisse statt Foliensätze.',
    },
    process: {
      eyebrow: 'Arbeitsweise',
      title: 'Vom ersten Gespräch zur Umsetzung.',
      lead: 'Ein klarer Ablauf, den Sie jederzeit nachvollziehen können.',
      steps: [
        {
          title: 'Erstgespräch',
          text: 'Vertraulich und kostenfrei: Wir verstehen Ihre Ausgangslage, Ziele und Prioritäten.',
        },
        {
          title: 'Analyse',
          text: 'Zahlen, Markt, Prozesse und Risiken – nüchtern geprüft und verständlich aufbereitet.',
        },
        {
          title: 'Strategie',
          text: 'Eine konkrete Empfehlung mit Optionen, Aufwand und nächsten Schritten.',
        },
        {
          title: 'Umsetzung',
          text: 'Wir begleiten die Umsetzung aktiv, koordinieren Partner und bleiben erreichbar.',
        },
      ],
    },
    why: {
      eyebrow: 'Warum NEXXCON-24',
      title: 'Beratung mit Haltung.',
      lead: 'Was Mandanten an der Zusammenarbeit schätzen sollen – und woran wir uns messen lassen.',
      items: [
        {
          title: 'Unternehmerischer Blick',
          text: 'Wir beraten so, als ginge es um unser eigenes Kapital: pragmatisch, zahlenbasiert, umsetzbar.',
        },
        {
          title: 'Zugang abseits der Portale',
          text: 'Off-Market-Objekte und Gelegenheiten aus einem persönlich gewachsenen Netzwerk.',
        },
        {
          title: 'Grenzüberschreitend',
          text: 'Erfahrung mit D-A-CH, Europa, der Türkei und Nordzypern – inklusive kultureller und sprachlicher Brücken.',
        },
        {
          title: 'Technologie mitgedacht',
          text: 'KI und Automatisierung als Hebel für Effizienz – nicht als Selbstzweck.',
        },
      ],
    },
    regions: {
      eyebrow: 'Märkte',
      title: 'Wo wir für Sie aktiv sind.',
      lead: 'Investmentimmobilien und Unternehmensprojekte in vier Märkten – mit lokalem Wissen und einem Ansprechpartner.',
      items: [
        {
          title: 'D-A-CH',
          text: 'Deutschland, Österreich, Schweiz: Kapitalanlagen, Wohn- und Geschäftshäuser, Portfolios.',
        },
        {
          title: 'Europa',
          text: 'Ausgewählte Standorte mit stabilen Rahmenbedingungen und Wachstumspotenzial.',
        },
        {
          title: 'Türkei',
          text: 'Metropolen und Küstenregionen – Begleitung von der Auswahl bis zum Grundbuch.',
        },
        {
          title: 'Nordzypern',
          text: 'Neubau- und Bestandsprojekte, vor Ort vernetzt, mit klarem Blick auf Chancen, Risiken und Wirtschaftlichkeit.',
        },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Häufige Fragen.',
      items: [
        {
          q: 'Für wen ist NEXXCON-24 der richtige Partner?',
          a: 'Für Inhaber und Geschäftsführer kleiner und mittlerer Unternehmen, für private und institutionelle Investoren sowie für Family Offices im deutschsprachigen Raum, die Beratung aus einer Hand suchen.',
        },
        {
          q: 'Was kostet das Erstgespräch?',
          a: 'Nichts. Das Erstgespräch ist unverbindlich und kostenfrei. Danach erhalten Sie eine klare Einschätzung, ob und wie wir Ihnen helfen können.',
        },
        {
          q: 'Was bedeutet Off-Market?',
          a: 'Off-Market-Immobilien werden nicht öffentlich auf Portalen angeboten, sondern diskret über Netzwerke vermittelt. Das schützt Verkäufer und eröffnet Käufern Gelegenheiten mit weniger Wettbewerb.',
        },
        {
          q: 'Arbeiten Sie auch international?',
          a: 'Ja. Neben dem D-A-CH-Raum begleiten wir Investments und Projekte in Europa, in der Türkei und in Nordzypern – auf Deutsch, Englisch und Türkisch.',
        },
        {
          q: 'Wie schnell lässt sich KI im Unternehmen einsetzen?',
          a: 'Erste Automatisierungen sind oft in wenigen Wochen produktiv. Wir starten mit einer Analyse, wo der größte Nutzen bei geringem Risiko liegt.',
        },
      ],
    },
    cta: {
      eyebrow: 'Nächster Schritt',
      title: 'Lassen Sie uns über Ihr Vorhaben sprechen.',
      text: 'Schildern Sie uns kurz Ihre Situation. Sie erhalten eine ehrliche Einschätzung – vertraulich, auf Augenhöhe und ohne Verpflichtung.',
      reassurance: 'Wir melden uns persönlich bei Ihnen zurück.',
    },
  },

  services: {
    consulting: {
      seo: {
        title: 'Unternehmensberatung, Coaching & Consulting für KMU · NEXXCON-24',
        description:
          'Strategie, Wachstum, Nachfolge und Coaching für Inhaber und Geschäftsführer kleiner und mittlerer Unternehmen – pragmatisch, zahlenbasiert und umsetzungsstark.',
      },
      label: 'Coaching & Consulting',
      card: {
        title: 'Unternehmensberatung, Coaching & Consulting',
        text: 'Strategische Begleitung für KMU – von der Neuausrichtung über Wachstum bis zur Nachfolge.',
        points: [
          'Strategie & Geschäftsmodell',
          'Wachstum & Prozesse',
          'Coaching für Unternehmer',
          'Nachfolge, M&A, Exit',
        ],
      },
      slide: {
        kicker: '01 · Consulting',
        title: 'Strategie, die im Alltag trägt.',
        text: 'Consulting und Coaching für Inhaber und Geschäftsführer im Mittelstand.',
      },
      hero: {
        eyebrow: '01 · Unternehmensberatung, Coaching & Consulting',
        title: 'Strategie, die im Alltag trägt.',
        lead: 'Kleine und mittlere Unternehmen brauchen keine Konzepte für die Schublade, sondern klare Prioritäten und einen Sparringspartner, der Verantwortung übernimmt. Genau das bieten wir.',
      },
      offerings: {
        eyebrow: 'Leistungen',
        title: 'Was wir für Ihr Unternehmen tun.',
        items: [
          {
            title: 'Strategie & Geschäftsmodell',
            text: 'Positionierung schärfen, Märkte bewerten, Geschäftsmodell zukunftsfest aufstellen.',
          },
          {
            title: 'Wachstum & Expansion',
            text: 'Neue Märkte, Standorte und Vertriebswege strukturiert erschließen.',
          },
          {
            title: 'Prozesse & Organisation',
            text: 'Abläufe vereinfachen, Verantwortlichkeiten klären, Kosten senken.',
          },
          {
            title: 'Finanzierung & Kapital',
            text: 'Businesspläne, Bank- und Investorengespräche vorbereiten, Kapitalzugang strukturieren.',
          },
          {
            title: 'Coaching für Unternehmer',
            text: 'Vertrauliches Sparring für Führung, Entscheidungen und persönliche Wirksamkeit.',
          },
          {
            title: 'Nachfolge, M&A & Exit',
            text: 'Unternehmensverkauf, Kauf oder Übergabe – vorbereitet, diskret, mit klarem Fahrplan.',
          },
        ],
      },
      audience: {
        eyebrow: 'Für wen',
        title: 'Für Unternehmer, die gestalten wollen.',
        items: [
          'Inhaber und Geschäftsführer kleiner und mittlerer Unternehmen',
          'Familienunternehmen vor einem Generationswechsel',
          'Gründer und Wachstumsunternehmen vor dem nächsten Schritt',
          'Investoren, die Beteiligungen strukturiert begleiten möchten',
        ],
      },
      approach: {
        eyebrow: 'Unser Ansatz',
        title: 'Umsetzung statt Folien.',
        text: 'Wir arbeiten mit wenigen, klaren Hebeln und messbaren Zwischenzielen. Sie behalten jederzeit die Kontrolle – wir sorgen für Tempo und Struktur.',
        points: [
          'Klare Prioritäten von Beginn an',
          'Feste Ansprechperson',
          'Transparente Aufwände',
        ],
      },
      faq: [
        {
          q: 'Wie lange dauert ein typisches Beratungsprojekt?',
          a: 'Von einem kompakten Strategie-Workshop bis zur mehrmonatigen Begleitung. Umfang und Dauer legen wir nach dem Erstgespräch gemeinsam fest.',
        },
        {
          q: 'Was unterscheidet Coaching von Consulting?',
          a: 'Consulting liefert Analysen und Empfehlungen für das Unternehmen. Coaching stärkt Sie persönlich als Unternehmer – in Führung, Entscheidungen und Selbstorganisation. Beides lässt sich kombinieren.',
        },
      ],
      cta: {
        title: 'Wo steht Ihr Unternehmen in zwölf Monaten?',
        text: 'Lassen Sie uns in einem vertraulichen Erstgespräch die wichtigsten Hebel identifizieren.',
      },
    },

    realEstate: {
      seo: {
        title:
          'Off-Market- & Investmentimmobilien · D-A-CH, Europa, Türkei, Nordzypern · NEXXCON-24',
        description:
          'Diskreter Zugang zu Off-Market- und Investmentimmobilien in D-A-CH, Europa, der Türkei und Nordzypern – mit Analyse, Prüfung und Begleitung bis zum Abschluss.',
      },
      label: 'Immobilien & Investment',
      card: {
        title: 'Immobilienberatung – Off-Market & Investment',
        text: 'Diskreter Zugang zu Investmentimmobilien in D-A-CH, Europa, der Türkei und Nordzypern.',
        points: [
          'Off-Market-Zugang',
          'Investment- & Standortanalyse',
          'Due Diligence & Begleitung',
          'Internationale Märkte',
        ],
      },
      slide: {
        kicker: '02 · Real Estate',
        title: 'Immobilien, die nicht jeder sieht.',
        text: 'Off-Market- und Investmentimmobilien in D-A-CH, Europa, Türkei und Nordzypern.',
      },
      hero: {
        eyebrow: '02 · Immobilienberatung – Off-Market & Investment',
        title: 'Immobilien, die nicht jeder sieht.',
        lead: 'Die besten Gelegenheiten erscheinen selten auf Portalen. Wir verbinden Investoren diskret mit Off-Market- und Investmentimmobilien – und prüfen jede Gelegenheit, bevor Sie Zeit und Kapital einsetzen.',
      },
      offerings: {
        eyebrow: 'Leistungen',
        title: 'Vom Suchprofil bis zum Abschluss.',
        items: [
          {
            title: 'Off-Market-Zugang',
            text: 'Nicht öffentlich angebotene Objekte aus einem persönlich gewachsenen Netzwerk.',
          },
          {
            title: 'Investmentanalyse',
            text: 'Lage, Rendite, Kosten und Risiken – nachvollziehbar gerechnet und eingeordnet.',
          },
          {
            title: 'Due Diligence',
            text: 'Prüfung von Unterlagen, Zustand und Rahmenbedingungen gemeinsam mit Fachpartnern.',
          },
          {
            title: 'Verkauf ohne Öffentlichkeit',
            text: 'Diskrete Vermarktung für Eigentümer, die keine Portalanzeige wünschen.',
          },
          {
            title: 'Internationale Investments',
            text: 'Begleitung in der Türkei und Nordzypern – vom Standort bis zur Eigentumsübertragung.',
          },
          {
            title: 'Portfolio & Strategie',
            text: 'Immobilien als Baustein Ihrer Vermögens- und Unternehmensstrategie.',
          },
        ],
      },
      audience: {
        eyebrow: 'Für wen',
        title: 'Für Investoren mit Anspruch.',
        items: [
          'Private Investoren und vermögende Privatkunden',
          'Family Offices und Vermögensverwalter',
          'Unternehmer mit betrieblichem oder privatem Immobilienbedarf',
          'Eigentümer, die diskret verkaufen möchten',
        ],
      },
      approach: {
        eyebrow: 'Märkte',
        title: 'D-A-CH · Europa · Türkei · Nordzypern.',
        text: 'Jeder Markt hat eigene Regeln. Wir kennen Abläufe, Kosten und kulturelle Unterschiede – und arbeiten mit geprüften Partnern vor Ort.',
        points: [
          'Deutsch, Englisch und Türkisch',
          'Partnernetzwerk vor Ort',
          'Ein Ansprechpartner für alles',
        ],
      },
      faq: [
        {
          q: 'Wie erhalte ich Zugang zu Off-Market-Angeboten?',
          a: 'Nach einem Erstgespräch erstellen wir gemeinsam Ihr Suchprofil. Passende Objekte stellen wir Ihnen vertraulich vor – häufig erst nach Unterzeichnung einer Vertraulichkeitsvereinbarung.',
        },
        {
          q: 'Begleiten Sie auch Käufe in der Türkei und Nordzypern?',
          a: 'Ja. Wir begleiten Sie von der Objektauswahl über die Prüfung bis zur Eigentumsübertragung und arbeiten dabei mit geprüften Fachpartnern vor Ort zusammen.',
        },
      ],
      cta: {
        title: 'Suchen Sie das nächste Investment?',
        text: 'Teilen Sie uns Ihr Suchprofil mit – wir melden uns vertraulich mit einer ersten Einschätzung.',
      },
      risk: 'Immobilieninvestitionen sind mit Risiken verbunden, etwa durch Wertschwankungen, Mietausfälle, Finanzierungs-, Währungs- und Rechtsrisiken im Ausland. Die Inhalte dieser Website sind keine Anlage-, Rechts- oder Steuerberatung und kein Angebot zum Kauf oder Verkauf. Frühere Wertentwicklungen sind kein verlässlicher Indikator für künftige Ergebnisse.',
    },

    ai: {
      seo: {
        title: 'KI-Automation für kleine und mittlere Unternehmen · NEXXCON-24',
        description:
          'Künstliche Intelligenz praxisnah einsetzen: Prozessautomatisierung, KI-Assistenten und Workflows für KMU – datenschutzbewusst, messbar und ohne Technik-Ballast.',
      },
      label: 'IT- & KI-Automation',
      card: {
        title: 'KI-Automation für KMU',
        text: 'Wiederkehrende Arbeit automatisieren, Wissen nutzbar machen, Teams entlasten.',
        points: [
          'Potenzialanalyse',
          'Workflow-Automatisierung',
          'KI-Assistenten',
          'Schulung & Betrieb',
        ],
      },
      slide: {
        kicker: '03 · Intelligence',
        title: 'KI, die Arbeit abnimmt.',
        text: 'Automatisierung und KI-Assistenten für kleine und mittlere Unternehmen.',
      },
      hero: {
        eyebrow: '03 · KI-Automation für KMU',
        title: 'KI, die Arbeit abnimmt.',
        lead: 'Künstliche Intelligenz ist kein Konzernthema mehr. Wir identifizieren, wo sie in Ihrem Unternehmen spürbar entlastet – und setzen Lösungen um, die Ihr Team wirklich nutzt.',
      },
      offerings: {
        eyebrow: 'Leistungen',
        title: 'Von der Idee zum laufenden Prozess.',
        items: [
          {
            title: 'KI-Potenzialanalyse',
            text: 'Wo steckt der größte Nutzen bei geringem Risiko? Eine klare Liste mit Prioritäten.',
          },
          {
            title: 'Workflow-Automatisierung',
            text: 'Angebote, E-Mails, Dokumente und Datenflüsse automatisch und nachvollziehbar.',
          },
          {
            title: 'KI-Assistenten',
            text: 'Assistenten für Vertrieb, Kundenservice und internes Wissen – auf Ihre Abläufe zugeschnitten.',
          },
          {
            title: 'Daten & Auswertungen',
            text: 'Kennzahlen und Berichte automatisch aufbereiten statt manuell zusammentragen.',
          },
          {
            title: 'Web & Apps',
            text: 'Digitale Werkzeuge und Oberflächen, die Prozesse sichtbar und steuerbar machen.',
          },
          {
            title: 'Schulung & Betrieb',
            text: 'Ihr Team lernt den sicheren Umgang mit KI – wir bleiben Ansprechpartner im Betrieb.',
          },
        ],
      },
      audience: {
        eyebrow: 'Für wen',
        title: 'Für Unternehmen, die effizienter werden wollen.',
        items: [
          'KMU mit vielen wiederkehrenden Büro- und Verwaltungsaufgaben',
          'Vertriebs- und Serviceteams mit hohem Anfrageaufkommen',
          'Immobilien- und Beratungsunternehmen mit dokumentenlastigen Prozessen',
          'Geschäftsführer, die KI sicher und strukturiert einführen möchten',
        ],
      },
      approach: {
        eyebrow: 'Unser Ansatz',
        title: 'Klein starten, schnell lernen.',
        text: 'Wir beginnen mit einem klar umrissenen Anwendungsfall, messen den Nutzen und skalieren erst dann. Datenschutz und Nachvollziehbarkeit sind von Anfang an Teil der Lösung.',
        points: ['Klein starten, Nutzen messen', 'Datenschutz im Blick', 'Ihr Team wird befähigt'],
      },
      faq: [
        {
          q: 'Brauchen wir eigene IT-Experten für KI-Automation?',
          a: 'Nein. Wir übernehmen Konzeption und Umsetzung und schulen Ihr Team so, dass es die Lösungen sicher im Alltag nutzt.',
        },
        {
          q: 'Wie gehen Sie mit Datenschutz um?',
          a: 'Wir wählen Werkzeuge und Einstellungen nach Ihren Anforderungen aus, verarbeiten so wenig personenbezogene Daten wie möglich und dokumentieren die Abläufe nachvollziehbar.',
        },
      ],
      cta: {
        title: 'Welche Aufgabe soll KI Ihnen zuerst abnehmen?',
        text: 'In einem kurzen Gespräch finden wir den Anwendungsfall mit dem schnellsten Nutzen.',
      },
    },
  },

  about: {
    seo: {
      title: 'Über uns · NEXXCON-24 · Nexxus – Business & IT. Consulting',
      description:
        'NEXXCON-24 ist die Beratungsmarke von Nexxus – Business & IT. Consulting aus Laatzen bei Hannover: Unternehmensberatung, Immobilien-Investment und KI-Automation aus einer Hand.',
    },
    hero: {
      eyebrow: 'Über uns',
      title: 'Persönlich. Diskret. Unternehmerisch.',
      lead: 'Hinter NEXXCON-24 steht Nexxus – Business & IT. Consulting mit Sitz in Laatzen bei Hannover. Wir verbinden Unternehmensberatung, Immobilienkompetenz und Technologie zu einer Beratung aus einer Hand.',
    },
    profile: {
      eyebrow: 'Ihr Ansprechpartner',
      title: 'Dipl.-Imb. Ümit Törün',
      role: 'Gründer & Berater',
      // \n = neuer Absatz. ­ = unsichtbare Trennstelle für sauberen Blocksatz bei langen Wörtern.
      bio: '73er Baujahr, Familien­vater von 3 (mittler­weile) verheira­teten Kindern, kreativer Quer­denker, Ex!Banker, unermüd­licher Unter­nehmens­lenker & Optimist ;-)\nMit mehr als 33 Jahren Know-how, Know-what & Erfahrung bringen wir Sie an Ihre Ziele …\nMit Herz, Verstand, Leib & Seele und viel Passion – aus der Praxis, für die Praxis.\nMehr über mich gerne in einem ersten Kennen­lern­gespräch 😊',
    },
    values: {
      eyebrow: 'Werte',
      title: 'Wofür wir stehen.',
      items: [
        {
          title: 'Vertraulichkeit',
          text: 'Was Sie uns anvertrauen, bleibt bei uns. Diskretion ist die Grundlage jeder Zusammenarbeit.',
        },
        {
          title: 'Ehrlichkeit',
          text: 'Wir sagen auch, wenn sich etwas nicht lohnt. Keine Versprechen, die wir nicht halten können.',
        },
        {
          title: 'Verbindlichkeit',
          text: 'Klare Absprachen, feste Ansprechperson, verlässliche Erreichbarkeit.',
        },
      ],
    },
    brands: {
      eyebrow: 'Marken',
      title: 'nexxcon & nexxus',
      text: 'nexxcon „business RE solutions“ steht für Unternehmens- und Immobilienlösungen, nexxus CONSULTING für Beratung und IT. Gemeinsam bilden sie NEXXCON-24.',
    },
  },

  contact: {
    seo: {
      title: 'Kontakt · Vertrauliches Erstgespräch · NEXXCON-24',
      description:
        'Kontakt zu NEXXCON-24 in Laatzen bei Hannover: per Telefon, E-Mail oder WhatsApp. Erstgespräch unverbindlich und kostenfrei – vor Ort, per Video oder Telefon.',
    },
    hero: {
      eyebrow: 'Kontakt',
      title: 'Sprechen wir miteinander.',
      lead: 'Wählen Sie den Weg, der Ihnen am liebsten ist. Wir melden uns persönlich bei Ihnen zurück.',
    },
    channels: {
      title: 'So erreichen Sie uns',
      phoneText: 'Direkt und persönlich',
      emailText: 'Für Unterlagen und ausführliche Anfragen',
      whatsappText: 'Schnell und unkompliziert',
      bookingText: 'Wunschtermin selbst auswählen',
    },
    prepare: {
      title: 'Für ein gutes Erstgespräch hilfreich',
      items: [
        'Kurz Ihr Anliegen und Ihr Ziel',
        'Den gewünschten Zeitrahmen',
        'Bei Immobilien: Region, Objektart und Budgetrahmen',
        'Bei KI-Automation: die Aufgabe, die am meisten Zeit kostet',
      ],
    },
    location: {
      title: 'Standort',
      text: 'Persönliche Termine in Laatzen und der Region Hannover, überregional und international per Video oder Telefon.',
    },
  },

  legal: {
    imprint: {
      title: 'Impressum · NEXXCON-24',
      description: 'Impressum von Nexxus – Business & IT. Consulting (NEXXCON-24).',
    },
    privacy: {
      title: 'Datenschutzerklärung · NEXXCON-24',
      description: 'Informationen zur Verarbeitung personenbezogener Daten auf dieser Website.',
    },
  },

  notFound: {
    seo: {
      title: 'Seite nicht gefunden · NEXXCON-24',
      description: 'Die angeforderte Seite existiert nicht.',
    },
    title: 'Diese Seite gibt es nicht.',
    text: 'Vielleicht wurde sie verschoben. Über die Startseite finden Sie schnell zurück.',
  },

  footer: {
    claim: 'Unternehmensberatung, Off-Market-Immobilien und KI-Automation – aus einer Hand.',
    servicesTitle: 'Leistungen',
    companyTitle: 'Unternehmen',
    contactTitle: 'Kontakt',
    imprint: 'Impressum',
    privacy: 'Datenschutz',
    rights: 'Alle Rechte vorbehalten.',
    brandsNote: 'Eine Marke der',
  },
};
