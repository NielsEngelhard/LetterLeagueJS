import { Banana } from "lucide-react";

export default function NotFound() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div>
          <Banana size={48}></Banana>
        </div>
        <h2>This page could not be found...</h2>
      </div>
    </div>
  )
}