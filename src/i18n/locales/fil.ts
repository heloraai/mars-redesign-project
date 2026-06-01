// Filipino — initial machine translation. Native review recommended.
import type { Translation } from "./en";

const fil: Translation = {
  nav: {
    eor: "EOR at Payroll",
    recruitment: "Recruitment at Executive Search",
    aiLab: "AI Innovation",
    about: "Tungkol",
    contact: "Kontakin",
    bookCall: "Mag-book ng tawag",
  },
  hero: {
    pill: "Mula 2009 · Mula 2009 sa Singapore",
    headlineLead: "Mula 2009g nagiging",
    headlineAccent: "operator sa likod ng operator.",
    sub:
      "Singapore-licensed Employer of Record, executive search, at HR infrastructure sa 10 markets. Mula 2009.",
    ctaPrimary: "Mag-book ng Tawag",
    ctaSecondary: "Tuklasin ang Aming Serbisyo",
    statYears: "Taon ng operasyon",
    statMarkets: "APAC markets",
    statEmployers: "Mga kompanyang naserbisyuhan",
    statConsultants: "Mga eksperto sa pagkonsulta",
    statClients: "Pandaigdigang kliyente",
    statPlacements: "Matagumpay na placement",
    statLicence: "MOM EA Licence 09C2925",
    snapshotEyebrow: "Buwanang compliance snapshot",
    snapshotSample: "Sample · Abril 2026 · Kliyente A (anonymised)",
    snapshotStatus: "Sa oras",
    snapshotHeadcount: "Empleyado na pinamamahalaan",
    snapshotDelta: "+12 ngayong buwan",
    snapshotPayroll: "Payroll run",
    snapshotPayrollValue: "SGD 412,890 · clear",
    snapshotBadge: "3 SG licences · 0 statutory misses",
  },
  marquee: {
    label: "100+ kompanya · mula 2009",
  },
  licenses: {
    eyebrow: "Licensed at regulated sa Singapore",
    mom: {
      authority: "Ministry of Manpower",
      label: "MOM EA Licence",
      code: "Licence No. 09C2925",
    },
    mas: {
      authority: "Monetary Authority of Singapore",
      label: "Payroll Service Exemption",
      code: "MAS exempted entity",
    },
    acra: {
      authority: "ACRA Singapore",
      label: "Registered Filing Agent",
      code: "ACRA-licensed",
    },
  },
  twinPillars: {
    eyebrow: "Ano ang ginagawa namin",
    headline: "Dalawang bagay na mas mahusay naming ginagawa kaysa sinuman sa rehiyon.",
    eor: {
      tag: "Flagship",
      title: "Employer of Record at Global Payroll",
      body:
        "Mag-hire, magbayad, at manatiling compliant sa Singapore at 7 pang APAC markets — nang hindi nag-aayos ng lokal na entity. Hinahawakan namin ang employment contracts, payroll, statutory filings, at offboarding mula sa unang araw.",
      bullet1: "Onboarding sa loob ng 5 working days",
      bullet2: "CPF, EPF, BPJS, MPF, at lokal na tax filings hawak",
      bullet3: "MOM EA Licence No. 09C2925",
      cta: "Tuklasin ang EOR",
    },
    recruitment: {
      tag: "Search",
      title: "Recruitment at Executive Search",
      body:
        "Permanent placement, contract staffing, at confidential C-suite search sa Singapore at APAC. Hinahanap namin ang passive candidates na hindi maabot ng ibang platform, pagkatapos ay direktang ipinapasa sa EOR onboarding kapag kailangan.",
      bullet1: "100+ matagumpay na placement mula 2009",
      bullet2: "C-suite shortlist sa loob ng 21-day sprint",
      bullet3: "Teknolohiya, pinansya, kalusugan, manufacturing",
      cta: "Tuklasin ang Recruitment",
    },
  },
  whyMars: {
    eyebrow: "Bakit Mars",
    headline: "Bakit Mars, hindi global EOR platform?",
    p1:
      "Ang global EOR platforms — global EOR SaaS platforms — ay tumatakbo sa standardized, high-volume SaaS models. Gumagana ang mga ito hanggang hindi: equity compensation reporting sa iba't ibang jurisdiction, non-standard termination negotiations sa Indonesia, PE exposure na nangangailangan ng counsel opinion bago ang unang payroll cycle.",
    p2:
      "Pumapasok ang Mars kapag ang lokal na regulatory friction ay lumalampas sa generic software. Pinapalitan namin ang automated workflows ng bespoke governance frameworks, aktibong in-country legal oversight, at senior-level human intervention para sa edge cases na nangangailangan nito.",
    p3:
      "Hindi kami mas mura kaysa sa SaaS platform. Kami ang ginagamit mo kapag ang halaga ng compliance error ay lumalampas sa halaga ng aming serbisyo.",
    cta: "Makipag-usap sa specialist",
  },
  countries: {
    eyebrow: "Saklaw",
    headline:
      "Mag-hire nang compliant sa 10 markets — sa ilalim ng isang Singapore contract.",
    body:
      "Pinatatakbo namin ang payroll, statutory filings at employment contracts sa mga pamilihang ito mula 2009. Ikaw pa rin ang operator; kami pa rin ang legal employer.",
    statOnboarding: "Onboarding",
    statOnboardingValue: "5 araw",
    statMisses: "Statutory misses",
    statLicences: "SG licences",
    name: {
      IN: "India",
      TH: "Thailand",
      HK: "Hong Kong",
      VN: "Vietnam",
      PH: "Pilipinas",
      MY: "Malaysia",
      SG: "Singapore",
      ID: "Indonesia",
    },
  },
  comparison: {
    eyebrow: "EOR vs Entity vs Contractor",
    headline: "Tatlong paraan upang maglagay ng tao sa lupa sa Asya.",
    body:
      "Mag-set up ng sariling entity, mag-hire bilang contractor, o gamitin ang Mars bilang inyong Employer of Record. Narito ang paghahambing ng tatlo sa mga numerong mahalaga.",
    headers: {
      dimension: "Dimensyon",
      entity: "Mag-set up ng lokal na entity",
      contractor: "Mag-hire bilang contractor",
      mars: "Mars EOR",
    },
    rows: {
      time: {
        label: "Oras para mag-hire ng #1 empleyado",
        entity: "3–9 buwan",
        contractor: "1–2 linggo",
        mars: "5 working days",
      },
      contract: {
        label: "Lokal na employment contract",
        entity: "Ikaw ang gumawa",
        contractor: "Hindi employment",
        mars: "Lokal na wikang kontrata, IP at NDA",
      },
      payroll: {
        label: "Payroll at statutory filings",
        entity: "Ikaw ang nagpapatakbo at naghahain",
        contractor: "Worker ang naghahain ng sarili",
        mars: "CPF/EPF/BPJS/MPF — kami ang naghahain",
      },
      risk: {
        label: "Misclassification risk",
        entity: "Mababa (entity)",
        contractor: "Mataas",
        mars: "Mababa (kami ang employer)",
      },
      cost: {
        label: "Setup cost",
        entity: "USD 15–40k + tuloy-tuloy",
        contractor: "Wala",
        mars: "Per-employee monthly fee",
      },
    },
    cta: "Kumuha ng country-by-country quote",
    response: "Average na response: wala pang 4 business hours",
  },
  howItWorks: {
    eyebrow: "Paano gumagana ang EOR sa Mars",
    headline: "Mula offer letter hanggang payroll — sa isang workflow.",
    ctaQuote: "Kumuha ng quote",
    stepLabel: "Hakbang",
    step1: {
      title: "Sabihin sa amin kung sino at saan",
      desc:
        "Ibahagi ang bansa, role, salary band at simulang petsa. Magbibigay kami ng quote sa loob ng 4 business hours, kasama ang buong statutory cost breakdown.",
    },
    step2: {
      title: "Gumagawa kami ng lokal na kontrata",
      desc:
        "Compliant employment agreement, IP assignment at NDA sa lokal na wika. Hinahawakan ang equity acknowledgements (RSU / ISO / phantom) kung mayroon.",
    },
    step3: {
      title: "Pumipirma at nag-onboard ang empleyado",
      desc:
        "Statutory accounts binuksan, equipment ipinadala, benefits enrolled. Karamihan ng empleyado fully onboard sa loob ng 5 working days.",
    },
    step4: {
      title: "Pinatatakbo namin ang payroll at compliance",
      desc:
        "Isang buwanang invoice mula Mars. CPF / EPF / BPJS / MPF at katumbas inihahain sa bawat market — pinapadala namin sa iyo ang report; wala kang gagawin.",
    },
  },
  clients: {
    eyebrow: "Aming mga kliyente",
    headline: "Pinagkakatiwalaan ng mga kompanya sa iba't ibang industriya at yugto",
    logosNote:
      "Mula sa Series-A AI startups hanggang sa nakalistang industrial groups — sa technology, financial services, healthcare, at manufacturing.",
  },
  faqTeaser: {
    eyebrow: "FAQ",
    headline: "Ang mga tanong na ibinabato ng seryosong mamimili",
    readAll: "Basahin ang lahat ng expert Q&A →",
    q1: "Saan kasya ang Mars kapag ang global EOR platform ay 'halos gumagana' ngunit nasisira sa jurisdiction-specific complexity?",
    a1:
      "Ang global EOR platforms ay tumatakbo sa standardized, high-volume SaaS models na nababasag sa ilalim ng jurisdiction-specific complexities — tulad ng equity compensation reporting sa Singapore o non-standard termination negotiations sa Indonesia. Pumapasok ang Mars Consulting kapag ang lokal na regulatory friction ay lumalampas sa generic software capabilities. Pinapalitan namin ang automated workflows ng bespoke MNC governance frameworks, integrated direkta sa lokal na labour laws at tax codes.",
    q2: "Paano nag-istraktura ang Mars ng cross-border payroll nang hindi nag-trigger ng permanent establishment exposure?",
    a2:
      "Ang cross-border payroll sa ilalim ng aming modelo ay engineered sa pamamagitan ng tatlong layered controls: jurisdictional entity selection, labour dispatch architecture, at treaty-aligned tax positioning. Kung saan ang commercial substance ng kliyente ay hindi nagsa-sustansya ng lokal na registered entity, ipinapadala namin ang aming Singapore-licensed EOR vehicle sa kombinasyon ng bilateral labour dispatch structures sa Vietnam, Indonesia, Pilipinas, Malaysia, at Thailand — nine-neutralize ang permanent establishment risk habang pinapanatili ang operational control.",
    q3: "Paano nag-integrate ang recruitment hand-off sa EOR onboarding upang mabawasan ang time-to-productivity?",
    a3:
      "Ang tradisyonal na friction point sa international expansion ay ang operational silo sa pagitan ng talent acquisition at lokal na HR operations. Nireresolba ito ng Mars sa pamamagitan ng pag-aarkitekto ng seamless recruitment at EOR onboarding handoff. Sa sandaling pumirma ang isang kandidato ng executive offer letter, sinisimulan ng aming EOR compliance engine ang lokal na onboarding sequence kasabay ng notice period ng kandidato.",
  },
  aiBlock: {
    eyebrow: "Mula 2026",
    title: "AI Innovation",
    body:
      "Tinutulungan na namin ngayon ang mga kliyente na i-automate ang HR at operational workflows sa likod ng kanilang mga hire: medical leave ingestion sa pamamagitan ng WhatsApp, AI-driven payroll preprocessing, at embedded AI consultants para sa mga koponan na bumubuo ng panloob na automation capabilities.",
    cta: "Tuklasin ang AI Innovation",
  },
  testimonial: {
    eyebrow: "Kuwento ng kliyente",
    headline: "Pinagkakatiwalaan ng mga koponan na lumalago sa APAC.",
    body:
      "Itinatag sa Singapore noong 2009, lumago ang Mars Consulting mula sa isang recruiting boutique tungo sa isang regional employment platform — tahimik na nagpapatakbo ng mga hire, payroll at compliance para sa AI startups, scale-ups at government-linked enterprises sa buong Southeast Asia.",
    quote:
      "Na-onboard ng Mars ang aming research team sa Singapore at Jakarta sa loob ng wala pang dalawang linggo. Hinawakan nila ang lahat — kontrata, equity acknowledgements, lokal na statutory filings — upang makapag-focus kami sa pag-ship ng models.",
    attribution: "Head of People · Series-B AI company",
    location: "Singapore ↔ APAC · 12 hires noong 2025",
    statClients: "Pandaigdigang kliyente",
    statConsultants: "Mga consultant",
    statLicences: "SG licences",
  },
  contact: {
    eyebrow: "Makipag-usap sa Singapore-licensed na specialist",
    headline: "Tingnan kung tama ang EOR — sa loob ng 30 minuto.",
    bullet1: "Country-by-country na cost breakdown",
    bullet2: "Sample contract at onboarding checklist",
    bullet3: "Tapat na sagot kung dapat ka mag-set up ng entity sa halip",
    response: "Average na response: wala pang 4 business hours",
    label: {
      email: "Work email",
      company: "Kompanya",
      country: "Bansa kung saan mag-hihire",
      hires: "Bilang ng mga hire (susunod na 6 buwan)",
    },
    placeholder: {
      email: "ikaw@kompanya.com",
      company: "Pangalan ng kompanya",
      country: "hal. Indonesia",
      hires: "5",
    },
    submit: "I-book ang aking 30-min na tawag",
    privacy:
      "Sumasagot kami sa loob ng 4 business hours, oras ng Singapore. Sa pag-submit, sumasang-ayon ka sa aming privacy policy.",
  },
  footer: {
    tagline:
      "Singapore-licensed Employer of Record at HR services sa Southeast Asia. Mula 2009.",
    sections: {
      solutions: "Mga Solusyon",
      company: "Kompanya",
      compliance: "Compliance",
    },
    links: {
      eor: "EOR at Payroll",
      recruitment: "Recruitment at Executive Search",
      aiLab: "AI Innovation",
      about: "Tungkol",
      clients: "Mga Kliyente",
      contact: "Kontakin",
      mom: "MOM EA Licence 09C2925",
      acra: "ACRA Filing Agent",
      privacy: "Privacy",
    },
    copyright: "© {{year}} Mars Consulting Pte Ltd. Lahat ng karapatan ay nakareserba.",
    cities: "Singapore (HQ) · Malaysia · Hong Kong · China · India · United States",
    compliance:
      "MOM Comprehensive EA Licence No. 09C2925  ·  ACRA Corporate Service Provider at Registered Filing Agent",
  },
  eorPage: {
    metaTitle: "Employer of Record Singapore at APAC — Mars Consulting",
    metaDesc:
      "Singapore-licensed EOR services sa 10 markets. Compliant employment, payroll, at statutory filings mula sa unang araw. Walang lokal na entity. MOM EA 09C2925.",
    pill: "Employer of Record at Global Payroll",
    headlineLead: "Mag-hire nang compliant sa",
    headlineAccent: "10 markets",
    headlineTail: "— nang hindi nag-aayos ng lokal na entity",
    sub:
      "Singapore-licensed Employer of Record services. Kami ang nagiging legal employer; ikaw ang nag-uutos ng trabaho. Employment contracts, payroll, statutory filings, at offboarding hawak mula sa unang araw.",
    ctaPrimary: "Kumuha ng EOR Quote",
    ctaSecondary: "Tingnan Kung Paano Gumana",
    trustLine: "MOM EA Licence No. 09C2925 · Mula 2009 · 10 markets · 5-day onboarding",
    stats: {
      onboarding: "Onboarding",
      onboardingValue: "5 araw",
      coverage: "APAC coverage",
      coverageValue: "10 markets",
      clients: "Pandaigdigang kliyente",
      clientsValue: "100+",
      misses: "Statutory misses",
      missesValue: "0",
    },
    faq: {
      eyebrow: "FAQ",
      headline: "Mga tanong mula sa seryosong mamimili",
      sub:
        "Ito ang mga tanong na itinatanong ng aming kliyente sa pangalawa o pangatlong tawag. Inilagay namin ito rito upang maitanong mo sa unang tawag.",
      q1: "Saan kasya ang Mars Consulting kapag ang global EOR platform ay 'halos gumagana' ngunit nasisira sa jurisdiction-specific complexity?",
      a1:
        "Ang global EOR platforms ay tumatakbo sa standardized, high-volume SaaS models na nababasag sa ilalim ng jurisdiction-specific complexities — tulad ng equity compensation reporting sa Singapore o non-standard termination negotiations sa Indonesia. Pumapasok ang Mars Consulting kapag ang lokal na regulatory friction ay lumalampas sa generic software capabilities. Pinapalitan namin ang automated workflows ng bespoke MNC governance frameworks, integrated direkta sa lokal na labour laws at tax codes. Ang aming modelo ay nag-uugnay ng kasalanan sa pagitan ng software-driven EOR at high-touch BPO.",
      q2: "Paano nag-istraktura ang Mars ng engagement governance para sa multi-entity o multi-region MNCs?",
      a2:
        "Ang engagement governance para sa multi-region MNCs ay nangangailangan ng centralized control plane na nakapatong sa decentralized statutory execution. Ino-istraktura ng Mars ang mga engagement na ito sa pamamagitan ng pinagsamang Service Level Agreement na sumasaklaw sa lahat ng aktibong jurisdictions, ipinares sa nakatuon na regional governance lead na nakabase sa Singapore.",
      q3: "Bakit nangingibabaw ang cost-of-error sa cost-of-service sa cross-border HR, at paano ito humuhubog sa inyong pricing philosophy?",
      a3:
        "Sa cross-border HR at EOR deployments, ang baseline cost ng serbisyo ay marginal kumpara sa compounded cost ng error. Ang mali sa pag-classify ng empleyado, ang pagkabigo na mai-istraktura ang termination sa loob ng lokal na statutory bounds, o ang mali sa paghawak ng cross-border tax liabilities ay madalas nagreresulta sa multi-year litigation, operational bans, o malulupit na financial penalties.",
      q4: "Paano nag-istraktura ang Mars ng cross-border payroll para sa Singapore-headquartered group na nag-hihire sa Southeast Asia nang hindi nag-trigger ng permanent establishment exposure?",
      a4:
        "Ang cross-border payroll sa ilalim ng aming modelo ay engineered sa pamamagitan ng tatlong layered controls: jurisdictional entity selection, labour dispatch architecture, at treaty-aligned tax positioning. Kung saan ang commercial substance ng kliyente ay hindi nagsa-sustansya ng lokal na registered entity, ipinapadala namin ang aming Singapore-licensed EOR vehicle sa kombinasyon ng bilateral labour dispatch structures sa Vietnam, Indonesia, Pilipinas, Malaysia, at Thailand — nine-neutralize ang permanent establishment risk habang pinapanatili ang operational control sa headcount, KPIs, at termination rights. Ang international tax planning ay integrated bago ang unang payroll cycle.",
      q5: "Kailan at paano nag-aapply ang labour dispatch structures bilang cost-optimisation lever?",
      a5:
        "Ang labour dispatch structures ay nagsisilbing kritikal na cost-optimisation lever kapag pumapasok sa Asian markets na may matataas na statutory employer burdens o mahigpit na permanent employment regulations. Hindi tulad ng standard EOR, ang labour dispatch ay pinapayagan ang kliyente na gumamit ng lokal, licensed agency upang pormal na makapag-empleyo at magpadala ng staff sa operational site.",
      q6: "Paano dumadaan ang Mars sa international tax planning patungkol sa treaty positioning at secondment recharges?",
      a6:
        "Ang strategic international human capital deployment ay nangangailangan ng masusing international tax planning upang maiwasan ang margin erosion. Ino-arkitekto namin ang cross-border assignments sa pamamagitan ng pagkakahanay ng secondment recharge agreements sa specific provisions ng bilateral double-taxation treaties.",
    },
    ctaBanner: {
      headline: "Handa nang mag-hire nang compliant sa APAC?",
      body:
        "Country-by-country cost breakdown. Sample contract at onboarding checklist. Tapat na sagot kung dapat ka mag-set up ng entity sa halip.",
      bullet1: "Quote sa loob ng 4 business hours",
      bullet2: "Onboarding sa loob ng 5 working days",
      bullet3: "MOM EA Licence No. 09C2925",
      cta: "Makipag-usap sa Specialist",
    },
  },
  recruitmentPage: {
    metaTitle: "Recruitment at Executive Search Singapore — Mars Consulting",
    metaDesc:
      "Permanent placement, contract staffing at confidential C-suite executive search sa Singapore at APAC. 100+ na placement. Mula 2009. MOM-licensed.",
    pill: "Recruitment at Executive Search",
    headlineLead: "Recruitment at Executive Search sa",
    headlineAccent: "Singapore at APAC",
    sub:
      "Permanent placement, contract staffing, at confidential C-suite search — inihatid ng mga practitioner na nakapaglagay ng higit sa 100 na kandidato sa technology, financial services, healthcare, at manufacturing mula 2009.",
    ctaPrimary: "Talakayin ang Search Mandate",
    ctaSecondary: "Tingnan ang Aming Proseso",
    trustLine: "MOM EA Licence No. 09C2925 · Mula 2009 · 10 markets",
    tracks: {
      eyebrow: "Mga track ng serbisyo",
      headline: "Tatlong search tracks. Isang team.",
      permanent: {
        title: "Permanent Placement",
        body:
          "Mid-to-senior na permanent hires sa lahat ng industriya. Hinahanap namin ang aktibo at passive na kandidato, nagsasagawa ng structured interviews, at nagpapakita ng vetted shortlist — hindi CV dump.",
        suitable: "Manager hanggang Director level · Lahat ng industriya · Singapore at regional roles",
      },
      contract: {
        title: "Contract at Temporary Staffing",
        body:
          "Maikling-panahon, project-based, at interim hires na may buong statutory compliance. Particular na epektibo para sa BPO project ramps, parental cover, at market-entry headcount bago ang permanent hire decision.",
        suitable: "3–24 buwan na engagement · Project teams · Market entry",
      },
      executive: {
        title: "Executive at C-Suite Search",
        body:
          "Retained, confidential search para sa C-suite, VP, at Board-level mandates. Nangangako kami sa fully vetted, jurisdiction-ready passive candidate shortlist sa loob ng 21-day initial sprint, namumuno ng milestone-driven SLA.",
        suitable: "CEO, CFO, CTO, COO, VP at higit pa · Cross-border mandates · Stealth-mode searches",
      },
    },
    industries: {
      eyebrow: "Mga industriya",
      headline: "Sa bawat industriya. Mga eksperto sa apat.",
      tech: "Teknolohiya at SaaS",
      finance: "Financial Services at Fintech",
      health: "Healthcare at Life Sciences",
      manufacturing: "Manufacturing at Industrial",
      realestate: "Real Estate at Construction",
      retail: "Retail at E-commerce",
      services: "Professional Services",
      government: "Gobyerno at Public Sector",
    },
    process: {
      eyebrow: "Paano gumagana",
      headline: "Paano gumagana ang search sa Mars",
      step1Title: "Mandate Brief",
      step1Body:
        "Ginugugol namin ang unang sesyon sa pag-unawa hindi lamang sa role, kundi kung bakit ito bukas, kung ano ang mali sa nakaraang hire, at kung anong hitsura ng tagumpay sa 90 araw.",
      step2Title: "Market Mapping",
      step2Body:
        "Ina-mapa namin ang buong talent pool — aktibong kandidato, passive na kandidato, at talent ng mga kakumpetensya. Tumatanggap ka ng market intelligence report bago ang unang CV.",
      step3Title: "Candidate Outreach",
      step3Body:
        "Inaakit namin ang mga kandidato nang maingat. Para sa executive mandates, hindi nagsasabi ng pangalan ng kliyente ang aming outreach hanggang sa makumpirma ang mutual interest.",
      step4Title: "Structured Assessment",
      step4Body:
        "Ang bawat ipinakikitang kandidato ay nakapasa sa structured competency interview, reference check alignment, at jurisdiction-specific background verification framework.",
      step5Title: "Shortlist Presentation",
      step5Body:
        "Tumatanggap ka ng shortlist na 3–5 fully qualified na kandidato sa loob ng napagkasunduang sprint timeline, kasama ang nakasulat na assessment summaries.",
      step6Title: "Offer at Close",
      step6Body:
        "Pinamamahalaan namin ang offer negotiations, counter-offer scenarios, at notice period transitions. Para sa regional hires, direkta kaming nakikipag-ugnayan sa EOR onboarding team.",
    },
    integration: {
      eyebrow: "Recruitment + EOR",
      headline: "Mula offer letter hanggang day one — walang gap",
      p1:
        "Ang tradisyonal na friction point sa international expansion ay ang handoff sa pagitan ng talent acquisition at lokal na HR compliance. Karamihan ng mga firma ay tinuturing ang mga ito bilang magkahiwalay na workstreams. Hindi ang Mars.",
      p2:
        "Sa sandaling tinanggap ng kandidato ang offer, sinisimulan ng aming EOR compliance engine ang lokal na onboarding sequence kasabay ng notice period ng kandidato. Employment contracts ay drafted. Work authorisation ay sinimulan. Payroll profile ay naitatatag. Statutory accounts ay binuksan.",
      p3:
        "Pagdating ng kandidato sa unang araw, sila ay fully compliant at operational. Hindi pending.",
      cta: "Alamin kung paano gumagana ang EOR",
    },
    stats: {
      placements: "Matagumpay na placement",
      placementsValue: "100+",
      since: "Mula 2009",
      sinceValue: "Mula 2009",
      coverage: "APAC coverage",
      coverageValue: "10 markets",
      sprint: "C-suite shortlist sprint",
      sprintValue: "21 araw",
    },
    faq: {
      eyebrow: "FAQ",
      headline: "Mga tanong sa executive mandates",
      q1: "Ano ang SLA model para sa cross-border C-suite at VP-level search mandates?",
      a1:
        "Ang pagsasagawa ng cross-border C-suite at VP-level mandates ay nangangailangan ng absolutong precision at guaranteed na execution timelines. Ang aming retained search model ay namumuno ng masusing, milestone-driven Service Level Agreement. Hindi kami umaasa sa passive job board aggregation.",
      q2: "Paano hinahawakan ang background verification sa magkahalong jurisdictions na may fragmented privacy laws?",
      a2:
        "Ang cross-jurisdiction background checks ay humaharap sa heavily fragmented na privacy at data access laws. Habang ang financial probity ay madaling i-verify sa Singapore, ang mga jurisdiction tulad ng EU o mainland China ay nag-iimpose ng mahigpit na limitasyon sa pag-access ng civil litigation o employment histories.",
    },
    ctaBanner: {
      headline: "Handa nang magsimula ng search?",
      body:
        "Kung kailangan mo ng VP sa Singapore sa susunod na quarter o confidential CFO search sa tatlong jurisdictions, ginawa na namin dati.",
      bullet1: "21-day shortlist sprint para sa retained executive mandates",
      bullet2: "Direktang EOR handoff para sa international placements",
      bullet3: "MOM EA Licence No. 09C2925",
      cta: "Talakayin ang Confidential Search",
    },
  },
  aiPage: {
    metaTitle: "AI Innovation at HR Automation — Mars Consulting",
    metaDesc:
      "AI workflow automation para sa distributed HR teams sa Southeast Asia. WhatsApp-based MC ingestion, AI payroll preprocessing, at embedded AI consulting.",
    pill: "AI Innovation · Mula 2026",
    headlineLead: "Iautomate ang HR at operational workflows",
    headlineAccent: "sa likod ng iyong mga hire",
    sub:
      "Tinutulungan namin ang mga kliyente na i-automate ang high-friction administrative processes na pumapaligid sa distributed teams: medical leave ingestion sa WhatsApp, AI-driven payroll preprocessing, at embedded AI consultants para sa mga koponan na bumubuo ng panloob na automation capabilities.",
    ctaPrimary: "Makipag-usap sa AI Team",
    ctaSecondary: "Tingnan ang Mga Kakayahan",
    capabilities: {
      eyebrow: "Anong binubuo namin",
      headline: "Tatlong kakayahan. Isang operating layer.",
      whatsapp: {
        title: "WhatsApp HR Automation Bot",
        body:
          "Isang ligtas, WhatsApp-based automation bot na gumagana bilang AI-driven na digital employee. Nagsusumite ang mga empleyado ng larawan ng medical certificates o expense receipts direkta sa WhatsApp; OCR + LLM-driven structured extraction ang nagke-key ng mga petsa, pangalan ng klinika, diagnosis codes, at rest durations.",
        bullet1: "MC processing: 14 araw → 3 minuto",
        bullet2: "Real-time leave balance updates",
        bullet3: "Direktang API push sa HRIS / payroll",
      },
      payroll: {
        title: "AI Payroll Preprocessing",
        body:
          "AI calculation engines na nagpoproseso ng raw operational data — POS feeds, attendance logs, commission triggers — papunta sa auditable pre-payroll files. Decoupled mula sa final financial execution upang mapanatili ang immutable audit trails para sa statutory reporting.",
        bullet1: "Tiered commission structures sa 40+ na lokasyon",
        bullet2: "Pre-payroll cycle time: 5 araw → 4 oras",
        bullet3: "Cryptographically hashed adjustment ledger",
      },
      consultants: {
        title: "Embedded AI Consultants",
        body:
          "Senior AI consultants at prompt engineers na ipinadala sa loob ng iyong team. Fractional Head of AI na maipapadala sa loob ng 2 linggo. Bumuo ng panloob na automation capabilities nang hindi nag-hihire ng full AI team.",
        bullet1: "Fractional Head of AI · 2-week deployment",
        bullet2: "Workflow automation pods",
        bullet3: "AI readiness audit at rollout playbook",
      },
    },
    compliance: {
      eyebrow: "Data residency at governance",
      headline: "PDPA-aligned. Closed-loop. Walang training leakage.",
      p1:
        "Ang pag-deploy ng LLM sa human resources ay nangangailangan ng masusing data governance. Ang aming AI architecture ay tumatakbo nang mahigpit sa enterprise-grade, closed-loop model instances. Ang client HR data ay hindi kailanman ginagamit para sa foundational model training.",
      p2:
        "Ipinatutupad namin ang mahigpit na data residency protocols, na tinitiyak na ang lahat ng pagproseso at pag-imbak ng personally identifiable information ay nangyayari sa lokal, sovereign na servers na nakahanay sa direktiba ng compliance ng kliyente. Ang sensitibong fields ay sumasailalim sa programmatic anonymisation at tokenisation bago ang LLM processing.",
      badgeTitle: "PDPA · Singapore data residency",
      badgeBody:
        "Ang confidentiality controls ay nananatiling buo habang naaabot ang operational velocity ng generative AI.",
    },
    faq: {
      eyebrow: "FAQ",
      headline: "Mga tanong tungkol sa AI sa HR",
      q1: "Paano hinahawakan ng WhatsApp-based HR automation bot ang ingestion at structured extraction?",
      a1:
        "Ang aming AI workflow automation architecture ay nireresolba ang high-friction administrative processes para sa distributed teams sa Southeast Asia. Nag-deploy kami ng ligtas, WhatsApp-based automation bot na gumagana bilang AI-driven na digital employee. Ang ingestion flow ay nagsisimula sa mga empleyadong nagsusumite ng larawan ng medical certificates o expense receipts direkta sa WhatsApp.",
      q2: "Paano nag-integrate ang AI Workflow Automation sa statutory payroll cycles nang hindi nababasag ang audit trails?",
      a2:
        "Ang pag-integrate ng AI workflow automation sa statutory payroll ay nangangailangan ng zero-fault tolerance architecture. Hinihiwalay namin ang AI processing layer mula sa final financial execution layer upang mapanatili ang immutable audit trails. Kapag pinoproseso ng aming AI systems ang raw operational data, ang output ay staged sa pre-payroll validation environment.",
      q3: "Anong data residency at confidentiality controls ang umiiral para sa LLM-mediated HR data?",
      a3:
        "Ang pag-deploy ng LLM sa human resources ay nangangailangan ng masusing data governance upang masiyahan ang multi-jurisdictional privacy laws, partikular ang PDPA ng Singapore. Ang aming AI architecture ay tumatakbo nang mahigpit sa enterprise-grade, closed-loop model instances. Ang client HR data ay hindi kailanman ginagamit para sa foundational model training.",
    },
    ctaBanner: {
      headline: "Mag-apply bilang pilot partner",
      body:
        "Founding-partner pricing para sa mga maagang deployment. Tumatanggap kami ng maliit na cohort ng pilot partners upang sama-samang mag-design ng susunod na henerasyon ng HR automation.",
      cta: "Mag-apply bilang Pilot Partner",
    },
  },
  aboutPage: {
    metaTitle: "Tungkol sa Mars Consulting — Singapore HR at EOR Specialists Mula 2009",
    metaDesc:
      "Itinatag ang Mars Consulting sa Singapore noong Abril 2009. Mula 2009 ng HR, EOR, at executive search experience sa 10 markets. MOM EA Licence No. 09C2925.",
    pill: "Tungkol sa Mars Consulting",
    headlineLead: "Labing-pitong Taon ng Pagbuo ng",
    headlineAccent: "HR Infrastructure",
    headlineTail: "Sa Likod ng Global Teams",
    sub:
      "Itinatag ang Mars Consulting sa Singapore noong Abril 2009 na may iisang paniniwala: na ang mga magagandang negosyo ay binubuo ng tamang tao, inilagay sa tamang role, sinusuportahan ng tamang sistema. Ngayon kami ay full-service HR partner sa 10 markets — nagbibigay ng Employer of Record, global payroll, executive search, HR outsourcing, at AI-powered process automation sa mga kompanya sa bawat yugto ng paglago.",
    timeline: {
      eyebrow: "Aming paglalakbay",
      headline: "Paano kami nakarating dito",
      y2009:
        "Itinatag sa Singapore. Sa simula ay nakatuon sa permanent at contract recruitment para sa technology at financial services sectors. Itinayo mula sa unang araw sa prinsipyo na ang HR advice ay kasing-husay lamang ng operational knowledge sa likod nito.",
      y2013:
        "Pinalawak sa Business Process Outsourcing. Pinalawak ang industriya na saklaw lampas sa tech at finance papunta sa real estate at construction — nagdadala ng structured HR operations sa mga sektor na historically umaasa sa informal hiring practices.",
      y2017:
        "Inilunsad ang Employer of Record services. Pinalawak ang geographic coverage sa 6+ na bansa sa APAC, binubuksan ang capability sa lahat ng industriya. Tinandaan nito ang shift mula sa regional recruiter papunta sa cross-border HR infrastructure provider.",
      y2020:
        "Ipinakilala ang HR Outsourcing — itinanim ang experienced HR consultants direkta sa loob ng client organisations para sa strategic at operational na trabaho. Ang modelong ito ay nagbibigay-daan sa mga kompanya na ma-access ang senior HR capability nang walang gastos ng full-time hire.",
      y2026:
        "Inilunsad ang AI Innovation practice — tumutulong sa mga kliyente na i-automate ang HR at business workflows sa pamamagitan ng intelligent process design, WhatsApp-based automation, at embedded AI consulting teams.",
    },
    founder: {
      eyebrow: "Tagapagtatag",
      headline: "Pinamumunuan ng practitioner. Hindi ng consultant.",
      p1Lead: "Itinatag ang Mars Consulting ni",
      p1Name: "Yuggie Wang",
      p1Tail:
        ", isang Singapore-based HR at enterprise systems professional na may malalim na expertise sa SAP HR platforms at workforce management strategy.",
      p2:
        "Sa background na sumasaklaw sa enterprise technology at human capital operations, itinayo ni Yuggie ang Mars Consulting sa paniniwala na ang HR advice ay dapat naka-grounded sa operational reality — na ang mga taong nakakaintindi kung paano talaga gumagana ang mga sistema ay siyang pinakamabuti na mag-design ng mga structures na sumusuporta sa kanila.",
      p3:
        "Ang pilosopyang ito ang humuhubog sa lahat: kung paano namin ina-scope ang engagements, kung paano namin ina-staff ang projects, at kung paano namin sinasabi sa mga kliyente kapag ang mas simpleng solusyon ang tamang pagpipilian.",
    },
    numbers: {
      years: "Taon ng operasyon",
      markets: "Mga market na saklaw",
      consultants: "Mga eksperto sa pagkonsulta",
      clients: "Pandaigdigang kliyente",
      placements: "Matagumpay na placement",
    },
    licences: {
      eyebrow: "Mga lisensya at regulatory standing",
      headline: "Lisensyado, regulated, at responsable",
      body:
        "Ang Mars Consulting ay tumatakbo sa ilalim ng buong regulatory compliance sa Singapore. Ang aming mga lisensya at registrations ay publicly verifiable sa MOM at ACRA registers.",
      momAuthority: "Ministry of Manpower (MOM)",
      momLabel: "Comprehensive EA Licence",
      momCode: "Licence No. 09C2925",
      momNote:
        "Employment Agency licence — nagpapahintulot sa placement ng lokal at dayuhang kandidato sa Singapore.",
      acraAuthority: "ACRA Singapore",
      acraLabel: "Corporate Service Provider",
      acraCode: "Registered Filing Agent (RFA)",
      acraNote: "Accounting at Corporate Regulatory Authority registration.",
      verifiable:
        "Ang detalye ng lisensya ay publicly verifiable sa MOM Employment Agency Directory at ACRA BizFile+ register.",
    },
    principles: {
      eyebrow: "Anong pinaninindigan namin",
      headline: "Paano kami gumagana",
      honestTitle: "Honest scoping",
      honestBody:
        "Sinasabi namin sa mga kliyente kapag sapat na ang SaaS platform at hindi nila kami kailangan. Tumatanggap lang kami ng engagement kung saan ang aming kakayahan ay nagdadagdag ng material value sa mas murang alternative.",
      depthTitle: "Operational depth",
      depthBody:
        "Hindi namin nag-su-subcontract ang jurisdiction-specific compliance sa mga third party na hindi pa namin nakatrabaho. Bawat bansang aming pinatatakbo ay may itinatag na in-country partner relationship na binuo sa loob ng mga taon, hindi sourced para sa isang engagement.",
      accountTitle: "Isang punto ng pananagutan",
      accountBody:
        "Anuman ang dami ng bansa o serbisyong sangkot, isang relationship manager ang responsable sa buong saklaw ng trabaho. Hindi mo pinamamahalaan ang isang network ng supplier. Pinamamahalaan mo ang isang tawag.",
    },
    ctaBanner: {
      headline: "Mula 2009g nagiging operator sa likod ng operator",
      body:
        "Makipag-usap sa Singapore-licensed na specialist tungkol sa EOR, executive search, o AI-powered HR automation sa APAC.",
      cta: "Mag-book ng Tawag",
    },
  },
};

export default fil;
