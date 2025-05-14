import { Button } from "@/components/ui/button";
import { LoginForm } from "@/features/auth/components/SignInForm";
import Link from "next/link";
import { Separator } from "@radix-ui/react-separator";
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card/card";

export default async function Home() {
  return (
    <div>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Login with an existing account.</CardDescription>
      </CardHeader>

      <Separator></Separator>

      <CardContent>
        <LoginForm></LoginForm>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex flex-col items-center gap-2 w-full mt-4">            
            <Link href="/signup" className="text-sm opacity-75">Don't have an account? Click here to to make one!</Link>
        </div>
      </CardFooter>
    </div>
  );
}
