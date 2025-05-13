import React from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col bg-card">
      
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="font-special text-primary text-6xl mb-6">404</h1>
          <p className="text-xl text-muted-foreground mb-8">Oops! This page got lost in the word search</p>
          <Button asChild size="lg" className="px-8">
            <a href="/">Return to Home</a>
          </Button>
        </div>
      </div>
      
    </div>
  );
};

export default NotFound;