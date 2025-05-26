"use client";

import Card from "@/components/ui/card/card";
import { CardHeader, CardTitle, CardDescription } from "@/components/ui/card/cardContent";
import CenterContent from "@/components/layout/centerContent";
import SignUpForm from "@/features/auth/components/SignUpForm";

export default function Login() {
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