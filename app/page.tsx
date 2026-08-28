import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";
import { Education } from "@/components/education";
import { ResumeCta } from "@/components/resume-cta";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      <Navigation />
      <main id="main-content" className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Education />
        <ResumeCta />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
