"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { signUpSchema } from "../schemas";
import { z } from "zod";
import { CardContent, CardFooter } from "@/components/ui/card/cardContent";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, UserPlus } from "lucide-react";
import { signUp } from "../actions";
import Checkbox from "@/components/ui/checkBox";

export default function SignUpForm() {
    const [error, setError] = useState<string>();
    const [verifyPassword, setVerifyPassword] = useState("");
    const [passwordsMatch, setPasswordsMatch] = useState(false);
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    const form = useForm<z.infer<typeof signUpSchema>>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            username: "",
            email: "",
            password: ""
        }
    })

    async function onSubmit(data: z.infer<typeof signUpSchema>) {
        if (data.password !== verifyPassword) {
            setError("Passwords do not match");
            return;
        }

        const error = await signUp(data);
        setError(error);
    }    

    function checkPasswordsMatch(password: string, verifyPassword: string) {
        if (password === verifyPassword) {
            setPasswordsMatch(true);
        } else {
            setPasswordsMatch(false);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <CardContent className="space-y-4">
                    <Input id="username" type="text" label="Username" placeholder="CoolBanana22" required {...form.register("username")} />
                    <Input id="email" type="email" label="Email" placeholder="name@example.com" required {...form.register("email")} />
                    <Input id="password" type="password" label="Password" placeholder="**********" required {...form.register("password")} onChange={(e) => {
                        form.setValue("password", e.target.value);
                        checkPasswordsMatch(e.target.value, verifyPassword);
                    }} />
                    <Input id="verifyPassword" type="password" label="Verify Password" placeholder="**********" required value={verifyPassword} onChange={(e) => {
                        setVerifyPassword(e.target.value);
                        checkPasswordsMatch(form.getValues("password"), e.target.value);
                    }} />
                    
                    <div className="flex items-center space-x-2">
                        <Checkbox id="terms" checked={acceptedTerms} label="I accept the terms and conditions" onToggle={() => {
                            setAcceptedTerms(!acceptedTerms);
                        }} />
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                    <Button type="submit" disabled={!acceptedTerms || !passwordsMatch} className="w-full" size="sm">
                        <UserPlus className="h-4 w-4" /> Create Account
                    </Button>

                    <div className="text-center text-sm">
                        Already have an account?{" "}
                        <Button variant="link"  className="p-0 h-auto text-primary" type="button" href="/login">
                            Log in
                        </Button>
                    </div>
                </CardFooter>
            </form>
        </Form>
    )
}