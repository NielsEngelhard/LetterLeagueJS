import { CircleUserRound, Settings } from "lucide-react";
import IconButton from "@/components/shared/IconButton";
import TextButton from "../shared/TextButton";
import Link from "next/link";

export default function Header() {
    return (
      <header className="w-full layout-border layout-border-bottom flex justify-center">
        <div className="max-w-7xl flex justify-between w-full p-4 layout-border layout-border-left layout-border-right">

          <div>
            <div className="text-xl font-bold flex gap-1 items-center leading-none">
              <Link href="/"><div>Letter-League</div></Link>
            </div>
            <div className="text-xs opacity-75 w-full text-center normal-case">
              &lt;username&gt;
            </div>            
          </div>

          <div>
            <TextButton text="Play Game" href="/play" />
          </div>

          <div className="flex gap-2">
            <IconButton icon={Settings} label="Settings" href="/settings"></IconButton>
            <IconButton icon={CircleUserRound} label="Account" href="/account"></IconButton>
          </div>

        </div>
      </header>
    );
  }
  