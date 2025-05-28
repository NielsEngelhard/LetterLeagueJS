"use client";

import Card from "../ui/card/card";

interface MutedPickItemGridItem {
    label: string;
    value: string;
    Icon: React.ElementType;
}

interface Props {
    items: MutedPickItemGridItem[];
    value?: string;
    onChange?: (value: any) => void;
}

export default function MutedPickItemGrid({ items, value, onChange = () => {} }: Props) {
    return (
        <div className="grid grid-cols-3">
            {items.map((item, index) => (
                <Card key={index} variant="clickableOptionMuted" active={item.value == value ? 'clickableOptionMutedActive' : 'none'} onClick={() => { onChange(item.value) }}>
                    <div className="flex flex-row gap-1 items-center justify-center">
                        <item.Icon size={15}></item.Icon>
                        <div>{item.label}</div>
                    </div>
                </Card>                
            ))}
        </div>               
    )
} 