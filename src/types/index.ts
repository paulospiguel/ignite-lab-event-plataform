export type LessonProps = {
  title: string;
  slug: string;
  lessonType: "live" | "class";
  availableAt: Date;
};
