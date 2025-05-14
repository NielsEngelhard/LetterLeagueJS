"use client";

export default function PageTitle({ title, subText }: { title: string, subText?: string }) {
  return (
    <div className="mb-8 text-center flex flex-col items-center">
        <h1 className="font-fraktur text-3xl md:text-4xl mb-4 font-special border-b-2 border-primary w-fit">{title}</h1>
        {subText && (
            <p className="text-muted-foreground">{subText}</p>            
        )}
    </div>
  );
}