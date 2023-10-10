import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { BarChartHorizontalBig, CodesandboxIcon, ImageIcon, LayoutDashboardIcon, MessageCircleIcon, Settings, SpeakerIcon, TextIcon, VoicemailIcon } from "lucide-react";
import Link from "next/link";
import { UserProfile } from "../user-profile";

export const MainMenu = () => {
  return (
    <div className="flex gap-2 flex-col justify-between">
      <div className="flex gap-2 flex-col justify-between">
        <Link
          href="/"
          className="w-10 h-10 items-center justify-center flex"
          title="Home"
        >
          <Avatar className="">
            <AvatarImage src="/ai-icon.png" />
          </Avatar>
        </Link>
        <Link
          href="/dashboard"
          className="w-10 h-10 items-center justify-center flex rounded-full hover:bg-secondary"
          title="Dashboard"
        >
          <LayoutDashboardIcon size={20} />
        </Link>
        <Link
          href="/chat"
          className="w-10 h-10 items-center justify-center flex rounded-full hover:bg-secondary"
          title="AI Chat"
        >
          <MessageCircleIcon size={20} />
        </Link>
        <Link
          href="/ai-writer"
          className="w-10 h-10 items-center justify-center flex rounded-full hover:bg-secondary"
          title="AI Writer"
        >
          <TextIcon size={20} />
        </Link>
        <Link
          href="/aicode"
          className="w-10 h-10 items-center justify-center flex rounded-full hover:bg-secondary"
          title="AI Code"
        >
          <CodesandboxIcon size={20} />
        </Link>
        <Link
          href="/ai-image"
          className="w-10 h-10 items-center justify-center flex rounded-full hover:bg-secondary"
          title="AI Image"
        >
          <ImageIcon size={20} />
        </Link>
        <Link
          href="/ai-speech"
          className="w-10 h-10 items-center justify-center flex rounded-full hover:bg-secondary"
          title="AI Speech to Text"
        >
          <SpeakerIcon size={20} />
        </Link>
        <Link
          href="/ai-voiceover"
          className="w-10 h-10 items-center justify-center flex rounded-full hover:bg-secondary"
          title="AI Voiceover"
        >
          <VoicemailIcon size={20} />
        </Link>
        <Link
          href="/reporting"
          className="w-10 h-10 items-center justify-center flex rounded-full hover:bg-secondary"
          title="Reporting"
        >
          <BarChartHorizontalBig size={20} />
        </Link>
        <Link
          href="/customization"
          className="w-10 h-10 items-center justify-center flex rounded-full hover:bg-secondary"
          title="Customization"
        >
          <Settings size={20} />
        </Link>
      </div>
      <UserProfile />
    </div>
  );
};
