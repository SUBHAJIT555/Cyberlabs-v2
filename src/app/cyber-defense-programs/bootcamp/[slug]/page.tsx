import BootcampDetails from "@/views/BootcampDetails";
import { bootcamps } from "@/constants/bootcampData";

export function generateStaticParams() {
  return bootcamps.map((bootcamp) => ({
    slug: bootcamp.slug,
  }));
}

export default function Page() {
  return <BootcampDetails />;
}
