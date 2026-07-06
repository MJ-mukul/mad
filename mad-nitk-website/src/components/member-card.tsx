import Image from "next/image";
import { Mail, Instagram, Linkedin } from "lucide-react";

type Member = {
  name: string;
  role: string;
  department: string;
  year: string;
  skills: string[];
  bio: string;
  image: string;
};

export function MemberCard({ member }: { member: Member }) {
  return (
    <article className="overflow-hidden rounded-lg border border-white/10 bg-card">
      <div className="relative aspect-[4/3]">
        <Image src={member.image} alt={`${member.name}, ${member.role}`} fill className="object-cover" />
      </div>
      <div className="p-5">
        <p className="text-sm font-semibold text-cyan">{member.role}</p>
        <h3 className="mt-1 text-xl font-bold text-white">{member.name}</h3>
        <p className="mt-1 text-sm text-zinc-400">
          {member.department} {" / "} {member.year}
        </p>
        <p className="mt-4 text-sm leading-6 text-zinc-300">{member.bio}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {member.skills.map((skill) => (
            <span key={skill} className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300">
              {skill}
            </span>
          ))}
        </div>
        <div className="mt-5 flex gap-3 text-zinc-400">
          <Linkedin className="h-4 w-4" />
          <Instagram className="h-4 w-4" />
          <Mail className="h-4 w-4" />
        </div>
      </div>
    </article>
  );
}
