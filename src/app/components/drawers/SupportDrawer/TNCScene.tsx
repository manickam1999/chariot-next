import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { HeartIcon } from "lucide-react";

function TNCScene({
    handleSceneChange,
}: {
    handleSceneChange: (scene: 0 | 1) => void;
}) {
    const [isAccepted, setIsAccepted] = useState<boolean>(false);

    return (
        <div className="text-primary-850 dark:text-primary-100 flex flex-col items-center w-full gap-y-3">
            <div className="gap-y-2 rounded-md border border-[#CBD5E1] p-2 flex flex-col w-full h-40 overflow-y-auto">
                <span>Terms and Conditions</span>
                <ol className="list-decimal pl-5 space-y-2">
                    <li>
                        <strong>Independent Initiative:</strong> This project,
                        known as the Penang Silver Chariot Tracker, is developed
                        and managed by ByeByte Technologies, an independent
                        company. By donating, you acknowledge and agree that the
                        Chariot Tracker is a privately developed initiative led
                        by its creators, <b>Manickam Murugappan</b> and{" "}
                        <b>Lee Zi Hang</b>, and is not affiliated with any
                        temple, religious organization, or committee.
                    </li>
                    <li>
                        <strong>Purpose of Donations:</strong> All funds
                        received will be used exclusively for the development,
                        maintenance, and enhancement of the Penang Silver
                        Chariot Tracker project. This includes, but is not
                        limited to, software development costs, server and
                        hosting fees, and other operational expenses necessary
                        for the functioning of the project.
                    </li>
                    <li>
                        <strong>Ownership and Management of Funds:</strong>{" "}
                        Donations will be managed solely by ByeByte Technologies
                        and its creators, <b>Manickam Murugappan</b> and{" "}
                        <b>Lee Zi Hang</b>. These funds will not be directed to
                        or through any temple, religious body, or committee
                        associated with the festival or event being tracked.
                    </li>
                    <li>
                        <strong>Non-Refundable Contributions:</strong> All
                        donations are voluntary and non-refundable. By making a
                        donation, you acknowledge that you do so without
                        expectation of return or any specific service beyond the
                        continued improvement and operation of the Penang Silver
                        Chariot Tracker project.
                    </li>
                    <li>
                        <strong>Transparency and Accountability:</strong> While
                        funds will be used to maintain and develop the project,
                        ByeByte Technologies is committed to transparency.
                        Summaries of how funds are allocated may be provided
                        periodically at the discretion of the project team.
                    </li>
                    <li>
                        <strong>No Affiliation Disclaimer:</strong> Donors must
                        acknowledge that this project operates independently and
                        is not endorsed by or connected to any religious entity.
                        Donations should not be construed as contributions to or
                        support of any temple or religious practice.
                    </li>
                    <li>
                        <strong>Acceptance of Terms:</strong> By making a
                        donation, you agree to these terms and conditions. You
                        confirm that you understand the purpose and management
                        of the funds, as well as the project’s independent
                        status.
                    </li>
                </ol>
            </div>
            <div className="flex items-center justify-center gap-x-2">
                <Checkbox
                    onCheckedChange={(checked) =>
                        setIsAccepted(checked as boolean)
                    }
                    className="border-[#CBD5E1]"
                />
                <span className="text-sm">
                    I accept the Terms and Conditions
                </span>
            </div>
            <Button
                disabled={!isAccepted}
                onClick={() => handleSceneChange(1)}
                variant="outline"
                className="flex justify-center gap-x-2 items-center bg-primary-600 text-primary-150"
            >
                <HeartIcon strokeWidth={1} />
                <span>Support now!</span>
            </Button>
        </div>
    );
}

export default TNCScene;
