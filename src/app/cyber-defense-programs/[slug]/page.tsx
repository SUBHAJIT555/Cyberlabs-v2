import CourseDetails from "@/views/CourseDetails";
import { courses } from "@/constants/programData";

export function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export default function Page() {
  return <CourseDetails />;
}
