import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import tracker from "../lib/analytics.js";

export default function NexoPageViews() {
  const { pathname } = useLocation();

  useEffect(() => {
    tracker.page(pathname);
  }, [pathname]);

  return null;
}
