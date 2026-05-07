import { useTranslation } from "react-i18next";
import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SUPPORTED_LANGUAGES } from "@/i18n";

const COPY: Record<string, { heading: string; body: string; cta: string }> = {
  id: {
    heading: "Versi Bahasa Indonesia segera hadir",
    body: "Situs lengkap kami sedang diterjemahkan oleh penutur asli. Sementara itu, lihat versi bahasa Inggris di bawah.",
    cta: "Lanjutkan dalam bahasa Inggris",
  },
  ms: {
    heading: "Versi Bahasa Melayu akan datang",
    body: "Laman web penuh kami sedang diterjemahkan oleh penutur asli. Sementara itu, lihat versi bahasa Inggeris di bawah.",
    cta: "Teruskan dalam bahasa Inggeris",
  },
  th: {
    heading: "เวอร์ชันภาษาไทยกำลังจะมา",
    body: "เว็บไซต์เวอร์ชันเต็มของเรากำลังได้รับการแปลโดยเจ้าของภาษา ในระหว่างนี้ โปรดดูเวอร์ชันภาษาอังกฤษด้านล่าง",
    cta: "ดำเนินการต่อในภาษาอังกฤษ",
  },
  vi: {
    heading: "Phiên bản tiếng Việt sắp ra mắt",
    body: "Trang web đầy đủ của chúng tôi đang được dịch bởi người bản ngữ. Trong thời gian chờ đợi, vui lòng xem phiên bản tiếng Anh bên dưới.",
    cta: "Tiếp tục bằng tiếng Anh",
  },
  fil: {
    heading: "Bersyon sa Filipino — paparating na",
    body: "Isinasalin pa ng mga katutubong tagapagsalita ang buong website. Sa ngayon, tingnan ang bersyong Ingles sa ibaba.",
    cta: "Magpatuloy sa Ingles",
  },
  hi: {
    heading: "हिन्दी संस्करण जल्द ही आ रहा है",
    body: "हमारी पूर्ण वेबसाइट का अनुवाद देशी वक्ताओं द्वारा किया जा रहा है। इस बीच, नीचे अंग्रेज़ी संस्करण देखें।",
    cta: "अंग्रेज़ी में जारी रखें",
  },
};

export const ComingSoon = () => {
  const { i18n } = useTranslation();
  const code = i18n.resolvedLanguage ?? "en";
  const lang = SUPPORTED_LANGUAGES.find((l) => l.code === code) ?? SUPPORTED_LANGUAGES[0];
  const copy = COPY[code] ?? COPY.id;

  return (
    <main className="grid min-h-[100svh] place-items-center bg-background px-6 py-24 text-foreground">
      <div className="mx-auto flex max-w-xl flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
          <Languages className="h-3.5 w-3.5" />
          {lang.native}
        </span>
        <h1 className="mt-6 font-display text-3xl font-semibold leading-tight sm:text-4xl">
          {copy.heading}
        </h1>
        <p className="mt-5 text-base text-muted-foreground sm:text-lg">{copy.body}</p>
        <Button
          onClick={() => void i18n.changeLanguage("en")}
          size="lg"
          className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90"
        >
          {copy.cta}
        </Button>
        <p className="mt-10 text-xs uppercase tracking-[0.16em] text-muted-foreground/70">
          Mars Consulting · Singapore · Since 2009
        </p>
      </div>
    </main>
  );
};
