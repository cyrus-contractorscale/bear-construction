import { MainNav } from "@/components/layout/MainNav";
import { Footer } from "@/components/sections/Footer";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MainNav />
      {children}
      <Footer />
    </>
  );
}
