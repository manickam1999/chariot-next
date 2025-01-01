import { CopyIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { toast } from "sonner";

function BankAccountScene() {
  const bankAccountDetails = [
    { title: "Bank Name", value: "Hong Leong Bank" },
    { title: "Account Name", value: "Manickam Murugappan" },
    { title: "Account Number", value: "1635 0234 991" },
  ];

  const handleCopyToClipboard = (value: string) => {
    navigator.clipboard.writeText(value);
    toast(`Copied "${value}" to clipboard!`);
  };

  return (
    <div className="flex flex-col gap-y-4 items-center justify-center">
      <div className="flex flex-col items-center gap-y-2">
        <span className="font-bold text-primary-850">
          Malaysian National QR
        </span>
        <Image
          alt="QR Code"
          src="/assets/ManickamQR.png"
          width={150}
          height={150}
        />
      </div>
      <hr color="271832" />
      <div className="flex flex-col items-center gap-y-2 w-full">
        <span className="font-bold text-primary-850">
          Bank Transfer Details
        </span>
        <div className="flex flex-col gap-y-3 rounded-lg bg-primary-100 p-3 w-full md:w-fit md:items-center">
          {bankAccountDetails.map((detail) => (
            <div key={detail.title} className="flex items-center gap-x-1">
              <span className="font-bold">{detail.title}: </span>
              <span>{detail.value}</span>
              {["Account Name", "Account Number"].includes(detail.title) && (
                <button
                  onClick={() => handleCopyToClipboard(detail.value)}
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
