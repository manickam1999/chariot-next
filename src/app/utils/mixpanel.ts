import { env } from "@/env";
import mixpanel from "mixpanel-browser";

const MIXPANEL_TOKEN = env.NEXT_PUBLIC_MIXPANEL_TOKEN;

if (typeof window !== "undefined" && MIXPANEL_TOKEN) {
  mixpanel.init(MIXPANEL_TOKEN, {
    debug: process.env.NODE_ENV !== "production",
    track_pageview: true,
    verbose: true,
  });
}

const track = (eventName: string, properties?: Record<string, any>) => {
  if (typeof window !== "undefined" && MIXPANEL_TOKEN) {
    mixpanel.track(eventName, properties);
  }
};

export const Analytics = {
  track,
};
