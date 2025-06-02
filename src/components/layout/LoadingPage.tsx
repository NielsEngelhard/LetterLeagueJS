"use client";

import React from "react";

interface Props {
  isLoading: boolean;
  loadingText?: string;
  children?: React.ReactNode;  
}

export default function LoadingPage({ isLoading, children, loadingText = "Loading" }: Props) {
  return isLoading ? (
    <div className="flex flex-col gap-2 items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-purple-900 border-t-transparent shadow-lg shadow-purple-900"></div>
        <div className="text-xl uppercase font-special">{loadingText}</div>
    </div>
  ) : (
    <div>{children}</div>
  );
}
