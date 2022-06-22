import { ReactNode } from 'react';

interface LessonProps {
  children: ReactNode;
}

function Lesson({ children }: LessonProps) {
  return (
    <>
      <h1>Lesson</h1>
      {children}
    </>
  );
}

export default Lesson;
