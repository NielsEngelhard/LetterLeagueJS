import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card/card"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import TextInStripe from "@/components/shared/TextInStripe"

export default function Login() {
  return (
    <div>

    <CardHeader>
      <CardTitle>Welcome to Letter League</CardTitle>
      <CardDescription>
        <div className="">Play a quick game as a guest or create an account for a more smooth and complete user experience.</div>
      </CardDescription>
    </CardHeader>

      <Separator></Separator>

      <CardContent>
      <div className="w-full flex flex-col gap-2">
          <Button>
            <Link href="/login/existing">
              Login with <b>existing account</b>
            </Link>
          </Button>

          <Button variant="secondary">
            <Link href="/signup">
              Create a <b>new account</b>
            </Link>
          </Button>          

          <TextInStripe>
            <div>OR</div>
          </TextInStripe>

          <Button>
              <Link href="login/guest">
                Continue as a <b>Guest user<sup> &lt;beta&gt;</sup></b>
              </Link>
          </Button>     
        </div>
      </CardContent>
    </div>
  )
}
