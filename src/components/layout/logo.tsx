import { APP_NAME } from "@/lib/global-constants";

export default function Logo() {
    return (
        <div className="flex items-center cursor-pointer hover:text-primary! transition-colors duration-300">
            <h1 className="text-3xl mr-2 font-special">{APP_NAME}</h1>
            <sup className="text-xs py-1 text-foreground leading-none border-b-2 border-primary">together</sup>
        </div>
    )
}