import { Spinner } from "phosphor-react";

import { useGetLessonsQuery } from "../graphql/generated";
import Lesson from "./Lesson";

interface SidebarProps {}

function Sidebar({}: SidebarProps) {
  const { data, loading } = useGetLessonsQuery();
  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="block pb-6 mb-6 text-2xl font-bold border-b border-gray-500">
        Cronograma de aula
      </span>

      <div className="flex flex-col gap-2">
        {loading ? (
          <div className="block w-full">
            <Spinner size={32} className="m-auto animate-spin" />
          </div>
        ) : (
          <>
            {data?.lessons.map((lesson) => (
              <Lesson
                key={lesson.id}
                slug={lesson.slug}
                title={lesson.title}
                lessonType={lesson.lessonType}
                availableAt={lesson.availableAt}
              />
            ))}
          </>
        )}
      </div>
    </aside>
  );
}

export default Sidebar;
