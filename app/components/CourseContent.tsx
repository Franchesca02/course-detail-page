"use client";

import Link from "next/link";
import { Course } from "../lib/course-data";
import { useState } from "react";

interface CourseContentProps {
  course: Course;
}

export default function CourseContent({ course }: CourseContentProps) {
  const [enrolled, setEnrolled] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <nav
            className="hidden xs:flex text-sm text-gray-600 mb-4"
            aria-label="Breadcrumb"
          >
            <ol className="flex items-center space-x-2 flex-wrap">
              <li>
                <Link href="/" className="hover:text-green-600">
                  Home
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link href="/courses" className="hover:text-green-600">
                  Courses
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li
                className="text-gray-900 font-medium truncate max-w-[150px] sm:max-w-none"
                aria-current="page"
              >
                {course.title}
              </li>
            </ol>
          </nav>

          <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-3 mb-4">
            <span className="inline-block px-3 py-1 text-sm font-semibold bg-green-100 text-green-800 rounded-full w-fit">
              {course.category}
            </span>
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                <span className="text-yellow-500">★</span>
                <span className="font-semibold ml-1">{course.rating}</span>
              </div>
              <span className="hidden xs:inline text-gray-400">•</span>
              <span className="text-gray-500 text-sm">
                ({course.totalStudents.toLocaleString()} students)
              </span>
            </div>
          </div>

          <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {course.title}
          </h1>

          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm sm:text-base text-gray-600 mb-6">
            <span className="flex items-center">
              By{" "}
              <strong className="text-gray-900 ml-1">
                {course.instructor}
              </strong>
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center">
              <span className="sm:hidden mr-1">🕐</span>
              Updated {course.updatedAt}
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs sm:text-sm rounded-full">
              {course.level} Level
            </span>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {course.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-gray-100 text-gray-800 text-xs sm:text-sm rounded-full hover:bg-gray-200 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white rounded-xl shadow-sm border p-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Course Description
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                {course.description}
              </p>
            </section>

            <section className="bg-white rounded-xl shadow-sm border p-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                What You&apos;ll Learn
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <li className="flex items-start p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                  <span className="text-green-600 mt-1 mr-3 flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-gray-800">
                    Master Next.js 14 App Router patterns
                  </span>
                </li>
                <li className="flex items-start p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                  <span className="text-green-600 mt-1 mr-3 flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-gray-800">
                    Optimize for Core Web Vitals
                  </span>
                </li>
                <li className="flex items-start p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                  <span className="text-green-600 mt-1 mr-3 flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-gray-800">
                    Implement advanced SEO strategies
                  </span>
                </li>
                <li className="flex items-start p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                  <span className="text-green-600 mt-1 mr-3 flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-gray-800">
                    Deploy and scale on Vercel
                  </span>
                </li>
              </ul>
            </section>

            <section className="bg-white rounded-xl shadow-sm border p-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Course Details
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                <div className="bg-gray-50 p-4 rounded-lg border hover:bg-green-50 hover:border-green-200 transition-all duration-200 text-center">
                  <div className="text-sm text-gray-600 mb-1">Duration</div>
                  <div className="font-semibold text-gray-900 text-lg">
                    {course.duration}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Total learning time
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border hover:bg-green-50 hover:border-green-200 transition-all duration-200 text-center">
                  <div className="text-sm text-gray-600 mb-1">Lessons</div>
                  <div className="font-semibold text-gray-900 text-lg">
                    {course.lessons}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Video lectures
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border hover:bg-green-50 hover:border-green-200 transition-all duration-200 text-center">
                  <div className="text-sm text-gray-600 mb-1">Language</div>
                  <div className="font-semibold text-gray-900 text-lg">
                    {course.language}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Instruction language
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border hover:bg-green-50 hover:border-green-200 transition-all duration-200 text-center">
                  <div className="text-sm text-gray-600 mb-1">Level</div>
                  <div className="font-semibold text-gray-900 text-lg">
                    {course.level}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Skill level required
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-xl shadow-sm border p-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Curriculum Preview
              </h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <span className="text-gray-400 mr-3">▶️</span>
                    <span className="text-gray-800 hover:underline cursor-pointer">
                      Introduction to Next.js 14
                    </span>
                  </div>
                  <span className="text-sm text-gray-600">45 min</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <span className="text-gray-400 mr-3">▶️</span>
                    <span className="text-gray-800 hover:underline cursor-pointer">
                      App Router Deep Dive
                    </span>
                  </div>
                  <span className="text-sm text-gray-600">1.5 hours</span>
                </div>
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <aside className="sticky top-6 bg-white rounded-xl shadow-lg border overflow-hidden">
              <div className="relative h-40 sm:h-48 bg-gradient-to-br from-green-50 to-blue-50">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="text-4xl sm:text-5xl mb-3">🎓</div>
                    <h3 className="font-bold text-lg sm:text-xl text-gray-800">
                      {course.category}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      with {course.instructor}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <div className="mb-6">
                  {course.discountPrice ? (
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-2xl sm:text-3xl font-bold text-gray-900">
                          {formatPrice(course.discountPrice)}
                        </span>
                        <span className="px-2 py-1 text-xs sm:text-sm font-semibold bg-red-100 text-red-800 rounded">
                          Save{" "}
                          {Math.round(
                            (1 - course.discountPrice / course.price) * 100,
                          )}
                          %
                        </span>
                      </div>
                      <div className="text-gray-500 line-through text-sm sm:text-base">
                        {formatPrice(course.price)}
                      </div>
                    </div>
                  ) : (
                    <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                      {formatPrice(course.price)}
                    </div>
                  )}
                  <p className="text-sm text-gray-600 mt-2">
                    One-time payment • Lifetime access
                  </p>
                </div>

                <button
                  onClick={() => setEnrolled(true)}
                  className="w-full py-3 sm:py-4 px-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold rounded-lg transition-all duration-200 mb-4 transform hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
                  aria-label={`Enroll in ${course.title}`}
                >
                  <span className="flex items-center justify-center">
                    {enrolled ? (
                      <>
                        <span className="mr-2">✓</span>
                        Enrolled Successfully!
                      </>
                    ) : (
                      <>
                        <span className="mr-2">🎯</span>
                        Enroll Now
                      </>
                    )}
                  </span>
                </button>

                <div className="text-center mb-6 p-3 bg-green-50 rounded-lg border border-green-100">
                  <div className="flex items-center justify-center text-green-700 mb-1">
                    <span className="mr-2">✓</span>
                    <span className="font-medium">
                      30-Day Money-Back Guarantee
                    </span>
                  </div>
                  <p className="text-xs text-gray-600">
                    Full refund if you&apos;re not satisfied
                  </p>
                </div>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm sm:text-base">
                    <span className="text-green-500 mr-3 flex-shrink-0">✓</span>
                    <span>Full lifetime access</span>
                  </li>
                  <li className="flex items-center text-sm sm:text-base">
                    <span className="text-green-500 mr-3 flex-shrink-0">✓</span>
                    <span>Access on mobile and desktop</span>
                  </li>
                  <li className="flex items-center text-sm sm:text-base">
                    <span className="text-green-500 mr-3 flex-shrink-0">✓</span>
                    <span>Certificate of completion</span>
                  </li>
                  <li className="flex items-center text-sm sm:text-base">
                    <span className="text-green-500 mr-3 flex-shrink-0">✓</span>
                    <span>Direct instructor support</span>
                  </li>
                  <li className="flex items-center text-sm sm:text-base">
                    <span className="text-green-500 mr-3 flex-shrink-0">✓</span>
                    <span>Downloadable resources</span>
                  </li>
                  <li className="flex items-center text-sm sm:text-base">
                    <span className="text-green-500 mr-3 flex-shrink-0">✓</span>
                    <span>Community access</span>
                  </li>
                </ul>

                <div className="pt-4 border-t">
                  <h4 className="font-medium text-gray-900 mb-3">
                    Share this course
                  </h4>
                  <div className="flex space-x-3">
                    <button className="flex-1 py-2 px-3 bg-blue-100 text-blue-400 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors">
                      Twitter
                    </button>
                    <button className="flex-1 py-2 px-3 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                      Facebook
                    </button>
                    <button className="flex-1 py-2 px-3 bg-gray-800 text-white rounded-lg text-sm font-medium hover:bg-gray-600 transition-colors">
                      LinkedIn
                    </button>
                  </div>
                </div>
              </div>
            </aside>

            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 z-50">
              <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex-1 mr-4">
                  <div className="font-bold text-gray-900">
                    {course.discountPrice
                      ? formatPrice(course.discountPrice)
                      : formatPrice(course.price)}
                  </div>
                  {course.discountPrice && (
                    <div className="text-sm text-gray-500 line-through">
                      {formatPrice(course.price)}
                    </div>
                  )}
                </div>
                <button
                  onClick={() => setEnrolled(true)}
                  className="flex-1 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-lg hover:from-green-700 hover:to-green-800 transition-colors"
                >
                  {enrolled ? "Enrolled!" : "Enroll Now"}
                </button>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-8 lg:mt-12 bg-white rounded-xl shadow-sm border p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
            About the Instructor
          </h2>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center text-2xl sm:text-3xl">
              👨‍🏫
            </div>
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                {course.instructor}
              </h3>
              <p className="text-gray-600 mt-2">
                Experienced instructor with expertise in modern web development.
                Passionate about teaching and helping students achieve their
                career goals in tech.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
                  🎓 10+ Years Experience
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
                  👥 50,000+ Students
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
                  ⭐ 4.9/5 Rating
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 lg:mt-12 bg-white rounded-xl shadow-sm border p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            <div className="border rounded-lg overflow-hidden hover:border-green-200 transition-colors">
              <button
                className="flex items-center justify-between w-full p-4 text-left focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-inset"
                onClick={() => {
                  const content = document.getElementById("faq1-content");
                  const icon = document.getElementById("faq1-icon");
                  if (content && icon) {
                    content.classList.toggle("hidden");
                    icon.classList.toggle("rotate-180");
                  }
                }}
                aria-expanded="false"
                aria-controls="faq1-content"
              >
                <h3 className="font-semibold text-gray-900 pr-4">
                  Can I get a refund if I&apos;m not satisfied?
                </h3>
                <svg
                  id="faq1-icon"
                  className="w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                id="faq1-content"
                className="hidden px-4 pb-4 pt-0"
                role="region"
                aria-labelledby="faq1"
              >
                <p className="text-gray-600">
                  Yes! We offer a 30-day money-back guarantee with no questions
                  asked. If you&apos;re not completely satisfied with the
                  course, simply request a refund within 30 days of purchase for
                  a full refund.
                </p>
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden hover:border-green-200 transition-colors">
              <button
                className="flex items-center justify-between w-full p-4 text-left focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-inset"
                onClick={() => {
                  const content = document.getElementById("faq2-content");
                  const icon = document.getElementById("faq2-icon");
                  if (content && icon) {
                    content.classList.toggle("hidden");
                    icon.classList.toggle("rotate-180");
                  }
                }}
                aria-expanded="false"
                aria-controls="faq2-content"
              >
                <h3 className="font-semibold text-gray-900 pr-4">
                  How long do I have access to the course?
                </h3>
                <svg
                  id="faq2-icon"
                  className="w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                id="faq2-content"
                className="hidden px-4 pb-4 pt-0"
                role="region"
                aria-labelledby="faq2"
              >
                <p className="text-gray-600">
                  You get <strong>lifetime access</strong> to the course! This
                  includes all future updates, new content additions, and any
                  improvements we make. Learn at your own pace and revisit the
                  material anytime.
                </p>
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden hover:border-green-200 transition-colors">
              <button
                className="flex items-center justify-between w-full p-4 text-left focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-inset"
                onClick={() => {
                  const content = document.getElementById("faq3-content");
                  const icon = document.getElementById("faq3-icon");
                  if (content && icon) {
                    content.classList.toggle("hidden");
                    icon.classList.toggle("rotate-180");
                  }
                }}
                aria-expanded="false"
                aria-controls="faq3-content"
              >
                <h3 className="font-semibold text-gray-900 pr-4">
                  Is there a certificate provided?
                </h3>
                <svg
                  id="faq3-icon"
                  className="w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                id="faq3-content"
                className="hidden px-4 pb-4 pt-0"
                role="region"
                aria-labelledby="faq3"
              >
                <p className="text-gray-600">
                  Yes! Upon completing the course, you&apos;ll receive a{" "}
                  <strong>certificate of completion</strong>
                  that you can share on LinkedIn, add to your resume, or include
                  in your portfolio. The certificate is digitally verified and
                  can be downloaded as a PDF.
                </p>
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden hover:border-green-200 transition-colors">
              <button
                className="flex items-center justify-between w-full p-4 text-left focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-inset"
                onClick={() => {
                  const content = document.getElementById("faq4-content");
                  const icon = document.getElementById("faq4-icon");
                  if (content && icon) {
                    content.classList.toggle("hidden");
                    icon.classList.toggle("rotate-180");
                  }
                }}
                aria-expanded="false"
                aria-controls="faq4-content"
              >
                <h3 className="font-semibold text-gray-900 pr-4">
                  Are there any prerequisites for this course?
                </h3>
                <svg
                  id="faq4-icon"
                  className="w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                id="faq4-content"
                className="hidden px-4 pb-4 pt-0"
                role="region"
                aria-labelledby="faq4"
              >
                <p className="text-gray-600">
                  Basic knowledge of HTML, CSS, and JavaScript is recommended.
                  Familiarity with React is helpful but not required. We provide
                  introductory material to get everyone up to speed.
                </p>
              </div>
            </div>

            {/* FAQ 5 */}
            <div className="border rounded-lg overflow-hidden hover:border-green-200 transition-colors">
              <button
                className="flex items-center justify-between w-full p-4 text-left focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-inset"
                onClick={() => {
                  const content = document.getElementById("faq5-content");
                  const icon = document.getElementById("faq5-icon");
                  if (content && icon) {
                    content.classList.toggle("hidden");
                    icon.classList.toggle("rotate-180");
                  }
                }}
                aria-expanded="false"
                aria-controls="faq5-content"
              >
                <h3 className="font-semibold text-gray-900 pr-4">
                  Can I access the course on mobile devices?
                </h3>
                <svg
                  id="faq5-icon"
                  className="w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                id="faq5-content"
                className="hidden px-4 pb-4 pt-0"
                role="region"
                aria-labelledby="faq5"
              >
                <p className="text-gray-600">
                  Sure! The course platform is fully responsive and works on
                  smartphones, tablets, and desktops. You can learn on-the-go
                  and pick up right where you left off.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
