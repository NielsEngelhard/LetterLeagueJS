import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function Signup() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>Creating an account is little effort!</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="username">Email</Label>
              <Input id="username" placeholder="coolman@letterleague.com" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="username">Username</Label>
              <Input id="username" placeholder="coolman@letterleague.com" />
            </div>            
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="***********" type="password" />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="passwordverify">Verify Password</Label>
              <Input id="passwordverify" placeholder="***********" type="password" />
            </div>            
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex flex-col items-center gap-2 w-full">
            <Button className="w-full">Create Account</Button>
            <Link href="/login" className="text-sm opacity-75">Login</Link>
        </div>
      </CardFooter>
    </Card>
  )
}
