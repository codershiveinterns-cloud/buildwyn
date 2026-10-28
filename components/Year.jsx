"use client";

import { useEffect, useState } from "react";

// Current year, refreshed in the browser so the static build never goes stale
export default function Year() {
  const [year, setYear] = useState(2026);
  useEffect(() => setYear(new Date().getFullYear()), []);
  return <span data-year="">{year}</span>;
}
