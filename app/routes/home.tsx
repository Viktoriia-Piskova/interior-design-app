import { ArrowBigRight, ArrowUpRight, Clock, Layers } from "lucide-react";
import type { Route } from "./+types/home";
import { NavBar } from "~/components/NavBar";
import { Button } from "~/components/ui/Button";
import Upload from "~/components/Upload";
import { useNavigate } from "react-router";
import { useState, useRef, useEffect } from "react";
import { createProject, getProjects } from "../lib/puter.action";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Design React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}


export default function Home() {
  const [projects, setProjects] = useState<DesignItem[]>([]);
  const [errorMesssage, setErrorMessage] = useState<string | null>(null);
  const isCreatingProjectRef = useRef(false);

  const navigate = useNavigate();

  const handleUploadComplete = async (base64Image: string) => {
    try {
      if (isCreatingProjectRef.current) return false;
      isCreatingProjectRef.current = true;
      const newId = Date.now().toString();
      const name = `Project ${newId}`;
      const newItem: DesignItem = {
        id: newId,
        name,
        sourceImage: base64Image,
        renderedImage: null,
        timestamp: Date.now(),
      };

      const savedItem = await createProject({
        item: newItem,
        visibility: "private",
      });

      if (!savedItem) {
        console.error("Failed to create project");
        setErrorMessage(
          "Failed to create project. Please refresh the page and try again",
        );
        return false;
      }

      const displayItem = savedItem || newItem;
      setProjects((prev) => [displayItem, ...prev]);
      const state: VisualizerLocationState = {
        initialImage: displayItem.sourceImage,
        initialRender: displayItem.renderedImage || null,
        name,
      };

      navigate(`/visualizer/${newId}`, { state });
    } finally {
      isCreatingProjectRef.current = false;
    }
  };

  useEffect(() => {
    const fetchProjects = async () => {
      const items = await getProjects();
      if (items) {
        setProjects(items);
      }
    };

    fetchProjects();
  }, []);

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
              {errorMesssage && <p className="error">{errorMesssage}</p>}
            </div>
            <Upload onComplete={handleUploadComplete} />
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
            {projects.length >= 1 ? (
              projects.map(
                ({ id, name, renderedImage, sourceImage, timestamp }) => (
                  <div
                    key={id}
                    className="project-card group"
                    onClick={() => navigate(`/visualizer/${id}`)}>
                    <div className="preview">
                      <img src={renderedImage || sourceImage} alt="Project" />

                      <div className="badge">
                        <span>Community</span>
                      </div>
                    </div>

                    <div className="card-body">
                      <div>
                        <h3>{name}</h3>

                        <div className="meta">
                          <Clock size={12} />
                          <span>
                            {new Date(timestamp).toLocaleDateString()}
                          </span>
                          <span>By Author</span>
                        </div>
                      </div>
                      <div className="arrow">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                  </div>
                ),
              )
            ) : (
              <div>
                <h3>No projects so far</h3>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
