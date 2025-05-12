import Link from "next/link";
import { Button } from "../ui/button";

type Props = {
    text: string,
    href: string
}

export default function TextButton({
    text,
    href
}: Props) {
    return (
        <Button asChild>
            <Link href={href}>
                {text}
            </Link> 
        </Button>
    );
}