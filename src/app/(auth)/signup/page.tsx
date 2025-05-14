"use client";

import Card from "@/components/ui/card/card";
import { CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card/cardContent";
import { Label } from "../../../../OLD/src/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CenterContent from "@/components/layout/centerContent";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkBox";

function handleSignup() {
    console.log("Sign up clicked");
} 

export default function Login() {
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    return (
        <CenterContent>
            <Card className="w-full lg:w-[600px]">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold text-center">Sign Up</CardTitle>
                    <CardDescription className="text-center">
                    Create an account for free and unluck more features!
                    </CardDescription>
                </CardHeader>
                <form onSubmit={handleSignup}>
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
                        <Label htmlFor="username">Username</Label>
                        <Input
                        id="username"
                        type="text"
                        placeholder="coolplayer123"
                        required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                        id="password"
                        type="password"
                        required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm Password</Label>
                        <Input
                        id="confirmPassword"
                        type="password"
                        required
                        />
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox
                            id="terms" 
                            checked={acceptedTerms}
                            onCheckedChange={(checked) => setAcceptedTerms(checked)}
                            required
                        />
                        <label
                        htmlFor="terms"
                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                        I accept the terms and conditions
                        </label>
                    </div>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-4">
                    <Button 
                        type="submit" 
                        disabled={!acceptedTerms} 
                        className="w-full" 
                        size="sm"
                    >
                        <Plus className="mr-2 h-4 w-4" />
                        Create Account
                    </Button>
                    <div className="text-center text-sm">
                        Already have an account?{" "}
                        <Button 
                        variant="link" 
                        className="p-0 h-auto text-lingo-purple"
                        type="button"
                        href="/login"
                        >
                        Log in
                        </Button>
                    </div>
                    </CardFooter>
                </form>
            </Card>            
        </CenterContent>
    )
}