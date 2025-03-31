import React from "react";
interface DropdownProps {
    options: {
        label: string;
        value: string;
        disabled?: boolean;
    }[];
    onSelect: (value: string) => void;
    label?: string;
    direction?: "down" | "up";
    buttonStyle?: React.CSSProperties;
    itemStyle?: React.CSSProperties;
    selectedValue?: string;
}
declare const Dropdown: React.FC<DropdownProps>;
export default Dropdown;
