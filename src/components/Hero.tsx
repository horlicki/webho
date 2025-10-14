import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { AnimatedBackground } from "./AnimatedBackground";
import heroBg from "@/assets/hero-bg.jpg";

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
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-primary text-sm font-medium">AI Researcher • Full-Stack Developer • Innovator</span>
          </div>
          
          <h1 className="mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-primary">
            Hubert Orlicki
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Bridging <span className="text-primary font-semibold">industry expertise</span> with <span className="text-primary font-semibold">academic research</span> to create technology that makes a real-world impact
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
              Get in Touch
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
              href="https://github.com/hubert-orlicki" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="mailto:hubert.orlicki@petra-po.pl"
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
