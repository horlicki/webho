import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-12 bg-card">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-4">Let's Collaborate</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Open to research collaborations, industry projects, and innovative opportunities
          </p>

          <Card className="p-6 md:p-8 border-border">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-1" />
                  <div className="text-left">
                    <h3 className="font-semibold text-sm mb-1">Email</h3>
                    <a 
                      href="mailto:hubert.orlicki@petra-po.pl"
                      className="text-muted-foreground text-sm hover:text-primary transition-colors"
                    >
                      hubert.orlicki@petra-po.pl
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div className="text-left">
                    <h3 className="font-semibold text-sm mb-1">Location</h3>
                    <p className="text-muted-foreground text-sm">Kraków, Poland • <span className="text-primary font-medium">Remote</span></p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Linkedin className="h-5 w-5 text-primary mt-1" />
                  <div className="text-left">
                    <h3 className="font-semibold text-sm mb-1">LinkedIn</h3>
                    <a 
                      href="https://www.linkedin.com/in/orlicki-hubert"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground text-sm hover:text-primary transition-colors"
                    >
                      linkedin.com/in/orlicki-hubert
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Github className="h-5 w-5 text-primary mt-1" />
                  <div className="text-left">
                    <h3 className="font-semibold text-sm mb-1">GitHub</h3>
                    <a 
                      href="https://github.com/TheOrboy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground text-sm hover:text-primary transition-colors"
                    >
                      github.com/TheOrboy
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <Button size="default" className="group" asChild>
                <a href="mailto:hubert.orlicki@petra-po.pl">
                  Send Message
                  <Mail className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
