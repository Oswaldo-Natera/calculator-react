import { FC } from "react";
import { Props } from "./button";
import styled from "styled-components";

const ClearButton = styled.button`
    height: 70px;
    font-size: 1.6rem;
    display: flex;
    flex: 1;
    background-color: #ac0246;
    margin-top: 8px;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: white;
    border: 2px solid white;
    cursor: pointer;
    border-radius: 20px;
    user-select: none;
    &:hover {
        background-color: #ebb000;
    }
`

const ClearButtonComponent: FC<Props> = (props) => {
    const {handleClick, children} = props
    return (
        <ClearButton onClick={() => handleClick(children)} >
            {children}
        </ClearButton>
    )
}

export default ClearButtonComponent