import React from "react";
import Loading from "./Loading";

interface LoadingWrapperProps {
  isLoading: boolean;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  text?: string;
  className?: string;
}

const LoadingWrapper: React.FC<LoadingWrapperProps> = ({
  isLoading,
  children,
  size = "md",
  text = "Loading...",
  className = "",
}) => {
  if (isLoading) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center bg-gray-50 ${className}`}
      >
        <Loading size={size} text={text} />
      </div>
    );
  }

  return <>{children}</>;
};

export default LoadingWrapper;
