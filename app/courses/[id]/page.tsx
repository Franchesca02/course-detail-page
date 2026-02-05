/* eslint-disable @typescript-eslint/no-explicit-any */
import { notFound } from 'next/navigation';
import CourseContent from '../../components/CourseContent';
import { generateCourseMetadata, getCourseData } from '../../lib/course-data';
import { generateCourseSchema } from '@/app/lib/course-data';


export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ id: string }>
}): Promise<any> {
  const { id } = await params;
  const course = await getCourseData(id);
  
  if (!course) {
    return {
      title: 'Course Not Found',
      description: 'The requested course could not be found.',
    };
  }

  return generateCourseMetadata(course);
}


export default async function CoursePage({ 
  params 
}: { 
  params: Promise<{ id: string }>
}) {
  const { id } = await params;
  const course = await getCourseData(id);

  if (!course) {
    notFound();
  }

  return (
    <>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateCourseSchema(course)),
        }}
      />
      
      <CourseContent course={course} />
    </>
  );
}

export const dynamic = 'force-static';
export const revalidate = 3600; 