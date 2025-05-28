"use client";

import PageTitle from "@/components/layout/pageTitle";
import GameSettingsBase from "@/components/specific/game/settings/GameSettingsBase";
import { CreateGameSchema, createGameSchema } from "@/features/game/general-schemas";
import { GameVisibility } from "@/lib/game-constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from 'next/navigation';
import { FormProvider, useForm } from "react-hook-form";

export default function SoloCustomGameSetup() {
    const router = useRouter();
    
    const form = useForm<CreateGameSchema>({
        resolver: zodResolver(createGameSchema),
        defaultValues: {
            wordLength: 5,
            maxAttempts: 6,
            timePerTurn: 40,
            visibility: GameVisibility.Private
        }
    });

    function onSubmit() {
        console.log("TODO");
    }

    function onBackClick() {
        router.push("/play/solo");
    }

    return (
        <div>
            <PageTitle title="Custom Solo Game"></PageTitle>
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <GameSettingsBase onBackClick={onBackClick}></GameSettingsBase>
                </form>                
            </FormProvider>
        </div>
    )
}