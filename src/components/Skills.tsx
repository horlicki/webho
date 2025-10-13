import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const skillCategories = [
  {
    title: "AI & Machine Learning",
    skills: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn", "OpenCV", "YOLO", "Computer Vision", "NLP"]
  },
  {
    title: "Programming Languages",
    skills: ["Python", "JavaScript", "TypeScript", "C++", "SQL", "R"]
  },
  {
    title: "Web Development",
    skills: ["React", "Node.js", "Next.js", "FastAPI", "PostgreSQL", "MongoDB", "Docker"]
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Azure", "GCP", "Git", "CI/CD", "Kubernetes"]
  },
  {
    title: "Data Science",
    skills: ["Pandas", "NumPy", "Matplotlib", "Jupyter", "Data Analysis", "Statistical Modeling"]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-12 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mb-8 animate-slide-up">
          <h2 className="mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground">
            A comprehensive toolkit spanning AI, full-stack development, and data science
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
