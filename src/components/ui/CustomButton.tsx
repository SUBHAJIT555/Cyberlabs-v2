import React, { useState, type ButtonHTMLAttributes } from "react";
import styled from "styled-components";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button = styled.button`
  display: flex;
  align-items: center;
  background: #ededed;
  border: none;
  border-radius: 10px;
  padding: 0.5rem 1.25rem 0.5rem 0.75rem;
  cursor: pointer;
  font-size: 1rem;
  font-family: inherit;
  transition: background 0.2s;
  outline: none;
  color: #222;
  gap: 0.75rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);

  &:hover {
    background: #e0e0e0;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const Dot = styled.span<{ isHovered: boolean }>`
  width: ${(props) => (props.isHovered ? "32px" : "16px")};
  height: ${(props) => (props.isHovered ? "32px" : "16px")};
  border-radius: 20%;
  background: #344e41;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: width 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    height 0.25s cubic-bezier(0.4, 0, 0.2, 1), background 0.2s;
  position: relative;
`;

const Arrow = styled.span<{ isVisible: boolean }>`
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: ${(props) => (props.isVisible ? "scale(1)" : "scale(0.5)")};
  transition: opacity 0.2s, transform 0.2s;
  color: #a3b18a;
  font-size: 1.25rem;
  pointer-events: none;
  position: absolute;

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%)
    ${(props) => (props.isVisible ? "scale(1)" : "scale(0.5)")};
`;

const ButtonText = styled.span`
  z-index: 1;
`;

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  onClick,
  className,
  ...rest // accept all other native button props
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Button
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      aria-label={text}
      type="button"
      {...rest} // pass remaining props to the button element
    >
      <Dot isHovered={isHovered}>
        <Arrow isVisible={isHovered}>&rarr;</Arrow>
      </Dot>
      <ButtonText>{text}</ButtonText>
    </Button>
  );
};

export default CustomButton;
