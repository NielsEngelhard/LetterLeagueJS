import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signInSchema } from "../schemas";
import { z } from "zod";
import { signIn } from "../actions";
import { CardContent, CardFooter } from "@/components/ui/card/cardContent";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ErrorText from "@/components/ui/errorText";


export default function SignInForm() {
    const [serverError, setServerError] = useState<string>();

    const {register, handleSubmit, formState: { errors, isSubmitting } } = useForm<z.infer<typeof signInSchema>>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            username: "",
            password: ""
        }
    });

    async function onSubmit(data: z.infer<typeof signInSchema>) {
        console.log("pripraproe");

        const responseError = await signIn(data);
        setServerError(responseError);
    }  

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <CardContent className="space-y-4">
                {/* Username */}
                <Input
                    {...register("username")}
                    id="username"
                    type="text"
                    label="Username or Email"
                    placeholder="NachoTruck22"
                    aria-invalid={errors.username ? "true" : "false"}
                    fieldError={errors.username}
                />

                {/* Password */}
                <div className="space-y-1">
                    <div className="flex items-center justify-between">
                        <Label htmlFor="password">Password</Label>
                        <Button variant="link" href="/forgot-password" className="text-xs text-primary p-0 h-auto" type="button">
                        Forgot password?
                        </Button>
                    </div>
                    <div>
                        <Input
                            {...register("password")}
                            id="password"
                            type="password"
                            placeholder="************" 
                            fieldError={errors.username}
                        />                        
                        {serverError && <ErrorText>{serverError}</ErrorText>}
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">                            
                <Button type="submit" className="w-full" size="sm" disabled={isSubmitting}>Log In</Button>

                <div className="text-center text-sm"> Don't have an account?{" "}
                    <Button variant="link" className="p-0 h-auto text-primary" type="button" href="/signup">Sign up</Button>
                </div>
            </CardFooter>
        </form>
    )
}