import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
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
          <CardHeader>
            <CardTitle>Welcome to Letter League</CardTitle>
            <CardDescription>
              <div className="">Play a quick game as a guest or create an account for a more smooth and complete user experience.</div>
            </CardDescription>
          </CardHeader>

          <Separator></Separator>

            {children}
        </Card>      
      </div>

    </div>
  );
}
