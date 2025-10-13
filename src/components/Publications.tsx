import { Badge } from "@/components/ui/badge";
import { FileText, Clock, ExternalLink } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  type: string;
  link?: string;
  points?: string;
}

const publishedPapers: Publication[] = [
  {
    title: "DetPy (Differential Evolution Tools): A Python toolbox for solving optimization problems using differential evolution",
    authors: "Błażej Zieliński, Szymon Ściegienny, Hubert Orlicki, Wojciech Książek",
    venue: "SoftwareX, Volume 29, 2025",
    year: "2025",
    type: "Journal Article",
    link: "https://doi.org/10.1016/j.softx.2024.102014",
    points: "200 pts"
  },
  {
    title: "unLoc - Exploring the Synergy of Human and Machine Creativity in Architecture. Redesigning Urban Space through Machine Learning, Artistic Expression, and Community Collaboration",
    authors: "Dominik Filipiak, Julita Sobiczewska, Damian Mizera, Zuzanna Czernicka, Julia Malik, Hubert Orlicki, Jacek Złoczowski, Małgorzata Łuczyna",
    venue: "WP5 Report - Generative Computer Vision for Reimagining Architecture of Power",
    year: "2024",
    type: "Research Paper",
    link: "https://unloc.uken.krakow.pl/"
  },
  {
    title: "Prototype of an Original Device – Braille Display",
    authors: "Bartłomiej Szostak, Hubert Orlicki, Tomasz Makowski",
    venue: "New Trends in Scientific Research 6",
    year: "2023",
    type: "Conference Paper"
  },
  {
    title: "User Interface for a Braille Language Learning Device",
    authors: "Hubert Orlicki, Bartłomiej Szostak, Tomasz Makowski",
    venue: "New Trends in Scientific Research 6",
    year: "2023",
    type: "Conference Paper"
  },
  {
    title: "Evaluation of the OCR System for an Original Braille Display Device",
    authors: "Hubert Orlicki, Bartłomiej Szostak, Tomasz Makowski",
    venue: "New Trends in Scientific Research 6",
    year: "2023",
    type: "Conference Paper"
  }
];

const underReview: Publication[] = [
  {
    title: "Diagnosis of Schizophrenia Using Convolutional Neural Networks Based on Multi-Channel EEG Signal",
    authors: "Sylwia Zemła, Hubert Orlicki, Mateusz Fudala, Julia Polak, Arkadiusz Knapik, Wojciech Książek",
    venue: "Cutting-Edge Computational Intelligence in Healthcare (Elsevier)",
    year: "Under Review",
    type: "Book Chapter"
  },
  {
    title: "Bilinear Compressive Security",
    authors: "Axel Flinth (Umeå University), Hubert Orlicki (Cracow University of Technology), Semira Einsele (Freie Universität Berlin), Gerhard Wunder (Freie Universität Berlin)",
    venue: "Research conducted during internship at Umeå University",
    year: "In Progress",
    type: "Research Paper"
  },
  {
    title: "Interpretable Ensemble Learning for Tumor Type Prediction: A SHAP-based Evaluation of CatBoost and Voting Classifiers",
    authors: "Weronika Wolak, Anna Plichta, Hubert Orlicki",
    venue: "Under Review",
    year: "Under Review",
    type: "Research Paper"
  }
];

export const Publications = () => {
  return (
    <section id="publications" className="py-12 bg-card">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mb-8 animate-slide-up">
          <h2 className="mb-4">Publications & Research</h2>
          <p className="text-lg text-muted-foreground">
            Contributing to scientific knowledge through peer-reviewed research and collaborations
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="published" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-6">
              <TabsTrigger value="published" className="gap-2">
                Published
                <Badge variant="secondary" className="ml-1">{publishedPapers.length}</Badge>
              </TabsTrigger>
              <TabsTrigger value="review" className="gap-2">
                Under Review
                <Badge variant="secondary" className="ml-1">{underReview.length}</Badge>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="published" className="space-y-3">
              {publishedPapers.map((pub, idx) => (
                <div key={idx} className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors bg-background/50">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <FileText className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                    
                    <div className="flex-grow min-w-0">
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Badge variant="secondary" className="text-xs">{pub.type}</Badge>
                        <Badge variant="outline" className="text-xs">{pub.year}</Badge>
                        {pub.points && (
                          <Badge variant="default" className="text-xs">{pub.points}</Badge>
                        )}
                      </div>
                      
                      <h3 className="font-semibold text-sm mb-2">{pub.title}</h3>
                      <p className="text-muted-foreground text-xs mb-1">{pub.authors}</p>
                      <p className="text-muted-foreground text-xs font-medium mb-2">{pub.venue}</p>
                      
                      {pub.link && (
                        <Button variant="outline" size="sm" className="h-7 text-xs" asChild>
                          <a href={pub.link} target="_blank" rel="noopener noreferrer">
                            View Publication
                            <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="review" className="space-y-3">
              {underReview.map((pub, idx) => (
                <div key={idx} className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors bg-background/50">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Clock className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                    
                    <div className="flex-grow min-w-0">
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Badge variant="secondary" className="text-xs">{pub.type}</Badge>
                        <Badge variant="outline" className="text-xs">{pub.year}</Badge>
                      </div>
                      
                      <h3 className="font-semibold text-sm mb-2">{pub.title}</h3>
                      <p className="text-muted-foreground text-xs mb-1">{pub.authors}</p>
                      <p className="text-muted-foreground text-xs font-medium">{pub.venue}</p>
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};
