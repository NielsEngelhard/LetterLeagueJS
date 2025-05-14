"use client";

import Card from "@/components/ui/card/card";
import { CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card/cardContent";
import CenterContent from "@/components/layout/centerContent";
import { useState } from "react";
import SignUpForm from "@/features/auth/components/SignUpForm";

function handleSignup() {
    console.log("Sign up clicked");
} 

export default function Login() {
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    return (
        <CenterContent>
            <Card className="w-full lg:w-[600px]">
                <CardHeader className="">
                    <CardTitle className="text-4xl font-extralight text-center font-special">Sign Up</CardTitle>
                    <CardDescription className="text-center">
                    Create an account for free and unluck more features!
                    </CardDescription>
                </CardHeader>
                <SignUpForm></SignUpForm>
            </Card>            
        </CenterContent>
    )
}