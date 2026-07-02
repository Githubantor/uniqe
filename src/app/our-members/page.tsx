import { AnimatedSection } from "@/components/animations";
import { Hero3D } from "@/components/hero-3d";
import { MembersGrid } from "@/components/members-grid";
import { getMembers } from "@/lib/data";

export default async function OurMembersPage() {
  const members = await getMembers();

  return (
    <div>
      <Hero3D className="pt-32 pb-20 bg-gradient-to-br from-cream to-cream-dark">
        <div className="container">
          <AnimatedSection className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-espresso leading-tight">
              Our Members
            </h1>
            <p className="mt-6 text-xl text-espresso/60 max-w-xl">
              The weird, wonderful humans who make Uniqe what it is. Say hi
              &mdash; they don&apos;t bite. (Mostly.)
            </p>
          </AnimatedSection>

          <MembersGrid members={members} />
        </div>
      </Hero3D>
    </div>
  );
}
