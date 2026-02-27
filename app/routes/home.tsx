import type { Route } from "./+types/home";
import { NavBar } from "~/components/NavBar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Design React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="home">
      <NavBar />
    </div>
  );
}
