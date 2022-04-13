import Image from "next/image";
import { motion } from "framer-motion";

export default function InfiniteFooter() {
  return (
    <div className="hidden sticky inset-x-0 bottom-0 h-32 lg:flex justify-center items-center">
      <a href="#" className="">
        <Image alt="logo" src="/trianglelogo.svg" width={60} height={60} />
      </a>
    </div>
  );
}
