import Image from "next/image";
import { ThemeToggle } from "./components/theme-toggle";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="text-center">
        <h1 className="">Hello World</h1>
        <ThemeToggle />
      </div>
    </main>
  );
}
