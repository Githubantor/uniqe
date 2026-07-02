"use client";

import { useState } from "react";
import { StaggerContainer, StaggerItem } from "@/components/animations";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import type { MemberData } from "@/lib/data";

export function MembersGrid({ members: initial }: { members: MemberData[] }) {
  const [search, setSearch] = useState("");

  const filtered = initial.filter(
    (m) =>
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      (m.role && m.role.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div>
      <div className="mt-10 max-w-md relative">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-espresso/40"
          size={20}
        />
        <Input
          placeholder="Search members..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10 border-espresso/20 bg-white h-12 rounded-xl"
        />
      </div>

      <section className="py-20">
        <div className="container">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-2xl text-espresso/40 font-medium">
                No members found.
              </p>
              <p className="text-espresso/30 mt-2">
                Maybe they&apos;re all at the coffee machine.
              </p>
            </div>
          ) : (
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((member) => (
                <StaggerItem key={member._id}>
                  <div className="bg-white rounded-2xl p-6 border border-espresso/5 h-full flex flex-col">
                    <div className="flex items-center gap-4 mb-4">
                      <Avatar className="w-14 h-14 border-2 border-terracotta/30">
                        <AvatarFallback className="bg-terracotta text-white text-lg">
                          {member.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-bold text-espresso text-lg">
                          {member.name}
                        </h3>
                        <p className="text-sm text-espresso/50">
                          {member.role}
                        </p>
                      </div>
                    </div>

                    <div className="flex-1">
                      <p className="text-espresso/70 leading-relaxed italic">
                        &ldquo;{member.quote}&rdquo;
                      </p>
                    </div>

                    <div className="mt-4 pt-4 border-t border-espresso/5">
                      <span className="text-xs font-medium text-terracotta">
                        Member since {member.joinYear}
                      </span>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}
        </div>
      </section>
    </div>
  );
}
