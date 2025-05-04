import { Button } from "@/components/ui/button";
import { LoginForm } from "@/features/auth/components/SignInForm";
import Link from "next/link";
import { Separator } from "@radix-ui/react-separator";

export default async function Home() {
  return (
    <div>
      <div>
        <LoginForm>

        </LoginForm>
      </div>
      <div>
        <div className="py-2 flex justify-center">
          <Separator></Separator>
          <div>OR</div>
        </div>
        
        <div className="w-full">
          <Button className="w-full">
              <Link href="/signup">
                Create a new account
              </Link>
          </Button>          
        </div>
      </div>      
    </div>
  );
}
