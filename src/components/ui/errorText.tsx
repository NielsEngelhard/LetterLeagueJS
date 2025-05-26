import React from "react"

type Props = {
    children: React.ReactNode;
}

export default function ErrorText({ children }: Props) {
    return (
        <div className="text-error font-bold">
            {children}
        </div>
    )
}