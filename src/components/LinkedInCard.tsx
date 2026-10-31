import { Button } from "@/components/ui/button";
import { ExternalLink, Linkedin, MapPin, UserPlus } from "lucide-react";
import deloitteLogo from "@/assets/logos/deloitte.svg";
import pkLogo from "@/assets/logos/pk.png";
import bannerImg from "@/assets/media/linkedin-banner.jpg";
import profileImg from "@/assets/media/linkedin-profile.jpg";

const PROFILE_URL = "https://www.linkedin.com/in/orlicki-hubert/";

// LinkedIn blocks embedding profiles in iframes, so this is a static preview of the profile
export const LinkedInCard = () => {
  return (
    <section id="linkedin" className="py-12 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="mb-2">More on LinkedIn</h2>
            <p className="text-muted-foreground">
              Recommendations, project updates and the full story of my work
            </p>
          </div>

          <a
            href={PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-xl overflow-hidden border border-border bg-card hover:border-[#0A66C2] transition-colors"
          >
            <div className="h-24 md:h-32 relative">
              <img src={bannerImg} alt="Kraków Main Square" className="w-full h-full object-cover" />
              <span className="absolute top-3 right-3 rounded-md bg-[#0A66C2] p-1.5">
                <Linkedin className="h-4 w-4 text-white" />
              </span>
            </div>

            <div className="px-6 pb-6">
              <img
                src={profileImg}
                alt="Hubert Orlicki"
                className="relative -mt-12 mb-3 w-24 h-24 rounded-full border-4 border-card object-cover"
              />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="text-xl font-semibold group-hover:underline">Hubert Orlicki</h3>
                  <p className="text-sm mt-1">
                    Tech Lead | Full-Stack Developer | AI Researcher | MarTech | AI Automation & Agents
                  </p>
                  <p className="text-muted-foreground text-xs mt-1 flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    Kraków, Lesser Poland, Poland
                  </p>
                </div>

                <div className="space-y-2 flex-shrink-0">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="w-7 h-7 rounded bg-white flex items-center justify-center p-0.5">
                      <img src={deloitteLogo} alt="" className="max-w-full max-h-full object-contain" />
                    </span>
                    Deloitte Digital
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="w-7 h-7 rounded bg-white flex items-center justify-center p-0.5">
                      <img src={pkLogo} alt="" className="max-w-full max-h-full object-contain" />
                    </span>
                    Cracow University of Technology
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                I'm a tech lead and full-stack developer with a background in AI research. Over the years I've worked
                in two main areas: marketing technology and software for the banking and insurance sector...
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                <Button size="sm" className="bg-[#0A66C2] hover:bg-[#004182] text-white rounded-full" asChild>
                  <span>
                    <UserPlus className="mr-1.5 h-4 w-4" />
                    Connect
                  </span>
                </Button>
                <Button size="sm" variant="outline" className="rounded-full" asChild>
                  <span>
                    View full profile
                    <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                  </span>
                </Button>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
