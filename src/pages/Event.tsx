import Header from "../components/Header";

import { gql, useQuery } from "@apollo/client";
import Sidebar from "../components/Sidebar";
import Video from "../components/Video";

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`;

type Lesson = {
  id: string;
  title: string;
};

export default function Event() {
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        <Video />
        <Sidebar />
      </main>
    </div>
  );
}
