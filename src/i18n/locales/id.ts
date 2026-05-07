// Bahasa Indonesia — initial translation. Native review recommended before production.
import type { Translation } from "./en";

const id: Translation = {
  nav: {
    eor: "EOR",
    hrAi: "HR untuk Perusahaan AI",
    aiLab: "Lab Inovasi AI",
    about: "Tentang",
    contact: "Kontak",
    bookCall: "Pesan panggilan",
  },
  hero: {
    pill: "Sejak 2009 · 17 tahun di Singapura",
    headlineLead: "Mitra EOR & HR untuk",
    headlineAccent: "era AI Asia Tenggara.",
    sub:
      "Rekrut, bayar, dan tetap patuh di 8 pasar APAC — tanpa mendirikan entitas lokal. Satu mitra berlisensi Singapura yang menjalankan ini sejak 2009, kini dibangun untuk tim AI-native.",
    ctaPrimary: "Pesan panggilan EOR 20 menit",
    ctaSecondary: "Mengapa Mars",
    statYears: "Tahun di Singapura",
    statMarkets: "Pasar APAC",
    statEmployers: "Perusahaan dilayani",
    snapshotEyebrow: "Snapshot kepatuhan bulanan",
    snapshotSample: "Contoh · April 2026 · Klien A (anonim)",
    snapshotStatus: "Tepat waktu",
    snapshotHeadcount: "Karyawan dikelola",
    snapshotDelta: "+12 bulan ini",
    snapshotPayroll: "Penggajian dijalankan",
    snapshotPayrollValue: "SGD 412,890 · selesai",
    snapshotBadge: "3 lisensi SG · 0 keterlambatan statutori",
    statConsultants: "Konsultan ahli",
    statClients: "Klien global",
    statPlacements: "Penempatan berhasil",
    statLicence: "Lisensi MOM EA 09C2925",
  },
  marquee: {
    label: "100+ perusahaan · sejak 2009",
  },
  licenses: {
    eyebrow: "Berlisensi & diatur di Singapura",
    mom: {
      authority: "Kementerian Tenaga Kerja Singapura",
      label: "Lisensi MOM EA",
      code: "Lisensi No. 09C2925",
    },
    mas: {
      authority: "Otoritas Moneter Singapura",
      label: "Pengecualian Layanan Penggajian",
      code: "Entitas dikecualikan MAS",
    },
    acra: {
      authority: "ACRA Singapura",
      label: "Agen Pengarsipan Terdaftar",
      code: "Berlisensi ACRA",
    },
  },
  countries: {
    eyebrow: "Cakupan",
    headline:
      "Rekrut secara patuh di 8 pasar APAC — di bawah satu kontrak Singapura.",
    body:
      "Kami menjalankan penggajian, pengarsipan statutori, dan kontrak kerja di pasar-pasar ini sejak 2009. Anda tetap operator; kami tetap pemberi kerja sah.",
    statOnboarding: "Onboarding",
    statOnboardingValue: "5 hari",
    statMisses: "Keterlambatan statutori",
    statLicences: "Lisensi SG",
    name: {
      IN: "India",
      TH: "Thailand",
      HK: "Hong Kong",
      VN: "Vietnam",
      PH: "Filipina",
      MY: "Malaysia",
      SG: "Singapura",
      ID: "Indonesia",
    },
  },
  pillars: {
    eyebrow: "Apa yang kami lakukan",
    headline: "Tiga cara kami membantu Anda membangun tim yang patuh di Asia.",
    body:
      "Rekrutmen dan outsourcing BD masih tersedia atas permintaan — namun fokus kami di 2026 adalah tiga program di bawah ini.",
    alsoAvailable:
      "Juga tersedia atas permintaan: rekrutmen kontingen dan outsourcing BD Asia — ",
    talkToUs: "hubungi kami",
    eor: {
      tag: "Unggulan · P0",
      title: "EOR / Pekerjaan lintas batas",
      blurb:
        "Rekrut talenta penuh waktu di 8 pasar APAC tanpa mendaftarkan entitas lokal. Kami menjadi pemberi kerja sah; Anda mengarahkan pekerjaannya.",
      bullet1: "Cakupan: SG · MY · ID · VN · TH · PH · HK · IN",
      bullet2: "Penggajian patuh, CPF/EPF/BPJS/MPF, pengarsipan statutori",
      bullet3: "Kontrak kerja dalam bahasa lokal, IP & NDA disertakan",
      bullet4: "Onboarding secepat 5 hari kerja",
      cta: "Dapatkan penawaran EOR",
    },
    hrAi: {
      tag: "P0 · Tersedia sekarang",
      title: "HR untuk Perusahaan AI",
      blurb:
        "Solusi terpaket untuk startup AI yang berkembang lintas batas: rekrutmen tingkat riset plus EOR untuk perekrutan cepat dan patuh.",
      bullet1: "Merekrut peneliti ML, AI terapan, infra, GTM",
      bullet2: "EOR + kontrak sadar ekuitas (RSU / ISO / phantom)",
      bullet3: "Penyiapan tim lintas batas SG ↔ JP ↔ ID ↔ US",
      bullet4: "Pencarian rahasia untuk tim stealth",
      cta: "Hubungi tim HR AI",
    },
    aiLab: {
      tag: "Program Mitra Pilot",
      title: "Lab Inovasi AI",
      blurb:
        "Tempatkan konsultan AI senior dan prompt engineer ke dalam tim Anda. Kami sedang menerima mitra pendiri.",
      bullet1: "Fractional Head of AI, dapat ditempatkan dalam 2 minggu",
      bullet2: "Pod prompt engineering & otomasi alur kerja",
      bullet3: "Audit kesiapan AI dan playbook implementasi",
      bullet4: "Slot terbatas — harga mitra pendiri",
      cta: "Daftar sebagai Mitra Pilot",
    },
  },
  comparison: {
    eyebrow: "EOR vs Entitas vs Kontraktor",
    headline: "Tiga cara untuk menempatkan seseorang di lapangan di Asia.",
    body:
      "Dirikan entitas sendiri, rekrut sebagai kontraktor, atau gunakan Mars sebagai Employer of Record Anda. Berikut perbandingan ketiganya pada angka yang penting.",
    headers: {
      dimension: "Dimensi",
      entity: "Dirikan entitas lokal",
      contractor: "Rekrut sebagai kontraktor",
      mars: "Mars EOR",
    },
    rows: {
      time: {
        label: "Waktu rekrut karyawan #1",
        entity: "3–9 bulan",
        contractor: "1–2 minggu",
        mars: "5 hari kerja",
      },
      contract: {
        label: "Kontrak kerja lokal",
        entity: "Anda yang menyusun",
        contractor: "Bukan pekerjaan",
        mars: "Kontrak bahasa lokal, IP & NDA",
      },
      payroll: {
        label: "Penggajian & pengarsipan statutori",
        entity: "Anda jalankan + arsip",
        contractor: "Pekerja arsip sendiri",
        mars: "CPF/EPF/BPJS/MPF — kami arsip",
      },
      risk: {
        label: "Risiko salah klasifikasi",
        entity: "Rendah (entitas)",
        contractor: "Tinggi",
        mars: "Rendah (kami pemberi kerja)",
      },
      cost: {
        label: "Biaya penyiapan",
        entity: "USD 15–40k + berkelanjutan",
        contractor: "Tidak ada",
        mars: "Biaya bulanan per karyawan",
      },
    },
    cta: "Dapatkan penawaran negara per negara",
    response: "Respons rata-rata: dalam 4 jam kerja",
  },
  howItWorks: {
    eyebrow: "Bagaimana EOR bekerja dengan Mars",
    headline: "Dari surat penawaran ke penggajian — dalam satu alur.",
    ctaQuote: "Dapatkan penawaran",
    stepLabel: "Langkah",
    step1: {
      title: "Beri tahu kami siapa dan di mana",
      desc:
        "Bagikan negara, peran, kisaran gaji, dan tanggal mulai. Kami berikan penawaran dalam 4 jam kerja, lengkap dengan rincian biaya statutori.",
    },
    step2: {
      title: "Kami menyusun kontrak lokal",
      desc:
        "Perjanjian kerja patuh, pengalihan IP dan NDA dalam bahasa lokal. Pengakuan ekuitas (RSU / ISO / phantom) ditangani jika ada.",
    },
    step3: {
      title: "Karyawan tanda tangan & onboarding",
      desc:
        "Akun statutori dibuka, perangkat dikirim, manfaat didaftarkan. Mayoritas karyawan onboarding penuh dalam 5 hari kerja.",
    },
    step4: {
      title: "Kami menjalankan penggajian & kepatuhan",
      desc:
        "Satu invoice bulanan dari Mars. CPF / EPF / BPJS / MPF dan setaranya diarsipkan di setiap pasar — kami kirim laporan; Anda tidak melakukan apa-apa.",
    },
  },
  clients: {
    eyebrow: "Bekerja dengan operator di seluruh APAC",
    headline: "Dari startup AI Series-A hingga manufaktur tercatat.",
    logosNote: "· Logo klien tersedia di bawah NDA atas permintaan",
  },
  testimonial: {
    eyebrow: "Cerita klien",
    headline: "Dipercaya oleh tim yang berkembang di seluruh APAC.",
    body:
      "Didirikan di Singapura pada 2009, Mars Consulting telah berkembang dari butik rekrutmen menjadi platform pekerjaan regional — secara diam-diam menjalankan perekrutan, penggajian, dan kepatuhan untuk startup AI, scale-up, dan perusahaan terkait pemerintah di seluruh Asia Tenggara.",
    quote:
      "Mars melakukan onboarding tim riset kami di Singapura dan Jakarta dalam waktu kurang dari dua minggu. Mereka menangani semuanya — kontrak, pengakuan ekuitas, pengarsipan statutori lokal — sehingga kami bisa fokus pada pengiriman model.",
    attribution: "Head of People · Perusahaan AI Series-B",
    location: "Singapura ↔ Jakarta · 12 perekrutan di 2025",
    statClients: "Klien global",
    statConsultants: "Konsultan",
    statLicences: "Lisensi SG",
  },
  contact: {
    eyebrow: "Bicaralah dengan spesialis berlisensi Singapura",
    headline: "Lihat apakah EOR pilihan tepat — dalam 20 menit.",
    bullet1: "Rincian biaya negara per negara",
    bullet2: "Contoh kontrak & checklist onboarding",
    bullet3: "Jawaban jujur apakah Anda sebaiknya mendirikan entitas",
    response: "Respons rata-rata: dalam 4 jam kerja",
    label: {
      email: "Email kerja",
      company: "Perusahaan",
      country: "Negara untuk perekrutan",
      hires: "Jumlah perekrutan (6 bulan ke depan)",
    },
    placeholder: {
      email: "anda@perusahaan.com",
      company: "Nama perusahaan",
      country: "mis. Indonesia",
      hires: "5",
    },
    submit: "Pesan panggilan 20 menit saya",
    privacy:
      "Kami balas dalam 4 jam kerja, waktu Singapura. Dengan mengirim Anda menyetujui kebijakan privasi kami.",
  },
  footer: {
    tagline:
      "Employer of Record berlisensi Singapura dan layanan HR di seluruh Asia Tenggara. Sejak 2009.",
    sections: {
      solutions: "Solusi",
      company: "Perusahaan",
      compliance: "Kepatuhan",
    },
    copyright: "© {{year}} Mars Consulting Pte Ltd. Hak cipta dilindungi.",
    cities: "Singapura · Jakarta · Ho Chi Minh City · Kuala Lumpur",
    compliance:
      "Lisensi MOM EA Komprehensif No. 09C2925  ·  Penyedia Layanan Korporat ACRA & Agen Pengarsipan Terdaftar  ·  Sekretaris Korporat Terdaftar",
  },
};

export default id;
