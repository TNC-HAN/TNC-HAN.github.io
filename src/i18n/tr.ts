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
        'Girişimciler, yatırımcılar ve aile ofisleri için danışmanlık: KOBİ danışmanlığı ve koçluk, DACH bölgesi, Avrupa, Türkiye ve Kuzey Kıbrıs’ta off-market ve yatırımlık gayrimenkuller, KOBİ’ler için yapay zekâ otomasyonu.',
    },
    hero: {
      eyebrow: 'Business · Real Estate · Intelligence',
      title: 'Değer yaratan kararlar için',
      titleAccent: 'netlik.',
      lead: 'NEXXCON-24, girişimcilere, yatırımcılara ve aile ofislerine özün önemli olduğu noktalarda eşlik eder: şirketin yönlendirilmesinde, gizlilik içinde gayrimenkul yatırımında ve yapay zekâ ile otomasyonda.',
      primary: 'Gizli ön görüşme',
      secondary: 'Hizmetleri inceleyin',
      trust: [
        'Ücretsiz ve bağlayıcı değil',
        'Çağrı merkezi değil, birebir',
        'Gizlilik standarttır',
      ],
    },
    marquee: [
      'KOBİ stratejisi',
      'Girişimci koçluğu',
      'Off-market gayrimenkul',
      'Yatırımlık gayrimenkul',
      'DACH',
      'Avrupa',
      'Türkiye',
      'Kuzey Kıbrıs',
      'Yapay zekâ otomasyonu',
      'Süreç dijitalleşmesi',
      'Aile ofisleri',
    ],
    areas: {
      eyebrow: 'Faaliyet alanları',
      title: 'Üç disiplin. Tek muhatap.',
      lead: 'İşletme, gayrimenkul ve teknoloji, klasik danışmanlığın gösterdiğinden çok daha iç içedir. Biz bunları birlikte ele alır, sunum dosyaları yerine sonuç üretiriz.',
    },
    process: {
      eyebrow: 'Çalışma şeklimiz',
      title: 'İlk görüşmeden uygulamaya.',
      lead: 'Her aşamasını takip edebileceğiniz net bir süreç.',
      steps: [
        {
          title: 'Ön görüşme',
          text: 'Gizli ve ücretsiz: Mevcut durumunuzu, hedeflerinizi ve önceliklerinizi anlıyoruz.',
        },
        {
          title: 'Analiz',
          text: 'Rakamlar, pazar, süreçler ve riskler – soğukkanlı biçimde incelenir ve anlaşılır şekilde sunulur.',
        },
        { title: 'Strateji', text: 'Seçenekler, efor ve sonraki adımlarla somut bir öneri.' },
        {
          title: 'Uygulama',
          text: 'Uygulamaya aktif olarak eşlik eder, ortakları koordine eder ve ulaşılabilir kalırız.',
        },
      ],
    },
    why: {
      eyebrow: 'Neden NEXXCON-24',
      title: 'Duruşu olan danışmanlık.',
      lead: 'Müşterilerimizin iş birliğimizde değer vermesini istediğimiz ve kendimizi ölçtüğümüz ilkeler.',
      items: [
        {
          title: 'Girişimci bakış açısı',
          text: 'Kendi sermayemiz söz konusuymuş gibi danışmanlık yaparız: pragmatik, veriye dayalı, uygulanabilir.',
        },
        {
          title: 'Portalların ötesinde erişim',
          text: 'Kişisel olarak gelişmiş bir ağdan off-market gayrimenkuller ve fırsatlar.',
        },
        {
          title: 'Sınır ötesi',
          text: 'DACH bölgesi, Avrupa, Türkiye ve Kuzey Kıbrıs deneyimi – kültürel ve dilsel köprülerle birlikte.',
        },
        {
          title: 'Teknoloji dahil',
          text: 'Yapay zekâ ve otomasyon verimlilik için bir kaldıraçtır – kendi başına bir amaç değil.',
        },
      ],
    },
    regions: {
      eyebrow: 'Pazarlar',
      title: 'Sizin için faaliyet gösterdiğimiz yerler.',
      lead: 'Dört pazarda yatırımlık gayrimenkul ve işletme projeleri – yerel bilgi ve tek muhatapla.',
      items: [
        {
          title: 'DACH',
          text: 'Almanya, Avusturya, İsviçre: yatırımlık gayrimenkul, konut ve ticari binalar, portföyler.',
        },
        {
          title: 'Avrupa',
          text: 'İstikrarlı koşullara ve büyüme potansiyeline sahip seçkin lokasyonlar.',
        },
        {
          title: 'Türkiye',
          text: 'Büyükşehirler ve sahil bölgeleri – seçimden tapuya kadar destek.',
        },
        {
          title: 'Kuzey Kıbrıs',
          text: 'Yeni ve mevcut projeler, yerel bağlantılarla, fırsatlar, riskler ve kârlılığa net bir bakışla.',
        },
      ],
    },
    faq: {
      eyebrow: 'SSS',
      title: 'Sıkça sorulan sorular.',
      items: [
        {
          q: 'NEXXCON-24 kimler için doğru ortaktır?',
          a: 'Küçük ve orta ölçekli işletmelerin sahipleri ve yöneticileri, bireysel ve kurumsal yatırımcılar ile Almanca konuşulan bölgede tek elden danışmanlık arayan aile ofisleri için.',
        },
        {
          q: 'Ön görüşmenin ücreti nedir?',
          a: 'Ücretsizdir. Ön görüşme bağlayıcı değildir. Ardından size yardımcı olup olamayacağımıza ve nasıl yardımcı olabileceğimize dair net bir değerlendirme alırsınız.',
        },
        {
          q: 'Off-market ne demektir?',
          a: 'Off-market gayrimenkuller portallarda herkese açık şekilde ilan edilmez, ağlar üzerinden gizlilik içinde aracılık edilir. Bu, satıcıyı korur ve alıcılara daha az rekabetle fırsatlar sunar.',
        },
        {
          q: 'Uluslararası da çalışıyor musunuz?',
          a: 'Evet. DACH bölgesinin yanı sıra Avrupa, Türkiye ve Kuzey Kıbrıs’taki yatırım ve projelere Almanca, İngilizce ve Türkçe olarak eşlik ediyoruz.',
        },
        {
          q: 'Yapay zekâ bir şirkette ne kadar hızlı kullanılabilir?',
          a: 'İlk otomasyonlar çoğu zaman birkaç hafta içinde verimli hale gelir. En büyük faydanın en düşük riskle nerede olduğunu belirleyen bir analizle başlarız.',
        },
      ],
    },
    cta: {
      eyebrow: 'Sonraki adım',
      title: 'Projeniz hakkında konuşalım.',
      text: 'Durumunuzu kısaca anlatın. Gizli, eşit düzeyde ve bağlayıcı olmayan dürüst bir değerlendirme alırsınız.',
      reassurance: 'Size bizzat geri dönüş yapacağız.',
    },
  },

  services: {
    consulting: {
      seo: {
        title: 'KOBİ’ler için İşletme Danışmanlığı, Koçluk ve Consulting · NEXXCON-24',
        description:
          'Küçük ve orta ölçekli işletmelerin sahipleri ve yöneticileri için strateji, büyüme, devir ve koçluk – pragmatik, veriye dayalı ve uygulama odaklı.',
      },
      label: 'Koçluk ve Danışmanlık',
      card: {
        title: 'İşletme danışmanlığı, koçluk ve consulting',
        text: 'KOBİ’ler için stratejik destek – yeniden yapılanmadan büyümeye ve şirket devrine kadar.',
        points: [
          'Strateji ve iş modeli',
          'Büyüme ve süreçler',
          'Girişimci koçluğu',
          'Devir, M&A, çıkış',
        ],
      },
      slide: {
        kicker: '01 · Consulting',
        title: 'Günlük işte karşılığı olan strateji.',
        text: 'KOBİ sahipleri ve yöneticileri için danışmanlık ve koçluk.',
      },
      hero: {
        eyebrow: '01 · İşletme danışmanlığı, koçluk ve consulting',
        title: 'Günlük işte karşılığı olan strateji.',
        lead: 'Küçük ve orta ölçekli işletmelerin çekmecede kalacak konseptlere değil, net önceliklere ve sorumluluk alan bir fikir ortağına ihtiyacı vardır. Biz tam olarak bunu sunuyoruz.',
      },
      offerings: {
        eyebrow: 'Hizmetler',
        title: 'Şirketiniz için yaptıklarımız.',
        items: [
          {
            title: 'Strateji ve iş modeli',
            text: 'Konumlandırmayı netleştirmek, pazarları değerlendirmek, iş modelini geleceğe hazırlamak.',
          },
          {
            title: 'Büyüme ve genişleme',
            text: 'Yeni pazarlara, lokasyonlara ve satış kanallarına yapılandırılmış şekilde açılmak.',
          },
          {
            title: 'Süreçler ve organizasyon',
            text: 'İş akışlarını sadeleştirmek, sorumlulukları netleştirmek, maliyetleri düşürmek.',
          },
          {
            title: 'Finansman ve sermaye',
            text: 'İş planları, banka ve yatırımcı görüşmelerine hazırlık, sermayeye yapılandırılmış erişim.',
          },
          {
            title: 'Girişimci koçluğu',
            text: 'Liderlik, kararlar ve kişisel etkinlik için gizli fikir alışverişi.',
          },
          {
            title: 'Devir, M&A ve çıkış',
            text: 'Şirket satışı, alımı veya devri – hazırlıklı, gizli ve net bir yol haritasıyla.',
          },
        ],
      },
      audience: {
        eyebrow: 'Kimler için',
        title: 'Geleceği şekillendirmek isteyen girişimciler için.',
        items: [
          'Küçük ve orta ölçekli işletmelerin sahipleri ve yöneticileri',
          'Kuşak değişimi öncesindeki aile şirketleri',
          'Bir sonraki adım öncesindeki kurucular ve büyüyen şirketler',
          'İştiraklerine yapılandırılmış destek isteyen yatırımcılar',
        ],
      },
      approach: {
        eyebrow: 'Yaklaşımımız',
        title: 'Sunum değil, uygulama.',
        text: 'Az sayıda net kaldıraç ve ölçülebilir ara hedeflerle çalışırız. Kontrol her zaman sizde kalır – biz hız ve yapı sağlarız.',
        points: ['Baştan itibaren net öncelikler', 'Sabit muhatap', 'Şeffaf efor'],
      },
      faq: [
        {
          q: 'Tipik bir danışmanlık projesi ne kadar sürer?',
          a: 'Kısa bir strateji atölyesinden birkaç aylık bir eşlik sürecine kadar. Kapsamı ve süreyi ön görüşmeden sonra birlikte belirleriz.',
        },
        {
          q: 'Koçluk ile consulting arasındaki fark nedir?',
          a: 'Consulting şirket için analizler ve öneriler sunar. Koçluk ise sizi girişimci olarak liderlik, kararlar ve öz yönetim konularında kişisel olarak güçlendirir. İkisi birleştirilebilir.',
        },
      ],
      cta: {
        title: 'Şirketiniz on iki ay sonra nerede olacak?',
        text: 'Gizli bir ön görüşmede en önemli kaldıraçları birlikte belirleyelim.',
      },
    },

    realEstate: {
      seo: {
        title:
          'Off-Market ve Yatırımlık Gayrimenkul · DACH, Avrupa, Türkiye, Kuzey Kıbrıs · NEXXCON-24',
        description:
          'DACH bölgesi, Avrupa, Türkiye ve Kuzey Kıbrıs’ta off-market ve yatırımlık gayrimenkullere gizli erişim – analiz, inceleme ve işlemin tamamlanmasına kadar destek.',
      },
      label: 'Gayrimenkul ve yatırım',
      card: {
        title: 'Gayrimenkul danışmanlığı – off-market ve yatırım',
        text: 'DACH bölgesi, Avrupa, Türkiye ve Kuzey Kıbrıs’ta yatırımlık gayrimenkullere gizli erişim.',
        points: [
          'Off-market erişim',
          'Yatırım ve lokasyon analizi',
          'Due diligence ve destek',
          'Uluslararası pazarlar',
        ],
      },
      slide: {
        kicker: '02 · Real Estate',
        title: 'Herkesin görmediği gayrimenkuller.',
        text: 'DACH, Avrupa, Türkiye ve Kuzey Kıbrıs’ta off-market ve yatırımlık gayrimenkuller.',
      },
      hero: {
        eyebrow: '02 · Gayrimenkul danışmanlığı – off-market ve yatırım',
        title: 'Herkesin görmediği gayrimenkuller.',
        lead: 'En iyi fırsatlar nadiren portallarda yer alır. Yatırımcıları gizlilik içinde off-market ve yatırımlık gayrimenkullerle buluşturur, siz zaman ve sermaye ayırmadan önce her fırsatı inceleriz.',
      },
      offerings: {
        eyebrow: 'Hizmetler',
        title: 'Arama profilinden işlemin tamamlanmasına.',
        items: [
          {
            title: 'Off-market erişim',
            text: 'Kişisel olarak gelişmiş bir ağdan, herkese açık sunulmayan gayrimenkuller.',
          },
          {
            title: 'Yatırım analizi',
            text: 'Lokasyon, getiri, maliyetler ve riskler – şeffaf şekilde hesaplanır ve değerlendirilir.',
          },
          {
            title: 'Due diligence',
            text: 'Belgelerin, durumun ve koşulların uzman ortaklarla birlikte incelenmesi.',
          },
          {
            title: 'İlansız satış',
            text: 'Portal ilanı istemeyen mülk sahipleri için gizli pazarlama.',
          },
          {
            title: 'Uluslararası yatırımlar',
            text: 'Türkiye ve Kuzey Kıbrıs’ta destek – lokasyon seçiminden tapu devrine kadar.',
          },
          {
            title: 'Portföy ve strateji',
            text: 'Gayrimenkulü varlık ve işletme stratejinizin bir yapı taşı olarak ele alıyoruz.',
          },
        ],
      },
      audience: {
        eyebrow: 'Kimler için',
        title: 'Yüksek beklentili yatırımcılar için.',
        items: [
          'Bireysel yatırımcılar ve varlıklı özel müşteriler',
          'Aile ofisleri ve varlık yöneticileri',
          'Kurumsal veya özel gayrimenkul ihtiyacı olan girişimciler',
          'Gizlilik içinde satış yapmak isteyen mülk sahipleri',
        ],
      },
      approach: {
        eyebrow: 'Pazarlar',
        title: 'DACH · Avrupa · Türkiye · Kuzey Kıbrıs.',
        text: 'Her pazarın kendi kuralları vardır. Süreçleri, maliyetleri ve kültürel farkları biliyor, yerinde güvenilir ortaklarla çalışıyoruz.',
        points: ['Almanca, İngilizce ve Türkçe', 'Yerel ortak ağı', 'Her konuda tek muhatap'],
      },
      faq: [
        {
          q: 'Off-market tekliflere nasıl erişebilirim?',
          a: 'Ön görüşmenin ardından arama profilinizi birlikte oluştururuz. Uygun gayrimenkulleri size gizlilik içinde sunarız – çoğu zaman bir gizlilik sözleşmesi imzalandıktan sonra.',
        },
        {
          q: 'Türkiye ve Kuzey Kıbrıs’taki alımlara da eşlik ediyor musunuz?',
          a: 'Evet. Gayrimenkul seçiminden incelemeye ve tapu devrine kadar size eşlik ediyor, bu süreçte güvenilir yerel uzman ortaklarla çalışıyoruz.',
        },
      ],
      cta: {
        title: 'Bir sonraki yatırımınızı mı arıyorsunuz?',
        text: 'Arama profilinizi bizimle paylaşın – ilk değerlendirmeyle size gizlilik içinde geri dönelim.',
      },
      risk: 'Gayrimenkul yatırımları; değer dalgalanmaları, kira kayıpları, finansman, döviz ve yurt dışındaki hukuki riskler gibi riskler içerir. Bu web sitesinin içeriği yatırım, hukuk veya vergi danışmanlığı değildir ve alım ya da satım teklifi niteliği taşımaz. Geçmiş performans, gelecekteki sonuçlar için güvenilir bir gösterge değildir.',
    },

    ai: {
      seo: {
        title: 'KOBİ’ler için Yapay Zekâ Otomasyonu · NEXXCON-24',
        description:
          'Yapay zekâyı pratikte kullanın: KOBİ’ler için süreç otomasyonu, yapay zekâ asistanları ve iş akışları – veri korumaya duyarlı, ölçülebilir ve teknik yük olmadan.',
      },
      label: 'BT ve Yapay Zekâ Otomasyonu',
      card: {
        title: 'KOBİ’ler için yapay zekâ otomasyonu',
        text: 'Tekrarlayan işleri otomatikleştirin, bilgiyi kullanılabilir kılın, ekiplerinizi rahatlatın.',
        points: [
          'Potansiyel analizi',
          'İş akışı otomasyonu',
          'Yapay zekâ asistanları',
          'Eğitim ve işletim',
        ],
      },
      slide: {
        kicker: '03 · Intelligence',
        title: 'İş yükünü azaltan yapay zekâ.',
        text: 'Küçük ve orta ölçekli işletmeler için otomasyon ve yapay zekâ asistanları.',
      },
      hero: {
        eyebrow: '03 · KOBİ’ler için yapay zekâ otomasyonu',
        title: 'İş yükünü azaltan yapay zekâ.',
        lead: 'Yapay zekâ artık yalnızca büyük şirketlerin konusu değil. Şirketinizde nerede gerçek bir rahatlama sağlayacağını belirler, ekibinizin gerçekten kullandığı çözümleri hayata geçiririz.',
      },
      offerings: {
        eyebrow: 'Hizmetler',
        title: 'Fikirden işleyen sürece.',
        items: [
          {
            title: 'Yapay zekâ potansiyel analizi',
            text: 'En düşük riskle en büyük fayda nerede? Önceliklendirilmiş net bir liste.',
          },
          {
            title: 'İş akışı otomasyonu',
            text: 'Teklifler, e-postalar, belgeler ve veri akışları – otomatik ve izlenebilir.',
          },
          {
            title: 'Yapay zekâ asistanları',
            text: 'Satış, müşteri hizmetleri ve şirket içi bilgi için süreçlerinize uygun asistanlar.',
          },
          {
            title: 'Veri ve raporlama',
            text: 'Göstergeleri ve raporları elle derlemek yerine otomatik hazırlayın.',
          },
          {
            title: 'Web ve uygulamalar',
            text: 'Süreçleri görünür ve yönetilebilir kılan dijital araçlar ve arayüzler.',
          },
          {
            title: 'Eğitim ve işletim',
            text: 'Ekibiniz yapay zekâyı güvenle kullanmayı öğrenir – işletim sürecinde de muhatabınız oluruz.',
          },
        ],
      },
      audience: {
        eyebrow: 'Kimler için',
        title: 'Daha verimli olmak isteyen şirketler için.',
        items: [
          'Çok sayıda tekrarlayan ofis ve idari işi olan KOBİ’ler',
          'Yoğun talep alan satış ve hizmet ekipleri',
          'Belge yoğun süreçlere sahip gayrimenkul ve danışmanlık şirketleri',
          'Yapay zekâyı güvenli ve yapılandırılmış şekilde devreye almak isteyen yöneticiler',
        ],
      },
      approach: {
        eyebrow: 'Yaklaşımımız',
        title: 'Küçük başla, hızlı öğren.',
        text: 'Net tanımlanmış bir kullanım senaryosuyla başlar, faydayı ölçer ve ancak ondan sonra ölçeklendiririz. Veri koruma ve izlenebilirlik en baştan çözümün parçasıdır.',
        points: ['Küçük başla, faydayı ölç', 'Veri koruma odakta', 'Ekibiniz yetkinleşir'],
      },
      faq: [
        {
          q: 'Yapay zekâ otomasyonu için kendi BT uzmanlarımıza ihtiyacımız var mı?',
          a: 'Hayır. Tasarım ve uygulamayı biz üstleniriz ve ekibinizi çözümleri günlük işte güvenle kullanabilecek şekilde eğitiriz.',
        },
        {
          q: 'Veri korumayı nasıl ele alıyorsunuz?',
          a: 'Araçları ve ayarları gereksinimlerinize göre seçer, mümkün olduğunca az kişisel veri işler ve süreçleri izlenebilir şekilde belgeleriz.',
        },
      ],
      cta: {
        title: 'Yapay zekâ önce hangi işinizi üstlensin?',
        text: 'Kısa bir görüşmede en hızlı fayda sağlayacak kullanım senaryosunu birlikte buluruz.',
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
      lead: 'NEXXCON-24’ün arkasında Hannover yakınlarındaki Laatzen merkezli Nexxus – Business & IT. Consulting bulunur. İşletme danışmanlığını, gayrimenkul uzmanlığını ve teknolojiyi tek elden danışmanlıkta birleştiriyoruz.',
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
          text: 'Bize emanet ettikleriniz bizde kalır. Gizlilik her iş birliğinin temelidir.',
        },
        {
          title: 'Dürüstlük',
          text: 'Bir şeyin değmeyeceğini de söyleriz. Tutamayacağımız sözler vermeyiz.',
        },
        {
          title: 'Güvenilirlik',
          text: 'Net anlaşmalar, sabit muhatap, güvenilir ulaşılabilirlik.',
        },
      ],
    },
    brands: {
      eyebrow: 'Markalar',
      title: 'nexxcon ve nexxus',
      text: 'nexxcon “business RE solutions” işletme ve gayrimenkul çözümlerini, nexxus CONSULTING ise danışmanlık ve BT’yi temsil eder. Birlikte NEXXCON-24’ü oluştururlar.',
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
      lead: 'Size en uygun kanalı seçin. Size bizzat geri dönüş yapacağız.',
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
      ],
    },
    location: {
      title: 'Konum',
      text: 'Laatzen ve Hannover bölgesinde yüz yüze görüşmeler; ulusal ve uluslararası olarak video veya telefonla.',
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
    claim: 'İşletme danışmanlığı, off-market gayrimenkul ve yapay zekâ otomasyonu – tek elden.',
    servicesTitle: 'Hizmetler',
    companyTitle: 'Şirket',
    contactTitle: 'İletişim',
    imprint: 'Künye',
    privacy: 'Gizlilik',
    rights: 'Tüm hakları saklıdır.',
    brandsNote: 'Bir markasıdır:',
  },
};
