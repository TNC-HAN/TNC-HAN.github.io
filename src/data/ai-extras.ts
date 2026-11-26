/**
 * Zusatzinhalte der Seite „IT- & KI-Automation“: aufklappbare Erklärungen zu
 * „Für wen“ (je Zielgruppe) und „Unser Ansatz“ (je Grundsatz) sowie Bedienhinweise.
 * Reihenfolge = Reihenfolge von services.ai.audience.items bzw. approach.points.
 */
import type { Lang } from '@/config/routes';

export interface AiExtras {
  tilesHint: string;
  showDetails: string;
  hideDetails: string;
  audience: string[];
  approach: string[];
}

export const aiExtras: Record<Lang, AiExtras> = {
  de: {
    tilesHint: 'Kachel anklicken – die Details öffnen sich direkt darunter.',
    showDetails: 'Details anzeigen',
    hideDetails: 'Details schließen',
    audience: [
      'Angebote schreiben, Daten übertragen, E-Mails sortieren: Solche Routinen laufen nach festen Regeln ab und lassen sich deshalb gut automatisieren. Ihr Team gewinnt jede Woche Stunden für Kunden und Kerngeschäft zurück.',
      'Ein KI-Assistent beantwortet Standardfragen rund um die Uhr, qualifiziert Anfragen vor und übergibt nur die wichtigen Fälle an Ihr Team – mit allen Infos, die Sie für die Antwort brauchen.',
      'Exposés, Verträge, Protokolle und Gutachten: KI liest, ordnet und fasst zusammen, erstellt Entwürfe aus Ihren Vorlagen und findet Informationen in Sekunden statt in Stunden.',
      'Sie wollen KI nutzen, aber ohne Blindflug? Wir schaffen Klarheit über Nutzen, Kosten, Risiken und Datenschutz und führen KI Schritt für Schritt ein, mit klaren Regeln für Ihr Team.',
    ],
    approach: [
      'Wir starten mit einem klar umrissenen Anwendungsfall, der schnell Wirkung zeigt. Erst wenn der Nutzen messbar ist – eingesparte Stunden, schnellere Antworten, weniger Fehler –, bauen wir weiter aus.',
      'Datenschutz ist kein Nachtrag: Wir prüfen Datenflüsse, wählen passende Anbieter und Serverstandorte, halten Auftragsverarbeitung und Zugriffsrechte sauber fest und dokumentieren jede Lösung nachvollziehbar.',
      'Gute Werkzeuge allein reichen nicht. Wir schulen Ihr Team praxisnah, erstellen verständliche Leitfäden und bleiben ansprechbar, damit die Lösungen im Alltag wirklich genutzt werden.',
    ],
  },
  en: {
    tilesHint: 'Click a tile – the details open right below.',
    showDetails: 'Show details',
    hideDetails: 'Close details',
    audience: [
      'Writing quotes, moving data, sorting emails: routines like these follow fixed rules, which makes them easy to automate. Your team wins back hours every week for customers and core business.',
      'An AI assistant answers standard questions around the clock, pre-qualifies enquiries and passes only the important cases to your team, with everything needed to reply.',
      'Brochures, contracts, minutes and reports: AI reads, sorts and summarises, drafts documents from your templates and finds information in seconds instead of hours.',
      'You want to use AI, but not blindly? We bring clarity on benefits, costs, risks and data protection and introduce AI step by step, with clear rules for your team.',
    ],
    approach: [
      'We start with one clearly defined use case that shows results quickly. Only when the benefit is measurable (hours saved, faster replies, fewer errors) do we expand further.',
      'Data protection is not an afterthought: we check data flows, choose suitable providers and server locations, put processing agreements and access rights in order and document every solution transparently.',
      'Good tools alone are not enough. We train your team hands-on, write clear guidelines and stay available, so the solutions are actually used day to day.',
    ],
  },
  tr: {
    tilesHint: 'Bir kutucuğa tıklayın – ayrıntılar hemen altında açılır.',
    showDetails: 'Ayrıntıları göster',
    hideDetails: 'Ayrıntıları kapat',
    audience: [
      'Teklif yazmak, veri aktarmak, e-postaları ayıklamak: Bu tür rutin işler belli kurallara göre ilerlediği için kolayca otomatikleştirilebilir. Ekibiniz her hafta müşterilere ve asıl işe ayıracağı saatleri geri kazanır.',
      'Bir yapay zekâ asistanı standart soruları günün her saatinde cevaplar, talepleri ön elemeden geçirir ve yalnızca önemli durumları, cevap için gereken tüm bilgilerle ekibinize iletir.',
      'Tanıtım dosyaları, sözleşmeler, tutanaklar ve raporlar: Yapay zekâ belgeleri okur, düzenler ve özetler, şablonlarınızdan taslak hazırlar, aradığınız bilgiyi saatler yerine saniyeler içinde bulur.',
      'Yapay zekâyı kullanmak istiyor ama körü körüne ilerlemek istemiyor musunuz? Fayda, maliyet, risk ve veri koruma konularını netleştiriyor, yapay zekâyı ekibiniz için açık kurallarla adım adım devreye alıyoruz.',
    ],
    approach: [
      'Hızla sonuç veren, sınırları net tek bir kullanım senaryosuyla başlıyoruz. Fayda ölçülebilir hâle geldiğinde – kazanılan saatler, daha hızlı cevaplar, daha az hata – kapsamı genişletiyoruz.',
      'Veri koruma sonradan akla gelen bir konu değil: Veri akışlarını inceliyor, uygun sağlayıcıları ve sunucu konumlarını seçiyor, veri işleme sözleşmelerini ve erişim yetkilerini düzenliyor, her çözümü şeffaf biçimde belgeliyoruz.',
      'İyi araçlar tek başına yetmez. Ekibinizi uygulamalı olarak eğitiyor, anlaşılır kılavuzlar hazırlıyor ve ulaşılabilir kalıyoruz; böylece çözümler günlük işte gerçekten kullanılır.',
    ],
  },
};
