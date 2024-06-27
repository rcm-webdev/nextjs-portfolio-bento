import Footer from "./components/footer";
import LeftPanel from "./components/left-panel";
import RightPanel from "./components/right-panel";

export default function Home() {
  return (
    <main className="container mx-auto relative z-20 flex flex-col w-full h-full px-6 gap:6 xl:gap-10 xl:flex-row ">
      {/* Left Side */}
      <LeftPanel />
      {/* Right Side */}
      <RightPanel />
      {/* Footer for Mobile */}
      <div className="flex pb-10 xl:hidden px-8 w-full">
        <Footer />
      </div>
    </main>
  );
}
