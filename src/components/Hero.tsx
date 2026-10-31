import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { AnimatedBackground } from "./AnimatedBackground";
import heroBg from "@/assets/hero-bg.jpg";

const headline = ["Tech Lead", "Full-Stack Developer", "AI Researcher", "MarTech", "AI Automation & Agents"];

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-60 animate-slow-pan"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: '120% auto',
          backgroundPosition: 'center',
        }}
      />
      <AnimatedBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background z-[1]" />
      
      <div className="container relative z-10 px-4 py-20 mx-auto">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex flex-wrap justify-center gap-x-2 gap-y-1 mb-4 px-4 py-2 rounded-2xl md:rounded-full bg-primary/10 border border-primary/20">
            {headline.map((item, idx) => (
              <span key={item} className="text-primary text-sm font-medium">
                {idx > 0 && <span className="mr-2 text-primary/50">•</span>}
                {item}
              </span>
            ))}
          </div>
          
          <h1 className="mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-primary">
            Hubert Orlicki
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            I lead and build <span className="text-primary font-semibold">MarTech, fintech and AI</span> projects, from architecture and integrations to <span className="text-primary font-semibold">production delivery</span>
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="group"
              onClick={() => scrollToSection('projects')}
            >
              Explore My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('contact')}
            >
              Work With Me (B2B)
            </Button>
          </div>
          
          <div className="flex gap-6 justify-center items-center">
            <a 
              href="https://www.linkedin.com/in/orlicki-hubert" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="https://github.com/horlicki" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="mailto:hubert.orlicki.adres@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
