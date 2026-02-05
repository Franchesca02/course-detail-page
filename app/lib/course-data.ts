import type { Metadata } from 'next';

export interface Course {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  instructor: string;
  rating: number;
  totalStudents: number;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  price: number;
  discountPrice?: number;
  language: string;
  updatedAt: string;
  skills: string[];
  category: string;
  lessons: number;
  provider: string;
  ogImage?: string;
}


export async function getCourseData(id: string): Promise<Course | null> {
  
  await new Promise(resolve => setTimeout(resolve, 100));

  const courses: Record<string, Course> = {
    'nextjs-mastery': {
      id: 'nextjs-mastery',
      title: 'Next.js 14 Mastery: Build Production-Ready Applications',
      description: 'Master Next.js 14 with App Router, Server Components, and modern React patterns. Learn to build high-performance, SEO-friendly applications with TypeScript, Tailwind CSS, and deploy to Vercel.',
      shortDescription: 'Master Next.js 14 with App Router and Server Components',
      instructor: 'Ifeyinwa Ihuoma',
      rating: 4.9,
      totalStudents: 12450,
      duration: '18 hours',
      level: 'Intermediate',
      price: 129,
      discountPrice: 89,
      language: 'English',
      updatedAt: '2026-02-04',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vercel', 'React-Redux'],
      category: 'Web Development',
      lessons: 42,
      provider: 'StartHub Academy',
      ogImage: '/og/nextjs-course.png',
    },
    'react-advanced': {
      id: 'react-advanced',
      title: 'Advanced React Patterns and Performance Optimization',
      description: 'Deep dive into advanced React patterns, performance optimization techniques, and state management strategies for building scalable applications.',
      shortDescription: 'Advanced React patterns and performance optimization',
      instructor: 'Ify Enyinnaya',
      rating: 4.8,
      totalStudents: 8900,
      duration: '15 hours',
      level: 'Advanced',
      price: 149,
      language: 'English',
      updatedAt: '2026-02-02',
      skills: ['React', 'Performance', 'State Management', 'Testing', 'API integration'],
      category: 'Frontend Development',
      lessons: 36,
      provider: 'Frontend Masters',
    },
  };

  return courses[id] || null;
}

export function generateCourseMetadata(course: Course): Metadata {
  const title = `${course.title} | Course Platform`;
  const description = course.shortDescription;
  const keywords = ['course', 'learning', ...course.skills, course.category];
  
  return {
    title,
    description,
    keywords,
    authors: [{ name: course.instructor }],
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://course-platform.com/courses/${course.id}`,
      images: [
        {
          url: course.ogImage || `/api/og?title=${encodeURIComponent(course.title)}&instructor=${encodeURIComponent(course.instructor)}`,
          width: 1200,
          height: 630,
          alt: course.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [course.ogImage || `/api/og?title=${encodeURIComponent(course.title)}`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export function generateCourseSchema(course: Course) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.description,
    provider: {
      '@type': 'Organization',
      name: course.provider,
      sameAs: 'https://course-platform.com',
    },
    author: {
      '@type': 'Person',
      name: course.instructor,
    },
    educationalLevel: course.level,
    timeRequired: `PT${course.duration.split(' ')[0]}H`,
    dateModified: course.updatedAt,
    inLanguage: course.language,
    numberOfCredits: course.lessons,
    offers: {
      '@type': 'Offer',
      price: course.discountPrice || course.price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: `https://course-platform.com/courses/${course.id}`,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: course.rating,
      ratingCount: course.totalStudents,
      bestRating: '5',
      worstRating: '1',
    },
  };
}