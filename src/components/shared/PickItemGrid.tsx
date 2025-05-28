"use client";

import Card from "@/components/ui/card/card";
import { Controller, useFormContext } from "react-hook-form";

interface Props {
    name: string; // Field name for react-hook-form
    items: any[];
    title?: string;
    valueIndicator?: string;
    Icon?: React.ElementType;
    valuePostfix?: string;
}

export default function PickItemGrid({name, items, title, valueIndicator, Icon, valuePostfix}: Props) {
    const { control, watch } = useFormContext();
    const value = watch(name);
    
    return (
        <div>
            {/* Indicator */}
            <div className="flex items-center justify-between mb-2">
                {title && <h2 className="text-lg font-semibold">{title}</h2>}
                {valueIndicator && <span className="text-sm text-muted-foreground">{value} {valueIndicator}</span>}
            </div>

            {/* Options */}
            <Controller control={control} name={name} render={({ field }) => (
                <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }}>
                    {items.map((item, index) => (
                        <Card key={index} variant="clickableOption" active={item == value ? 'clickableOptionActive' : 'none'} onClick={() => field.onChange(item)}>
                            <div className="flex flex-row justify-center items-center text-center">
                                {Icon && <Icon className="w-4 h-4 text-text mr-1" />}
                                {item}
                                {valuePostfix && <div>{valuePostfix}</div>}
                            </div>
                        </Card>
                    ))}
                </div>
            )}></Controller>                      
        </div>    
    )
}