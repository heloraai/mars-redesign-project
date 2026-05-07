// Filipino — initial translation. Native review recommended before production.
import type { Translation } from "./en";

const fil: Translation = {
  nav: {
    eor: "EOR",
    hrAi: "HR para sa AI Companies",
    aiLab: "AI Innovation Lab",
    about: "Tungkol",
    contact: "Kontak",
    bookCall: "Mag-book ng tawag",
  },
  hero: {
    pill: "Mula 2009 · 17 taon sa Singapore",
    headlineLead: "EOR & HR partner para sa",
    headlineAccent: "AI era ng Southeast Asia.",
    sub:
      "Mag-hire, magbayad, at manatiling compliant sa 8 APAC markets — nang hindi nagtatayo ng lokal na entity. Isang Singapore-licensed partner na nagpapatakbo nito mula 2009, ngayon ay para sa AI-native teams.",
    ctaPrimary: "Mag-book ng 20-min EOR call",
    ctaSecondary: "Bakit Mars",
    statYears: "Taon sa Singapore",
    statMarkets: "APAC markets",
    statEmployers: "Employers na pinaglingkuran",
    snapshotEyebrow: "Buwanang compliance snapshot",
    snapshotSample: "Halimbawa · Abril 2026 · Client A (anonymized)",
    snapshotStatus: "Nasa oras",
    snapshotHeadcount: "Empleyadong pinamamahalaan",
    snapshotDelta: "+12 ngayong buwan",
    snapshotPayroll: "Payroll run",
    snapshotPayrollValue: "SGD 412,890 · natapos",
    snapshotBadge: "3 SG licences · 0 statutory misses",
    statConsultants: "Mga eksperto na consultant",
    statClients: "Mga global na kliyente",
    statPlacements: "Matagumpay na placement",
    statLicence: "MOM EA Licence 09C2925",
  },
  marquee: {
    label: "100+ employers · mula 2009",
  },
  licenses: {
    eyebrow: "Lisensiyado at regulado sa Singapore",
    mom: {
      authority: "Ministry of Manpower (Singapore)",
      label: "MOM EA Licence",
      code: "Licence No. 09C2925",
    },
    mas: {
      authority: "Monetary Authority of Singapore",
      label: "Payroll Service Exemption",
      code: "MAS-exempted entity",
    },
    acra: {
      authority: "ACRA Singapore",
      label: "Registered Filing Agent",
      code: "ACRA-licensed",
    },
  },
  countries: {
    eyebrow: "Sakop",
    headline:
      "Mag-hire nang may compliance sa 8 APAC markets — sa ilalim ng isang Singapore contract.",
    body:
      "Pinapatakbo namin ang payroll, statutory filings, at employment contracts sa mga market na ito mula 2009. Kayo ang operator; kami ang legal na employer.",
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
  pillars: {
    eyebrow: "Ano ang ginagawa namin",
    headline: "Tatlong paraan para makabuo ng compliant na team sa Asia.",
    body:
      "Nananatiling available ang recruiting at BD outsourcing kapag hiniling — pero ang focus namin sa 2026 ay ang tatlong programa sa baba.",
    alsoAvailable:
      "Available din kapag hiniling: contingent recruiting at Asia BD outsourcing — ",
    talkToUs: "kausapin kami",
    eor: {
      tag: "Flagship · P0",
      title: "EOR / Cross-border employment",
      blurb:
        "Mag-hire ng full-time talent sa 8 APAC markets nang hindi nagre-register ng lokal na entity. Kami ang nagiging legal employer; kayo ang nagpapatakbo ng trabaho.",
      bullet1: "Sakop: SG · MY · ID · VN · TH · PH · HK · IN",
      bullet2: "Compliant payroll, CPF/EPF/BPJS/MPF, statutory filings",
      bullet3: "Employment contracts sa lokal na wika, kasama ang IP at NDA",
      bullet4: "Onboarding sa loob lang ng 5 working days",
      cta: "Kumuha ng EOR quote",
    },
    hrAi: {
      tag: "P0 · Available na",
      title: "HR para sa AI Companies",
      blurb:
        "Packaged solution para sa AI startups na nag-cross-border na scale: research-grade recruiting kasama ang EOR para sa mabilis at compliant na hiring.",
      bullet1: "Mag-recruit ng ML researchers, applied AI, infra, GTM",
      bullet2: "EOR + equity-aware contracts (RSU / ISO / phantom)",
      bullet3: "Cross-border team setup SG ↔ JP ↔ ID ↔ US",
      bullet4: "Confidential search para sa stealth-mode teams",
      cta: "Kausapin ang AI HR team",
    },
    aiLab: {
      tag: "Pilot Partner Program",
      title: "AI Innovation Lab",
      blurb:
        "I-embed ang senior AI consultants at prompt engineers sa team mo. Kasalukuyang nag-o-onboard kami ng founding partners.",
      bullet1: "Fractional Head of AI, deployable sa 2 linggo",
      bullet2: "Prompt-engineering at workflow automation pods",
      bullet3: "AI readiness audit at rollout playbook",
      bullet4: "Limitadong slots — founding-partner pricing",
      cta: "Mag-apply bilang Pilot Partner",
    },
  },
  comparison: {
    eyebrow: "EOR vs Entity vs Contractor",
    headline: "Tatlong paraan para magkaroon ng tao sa Asia.",
    body:
      "Magtayo ng sariling entity, mag-hire bilang contractor, o gamitin ang Mars bilang Employer of Record mo. Ito ang paghahambing ng tatlo sa mga numerong mahalaga.",
    headers: {
      dimension: "Dimension",
      entity: "Magtayo ng lokal na entity",
      contractor: "Mag-hire bilang contractor",
      mars: "Mars EOR",
    },
    rows: {
      time: {
        label: "Oras para mag-hire ng unang empleyado",
        entity: "3–9 buwan",
        contractor: "1–2 linggo",
        mars: "5 working days",
      },
      contract: {
        label: "Lokal employment contract",
        entity: "Kayo ang gumagawa",
        contractor: "Hindi employment",
        mars: "Local-language contract, IP & NDA",
      },
      payroll: {
        label: "Payroll at statutory filings",
        entity: "Kayo ang nagpapatakbo at nag-fa-file",
        contractor: "Manggagawa ang nag-fa-file",
        mars: "CPF/EPF/BPJS/MPF — kami ang nag-fa-file",
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
        mars: "Buwanang bayad kada empleyado",
      },
    },
    cta: "Kumuha ng country-by-country quote",
    response: "Average response: sa loob ng 4 business hours",
  },
  howItWorks: {
    eyebrow: "Paano gumagana ang EOR sa Mars",
    headline: "Mula offer letter hanggang payroll — sa isang workflow.",
    ctaQuote: "Kumuha ng quote",
    stepLabel: "Hakbang",
    step1: {
      title: "Sabihin sa amin kung sino at saan",
      desc:
        "Ibahagi ang bansa, role, salary band at start date. Magbibigay kami ng quote sa loob ng 4 business hours, kasama ang buong statutory cost breakdown.",
    },
    step2: {
      title: "Kami ang gumagawa ng lokal contracts",
      desc:
        "Compliant employment agreement, IP assignment at NDA sa lokal na wika. Hahawakan ang equity acknowledgements (RSU / ISO / phantom) kapag mayroon.",
    },
    step3: {
      title: "Pumirma at nag-onboard ang empleyado",
      desc:
        "Bukas ang statutory accounts, ipinadala ang gamit, naka-enroll ang benefits. Karamihan ay ganap na naka-onboard sa loob ng 5 working days.",
    },
    step4: {
      title: "Kami ang nagpapatakbo ng payroll at compliance",
      desc:
        "Isang buwanang invoice mula sa Mars. CPF / EPF / BPJS / MPF at katumbas nito ang fa-file sa bawat market — kami ang magpapadala ng report; wala kang gagawin.",
    },
  },
  clients: {
    eyebrow: "Nakikipagtulungan sa mga operator sa buong APAC",
    headline: "Mula Series-A AI startups hanggang listed manufacturers.",
    logosNote: "· Available ang client logos sa ilalim ng NDA kapag hiniling",
  },
  testimonial: {
    eyebrow: "Kuwento ng kliyente",
    headline: "Pinagkakatiwalaan ng mga koponan na lumalago sa buong APAC.",
    body:
      "Itinatag sa Singapore noong 2009, lumago ang Mars Consulting mula isang recruiting boutique tungo sa regional employment platform — tahimik na pinapatakbo ang hiring, payroll at compliance para sa AI startups, scale-ups at government-linked enterprises sa buong Southeast Asia.",
    quote:
      "Na-onboard ng Mars ang research team namin sa Singapore at Jakarta sa loob ng wala pang dalawang linggo. Lahat ay inasikaso nila — contracts, equity acknowledgements, lokal statutory filings — para makapag-focus kami sa pag-ship ng models.",
    attribution: "Head of People · Series-B AI company",
    location: "Singapore ↔ Jakarta · 12 hires noong 2025",
    statClients: "Global clients",
    statConsultants: "Consultants",
    statLicences: "SG licences",
  },
  contact: {
    eyebrow: "Kausapin ang Singapore-licensed na specialist",
    headline: "Tingnan kung tama ang EOR — sa loob ng 20 minuto.",
    bullet1: "Country-by-country cost breakdown",
    bullet2: "Sample contract at onboarding checklist",
    bullet3: "Tapat na sagot kung dapat ka bang magtayo ng entity",
    response: "Average response: sa loob ng 4 business hours",
    label: {
      email: "Work email",
      company: "Kumpanya",
      country: "Bansa para mag-hire",
      hires: "Bilang ng hires (susunod na 6 buwan)",
    },
    placeholder: {
      email: "ikaw@kumpanya.com",
      company: "Pangalan ng kumpanya",
      country: "hal. Indonesia",
      hires: "5",
    },
    submit: "I-book ang aking 20-min call",
    privacy:
      "Sumasagot kami sa loob ng 4 business hours, oras ng Singapore. Sa pag-submit, sumasang-ayon kayo sa privacy policy namin.",
  },
  footer: {
    tagline:
      "Singapore-licensed Employer of Record at HR services sa buong Southeast Asia. Mula 2009.",
    sections: {
      solutions: "Solutions",
      company: "Kumpanya",
      compliance: "Compliance",
    },
    copyright: "© {{year}} Mars Consulting Pte Ltd. Lahat ng karapatan ay nakalaan.",
    cities: "Singapore · Jakarta · Ho Chi Minh City · Kuala Lumpur",
    compliance:
      "MOM Comprehensive EA Licence No. 09C2925  ·  ACRA Corporate Service Provider & Registered Filing Agent  ·  Registered Corporate Secretary",
  },
};

export default fil;
