import { ReactNode } from "react";

interface IndustryCardProps {
  icon: ReactNode;
  name: string;
  description: string;
}

export default function IndustryCard({
  icon,
  name,
  description,
}: IndustryCardProps) {
  return (
    <div className="glass-effect p-6 rounded-xl text-center hover:border-purple-400/50 transition-all duration-300 group">
      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mx-auto mb-4 group-hover:from-purple-500/40 group-hover:to-pink-500/40 transition-all">
        <div className="text-purple-400 text-2xl">{icon}</div>
      </div>
      <h4 className="text-lg font-bold text-white mb-2">{name}</h4>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}
