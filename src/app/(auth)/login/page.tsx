"use client";

import Card from "@/components/ui/card/card";
import { CardHeader, CardTitle, CardDescription } from "@/components/ui/card/cardContent";
import CenterContent from "@/components/layout/centerContent";
import SignInForm from "@/features/auth/components/SignInForm";

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
          
          <SignInForm />

        </Card>            
        </CenterContent>
    )
}