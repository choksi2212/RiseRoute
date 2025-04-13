
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { cn } from '@/lib/utils';

interface AnimatedCardProps {
  className?: string;
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  animationDelay?: number;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  className,
  children,
  header,
  footer,
  animationDelay = 0,
}) => {
  const animationStyle = {
    animationDelay: `${animationDelay}ms`,
  };

  return (
    <Card 
      className={cn(
        "glass-card card-hover animate-float", 
        className
      )} 
      style={animationStyle}
    >
      {header && <CardHeader>{header}</CardHeader>}
      <CardContent>{children}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  );
};

export default AnimatedCard;
