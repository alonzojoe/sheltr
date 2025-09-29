import React from "react";

export interface IDiscoveryItem {
    Icon: React.ElementType;
    label: string;
}

export type Rentals = {
    id: number
    name: string
    location: string
    images: string[]
    slug: string
    ratings: number
    price: Price
}

export interface Price {
    perNight: number
    perMonth: number
}
