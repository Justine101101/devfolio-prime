import { useEffect, useState } from "react";
import { Sidebar } from "@/components/portfolio/Sidebar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Resume } from "@/components/portfolio/Resume";
import { Portfolio } from "@/components/portfolio/Portfolio";
import { Services } from "@/components/portfolio/Services";
import { Contact } from "@/components/portfolio/Contact";

const SECTIONS = ["home", "about", "resume", "portfolio", "services", "contact"];

const Index = () => {
  const [active, setActive] = useState("home");

  const handleNavigate = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Sidebar active={active} onNavigate={handleNavigate} />
      <main className="lg:pl-72">
        <Hero onNavigate={handleNavigate} />
        <About />
        <Resume />
        <Portfolio />
        <Services />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
