import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card/card";
import { Separator } from "@/components/ui/separator";
import GlobalStatsBanner from "@/features/global-stats/components/GlobalStatsBanner";

export default async function AuthLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div className="w-full flex flex-col items-center">

      <div className="w-full max-w-[600px] gap-2 flex flex-col">
        <div className="px-4">
          <GlobalStatsBanner></GlobalStatsBanner>
        </div>
        <Card className="">
          {children}
        </Card>      
      </div>

    </div>
  );
}
