import type { Bootcamp } from "@/interface/bootcamp";
import type { Hero } from "@/interface/program";

export const bootcampToHero = (bootcamp: Bootcamp): Hero => ({
    title: bootcamp.title,
    subheading: `${bootcamp.duration} · ${bootcamp.language}`,
    tags: [],
    pricing: {
        currentPrice: bootcamp.price.toLocaleString("en-IN"),
        originalPrice: bootcamp.price.toLocaleString("en-IN"),
        currency: bootcamp.currency === "INR" ? "₹" : bootcamp.currency,
        taxNote: "",
        discountText: "",
    },
    buttons: [],
    enrollmentMessage: { text: "", highlightedText: "" },
    image: { src: bootcamp.image, alt: bootcamp.title },
    details: [],
});
