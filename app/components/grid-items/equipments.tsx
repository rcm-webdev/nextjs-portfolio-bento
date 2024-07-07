import { GridItemInterface } from "@/config/site-config";
import Image from "next/image";
import Link from "next/link";

const Equipments = ({ item }: { item: GridItemInterface }) => {
  return (
    <div className="flex flex-col items-end justify-end w-full h-full overflow-hidden rounded-3xl">
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-neutral-950/60 to-neutral-950/90" />
      {/* Image */}
      <Image
        className="z-0 object-cover object-center w-full h-full"
        src={item.image ?? ""}
        alt="equipments"
        fill
      />
      {/* Content */}
      <div className="relative z-20 w-full p-4 space-y-3 md:p-8">
        <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-zinc-200/60 via-zinc-200 to-zinc-200/60">
          {item.title}
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {item.equipments?.map((equipment, index) => {
            return (
              <Link
                className="px-2 py-1 text-lg font-medium bg-white rounded-lg dark:bg-neutral-900"
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
