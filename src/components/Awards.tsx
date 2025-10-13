import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Newspaper } from "lucide-react";
import { awards, media } from "@/data/awards-data";

export const Awards = () => {
  const [showAllAwards, setShowAllAwards] = useState(false);
  const [showAllMedia, setShowAllMedia] = useState(false);

  const displayedAwards = showAllAwards ? awards : awards.slice(0, 4);
  const displayedMedia = showAllMedia ? media : media.slice(0, 4);

  return (
    <section id="awards" className="py-16 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mb-12 animate-slide-up">
          <h2 className="mb-4">Recognition & Media</h2>
          <p className="text-xl text-muted-foreground">
            Awards, achievements, and media coverage highlighting innovative work
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Awards Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Award className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-semibold">Awards & Achievements</h3>
            </div>
          <div className="space-y-4">
              {displayedAwards.map((award, idx) => (
                <Card key={idx} className="p-5 border-border hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h4 className="font-semibold text-foreground">{award.title}</h4>
                    <Badge variant="secondary" className="flex-shrink-0">
                      {award.year}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{award.description}</p>
                </Card>
              ))}
              {awards.length > 4 && (
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => setShowAllAwards(!showAllAwards)}
                >
                  {showAllAwards ? "Show Less" : `Show All ${awards.length} Awards`}
                </Button>
              )}
            </div>
          </div>

          {/* Media Coverage Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Newspaper className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-semibold">Media Coverage</h3>
            </div>
            <div className="space-y-4">
              {displayedMedia.map((item, idx) => (
                <Card key={idx} className="p-5 border-border hover:border-primary/50 transition-all duration-300">
                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <p className="text-sm text-primary font-medium mb-1">{item.outlet}</p>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.title} →
                    </h4>
                  </a>
                </Card>
              ))}
              {media.length > 4 && (
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => setShowAllMedia(!showAllMedia)}
                >
                  {showAllMedia ? "Show Less" : `Show All ${media.length} Articles`}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
