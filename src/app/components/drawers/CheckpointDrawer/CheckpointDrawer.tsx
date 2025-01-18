import React from "react";
import {
    Drawer,
    DrawerContent,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { Flag } from "lucide-react";
import Checkpoint from "./Checkpoint";
import Divider from "../../Divider";
import { checkpointAtom } from "@/atoms/checkpoint";
import { useAtom } from "jotai";
import { Switch } from "@/components/ui/switch";

function CheckpointDrawer() {
    const [isDisplayedOnMap, setIsDisplayedOnMap] = useAtom(checkpointAtom);

    const mockCheckpoints = [
        {
            address: {
                house_number: "4",
                road: "Gat Lebuh Chulia",
                city: "George Town",
                name: "Container Hotel",
            },
            _id: "678b6af4d485d854920d9da4",
            checkpointIndex: 1,
            coordinates: [5.414508, 100.340203],
            visited: false,
            history: [
                {
                    year: 2024,
                    utc_time: "2024-01-24T00:30:05.979000+00:00",
                    malaysia_time: "2024-01-24T08:30:05.979000+00:00",
                    malaysia_start_date: "2024-01-24",
                    _id: "678b6af4d485d854920d9da5",
                },
            ],
            type: "CHARIOT",
            __v: 0,
            createdAt: "2025-01-18T08:48:52.229Z",
            updatedAt: "2025-01-18T08:48:52.229Z",
        },
        {
            address: {
                house_number: "56",
                road: "Lebuh Victoria",
                city: "George Town",
                name: "Oh My Bingsu Dessert Cafe",
            },
            _id: "678b6af4d485d854920d9da7",
            checkpointIndex: 2,
            coordinates: [5.411818, 100.336196],
            visited: false,
            history: [
                {
                    year: 2024,
                    utc_time: "2024-01-24T03:07:50.205000+00:00",
                    malaysia_time: "2024-01-24T11:07:50.205000+00:00",
                    malaysia_start_date: "2024-01-24",
                    _id: "678b6af4d485d854920d9da8",
                },
            ],
            type: "CHARIOT",
            __v: 0,
            createdAt: "2025-01-18T08:48:52.229Z",
            updatedAt: "2025-01-18T08:48:52.229Z",
        },
        {
            address: { road: "Gat Jalan Prangin", city: "George Town" },
            _id: "678b6af4d485d854920d9daa",
            checkpointIndex: 3,
            coordinates: [5.411645, 100.33431],
            visited: false,
            history: [
                {
                    year: 2024,
                    utc_time: "2024-01-24T04:08:26.184000+00:00",
                    malaysia_time: "2024-01-24T12:08:26.184000+00:00",
                    malaysia_start_date: "2024-01-24",
                    _id: "678b6af4d485d854920d9dab",
                },
            ],
            type: "CHARIOT",
            __v: 0,
            createdAt: "2025-01-18T08:48:52.229Z",
            updatedAt: "2025-01-18T08:48:52.229Z",
        },
        {
            address: {
                house_number: "533",
                road: "Jalan C.Y. Choy",
                city: "George Town",
                name: "Bridge Street Prawn Noodle",
            },
            _id: "678b6af4d485d854920d9dad",
            checkpointIndex: 4,
            coordinates: [5.411932, 100.333924],
            visited: false,
            history: [
                {
                    year: 2024,
                    utc_time: "2024-01-24T04:18:26.181000+00:00",
                    malaysia_time: "2024-01-24T12:18:26.181000+00:00",
                    malaysia_start_date: "2024-01-24",
                    _id: "678b6af4d485d854920d9dae",
                },
            ],
            type: "CHARIOT",
            __v: 0,
            createdAt: "2025-01-18T08:48:52.230Z",
            updatedAt: "2025-01-18T08:48:52.230Z",
        },
        {
            address: {
                house_number: "183",
                road: "Jalan Magazine",
                city: "George Town",
                name: "The Wembley St Giles Premier Hotel",
            },
            _id: "678b6af4d485d854920d9db0",
            checkpointIndex: 5,
            coordinates: [5.413299, 100.330298],
            visited: false,
            history: [
                {
                    year: 2024,
                    utc_time: "2024-01-24T05:24:58.169000+00:00",
                    malaysia_time: "2024-01-24T13:24:58.169000+00:00",
                    malaysia_start_date: "2024-01-24",
                    _id: "678b6af4d485d854920d9db1",
                },
            ],
            type: "CHARIOT",
            __v: 0,
            createdAt: "2025-01-18T08:48:52.230Z",
            updatedAt: "2025-01-18T08:48:52.230Z",
        },
        {
            address: {
                house_number: "110",
                road: "Jalan Dato Keramat",
                city: "George Town",
                name: "Penang Nagarthar Sivan Temple",
            },
            _id: "678b6af4d485d854920d9db3",
            checkpointIndex: 6,
            coordinates: [5.413251, 100.326063],
            visited: false,
            history: [
                {
                    year: 2024,
                    utc_time: "2024-01-24T08:26:44.124000+00:00",
                    malaysia_time: "2024-01-24T16:26:44.124000+00:00",
                    malaysia_start_date: "2024-01-24",
                    _id: "678b6af4d485d854920d9db4",
                },
            ],
            type: "CHARIOT",
            __v: 0,
            createdAt: "2025-01-18T08:48:52.230Z",
            updatedAt: "2025-01-18T08:48:52.230Z",
        },
        {
            address: {
                house_number: "423",
                road: "Jalan Dato Keramat",
                city: "George Town",
                name: "SJK Tong Sian C",
            },
            _id: "678b6af4d485d854920d9db6",
            checkpointIndex: 7,
            coordinates: [5.412715648097115, 100.3173445061508],
            visited: false,
            history: [
                {
                    year: 2024,
                    utc_time: "2024-01-24T10:17:50.105000+00:00",
                    malaysia_time: "2024-01-24T18:17:50.105000+00:00",
                    malaysia_start_date: "2024-01-24",
                    _id: "678b6af4d485d854920d9db7",
                },
            ],
            type: "CHARIOT",
            __v: 0,
            createdAt: "2025-01-18T08:48:52.230Z",
            updatedAt: "2025-01-18T08:48:52.230Z",
        },
        {
            address: { road: "Jalan Utama", city: "George Town" },
            _id: "678b6af4d485d854920d9db9",
            checkpointIndex: 8,
            coordinates: [5.414139, 100.312107],
            visited: false,
            history: [
                {
                    year: 2024,
                    utc_time: "2024-01-24T11:53:34.117000+00:00",
                    malaysia_time: "2024-01-24T19:53:34.117000+00:00",
                    malaysia_start_date: "2024-01-24",
                    _id: "678b6af4d485d854920d9dba",
                },
            ],
            type: "CHARIOT",
            __v: 0,
            createdAt: "2025-01-18T08:48:52.230Z",
            updatedAt: "2025-01-18T08:48:52.230Z",
        },
        {
            address: {
                road: "Jalan Utama",
                city: "George Town",
                name: "Lembaga Wakaf Hindu Negeri Pulau Pinang",
            },
            _id: "678b6af4d485d854920d9dbc",
            checkpointIndex: 9,
            coordinates: [5.421137462541209, 100.30400156157748],
            visited: false,
            history: [
                {
                    year: 2024,
                    utc_time: "2024-01-24T14:31:24+00:00",
                    malaysia_time: "2024-01-24T22:31:24+00:00",
                    malaysia_start_date: "2024-01-24",
                    _id: "678b6af4d485d854920d9dbd",
                },
            ],
            type: "CHARIOT",
            __v: 0,
            createdAt: "2025-01-18T08:48:52.230Z",
            updatedAt: "2025-01-18T08:48:52.230Z",
        },
        {
            address: { road: "Jalan Utama", city: "George Town" },
            _id: "678b6af4d485d854920d9dbf",
            checkpointIndex: 10,
            coordinates: [5.423538, 100.303083],
            visited: false,
            history: [
                {
                    year: 2024,
                    utc_time: "2024-01-24T16:28:29.999000+00:00",
                    malaysia_time: "2024-01-25T00:28:29.999000+00:00",
                    malaysia_start_date: "2024-01-24",
                    _id: "678b6af4d485d854920d9dc0",
                },
            ],
            type: "CHARIOT",
            __v: 0,
            createdAt: "2025-01-18T08:48:52.230Z",
            updatedAt: "2025-01-18T08:48:52.230Z",
        },
        {
            address: { road: "Jalan Utama", city: "George Town" },
            _id: "678b6af4d485d854920d9dc2",
            checkpointIndex: 11,
            coordinates: [5.425835, 100.301807],
            visited: false,
            history: [
                {
                    year: 2024,
                    utc_time: "2024-01-24T18:05:27+00:00",
                    malaysia_time: "2024-01-25T02:05:27+00:00",
                    malaysia_start_date: "2024-01-24",
                    _id: "678b6af4d485d854920d9dc3",
                },
            ],
            type: "CHARIOT",
            __v: 0,
            createdAt: "2025-01-18T08:48:52.230Z",
            updatedAt: "2025-01-18T08:48:52.230Z",
        },
        {
            address: { road: "Jalan Utama", city: "George Town" },
            _id: "678b6af4d485d854920d9dc5",
            checkpointIndex: 12,
            coordinates: [5.428879, 100.30023],
            visited: false,
            history: [
                {
                    year: 2024,
                    utc_time: "2024-01-24T19:24:34+00:00",
                    malaysia_time: "2024-01-25T03:24:34+00:00",
                    malaysia_start_date: "2024-01-24",
                    _id: "678b6af4d485d854920d9dc6",
                },
            ],
            type: "CHARIOT",
            __v: 0,
            createdAt: "2025-01-18T08:48:52.230Z",
            updatedAt: "2025-01-18T08:48:52.230Z",
        },
        {
            address: {
                house_number: "4",
                road: "Jalan Utama",
                city: "George Town",
                name: "Waterfall Shree Muniswarar Temple",
            },
            _id: "678b6af4d485d854920d9dc8",
            checkpointIndex: 13,
            coordinates: [5.430412, 100.299323],
            visited: false,
            history: [
                {
                    year: 2024,
                    utc_time: "2024-01-24T20:10:48+00:00",
                    malaysia_time: "2024-01-25T04:10:48+00:00",
                    malaysia_start_date: "2024-01-24",
                    _id: "678b6af4d485d854920d9dc9",
                },
            ],
            type: "CHARIOT",
            __v: 0,
            createdAt: "2025-01-18T08:48:52.230Z",
            updatedAt: "2025-01-18T08:48:52.230Z",
        },
        {
            address: {
                road: "Jalan Kebun Bunga",
                city: "George Town",
                name: "Nattukkottai Chettiar Temple",
            },
            _id: "678b6af4d485d854920d9dcb",
            checkpointIndex: 14,
            coordinates: [5.432490930073974, 100.29821911546283],
            visited: false,
            history: [
                {
                    year: 2024,
                    utc_time: "2024-01-24T20:43:42.909000+00:00",
                    malaysia_time: "2024-01-25T04:43:42.909000+00:00",
                    malaysia_start_date: "2024-01-24",
                    _id: "678b6af4d485d854920d9dcc",
                },
            ],
            type: "CHARIOT",
            __v: 0,
            createdAt: "2025-01-18T08:48:52.230Z",
            updatedAt: "2025-01-18T08:48:52.230Z",
        },
        {
            address: {
                house_number: "10",
                road: "Gat Lebuh Chulia",
                city: "George Town",
            },
            _id: "678b6af4d485d854920d9da1",
            checkpointIndex: 0,
            coordinates: [5.415392, 100.339604],
            visited: true,
            history: [
                {
                    year: 2024,
                    utc_time: "2024-01-23T23:21:05.241000+00:00",
                    malaysia_time: "2024-01-24T07:21:05.241000+00:00",
                    malaysia_start_date: "2024-01-24",
                    _id: "678b6af4d485d854920d9da2",
                },
                {
                    year: 2025,
                    utc_time: "2025-01-18T09:21:59.551Z",
                    malaysia_time: "2025-01-18T17:21:59.551Z",
                    malaysia_start_date: "2025-01-05",
                    _id: "678b72b73e8622510eff9add",
                },
            ],
            type: "CHARIOT",
            __v: 1,
            createdAt: "2025-01-18T08:48:52.229Z",
            updatedAt: "2025-01-18T09:21:59.554Z",
            timeDifference: 19320,
        },
    ];

    return (
        <Drawer>
            <DrawerTrigger asChild>
                <button>
                    <Flag
                        size={18}
                        className="stroke-primary-850 dark:stroke-dark_inversed-850"
                    />
                </button>
            </DrawerTrigger>
            <DrawerContent className="px-3 w-full">
                <div className="py-5 gap-y-3 flex flex-col w-full max-h-[50%] overflow-auto">
                    <DrawerTitle className="py-3 flex justify-between items-center">
                        <span className="font-medium opacity-60 dark:opacity-100 text-primary-800 dark:text-dark_inversed-800">
                            Checkpoints
                        </span>
                        <div className="flex items-center space-x-2">
                            <Switch
                                checked={isDisplayedOnMap}
                                onCheckedChange={setIsDisplayedOnMap}
                            />
                            <label className="text-sm font-medium">
                                {isDisplayedOnMap
                                    ? "Hide on Map"
                                    : "Show on Map"}
                            </label>
                        </div>
                    </DrawerTitle>
                    <Divider />
                    <div className="flex flex-col gap-y-4 overflow-y-auto">
                        {mockCheckpoints.map((checkpoint) => (
                            <Checkpoint
                                key={checkpoint._id}
                                address={`${checkpoint.address.house_number ? checkpoint.address.house_number + ", " : ""}${checkpoint.address.road ? checkpoint.address.road + ", " : ""}${checkpoint.address.city ? checkpoint.address.city : ""}`}
                                landmark={checkpoint.address.name || ""}
                                history={checkpoint.history}
                                delta={checkpoint.timeDifference ?? null}
                            />
                        ))}
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    );
}

export default CheckpointDrawer;
