import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./components/shared/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import { ReactQueryProvider } from "./components/shared/ReactQueryProvider";
import { AnalyticsProvider } from "./components/shared/AnalyticsProvider";
import { Suspense } from "react";

const geistSans = localFont({
    src: "../fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "../fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://chariot.penang.dev"),
    title: {
        default:
            "Penang Thaipusam Silver Chariot Tracker | Live Location Updates",
        template: "%s | Penang Thaipusam Silver Chariot Tracker",
    },
    description:
        "Live tracking of Penang's Thaipusam Silver Chariot procession. Get real-time location updates, route information, checkpoints, and estimated arrival times for the sacred journey from Kovil Veedu to Waterfall Temple.",
    keywords: [
        "Penang Thaipusam",
        "Silver Chariot",
        "Live Tracking",
        "Chariot Route",
        "Thaipusam Festival",
        "Waterfall Temple",
        "Kovil Veedu",
        "Real-time Updates",
        "Penang Festival",
        "Hindu Festival",
    ],
    authors: [{ name: "Penang Thaipusam Chariot Committee" }],
    creator: "Penang Thaipusam Chariot Committee",
    publisher: "Penang Thaipusam Chariot Committee",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    alternates: {
        canonical: "/",
        languages: {
            "en-US": "/",
            zh: "/zh",
        },
    },
    openGraph: {
        title: "Penang Thaipusam Silver Chariot Tracker | Live Location Updates",
        description:
            "Live tracking of Penang's Thaipusam Silver Chariot procession. Get real-time location updates, route information, checkpoints, and estimated arrival times.",
        url: "https://chariot.penang.dev",
        siteName: "Penang Thaipusam Silver Chariot Tracker",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "/assets/chariot-og.jpg",
                width: 1200,
                height: 630,
                alt: "Penang Thaipusam Silver Chariot",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Penang Thaipusam Silver Chariot Tracker",
        description:
            "Live tracking of Penang's Thaipusam Silver Chariot procession. Get real-time location updates and route information.",
        images: ["/assets/chariot-og.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    verification: {
        google: "add-your-google-site-verification-here",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Suspense>
                    <AnalyticsProvider />
                </Suspense>
                <ReactQueryProvider>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        {children}
                    </ThemeProvider>
                </ReactQueryProvider>
                <Toaster />
            </body>
        </html>
    );
}
