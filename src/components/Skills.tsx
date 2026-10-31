import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const skillCategories = [
  {
    title: "AI Engineering & LLMs",
    skills: ["Claude API", "AI Agents", "Tool Use", "RAG", "ChromaDB", "Prompt Caching", "Context Engineering", "Sentence Transformers"]
  },
  {
    title: "AI & Machine Learning",
    skills: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn", "OpenCV", "YOLO", "Computer Vision", "NLP", "Diffusion Models", "Optuna"]
  },
  {
    title: "MarTech",
    skills: ["Synerise", "Jinjava", "Recommendations", "Search Engines", "Marketing Automation", "CRM", "Personalization"]
  },
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Redux", "Angular", "JavaScript", "Storybook", "Jest", "Next.js"]
  },
  {
    title: "Backend & Data",
    skills: ["Python", "C#", "FastAPI", "Node.js", "REST API", "PostgreSQL", "MongoDB", "SQL", "Playwright"]
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Git", "CI/CD", "Railway"]
  },
  {
    title: "Leadership & Delivery",
    skills: ["Technical Leadership", "Solution Architecture", "System Integration", "Release Management", "Code Review", "Client Communication", "Mentoring"]
  },
  {
    title: "Data Science",
    skills: ["Pandas", "NumPy", "Matplotlib", "Jupyter", "Data Analysis", "Statistical Modeling", "R", "C++"]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-12 bg-card">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mb-8 animate-slide-up">
          <h2 className="mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground">
            Tech leadership, full-stack development, MarTech and applied AI
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-3">
          {skillCategories.map((category, idx) => (
            <Card key={idx} className="p-4 border-border">
              <h3 className="text-lg font-semibold mb-3 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <Badge 
                    key={skillIdx} 
                    variant="secondary" 
                    className="text-xs py-1 px-3 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
