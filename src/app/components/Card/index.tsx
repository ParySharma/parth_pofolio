import React from "react";
import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";
import { Card } from "@mui/material";

interface CardProps {
    children: React.ReactNode;
    className?:any,
    height?: string;
    width?: string;
    marginLeft?: string;
    backgroundColor?: string;
    borderColor?: string;
    textColor?: string;
    radius?: number;
    fontSize?: number;
    marginTop?: number;
    ml?: number;
    boxShadow?:any,
    padding?: number;
    mb?: number;
    darkMode?: boolean;
    loading?: boolean;
    startIcon?: React.ReactNode;
    text?: React.ReactNode;
}

// Styled Card component
const CardWrapper = styled(Card)<CardProps>`
  &&.MuiCard-root {
    height: ${({ height }) => height || '100'}%;
    width: ${({ width }) => width}%;
    margin-bottom: ${({ mb }) => mb || 24}px;
    background-color: ${({ darkMode, backgroundColor }) => darkMode ? '#333' : backgroundColor || '#fff'}; // Change background color based on darkMode
    border-color: ${({ borderColor }) => borderColor || 'none'};
    color: ${({ darkMode, textColor }) => darkMode ? '#fff' : textColor || '#111827'}; // Change text color based on darkMode
    border-radius: ${({ radius }) => radius || 12}px;
    font-size: ${({ fontSize }) => fontSize || 18}px;
    margin-top: ${({ marginTop }) => marginTop || 0}px;
    margin-left: ${({ ml }) => ml || 0}px;
    box-shadow: ${({ boxShadow, darkMode })=> boxShadow || (darkMode ? '0 4px 4px 0 #00000014' : 'none')}; // Change box-shadow based on darkMode
    padding: ${({ padding }) => padding || 24}px;
  }
`;

const CardStyled: React.FC<CardProps> = ({
    className,
    height,
    text,
    width,
    marginLeft,
    backgroundColor,
    borderColor,
    textColor,
    radius,
    loading,
    startIcon,
    fontSize,
    marginTop,
    mb,
    ml,
    padding,
    children,
    darkMode // Added darkMode prop
}) => {
    return (
        <CardWrapper
            className={className}
            height={height}
            width={width}
            marginLeft={marginLeft}
            backgroundColor={backgroundColor}
            borderColor={borderColor}
            textColor={textColor}
            radius={radius}
            fontSize={fontSize}
            marginTop={marginTop}
            ml={ml}
            padding={padding}
            mb={mb}
            darkMode={darkMode} // Passed darkMode prop to styled component
        >
            {loading ? (
                <CircularProgress size={20} color="inherit" />
            ) : (
                <>
                    {startIcon && startIcon}
                    {text}
                    {children} {/* Render additional children */}
                </>
            )}
        </CardWrapper>
    );
};

export default CardStyled;
