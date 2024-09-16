import React, { FC } from "react";
import styled from "styled-components";

const Button = styled.button<{bool: Boolean}>`
    height: 70px;
    display: flex;
    flex: 1 1;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 38px;
    background-color: ${props => props.bool ? '#00471b' : '#1b1b32'};
    color: white;
    border: 2px solid white;
    border-radius: 20px;
    margin: 2px;
    cursor: pointer;
    user-select: none;
    &:hover {
        background: ${props => props.bool ? '#ff6600' : '#5a01a7'}
    }
`

export interface Props {
    handleClick(p : string) : void;
    children: string;
}

const ButtonComponent: FC<Props> = (props) => {
    const { handleClick, children } = props

    const isOperator = (valor: string): boolean => {
        return isNaN(Number(valor)) && (valor !== '.') && (valor !== '=');
    };
    return (
        <Button bool={isOperator(children)} onClick={() => handleClick(children)} >
            {children}
        </Button>
    )
}

export default ButtonComponent