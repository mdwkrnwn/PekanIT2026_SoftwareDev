import { MapsArea } from './MapsArea';
import { Control } from './Control';
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaPlus, FaMinus } from "react-icons/fa";
import { BsMap, BsGrid } from "react-icons/bs";
import { MdMyLocation } from "react-icons/md";

export default function Maps() {
  return (
    <div className="flex flex-col w-[86vw] pt-4">
      <div className="flex gap-4 mb-8">
        <button className="flex text-lg items-center gap-2 px-6 py-2.5 border border-primary text-background bg-primary rounded-xl font-semibold transition-colors">
          <BsMap size={25} /> Map View
        </button>
        <button className="flex text-lg items-center gap-2 px-6 py-2.5 border border-border text-foreground hover:bg-primary cursor-pointer hover:text-background rounded-xl font-semibold transition-colors">
          <BsGrid size={25} /> Grid View
        </button>
      </div>

      <div className="grid grid-cols-[380px_1fr] gap-6 mb-12">
        {/* Sidebar Controls & List */}
        <Control />

        {/* Map Area */}
        <MapsArea />
      </div>
    </div>
  );
}