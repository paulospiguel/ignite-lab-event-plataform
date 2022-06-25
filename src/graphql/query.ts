import { gql, useQuery } from "@apollo/client";

import { LessonProps } from "../types";

interface LessonResponse extends LessonProps {
  id: string;
}

type TeacherType = {
  name: string;
  bio: string;
  avatarURL: string;
};

interface LessonBySlugQueryResponse {
  lesson: Pick<LessonProps, "title"> & {
    description: string;
    videoId: string;
    teacher: TeacherType;
  };
}

export const getLessonBySlugQuery = (slug: string) => {
  const GET_LESSON_BY_SLUG_QUERY = gql`
    query GetLessonSlug($slug: String) {
      lesson(where: { slug: $slug }) {
        videoId
        description
        title
        teacher {
          bio
          avatarURL
          name
        }
      }
    }
  `;

  const responseQuery = useQuery<LessonBySlugQueryResponse>(
    GET_LESSON_BY_SLUG_QUERY,
    {
      variables: {
        slug,
      },
    }
  );

  return responseQuery;
};

export const getLessonList = () => {
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

  return useQuery<{ lessons: LessonResponse[] }>(GET_LESSONS_QUERY);
};
