import { Card } from "@/components/ui/card";
import { Award, Newspaper, GraduationCap, Users } from "lucide-react";
import { awards, media } from "@/data/awards-data";
import { projects } from "@/data/projects-data";

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
        <div className="max-w-4xl mx-auto mb-12 text-center animate-slide-up">
          <h2 className="mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-4">
            I'm a researcher and full-stack developer passionate about creating AI solutions and modern applications that solve real-world problems. 
            My work bridges academic research with practical implementations, from intelligent systems to frontend and backend development, focusing on accessible technology and innovation.
          </p>
          <p className="text-xl text-muted-foreground leading-relaxed">
            With dual master's degrees in Computer Science completed with highest honors, I currently supervise 10 master's thesis students. 
            My projects have earned <span className="text-primary font-semibold">{awards.length} international awards</span> and been featured in media <span className="text-primary font-semibold">{media.length} times</span>.
          </p>
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
