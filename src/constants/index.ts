
import { type IDiscoveryItem } from "@/types";
import { FaVrCardboard, FaHeart } from "react-icons/fa6";
import { GrSwift } from "react-icons/gr";


export const DISCOVERY_ITEMS: IDiscoveryItem[] = [
    {
        Icon: FaVrCardboard,
        label: 'Vr support'
    },
    {
        Icon: GrSwift,
        label: 'Fast & Easy'
    },
    {
        Icon: FaHeart,
        label: 'Most liked'
    },
]