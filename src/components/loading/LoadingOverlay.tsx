// LoadingOverlay.tsx
import { LoadingContext } from "@/contexts/LoadingContext";
import React, { useContext } from "react";

export default function LoadingOverlay() {
  const loadingCtx = useContext(LoadingContext);
  if (!loadingCtx?.isLoading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
    </div>
  );
}
