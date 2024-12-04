import AboutSection from "@/components/home/AboutSection";
import InterestsSection from "@/components/home/InterestsSection";
import NewsSection from "@/components/NewsSection";
import PortfolioSection from "@/components/portfolio/PortfolioSection";
import PublicationsSection from "@/components/SelectedPublicationsSection";
import bibtex from "@/data/bib/Publications.bib";
import { homepageSection } from "@/website.config";
import QuoteSection from "@/components/home/QuoteSection";

export default function Page() {
  return (
    <main className="md:w-[40rem] m-auto px-8 mt-32 flex flex-col gap-10 mb-20">
      {homepageSection.AboutSection && <AboutSection />}
      {homepageSection.ResearchInterestSection && <InterestsSection />}
      {homepageSection.SelectedQuoteSection && <QuoteSection />}
      {/*{homepageSection.SelectedPublicationsSection && (*/}
      {/*  <PublicationsSection bibtex={bibtex} />*/}
      {/*)}*/}
      {/*{homepageSection.PortfolioSection && (*/}
      {/*  <div className="flex flex-col gap-3">*/}
      {/*    <h1 className="text-3xl font-semibold">Projects</h1>*/}
      {/*    <PortfolioSection />*/}
      {/*  </div>*/}
      {/*)}*/}
    </main>
  );
}
