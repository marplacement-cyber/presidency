import data from "@/data/schools.json";
import SchoolHero from "@/app/components/School/SchoolHero";
import SchoolAbout from "@/app/components/School/SchoolAbout";
import ProgramList from "@/app/components/School/ProgramList";
import { notFound } from "next/navigation";

type Params = {
  slug: string;
};

export default async function SchoolPage({
  params,
}: {
  params: Promise<Params>;
}) {
  // ✅ unwrap params
  const { slug } = await params;

  const school = data.schools.find(
    (s) => s.slug.toLowerCase() === slug.toLowerCase(),
  );

  if (!school) {
    return notFound();
  }

  return (
    <main>
      <SchoolHero data={school.hero} />
      <SchoolAbout data={school.about} />
      <ProgramList programs={school.programs} slug={school.slug} />
    </main>
  );
}
