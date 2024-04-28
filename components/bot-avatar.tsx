import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function BotAvatar() {
  return (
    <div>
        <Avatar className="h-8 w-8">
            <AvatarImage className="p-1 bg-white" src="Logo.png" />
        </Avatar>
    </div>
  )
}
