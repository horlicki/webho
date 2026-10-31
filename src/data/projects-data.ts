import beeBrainImg from "@/assets/beebrain.jpg";
import beeBrainImg1 from "@/assets/beebrain1.jpg";
import beeBrainImg2 from "@/assets/beebrain2.jpg";
import beeBrainImg3 from "@/assets/beebrain3.jpg";
import beeBrainImg4 from "@/assets/beebrain4.jpg";
import beeBrainImg5 from "@/assets/beebrain5.jpg";
import beeBrainHivesImg from "@/assets/beebrain-hives.jpg";
import beeBrainParasiteImg from "@/assets/beebrain-parasite.jpg";
import brailleImg from "@/assets/braille.jpg";
import brailleImg1 from "@/assets/braille1.jpg";
import brailleImg2 from "@/assets/braille2.jpg";
import brailleImg3 from "@/assets/braille3.jpg";
import brailleImg4 from "@/assets/braille4.jpg";
import brailleImg5 from "@/assets/braille5.jpg";
import brailleElectronics from "@/assets/braille-electronics.jpg";
import brailleCad from "@/assets/braille-cad.png";
import pedagogicalCourse from "@/assets/awards/pedagogical-course.jpg";
import deanCongratulations from "@/assets/awards/dean-congratulations.jpg";
import bestEngineeringThesis from "@/assets/awards/best-engineering-thesis.jpg";
import miningImg from "@/assets/mining.jpg";
import miningImg1 from "@/assets/mining1.jpg";
import habsatImg from "@/assets/habsat.jpg";
import habsatImg1 from "@/assets/habsat1.jpg";
import habsatImg2 from "@/assets/habsat2.jpg";
import habsatImg3 from "@/assets/habsat3.jpg";
import breastCancerImg from "@/assets/breast-cancer-ml.png";
import palletLabelingImg from "@/assets/pallet-labeling.png";
import aidmapImg from "@/assets/aidmap.png";
import unlocImg from "@/assets/unloc.jpg";
import unlocSample from "@/assets/unloc-sample.png";
import unlocSample2 from "@/assets/unloc-sample2.png";
import unlocSam from "@/assets/unloc-sam.png";
import certificateUnloc from "@/assets/awards/certificate-unloc.png";
import certificateUmea from "@/assets/awards/certificate-umea.png";
import umeaResearch from "@/assets/umea-research.png";
import loyaltyAgentTools from "@/assets/loyalty-agent-tools.png";
import loyaltyAgentReport from "@/assets/loyalty-agent-report.png";
import loyaltyAgentFeedback from "@/assets/loyalty-agent-feedback.png";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description?: string;
  problem?: string;
  solution?: string;
  results?: string;
  impact?: string;
  technologies: string[];
  image: string;
  images?: string[];
  links?: { label: string; url: string }[];
  mediaCoverage?: { label: string; url: string }[];
  recognition: string[];
}

export const projects: Project[] = [
  {
    id: "loyalty-audit-agent",
    title: "Loyalty Program Audit Agent",
    subtitle: "Autonomous LLM Agent with RAG for Loyalty Program Audits - Production Deployment",
    problem: "A <span class='text-primary'>consultancy designing loyalty programs</span> prepared every client meeting with a <span class='text-primary'>manual pre-sales audit</span> of the prospect's existing program: scraping the website, reading app store and Trustpilot reviews, checking traffic data, benchmarking competitors and writing a <span class='text-primary'>13-section strategic report</span>. Each audit took analysts <span class='text-primary'>hours of repetitive research</span>, quality depended on who wrote it, and insights from previous audits and the company's own methodology were <span class='text-primary'>not reused systematically</span>.",
    solution: "<span class='text-primary'>Production agentic system</span> built on the <span class='text-primary'>Claude API</span> with a custom tool-use loop. Given a brand name and URL, the agent autonomously plans its research and calls <span class='text-primary'>7 tools</span>: <span class='text-primary'>scrape_page</span> (requests + BeautifulSoup with Playwright fallback for JS-heavy sites, tech-stack fingerprinting), <span class='text-primary'>fetch_sitemap</span>, <span class='text-primary'>fetch_similarweb</span>, <span class='text-primary'>search_web</span>, <span class='text-primary'>fetch_reviews</span> (Trustpilot, App Store, Google Play), <span class='text-primary'>retrieve_knowledge</span> and <span class='text-primary'>save_section</span>, which persists each of the 13 report sections with a confidence level. <span class='text-primary'>RAG layer</span> on ChromaDB with multilingual sentence-transformer embeddings indexes the company playbook, books, case studies (PDF, DOCX, PPTX, EPUB) and every past analysis. <span class='text-primary'>Human-in-the-loop feedback</span>: analysts rate reports per section (thumbs up/down), add strategic notes and edits, and all of it is written back to the vector store, so the <span class='text-primary'>next analysis in the same industry retrieves those lessons</span>. Cost engineering: <span class='text-primary'>prompt caching</span>, <span class='text-primary'>context editing</span> that clears stale scraping results while keeping saved sections, adaptive thinking with configurable effort, and a cheaper model for follow-up chat. <span class='text-primary'>FastAPI backend</span> streams every tool call to the UI over <span class='text-primary'>Server-Sent Events</span>, runs analyses as background jobs that survive page reloads, and exports reports to PDF, Markdown and JSON. Access is restricted with <span class='text-primary'>Google OAuth</span> to the company domain, with per-user history and shared team analyses. Deployed on <span class='text-primary'>Railway</span>.",
    results: "A full <span class='text-primary'>13/13-section audit generated in about 1.5 minutes</span>, compared with hours of manual research. <span class='text-primary'>Prompt caching serves the vast majority of input tokens from cache</span> (e.g. 81k cached vs. a handful of uncached tokens per run), keeping the cost per analysis low. Every section carries an explicit <span class='text-primary'>confidence label</span>, so analysts see where data was missing instead of reading hallucinated claims. The <span class='text-primary'>feedback loop turns the agent into a growing knowledge base</span> of the company's own reasoning: ratings, notes and edits improve future reports without retraining. <span class='text-primary'>Running in production</span>, used by the consulting team to prepare client meetings, including analyses of large retail brands.",
    technologies: ["Claude API", "AI Agents", "Tool Use", "RAG", "ChromaDB", "Sentence Transformers", "Prompt Caching", "Context Engineering", "Python", "FastAPI", "Server-Sent Events", "Playwright", "BeautifulSoup", "Google OAuth", "Railway"],
    image: loyaltyAgentTools,
    images: [loyaltyAgentTools, loyaltyAgentReport, loyaltyAgentFeedback],
    recognition: [
      "Production Deployment",
      "End-to-End Agent: Tool Use, RAG, Human Feedback Loop",
      "13-Section Audit in ~1.5 Minutes"
    ]
  },
  {
    id: "beebrain",
    title: "BeeBrain",
    subtitle: "Comprehensive IoT System for Bee Health Monitoring",
    problem: "<span class='text-primary'>Varroa destructor parasites</span> pose an <span class='text-primary'>existential threat</span> to global bee populations, with colony collapse potentially triggering <span class='text-primary'>food security crisis</span> affecting <span class='text-primary'>$235B in annual crop pollination value</span>. Traditional beekeeping methods struggle with early detection and data-driven decision making. Beekeepers face challenges in: 1) Detecting parasite infestations before critical damage occurs, 2) Managing multiple hives without constant physical inspection, 3) Understanding environmental factors affecting colony health, 4) Making informed intervention decisions without comprehensive data.",
    solution: "Comprehensive <span class='text-primary'>IoT ecosystem</span> combining <span class='text-primary'>AI-powered parasite detection</span> with <span class='text-primary'>environmental monitoring</span>. Computer vision module using <span class='text-primary'>ResNet architecture</span> detects Varroa parasites in <span class='text-primary'>real-time</span> at hive entrances. Internal sensors monitor <span class='text-primary'>temperature, humidity, and colony activity</span>. External <span class='text-primary'>weather station</span> tracks environmental conditions. <span class='text-primary'>Solar-powered operation</span> with <span class='text-primary'>5G connectivity</span> enables deployment in remote apiaries. Mobile app delivers <span class='text-primary'>real-time alerts, predictive analytics, and actionable recommendations</span>. System designed for scalability from hobby beekeepers to <span class='text-primary'>commercial operations</span>.",
    results: "Pilot deployment operational in Kraków with <span class='text-primary'>2 active hives (60,000-160,000 bees)</span> equipped with full sensor arrays. <span class='text-primary'>Early intervention capability</span> enables proactive parasite management before colony damage. Data-driven insights support local beekeepers and agricultural economy. Platform architecture proven scalable for <span class='text-primary'>commercial deployment</span>. Project recognized internationally at <span class='text-primary'>Huawei Seeds for the Future (Top 10 in Europe</span> from 145 students across 23 countries) and funded through <span class='text-primary'>FutureLab PK grant</span>. Extensive media coverage demonstrating public interest and market validation.",
    technologies: ["ResNet", "Computer Vision", "IoT Sensors", "5G", "Huawei Cloud", "Python", "Weather Monitoring", "Renewable Energy"],
    image: beeBrainHivesImg,
    images: [beeBrainImg1, beeBrainImg2, beeBrainImg5, beeBrainImg4],
    links: [
      { label: "FutureLab Grant", url: "https://futurelab.pk.edu.pl/aktualnosci/beebrain-technologia-na-ratunek-pszczolom-nauka4future/" },
      { label: "University Article", url: "https://www.pk.edu.pl/index.php?option=com_content&view=article&id=5450" }
    ],
    mediaCoverage: [
      { label: "Polish Radio (Trojka)", url: "https://trojka.polskieradio.pl/artykul/3412099,beebrain-studenci-politechniki-krakowskiej-na-ratunek-pszczolom" },
      { label: "Nauka w Polsce", url: "https://naukawpolsce.pl/aktualnosci/news%2C103899%2Cmonitoring-wykryje-pasozyty-pszczol.html" },
      { label: "KR24 Kraków", url: "https://kr24.pl/krakow/studenci-z-krakowa-wymyslili-sposob-na-ochrone-pszczol-wszystko-dzieki-technologii/" },
      { label: "Dziennik Polski", url: "https://dziennikpolski24.pl/beebrain-nowy-patent-na-ochrone-pszczol-od-studentow-politechniki-krakowskiej/ar/c5-18694177" },
      { label: "Agronews", url: "https://agronews.com.pl/artykul/monitoring-wykryje-pasozyty-pszczol/" }
    ],
    recognition: [
      "FutureLab PK Grant Winner",
      "Top 10 Best Projects in Europe - Huawei Seeds for the Future 2024",
      "Presented at Rome Finals (145 students from 23 countries)"
    ]
  },
  {
    id: "braille",
    title: "Braille Display & OCR System",
    subtitle: "Revolutionary Real-Time Text-to-Braille Converter with Book Scanning",
    problem: "Global accessibility crisis affects <span class='text-primary'>39 million blind individuals worldwide</span>, with <span class='text-primary'>only 1% of books translated to Braille</span>. In Poland alone, <span class='text-primary'>300,000 people</span> cannot access printed materials. Traditional Braille displays cost <span class='text-primary'>8,000-15,000 PLN</span>, creating insurmountable barrier for developing regions and individual users. Market gap: <span class='text-primary'>2.2 billion people with vision impairments</span> (WHO 2019), yet assistive technology remains economically inaccessible. Existing solutions require pre-translated content, limiting spontaneous learning and daily independence.",
    solution: "Revolutionary <span class='text-primary'>low-cost device (1,000 PLN prototype vs 8,000-15,000 PLN market alternatives)</span> combining <span class='text-primary'>computer vision</span> with mechanical innovation. System features: <span class='text-primary'>Raspberry Pi microcomputer</span> with integrated camera for <span class='text-primary'>real-time image capture</span>, <span class='text-primary'>Tesseract OCR engine</span> with AI enhancement for text recognition from any surface (books, labels, screens), custom <span class='text-primary'>mechanical system with servo-controlled pins</span> creating tactile Braille output, <span class='text-primary'>instant translation</span> with left-to-right display following Braille conventions. <span class='text-primary'>Python-based software stack</span> using <span class='text-primary'>OpenCV</span> for image processing. <span class='text-primary'>3D-printed components</span> enable cost-efficient manufacturing at scale.",
    results: "<span class='text-primary'>TRL 6 (Technology Readiness Level)</span> achieved - functional prototype validated in relevant environment. <span class='text-primary'>Production cost reduced by 90%</span> compared to commercial alternatives, enabling <span class='text-primary'>mass accessibility</span>. Multiple prestigious awards: <span class='text-primary'>1st Place Student Cybernetics Symposium SCS'2023</span>, <span class='text-primary'>1st Place Engineer 4 Science 2023</span>, <span class='text-primary'>FutureLab PK Grant Winner</span>. Featured on <span class='text-primary'>national television</span> and major Polish media outlets. Validated with <span class='text-primary'>Polish Association of the Blind</span> for real-world usability. Roadmap includes expansion to <span class='text-primary'>12-16 characters</span>, <span class='text-primary'>PDF format support</span>, food label scanning, and <span class='text-primary'>multi-language capability</span>. Estimated <span class='text-primary'>2-year path to Polish market entry</span>, with international expansion potential through Braille alphabet configuration.",
    technologies: ["Computer Vision", "Tesseract OCR", "Raspberry Pi", "Python", "OpenCV", "3D Printing", "Servo Control Systems"],
    image: brailleImg1,
    images: [brailleImg1, brailleElectronics, brailleCad, brailleImg2, brailleImg3, brailleImg4, brailleImg5],
    links: [
      { label: "University Article", url: "https://www.pk.edu.pl/index.php?option=com_content&view=article&id=4872" }
    ],
    mediaCoverage: [
      { label: "Gazeta Krakowska", url: "https://gazetakrakowska.pl/mlodzi-inzynierowie-z-politechniki-krakowskiej-autorami-rewolucyjnego-tlumacza-ksiazek-dla-niewidomych-przeklada-obraz-na/ar/c1-17646263" },
      { label: "Dobre Wiadomości", url: "https://dobrewiadomosci.net.pl/67708-absolwenci-politechniki-krakowskiej-stworzyli-najtansze-na-swiecie-urzadzenie-przetwarzajace-obrazy-na-alfabet-braillea/" },
      { label: "GeekWeek Interia", url: "https://geekweek.interia.pl/nauka/news-fantastyczny-sukces-polskich-naukowcow-ich-urzadzenie-pomoze,nId,6825200" },
      { label: "OIOT", url: "https://oiot.pl/wyswietlacz-ktory-tlumaczy-ksiazki-na-braillea-pk/" },
      { label: "Gazeta Wyborcza", url: "https://krakow.wyborcza.pl/krakow/7,44425,29871985,gdy-tylko-1-proc-ksiazek-jest-w-jezyku-braille-a-inzynierowie.html" }
    ],
    recognition: [
      "1st Place - Student Cybernetics Symposium SCS'2023",
      "1st Place - Engineer 4 Science 2023",
      "1st Place - Twenty-ninth ICT Forum",
      "Finalist - Second Students Club Session 2023",
      "FutureLab PK Grant Winner",
      "Featured on National Television"
    ]
  },
  {
    id: "mining",
    title: "Mining Scanner Technology",
    subtitle: "LSX 400 - Advanced Sorting System Revolutionizing Mining Industry",
    problem: "Mining operations worldwide face critical efficiency challenges in ore processing. Traditional sorting methods waste <span class='text-primary'>massive amounts of energy</span> on crushing, grinding, and flotation of worthless rock material mixed with valuable minerals. This creates <span class='text-primary'>enormous volumes of post-flotation waste</span> and environmental hazards. Industrial sorting machines processing <span class='text-primary'>hundreds of tons per hour cannot afford production stoppages</span> for calibration testing. Mining companies lack cost-effective laboratory solutions for <span class='text-primary'>precise material analysis</span> before configuring industrial-scale sorters, leading to suboptimal separation and <span class='text-primary'>significant resource losses</span>.",
    solution: "<span class='text-primary'>LSX 400 mobile analytical station</span> - compact as a photocopier, powerful as industrial equipment. Revolutionary device combining <span class='text-primary'>dual X-ray technologies</span>: XRT (X-ray transmission) analyzing atomic density like medical X-rays, and <span class='text-primary'>XRF (X-ray fluorescence)</span> identifying elements through unique wavelength emission. System enables <span class='text-primary'>precise percentage composition analysis</span> of valuable minerals in extracted material. Designed for research institutions and universities, allowing <span class='text-primary'>competent scientists to conduct calibration studies</span> and transmit optimized settings to industrial mines. <span class='text-primary'>Fan beam geometry</span> ensures accurate scanning of material placed in specialized trays. Platform enables rapid sample analysis without <span class='text-primary'>production line interruptions</span>.",
    results: "<span class='text-primary'>International deployment across 3 continents</span> - Sweden, Canada, and Brazil. Industrial sorters configured with LSX 400 data achieve <span class='text-primary'>97-98% separation accuracy</span> at throughput rates of <span class='text-primary'>several hundred tons per hour</span>. Technology successfully analyzes diverse materials: <span class='text-primary'>coal, magnesite, fluorite, lead ore, zinc, copper, and gold</span>. <span class='text-primary'>Dramatic cost reduction</span> through optimized energy consumption - eliminates wasteful processing of worthless rock. <span class='text-primary'>Environmental impact</span>: significantly minimizes post-flotation waste volume. <span class='text-primary'>Perfect academia-industry synergy</span> - EU-funded through Innovation Voucher (Małopolskie Entrepreneurship Center), executed by Politechnika Krakowska spin-off Intech PK. Multi-year collaboration with Comex (global mining innovation leader) generating <span class='text-primary'>high-impact scientific publications</span>, <span class='text-primary'>6M PLN research grant</span> for mobile post-mining waste utilization facilities, and ongoing AI expansion into <span class='text-primary'>food industry and recycling sectors</span>.",
    technologies: ["X-ray Fluorescence (XRF)", "X-ray Transmission (XRT)", "Deep Learning", "Computer Vision", "Industrial IoT", "GPU Computing", "Python", "Material Science"],
    image: miningImg1,
    images: [miningImg1],
    links: [
      { label: "University Article", url: "https://www.pk.edu.pl/index.php?option=com_content&view=article&id=5825" }
    ],
    mediaCoverage: [
      { label: "Chip.pl", url: "https://www.chip.pl/2025/05/lsx-400-polski-wynalazek-analizujacy-gorniczy-uzysk" },
      { label: "TVP Kraków", url: "https://krakow.tvp.pl/86825157/skaner-z-pk-podbija-swiatowe-kopalnie-to-przelom-w-analizie-urobku" },
      { label: "Nauka w Polsce", url: "https://naukawpolsce.pl/aktualnosci/news%2C107936%2Cw-politechnice-krakowskiej-powstal-mobilny-skaner-pozwalajacy-sklasyfikowac" },
      { label: "Forum Akademickie", url: "https://forumakademickie.pl/innowacyjny-skaner-rewolucjonizuje-sortowanie-urobku-gorniczego/" }
    ],
    recognition: [
      "International Deployment - 3 Continents",
      "97-98% Industrial Sorting Accuracy"
    ]
  },
  {
    id: "habsat",
    title: "HABSat Probe",
    subtitle: "High Altitude Balloon Satellite - Stratospheric Research Platform",
    problem: "Space research and <span class='text-primary'>atmospheric experiments</span> traditionally require <span class='text-primary'>expensive satellite launches</span> costing <span class='text-primary'>$100K+</span> or complex institutional infrastructure. Educational institutions and research teams lack <span class='text-primary'>affordable platforms</span> for conducting experiments in <span class='text-primary'>stratospheric conditions</span> (~30km altitude) where cosmic radiation, low pressure, and extreme temperatures simulate near-space environment. <span class='text-primary'>Nanosatellite prototyping</span> requires real-world testing but launch opportunities are rare and costly. Standard weather balloons offer limited <span class='text-primary'>payload capacity</span>, <span class='text-primary'>data collection capabilities</span>, and lack <span class='text-primary'>modular experiment integration</span>.",
    solution: "<span class='text-primary'>HABSat (High Altitude Balloon Satellite)</span> - student-designed <span class='text-primary'>modular experimental platform</span> for stratospheric research. Custom-engineered capsule reaches <span class='text-primary'>30+ km altitude</span> using hydrogen-filled weather balloon. Platform features: <span class='text-primary'>GPS tracking module</span> with real-time telemetry, <span class='text-primary'>autonomous data logging</span> to external Flash memory, <span class='text-primary'>standardized payload bay</span> following <span class='text-primary'>CubeSat format</span> for experiment compatibility, <span class='text-primary'>intelligent power management system</span> with solar panel integration capability, multiple <span class='text-primary'>communication protocols</span> for reliable ground contact, <span class='text-primary'>parachute recovery system</span> for safe capsule retrieval. Built by <span class='text-primary'>COSMO PK Scientific Club</span> at Faculty of Computer Science and Telecommunications. Second mission carried <span class='text-primary'>cosmic radiation detector</span> (scintillator-based) measuring particle energy across altitude profiles to study <span class='text-primary'>atmospheric shielding effects</span>.",
    results: "<span class='text-primary'>Multiple successful stratospheric missions</span> with <span class='text-primary'>100% data recovery</span> and safe capsule retrieval. Mission 1: Construction validation and telemetry testing. Mission 2: <span class='text-primary'>Cosmic radiation intensity mapping</span> as function of altitude, validating atmospheric particle attenuation theories. Launch from Wolbrom, safe landing near Czubrowice after multi-hour flight. <span class='text-primary'>Full mission trajectory tracking</span> available at habsat.pl. Platform validates <span class='text-primary'>low-cost space research</span> approach - <span class='text-primary'>&lt;$5K total cost</span> vs traditional alternatives. Enables rapid <span class='text-primary'>payload customization</span> for diverse experiments. Technology serves as <span class='text-primary'>nanosatellite prototype development platform</span>, providing crucial experience for advanced spacecraft engineering. <span class='text-primary'>HABSat2 under development</span> with enhanced structural integrity, improved electronics, smarter power systems, and multiple communication methods. Research contributes to doctoral thesis on distributed scintillation detector systems. Featured on <span class='text-primary'>national television</span> and university main page.",
    technologies: ["Embedded Systems", "Aerospace Engineering", "CubeSat Standards", "GPS Telemetry", "Cosmic Ray Detection", "Scintillation Detectors", "Autonomous Systems", "Weather Balloons"],
    image: habsatImg2,
    images: [habsatImg1, habsatImg2, habsatImg3],
    links: [
      { label: "First Mission Report", url: "https://www.pk.edu.pl/index.php?option=com_content&view=article&id=4280" },
      { label: "Second Mission Report", url: "https://www.pk.edu.pl/index.php?option=com_content&view=article&id=4788" },
      { label: "Flight Trajectory", url: "http://habsat.pl/" }
    ],
    mediaCoverage: [
      { label: "Forum Akademickie", url: "https://forumakademickie.pl/sonda-habsat-ponownie-odbyla-lot-do-stratosfery/" },
      { label: "TVN Meteo", url: "https://tvn24.pl/tvnmeteo/polska/politechnika-krakowska-sonda-habsat-zbudowana-przez-studentow-wyruszyla-do-stratosfery-st5702201" },
      { label: "YouTube Mission Video", url: "https://www.youtube.com/watch?v=Jx_Ca0Zz7Mw" }
    ],
    recognition: [
      "Featured on National Television"
    ]
  },
  {
    id: "breast-cancer-ml",
    title: "Breast Cancer Diagnosis ML",
    subtitle: "Machine Learning in Histopathological Image Analysis",
    problem: "<span class='text-primary'>Breast cancer</span> remains one of the most prevalent cancers worldwide, requiring <span class='text-primary'>accurate and rapid diagnosis</span> from histopathological images. Traditional manual analysis is <span class='text-primary'>time-consuming</span> and subject to human error. Medical professionals need <span class='text-primary'>automated diagnostic tools</span> that can reliably classify tissue samples while maintaining high accuracy across diverse patient populations. The challenge lies in developing <span class='text-primary'>robust machine learning models</span> capable of distinguishing between healthy and cancerous tissue with clinical-grade precision.",
    solution: "Comprehensive research implementing <span class='text-primary'>15 different machine learning architectures</span> for breast cancer classification from histopathological images. Study encompassed: <span class='text-primary'>pre-trained models</span> (NASNetLarge, VGG16/19, ResNet50/152v2, MobileNetV2, EfficientNetB0/B7, Xception, InceptionV3, InceptionResNetV2, DenseNet201), <span class='text-primary'>custom CNN architectures</span> designed specifically for medical imaging, and innovative <span class='text-primary'>Vision Transformer (ViT)</span> implementation. Advanced <span class='text-primary'>hyperparameter optimization using Optuna</span> framework to maximize model performance. Rigorous <span class='text-primary'>data preprocessing pipeline</span> with augmentation techniques. <span class='text-primary'>Convolutional Neural Networks</span> leveraged for automatic feature extraction from complex tissue patterns.",
    results: "Best performing model: <span class='text-primary'>Custom CNN with Optuna optimization achieved 85.43% accuracy</span>, <span class='text-primary'>93.03% F1 score</span>, and <span class='text-primary'>87.37% AUC</span>. Comprehensive comparative analysis across 15 architectures revealed: <span class='text-primary'>NASNetLarge (75.62% accuracy, 82.79% AUC)</span>, <span class='text-primary'>DenseNet201 (82.00% accuracy, 89.61% F1)</span>, <span class='text-primary'>InceptionV3 (76.97% accuracy, 87.15% AUC)</span>. Research demonstrated that <span class='text-primary'>custom architectures outperformed pre-trained models</span> when properly optimized for medical imaging domain. Study provides <span class='text-primary'>reproducible methodology</span> for medical image classification tasks. Results contributed to <span class='text-primary'>Master's thesis excellence recognition</span> at WSB University. Work establishes foundation for clinical deployment of <span class='text-primary'>AI-assisted cancer diagnosis</span>, potentially reducing diagnostic time while maintaining high accuracy standards.",
    technologies: ["Deep Learning", "CNN", "Vision Transformers", "Python", "TensorFlow", "Optuna", "Medical Imaging", "ResNet", "NASNet", "DenseNet"],
    image: breastCancerImg,
    images: [breastCancerImg],
    recognition: [
      "Master's Thesis Excellence Award - WSB University"
    ]
  },
  {
    id: "pallet-labeling",
    title: "Industrial Pallet Labeling System",
    subtitle: "Automated Barcode Generation & Printing for Manufacturing Operations",
    problem: "<span class='text-primary'>Manufacturing facilities</span> producing plastic pallets face critical challenges in <span class='text-primary'>inventory management and quality control</span>. Manual labeling systems are prone to <span class='text-primary'>human error</span>, inconsistent formatting, and lack <span class='text-primary'>traceability across production shifts</span>. With <span class='text-primary'>multiple shift rotations (1-4)</span>, <span class='text-primary'>10+ pallet types</span> (P1, P2, P4, P5, P8, P15, P17, P18, P18_HD, P20), and <span class='text-primary'>4 surface variants</span> (A, AB, G, GB), tracking production requires systematic approach. Traditional paper-based systems cannot provide <span class='text-primary'>real-time inventory insights</span> or prevent duplicate serial numbers. Factory workers need <span class='text-primary'>intuitive interface</span> usable with minimal training, while management requires <span class='text-primary'>comprehensive production history</span> for quality audits and logistics optimization.",
    solution: "<span class='text-primary'>Desktop application</span> built with <span class='text-primary'>Python and Tkinter</span> providing <span class='text-primary'>touch-friendly fullscreen interface</span> optimized for factory floor deployment. System features: <span class='text-primary'>automatic barcode generation</span> integrating shift number, pallet type, surface type, date, and sequential serial number; <span class='text-primary'>direct integration with Zebra industrial printers</span> (ZDesigner GC420d, GX420d) via ZPL (Zebra Programming Language); <span class='text-primary'>intelligent daily counter reset</span> ensuring fresh numbering each day; <span class='text-primary'>Excel-based data persistence</span> (PalletHistory.xlsx) logging every label with timestamp, configuration, and serial number; <span class='text-primary'>multi-printer support</span> with runtime selection; <span class='text-primary'>visual feedback system</span> with large buttons indicating active selections; <span class='text-primary'>password-protected exit</span> preventing accidental application closure during production. Interface designed for <span class='text-primary'>minimal clicks</span> - workers select shift, pallet type, surface type, then print - ensuring <span class='text-primary'>rapid label generation</span> without workflow interruption.",
    results: "<span class='text-primary'>Production deployment</span> in plastic pallet manufacturing facility achieving <span class='text-primary'>100% label traceability</span> across all shifts and product variants. System eliminates <span class='text-primary'>manual labeling errors</span> and provides <span class='text-primary'>instant production history access</span> via Excel logs. <span class='text-primary'>Automated serial numbering</span> prevents duplicates while daily reset maintains organized record-keeping. <span class='text-primary'>Touch-optimized interface</span> enables operators to generate labels in <span class='text-primary'>under 10 seconds</span> without technical training. <span class='text-primary'>Barcode standardization</span> improves inventory management and logistics tracking throughout supply chain. <span class='text-primary'>Historical data collection</span> enables production analytics: shift performance comparison, pallet type demand patterns, and quality control auditing. System's <span class='text-primary'>robust printer connection handling</span> with error messaging ensures minimal production disruption. <span class='text-primary'>Password protection</span> maintains operational continuity by preventing accidental closures. Solution demonstrates practical application of <span class='text-primary'>software engineering in industrial automation</span>, improving efficiency while maintaining simplicity for non-technical users.",
    technologies: ["Python", "Tkinter", "Zebra Printers", "ZPL", "Barcode Generation", "Excel Automation", "Industrial IoT", "Manufacturing Systems"],
    image: palletLabelingImg,
    images: [palletLabelingImg],
    recognition: [
      "Production Deployment in Manufacturing Facility",
      "100% Label Traceability Achievement",
      "10+ Pallet Types & 4 Surface Variants Support",
      "Multi-Shift Production Tracking"
    ]
  },
  {
    id: "aidmap",
    title: "AidMap",
    subtitle: "AI-Powered Urban Accessibility Platform with AR & BIM Integration",
    problem: "<span class='text-primary'>Urban accessibility</span> remains a critical challenge for people with disabilities worldwide. <span class='text-primary'>Architectural barriers</span> (stairs without ramps, narrow doorways, high curbs), <span class='text-primary'>mobility barriers</span> (damaged pavements, missing tactile guidance), and <span class='text-primary'>social/informational barriers</span> (lack of accessibility data) prevent millions from independent city navigation. Research across <span class='text-primary'>24 Polish municipalities</span> revealed shocking statistics: <span class='text-primary'>39.3% of design documents ignored accessibility solutions</span>, <span class='text-primary'>100% of audited facilities had barriers or shortcomings</span>, and <span class='text-primary'>0 out of 94 facilities were fully accessible</span>. Key issue: <span class='text-primary'>accessibility missing from design phase</span>. Traditional accessibility audits are expensive, time-consuming, and quickly outdated. Cities lack comprehensive data on barrier locations and impact. People with disabilities face uncertainty about route accessibility before travel, limiting independence and participation in society.",
    solution: "<span class='text-primary'>AidMap - innovative mobile and web application</span> supporting urban accessibility for people with disabilities through <span class='text-primary'>interactive 3D mapping</span> and <span class='text-primary'>AI-powered analysis</span>. Core capabilities: <span class='text-primary'>Crowdsourced data reporting</span> allowing users to document barriers (uneven pavements, missing ramps, obstacles) with photos and descriptions; <span class='text-primary'>Smart route planning</span> enabling obstacle-free navigation customized for wheelchairs, visual impairments, or elderly users; <span class='text-primary'>AR visualization</span> using Three.js showing real-world barriers in augmented reality; <span class='text-primary'>BIM (Building Information Modeling) integration</span> providing precise infrastructure data for 3D city analysis; <span class='text-primary'>Huawei ModelArts AI</span> generating smart predictions and automated barrier detection (curbs, slopes, gaps) from imagery; <span class='text-primary'>Interactive dashboard</span> for cities, universities, and citizens with exportable accessibility reports; <span class='text-primary'>Universal design interface</span> offering full-feature view, simplified 4-button mode, and specialized interface for blind users; Integration with <span class='text-primary'>Huawei Mobile Services (HMS)</span>: Location Kit, Map Kit, Site Kit, Account Kit; <span class='text-primary'>Cloud infrastructure</span> leveraging Huawei ECS, OBS, TaurusDB. Platform enables cities to <span class='text-primary'>visualize proposed accessibility improvements in 3D/AR before implementation</span>, ensuring cost-effective planning.",
    results: "<span class='text-primary'>Winner - Huawei ICT Competition 2024-2025 Global Final</span> competing against teams from across Europe. <span class='text-primary'>Top European Innovation</span> recognized for smart city contribution. Functional <span class='text-primary'>mobile app (Android)</span> and <span class='text-primary'>web dashboard</span> with real-world deployment capability. System aligns with <span class='text-primary'>UN Sustainable Development Goals</span>: SDG 9 (Industry, Innovation & Infrastructure), SDG 10 (Reduced Inequalities), SDG 11 (Sustainable Cities), SDG 17 (Partnerships for Goals). <span class='text-primary'>Team collaboration</span>: Arkadiusz Niedziela (ICT Lead), Katarzyna Kosiak (UI/BIM), Hubert Orlicki (AI), mentored by Prof. Piotr Zwierzykowski. Solution supports <span class='text-primary'>Smart City initiatives</span> by providing municipalities open accessibility data for evidence-based urban planning. Early beta deployment demonstrates <span class='text-primary'>community engagement potential</span> with user-generated reports improving urban mapping accuracy. Technology stack showcases <span class='text-primary'>cutting-edge integration</span>: HMS ecosystem, AI/ML for predictive analytics, AR for spatial understanding, and BIM for architectural precision. Project addresses <span class='text-primary'>critical social challenge</span> with scalable technological solution, contributing to inclusive urban environments globally. Featured in <span class='text-primary'>national media coverage</span> highlighting innovation in accessibility technology.",
    technologies: ["Huawei ModelArts", "AI/ML", "Three.js", "AR", "BIM", "HMS Location Kit", "HMS Map Kit", "Huawei Cloud", "Android Development", "TaurusDB", "Smart City IoT"],
    image: aidmapImg,
    images: [aidmapImg],
    links: [
      { label: "YouTube Demo Video", url: "https://www.youtube.com/watch?v=D_oqVxmL-HU" },
      { label: "Poznan University Article", url: "https://put.poznan.pl/artykul/studenci-w-konkursie-huawei-ict-competition-2024-2025" }
    ],
    mediaCoverage: [
      { label: "Huawei Global Final Winner", url: "https://www.huawei.com/pl/news/pl/2025/polacy%20wsrod%20najlepszych" },
      { label: "ICT Academy Competition Coverage", url: "https://ictacademy.pl/huawei-ict-competition-2024-2025-global-final/" },
      { label: "Regional Final Achievement", url: "https://ictacademy.pl/huawei-ict-competition-2024-2025-regional-final/" },
      { label: "Huawei Media Release", url: "https://media-huawei.prowly.com/405311-polacy-wsrod-najlepszych-europejscy-studenci-blyszcza-na-globalnym-finale-huawei-ict-competition" }
    ],
    recognition: [
      "Winner - Huawei ICT Competition 2024-2025 Global Final",
      "Top European Smart City Innovation",
      "UN SDG Alignment (9, 10, 11, 17)",
      "Poznan University of Technology Team"
    ]
  },
  {
    id: "unloc",
    title: "unLoc - Reimagining Architecture of Power",
    subtitle: "AI-Driven Semantic Image Editing for Sustainable Urban Transformation",
    problem: "<span class='text-primary'>Architecture of power</span> - buildings from Socialist Realism to Post-War Modernism ubiquitous in Eastern Bloc countries - often <span class='text-primary'>lack modern accessibility features</span> despite being local landmarks. The research challenge: <span class='text-primary'>comparing semantic image editing models for reimagining architecture</span>. Traditional approaches to urban modernization lack tools for <span class='text-primary'>visualizing proposed transformations before implementation</span>. Publicly available datasets <span class='text-primary'>underrepresent architecture of power</span>, and <span class='text-primary'>no standard benchmark exists</span> for evaluating task-specific generative models. Use case: removing parking spots in front of Palace of Culture in Warsaw to create parks, with <span class='text-primary'>AI-generated visualizations serving as blueprints</span> for social transformation. Social aspects of such modernizations require focus on <span class='text-primary'>sustainability and accessibility prompts</span>.",
    solution: "Comprehensive <span class='text-primary'>evaluation framework for semantic image editing models</span> applied to architecture of power. Research methodology: (1) <span class='text-primary'>Surveyed state-of-the-art models</span> including DiffEdit, Kandinsky, ControlNet with SD-2.1/SD-XL backbones; (2) Constructed <span class='text-primary'>machine learning dataset</span> featuring architecture of power examples from Warsaw, Kraków, Riga, Bucharest; (3) Developed <span class='text-primary'>taxonomy of benchmarks (B01-B12)</span> with evaluation metrics for text-conditioned image editing; (4) Integrated <span class='text-primary'>Segment Anything Model (SAM) pipeline</span> for precise building segmentation. System enables <span class='text-primary'>text-prompt-driven transformations</span>: users send image + prompt (e.g., 'add greenery', 'improve accessibility'), model yields improved picture. <span class='text-primary'>12 benchmark scenarios</span> evaluated across sustainability and accessibility dimensions. Framework designed for <span class='text-primary'>researchers and urban planning communities</span>, democratizing architectural reimagining through text-conditioned models accessible to general audiences.",
    results: "Comprehensive <span class='text-primary'>benchmark results across 5 model configurations</span>: ControlNet (SD-2.1, SD-XL), DiffEdit (SD-2.1, SD-XL), Kandinsky - tested with/without SAM pipeline across <span class='text-primary'>12 evaluation criteria (B01-B12)</span>. Quantitative assessment revealed <span class='text-primary'>model-specific strengths</span>: DiffEdit SD-XL excelled in certain sustainability scenarios (B03: 3.13, B05: 3.51), while ControlNet SD-2.1 performed strongly in accessibility transformations (B08: 3.32). <span class='text-primary'>SAM integration significantly impacted performance</span> across benchmarks, with scores ranging from -0.34 to 3.56 depending on model-benchmark combination. Research established <span class='text-primary'>first domain-specific evaluation framework</span> for architecture of power reimagining. Project delivered: <span class='text-primary'>curated dataset, vocabulary of architectural terms, comprehensive prompt library, segmentation masks, empirical model comparisons</span>. Results demonstrate <span class='text-primary'>practical viability of AI-driven architectural visualization</span> for evidence-based urban planning. Featured in <span class='text-primary'>WP5 Report - Generative Computer Vision for Reimagining Architecture of Power</span> (2024). Framework supports <span class='text-primary'>community-driven urban transformation</span> by enabling visualization of accessibility improvements, green infrastructure integration, and sustainable modernization before physical implementation. Research funded by <span class='text-primary'>Polish National Science Centre (NCN)</span> through BTC ENUTC grant.",
    technologies: ["Semantic Image Editing", "Diffusion Models", "ControlNet", "DiffEdit", "Kandinsky", "Stable Diffusion", "SAM (Segment Anything)", "Computer Vision", "Urban Planning AI", "Benchmark Development", "PyTorch"],
    image: unlocSam,
    images: [unlocSam, unlocSample, unlocSample2, certificateUnloc],
    links: [
      { label: "unLoc Project Website", url: "https://unloc.uken.krakow.pl/" }
    ],
    recognition: [
      "Winner - BTC ENUTC (NCN) Grant",
      "Polish National Science Centre Funded Research",
      "WP5 Report Published (2024)",
      "First Benchmark Framework for Architecture of Power Reimagining",
      "Interdisciplinary Collaboration: Architecture + AI + Urban Planning"
    ]
  },
  {
    id: "umea",
    title: "Bilinear Compressive Security",
    subtitle: "Blind Deconvolution for Secure Information Transmission - Umeå University Research",
    problem: "<span class='text-primary'>Compressed sensing</span> principles applied to secure information transmission (<span class='text-primary'>compressive security</span>) face critical vulnerabilities. Traditional approach: measurement matrix Q acts as <span class='text-primary'>one-time pad encryption key</span> (complex number domain) achieving <span class='text-primary'>perfect information-theoretic security</span> with reduced complexity and energy efficiency for IoT. However, <span class='text-primary'>fatal security flaw</span>: unless Q is changed for every message, system is vulnerable to <span class='text-primary'>known plain text attacks requiring only n observations</span> to recover the key (n = number of columns in Q). This undermines practical deployment in resource-constrained environments where <span class='text-primary'>key rotation is computationally expensive</span>. Challenge: maintaining information-theoretic security without requiring constant matrix regeneration, while preserving computational efficiency for IoT applications. Mathematical problem: how to protect encryption key Q from recovery even when attacker observes multiple transmissions with <span class='text-primary'>known message content</span>.",
    solution: "Novel <span class='text-primary'>bilinear compressive security method</span> addressing fundamental security shortcomings through blind deconvolution. Two-stage encoding process: (1) <span class='text-primary'>Linear encoding</span>: message x encoded with matrix Q (standard compressed sensing); (2) <span class='text-primary'>Convolution layer</span>: resulting vector convolved with <span class='text-primary'>randomly generated filter h</span> (unknown to receiver). Transmission: y = h ∗ Qx where ∗ denotes convolution. Key innovation: receiver <span class='text-primary'>recovers x without knowledge of h</span> through <span class='text-primary'>blind deconvolution algorithms</span>. System assumptions: <span class='text-primary'>incoherent sparsity in both h and x</span> enables recovery. Security analysis: studied idealized <span class='text-primary'>known-plain text attack</span> for recovering Q from repeated observations of y's for different, known messages xk with varying unknown h. Mathematical framework: under <span class='text-primary'>weak symmetry condition on filter h</span>, system requires attacker to sample from <span class='text-primary'>Ω(max{n, (n/s)²})</span> message transmissions if messages are s-sparse. Remarkable security property: with <span class='text-primary'>s=1 (unit sparsity), key recovery is impossible</span>. Method achieves <span class='text-primary'>substantially stronger security than standard compressed sensing</span> even under assumptions favorable to attacker.",
    results: "Research demonstrated <span class='text-primary'>provable security guarantees</span> for bilinear compressive security scheme. Empirical validation across <span class='text-primary'>multiple sparsity levels (s=1,2,4,8,12,18,36,48)</span> with varying problem dimensions (n=50, m=5). Key finding: <span class='text-primary'>recovery success rate correlation with sparsity</span> - higher sparsity enables faster key recovery, while <span class='text-primary'>unit sparsity (s=1) provides perfect security</span> (0% recovery across 500 observations). Experimental results: <span class='text-primary'>s=2 achieves ~65% security after 500 observations</span>, s=4 drops to near-zero security after 200 observations, higher sparsity levels (s≥8) provide <span class='text-primary'>negligible security beyond 100-150 observations</span>. Practical implications: method is <span class='text-primary'>dramatically safer than standard compressed sensing</span> for IoT secure communication. Theoretical contribution: established <span class='text-primary'>first analysis of security under repeated message attacks with blind deconvolution</span>. Work completed during <span class='text-primary'>international research internship at Umeå University, Sweden (Aug-Sep 2024)</span> in <span class='text-primary'>Department of Mathematical Foundations of Artificial Intelligence</span>. Research advances field of <span class='text-primary'>compressive security</span> by proving that <span class='text-primary'>convolution-based obfuscation</span> can provide information-theoretic security without constant key rotation. Results applicable to <span class='text-primary'>energy-constrained IoT devices</span> requiring long-term secure communication channels. Framework enables <span class='text-primary'>trade-off between message sparsity and security level</span>, allowing system designers to optimize for specific threat models.",
    technologies: ["Compressed Sensing", "Cryptography", "Blind Deconvolution", "Signal Processing", "Information Theory", "IoT Security", "Sparse Signal Recovery", "Mathematical Analysis", "Python", "MATLAB"],
    image: umeaResearch,
    images: [umeaResearch, certificateUmea],
    recognition: [
      "Umeå University Research Internship (Aug-Sep 2024)"
    ]
  },
  {
    id: "bee-parasite-detection",
    title: "Bee Parasite Detection System",
    subtitle: "AI-Powered Varroa destructor Identification for BeeBrain Platform",
    problem: "<span class='text-primary'>Varroa destructor parasites</span> represent an <span class='text-primary'>existential threat to global bee populations</span>, directly threatening food security given that bees pollinate crops worth <span class='text-primary'>$235B annually</span>. According to Polish government sources, <span class='text-primary'>human extinction would follow bee extinction</span>. The disease <span class='text-primary'>Varroosis</span> is encountered worldwide, causing larval weakness, paralysis, and increased bacterial susceptibility. <span class='text-primary'>Bees lack natural defense mechanisms</span> against parasites, relying entirely on beekeeper intervention with chemical treatments. With <span class='text-primary'>650,000 bee families in small apiaries</span> and <span class='text-primary'>830,000 in medium-sized operations</span> in Poland alone, continuous manual inspection is impossible. <span class='text-primary'>Rapid parasite expansion</span> can devastate entire apiaries before detection. Under Polish law, Varroosis is a <span class='text-primary'>mandatory reporting disease</span> requiring veterinary notification.",
    solution: "<span class='text-primary'>Deep learning-based computer vision system</span> implementing <span class='text-primary'>Convolutional Neural Networks (CNN)</span> for real-time parasite detection on bees entering and exiting hives. System designed for <span class='text-primary'>hive entrance integration</span> using <span class='text-primary'>microcomputer platforms</span> (Raspberry Pi) with camera modules. <span class='text-primary'>Custom dataset collection</span> from real apiaries in Kraków region establishing experimental validation environment. <span class='text-primary'>Advanced image preprocessing pipeline</span> optimizing detection accuracy under variable lighting conditions. Model trained to identify individual infected bees and calculate <span class='text-primary'>infection percentage thresholds</span>. <span class='text-primary'>Automated alert system</span> notifies beekeepers when parasite levels exceed safe thresholds, enabling <span class='text-primary'>proactive intervention before colony damage</span>. Architecture supports integration with broader <span class='text-primary'>IoT monitoring systems</span> combining environmental sensors for comprehensive hive health management.",
    results: "<span class='text-primary'>Functional CNN model</span> successfully classifying bee images with parasite presence detection. System validated using <span class='text-primary'>custom dataset captured from physical apiaries</span>, ensuring real-world applicability. <span class='text-primary'>Real-time processing capability</span> demonstrated on microcomputer hardware suitable for field deployment. Research establishes foundation for <span class='text-primary'>scalable parasite monitoring solution</span> deployable across apiaries of all sizes. Technology enables <span class='text-primary'>early detection and rapid response</span>, protecting both individual hives and preventing regional epidemic spread. Work completed as <span class='text-primary'>Master's thesis at WSB University</span>, contributing to advancement of precision apiculture and <span class='text-primary'>AI-powered agricultural innovation</span>. System architecture designed for future integration into comprehensive <span class='text-primary'>smart beekeeping platforms</span> combining parasite detection with environmental monitoring and predictive analytics. Project directly supports <span class='text-primary'>local agricultural economy and global bee conservation efforts</span>.",
    technologies: ["CNN", "Computer Vision", "Deep Learning", "Python", "Raspberry Pi", "Image Processing", "IoT Integration", "Agricultural AI"],
    image: beeBrainParasiteImg,
    images: [beeBrainParasiteImg],
    recognition: [
      "Master's Thesis - WSB University",
      "Foundation for Smart Beekeeping Platforms"
    ]
  },
  {
    id: "detpy",
    title: "DetPy",
    subtitle: "Differential Evolution Tools - Python Optimization Toolbox",
    problem: "Optimization problems in <span class='text-primary'>scientific computing, engineering, and machine learning</span> require sophisticated algorithms, but existing solutions lack <span class='text-primary'>accessibility for researchers</span> without deep computational expertise. <span class='text-primary'>Differential Evolution (DE)</span> - a powerful global optimization method - remains underutilized due to implementation complexity and <span class='text-primary'>steep learning curves</span>. Scientists need <span class='text-primary'>ready-to-use tools</span> that handle diverse optimization scenarios: from <span class='text-primary'>neural network hyperparameter tuning</span> to <span class='text-primary'>industrial process optimization</span>, without requiring weeks of algorithm development.",
    solution: "<span class='text-primary'>DetPy (Differential Evolution Tools)</span> - comprehensive Python library democratizing advanced optimization. Open-source toolbox implementing <span class='text-primary'>multiple DE algorithm variants</span> with intuitive API accessible to researchers at all skill levels. Key features: <span class='text-primary'>Modular architecture</span> allowing algorithm customization, <span class='text-primary'>extensive documentation</span> with practical examples, <span class='text-primary'>performance benchmarks</span> across standard test functions, seamless integration with <span class='text-primary'>NumPy and SciPy ecosystems</span>, support for <span class='text-primary'>constrained and unconstrained optimization</span>. Designed for both <span class='text-primary'>academic research and industrial applications</span>. Published methodology enables reproducible optimization workflows across disciplines.",
    results: "Published in <span class='text-primary'>SoftwareX (Elsevier) - high-impact software journal</span> with <span class='text-primary'>200 MEiN points</span> (Polish scientific evaluation system). Library provides <span class='text-primary'>production-ready optimization capabilities</span> for Python community. Validated through <span class='text-primary'>extensive benchmarking</span> on standard optimization problems. Enables researchers to implement sophisticated optimization in <span class='text-primary'>minutes instead of weeks</span>. Contributes to broader scientific ecosystem by <span class='text-primary'>lowering barriers to advanced computational methods</span>. Available as <span class='text-primary'>open-source package</span> for unrestricted research and commercial use. Tool supports ongoing research in <span class='text-primary'>machine learning, signal processing, and computational intelligence</span>.",
    technologies: ["Python", "Differential Evolution", "Optimization Algorithms", "NumPy", "SciPy", "Scientific Computing", "Open Source"],
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    links: [
      { label: "Publication (SoftwareX)", url: "https://doi.org/10.1016/j.softx.2024.102014" }
    ],
    recognition: [
      "Published in SoftwareX (Elsevier)",
      "Open Source Contribution"
    ]
  }
];
