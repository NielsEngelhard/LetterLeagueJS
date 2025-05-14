"use client";

import Card from "@/components/ui/card/card";

interface Props {
    items: any[];
    value: any;    
    title?: string;
    valueIndicator?: string;
    onChange?: (value: any) => void;
    Icon?: React.ElementType;
    valuePostfix?: string;
}

export default function PickItemGrid({items, value, title, valueIndicator, onChange = () => {}, Icon, valuePostfix}: Props) {
    return (
        <div>
            <div className="flex items-center justify-between mb-2">
                {title && <h2 className="text-lg font-semibold">{title}</h2>}
                {valueIndicator && <span className="text-sm text-muted-foreground">{value} {valueIndicator}</span>}
            </div>
            <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }}>
            {items.map((item, index) => (
                <Card key={index} variant="clickableOption" active={item == value ? 'clickableOptionActive' : 'none'} onClick={() => { onChange(item) }}>
                    <div className="flex flex-row justify-center items-center text-center">
                        {Icon && <Icon className="w-4 h-4 text-text mr-1" />}
                        {item}
                        {valuePostfix && <div>{valuePostfix}</div>}
                    </div>
                </Card>
            ))}
            </div>                            
        </div>    
    )
}