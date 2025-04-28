import { LucideIcon } from "lucide-react";
import Link from "next/link";

type Props = {
    icon: LucideIcon,
    label: string,
    href: string
}

export default function NavButton({
    icon: Icon,
    label,
    href
}: Props) {
    return (
        <Link href={href} aria-label={label}>
            <Icon size={32} />
        </Link> 
    );
}