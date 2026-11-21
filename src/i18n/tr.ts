import type { Dictionary } from './types';

/** Türkçe metinler. Yapı: types.ts */
export const tr: Dictionary = {
  meta: {
    htmlLang: 'tr-TR',
    ogLocale: 'tr_TR',
    languageName: 'Türkçe',
    legalNote:
      'Bu sayfa Alman hukuku gereği Almanca olarak sunulmaktadır. Hukuken bağlayıcı olan Almanca metindir.',
  },
  nav: {
    home: 'Ana sayfa',
    services: 'Hizmetler',
    about: 'Hakkımızda',
    contact: 'İletişim',
    cta: 'Ön görüşme',
    menu: 'Menü',
    skip: 'İçeriğe geç',
    language: 'Dil seçin',
    primary: 'Ana menü',
  },
  common: {
    learnMore: 'Detaylı bilgi',
    pause: 'Animasyonu durdur',
    play: 'Animasyonu sürdür',
    previous: 'Önceki alan',
    next: 'Sonraki alan',
    slide: 'Alan',
    phone: 'Telefon',
    email: 'E-posta',
    whatsapp: 'WhatsApp',
    booking: 'Online randevu alın',
    bookingPending:
      'Online randevu sistemi yakında hizmetinizde – o zamana kadar telefon, e-posta veya WhatsApp ile bize ulaşabilirsiniz.',
    whatsappMessage: 'Merhaba, NEXXCON-24 ile gizli bir ön görüşme yapmak istiyorum.',
    riskTitle: 'Risk uyarısı',
    faqTitle: 'Sıkça sorulan sorular',
    placeholderNote: 'Yer tutucu – yayından önce değiştirin',
    backHome: 'Ana sayfaya dön',
    breadcrumbHome: 'Ana sayfa',
  },

  launcher: {
    phoneTitle: 'Hangi uygulamayla aramak istersiniz?',
    phoneLead: 'Telefon uygulamanızı seçin. Akıllı telefonda doğrudan telefon uygulaması açılır.',
    emailTitle: 'Hangi uygulamayla yazmak istersiniz?',
    emailLead:
      'E-posta programınızı seçin. Akıllı telefonda doğrudan varsayılan e-posta uygulamanız açılır.',
    defaultPhone: 'Varsayılan telefon uygulaması',
    defaultPhoneHint: 'ör. Telefon Bağlantısı, CRM veya çağrı merkezi arayıcısı',
    defaultEmail: 'Varsayılan e-posta programı',
    defaultEmailHint: 'ör. Outlook, Apple Mail, Thunderbird, eM Client',
    sipHint: '3CX, MicroSIP, Zoiper, sipgate, Placetel …',
    calltoHint: 'Power dialer ve CRM telefonu (callto)',
    macOnly: 'yalnızca Mac / iPhone',
    browserHint: 'tarayıcıda açılır',
    copyHint: 'posta kutusu açılır, adres kopyalanır',
    copyNumber: 'Numarayı kopyala',
    copyAddress: 'Adresi kopyala',
    copied: 'Panoya kopyalandı',
    remember: 'Seçimimi bu cihazda hatırla',
    change: 'Başka bir program seç',
    close: 'Kapat',
    notOpened: 'Hiçbir program açılmadı mı?',
    chooseOther: 'Başkasını seç',
    emailSubject: 'NEXXCON-24 web sitesi üzerinden talep',
  },

  home: {
    seo: {
      title: 'NEXXCON-24 · İşletme Danışmanlığı, Off-Market Gayrimenkul ve Yapay Zekâ Otomasyonu',
      description:
        'KOBİ’ler için işletme danışmanlığı ve koçluk; D-A-CH, Avrupa, Türkiye ve Kuzey Kıbrıs’ta off-market ve yatırım gayrimenkulleri; yapay zekâ otomasyonu ve yurt dışına yerleşim koçluğu – kişisel, gizli, tek elden.',
    },
    hero: {
      eyebrow: 'Business · Real Estate · Intelligence',
      title: 'Değer yaratan kararlar için',
      titleAccent: 'netlik.',
      lead: 'NEXXCON-24; girişimcilere, yatırımcılara ve aile ofislerine özün önemli olduğu yerde eşlik eder: şirketin stratejik yönünde, gizli gayrimenkul yatırımında, yapay zekâ ile otomasyonda ve yurt dışında yeni bir başlangıçta.',
      primary: 'Gizli ön görüşme',
      secondary: 'Hizmetleri görün',
      trust: [
        'Ücretsiz ve bağlayıcı değil',
        'Çağrı merkezi değil, kişisel',
        'Gizlilik standarttır',
      ],
    },
    marquee: [
      'KOBİ stratejisi',
      'Girişimciler için koçluk',
      'Devir ve M&A',
      'Off-market gayrimenkul',
      'Yatırım gayrimenkulü',
      'D-A-CH',
      'Avrupa',
      'Türkiye',
      'Kuzey Kıbrıs',
      'Yapay zekâ otomasyonu',
      'Yapay zekâ asistanları',
      'Yerleşim koçluğu',
      'Aile ofisleri',
    ],
    areas: {
      eyebrow: 'İş alanları',
      title: 'Dört disiplin. Tek muhatap.',
      lead: 'İşletme, gayrimenkul, teknoloji ve yaşam planlaması, klasik danışmanlığın yansıttığından çok daha iç içedir. Biz bunları birlikte düşünür – sunum yerine sonuç teslim ederiz.',
    },
    process: {
      eyebrow: 'Çalışma şeklimiz',
      title: 'İlk görüşmeden uygulamaya.',
      lead: 'Dört adımlık net bir süreç – şeffaf, bağlayıcı ve her an izlenebilir.',
      steps: [
        {
          title: 'Ön görüşme',
          text: 'Gizli ve ücretsiz: Dinler, mevcut durumunuzu anlar ve sizin için gerçekten neyin önemli olduğunu netleştiririz.',
        },
        {
          title: 'Analiz',
          text: 'Rakamlar, piyasa, süreçler ve riskler – titizlikle incelenir ve gerçekleri bir bakışta görebileceğiniz şekilde hazırlanır.',
        },
        {
          title: 'Strateji',
          text: 'Seçenekler, efor, takvim ve sonraki üç adımı içeren somut bir öneri.',
        },
        {
          title: 'Uygulama',
          text: 'Uygulamada yanınızdayız, ortakları ve uzmanları koordine eder, hedefe kadar sabit muhatabınız oluruz.',
        },
      ],
    },
    why: {
      eyebrow: 'Neden NEXXCON-24',
      title: 'Duruşu olan danışmanlık.',
      lead: 'Bizimle çalışmayı nereden tanırsınız – ve bizi neyle ölçebilirsiniz.',
      items: [
        {
          title: 'Girişimci bakış açısı',
          text: 'Sanki kendi sermayemiz söz konusuymuş gibi danışmanlık yaparız: pragmatik, rakamlara dayalı ve rahatsız edici gerçekleri de söyleme cesaretiyle.',
        },
        {
          title: 'Portalların ötesinde erişim',
          text: 'Onlarca yılda kişisel olarak büyüyen bir ağdan off-market mülkler, yatırımcılar ve fırsatlar.',
        },
        {
          title: 'Sınırların ötesinde evinde',
          text: 'D-A-CH, Avrupa, Türkiye ve Kuzey Kıbrıs – dil bilgisi, kültürel anlayış ve yerinde ortaklarla.',
        },
        {
          title: 'Kaldıraç olarak teknoloji',
          text: 'Yapay zekâ ve otomasyon, zamanı, maliyeti ve hataları belirgin şekilde azalttığı yerde – asla kendi başına amaç olarak değil.',
        },
      ],
    },
    regions: {
      eyebrow: 'Pazarlar',
      title: 'Sizin için aktif olduğumuz yerler.',
      lead: 'Dört pazarda yatırım gayrimenkulleri ve işletme projeleri – yerel bilgi, kişisel ilişkiler ve her şey için tek muhatapla.',
      items: [
        {
          title: 'D-A-CH',
          text: 'Almanya, Avusturya, İsviçre: sağlam temelli konut ve ticari binalar, portföyler ve projeler.',
        },
        {
          title: 'Avrupa',
          text: 'İstikrarlı koşullara, sağlam talebe ve gelişim potansiyeline sahip seçilmiş konumlar.',
        },
        {
          title: 'Türkiye',
          text: 'İstanbul’dan Türk Rivierası’na – penthouse’tan deniz kenarındaki villaya, tapuya kadar destek.',
        },
        {
          title: 'Kuzey Kıbrıs',
          text: 'Yeni ve mevcut Akdeniz gayrimenkulleri – İspanya ve Dubai’ye gerçek bir alternatif.',
        },
      ],
    },
    faq: {
      eyebrow: 'SSS',
      title: 'Sık sorulan sorular.',
      items: [
        {
          q: 'NEXXCON-24 kimler için doğru ortaktır?',
          a: 'Küçük ve orta ölçekli şirketlerin sahipleri ve yöneticileri, bireysel ve kurumsal yatırımcılar, aile ofisleri ve yurt dışında yeni bir başlangıç planlayanlar için – tek elden danışmanlığa ihtiyaç duyulan her yerde.',
        },
        {
          q: 'Ön görüşmenin maliyeti nedir?',
          a: 'Hiçbir şey. Ön görüşme ücretsiz ve bağlayıcı değildir. Ardından size yardımcı olup olamayacağımıza ve bunun somut olarak ne anlama geldiğine dair dürüst bir değerlendirme alırsınız.',
        },
        {
          q: 'Off-market ne demektir?',
          a: 'Off-market gayrimenkuller portallarda kamuya açık sunulmaz, kişisel ağlar üzerinden gizlilikle aracılık edilir. Bu, satıcıların mahremiyetini korur ve alıcılara daha az rekabetle fırsatlar sunar.',
        },
        {
          q: 'Uluslararası da çalışıyor musunuz?',
          a: 'Evet. D-A-CH bölgesinin yanı sıra Avrupa, Türkiye ve Kuzey Kıbrıs’taki yatırım ve projelere, ayrıca ABD ve Dubai’ye kadar yerleşim planlarına eşlik ediyoruz – Almanca, İngilizce ve Türkçe.',
        },
        {
          q: 'Yapay zekâ bir şirkette ne kadar hızlı kullanılabilir?',
          a: 'İlk otomasyonlar çoğu zaman birkaç hafta içinde verimli hale gelir. Düşük riskle en büyük faydanın nerede olduğunu analiz ederek başlar, oradan adım adım genişletiriz.',
        },
      ],
    },
    cta: {
      eyebrow: 'Sonraki adım',
      title: 'Planınız hakkında konuşalım.',
      text: 'Durumunuzu kısaca anlatın. Dürüst bir değerlendirme alırsınız – gizli, eşit düzeyde ve bağlayıcı olmadan.',
      reassurance: 'Size bizzat geri dönüş yapacağız.',
    },
  },

  services: {
    consulting: {
      seo: {
        title: 'KOBİ’ler için İşletme Danışmanlığı, Koçluk ve Consulting · NEXXCON-24',
        description:
          'Küçük ve orta ölçekli şirketlerin sahipleri ve yöneticileri için strateji, büyüme, finansman, devir ve koçluk – pragmatik, rakamlara dayalı ve uzun vadeli başarıya yönelik.',
      },
      label: 'Koçluk ve Danışmanlık',
      card: {
        title: 'İşletme danışmanlığı, koçluk ve consulting',
        text: 'KOBİ’ler için stratejik destek – yeniden yapılanmadan büyümeye ve finansmandan devre kadar.',
        points: [
          'Strateji ve iş modeli',
          'Büyüme ve süreçler',
          'Girişimciler için koçluk',
          'Devir, M&A, çıkış',
        ],
      },
      slide: {
        kicker: '01 · Consulting',
        title: 'Günlük işte de işleyen strateji.',
        text: 'Orta ölçekli şirketlerin sahipleri ve yöneticileri için danışmanlık ve koçluk.',
      },
      hero: {
        eyebrow: '01 · İşletme danışmanlığı, koçluk ve consulting',
        title: 'Günlük işte de işleyen strateji.',
        lead: 'Küçük ve orta ölçekli şirketlerin çekmecede kalacak konseptlere ihtiyacı yoktur. Net önceliklere, güvenilir rakamlara ve sorumluluk alan bir sparring ortağına ihtiyaçları vardır – bugün sonraki adımlar için, yarın şirketinizin uzun vadeli güvencesi için.',
      },
      offerings: {
        eyebrow: 'Hizmetler',
        title: 'Şirketiniz için yaptıklarımız.',
        items: [
          {
            title: 'Strateji ve iş modeli',
            text: 'Konumlandırmayı keskinleştirmek, pazarları değerlendirmek ve iş modelini beş yıl sonra da işleyecek şekilde kurmak.',
          },
          {
            title: 'Büyüme ve genişleme',
            text: 'Yeni pazarları, lokasyonları, ürünleri ve satış kanallarını iş planı ve kilometre taşlarıyla yapılandırılmış şekilde açmak.',
          },
          {
            title: 'Süreçler ve organizasyon',
            text: 'İş akışlarını sadeleştirmek, sorumlulukları netleştirmek, maliyetleri düşürmek – ve iyileştirmeleri kalıcı kılmak.',
          },
          {
            title: 'Finansman ve sermaye',
            text: 'İş planı ve projeksiyonlar hazırlamak, banka ve yatırımcı görüşmelerine hazırlanmak, sermaye erişimini yapılandırmak.',
          },
          {
            title: 'Girişimciler için koçluk',
            text: 'Liderlik, kararlar ve kişisel etkililik için gizli sparring – eşit düzeyde.',
          },
          {
            title: 'Devir, M&A ve çıkış',
            text: 'Şirket satışı, alımı veya devri – yapılandırılmış şekilde hazırlanmış, gerçekçi değerlenmiş, gizlilikle yürütülmüş.',
          },
        ],
      },
      audience: {
        eyebrow: 'Kimler için',
        title: 'Geleceği şekillendirmek isteyen girişimciler için.',
        items: [
          'Küçük ve orta ölçekli şirketlerin sahipleri ve yöneticileri',
          'Kuşak değişimi öncesindeki aile şirketleri',
          'Bir sonraki adım öncesindeki kurucular ve büyüme şirketleri',
          'İştiraklerini yapılandırılmış şekilde yönetmek isteyen yatırımcılar',
        ],
      },
      approach: {
        eyebrow: 'Yaklaşımımız',
        title: 'Sunum değil, uygulama.',
        text: 'Az sayıda etkili kaldıraç ve ölçülebilir ara hedeflerle çalışırız. Şirketiniz üzerindeki kontrol her zaman sizde kalır – biz hızı, yapıyı ve planların sonuca dönüşmesini sağlarız.',
        points: [
          'İlk görüşmeden itibaren net öncelikler',
          'Sabit, kişisel muhatap',
          'Şeffaf efor ve maliyetler',
        ],
      },
      faq: [
        {
          q: 'Tipik bir danışmanlık projesi ne kadar sürer?',
          a: 'Birkaç günlük kompakt bir strateji atölyesinden birkaç aylık bir eşlik sürecine kadar. Kapsam, süre ve bütçeyi ön görüşmeden sonra birlikte ve bağlayıcı şekilde belirleriz.',
        },
        {
          q: 'Koçluk ile danışmanlık arasındaki fark nedir?',
          a: 'Danışmanlık şirket için analiz, konsept ve uygulama sunar. Koçluk ise sizi girişimci olarak kişisel düzeyde güçlendirir – liderlikte, kararlarda ve öz organizasyonda. İkisi anlamlı şekilde birleştirilebilir.',
        },
      ],
      cta: {
        title: 'Şirketiniz on iki ay sonra nerede olacak?',
        text: 'Gizli bir ön görüşmede şirketinizi kısa vadede ileriye taşıyacak ve uzun vadede güvence altına alacak kaldıraçları birlikte belirleyelim.',
      },
    },

    realEstate: {
      seo: {
        title:
          'Off-Market ve Yatırım Gayrimenkulleri · D-A-CH, Avrupa, Türkiye, Kuzey Kıbrıs · NEXXCON-24',
        description:
          'Almanya, Avusturya, İsviçre, Avrupa, Türkiye ve Kuzey Kıbrıs’ta off-market ve yatırım gayrimenkullerine gizli erişim – analiz, due diligence ve kapanışa kadar destekle.',
      },
      label: 'Gayrimenkul ve Yatırım',
      card: {
        title: 'Gayrimenkul danışmanlığı – off-market ve yatırım',
        text: 'D-A-CH, Avrupa, Türkiye ve Kuzey Kıbrıs’ta yatırım gayrimenkullerine ayrıcalıklı erişim – gizli, incelenmiş, kişisel destekli.',
        points: [
          'Off-market erişim',
          'Yatırım ve konum analizi',
          'Due diligence ve destek',
          'Uluslararası pazarlar',
        ],
      },
      slide: {
        kicker: '02 · Real Estate',
        title: 'Herkesin göremediği gayrimenkuller.',
        text: 'D-A-CH, Avrupa, Türkiye ve Kuzey Kıbrıs’ta off-market ve yatırım gayrimenkulleri.',
      },
      hero: {
        eyebrow: '02 · Gayrimenkul danışmanlığı – off-market ve yatırım',
        title: 'Herkesin göremediği gayrimenkuller.',
        lead: 'En iyi fırsatlar nadiren portallarda görünür. Yatırımcıları off-market ve yatırım gayrimenkulleriyle gizlilikle buluşturur, zaman ve sermaye ayırmadan önce her fırsatı inceler – ve kendi mülklerinizi doğru alıcılara hedefli şekilde konumlandırırız.',
      },
      offerings: {
        eyebrow: 'Hizmetler',
        title: 'Arama profilinden kapanışa.',
        items: [
          {
            title: 'Off-market erişim',
            text: 'Kişisel ağlardan seçkin mülkler ve yatırımcılar – piyasa görmeden önce, gizlilikle.',
          },
          {
            title: 'Yatırım analizi',
            text: 'Konum, getiri, maliyetler, finansman ve değer gelişimi – anlaşılır şekilde hesaplanmış ve değerlendirilmiş.',
          },
          {
            title: 'Due diligence',
            text: 'Belgeler, yapı durumu, kira sözleşmeleri ve kârlılık – bilirkişiler ve uzman ortaklarla birlikte incelenmiş.',
          },
          {
            title: 'Kamuya açık olmadan satış',
            text: 'Gerçekçi değerleme ve doğrulanmış alıcılara hedefli konumlandırma ile en yüksek gelir – portal ilanı olmadan.',
          },
          {
            title: 'Uluslararası yatırımlar',
            text: 'Türkiye ve Kuzey Kıbrıs: konum ve incelemeden tapu devrine ve anahtar teslimine kadar.',
          },
          {
            title: 'Portföy ve strateji',
            text: 'Servet ve şirket stratejinizin temel yapı taşı olarak gayrimenkul – genişleme, yeniden dağılım veya çıkış.',
          },
        ],
      },
      audience: {
        eyebrow: 'Kimler için',
        title: 'Yüksek beklentili yatırımcılar için.',
        items: [
          'Bireysel yatırımcılar ve varlıklı özel müşteriler',
          'Aile ofisleri ve varlık yöneticileri',
          'İşletme veya özel gayrimenkul ihtiyacı olan girişimciler',
          'Gizlilikle ve en iyi fiyata satmak isteyen mülk sahipleri',
        ],
      },
      approach: {
        eyebrow: 'Pazarlar',
        title: 'D-A-CH · Avrupa · Türkiye · Kuzey Kıbrıs.',
        text: 'Her pazarın kendi kuralları vardır. Süreçleri, maliyetleri ve kültürel özellikleri biliyoruz – ve şahsen tanıdığımız, güvendiğimiz yerel ortaklarla çalışıyoruz.',
        points: [
          'Almanca, İngilizce ve Türkçe',
          'Yerinde kişisel ortak ağı',
          'Her şey için tek muhatap',
        ],
      },
      faq: [
        {
          q: 'Off-market tekliflere nasıl erişebilirim?',
          a: 'Ön görüşmeden sonra arama profilinizi birlikte oluştururuz. Uygun mülkleri size gizlilikle sunarız – genellikle bir gizlilik sözleşmesi imzalandıktan sonra.',
        },
        {
          q: 'Türkiye ve Kuzey Kıbrıs’taki alımlara da eşlik ediyor musunuz?',
          a: 'Evet. Mülk seçiminden incelemeye ve tapu devrine kadar yanınızdayız; bu süreçte yıllardır tanıdığımız yerel uzman ortaklarla çalışıyoruz.',
        },
      ],
      cta: {
        title: 'Bir sonraki yatırımınızı mı arıyorsunuz?',
        text: 'Arama profilinizi – veya gizlilikle satmak istediğiniz mülkü – bizimle paylaşın. İlk değerlendirmeyle gizlilik içinde size geri döneceğiz.',
      },
      risk: 'Gayrimenkul yatırımları; değer dalgalanmaları, kira kayıpları, finansman, döviz ve yurt dışındaki hukuki riskler gibi riskler içerir. Bu web sitesinin içeriği yatırım, hukuk veya vergi danışmanlığı değildir ve alım veya satım teklifi niteliği taşımaz. Geçmiş performans gelecekteki sonuçlar için güvenilir bir gösterge değildir.',
    },

    ai: {
      seo: {
        title: 'Küçük ve Orta Ölçekli Şirketler için Yapay Zekâ Otomasyonu · NEXXCON-24',
        description:
          'Yapay zekâyı uygulamada kullanın: KOBİ’ler için süreç otomasyonu, yapay zekâ asistanları, panolar ve web uygulamaları – verimli, izlenebilir, güvenli ve veri koruma mevzuatına uygun.',
      },
      label: 'BT ve Yapay Zekâ Otomasyonu',
      card: {
        title: 'KOBİ’ler için yapay zekâ otomasyonu',
        text: 'Operasyonel süreçleri otomatikleştirin, bilgiyi kullanılabilir kılın, ekiplerin yükünü belirgin şekilde azaltın – güvenli ve mevzuata uygun.',
        points: [
          'Potansiyel analizi',
          'İş akışı otomasyonu',
          'Yapay zekâ asistanları',
          'Eğitim ve işletim',
        ],
      },
      slide: {
        kicker: '03 · Intelligence',
        title: 'İş yükünü alan yapay zekâ.',
        text: 'Küçük ve orta ölçekli şirketler için otomasyon ve yapay zekâ asistanları.',
      },
      hero: {
        eyebrow: '03 · KOBİ’ler için yapay zekâ otomasyonu',
        title: 'İş yükünü alan yapay zekâ.',
        lead: 'Yapay zekâ artık yalnızca büyük şirketlerin konusu değil. Şirketinizde nerede belirgin bir rahatlama sağladığını bulur, operasyonel süreçlerinizi adım adım otomatikleştirir – ve ekibinizin severek ve güvenle kullandığı çözümler uygularız.',
      },
      offerings: {
        eyebrow: 'Hizmetler',
        title: 'Fikirden işleyen sürece.',
        items: [
          {
            title: 'Yapay zekâ potansiyel analizi',
            text: 'Düşük riskle en büyük fayda nerede? Efor, fayda ve geri dönüş süresini içeren öncelikli bir liste.',
          },
          {
            title: 'İş akışı otomasyonu',
            text: 'Talepten faturaya: operasyonel süreçler uçtan uca otomatik, izlenebilir ve güvenli.',
          },
          {
            title: 'Yapay zekâ asistanları',
            text: 'Satış, müşteri hizmetleri, işe alıştırma ve şirket içi bilgi için dijital iş arkadaşları – sizin üslubunuzla.',
          },
          {
            title: 'Veri ve raporlama',
            text: 'Göstergeler, panolar ve raporlar elle toplanmak yerine otomatik oluşturulur.',
          },
          {
            title: 'Web ve uygulamalar',
            text: 'Süreçleri görünür ve yönetilebilir kılan portallar, kokpitler ve dijital araçlar.',
          },
          {
            title: 'Eğitim ve işletim',
            text: 'Ekibiniz yapay zekâyı güvenle kullanmayı öğrenir – ve biz işletimde muhatabınız olmaya devam ederiz.',
          },
        ],
      },
      audience: {
        eyebrow: 'Kimler için',
        title: 'Daha verimli olmak isteyen şirketler için.',
        items: [
          'Çok sayıda tekrarlayan ofis ve idari işi olan KOBİ’ler',
          'Yoğun talep alan satış ve hizmet ekipleri',
          'Belge yoğun süreçlere sahip gayrimenkul ve danışmanlık firmaları',
          'Yapay zekâyı güvenli ve sistematik şekilde kullanmaya başlamak isteyen yöneticiler',
        ],
      },
      approach: {
        eyebrow: 'Yaklaşımımız',
        title: 'Küçük başla, hızlı öğren, hedefli ölçeklendir.',
        text: 'Net tanımlanmış bir kullanım senaryosuyla başlar, faydayı ölçer ve ancak sonra ölçeklendiririz. Veri koruma, güvenlik ve izlenebilirlik ilk günden itibaren her çözümün ayrılmaz parçasıdır.',
        points: [
          'Küçük başla, faydayı ölç',
          'Veri koruma ve güvenlik yerleşik',
          'Ekibiniz yetkinleşir',
        ],
      },
      faq: [
        {
          q: 'Yapay zekâ otomasyonu için kendi BT uzmanlarımıza ihtiyacımız var mı?',
          a: 'Hayır. Tasarım, uygulama ve desteği biz üstlenir, ekibinizi çözümleri günlük işte güvenle ve bağımsız kullanacak şekilde eğitiriz.',
        },
        {
          q: 'Veri korumayı nasıl ele alıyorsunuz?',
          a: 'Araçları ve ayarları gereksinimlerinize göre seçer, mümkün olduğunca az kişisel veri işler ve tüm iş akışlarını izlenebilir şekilde belgeleriz.',
        },
      ],
      cta: {
        title: 'Yapay zekâ ilk olarak hangi işinizi üstlensin?',
        text: 'Kısa bir görüşmede en hızlı ve ölçülebilir faydayı sağlayan kullanım senaryosunu buluruz.',
      },
    },
  },

  about: {
    seo: {
      title: 'Hakkımızda · NEXXCON-24 · Nexxus – Business & IT. Consulting',
      description:
        'NEXXCON-24, Hannover yakınlarındaki Laatzen merkezli Nexxus – Business & IT. Consulting’in danışmanlık markasıdır: işletme danışmanlığı, gayrimenkul yatırımı ve yapay zekâ otomasyonu tek elden.',
    },
    hero: {
      eyebrow: 'Hakkımızda',
      title: 'Kişisel. Gizli. Girişimci.',
      lead: 'NEXXCON-24’ün arkasında Hannover yakınlarındaki Laatzen merkezli Nexxus – Business & IT. Consulting bulunur. İşletme danışmanlığını, gayrimenkul uzmanlığını, teknolojiyi ve uluslararası deneyimi tek elden danışmanlıkta birleştiriyoruz – kişisel yönetimle ve onlarca yılda büyüyen bir ağla.',
    },
    profile: {
      eyebrow: 'Muhatabınız',
      title: 'Dipl.-Imb. Ümit Törün',
      role: 'Kurucu ve Danışman',
      bio: '1973 doğumlu, (artık) evli 3 çocuk babası, yaratıcı ve sıra dışı düşünen, eski bankacı, yorul­mak bilme­yen bir şirket yöneti­cisi ve iyimser ;-)\n33 yılı aşkın know-how, know-what ve deneyimle sizi hedeflerinize ulaştırıyoruz …\nKalben, aklen, bedenen ve ruhen, bolca tutkuyla – sahadan, saha için.\nHakkımda daha fazlasını ilk tanışma görüşmemizde memnuniyetle anlatırım 😊',
    },
    values: {
      eyebrow: 'Değerler',
      title: 'Neyi temsil ediyoruz.',
      items: [
        {
          title: 'Gizlilik',
          text: 'Bize emanet ettikleriniz bizde kalır. Gizlilik pazarlık konusu değildir – her iş birliğinin temelidir.',
        },
        {
          title: 'Dürüstlük',
          text: 'Bir şeyin değmeyeceğini de söyleriz. Bugün dürüst bir hayır, yarın pahalı bir hayal kırıklığından iyidir.',
        },
        {
          title: 'Güvenilirlik',
          text: 'Net anlaşmalar, sabit bir muhatap ve güvenebileceğiniz bir ulaşılabilirlik.',
        },
      ],
    },
    brands: {
      eyebrow: 'Markalar',
      title: 'nexxcon ve nexxus',
      text: 'nexxcon “business RE solutions” işletme ve gayrimenkul çözümlerini, nexxus CONSULTING ise danışmanlık, BT ve yapay zekâyı temsil eder. Birlikte NEXXCON-24’ü oluştururlar – standart çözümlerden fazlasını bekleyen girişimci ve yatırımcıların adresi.',
    },
  },

  contact: {
    seo: {
      title: 'İletişim · Gizli Ön Görüşme · NEXXCON-24',
      description:
        'Hannover yakınlarındaki Laatzen’de NEXXCON-24 ile telefon, e-posta veya WhatsApp üzerinden iletişime geçin. Ön görüşme ücretsiz ve bağlayıcı değil – yüz yüze, video veya telefonla.',
    },
    hero: {
      eyebrow: 'İletişim',
      title: 'Konuşalım.',
      lead: 'Telefon, e-posta, WhatsApp veya randevu – size en uygun kanalı seçin. Size bizzat ve kısa sürede geri dönüş yapacağız.',
    },
    channels: {
      title: 'Bize ulaşın',
      phoneText: 'Doğrudan ve kişisel',
      emailText: 'Belgeler ve ayrıntılı talepler için',
      whatsappText: 'Hızlı ve kolay',
      bookingText: 'İstediğiniz zamanı seçin',
    },
    prepare: {
      title: 'İyi bir ön görüşme için faydalı olanlar',
      items: [
        'Kısaca talebiniz ve hedefiniz',
        'Tercih ettiğiniz zaman çerçevesi',
        'Gayrimenkul için: bölge, mülk türü ve bütçe aralığı',
        'Yapay zekâ otomasyonu için: en çok zaman alan iş',
        'Yurt dışına yerleşim için: hedef ülke, takvim ve aile durumu',
      ],
    },
    location: {
      title: 'Konum',
      text: 'Laatzen ve Hannover bölgesinde ya da sizin bulunduğunuz yerde yüz yüze görüşmeler. Ulusal ve uluslararası olarak video veya telefonla danışmanlık – Almanca, İngilizce ve Türkçe.',
    },
  },

  legal: {
    imprint: {
      title: 'Künye (Impressum) · NEXXCON-24',
      description: 'Nexxus – Business & IT. Consulting (NEXXCON-24) künyesi.',
    },
    privacy: {
      title: 'Gizlilik politikası · NEXXCON-24',
      description: 'Bu web sitesinde kişisel verilerin işlenmesine ilişkin bilgiler.',
    },
  },

  notFound: {
    seo: { title: 'Sayfa bulunamadı · NEXXCON-24', description: 'İstenen sayfa mevcut değil.' },
    title: 'Bu sayfa mevcut değil.',
    text: 'Taşınmış olabilir. Ana sayfadan kolayca geri dönebilirsiniz.',
  },

  footer: {
    claim:
      'İşletme danışmanlığı, off-market gayrimenkul, yapay zekâ otomasyonu ve yerleşim koçluğu – kişisel, gizli, tek elden.',
    servicesTitle: 'Hizmetler',
    companyTitle: 'Şirket',
    contactTitle: 'İletişim',
    imprint: 'Künye',
    privacy: 'Gizlilik',
    rights: 'Tüm hakları saklıdır.',
    brandsNote: 'Bir markasıdır:',
  },
};
