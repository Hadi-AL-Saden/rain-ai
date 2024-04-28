import {Button} from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

function Landing() {
return (
<>
      <div className="flex display-flex justify-center">
       <div>
        <Image src={'/Logo.png'} width={500} height={500} alt="" />
        <p className="flex display-flex justify-center text-[40px]">Rain-AI</p>
        </div>
    {/* <UserButton afterSignOutUrl="/" /> */}
    {/* <div>Rain-AI</div>  */}
    </div>
    <div className="flex display-flex justify-center  gap-6">
        <Link href={"/sign-in"}>
            <Button>Login</Button>
        </Link>

        <Link href={"/sign-up"}>
            <Button>Sign-up</Button>
        </Link>
    </div>

</>
);
}
export default Landing;