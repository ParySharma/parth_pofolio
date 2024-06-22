import React from "react";
import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";
import { Card } from "@mui/material";


interface LabelToolProps {
    className?: string;
    height?: string; // Adjust type as per requirement
    text?: React.ReactNode;
    width?: number;
    marginLeft?: number;
    backgroundColor?: string;
    borderColor?: string;
    textColor?: string;
    radius?: number;
    loading?: boolean;
    startIcon?: React.ReactNode;
    fontSize?: number;
    marginTop?: number;
    mb?: number;
    ml?: number;
    padding?: number;
    darkMode?: boolean;
    children?: React.ReactNode;
  }

// Styled Card component
const CardWrapper = styled(Card)`
  &&.MuiCard-root {
    height: ${({ height }: any) => height || '100%'};
    width: ${({ width }: any) => width}%;
    margin-bottom: ${({ mb }: any) => mb || 19}px;
    background-color: ${({ darkMode, backgroundColor }: any) => darkMode ? '#255585b0' : backgroundColor || '#d219bb17'};
    border-color: ${({ borderColor }: any) => borderColor || 'none'};
    color: ${({ darkMode, textColor }: any) => darkMode ? '#fff' : textColor || 'Black'};
    border-radius: ${({ radius }: any) => radius || 12}px;
    font-size: ${({ fontSize }: any) => fontSize || 18}px;
    margin-top: ${({ marginTop }: any) => marginTop || 0}px;
    margin-left: ${({ ml }: any) => ml || 0}px;
    box-shadow: ${({ boxShadow, darkMode }: any) => boxShadow || (darkMode ? '0 4px 4px 0 #00000014' : '0 4px 4px 0 #00000014')};
    padding: ${({ padding }: any) => padding || 8}px;
  }
`;

  
  const LabelTool: React.FC<LabelToolProps> = ({
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
    darkMode
  }) => {
    return (
      <CardWrapper
        className={className}
        
      >
        {loading ? (
          <CircularProgress size={20} color="inherit" />
        ) : (
          <>
            {startIcon && startIcon}
            {text}
            {children}
          </>
        )}
      </CardWrapper>
    );
  };

export default LabelTool;
