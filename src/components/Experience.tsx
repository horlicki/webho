import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Cracow University of Technology",
    role: "Research & Teaching Assistant",
    period: "Mar 2025 - Oct 2026",
    description: [
      "Conducting research in artificial intelligence and evolutionary computation",
      "Supporting teaching activities, mentoring students and helping with course preparation",
      "Supervising 10 undergraduate and master's thesis projects covering AI, data science, and embedded systems"
    ],
    technologies: ["AI Research", "Evolutionary Computing", "Academic Mentorship", "Python", "Machine Learning"]
  },
  {
    company: "4PM CONSULTING",
    role: "Full-Stack Developer & Maintenance Coordinator",
    period: "Jun 2024 - Present",
    description: [
      "Developed claims reporting platform for major bank using JavaScript, Angular and C#",
      "Working within Adacta AdInsure ecosystem for enterprise insurance solutions",
      "Implementing complex business logic for financial services sector"
    ],
    technologies: ["JavaScript", "Angular", "C#", "Enterprise Systems", "Adacta AdInsure"]
  },
  {
    company: "Pedagogical University of Kraków",
    role: "Junior Computer Vision Engineer - unLoc AI Researcher",
    period: "Jun 2024 - Oct 2024",
    description: [
      "Designed and implemented fine-tuning procedures for visual generative models using curated datasets",
      "Integrated and evaluated Fréchet Distance and Inception Score into the evaluation system",
      "Implemented Jaccard Index for mask evaluation tasks",
      "Incorporated labels and datasets prepared by the Data Curators team into the evaluation pipeline",
      "Developed testing procedure to compare generative algorithms",
      "Tested at least four generative models (DiffEdit, Kandinsky, ControlNet) using proposed framework",
      "Conducted comprehensive comparison of generative models in relation to project goals",
      "Wrote final WP5 report summarizing findings and evaluations",
      "NCN-funded research project focusing on reimagining architecture of power"
    ],
    technologies: ["Computer Vision", "Generative AI", "DiffEdit", "Kandinsky", "ControlNet", "Python", "Model Evaluation", "PyTorch"]
  },
  {
    company: "Cracow University of Technology",
    role: "Mentor - FutureLAB",
    period: "Oct 2023 - Oct 2024",
    description: [
      "Provided ongoing support to students in realization of R&D projects",
      "Mentored interdisciplinary research groups in areas such as AI, Data Science, and Embedded Systems",
      "Collaborated with faculty to guide students from concept to implementation",
      "Supervised award-winning projects including BeeBrain and Braille Display"
    ],
    technologies: ["Project Management", "AI", "Data Science", "Embedded Systems", "Research Mentorship"]
  },
  {
    company: "Synerise",
    role: "Frontend Developer - IT Technology Department",
    period: "Dec 2022 - Jun 2024",
    description: [
      "Developed and maintained cutting-edge AI-driven Synerise platform using React, Redux, TypeScript, Storybook, and Weblate",
      "Built implementations for major clients: Żabka, CCC, Orange, Rossmann, Militaria",
      "Created search engines, listings, popups and dynamic campaigns from scratch using Synerise API, Jinjava and AI models",
      "Wrote unit tests with Jest ensuring code quality and reliability",
      "Participated in regular code cleanup, bug fixing, and performance optimization tasks",
      "Managed hotfix releases and build deployments",
      "Worked closely with backend and product teams in agile environment"
    ],
    technologies: ["React", "Redux", "TypeScript", "Jest", "Storybook", "Weblate", "Jinjava", "REST API", "Python"]
  },
  {
    company: "Synerise",
    role: "Junior Frontend Developer - Customer Success & Implementation",
    period: "Oct 2021 - Dec 2022",
    description: [
      "Implemented front-end projects for Synerise clients (Żabka, CCC, Orange, Rossmann, Militaria)",
      "Built search engines, listings, popups using JavaScript, Jinja/Jinjava, REST API, Python",
      "Created dynamic campaigns leveraging Synerise API and AI models",
      "Automated business processes through Python scripts",
      "Provided customer support and assisted other employees",
      "Developed training content for internal teams"
    ],
    technologies: ["JavaScript", "Jinja/Jinjava", "REST API", "Python", "CRM Systems"]
  },
  {
    company: "Synerise",
    role: "Trainee - Customer Success & Implementation",
    period: "Jul 2021 - Oct 2021",
    description: [
      "CRM system support and implementation of email campaigns using AI-generated content",
      "Created analytics dashboards for customer insights",
      "Learned Synerise platform architecture and best practices"
    ],
    technologies: ["CRM", "Email Marketing", "Analytics", "AI Models"]
  },
  {
    company: "Comex Group",
    role: "Software Developer",
    period: "Jan 2023 - Mar 2023",
    description: [
      "Deep learning model training and configuration",
      "GPU-based optimization for neural network training",
      "Model testing and performance evaluation"
    ],
    technologies: ["Deep Learning", "GPU Computing", "Model Training", "Neural Networks"]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-card">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mb-12 animate-slide-up">
          <h2 className="mb-4">Professional Experience <span className="text-primary">5+ Years</span></h2>
          <p className="text-xl text-muted-foreground">
            Bridging academia and industry with expertise in AI, full-stack development, and research
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {experiences.map((exp, idx) => (
              <AccordionItem 
                key={idx} 
                value={`item-${idx}`}
                className="border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="px-5 py-4 hover:no-underline hover:bg-primary/5">
                  <div className="flex items-start gap-4 w-full text-left">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Briefcase className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    
                    <div className="flex-grow min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4 mb-2">
                        <div className="min-w-0">
                          <h3 className="font-semibold text-base">{exp.role}</h3>
                          <p className="text-primary text-sm font-medium">{exp.company}</p>
                        </div>
                        <span className="text-muted-foreground text-xs sm:text-sm flex-shrink-0 font-medium">{exp.period}</span>
                      </div>
                      
                      {/* Tech preview */}
                      <div className="flex flex-wrap gap-1.5 mb-1.5">
                        {exp.technologies.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs px-2 py-0.5">
                            {tech}
                          </Badge>
                        ))}
                        {exp.technologies.length > 3 && (
                          <Badge variant="outline" className="text-xs px-2 py-0.5">
                            +{exp.technologies.length - 3} more
                          </Badge>
                        )}
                      </div>
                      
                      <p className="text-xs text-muted-foreground italic">Click to view full details →</p>
                    </div>
                  </div>
                </AccordionTrigger>
                
                <AccordionContent className="px-5 pb-4">
                  <div className="ml-14 space-y-3">
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                          <span className="text-primary flex-shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
