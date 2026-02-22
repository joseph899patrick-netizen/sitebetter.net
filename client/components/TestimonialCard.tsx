import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
  role: string;
  rating?: number;
}

export default function TestimonialCard({
  quote,
  author,
  company,
  role,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <div className="glass-effect p-8 rounded-2xl">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-gray-300 text-base leading-relaxed mb-6 italic">
        "{quote}"
      </p>

      {/* Author Info */}
      <div>
        <p className="font-semibold text-white">{author}</p>
        <p className="text-cyan-400 text-sm">{role}</p>
        <p className="text-gray-500 text-sm">{company}</p>
      </div>
    </div>
  );
}
