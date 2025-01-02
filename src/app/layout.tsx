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
    title: "Penang Silver Chariot Tracker",
    description: "A tracking service for Penang Thaipusam Chariot Tracking.",
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
