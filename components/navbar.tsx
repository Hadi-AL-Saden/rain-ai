
import MobileSidebar from '@/components/mobile-sidebar'

import Image from "next/image";
export default function NavBar() {
  return (
    <div className="flex items-center p-4  sm:bg-[#181c2bec]  sm:text-white  ">
      <MobileSidebar  />
      <div className="flex w-full justify-end lg:hidden md:hidden ">
        <Image src="/Logo.png" alt='Logo' width={40} height={40}/>
      </div>
    </div>
  );
}
