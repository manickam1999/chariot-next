"use client";

import { Analytics } from "@/utils/mixpanel";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function AnalyticsProvider() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      Analytics.track("Page View", {
        path: pathname,
        search: searchParams.toString(),
        url: `${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ""}`,
      });
    }
  }, [pathname, searchParams]);

  return null;
}
