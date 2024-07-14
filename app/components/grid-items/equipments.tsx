import { GridItemInterface } from "@/config/site-config";
import Image from "next/image";
import Link from "next/link";
import { Particles } from "../particles";

const Equipments = ({ item }: { item: GridItemInterface }) => {
  return (
    <div className="flex flex-col items-end justify-end w-full h-full overflow-hidden rounded-3xl">
      <Particles
        className="absolute inset-0 z-20 opacity-0 dark:opacity-100 "
        quantity={50}
        color={"#fde047"}
      />
      <div className="absolute inset-0 bg-neutral-800 w-full h-full"></div>
      {/* Overlay */}
      <div className=" absolute inset-0 z-10 bg-gradient-to-b from-transparent via-neutral-950/60 to-neutral-950/90" />
      {/* Image */}
      {/* <Image
        className="z-0 object-cover object-center w-full h-full"
        src={item.image ?? ""}
        alt="equipments"
        fill
      /> */}
      {/* Content */}
      <div className="relative z-20 w-full p-4 space-y-3 md:p-8">
        <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-zinc-200/60 via-zinc-200 to-zinc-200/60">
          {item.title}
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {item.equipments?.map((equipment, index) => {
            return (
              <Link
                className="px-2 py-1 text-lg font-medium bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white rounded-lg dark:from-neutral-900/80 dark:via-neutral-900 dark:to-neutral-900/80 dark:hover:bg-neutral-800 group"
                key={equipment.link ?? "" + index}
                href={equipment.link ?? ""}
                target="_blank"
              >
                {equipment.title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Equipments;
