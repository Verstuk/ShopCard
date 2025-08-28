"use client";

import { useEffect } from "react";

export function TempoInit() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Tempo initialization logic
      console.log("Tempo initialized");
    }
  }, []);

  return null;
}
