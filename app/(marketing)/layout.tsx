import SiteHeader from "@/components/layout/SiteHeader";
import Footer from "@/components/layout/Footer";
import WhatsAppFab from "@/components/layout/WhatsAppFab";

// Shared chrome for every main-site page. Standalone pages (e.g. /community)
// live outside this route group and keep their own header.
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow">{children}</main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
