/**
 * Partnerseiten (Fußzeile): Affiliate-Programm, Lizenzpartner, Investor Relations – je de/en/tr.
 * Bewusst ohne Zahlen (Provisionen, Gebühren, Renditen): Konditionen nur im persönlichen Gespräch.
 * `topic` = Schlüssel für die Themen-Vorauswahl im Kontaktformular (?thema=…).
 */
import type { Lang } from '@/config/routes';

export type PartnerKind = 'affiliate' | 'license' | 'investors';

interface Item {
  title: string;
  text: string;
}
export interface PartnerPage {
  seo: { title: string; description: string };
  label: string;
  hero: { eyebrow: string; title: string; lead: string };
  audienceTitle: string;
  audience: string[];
  stepsTitle: string;
  steps: Item[];
  benefitsTitle: string;
  benefits: Item[];
  faq: { q: string; a: string }[];
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
  note?: string;
}

export const partnerTopic: Record<PartnerKind, string> = {
  affiliate: 'affiliate',
  license: 'lizenz',
  investors: 'investor',
};

export const partnerPages: Record<PartnerKind, Record<Lang, PartnerPage>> = {
  affiliate: {
    de: {
      seo: {
        title: 'Affiliate-Programm · NEXXCON-24',
        description:
          'Empfehlen Sie NEXXCON-24 weiter und werden Sie für erfolgreiche Vermittlungen beteiligt – für Beratung, KI-Automation, Immobilien und Auswanderungscoaching.',
      },
      label: 'Affiliate-Programm',
      hero: {
        eyebrow: 'Partner · Affiliate-Programm',
        title: 'Empfehlen lohnt sich.',
        lead: 'Sie kennen Unternehmer, Investoren oder Familien, denen wir helfen können? Als Affiliate-Partner empfehlen Sie NEXXCON-24 weiter und werden an erfolgreichen Aufträgen beteiligt – transparent, fair und ohne eigenen Vertriebsaufwand.',
      },
      audienceTitle: 'Für wen das Programm passt',
      audience: [
        'Steuerberater, Anwälte, Banker und Berater mit Unternehmerkontakten',
        'Makler, Architekten und Projektentwickler',
        'Netzwerker, Verbände, Coaches und Content-Creator',
        'Zufriedene Kunden, die uns gern weiterempfehlen',
      ],
      stepsTitle: 'So funktioniert es',
      steps: [
        { title: 'Kennenlernen', text: 'Sie melden sich über das Formular. Wir besprechen kurz, welche Kontakte und Themen zu Ihnen passen.' },
        { title: 'Vereinbarung', text: 'Wir halten Konditionen, Ablauf und Datenschutz in einer einfachen schriftlichen Vereinbarung fest.' },
        { title: 'Empfehlen', text: 'Sie stellen den Kontakt her – per persönlicher Vorstellung, Link oder kurzer Nachricht an uns.' },
        { title: 'Beteiligung', text: 'Kommt ein Auftrag zustande, erhalten Sie Ihre vereinbarte Vergütung. Sie sehen jederzeit, was aus Ihrer Empfehlung geworden ist.' },
      ],
      benefitsTitle: 'Was Sie davon haben',
      benefits: [
        { title: 'Faire Beteiligung', text: 'Vergütung für jede erfolgreiche Vermittlung, schriftlich vereinbart.' },
        { title: 'Kein Vertriebsaufwand', text: 'Sie empfehlen – Beratung, Angebot und Umsetzung übernehmen wir.' },
        { title: 'Ihr Ruf ist sicher', text: 'Wir behandeln Ihre Kontakte vertraulich und mit derselben Sorgfalt wie eigene Mandanten.' },
        { title: 'Vier Themenfelder', text: 'Beratung, KI-Automation, Immobilien und Auswanderung – passend für viele Netzwerke.' },
      ],
      faq: [
        { q: 'Wie hoch ist die Vergütung?', a: 'Das hängt vom Bereich und vom Auftragsumfang ab. Die genauen Konditionen besprechen wir persönlich und halten sie schriftlich fest.' },
        { q: 'Muss ich selbst verkaufen?', a: 'Nein. Sie stellen nur den Kontakt her. Erstgespräch, Angebot und Umsetzung liegen bei uns.' },
        { q: 'Was passiert mit den Daten meiner Kontakte?', a: 'Wir sprechen Ihre Kontakte nur an, wenn sie einverstanden sind, und verarbeiten ihre Daten nach unserer Datenschutzerklärung.' },
      ],
      ctaTitle: 'Affiliate-Partner werden',
      ctaText: 'Schreiben Sie uns kurz, wen Sie kennen und welche Themen Sie interessieren. Wir melden uns persönlich.',
      ctaButton: 'Jetzt Partner werden',
    },
    en: {
      seo: {
        title: 'Affiliate programme · NEXXCON-24',
        description:
          'Recommend NEXXCON-24 and share in successful referrals – for consulting, AI automation, real estate and relocation coaching.',
      },
      label: 'Affiliate programme',
      hero: {
        eyebrow: 'Partners · Affiliate programme',
        title: 'Recommending pays off.',
        lead: 'Do you know business owners, investors or families we can help? As an affiliate partner you recommend NEXXCON-24 and share in successful projects – transparently, fairly and without any sales effort of your own.',
      },
      audienceTitle: 'Who the programme suits',
      audience: [
        'Tax advisors, lawyers, bankers and consultants with business contacts',
        'Estate agents, architects and property developers',
        'Networkers, associations, coaches and content creators',
        'Happy clients who like to recommend us',
      ],
      stepsTitle: 'How it works',
      steps: [
        { title: 'Get to know us', text: 'Get in touch via the form. We briefly discuss which contacts and topics suit you.' },
        { title: 'Agreement', text: 'We put terms, process and data protection into a simple written agreement.' },
        { title: 'Recommend', text: 'You make the introduction – in person, via a link or with a short message to us.' },
        { title: 'Your share', text: 'If a project goes ahead, you receive the agreed fee. You can always see what became of your referral.' },
      ],
      benefitsTitle: 'What you get',
      benefits: [
        { title: 'Fair share', text: 'A fee for every successful referral, agreed in writing.' },
        { title: 'No sales effort', text: 'You recommend – we handle advice, quote and delivery.' },
        { title: 'Your reputation is safe', text: 'We treat your contacts confidentially and with the same care as our own clients.' },
        { title: 'Four fields', text: 'Consulting, AI automation, real estate and relocation – a fit for many networks.' },
      ],
      faq: [
        { q: 'How much is the fee?', a: 'It depends on the field and the size of the project. We discuss the exact terms personally and put them in writing.' },
        { q: 'Do I have to sell?', a: 'No. You only make the introduction. Initial call, quote and delivery are on us.' },
        { q: 'What happens to my contacts’ data?', a: 'We only approach your contacts with their consent and process their data according to our privacy policy.' },
      ],
      ctaTitle: 'Become an affiliate partner',
      ctaText: 'Tell us briefly who you know and which topics interest you. We will get back to you personally.',
      ctaButton: 'Become a partner now',
    },
    tr: {
      seo: {
        title: 'Ortaklık programı · NEXXCON-24',
        description:
          'NEXXCON-24’ü tavsiye edin, başarılı yönlendirmelerden pay alın – danışmanlık, yapay zekâ otomasyonu, gayrimenkul ve yurt dışına yerleşim koçluğu için.',
      },
      label: 'Ortaklık programı',
      hero: {
        eyebrow: 'Ortaklar · Ortaklık programı',
        title: 'Tavsiye etmek kazandırır.',
        lead: 'Yardımcı olabileceğimiz işletme sahipleri, yatırımcılar veya aileler tanıyor musunuz? Ortaklık programımızla NEXXCON-24’ü tavsiye eder, başarılı işlerden pay alırsınız – şeffaf, adil ve kendiniz satış yapmadan.',
      },
      audienceTitle: 'Program kimler için uygun',
      audience: [
        'İşletme sahipleriyle bağlantısı olan mali müşavirler, avukatlar, bankacılar ve danışmanlar',
        'Emlakçılar, mimarlar ve proje geliştiriciler',
        'Ağ kuranlar, dernekler, koçlar ve içerik üreticileri',
        'Bizi seve seve tavsiye eden memnun müşteriler',
      ],
      stepsTitle: 'Nasıl işliyor',
      steps: [
        { title: 'Tanışma', text: 'Form üzerinden bize ulaşın. Hangi bağlantıların ve konuların size uygun olduğunu kısaca konuşalım.' },
        { title: 'Anlaşma', text: 'Koşulları, süreci ve veri korumayı basit bir yazılı anlaşmayla belirleriz.' },
        { title: 'Tavsiye', text: 'Bağlantıyı siz kurarsınız – yüz yüze tanıştırarak, bir bağlantıyla ya da bize kısa bir mesajla.' },
        { title: 'Pay', text: 'İş gerçekleşirse anlaşılan ücreti alırsınız. Tavsiyenizin ne durumda olduğunu her zaman görebilirsiniz.' },
      ],
      benefitsTitle: 'Size ne kazandırır',
      benefits: [
        { title: 'Adil pay', text: 'Her başarılı yönlendirme için yazılı olarak kararlaştırılan ücret.' },
        { title: 'Satış yükü yok', text: 'Siz tavsiye edersiniz; danışmanlığı, teklifi ve uygulamayı biz üstleniriz.' },
        { title: 'İtibarınız güvende', text: 'Bağlantılarınıza gizlilikle ve kendi müşterilerimize gösterdiğimiz özenle yaklaşırız.' },
        { title: 'Dört alan', text: 'Danışmanlık, yapay zekâ otomasyonu, gayrimenkul ve yurt dışına yerleşim – pek çok ağa uygun.' },
      ],
      faq: [
        { q: 'Ücret ne kadar?', a: 'Alana ve işin kapsamına göre değişir. Kesin koşulları yüz yüze konuşur ve yazılı olarak belirleriz.' },
        { q: 'Satış yapmam gerekiyor mu?', a: 'Hayır. Sadece bağlantıyı kurarsınız. Ön görüşme, teklif ve uygulama bizde.' },
        { q: 'Bağlantılarımın verilerine ne olur?', a: 'Bağlantılarınızla yalnızca onay verirlerse iletişime geçer, verilerini gizlilik politikamıza göre işleriz.' },
      ],
      ctaTitle: 'Ortağımız olun',
      ctaText: 'Kimleri tanıdığınızı ve hangi konularla ilgilendiğinizi kısaca yazın. Size kişisel olarak dönüş yapalım.',
      ctaButton: 'Hemen ortak olun',
    },
  },
  license: {
    de: {
      seo: {
        title: 'Lizenzpartner werden · NEXXCON-24',
        description:
          'Bringen Sie NEXXCON-24-Leistungen in Ihre Region: Lizenzpartnerschaft mit erprobten Methoden, Werkzeugen und Begleitung.',
      },
      label: 'Lizenzpartner werden',
      hero: {
        eyebrow: 'Partner · Lizenzpartnerschaft',
        title: 'Ihr Geschäft. Unser System.',
        lead: 'Sie beraten bereits Unternehmen oder möchten ein eigenes Geschäft aufbauen? Als Lizenzpartner bieten Sie Leistungen von NEXXCON-24 in Ihrer Region oder Branche an – mit unseren Methoden, Werkzeugen und unserer Begleitung.',
      },
      audienceTitle: 'Für wen die Lizenz passt',
      audience: [
        'Unternehmensberater und Coaches, die ihr Angebot erweitern wollen',
        'IT-Dienstleister und Agenturen mit Kunden aus dem Mittelstand',
        'Immobilienprofis mit eigenem Netzwerk',
        'Gründer mit Branchenerfahrung und unternehmerischem Anspruch',
      ],
      stepsTitle: 'Der Weg zur Partnerschaft',
      steps: [
        { title: 'Erstgespräch', text: 'Wir lernen uns kennen und prüfen gemeinsam, ob Region, Erfahrung und Ziele zusammenpassen.' },
        { title: 'Modell festlegen', text: 'Leistungsumfang, Gebiet, Konditionen und Rechte halten wir in einem Lizenzvertrag fest.' },
        { title: 'Einarbeitung', text: 'Sie lernen unsere Methoden und Werkzeuge kennen – praxisnah und an echten Fällen.' },
        { title: 'Start und Begleitung', text: 'Sie starten mit Ihren Kunden. Wir bleiben Ihr Ansprechpartner und entwickeln das System gemeinsam weiter.' },
      ],
      benefitsTitle: 'Was Sie erhalten',
      benefits: [
        { title: 'Erprobte Methoden', text: 'Strukturierte Abläufe für Analyse, Beratung und Umsetzung.' },
        { title: 'Werkzeuge', text: 'Zum Beispiel KI-Potenzialcheck, Vorlagen und Automationen – je nach vereinbartem Modell.' },
        { title: 'Marke und Auftritt', text: 'Nutzung der Marke NEXXCON-24 im vereinbarten Rahmen.' },
        { title: 'Austausch', text: 'Regelmäßiger Austausch, Weiterbildung und Unterstützung bei schwierigen Fällen.' },
      ],
      faq: [
        { q: 'Was kostet eine Lizenz?', a: 'Das hängt vom Modell, vom Gebiet und vom Leistungsumfang ab. Konditionen besprechen wir im persönlichen Gespräch.' },
        { q: 'Brauche ich Vorerfahrung?', a: 'Erfahrung in Beratung, IT, Immobilien oder Vertrieb hilft. Entscheidend sind unternehmerisches Denken und Freude am Umgang mit Kunden.' },
        { q: 'Gibt es Gebietsschutz?', a: 'Das ist Teil der Vereinbarung und hängt vom Modell ab.' },
      ],
      ctaTitle: 'Lizenzpartnerschaft anfragen',
      ctaText: 'Erzählen Sie uns kurz von sich, Ihrer Region und Ihren Zielen. Wir melden uns für ein vertrauliches Gespräch.',
      ctaButton: 'Partnerschaft anfragen',
    },
    en: {
      seo: {
        title: 'Become a licence partner · NEXXCON-24',
        description:
          'Bring NEXXCON-24 services to your region: a licence partnership with proven methods, tools and support.',
      },
      label: 'Become a licence partner',
      hero: {
        eyebrow: 'Partners · Licence partnership',
        title: 'Your business. Our system.',
        lead: 'Do you already advise companies or want to build your own business? As a licence partner you offer NEXXCON-24 services in your region or industry – with our methods, tools and support.',
      },
      audienceTitle: 'Who the licence suits',
      audience: [
        'Business consultants and coaches who want to expand their offer',
        'IT service providers and agencies with SME clients',
        'Real estate professionals with their own network',
        'Founders with industry experience and entrepreneurial ambition',
      ],
      stepsTitle: 'The path to partnership',
      steps: [
        { title: 'Initial call', text: 'We get to know each other and check together whether region, experience and goals fit.' },
        { title: 'Define the model', text: 'Scope, territory, terms and rights are set out in a licence agreement.' },
        { title: 'Onboarding', text: 'You learn our methods and tools – hands-on and with real cases.' },
        { title: 'Launch and support', text: 'You start with your clients. We remain your contact and develop the system further together.' },
      ],
      benefitsTitle: 'What you receive',
      benefits: [
        { title: 'Proven methods', text: 'Structured processes for analysis, advice and implementation.' },
        { title: 'Tools', text: 'For example the AI potential check, templates and automations – depending on the agreed model.' },
        { title: 'Brand and presence', text: 'Use of the NEXXCON-24 brand within the agreed scope.' },
        { title: 'Exchange', text: 'Regular exchange, training and support with difficult cases.' },
      ],
      faq: [
        { q: 'What does a licence cost?', a: 'It depends on the model, territory and scope. We discuss terms in a personal conversation.' },
        { q: 'Do I need prior experience?', a: 'Experience in consulting, IT, real estate or sales helps. What matters most is entrepreneurial thinking and enjoying working with clients.' },
        { q: 'Is there territorial protection?', a: 'That is part of the agreement and depends on the model.' },
      ],
      ctaTitle: 'Enquire about a licence partnership',
      ctaText: 'Tell us briefly about yourself, your region and your goals. We will get in touch for a confidential conversation.',
      ctaButton: 'Enquire now',
    },
    tr: {
      seo: {
        title: 'Lisans ortağı olun · NEXXCON-24',
        description:
          'NEXXCON-24 hizmetlerini bölgenize taşıyın: denenmiş yöntemler, araçlar ve destekle lisans ortaklığı.',
      },
      label: 'Lisans ortağı olun',
      hero: {
        eyebrow: 'Ortaklar · Lisans ortaklığı',
        title: 'Sizin işiniz. Bizim sistemimiz.',
        lead: 'Şirketlere zaten danışmanlık mı veriyorsunuz ya da kendi işinizi mi kurmak istiyorsunuz? Lisans ortağı olarak NEXXCON-24 hizmetlerini bölgenizde veya sektörünüzde sunarsınız – yöntemlerimiz, araçlarımız ve desteğimizle.',
      },
      audienceTitle: 'Lisans kimler için uygun',
      audience: [
        'Hizmetlerini genişletmek isteyen işletme danışmanları ve koçlar',
        'KOBİ müşterileri olan BT hizmet sağlayıcıları ve ajanslar',
        'Kendi ağı olan gayrimenkul profesyonelleri',
        'Sektör deneyimi ve girişimci hedefleri olan kurucular',
      ],
      stepsTitle: 'Ortaklığa giden yol',
      steps: [
        { title: 'Ön görüşme', text: 'Tanışır, bölgenin, deneyimin ve hedeflerin uyuşup uyuşmadığını birlikte değerlendiririz.' },
        { title: 'Modeli belirleme', text: 'Hizmet kapsamını, bölgeyi, koşulları ve hakları bir lisans sözleşmesiyle belirleriz.' },
        { title: 'Eğitim', text: 'Yöntemlerimizi ve araçlarımızı gerçek vakalar üzerinden, uygulamalı olarak öğrenirsiniz.' },
        { title: 'Başlangıç ve destek', text: 'Müşterilerinizle çalışmaya başlarsınız. Muhatabınız olmaya ve sistemi birlikte geliştirmeye devam ederiz.' },
      ],
      benefitsTitle: 'Neler alırsınız',
      benefits: [
        { title: 'Denenmiş yöntemler', text: 'Analiz, danışmanlık ve uygulama için yapılandırılmış süreçler.' },
        { title: 'Araçlar', text: 'Örneğin yapay zekâ potansiyel testi, şablonlar ve otomasyonlar – anlaşılan modele göre.' },
        { title: 'Marka ve görünürlük', text: 'NEXXCON-24 markasının kararlaştırılan çerçevede kullanımı.' },
        { title: 'Bilgi alışverişi', text: 'Düzenli görüş alışverişi, eğitim ve zor vakalarda destek.' },
      ],
      faq: [
        { q: 'Lisansın maliyeti nedir?', a: 'Modele, bölgeye ve hizmet kapsamına göre değişir. Koşulları yüz yüze görüşmede konuşuruz.' },
        { q: 'Deneyim gerekli mi?', a: 'Danışmanlık, BT, gayrimenkul veya satış deneyimi faydalıdır. Asıl önemli olan girişimci bakış açısı ve müşterilerle çalışmaktan keyif almaktır.' },
        { q: 'Bölge koruması var mı?', a: 'Bu, anlaşmanın bir parçasıdır ve modele göre değişir.' },
      ],
      ctaTitle: 'Lisans ortaklığı için başvurun',
      ctaText: 'Bize kısaca kendinizden, bölgenizden ve hedeflerinizden bahsedin. Gizli bir görüşme için size ulaşalım.',
      ctaButton: 'Hemen başvurun',
    },
  },
  investors: {
    de: {
      seo: {
        title: 'Investor Relations · NEXXCON-24',
        description:
          'Investor Relations bei NEXXCON-24: Ansprechpartner für Investoren, Co-Investments und strategische Partnerschaften.',
      },
      label: 'Investor Relations',
      hero: {
        eyebrow: 'Partner · Investor Relations',
        title: 'Gemeinsam wachsen.',
        lead: 'NEXXCON-24 verbindet Unternehmensberatung, KI-Automation und Immobilien in einem internationalen Netzwerk. Für Investoren, Family Offices und strategische Partner sind wir der direkte Ansprechpartner – vertraulich und persönlich.',
      },
      audienceTitle: 'Für wen diese Seite gedacht ist',
      audience: [
        'Private Investoren und Family Offices',
        'Strategische Partner für gemeinsame Projekte',
        'Co-Investoren für ausgewählte Immobilien- und Off-Market-Projekte',
        'Business Angels mit Interesse an KI und Digitalisierung',
      ],
      stepsTitle: 'So gehen wir vor',
      steps: [
        { title: 'Kontakt', text: 'Sie schildern uns kurz Ihr Interesse, Ihren Fokus und Ihren zeitlichen Rahmen.' },
        { title: 'Vertraulichkeit', text: 'Vor dem Austausch sensibler Informationen vereinbaren wir bei Bedarf eine Vertraulichkeitserklärung (NDA).' },
        { title: 'Gespräch', text: 'Wir stellen Ihnen passende Vorhaben, Strukturen und Ansprechpartner persönlich vor.' },
        { title: 'Prüfung', text: 'Sie erhalten die Unterlagen für Ihre eigene Prüfung. Entscheidungen treffen Sie mit Ihren Beratern.' },
      ],
      benefitsTitle: 'Was Sie erwarten können',
      benefits: [
        { title: 'Direkter Draht', text: 'Persönlicher Ansprechpartner statt anonymer Plattform.' },
        { title: 'Vertraulichkeit', text: 'Diskreter Umgang mit Ihren Daten und Interessen.' },
        { title: 'Netzwerk', text: 'Zugang zu unserem Netzwerk in DACH, der Türkei, Zypern und den Emiraten.' },
        { title: 'Transparenz', text: 'Offene Kommunikation über Chancen und Risiken.' },
      ],
      faq: [
        { q: 'Welche Beteiligungsmöglichkeiten gibt es?', a: 'Das hängt vom jeweiligen Vorhaben ab. Konkrete Möglichkeiten besprechen wir ausschließlich im persönlichen Gespräch.' },
        { q: 'Gibt es öffentliche Unterlagen?', a: 'Nein. Informationen geben wir nach einem ersten Gespräch und gegebenenfalls einer Vertraulichkeitsvereinbarung weiter.' },
        { q: 'Werden Renditen zugesagt?', a: 'Nein. Jede Investition ist mit Risiken verbunden, bis hin zum Totalverlust. Bitte lassen Sie sich unabhängig beraten.' },
      ],
      ctaTitle: 'Kontakt zu Investor Relations',
      ctaText: 'Schreiben Sie uns vertraulich. Wir melden uns persönlich.',
      ctaButton: 'Vertraulich anfragen',
      note: 'Hinweis: Diese Seite dient ausschließlich der Kontaktaufnahme. Sie ist kein öffentliches Angebot und keine Aufforderung zum Erwerb von Wertpapieren, Vermögensanlagen oder Beteiligungen und keine Anlageberatung.',
    },
    en: {
      seo: {
        title: 'Investor relations · NEXXCON-24',
        description:
          'Investor relations at NEXXCON-24: your contact for investors, co-investments and strategic partnerships.',
      },
      label: 'Investor relations',
      hero: {
        eyebrow: 'Partners · Investor relations',
        title: 'Growing together.',
        lead: 'NEXXCON-24 combines business consulting, AI automation and real estate in an international network. For investors, family offices and strategic partners we are the direct contact – confidential and personal.',
      },
      audienceTitle: 'Who this page is for',
      audience: [
        'Private investors and family offices',
        'Strategic partners for joint projects',
        'Co-investors for selected real estate and off-market projects',
        'Business angels interested in AI and digitalisation',
      ],
      stepsTitle: 'How we proceed',
      steps: [
        { title: 'Contact', text: 'You briefly tell us about your interest, focus and time frame.' },
        { title: 'Confidentiality', text: 'Before sharing sensitive information we sign a non-disclosure agreement (NDA) if required.' },
        { title: 'Conversation', text: 'We personally present suitable projects, structures and contacts.' },
        { title: 'Review', text: 'You receive the documents for your own due diligence. You make decisions with your advisors.' },
      ],
      benefitsTitle: 'What you can expect',
      benefits: [
        { title: 'Direct line', text: 'A personal contact instead of an anonymous platform.' },
        { title: 'Confidentiality', text: 'Discreet handling of your data and interests.' },
        { title: 'Network', text: 'Access to our network in the DACH region, Türkiye, Cyprus and the Emirates.' },
        { title: 'Transparency', text: 'Open communication about opportunities and risks.' },
      ],
      faq: [
        { q: 'What investment options are there?', a: 'That depends on the project. We only discuss specific options in a personal conversation.' },
        { q: 'Are there public documents?', a: 'No. We share information after an initial conversation and, if needed, a confidentiality agreement.' },
        { q: 'Are returns promised?', a: 'No. Every investment carries risks, up to total loss. Please seek independent advice.' },
      ],
      ctaTitle: 'Contact investor relations',
      ctaText: 'Write to us confidentially. We will get back to you personally.',
      ctaButton: 'Enquire confidentially',
      note: 'Note: This page is for contact purposes only. It is not a public offer or solicitation to acquire securities, investments or shareholdings, and it is not investment advice.',
    },
    tr: {
      seo: {
        title: 'Yatırımcı ilişkileri · NEXXCON-24',
        description:
          'NEXXCON-24 yatırımcı ilişkileri: yatırımcılar, ortak yatırımlar ve stratejik ortaklıklar için muhatabınız.',
      },
      label: 'Yatırımcı ilişkileri',
      hero: {
        eyebrow: 'Ortaklar · Yatırımcı ilişkileri',
        title: 'Birlikte büyüyelim.',
        lead: 'NEXXCON-24; işletme danışmanlığını, yapay zekâ otomasyonunu ve gayrimenkulü uluslararası bir ağda bir araya getirir. Yatırımcılar, aile ofisleri ve stratejik ortaklar için doğrudan muhatabız – gizlilikle ve birebir.',
      },
      audienceTitle: 'Bu sayfa kimler için',
      audience: [
        'Bireysel yatırımcılar ve aile ofisleri',
        'Ortak projeler için stratejik ortaklar',
        'Seçili gayrimenkul ve off-market projeler için ortak yatırımcılar',
        'Yapay zekâ ve dijitalleşmeyle ilgilenen melek yatırımcılar',
      ],
      stepsTitle: 'Nasıl ilerliyoruz',
      steps: [
        { title: 'İletişim', text: 'İlginizi, odağınızı ve zaman planınızı bize kısaca anlatırsınız.' },
        { title: 'Gizlilik', text: 'Hassas bilgileri paylaşmadan önce gerekirse bir gizlilik sözleşmesi (NDA) imzalarız.' },
        { title: 'Görüşme', text: 'Uygun projeleri, yapıları ve muhatapları size birebir tanıtırız.' },
        { title: 'İnceleme', text: 'Kendi incelemeniz için belgeleri alırsınız. Kararları danışmanlarınızla birlikte verirsiniz.' },
      ],
      benefitsTitle: 'Neler bekleyebilirsiniz',
      benefits: [
        { title: 'Doğrudan iletişim', text: 'Anonim bir platform yerine kişisel bir muhatap.' },
        { title: 'Gizlilik', text: 'Verilerinize ve ilgi alanlarınıza özenli yaklaşım.' },
        { title: 'Ağ', text: 'DACH bölgesi, Türkiye, Kıbrıs ve Emirlikler’deki ağımıza erişim.' },
        { title: 'Şeffaflık', text: 'Fırsatlar ve riskler hakkında açık iletişim.' },
      ],
      faq: [
        { q: 'Hangi yatırım olanakları var?', a: 'Bu, ilgili projeye bağlıdır. Somut olanakları yalnızca yüz yüze görüşmede konuşuruz.' },
        { q: 'Herkese açık belgeler var mı?', a: 'Hayır. Bilgileri ilk görüşmeden ve gerekirse bir gizlilik sözleşmesinden sonra paylaşırız.' },
        { q: 'Getiri garantisi veriliyor mu?', a: 'Hayır. Her yatırım, sermayenin tamamen kaybına kadar varan riskler taşır. Lütfen bağımsız danışmanlık alın.' },
      ],
      ctaTitle: 'Yatırımcı ilişkileriyle iletişime geçin',
      ctaText: 'Bize gizlilikle yazın. Size kişisel olarak dönüş yapalım.',
      ctaButton: 'Gizli başvuru yapın',
      note: 'Not: Bu sayfa yalnızca iletişim amaçlıdır. Menkul kıymet, yatırım ürünü veya iştirak edinmeye yönelik kamuya açık bir teklif ya da davet değildir ve yatırım danışmanlığı niteliği taşımaz.',
    },
  },
};
