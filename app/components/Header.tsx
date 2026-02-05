import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-xl font-bold text-green-600">
            CoursePlatform
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-green-600 transition">
              Home
            </Link>
            <Link href="/" className="text-gray-700 hover:text-green-600 transition">
              All Courses
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Link 
            href="/courses/nextjs-mastery" 
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            View Sample Course
          </Link>
        </div>
      </div>
    </header>
  );
}