import styled from "styled-components";

export type ButtonVariant = "primary" | "secondary" | "danger" | "success";

interface ButtonContainerProps {
    variant: ButtonVariant;
  }
  

const buttonVariants = {
    primary: 'purple',
    secondary: 'orange',
    danger: 'red', 
    success: 'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px; 
    height: 40px; 
    border-radius: 4px; 
    border: 0; 
    margin: 8px;
    box-shadow: 0px 0px 2px ${props=> props.theme.secondary};

    
    background: ${props => props.theme.primary};
    color: ${props => props.theme.white}
`
