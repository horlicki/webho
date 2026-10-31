import pedagogicalCourse from "@/assets/awards/pedagogical-course.jpg";
import deanCongratulations from "@/assets/awards/dean-congratulations.jpg";
import bestEngineeringThesis from "@/assets/awards/best-engineering-thesis.jpg";
import bestPaperAward from "@/assets/awards/best-paper-award.jpg";
import certificateIeee from "@/assets/awards/certificate-ieee.png";
import certificateUmea from "@/assets/awards/certificate-umea.png";
import certificateUnloc from "@/assets/awards/certificate-unloc.png";
import huaweiCertificate from "@/assets/awards/huawei-certificate.jpg";
import huaweiMedal from "@/assets/awards/huawei-medal.jpg";
import mastersAward from "@/assets/awards/masters-award.jpg";
import santanderDiploma from "@/assets/awards/santander-diploma.jpg";

export interface AwardItem {
  title: string;
  description: string;
  year: string;
  image?: string;
}

export interface CertificateGalleryItem {
  title: string;
  image: string;
  description: string;
}

export interface MediaItem {
  outlet: string;
  title: string;
  link: string;
}

export const awards: AwardItem[] = [
  {
    title: "Main Stage Speaker - Data Science Summit 2026",
    description: "Presentation on the main stage of Data Science Summit, one of the largest data science and AI conferences in Central and Eastern Europe",
    year: "2026"
  },
  {
    title: "3rd Place - Huawei ICT Competition 2024-2025 Europe",
    description: "Innovation Track - Regional Finals with 3rd Prize Winner recognition",
    year: "2025"
  },
  {
    title: "Pedagogical Course for Academic Teachers",
    description: "Completed pedagogical training course at Cracow University of Technology (March-June 2025)",
    year: "2025"
  },
  {
    title: "Santander Award for Academic Excellence",
    description: "Recognition for outstanding academic performance at Cracow University of Technology",
    year: "2025"
  },
  {
    title: "Top 10 Best Projects in Europe - Huawei Seeds for the Future",
    description: "BeeBrain project - Represented Poland as 1 of 10 students, competed with 145 students from 23 countries in Rome Finals",
    year: "2024"
  },
  {
    title: "Winner - FutureLab PK Grant (BeeBrain)",
    description: "AI-based IoT system for bee health monitoring and parasite detection",
    year: "2024"
  },
  {
    title: "EU Innovation Voucher Winner",
    description: "LSX 400 Mining Scanner Technology - Małopolskie Entrepreneurship Center funding",
    year: "2024"
  },
  {
    title: "Winner - BTC ENUTC (NCN)",
    description: "unLoc project - funded by Polish National Science Centre",
    year: "2024"
  },
  {
    title: "Distinction - Master's Thesis (WSB University)",
    description: "Recognition for BeeBrain parasite identification system thesis",
    year: "2024"
  },
  {
    title: "Winner - FutureLab PK Grant (Braille Display)",
    description: "Revolutionary low-cost Braille Display with OCR system for book scanning",
    year: "2023"
  },
  {
    title: "1st Place - Student Cybernetics Symposium SCS'2023",
    description: "Best paper presentation for Braille Display construction with character processing and text recognition",
    year: "2023"
  },
  {
    title: "Award for the Best Engineering Thesis",
    description: "Recognition from Polish Electrical Engineers Association (SEP) Kraków Branch for the Braille Display project",
    year: "2023"
  },
  {
    title: "Dean's Congratulations for Academic Success",
    description: "Recognition from the Dean of Faculty of Electrical and Computer Engineering for outstanding presentation at Student Cybernetics Symposium",
    year: "2023"
  },
  {
    title: "1st Place - Engineer 4 Science 2023",
    description: "National competition for Braille Display project with OCR and text processing system",
    year: "2023"
  },
  {
    title: "1st Place - Twenty-ninth ICT Forum",
    description: "Braille Display Device innovation award",
    year: "2023"
  },
  {
    title: "Finalist - Second Students Club Session 2023",
    description: "Braille Display Device presentation",
    year: "2023"
  },
  {
    title: "Rector's Scholarship",
    description: "Annual recognition for outstanding academic performance",
    year: "2019-2024"
  },
  {
    title: "2nd Place - Open the Door to Career",
    description: "Technical competition for intelligent home system using SATEL modules",
    year: "2019"
  }
];

export const certificateGallery: CertificateGalleryItem[] = [
  {
    title: "Huawei ICT Competition - 3rd Place Europe",
    image: huaweiCertificate,
    description: "3rd Prize Winner - Innovation Track Regional Finals 2024-2025"
  },
  {
    title: "Huawei ICT Competition - Medal",
    image: huaweiMedal,
    description: "Medal for 3rd Place in European Regional Finals"
  },
  {
    title: "Pedagogical Course Certificate",
    image: pedagogicalCourse,
    description: "Completion of Pedagogical Training for Academic Teachers and PhD Candidates (March-June 2025)"
  },
  {
    title: "Dean's Congratulations",
    image: deanCongratulations,
    description: "Recognition for Outstanding Presentation at Student Cybernetics Symposium (May 2023)"
  },
  {
    title: "Best Engineering Thesis Award",
    image: bestEngineeringThesis,
    description: "Polish Electrical Engineers Association (SEP) Award for Braille Display Project (2022/23)"
  },
  {
    title: "Best Paper Award - SCS'2023",
    image: bestPaperAward,
    description: "1st Place - Student Cybernetics Symposium 2023"
  },
  {
    title: "Master's Thesis Distinction",
    image: mastersAward,
    description: "WSB University Recognition for BeeBrain Project (2024)"
  },
  {
    title: "Santander Award",
    image: santanderDiploma,
    description: "Academic Excellence Recognition (2025)"
  },
  {
    title: "IEEE Certificate",
    image: certificateIeee,
    description: "Professional Development and Research Recognition"
  },
  {
    title: "Umeå University Certificate",
    image: certificateUmea,
    description: "International Research Collaboration"
  },
  {
    title: "unLoc Project Certificate",
    image: certificateUnloc,
    description: "NCN Funded Research Project Participation"
  }
];

export const media: MediaItem[] = [
  // BeeBrain Coverage
  {
    outlet: "Cracow University of Technology",
    title: "BeeBrain - Technology to Save Bees (FutureLab)",
    link: "https://www.pk.edu.pl/index.php?option=com_content&view=article&id=5450"
  },
  {
    outlet: "Polish Radio (Trojka)",
    title: "BeeBrain - Students to the Rescue of Bees",
    link: "https://trojka.polskieradio.pl/artykul/3412099,beebrain-studenci-politechniki-krakowskiej-na-ratunek-pszczolom"
  },
  {
    outlet: "Nauka w Polsce",
    title: "Monitoring System Will Detect Bee Parasites",
    link: "https://naukawpolsce.pl/aktualnosci/news%2C103899%2Cmonitoring-wykryje-pasozyty-pszczol.html"
  },
  {
    outlet: "KR24 Kraków",
    title: "Students from Kraków Invented a Way to Protect Bees",
    link: "https://kr24.pl/krakow/studenci-z-krakowa-wymyslili-sposob-na-ochrone-pszczol-wszystko-dzieki-technologii/"
  },
  {
    outlet: "Dziennik Polski",
    title: "BeeBrain - New Patent for Bee Protection from PK Students",
    link: "https://dziennikpolski24.pl/beebrain-nowy-patent-na-ochrone-pszczol-od-studentow-politechniki-krakowskiej/ar/c5-18694177"
  },
  {
    outlet: "Agronews",
    title: "Monitoring Will Detect Bee Parasites",
    link: "https://agronews.com.pl/artykul/monitoring-wykryje-pasozyty-pszczol/"
  },
  // Braille Display Coverage
  {
    outlet: "Cracow University of Technology",
    title: "World's Most Affordable Braille Display",
    link: "https://www.pk.edu.pl/index.php?option=com_content&view=article&id=4872"
  },
  {
    outlet: "Gazeta Krakowska",
    title: "Revolutionary Translator of Books for the Blind",
    link: "https://gazetakrakowska.pl/mlodzi-inzynierowie-z-politechniki-krakowskiej-autorami-rewolucyjnego-tlumacza-ksiazek-dla-niewidomych-przeklada-obraz-na/ar/c1-17646263"
  },
  {
    outlet: "Dobre Wiadomości",
    title: "World's Cheapest Device Converting Images to Braille",
    link: "https://dobrewiadomosci.net.pl/67708-absolwenci-politechniki-krakowskiej-stworzyli-najtansze-na-swiecie-urzadzenie-przetwarzajace-obrazy-na-alfabet-braillea/"
  },
  {
    outlet: "GeekWeek Interia",
    title: "Fantastic Success - Device Will Help Visually Impaired",
    link: "https://geekweek.interia.pl/nauka/news-fantastyczny-sukces-polskich-naukowcow-ich-urzadzenie-pomoze,nId,6825200"
  },
  {
    outlet: "OIOT",
    title: "Display That Translates Books to Braille",
    link: "https://oiot.pl/wyswietlacz-ktory-tlumaczy-ksiazki-na-braillea-pk/"
  },
  {
    outlet: "Gazeta Wyborcza Kraków",
    title: "When Only 1% of Books Are in Braille",
    link: "https://krakow.wyborcza.pl/krakow/7,44425,29871985,gdy-tylko-1-proc-ksiazek-jest-w-jezyku-braille-a-inzynierowie.html"
  },
  // Mining Scanner Coverage
  {
    outlet: "Cracow University of Technology",
    title: "Innovative Scanner Revolutionizes Mining Sorting on Three Continents",
    link: "https://www.pk.edu.pl/index.php?option=com_content&view=article&id=5825"
  },
  {
    outlet: "Chip.pl",
    title: "LSX 400 - Polish Invention Analyzing Mining Yield",
    link: "https://www.chip.pl/2025/05/lsx-400-polski-wynalazek-analizujacy-gorniczy-uzysk"
  },
  {
    outlet: "TVP Kraków",
    title: "Scanner from PK Conquers World Mines - Breakthrough in Material Analysis",
    link: "https://krakow.tvp.pl/86825157/skaner-z-pk-podbija-swiatowe-kopalnie-to-przelom-w-analizie-urobku"
  },
  {
    outlet: "Nauka w Polsce",
    title: "Mobile Scanner Allowing Material Classification Created at PK",
    link: "https://naukawpolsce.pl/aktualnosci/news%2C107936%2Cw-politechnice-krakowskiej-powstal-mobilny-skaner-pozwalajacy-sklasyfikowac"
  },
  {
    outlet: "Forum Akademickie",
    title: "Innovative Scanner Revolutionizes Mining Ore Sorting",
    link: "https://forumakademickie.pl/innowacyjny-skaner-rewolucjonizuje-sortowanie-urobku-gorniczego/"
  },
  // HABSat Coverage
  {
    outlet: "Cracow University of Technology",
    title: "COSMO PK Success - HABSat Probe Second Flight to Stratosphere",
    link: "https://www.pk.edu.pl/index.php?option=com_content&view=article&id=4788"
  },
  {
    outlet: "Forum Akademickie",
    title: "HABSat Probe Second Flight to Stratosphere",
    link: "https://forumakademickie.pl/sonda-habsat-ponownie-odbyla-lot-do-stratosfery/"
  },
  {
    outlet: "TVN Meteo",
    title: "PK HABSat Probe Built by Students Launched to Stratosphere",
    link: "https://tvn24.pl/tvnmeteo/polska/politechnika-krakowska-sonda-habsat-zbudowana-przez-studentow-wyruszyla-do-stratosfery-st5702201"
  },
  {
    outlet: "Spider's Web",
    title: "Seeds for the Future 2024 - Polish Student Success",
    link: "https://spidersweb.pl/2024/07/seeds-for-the-future-2024-rzym.html"
  },
  {
    outlet: "MamStartup",
    title: "Cracow University of Technology - First Choice for Innovation",
    link: "https://mamstartup.pl/politechnika-krakowska-pierwszym-wyborem-intech"
  }
];
