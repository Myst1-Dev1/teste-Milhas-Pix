'use server';
import { MyOffersContent } from "@/components/myOffersContent";

export default async function MyOffers() {

    const res = await fetch('https://api.milhaspix.com/simulate-offers-list',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data = await res.json();

    return (
        <>
            <MyOffersContent data = {data?.offers} />
        </>
    )
}