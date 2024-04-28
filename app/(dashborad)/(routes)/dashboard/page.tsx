"use client"

import { Card } from "@/components/ui/card"

import { cn } from "@/lib/utils"

import { useRouter } from "next/navigation"

import { ArrowRight,
        MessageSquare,
        ImageIcon,
        VideoIcon,
        MusicIcon,
        Code,
        FileQuestion
        } from "lucide-react"
import Sidebar from "@/components/sidebar"

const tools=[
  {
    label:"Conversation",
    icon:MessageSquare,
    color:"text-violet-500",
    bgColor:"bg-violet-500/10",
    href:'/conversation'
  },
  {
    label: "code Generation",
    icon: Code,
    href: "/code",
    color: "text-green-700",
    bgColor:"bg-green-700/10",
  },
  {
    label: "Music Generation (Coming Soon)",
    icon: MusicIcon,
    href: "/music",
    color: "text-emerald-500",
    bgColor:"bg-emerald-500/10",
  },
  {
    label: "Image Generation (Coming Soon)",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-500",
    bgColor:"bg-pink-700/10",
  },
  {
    label: "Video Generation (Coming Soon)",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-500",
    bgColor:"bg-orange-700/10",

  },
  {
    label: "PDF Assistant (Coming Soon)",
    icon: FileQuestion,
    href: "/pdf",
    color: "text-red-500",
    bgColor:"bg-red-700/10",
  },
]


export default function DashboardPage(){
const router =useRouter();
  return (
    <>
      <div className="mb-8 space-y-4 sm:pt-3">
        <h2 className="text-2xl md:text-4xl font-bold text-center first-letter:uppercase">
          Make Your Clouds Raining With <br /> Rain-AI
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          All what you need just in one cloud
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4 sm:pb-10 md:pb-10" >
        {tools.map((tool) => (
          <Card
          onClick={()=>router.push(tool.href)}
            key={tool.href}
            className="p-4 border-black/10 flex items-center justify-between hover:shadow-md transition cursor-pointer ">
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold">{tool.label}</div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </>
  );
}
