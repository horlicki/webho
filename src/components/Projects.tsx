import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ExternalLink } from "lucide-react";
import { projects, type Project } from "@/data/projects-data";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-16 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mb-12 animate-slide-up">
          <h2 className="mb-4">Example Projects</h2>
          <p className="text-xl text-muted-foreground">
            Selection of real-world solutions I've built - with many more in development and coming soon
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {projects.map((project, idx) => (
            <Card 
              key={project.id}
              className="group cursor-pointer h-full overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.subtitle}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline">+{project.technologies.length - 3}</Badge>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl">{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-lg">
                  {selectedProject.subtitle}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6">
                {selectedProject.images && selectedProject.images.length > 1 ? (
                  <Carousel className="w-full">
                    <CarouselContent>
                      {selectedProject.images.map((img, idx) => (
                        <CarouselItem key={idx}>
                          <div className="flex items-center justify-center bg-muted/30 rounded-lg overflow-hidden aspect-video">
                            <img
                              src={img}
                              alt={`${selectedProject.title} - ${idx + 1}`}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                  </Carousel>
                ) : (
                  <div className="flex items-center justify-center bg-muted/30 rounded-lg overflow-hidden aspect-video">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
                
                {selectedProject.problem && (
                  <div>
                    <h4 className="text-xl font-semibold mb-2">The Challenge</h4>
                    <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: selectedProject.problem }} />
                  </div>
                )}
                
                {selectedProject.solution && (
                  <div>
                    <h4 className="text-xl font-semibold mb-2">The Solution</h4>
                    <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: selectedProject.solution }} />
                  </div>
                )}
                
                {selectedProject.results && (
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Results & Impact</h4>
                    <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: selectedProject.results }} />
                  </div>
                )}
                
                {selectedProject.description && (
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Project Overview</h4>
                    <p className="text-muted-foreground">{selectedProject.description}</p>
                  </div>
                )}
                
                {selectedProject.impact && (
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Impact</h4>
                    <p className="text-muted-foreground">{selectedProject.impact}</p>
                  </div>
                )}
                
                <div>
                  <h4 className="text-xl font-semibold mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-3">Recognition</h4>
                  <ul className="space-y-2">
                    {selectedProject.recognition.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {selectedProject.mediaCoverage && (
                  <div>
                    <h4 className="text-xl font-semibold mb-3">Media Coverage</h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.mediaCoverage.map((link) => (
                        <Button key={link.url} asChild variant="outline" size="sm">
                          <a href={link.url} target="_blank" rel="noopener noreferrer">
                            {link.label}
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
                
                {selectedProject.links && (
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.links.map((link) => (
                      <Button key={link.url} asChild variant="outline">
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          {link.label}
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
