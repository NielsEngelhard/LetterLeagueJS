"use client";

import Card from "@/components/ui/card/card";
import { CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card/cardContent";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CenterContent from "@/components/layout/centerContent";
import { Label } from "@/components/ui/label";

function handleLogin() {
    console.log("Login button clicked");
} 

export default function Login() {
    return (
        <CenterContent>
        <Card className="w-full lg:w-[600px]">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Log In</CardTitle>
            <CardDescription className="text-center">
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleLogin}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Button
                    variant="link" 
                    className="text-xs text-primary p-0 h-auto"
                    type="button"
                    onClick={() => console.log("Forgot password")}
                  >
                    Forgot password?
                  </Button>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button type="submit" className="w-full" size="sm">
                Log In
              </Button>
              <div className="text-center text-sm">
                Don't have an account?{" "}
                <Button 
                  variant="link" 
                  className="p-0 h-auto text-primary"
                  type="button"
                  href="/signup"
                >
                  Sign up
                </Button>
              </div>
            </CardFooter>
          </form>
        </Card>            
        </CenterContent>
    )
}