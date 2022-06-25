import { CaretRight, FileArrowDown } from "phosphor-react";

interface CardProps {
  title: string;
  description: string;
  link?: string;
}

function Card({ title, description, link = "#" }: CardProps) {
  return (
    <a
      href={link}
      className="flex items-stretch gap-6 overflow-hidden transition-colors bg-gray-700 rounded hover:bg-gray-600"
    >
      <div className="flex items-center h-full p-6 bg-green-700">
        <FileArrowDown size={48} />
      </div>
      <div className="py-6 leading-relaxed">
        <strong className="text-2xl">{title}</strong>
        <p className="mt-2 text-sm text-gray-200">{description}</p>
      </div>
      <div className="flex items-center h-full p-6">
        <CaretRight size={24} />
      </div>
    </a>
  );
}

export default Card;
