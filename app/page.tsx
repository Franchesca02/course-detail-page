import Link from 'next/link';
import { getCourseData } from './lib/course-data';

export default async function Home() {
  
  const course1 = await getCourseData('nextjs-mastery');
  const course2 = await getCourseData('react-advanced');

  const courses = [course1, course2].filter(Boolean);

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Course Platform
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {courses.map((course) => (
            <div key={course?.id} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                {course?.title}
              </h2>
              <p className="text-gray-600 mb-4">
                {course?.shortDescription}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-green-600">
                  ${course?.discountPrice || course?.price}
                </span>
                <Link 
                  href={`/courses/${course?.id}`}
                  className="px-6 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-white rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4">How to Access Courses</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="text-green-600 mr-3">1.</span>
              <p className="text-gray-700">
                Visit a course detail page directly at:{' '}
                <code className="bg-green-100 px-2 py-1 rounded">
                  /courses/nextjs-mastery
                </code>
              </p>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 mr-3">2.</span>
              <p className="text-gray-700">
                Or click on the &quot;View Details&quot; buttons above
              </p>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 mr-3">3.</span>
              <p className="text-gray-700">
                Available course IDs: <strong>nextjs-mastery</strong> and <strong>react-advanced</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}