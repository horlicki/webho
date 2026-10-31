import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Star } from "lucide-react";

interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  period: string;
  distinction?: string;
}

const education: EducationItem[] = [
  {
    institution: "Umeå University, Sweden",
    degree: "Research Internship",
    field: "Department of Mathematical Foundations of Artificial Intelligence",
    period: "Aug 2024 - Sep 2024"
  },
  {
    institution: "Cracow University of Technology",
    degree: "Master of Science (MSc)",
    field: "Computer Science - Data Science",
    period: "2023 - 2025",
    distinction: "Highest Honors - GPA: 5.0/5.0"
  },
  {
    institution: "WSB University",
    degree: "Master of Science (MSc)",
    field: "Computer Science - Artificial Intelligence Applications",
    period: "2023 - 2025",
    distinction: "Highest Honors - GPA: 5.0/5.0"
  },
  {
    institution: "Cracow University of Technology",
    degree: "Bachelor of Science (BSc)",
    field: "Electrical Engineering - Automation in Electrical Systems",
    period: "2019 - 2023",
    distinction: "Highest Honors - GPA: 5.0/5.0"
  }
];

export const Education = () => {
  return (
    <section id="education" className="py-12 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mb-8 animate-slide-up">
          <h2 className="mb-4">Education</h2>
          <p className="text-lg text-muted-foreground">
            Three degrees completed with highest honors and perfect academic records across multiple disciplines
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-3">
          {education.map((edu, idx) => (
            <div key={idx} className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors bg-card">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="h-4 w-4 text-primary" />
                  </div>
                </div>
                
                <div className="flex-grow min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4 mb-2">
                    <div className="min-w-0">
                      <h3 className="font-semibold text-lg">{edu.degree}</h3>
                      <p className="text-primary text-base font-medium">{edu.field}</p>
                      <p className="text-muted-foreground text-base">{edu.institution}</p>
                    </div>
                    <span className="text-muted-foreground text-sm font-medium flex-shrink-0">{edu.period}</span>
                  </div>
                  
                  {edu.distinction && (
                    <div className="flex flex-wrap gap-2">
                      {edu.distinction.includes("Highest Honors") && (
                        <Badge variant="default" className="text-xs px-2 py-0.5 gap-1">
                          <Award className="h-3 w-3" />
                          Highest Honors
                        </Badge>
                      )}
                      {edu.distinction.includes("5.0/5.0") && (
                        <Badge variant="secondary" className="text-xs px-2 py-0.5 gap-1">
                          <Star className="h-3 w-3" />
                          GPA: 5.0/5.0
                        </Badge>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
          <h3 className="text-base font-semibold mb-3">Certifications & Training</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span className="text-muted-foreground text-sm">AWS Academy Graduate - AWS Academy Cloud Foundations</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span className="text-muted-foreground text-sm">Basics of Python Programming - Training for Programmers</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span className="text-muted-foreground text-sm">Using AI in Business Development - Google</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span className="text-muted-foreground text-sm">Synerise - all 18 platform certifications, including Jinjava Master and AI Recommendations Master</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span className="text-muted-foreground text-sm">Pedagogical Course for Academic Teachers - Cracow University of Technology</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
