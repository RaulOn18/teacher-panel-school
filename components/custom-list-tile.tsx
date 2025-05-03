import { ChevronRight } from "lucide-react"; // Example trailing icon
import { Mail } from "lucide-react"; // Example leading icon
import React from "react";

interface CustomListTileProps {
  leading?: React.ReactNode;
  title: string;
  subtitle?: React.ReactNode;
  trailing?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const CustomListTile: React.FC<CustomListTileProps> = ({
  leading,
  title,
  subtitle,
  trailing,
  onClick,
  className,
}) => {
  return (
    <div
      className={`flex items-start gap-4 p-4 cursor-pointer hover:bg-accent hover:text-accent-foreground ${className}`}
      onClick={onClick}
    >
      {leading && <div className="flex-shrink-0">{leading}</div>}
      <div className="flex-grow">
        <div className="font-medium">{title}</div>
        {subtitle && (
          <div className="text-sm text-muted-foreground">{subtitle}</div>
        )}
      </div>
      {trailing && <div className="flex-shrink-0">{trailing}</div>}
    </div>
  );
};
