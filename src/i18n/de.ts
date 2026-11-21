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
        'Unternehmensberatung und Coaching für KMU, Off-Market- und Investmentimmobilien in D-A-CH, Europa, Türkei und Nordzypern, KI-Automation und Auswanderungscoaching – persönlich, diskret, aus einer Hand.',
    },
    hero: {
      eyebrow: 'Business · Real Estate · Intelligence',
      title: 'Klarheit für Entscheidungen,',
      titleAccent: 'die Werte schaffen.',
      lead: 'NEXXCON-24 begleitet Unternehmer, Makler, Investoren und Family Offices dort, wo es um Substanz geht: bei der strategischen Ausrichtung des Unternehmens, beim diskreten Immobilieninvestment und der Platzierung, bei der Automatisierung mit künstlicher Intelligenz und beim Neustart, bei der Expansion oder beim Exit im Ausland.',
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
      'Nachfolge & M&A',
      'Off-Market-Immobilien',
      'Investmentimmobilien',
      'D-A-CH',
      'Europa',
      'Türkei',
      'Nordzypern',
      'KI-Automation',
      'KI-Assistenten',
      'Auswanderungscoaching',
      'Family Offices',
    ],
    areas: {
      eyebrow: 'Geschäftsbereiche',
      title: 'Vier Disziplinen. Ein Ansprechpartner.',
      lead: 'Unternehmen, Immobilien, Technologie und Lebensplanung hängen enger zusammen, als klassische Beratung es abbildet. Wir denken sie zusammen – und liefern Ergebnisse statt Foliensätze.',
    },
    process: {
      eyebrow: 'Arbeitsweise',
      title: 'Vom ersten Gespräch zur Umsetzung.',
      lead: 'Ein klarer Ablauf in vier Schritten – transparent, verbindlich und jederzeit nachvollziehbar.',
      steps: [
        {
          title: 'Erstgespräch',
          text: 'Vertraulich und kostenfrei: Wir hören zu, verstehen Ihre Ausgangslage und klären, was Ihnen wirklich wichtig ist.',
        },
        {
          title: 'Analyse',
          text: 'Zahlen, Markt, Prozesse und Risiken – gründlich geprüft und so aufbereitet, dass Sie die Fakten auf einen Blick sehen.',
        },
        {
          title: 'Strategie',
          text: 'Eine konkrete Empfehlung mit Optionen, Aufwand, Zeitplan und den nächsten drei Schritten.',
        },
        {
          title: 'Umsetzung',
          text: 'Wir setzen mit um, koordinieren Partner und Fachleute und bleiben Ihr fester Ansprechpartner bis zum Ziel.',
        },
      ],
    },
    why: {
      eyebrow: 'Warum NEXXCON-24',
      title: 'Beratung mit Haltung.',
      lead: 'Woran Sie die Zusammenarbeit mit uns erkennen – und woran wir uns messen lassen.',
      items: [
        {
          title: 'Unternehmerischer Blick',
          text: 'Wir beraten, als ginge es um unser eigenes Kapital: pragmatisch, zahlenbasiert und mit dem Mut, auch unbequeme Wahrheiten auszusprechen.',
        },
        {
          title: 'Zugang abseits der Portale',
          text: 'Off-Market-Objekte, Investoren und Gelegenheiten aus einem über Jahrzehnte persönlich gewachsenen Netzwerk.',
        },
        {
          title: 'Grenzüberschreitend zu Hause',
          text: 'D-A-CH, Europa, Türkei und Nordzypern – mit Sprachkenntnis, kulturellem Verständnis und Partnern vor Ort.',
        },
        {
          title: 'Technologie als Hebel',
          text: 'KI und Automatisierung dort, wo sie Zeit, Kosten und Fehler spürbar reduzieren – nicht als Selbstzweck.',
        },
      ],
    },
    regions: {
      eyebrow: 'Märkte',
      title: 'Wo wir für Sie aktiv sind.',
      lead: 'Investmentimmobilien und Unternehmensprojekte in vier Märkten – mit lokalem Wissen, persönlichen Kontakten und einem Ansprechpartner für alles.',
      items: [
        {
          title: 'D-A-CH',
          text: 'Deutschland, Österreich, Schweiz: Wohn- und Geschäftshäuser, Portfolios und Projekte mit Substanz.',
        },
        {
          title: 'Europa',
          text: 'Ausgewählte Standorte mit stabilen Rahmenbedingungen, solider Nachfrage und Entwicklungspotenzial.',
        },
        {
          title: 'Türkei',
          text: 'Von Istanbul bis an die türkische Riviera – vom Penthouse bis zur Villa am Meer, begleitet bis zum Grundbuch.',
        },
        {
          title: 'Nordzypern',
          text: 'Mittelmeer-Immobilien in Neubau und Bestand – eine echte Alternative zu Spanien und Dubai.',
        },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Häufige Fragen.',
      items: [
        {
          q: 'Für wen ist NEXXCON-24 der richtige Partner?',
          a: 'Für Inhaber und Geschäftsführer kleiner und mittlerer Unternehmen, für private und institutionelle Investoren, für Family Offices und für Menschen, die einen Neustart im Ausland planen – überall dort, wo Beratung aus einer Hand gefragt ist.',
        },
        {
          q: 'Was kostet das Erstgespräch?',
          a: 'Nichts. Das Erstgespräch ist unverbindlich und kostenfrei. Danach erhalten Sie eine ehrliche Einschätzung, ob und wie wir Ihnen helfen können – und was das konkret bedeutet.',
        },
        {
          q: 'Was bedeutet Off-Market?',
          a: 'Off-Market-Immobilien werden nicht öffentlich auf Portalen angeboten, sondern diskret über persönliche Netzwerke vermittelt. Das schützt die Privatsphäre der Verkäufer und eröffnet Käufern Gelegenheiten mit weniger Wettbewerb.',
        },
        {
          q: 'Arbeiten Sie auch international?',
          a: 'Ja. Neben dem D-A-CH-Raum begleiten wir Investments und Projekte in Europa, in der Türkei und in Nordzypern sowie Auswanderungsvorhaben bis in die USA und nach Dubai – auf Deutsch, Englisch und Türkisch.',
        },
        {
          q: 'Wie schnell lässt sich KI im Unternehmen einsetzen?',
          a: 'Erste Automatisierungen sind oft innerhalb weniger Wochen produktiv. Wir starten mit einer Analyse, wo der größte Nutzen bei geringem Risiko liegt, und bauen von dort Schritt für Schritt aus.',
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
          'Strategie, Wachstum, Finanzierung, Nachfolge und Coaching für Inhaber und Geschäftsführer kleiner und mittlerer Unternehmen – pragmatisch, zahlenbasiert und auf langfristigen Erfolg ausgerichtet.',
      },
      label: 'Coaching & Consulting',
      card: {
        title: 'Unternehmensberatung, Coaching & Consulting',
        text: 'Strategische Begleitung für KMU – von der Neuausrichtung über Wachstum und Finanzierung bis zur Nachfolge.',
        points: [
          'Strategie & Geschäftsmodell',
          'Wachstum & Prozesse',
          'Coaching für Unternehmer',
          'Nachfolge, M&A, Exit',
        ],
      },
      slide: {
        kicker: '01 · Consulting',
        title: 'Strategien aus der Praxis, für die Praxis.',
        text: 'Consulting und Coaching für Inhaber und Geschäftsführer im Mittelstand.',
      },
      hero: {
        eyebrow: '01 · Unternehmensberatung, Coaching & Consulting',
        title: 'Strategie, die im Alltag trägt.',
        lead: 'Kleine und mittlere Unternehmen brauchen keine Konzepte für die Schublade. Sie brauchen klare Prioritäten, belastbare Zahlen und einen Sparringspartner, der Verantwortung übernimmt – heute für die nächsten Schritte, morgen für die langfristige Sicherung Ihres Unternehmens.',
      },
      offerings: {
        eyebrow: 'Leistungen',
        title: 'Was wir für Ihr Unternehmen tun.',
        items: [
          {
            title: 'Strategie & Geschäftsmodell',
            text: 'Positionierung schärfen, Märkte bewerten und das Geschäftsmodell so aufstellen, dass es auch in fünf Jahren noch trägt.',
          },
          {
            title: 'Wachstum & Expansion',
            text: 'Neue Märkte, Standorte, Produkte und Vertriebswege strukturiert erschließen – mit Business Case und Meilensteinen.',
          },
          {
            title: 'Prozesse & Organisation',
            text: 'Abläufe vereinfachen, Verantwortlichkeiten klären, Kosten senken – und Verbesserungen dauerhaft verankern.',
          },
          {
            title: 'Finanzierung & Kapital',
            text: 'Businessplan und Planrechnung erstellen, Bank- und Investorengespräche vorbereiten, Kapitalzugang strukturieren.',
          },
          {
            title: 'Coaching für Unternehmer',
            text: 'Vertrauliches Sparring für Führung, Entscheidungen und persönliche Wirksamkeit – auf Augenhöhe.',
          },
          {
            title: 'Nachfolge, M&A & Exit',
            text: 'Unternehmensverkauf, Kauf oder Übergabe – strukturiert vorbereitet, realistisch bewertet, diskret begleitet.',
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
        text: 'Wir arbeiten mit wenigen, wirksamen Hebeln und messbaren Zwischenzielen. Sie behalten jederzeit die Kontrolle über Ihr Unternehmen – wir sorgen für Tempo, Struktur und dafür, dass aus Plänen Ergebnisse werden.',
        points: [
          'Klare Prioritäten ab dem ersten Termin',
          'Feste, persönliche Ansprechperson',
          'Transparente Aufwände und Kosten',
        ],
      },
      faq: [
        {
          q: 'Wie lange dauert ein typisches Beratungsprojekt?',
          a: 'Das reicht vom kompakten Strategie-Workshop über wenige Tage bis zur Begleitung über mehrere Monate. Umfang, Dauer und Budget legen wir nach dem Erstgespräch gemeinsam und verbindlich fest.',
        },
        {
          q: 'Was unterscheidet Coaching von Consulting?',
          a: 'Consulting liefert Analysen, Konzepte und Umsetzung für das Unternehmen. Coaching stärkt Sie persönlich als Unternehmer – in Führung, Entscheidungen und Selbstorganisation. Beides lässt sich sinnvoll kombinieren.',
        },
      ],
      cta: {
        title: 'Wo steht Ihr Unternehmen in zwölf Monaten?',
        text: 'Lassen Sie uns in einem vertraulichen Erstgespräch die Hebel identifizieren, die Ihr Unternehmen kurzfristig voranbringen und langfristig sichern.',
      },
    },

    realEstate: {
      seo: {
        title:
          'Off-Market- & Investmentimmobilien · D-A-CH, Europa, Türkei, Nordzypern · NEXXCON-24',
        description:
          'Diskreter Zugang zu Off-Market- und Investmentimmobilien in Deutschland, Österreich, der Schweiz, Europa, der Türkei und Nordzypern – mit Analyse, Due Diligence und Begleitung bis zum Abschluss.',
      },
      label: 'Immobilien & Investment',
      card: {
        title: 'Immobilienberatung – Off-Market & Investment',
        text: 'Exklusiver Zugang zu Investmentimmobilien in D-A-CH, Europa, der Türkei und Nordzypern – diskret, geprüft, persönlich begleitet.',
        points: [
          'Off-Market-Zugang',
          'Investment- & Standortanalyse',
          'Due Diligence & Begleitung',
          'Internationale Märkte',
        ],
      },
      slide: {
        kicker: '02 · Real Estate',
        title: 'Immobilien, die nicht jeder sieht – aber Sie mit uns schon.',
        text: 'Off-Market- und Investmentimmobilien in D-A-CH, Europa, Türkei und Nordzypern.',
      },
      hero: {
        eyebrow: '02 · Immobilienberatung – Off-Market & Investment',
        title: 'Immobilien, die nicht jeder sieht.',
        lead: 'Die besten Gelegenheiten erscheinen selten auf Portalen. Wir verbinden Investoren diskret mit Off-Market- und Investmentimmobilien, prüfen jede Gelegenheit, bevor Sie Zeit und Kapital einsetzen – und platzieren Ihre eigenen Objekte gezielt bei den richtigen Käufern.',
      },
      offerings: {
        eyebrow: 'Leistungen',
        title: 'Vom Suchprofil bis zum Abschluss.',
        items: [
          {
            title: 'Off-Market-Zugang',
            text: 'Ausgewählte Objekte und Investoren aus persönlichen Netzwerken – vertraulich, bevor der Markt sie sieht.',
          },
          {
            title: 'Investmentanalyse',
            text: 'Lage, Rendite, Kosten, Finanzierung und Wertentwicklung – nachvollziehbar gerechnet und klar eingeordnet.',
          },
          {
            title: 'Due Diligence',
            text: 'Unterlagen, Bausubstanz, Mietverträge und Wirtschaftlichkeit – geprüft gemeinsam mit Gutachtern und Fachpartnern.',
          },
          {
            title: 'Verkauf ohne Öffentlichkeit',
            text: 'Realistische Bewertung und maximaler Erlös durch gezielte Platzierung bei geprüften Käufern – ohne Portalanzeige.',
          },
          {
            title: 'Internationale Investments',
            text: 'Türkei und Nordzypern: vom Standort über die Prüfung bis zur Eigentumsübertragung und Schlüsselübergabe.',
          },
          {
            title: 'Portfolio & Strategie',
            text: 'Immobilien als tragender Baustein Ihrer Vermögens- und Unternehmensstrategie – Ausbau, Umschichtung oder Exit.',
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
          'Eigentümer, die diskret und zum besten Preis verkaufen möchten',
        ],
      },
      approach: {
        eyebrow: 'Märkte',
        title: 'D-A-CH · Europa · Türkei · Nordzypern.',
        text: 'Jeder Markt folgt eigenen Regeln. Wir kennen Abläufe, Kosten und kulturelle Besonderheiten – und arbeiten mit Partnern vor Ort, die wir persönlich kennen und denen wir vertrauen.',
        points: [
          'Deutsch, Englisch und Türkisch',
          'Persönliches Partnernetzwerk vor Ort',
          'Ein Ansprechpartner für alles',
        ],
      },
      faq: [
        {
          q: 'Wie erhalte ich Zugang zu Off-Market-Angeboten?',
          a: 'Nach einem Erstgespräch erstellen wir gemeinsam Ihr Suchprofil. Passende Objekte stellen wir Ihnen vertraulich vor – in der Regel nach Unterzeichnung einer Vertraulichkeitsvereinbarung.',
        },
        {
          q: 'Begleiten Sie auch Käufe in der Türkei und Nordzypern?',
          a: 'Ja. Wir begleiten Sie von der Objektauswahl über die Prüfung bis zur Eigentumsübertragung und arbeiten dabei mit Fachpartnern vor Ort zusammen, die wir seit Jahren kennen.',
        },
      ],
      cta: {
        title: 'Suchen Sie das nächste Investment?',
        text: 'Teilen Sie uns Ihr Suchprofil mit – oder das Objekt, das Sie diskret verkaufen möchten. Wir melden uns vertraulich mit einer ersten Einschätzung.',
      },
      risk: 'Immobilieninvestitionen sind mit Risiken verbunden, etwa durch Wertschwankungen, Mietausfälle, Finanzierungs-, Währungs- und Rechtsrisiken im Ausland. Die Inhalte dieser Website sind keine Anlage-, Rechts- oder Steuerberatung und kein Angebot zum Kauf oder Verkauf. Frühere Wertentwicklungen sind kein verlässlicher Indikator für künftige Ergebnisse.',
    },

    ai: {
      seo: {
        title: 'KI-Automation für kleine und mittlere Unternehmen · NEXXCON-24',
        description:
          'Künstliche Intelligenz praxisnah einsetzen: Prozessautomatisierung, KI-Assistenten, Dashboards und Web-Apps für KMU – effizient, nachvollziehbar, sicher und datenschutzkonform.',
      },
      label: 'IT- & KI-Automation',
      card: {
        title: 'KI-Automation für KMU',
        text: 'Operative Abläufe automatisieren, Wissen nutzbar machen, Teams spürbar entlasten – sicher und datenschutzkonform.',
        points: [
          'Potenzialanalyse',
          'Workflow-Automatisierung',
          'KI-Assistenten',
          'Schulung & Betrieb',
        ],
      },
      slide: {
        kicker: '03 · Intelligence',
        title: 'KI, die Sie und Ihre Mitarbeiter stärkt – nicht ersetzt.',
        text: 'Automatisierung und KI-Assistenten für kleine und mittlere Unternehmen.',
      },
      hero: {
        eyebrow: '03 · KI-Automation für KMU',
        title: 'KI, die Arbeit abnimmt.',
        lead: 'Künstliche Intelligenz ist längst kein Konzernthema mehr. Wir finden heraus, wo sie in Ihrem Unternehmen spürbar entlastet, automatisieren Ihre operativen Abläufe Schritt für Schritt – und setzen Lösungen um, die Ihr Team gern und sicher nutzt.',
      },
      offerings: {
        eyebrow: 'Leistungen',
        title: 'Von der Idee zum laufenden Prozess.',
        items: [
          {
            title: 'KI-Potenzialanalyse',
            text: 'Wo liegt der größte Nutzen bei geringem Risiko? Eine priorisierte Liste mit Aufwand, Nutzen und Amortisation.',
          },
          {
            title: 'Workflow-Automatisierung',
            text: 'Von der Anfrage bis zur Rechnung: operative Prozesse durchgängig automatisiert, nachvollziehbar und sicher.',
          },
          {
            title: 'KI-Assistenten',
            text: 'Digitale Kollegen für Vertrieb, Kundenservice, Onboarding und internes Wissen – in Ihrer Tonalität.',
          },
          {
            title: 'Daten & Auswertungen',
            text: 'Kennzahlen, Dashboards und Berichte automatisch statt mühsam von Hand zusammengetragen.',
          },
          {
            title: 'Web & Apps',
            text: 'Portale, Cockpits und digitale Werkzeuge, die Prozesse sichtbar und steuerbar machen.',
          },
          {
            title: 'Schulung & Betrieb',
            text: 'Ihr Team lernt den sicheren Umgang mit KI – und wir bleiben Ihr Ansprechpartner im laufenden Betrieb.',
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
        title: 'Klein starten, schnell lernen, gezielt skalieren.',
        text: 'Wir beginnen mit einem klar umrissenen Anwendungsfall, messen den Nutzen und skalieren erst dann. Datenschutz, Sicherheit und Nachvollziehbarkeit sind von Anfang an fester Teil jeder Lösung.',
        points: [
          'Klein starten, Nutzen messen',
          'Datenschutz & Sicherheit eingebaut',
          'Ihr Team wird befähigt',
        ],
      },
      faq: [
        {
          q: 'Brauchen wir eigene IT-Experten für KI-Automation?',
          a: 'Nein. Wir übernehmen Konzeption, Umsetzung und Betreuung und schulen Ihr Team so, dass es die Lösungen sicher und selbstständig im Alltag nutzt.',
        },
        {
          q: 'Wie gehen Sie mit Datenschutz um?',
          a: 'Wir wählen Werkzeuge und Einstellungen nach Ihren Anforderungen aus, verarbeiten so wenig personenbezogene Daten wie möglich, und dokumentieren alle Abläufe nachvollziehbar.',
        },
      ],
      cta: {
        title: 'Welche Aufgabe soll KI Ihnen zuerst abnehmen?',
        text: 'In einem kurzen Gespräch finden wir den Anwendungsfall mit dem schnellsten, messbaren Nutzen.',
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
      lead: 'Hinter NEXXCON-24 steht Nexxus – Business & IT. Consulting mit Sitz in Laatzen bei Hannover. Wir verbinden Unternehmensberatung, Immobilienkompetenz, Technologie und internationale Erfahrung zu einer Beratung aus einer Hand – persönlich geführt und mit einem Netzwerk, das über Jahrzehnte gewachsen ist.',
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
          text: 'Was Sie uns anvertrauen, bleibt bei uns. Diskretion ist nicht verhandelbar – sie ist die Grundlage jeder Zusammenarbeit.',
        },
        {
          title: 'Ehrlichkeit',
          text: 'Wir sagen auch, wenn sich etwas nicht lohnt. Lieber ein ehrliches Nein heute als eine teure Enttäuschung morgen.',
        },
        {
          title: 'Verbindlichkeit',
          text: 'Klare Absprachen, eine feste Ansprechperson und Erreichbarkeit, auf die Sie sich verlassen können.',
        },
      ],
    },
    brands: {
      eyebrow: 'Marken',
      title: 'nexxcon & nexxus',
      text: 'nexxcon „business RE solutions“ steht für Unternehmens- und Immobilienlösungen, nexxus CONSULTING für Beratung, IT und KI. Gemeinsam bilden sie NEXXCON-24 – eine Adresse für Unternehmer und Investoren, die mehr erwarten als Standardlösungen.',
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
      lead: 'Telefon, E-Mail, WhatsApp oder Wunschtermin – wählen Sie den Weg, der Ihnen am liebsten ist. Wir melden uns persönlich und zeitnah bei Ihnen zurück.',
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
        'Beim Auswandern: Wunschland, Zeitplan und Familiensituation',
      ],
    },
    location: {
      title: 'Standort',
      text: 'Persönliche Termine in Laatzen und der Region Hannover, gern auch bei Ihnen vor Ort. Überregional und international beraten wir per Video oder Telefon – in Deutsch, Englisch und Türkisch.',
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
    claim:
      'Unternehmensberatung, Off-Market-Immobilien, KI-Automation und Auswanderungscoaching – persönlich, diskret, aus einer Hand.',
    servicesTitle: 'Leistungen',
    companyTitle: 'Unternehmen',
    contactTitle: 'Kontakt',
    imprint: 'Impressum',
    privacy: 'Datenschutz',
    rights: 'Alle Rechte vorbehalten.',
    brandsNote: 'Eine Marke der',
  },
};
