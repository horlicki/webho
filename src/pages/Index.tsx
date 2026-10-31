import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Publications } from "@/components/Publications";
import { Awards } from "@/components/Awards";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { LinkedInCard } from "@/components/LinkedInCard";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Publications />
      <Awards />
      <Education />
      <Gallery />
      <LinkedInCard />
      <Contact />
      
      <footer className="py-8 text-center text-muted-foreground border-t border-border">
        <p>© 2026 Hubert Orlicki. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
