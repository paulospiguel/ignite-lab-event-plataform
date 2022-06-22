import { gql, useQuery } from "@apollo/client";
import { LessonProps } from "../types";
import Lesson from "./Lesson";
interface LessonResponse extends LessonProps {
  id: string;
}

const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: createdAt_ASC, stage: PUBLISHED) {
      id
      lessonType
      slug
      title
      availableAt
    }
  }
`;

interface SidebarProps {}

function Sidebar({}: SidebarProps) {
  const { data } = useQuery<{ lessons: LessonResponse[] }>(GET_LESSONS_QUERY);

  console.log(data);

  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="block pb-6 mb-6 text-2xl font-bold border-b border-gray-500">
        Cronograma de aula
      </span>

      <div className="flex flex-col gap-2">
        {data?.lessons.map((lesson) => (
          <Lesson
            key={lesson.id}
            slug={lesson.slug}
            title={lesson.title}
            lessonType={lesson.lessonType}
            availableAt={lesson.availableAt}
          />
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
