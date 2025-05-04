"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button";
import { signInSchema } from "../schemas";

export function LoginForm() {
    const form = useForm<z.infer<typeof signInSchema>>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            username: "",
            password: ""
        }
    })

    async function onSubmit(data: z.infer<typeof signInSchema>) {

    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid w-full items-center gap-4">

                {/* Username */}
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="username">Username/Email</Label>
                    <Input id="username" placeholder="coolman@letterleague.com" />
                </div>

                {/* Password */}
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" placeholder="***********" type="password" />
                </div>

                {/* Login button */}
                <Button>Login</Button>
            </div>
            </form>
        </Form>
    );
} 