import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card/card"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { SignUpForm } from "@/features/auth/components/SignUpForm"

export default function Signup() {
  return (
    <div>
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>Creating an account is little effort!</CardDescription>
      </CardHeader>

      <Separator></Separator>

      <CardContent>
        <SignUpForm></SignUpForm>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex flex-col items-center gap-2 w-full mt-4">            
            <Link href="/login/existing" className="text-sm opacity-75">Already have an account? Click here to login.</Link>
        </div>
      </CardFooter>
    </div>
  )
}
