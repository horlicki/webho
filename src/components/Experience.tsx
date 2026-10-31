import { Badge } from "@/components/ui/badge";
import { ChevronDown, ExternalLink } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import deloitteLogo from "@/assets/logos/deloitte.svg";
import syneriseLogo from "@/assets/logos/synerise.svg";
import pkLogo from "@/assets/logos/pk.png";
import ukenLogo from "@/assets/logos/uken.png";
import comexLogo from "@/assets/logos/comex.svg";
import fourPmLogo from "@/assets/logos/4pm.png";
import loyaltyRootsLogo from "@/assets/logos/loyalty-roots.png";
import deloittePepcoThumb from "@/assets/media/deloitte-pepco.jpg";
import adactaThumb from "@/assets/media/adacta.png";
import syneriseOgThumb from "@/assets/media/synerise-og.jpg";
import syneriseClientsThumb from "@/assets/media/synerise-clients.jpg";
import beeBrainThumb from "@/assets/beebrain-hives.jpg";
import brailleThumb from "@/assets/braille.jpg";
import unlocThumb from "@/assets/unloc-sam.png";
import futureLabThumb from "@/assets/beebrain1.jpg";

interface RoleGroup {
  heading?: string;
  items: string[];
}

interface Role {
  title: string;
  period?: string;
  groups: RoleGroup[];
}

interface MediaLink {
  title: string;
  url: string;
  thumbnail: string;
}

interface ExperienceItem {
  company: string;
  logo?: string;
  location?: string;
  period: string;
  about: string;
  roles: Role[];
  technologies: string[];
  media?: MediaLink[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Deloitte Digital",
    logo: deloitteLogo,
    location: "Kraków · Remote",
    period: "Aug 2026 - Present",
    about: "Synerise implementation within Pepco's Digital & Data transformation program, one of the larger digital transformation initiatives currently running in Central and Eastern Europe: 200+ experts from Pepco, Deloitte and partner organizations, six parallel agile streams, 20+ new technologies and 80+ processes established within 12 months, all built to serve millions of customers across Europe.",
    roles: [
      {
        title: "Senior Consultant / Synerise Tech Lead",
        groups: [
          {
            items: [
              "Leading the technical delivery of the Synerise stream within the program",
              "Overseeing the implementation and coordinating work across teams and partner organizations",
              "Driving architecture and integration decisions",
              "Staying hands-on with the implementation work"
            ]
          }
        ]
      }
    ],
    technologies: ["Synerise", "Technical Leadership", "Solution Architecture", "System Integration", "Agile", "MarTech"],
    media: [
      { title: "More than a platform", url: `${import.meta.env.BASE_URL}media/deloitte-more-than-a-platform.pdf`, thumbnail: deloittePepcoThumb }
    ]
  },
  {
    company: "4PM Consulting",
    logo: fourPmLogo,
    period: "Jun 2024 - Present",
    about: "4PM Consulting delivers software solutions for the financial and insurance sectors, partnering with major banking clients to build and maintain mission-critical platforms. Over two years, I progressed from feature development to owning the release and maintenance process for a core insurance application.",
    roles: [
      {
        title: "Full-Stack Developer & Maintenance Coordinator",
        period: "Jun 2025 - Present",
        groups: [
          {
            items: [
              "Coordinate maintenance and release processes for an insurance application integrated within a major banking ecosystem",
              "Prioritize tasks and manage release scope in collaboration with the client and internal development teams",
              "Conduct code reviews, assign and update task statuses, and prepare releases end-to-end",
              "Communicate directly with the client to clarify requirements and define release content",
              "Continue hands-on feature development and bug fixing across JavaScript, Angular and C#"
            ]
          }
        ]
      },
      {
        title: "Full-Stack Developer",
        period: "Jun 2024 - Jun 2025",
        groups: [
          {
            items: [
              "Developed a claims reporting platform for a major bank using JavaScript, Angular and C#",
              "Worked within the Adacta AdInsure ecosystem, building features for a widely-used insurance platform",
              "Delivered ongoing feature development and bug fixes across the application"
            ]
          }
        ]
      }
    ],
    technologies: ["JavaScript", "Angular", "C#", "Adacta AdInsure", "Release Management", "Code Review"],
    media: [
      { title: "Adacta AdInsure - insurance software platform", url: "https://www.adacta-fintech.com/", thumbnail: adactaThumb }
    ]
  },
  {
    company: "Loyalty Roots",
    logo: loyaltyRootsLogo,
    location: "Kraków · Remote",
    period: "Nov 2025 - Sep 2026",
    about: "Loyalty Roots is a consultancy designing and implementing loyalty programs. I owned the technical side of client engagements, from integration architecture on Synerise to building an internal AI agent that automates loyalty program audits.",
    roles: [
      {
        title: "Integration Architect",
        groups: [
          {
            items: [
              "Led the architecture and implementation of Synerise and loyalty program integrations",
              "Owned technical decision-making and coordinated delivery with clients and partners",
              "Designed and built from the ground up an AI agent with a web application that automates loyalty program audits, running in production and used by the consulting team"
            ]
          }
        ]
      }
    ],
    technologies: ["Synerise", "Solution Architecture", "System Integration", "Claude API", "AI Agents", "RAG", "Python", "FastAPI"]
  },
  {
    company: "Cracow University of Technology",
    logo: pkLogo,
    location: "Kraków",
    period: "Mar 2025 - Sep 2026",
    about: "Politechnika Krakowska is one of Poland's leading technical universities, with the Department of Computer Science serving as a hub for research in artificial intelligence, data science and computational methods. I combined active research with academic teaching, working at the intersection of theory and the classroom.",
    roles: [
      {
        title: "Research & Teaching Assistant - Department of Computer Science",
        groups: [
          {
            heading: "Research",
            items: [
              "Conducted research in artificial intelligence and evolutionary computation, contributing to publications and ongoing academic projects",
              "Co-authored peer-reviewed work spanning optimization methods, interpretable machine learning and applied AI"
            ]
          },
          {
            heading: "Teaching & mentoring",
            items: [
              "Supported teaching activities, mentored students and helped prepare course materials for multiple courses",
              "Supervised 10 undergraduate and master's thesis projects, guiding students from problem definition through to final research outcomes"
            ]
          },
          {
            heading: "Courses taught",
            items: ["Natural Language Processing", "Evolutionary Computation", "Machine Learning Techniques"]
          }
        ]
      }
    ],
    technologies: ["AI Research", "Evolutionary Computation", "NLP", "Machine Learning", "Python", "Academic Teaching"],
    media: [
      { title: "BeeBrain - PK students protect bees with advanced technology", url: "https://pk.edu.pl/?option=com_content&view=article&id=5450%3Abeebrain-studenci-politechniki-krakowskiej-chca-chronic-pszczoly-przy-pomocy-zaawansowanej-technologii&lang=pl&Itemid=1152", thumbnail: beeBrainThumb },
      { title: "Braille display - PK students translate any book into Braille", url: "https://pk.edu.pl/?option=com_content&view=article&id=4872%3Aod-reki-przetlumacza-kazda-ksiazke-na-alfabet-braille-a-studenci-pk-autorami-rewolucyjnego-wyswietlacza&lang=pl&Itemid=1152", thumbnail: brailleThumb }
    ]
  },
  {
    company: "Synerise",
    logo: syneriseLogo,
    location: "Kraków · Freelance",
    period: "Sep 2025 - Mar 2026",
    about: "Alongside my other commitments, I took on a separate freelance engagement with the team promoting Synerise's platform and capabilities, helping bridge the gap between what the product could do and how clients and prospects understood it.",
    roles: [
      {
        title: "Product Evangelist / Frontend Developer",
        groups: [
          {
            items: [
              "Helped write use-cases showcasing Synerise's capabilities, translating technical features into concrete business scenarios that clients could relate to",
              "Provided technical advisory support to the promotion team, ensuring use-cases and materials accurately reflected what the platform could deliver",
              "Worked closely with product and implementation teams to surface real client examples worth highlighting externally"
            ]
          }
        ]
      }
    ],
    technologies: ["Synerise", "Technical Writing", "Product Marketing", "Pre-sales Support"],
    media: [
      { title: "Synerise Use Cases", url: "https://www.synerise.com/use-cases", thumbnail: syneriseOgThumb }
    ]
  },
  {
    company: "University of the National Education Commission, Kraków",
    logo: ukenLogo,
    location: "Kraków",
    period: "Jun 2024 - Oct 2024",
    about: "unLoc is an international research project, \"Exploring the Synergy of Human and Machine Creativity in Architecture: Redesigning Urban Space through Machine Learning, Artistic Expression, and Community Collaboration\", funded by Poland's National Science Centre (NCN, grant UMO-2023/05/Y/HS6/00117) as part of the international JPI Urban Europe initiative. I worked on the generative computer vision side of the project, developing and evaluating models that explore how machine learning can reshape urban design and architectural creativity.",
    roles: [
      {
        title: "Junior Computer Vision Engineer - unLoc AI Researcher",
        groups: [
          {
            items: [
              "Designed and implemented fine-tuning procedures for visual generative models using curated datasets",
              "Integrated and evaluated Fréchet Distance and Inception Score in the model evaluation system",
              "Implemented the Jaccard Index for mask evaluation tasks",
              "Incorporated labels and datasets prepared by the Data Curators team into the evaluation pipeline",
              "Developed a testing procedure to systematically compare generative algorithms",
              "Benchmarked at least four generative models (DiffEdit, Kandinsky, ControlNet) using the proposed evaluation framework",
              "Conducted a comparative analysis of generative models against the project's research goals",
              "Authored the final WP5 report summarizing findings and evaluation results"
            ]
          }
        ]
      }
    ],
    technologies: ["Computer Vision", "Generative AI", "Diffusion Models", "DiffEdit", "Kandinsky", "ControlNet", "Model Evaluation", "Python", "PyTorch"],
    media: [
      { title: "unLoc - human vs machine dream about architecture", url: "https://unloc.uken.krakow.pl/", thumbnail: unlocThumb }
    ]
  },
  {
    company: "Cracow University of Technology - FutureLAB",
    logo: pkLogo,
    location: "Kraków",
    period: "Oct 2023 - Oct 2024",
    about: "FutureLAB is Politechnika Krakowska's interdisciplinary incubator for student-led R&D projects, bringing together teams from AI, data science and embedded systems to turn early-stage ideas into working prototypes. As a mentor, I supported student teams through the full arc of a project, from initial concept to something they could actually demo.",
    roles: [
      {
        title: "Mentor",
        groups: [
          {
            items: [
              "Provided ongoing technical and strategic support to student teams throughout the lifecycle of their R&D projects, helping them navigate roadblocks and stay on scope",
              "Mentored interdisciplinary research groups spanning AI, data science and embedded systems, adapting guidance to each team's domain and skill level",
              "Collaborated closely with faculty to align mentorship with academic goals, guiding students from early concept through to working implementation",
              "Contributed to award-winning outcomes, including BeeBrain, an AI system for bee colony monitoring recognized as a Huawei Seeds for the Future 2024 finalist"
            ]
          }
        ]
      }
    ],
    technologies: ["Research Mentorship", "Project Management", "AI", "Data Science", "Embedded Systems"],
    media: [
      { title: "BeeBrain - technology to the rescue of bees", url: "https://futurelab.pk.edu.pl/sukcesy/beebrain-technologia-na-ratunek-pszczolom-nauka4future/", thumbnail: futureLabThumb }
    ]
  },
  {
    company: "Synerise",
    logo: syneriseLogo,
    location: "Kraków",
    period: "Jul 2021 - Jun 2024",
    about: "Synerise is an AI-driven technology platform that enables personalization, automation and intelligent campaigns for leading retail and consumer brands. Over three years, I progressed from implementing the technology for clients to developing core features of the product, integrated across the front-end ecosystems of companies such as Żabka, CCC, Orange, Rossmann and Militaria.",
    roles: [
      {
        title: "Frontend Developer",
        groups: [
          {
            heading: "Client implementation & delivery",
            items: [
              "Implemented front-end solutions for major retail clients using JavaScript, Jinja/Jinjava, REST APIs and Python",
              "Designed and shipped search engines, product listings, popups and dynamic marketing campaigns from scratch on top of the Synerise API, combining Jinjava templating with the platform's built-in AI models",
              "Authored numerous internal use-cases and Jinjava certification materials, becoming a go-to reference for best practices in template-driven campaign development",
              "Trained and onboarded fellow developers on Jinjava and Synerise's implementation workflows",
              "Automated recurring business processes with custom Python scripts, freeing up implementation time across client accounts",
              "Supported CRM configuration and AI-generated email campaigns, and built the analytics to track their performance"
            ]
          },
          {
            heading: "Core product engineering",
            items: [
              "Developed and maintained core features of the Synerise platform using React, Redux and TypeScript, the infrastructure that powers AI-driven marketing automation at scale",
              "Built and documented reusable UI components in Storybook, keeping the design system consistent as the product surface grew",
              "Managed translation workflows through Weblate, keeping the platform usable across multiple markets and languages",
              "Wrote unit tests with Jest as part of ongoing code cleanup and technical debt reduction",
              "Managed hotfix releases and build deployments, working closely with backend and product teams to keep enterprise clients running without disruption"
            ]
          }
        ]
      }
    ],
    technologies: ["React", "Redux", "TypeScript", "Jest", "Storybook", "Weblate", "JavaScript", "Jinjava", "REST API", "Python", "CRM"],
    media: [
      { title: "Brands using the Synerise platform", url: "https://www.synerise.com/use-cases", thumbnail: syneriseClientsThumb },
      { title: "Synerise Case Studies", url: "https://www.synerise.com/case-studies", thumbnail: syneriseOgThumb }
    ]
  },
  {
    company: "Comex Group",
    logo: comexLogo,
    period: "Jan 2023 - Mar 2023",
    about: "Developer role focused on deep learning model development for industrial applications.",
    roles: [
      {
        title: "Software Developer",
        groups: [
          {
            items: [
              "Deep learning model training and configuration",
              "GPU-based training and optimization of neural networks",
              "Model testing and performance evaluation"
            ]
          }
        ]
      }
    ],
    technologies: ["Deep Learning", "GPU Computing", "Model Training", "Neural Networks"]
  }
];

const CompanyLogo = ({ exp }: { exp: ExperienceItem }) => (
  <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center p-1.5 overflow-hidden flex-shrink-0">
    {exp.logo ? (
      <img src={exp.logo} alt={`${exp.company} logo`} className="max-w-full max-h-full object-contain" />
    ) : (
      <span className="text-xs font-bold text-neutral-800">
        {exp.company.split(" ")[0]}
      </span>
    )}
  </div>
);

export const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-card">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mb-12 animate-slide-up">
          <h2 className="mb-4">Professional Experience <span className="text-primary">6+ Years</span></h2>
          <p className="text-xl text-muted-foreground">
            Tech leadership and full-stack delivery for enterprise clients in retail, banking and insurance, backed by AI research experience
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
                <AccordionTrigger className="group px-5 py-4 hover:no-underline hover:bg-primary/5">
                  <div className="flex items-start gap-4 w-full text-left">
                    <CompanyLogo exp={exp} />

                    <div className="flex-grow min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4 mb-2">
                        <div className="min-w-0">
                          <h3 className="font-semibold text-base">{exp.company}</h3>
                          {exp.roles.map((role) => (
                            <p key={role.title} className="text-primary text-sm font-medium">{role.title}</p>
                          ))}
                          {exp.location && (
                            <p className="text-muted-foreground text-xs mt-0.5">{exp.location}</p>
                          )}
                        </div>
                        <span className="text-muted-foreground text-xs sm:text-sm flex-shrink-0 font-medium">{exp.period}</span>
                      </div>

                      <p className="text-sm text-muted-foreground font-normal line-clamp-2 mb-2 group-data-[state=open]:hidden">
                        {exp.about}
                      </p>

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

                      <span className="inline-flex items-center gap-1 mt-1 rounded-full border border-primary/40 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary group-hover:bg-primary/20 transition-colors">
                        <span className="group-data-[state=open]:hidden">Read full description</span>
                        <span className="hidden group-data-[state=open]:inline">Hide details</span>
                        <ChevronDown className="h-3 w-3 transition-transform group-data-[state=open]:rotate-180" />
                      </span>
                    </div>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="px-5 pb-4">
                  <div className="sm:ml-16 space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">{exp.about}</p>

                    {exp.roles.map((role) => (
                      <div key={role.title} className="space-y-3">
                        {(exp.roles.length > 1 || role.period) && (
                          <div className="flex flex-wrap items-baseline gap-x-2">
                            <h4 className="font-semibold text-sm">{role.title}</h4>
                            {role.period && <span className="text-muted-foreground text-xs">{role.period}</span>}
                          </div>
                        )}
                        {role.groups.map((group, g) => (
                          <div key={g}>
                            {group.heading && (
                              <p className="text-foreground text-xs font-semibold uppercase tracking-wide mb-1.5">{group.heading}</p>
                            )}
                            <ul className="space-y-2">
                              {group.items.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                                  <span className="text-primary flex-shrink-0">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ))}

                    <div className="flex flex-wrap gap-2 pt-1">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {exp.media && exp.media.length > 0 && (
                      <div className="grid sm:grid-cols-2 gap-3 pt-1">
                        {exp.media.map((media) => (
                          <a
                            key={media.url + media.title}
                            href={media.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-3 rounded-lg border border-border p-2 hover:border-primary/50 hover:bg-primary/5 transition-colors"
                          >
                            <img
                              src={media.thumbnail}
                              alt=""
                              className="w-20 h-14 rounded-md object-cover bg-white flex-shrink-0"
                            />
                            <span className="text-sm font-medium flex-grow min-w-0">{media.title}</span>
                            <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary flex-shrink-0" />
                          </a>
                        ))}
                      </div>
                    )}
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
