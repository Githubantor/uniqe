import { AnimatedSection } from "@/components/animations";
import { getAdminStats } from "@/lib/data";

export default async function AdminPage() {
  const stats = await getAdminStats();

  return (
    <div>
      <section className="pt-32 pb-20 bg-gradient-to-br from-cream to-cream-dark">
        <div className="container">
          <AnimatedSection className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-espresso leading-tight">
              Admin
            </h1>
            <p className="mt-6 text-xl text-espresso/60 max-w-xl">
              Behind the curtain. Manage inquiries, members, and content.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 border border-espresso/5">
              <p className="text-sm text-espresso/50 uppercase tracking-wide">Contact Inquiries</p>
              <p className="text-4xl font-bold text-espresso mt-2">{stats.contacts}</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-espresso/5">
              <p className="text-sm text-espresso/50 uppercase tracking-wide">Membership Plans</p>
              <p className="text-4xl font-bold text-espresso mt-2">{stats.memberships}</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-espresso/5">
              <p className="text-sm text-espresso/50 uppercase tracking-wide">Members</p>
              <p className="text-4xl font-bold text-espresso mt-2">{stats.members}</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-espresso/5">
              <p className="text-sm text-espresso/50 uppercase tracking-wide">FAQs</p>
              <p className="text-4xl font-bold text-espresso mt-2">{stats.faqs}</p>
            </div>
          </div>

          <div className="bg-cream-dark rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-espresso mb-4">Quick Actions</h2>
            <p className="text-espresso/60 mb-6">
              Data is cached for 1 minute. Changes will be reflected after cache expiry.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="/admin"
                className="block p-4 bg-white rounded-xl border border-espresso/5 hover:border-terracotta/30 transition-colors"
              >
                <h3 className="font-semibold text-espresso">View Inquiries</h3>
                <p className="text-sm text-espresso/50 mt-1">Manage contact form submissions</p>
              </a>
              <a
                href="/admin"
                className="block p-4 bg-white rounded-xl border border-espresso/5 hover:border-terracotta/30 transition-colors"
              >
                <h3 className="font-semibold text-espresso">Manage Content</h3>
                <p className="text-sm text-espresso/50 mt-1">Update site content and members</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
