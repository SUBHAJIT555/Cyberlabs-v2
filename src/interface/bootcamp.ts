export interface Bootcamp {
    id: number;
    slug: string;
    title: string;
    duration: string;
    date: string;
    language: string;
    price: number;
    currency: string;
    description: string;
    image: string;
    phase?: 1 | 2;
    launchNote?: string;
}
