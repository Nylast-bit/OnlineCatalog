import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
}

export interface SearchListProps {
    list: string;
    setList: (list: string) => void;
}

export interface CustomTileProps {
    id: number;
    Name: string;
    Features: string;
    Price: string;
    Image: string;
}