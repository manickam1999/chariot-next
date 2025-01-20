import { CopyIcon, DownloadIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { toast } from "sonner";
import Divider from "../../Divider";

function BankAccountScene() {
    const bankAccountDetails = [
        { title: "Bank Name", value: "HSBC Bank Malaysia Berhad" },
        { title: "Account Name", value: "Manickam Murugappan" },
        { title: "Account Number", value: "371348475025" },
    ];

    const handleCopyToClipboard = (value: string) => {
        navigator.clipboard.writeText(value);
        toast(`Copied "${value}" to clipboard!`);
    };

    return (
        <div className="flex flex-col gap-y-2 items-center justify-center">
            <div className="flex flex-col items-center gap-y-2">
                <span className="font-bold text-primary-850 dark:text-primary-100">
                    Malaysian National QR
                </span>
                <div className="relative p-2 bg-white rounded-lg shadow-lg">
                    <Image
                        alt="QR Code"
                        src="/assets/ManickamQR.jpeg"
                        width={180}
                        height={180}
                        className="rounded-md"
                    />
                    {/* Download QR Button */}
                    <button
                        onClick={() => {
                            const link = document.createElement("a");
                            link.href = "/assets/ManickamQR.jpeg";
                            link.download =
                                "PenangThaipusamSilverChariotDonation.jpeg";
                            link.click();
                        }}
                        className="absolute bottom-2 right-2 bg-gray-900 text-white p-1 rounded-md hover:bg-gray-700 transition"
                    >
                        <DownloadIcon size={16} />
                    </button>
                </div>
            </div>
            <Divider />
            <div className="flex flex-col items-center gap-y-2 w-full">
                <span className="font-bold text-primary-850 dark:text-primary-50">
                    Bank Transfer Details
                </span>
                <div className="flex flex-col gap-y-3 rounded-lg bg-primary-100 p-3 w-full md:w-fit md:items-center">
                    {bankAccountDetails.map((detail) => (
                        <div
                            key={detail.title}
                            className="flex items-center gap-x-1"
                        >
                            <span className="font-bold">{detail.title}: </span>
                            <span>{detail.value}</span>
                            {["Account Name", "Account Number"].includes(
                                detail.title
                            ) && (
                                <button
                                    onClick={() =>
                                        handleCopyToClipboard(detail.value)
                                    }
                                    className="hover:cursor-pointer"
                                >
                                    <CopyIcon color="black" size={15} />
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BankAccountScene;
