import Link from "next/link";
import { Button } from "../ui/button";

type Props = {
    statistic: string | number,
    name?: string
}

export default function TextButton({
    statistic,
    name
}: Props) {
    return (
        <div className="flex flex-col items-center text-center">
            <div className="text-3xl font-bold">{statistic}</div>
            {name && <div className="text-sm uppercase font-medium opacity-25">{name}</div>}
        </div>
    );
}