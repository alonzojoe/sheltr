import React from "react";

export interface IDiscoveryItem {
    Icon: React.ElementType;
    label: string;
}

export type Rental = {
    id: number
    name: string
    location: string
    images: string[]
    slug: string
    ratings: number
    price: Price
}

export interface Price {
    daily: number
    monthly: number
}
