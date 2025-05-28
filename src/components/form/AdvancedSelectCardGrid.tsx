import SelectCardGrid, { SelectOption } from "./SelectCardGrid";

export type AdvancedSelectOption = {
    label: string;
    value: any;
    Icon?: React.ElementType;    
}

interface Props {
    name: string;
    options: AdvancedSelectOption[];
}

export default function AdvancedSelectCardGrid({ name, options }: Props) {
    const mappedOptions: SelectOption[] = options.map(o => ({
        value: o.value,
        label: (
            <div className="flex flex-row gap-1 items-center justify-center">
                {o.Icon && <o.Icon size={15}></o.Icon>}
                <div>{o.label}</div>
            </div>            
        )
    }));
    
    return (
        <SelectCardGrid name={name} options={mappedOptions} />
    )
}