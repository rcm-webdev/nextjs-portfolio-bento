import { siteConfig } from "@/config/site-config";

import GridItem from "./components/grid-item";
import Social from "./components/grid-items/social-box";
import Mentor from "./components/grid-items/mentor";
import Project from "./components/grid-items/project";
import Equipments from "./components/grid-items/equipments";

import LeftPanel from "./components/left-panel";
import RightPanel from "./components/right-panel";

export default function Home() {
  return (
    <main className="flex gap-5 flex-1 w-full h-full ">
      {/* Left Side */}
      <LeftPanel />
      {/* Right Side */}
      <RightPanel />
    </main>
  );
}
