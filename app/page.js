
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";
import Contact from "@/components/contact/page";
import Landing from "@/components/landing/page";
import Work from "@/components/work/page";
import Projects from "@/components/projects/page";
import About from "@/components/about/about";
export default function Home() {
  return (
    <div className="flex flex-col h-full w-full gap-1">
      <Header/>
      <div className="justify-self-end">
      <Contact/>
      </div>
      <section id="landing">
        <Landing />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <Footer/>
    </div>
  );
}
