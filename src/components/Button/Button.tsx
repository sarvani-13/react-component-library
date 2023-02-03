import React from "react";
import './Button.css';

export interface ButtonProps {
    label: string;
    children?: React.ReactNode;
    onClick?: () => void;
}

const Button = (props: ButtonProps) => {
    return <button onClick={props.onClick}>{props.label}{props.children}</button>;
};

export default Button;