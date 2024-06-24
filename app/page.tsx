import Image from "next/image";
import { ThemeToggle } from "./components/theme-toggle";

export default function Home() {
  return (
    <main className="flex gap-5 flex-1 w-full h-full ">
      {/* Left Side */}
      <div className="flex-1 p-6  h-full max-w-md">
        <div className="bg-emerald-300 rounded-md flex items-center justify-center dark:bg-emerald-900  h-full">
          Left Side
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 p-6  h-full">
        <div className="bg-emerald-300 rounded-md flex items-center justify-center dark:bg-emerald-900 h-full">
          Right Side
        </div>
      </div>
    </main>
  );
}
