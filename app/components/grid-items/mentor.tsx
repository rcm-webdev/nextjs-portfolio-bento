import { GridItemInterface } from "@/config/site-config";
import Link from "next/link";
import Icon from "./icon";

const Mentor = ({ item }: { item: GridItemInterface }) => {
  return (
    <Link
      href={item.buttonLink ?? ""}
      className="flex items-center justify-between gap-4"
    >
      {item.icon && <Icon type={item.icon} color={item.color} />}
      <div className="w-1/2 text-base ">
        <h3 className="@lg:text-lg font-semibold">{item.title}</h3>
        <p className="text-sm text-neutral-500">{item.description}</p>
      </div>
      {/* Price & Promo Container */}
      <div className="justify-center">
        {/* Top Container */}
        <div className="flex flex-col  ">
          <div className="text-xs text-neutral-500">Available</div>
        </div>
        {/* Bottom Container */}
        <div className="font-bold text-primary @lg:text-base text-sm">
          {item.promotion}
        </div>
      </div>
    </Link>
  );
};

export default Mentor;
