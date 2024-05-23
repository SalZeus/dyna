"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div
      style={{
        padding: "10rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2>D&apos;:</h2>
      <p>It seems that we are having some issues. Please try again later.</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
}