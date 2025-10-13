import { Card } from "@/components/ui/card";
import { Award, Medal, Trophy, FileCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import huaweiMedal from "@/assets/awards/huawei-medal.jpg";
import huaweiCertificate from "@/assets/awards/huawei-certificate.jpg";
import mastersAward from "@/assets/awards/masters-award.jpg";
import santanderDiploma from "@/assets/awards/santander-diploma.jpg";
import bestPaperAward from "@/assets/awards/best-paper-award.jpg";
import certificateUmea from "@/assets/awards/certificate-umea.png";
import certificateIeee from "@/assets/awards/certificate-ieee.png";
import certificateUnloc from "@/assets/awards/certificate-unloc.png";
import pedagogicalCourse from "@/assets/awards/pedagogical-course.jpg";
import deanCongratulations from "@/assets/awards/dean-congratulations.jpg";
import bestEngineeringThesis from "@/assets/awards/best-engineering-thesis.jpg";

interface GalleryItem {
  title: string;
  subtitle: string;
  icon: typeof Trophy | typeof Award | typeof Medal | typeof FileCheck;
  image: string;
}

const galleryItems: GalleryItem[] = [
  {
    title: "Huawei ICT Competition",
    subtitle: "3rd Prize Winner - Innovation Track",
    icon: Medal,
    image: huaweiMedal,
  },
  {
    title: "Best Paper Award",
    subtitle: "Student Cybernetics Symposium",
    icon: Trophy,
    image: bestPaperAward,
  },
  {
    title: "Engineer 4 Science",
    subtitle: "1st Place Diploma - 2023",
    icon: FileCheck,
    image: certificateIeee,
  },
  {
    title: "Umeå University Internship",
    subtitle: "Research Certificate - Sweden",
    icon: FileCheck,
    image: certificateUmea,
  },
  {
    title: "unLoc Research Project",
    subtitle: "NCN Grant Participation Certificate",
    icon: FileCheck,
    image: certificateUnloc,
  },
  {
    title: "Huawei Certificate",
    subtitle: "Regional Competition Europe",
    icon: Trophy,
    image: huaweiCertificate,
  },
  {
    title: "Best Engineering Thesis",
    subtitle: "SEP Kraków Branch Award",
    icon: Award,
    image: bestEngineeringThesis,
  },
  {
    title: "Dean's Congratulations",
    subtitle: "Academic Success Recognition",
    icon: Award,
    image: deanCongratulations,
  },
  {
    title: "Pedagogical Course",
    subtitle: "Academic Teachers Training 2025",
    icon: FileCheck,
    image: pedagogicalCourse,
  },
  {
    title: "Master's Thesis Excellence",
    subtitle: "WSB University Distinction",
    icon: Award,
    image: mastersAward,
  },
  {
    title: "Santander Award",
    subtitle: "Academic Excellence 2025",
    icon: Medal,
    image: santanderDiploma,
  },
];

export const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 16; // 4 rows x 4 columns
  const totalPages = Math.ceil(galleryItems.length / itemsPerPage);
  
  const currentItems = galleryItems.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section id="gallery" className="py-16 bg-card">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mb-12 text-center mx-auto animate-slide-up">
          <h2 className="mb-4">Achievements Gallery</h2>
          <p className="text-xl text-muted-foreground">
            Certificates, awards, and diplomas documenting academic excellence and research achievements
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Navigation Buttons */}
          {totalPages > 1 && (
            <>
              <button
                onClick={prevPage}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-background/80 backdrop-blur-sm border border-border rounded-full p-2 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                aria-label="Previous page"
              >
                <ChevronLeft className="h-6 w-6 text-primary" />
              </button>
              <button
                onClick={nextPage}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-background/80 backdrop-blur-sm border border-border rounded-full p-2 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                aria-label="Next page"
              >
                <ChevronRight className="h-6 w-6 text-primary" />
              </button>
            </>
          )}

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
            {currentItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-300 relative">
                  <div className="aspect-[3/4] relative">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                    
                    {/* Content overlay */}
                    <div className="absolute inset-0 flex flex-col items-center justify-end text-center p-6">
                      <div className="bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full p-3 mb-3">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4 border border-border/50 w-full">
                        <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Pagination Dots */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentPage
                      ? "w-8 bg-primary"
                      : "w-2 bg-border hover:bg-primary/50"
                  }`}
                  aria-label={`Go to page ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
