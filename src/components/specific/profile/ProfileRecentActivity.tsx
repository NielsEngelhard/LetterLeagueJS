import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card/card";
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card/cardContent";
import { Separator } from "@/components/ui/separator";
import { ChartBar } from "lucide-react";

interface Props {
    user: UserModel;
}

export default function ProfileRecentActivity({ user }: Props) {
    return (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <ChartBar className="w-4 h-4 mr-2 text-primary" />
              Recent Activity
            </CardTitle>
            <CardDescription>
              Your recent games and performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-card">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">Multiplayer Match</div>
                    <div className="text-xs text-muted-foreground">May 14, 2025 · Won</div>
                  </div>
                  <Badge className="bg-letter-correct/20">Won</Badge>
                </div>
                <Separator className="my-2" />
                <div className="text-xs text-muted-foreground">
                  You guessed "FANCY" in 3 attempts
                </div>
              </div>
              
              <div className="p-3 rounded-lg bg-card">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">Solo Challenge</div>
                    <div className="text-xs text-muted-foreground">May 13, 2025 · Lost</div>
                  </div>
                  <Badge className="text-muted-foreground">Lost</Badge>
                </div>
                <Separator className="my-2" />
                <div className="text-xs text-muted-foreground">
                  Failed to guess "QUARTZ" in 6 attempts
                </div>
              </div>
              
              <div className="p-3 rounded-lg bg-card">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">Multiplayer Match</div>
                    <div className="text-xs text-muted-foreground">May 11, 2025 · Won</div>
                  </div>
                  <Badge variant="success">Won</Badge>
                </div>
                <Separator className="my-2" />
                <div className="text-xs text-muted-foreground">
                  You guessed "PIONEER" in 4 attempts
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" size="sm" className="w-full">
              View Game History
            </Button>
          </CardFooter>
        </Card>        
    )
}