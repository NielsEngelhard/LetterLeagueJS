import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Separator } from "@radix-ui/react-separator"
import Link from "next/link"

export default function Login() {
  return (
    <div>
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

          <Separator></Separator>
          <div className="text-center">or </div>

          <Button>
              <Link href="login/guest">
                Continue as a <b>Guest user</b>
              </Link>
          </Button>     
        </div>
      </CardContent>
    <CardFooter className="flex justify-between">
      <div className="flex flex-col items-center gap-2 w-full text-sm opacity-50 uppercase">
        Continuing as guest is quick but may cause lost progress, weak reconnects, and a rougher experience.
      </div>
    </CardFooter>      
    </div>
  )
}
