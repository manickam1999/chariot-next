"use client";

import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import SplashScreen from "@/app/components/SplashScreen";

export default function Page() {
    const [showMap, setShowMap] = useState(false);

    const Map = useMemo(
        () =>
            dynamic(() => import("@/app/components/map/"), {
                ssr: false,
            }),
        []
    );

    return (
        <>
            {!showMap && <SplashScreen onComplete={() => setShowMap(true)} />}
            {showMap && <Map posix={[5.41613, 100.33944]} />}
        </>
    );
}
