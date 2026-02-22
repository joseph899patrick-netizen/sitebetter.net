import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

export default function ServiceCard({
  icon,
  title,
  description,
  benefits,
}: ServiceCardProps) {
  return (
    <div className="glass-effect p-8 rounded-2xl hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 group">
      {/* Icon Container */}
      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-6 group-hover:from-cyan-500/40 group-hover:to-purple-500/40 transition-all">
        <div className="text-cyan-400 text-2xl">{icon}</div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>

      {/* Description */}
      <p className="text-gray-400 text-sm mb-6 leading-relaxed">
        {description}
      </p>

      {/* Benefits */}
      <ul className="space-y-3">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="w-5 h-5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-xs font-bold">✓</span>
            </span>
            <span className="text-gray-300 text-sm">{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
