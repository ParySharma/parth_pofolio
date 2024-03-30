import React from "react";
import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";
import { Card } from "@mui/material";

// Styled Card component
const CardWrapper = styled(Card)`
  &&.MuiCard-root {
    height: ${({ height }: any) => height || '100'}%;
    width: ${({ width }: any ) => width}%;
    margin-bottom: ${({ mb }: any) => mb || 24}px;
    background-color: ${({ backgroundColor }: any) => backgroundColor || '#fff'};
    border-color: ${({ borderColor }: any) => borderColor || 'none'};
    color: ${({ textColor }: any) => textColor || '#111827'};
    border-radius: ${({ radius }: any) => radius || 12}px;
    font-size: ${({ fontSize }: any) => fontSize || 18}px;
    margin-top: ${({ marginTop }: any) => marginTop || 0}px;
    margin-left: ${({ ml }: any) => ml || 0}px;
    box-shadow: ${({boxShadow}: any)=> boxShadow || '0 4px 4px 0 #00000014'};
    padding: ${({ padding }: any) => padding || 24}px;
  }
`;

const CardStyled = ({
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
}: any) => {
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
