import { useMemo } from "react";
import { bootcamps } from "@/constants/bootcampData";
import { bootcampDetails } from "@/constants/bootcampDetailData";
import type { Bootcamp } from "@/interface/bootcamp";
import type { BootcampDetail } from "@/interface/bootcampDetail";

type UseBootcampsReturn = {
    getBootcamps: () => Bootcamp[];
    getBootcampBySlug: (slug: string) => Bootcamp | undefined;
    getBootcampDetailBySlug: (slug: string) => BootcampDetail | undefined;
};

export const useBootcamps = (): UseBootcampsReturn => {
    const getBootcamps = () => bootcamps;

    const getBootcampBySlug = (slug: string) =>
        bootcamps.find((bootcamp) => bootcamp.slug === slug);

    const getBootcampDetailBySlug = (slug: string) =>
        bootcampDetails.find((detail) => detail.slug === slug);

    return useMemo<UseBootcampsReturn>(
        () => ({
            getBootcamps,
            getBootcampBySlug,
            getBootcampDetailBySlug,
        }),
        []
    );
};
