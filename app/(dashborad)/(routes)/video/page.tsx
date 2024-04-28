import Heading from "@/components/heading"

import {VideoIcon} from  'lucide-react'
import { Button } from "@/components/ui/button"

// import {
//   Dialog,
//   DialogClose,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"

import { Input } from "@/components/ui/input"

import { Label } from "@/components/ui/label"

export default function MusicGeneration() {
  return (
    <div>
      <Heading
        title="Video Generation"
        description="Coming Soon"
        icon={VideoIcon}
        iconColor="text-orange-500"
        bgColor="bg-orange-700/10"
      />

      <div className="px-4 lg:px-8 ">
        <div className="space-y-4 mt-4">
          <div className="p-8 rounded-lg w-full flex flex-col gap-6 items-center justify-center">
            <p className=" text-[40px] font-mono font-bold" >
              Coming soon
            </p>



            {/* <div className="">
            <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Learn More</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>PDF Assistant</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">

          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </div> */}





          </div>
        </div>
      </div>

      
    </div>
  );
}
