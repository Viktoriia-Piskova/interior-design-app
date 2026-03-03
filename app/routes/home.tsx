import { ArrowBigRight, ArrowUpRight, Clock, Layers } from "lucide-react";
import type { Route } from "./+types/home";
import { NavBar } from "~/components/NavBar";
import { Button } from "~/components/ui/Button";
import Upload from "~/components/Upload"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Design React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {

  const handleUploadComplete = (base64Image: string) => {
    console.log("handleUploadComplete", base64Image)
  }

  return (
    <div className="home">
      <NavBar />
      <section className="hero">
        <div className="announce">
          <div className="dot">
            <div className="pulse"></div>
          </div>
          <p>Introduscing</p>
        </div>
        <h1>Build spaces with Poomify</h1>
        <p className="subtitle">AI-first design tool</p>
        <div className="actions">
          <a href="#upload" className="cta">
            Start <ArrowBigRight className="icon" />
          </a>
          <Button size="lg" variant="outline" className="demo">
            Watch Demo
          </Button>
        </div>
        <div id="upload" className="upload-shell">
          <div className="grid-overlay"></div>
          <div className="upload-card">
            <div className="upload-head">
              <div className="upload-icon">
                <Layers className="icon" />
              </div>
              <h3>Upload your floor plan</h3>
              <p>Supports JPG, PNG formats up to 10MB</p>
            </div>
            <Upload onComplete={handleUploadComplete}/>
          </div>
        </div>
      </section>
      <section className="projects">
        <div className="section-inner">
          <div className="section-head">
            <div className="copy">
              <h2>Projects</h2>
              <p>Your latest work and shared community projects</p>
            </div>
          </div>
          <div className="projects-grid">
            <div className="project-card group">
              <div className="preview">
                <img
                  src="https://roomify-mlhuk267-dfwu1i.puter.site/projects/1770803585402/rendered.png"
                  alt="Project"
                />
                <div className="badge">
                  <span>Community</span>
                </div>
              </div>
              <div className="card-body">
                <div>
                  <h3>Project 1</h3>
                  <div className="meta">
                    <Clock size={12} />
                    <span>{new Date("01.01.2026").toLocaleDateString()}</span>
                    <span>By User123</span>
                  </div>
                </div>
                <div className="arrow"><ArrowUpRight size={18}/></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
