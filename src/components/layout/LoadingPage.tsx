"use client";

import React from "react";

interface Props {
  loadingText?: string;
}

export default function LoadingPage({ loadingText = "Loading" }: Props) {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-purple-900 border-t-transparent shadow-lg shadow-purple-900"></div>
        <div className="text-xl uppercase font-special">{loadingText}</div>
    </div>    
  )
}
