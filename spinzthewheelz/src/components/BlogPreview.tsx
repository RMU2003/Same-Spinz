import React from 'react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '5 Ways a Decision Wheel Can Improve Your Daily Choices',
    excerpt: 'Discover how using a decision wheel like SpinzTheWheelz can help reduce decision fatigue and make your daily choices easier.',
    slug: '5-ways-decision-wheel-improves-daily-choices',
    date: 'May 20, 2025',
    readTime: '4 min read'
  },
  {
    id: '2',
    title: 'The Psychology Behind Yes/No Decisions: When to Trust the Wheel',
    excerpt: 'Learn about the psychology of decision-making and how random choice tools can help break decision paralysis.',
    slug: 'psychology-behind-yes-no-decisions',
    date: 'May 18, 2025',
    readTime: '6 min read'
  },
  {
    id: '3',
    title: 'How to Use Decision Wheels for Team Decision Making',
    excerpt: 'Explore how random decision tools can remove bias and make team decisions more fair and effective.',
    slug: 'decision-wheels-for-team-decision-making',
    date: 'May 15, 2025',
    readTime: '5 min read'
  }
];

const BlogPreview: React.FC = () => {
  return (
    <div className="mt-16 bg-cardBg rounded-lg shadow-sm p-6 transition-colors duration-300">
      <h2 className="text-xl font-bold mb-6 text-foreground">Decision Making Blog</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map(post => (
          <article key={post.id} className="bg-background border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden transition-colors">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                <a href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                  {post.title}
                </a>
              </h3>
              <p className="text-muted text-sm mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center text-xs text-muted">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 text-center">
        <a
          href="/blog"
          className="inline-block px-6 py-2 bg-primary hover:bg-secondary text-white rounded-full transition-colors text-sm font-medium"
        >
          Read More Articles
        </a>
      </div>
    </div>
  );
};

export default BlogPreview;
