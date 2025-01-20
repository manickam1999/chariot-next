import dynamic from "next/dynamic";
import { useMemo } from "react";
import Script from "next/script";

export default function Page() {
    const Map = useMemo(
        () =>
            dynamic(() => import("@/app/components/map/"), {
                ssr: false,
            }),
        []
    );

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Event",
        name: "Penang Thaipusam Silver Chariot Procession",
        description:
            "Live tracking service for the Penang Thaipusam Silver Chariot procession from Kovil Veedu to Waterfall Temple.",
        startDate: "2024-01-24T19:00",
        endDate: "2024-01-25T07:00",
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        location: {
            "@type": "City",
            name: "George Town",
            address: {
                "@type": "PostalAddress",
                addressLocality: "George Town",
                addressRegion: "Penang",
                addressCountry: "MY",
            },
        },
        organizer: {
            "@type": "Organization",
            name: "Penang Thaipusam Chariot Committee",
            url: "https://chariot.penang.dev",
        },
        image: ["https://chariot.penang.dev/assets/chariot-og.jpg"],
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "MYR",
            availability: "https://schema.org/InStock",
            validFrom: "2024-01-24",
        },
    };

    return (
        <main>
            <Script
                id="event-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <h1 className="sr-only">
                Penang Thaipusam Silver Chariot Live Tracker
            </h1>
            <div className="relative w-full h-screen">
                <Map posix={[5.41613, 100.33944]} />
            </div>
        </main>
    );
}
