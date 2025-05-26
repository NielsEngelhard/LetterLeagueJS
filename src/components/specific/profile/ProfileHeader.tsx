import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card/card";
import { CardContent } from "@/components/ui/card/cardContent";
import { Crown } from "lucide-react";

interface Props {
    user: UserModel;
}

export default function ProfileHeader({ user }: Props) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          
          {/* Avatar */}
          <div className="w-24 h-24 rounded-full border-3 border-primary" style={{ backgroundColor: user.colorHex }}>

          </div>
          
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center md:gap-3">
              <h2 className="text-xl font-semibold">{user.username}</h2>
              <div className="text-sm text-muted-foreground mb-1">@{user.username}</div>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3 mt-1">
              <Badge variant="primary">
                <Crown className="w-3 h-3 mr-1" /> Level {user.level}
              </Badge>
              <Badge variant="secondary">
                {user.level}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Member since {user.joinDate}
            </p>
          </div>
          
          <Button
            className="hidden md:flex"
            size="sm"
            variant="outline"
            onClick={() => console.log("Edit profile")}
          >
            Edit Profile
          </Button>
        </div>
      </CardContent>
    </Card>        
  )
}