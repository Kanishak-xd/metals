const GOLD_API_KEY = "";
const GOLD_API_BASE_URL = "https://www.goldapi.io/api";

const METAL_CODES: Record<string, string> = { gold: "XAU", silver: "XAG", platinum: "XPT", palladium: "XPD" };

export interface MetalPrice { price: number; timestamp: number }

export interface MetalDetails { price: number; open_price: number; prev_close_price: number; timestamp: number;[key: string]: any }

export async function fetchMetalPrice(metal: string): Promise<MetalPrice> {
    const metalCode = METAL_CODES[metal.toLowerCase()];
    if (!metalCode) { throw new Error(`Unknown metal: ${metal}`) };

    const currency = "INR";
    const url = `${GOLD_API_BASE_URL}/${metalCode}/${currency}`;

    const response = await fetch(url, {
        method: "GET",
        headers: { "x-access-token": GOLD_API_KEY, "Content-Type": "application/json" },
    });

    if (!response.ok) { throw new Error(`Failed to fetch ${metal} price: ${response.statusText}`) };

    const data = await response.json();
    return { price: data.price || 0, timestamp: data.timestamp || Date.now() / 1000 };
}

export async function fetchMetalDetails(metal: string): Promise<MetalDetails> {
    const metalCode = METAL_CODES[metal.toLowerCase()];
    if (!metalCode) {
        throw new Error(`Unknown metal: ${metal}`);
    }

    const currency = "INR";
    const url = `${GOLD_API_BASE_URL}/${metalCode}/${currency}`;

    const response = await fetch(url, {
        method: "GET",
        headers: {
            "x-access-token": GOLD_API_KEY,
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch ${metal} details: ${response.statusText}`);
    }

    const data = await response.json();
    return {
        price: data.price || 0,
        open_price: data.open_price || 0,
        prev_close_price: data.prev_close_price || 0,
        timestamp: data.timestamp || Date.now() / 1000,
    };
}

