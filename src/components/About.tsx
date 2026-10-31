import { Card } from "@/components/ui/card";
import { Award, Newspaper, GraduationCap, Users, Megaphone, Landmark, BrainCircuit, Briefcase, LayoutGrid, ArrowRight } from "lucide-react";
import { awards, media } from "@/data/awards-data";
import { projects } from "@/data/projects-data";

const focusAreas = [
  {
    icon: Megaphone,
    title: "MarTech",
    text: "Years with Synerise: implementations for Żabka, CCC, Rossmann and Orange, core product development, and now tech lead of a large enterprise rollout."
  },
  {
    icon: Landmark,
    title: "Fintech & Insurance",
    text: "2+ years on an insurance platform for a major bank (Angular, C#), from feature work to owning releases and client scope."
  },
  {
    icon: BrainCircuit,
    title: "AI & Research",
    text: "Production LLM agents with RAG. Former lecturer in NLP and ML at Cracow University of Technology, co-author of peer-reviewed AI papers."
  }
];

const shortcuts = [
  {
    id: "experience",
    icon: Briefcase,
    title: "Read about my experience",
    text: "Roles, clients and what I was responsible for"
  },
  {
    id: "projects",
    icon: LayoutGrid,
    title: "See my projects",
    text: "Concrete examples with screenshots and results"
  }
];

const stats = [
  {
    icon: Award,
    value: awards.length.toString(),
    label: "Awards Won",
    description: "International and national recognition"
  },
  {
    icon: Newspaper,
    value: media.length.toString(),
    label: "Media Features",
    description: "Coverage across major publications"
  },
  {
    icon: GraduationCap,
    value: "10",
    label: "Master's Theses",
    description: "Students supervised"
  },
  {
    icon: Users,
    value: projects.length.toString(),
    label: "Industry Solutions",
    description: "Built for real-world applications"
  }
];

export const About = () => {
  return (
    <section id="about" className="py-16 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto mb-10 text-center animate-slide-up">
          <h2 className="mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            I'm a <span className="text-primary font-semibold">tech lead and full-stack developer</span> with a background in AI research.
            Over the years I've worked in two main areas: <span className="text-primary font-semibold">marketing technology</span> and
            software for the <span className="text-primary font-semibold">banking and insurance sector</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
          {focusAreas.map((area) => (
            <Card key={area.title} className="p-6 border-border hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <area.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{area.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{area.text}</p>
            </Card>
          ))}
        </div>

        <p className="max-w-4xl mx-auto mb-12 text-center text-muted-foreground leading-relaxed">
          Two master's degrees in Computer Science and a bachelor's in Electrical Engineering, all with a <span className="text-primary font-semibold">5.0 GPA</span>.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-12">
          {shortcuts.map((shortcut) => (
            <a
              key={shortcut.id}
              href={`#${shortcut.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(shortcut.id)?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group flex items-center gap-4 rounded-xl border border-primary/40 bg-primary/10 p-4 hover:bg-primary/20 hover:border-primary transition-colors"
            >
              <div className="w-11 h-11 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <shortcut.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-grow min-w-0">
                <p className="font-semibold">{shortcut.title}</p>
                <p className="text-sm text-muted-foreground">{shortcut.text}</p>
              </div>
              <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 group-hover:translate-x-1 transition-transform" />
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, idx) => (
            <Card key={idx} className="p-6 text-center border-border hover:border-primary/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-lg font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
