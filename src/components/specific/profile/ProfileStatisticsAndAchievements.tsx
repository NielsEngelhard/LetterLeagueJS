import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card/card";
import { CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card/cardContent";
import { Star, Trophy } from "lucide-react";

interface Props {
    user: UserModel;
}

export default function ProfileStatisticsAndAchievements({ user }: Props) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <Trophy className="w-4 h-4 mr-2 text-yellow-400" />
                Statistics
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center p-3 rounded-lg bg-card">
                <span className="text-sm text-muted-foreground">Games Played</span>
                <span className="text-2xl font-semibold text-foreground">{user.stats.gamesPlayed}</span>
              </div>
              <div className="flex flex-col items-center p-3 rounded-lg bg-card">
                <span className="text-sm text-muted-foreground">Win Rate</span>
                <span className="text-2xl font-semibold text-letter-correct">{user.stats.winRate}</span>
              </div>
              <div className="flex flex-col items-center p-3 rounded-lg bg-card">
                <span className="text-sm text-muted-foreground">Longest Win Streak</span>
                <span className="text-2xl font-semibold text-primary">{user.stats.longestStreak}</span>
              </div>
              <div className="flex flex-col items-center p-3 rounded-lg bg-card">
                <span className="text-sm text-muted-foreground">Favourite Word</span>
                <span className="text-lg font-semibold text-letter-wrong-position">{user.stats.favoriteWord}</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-none">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <Star className="w-4 h-4 mr-2 text-letter-wrong-position" />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {user.badges.map((badge, index) => (
                  <div key={index} className="flex items-center p-2 rounded-lg bg-card">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                      <Star className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm">{badge}</span>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" className="w-full">
                View All Achievements
              </Button>
            </CardFooter>
          </Card>
        </div>        
    )
}