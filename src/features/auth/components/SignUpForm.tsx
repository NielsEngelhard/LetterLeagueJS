"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button";
import { signUpSchema } from "../schemas";
import { signUp } from "../actions";
import { useState } from "react";

export function SignUpForm() {
    const [error, setError] = useState<string>()
    const [verifyPassword, setVerifyPassword] = useState("");
    
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

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-3">
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="coolman@letterleague.com" {...form.register("email")} />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" placeholder="coolman@letterleague.com" {...form.register("username")} />
                    </div>            
                    <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" placeholder="***********" type="password" {...form.register("password")} />
                    </div>

                    <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="passwordverify">Verify Password</Label>
                    <Input id="passwordverify" placeholder="***********" type="password" value={verifyPassword} onChange={(e) => setVerifyPassword(e.target.value)} />
                    </div>
                </div>
                
                <div>
                    {error && <p className="text-red-500">{error}</p>}
                    <Button className="w-full" type="submit">Create Account</Button>                    
                </div>
            </form>            
        </Form>
    );
} 