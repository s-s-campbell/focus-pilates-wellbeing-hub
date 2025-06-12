import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import FloatingBookButton from '@/components/FloatingBookButton';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogPosts = [
    {
      title: "5 Simple Pilates Exercises to Alleviate Desk-Related Back Pain",
      summary: "If you spend hours at a desk, your back is paying the price. Discover five gentle, effective Pilates movements you can do to strengthen your core, release tension, and improve your posture.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      date: "March 15, 2024",
      readTime: "5 min read",
      slug: "desk-back-pain-exercises"
    },
    {
      title: "Why Balance is a Superpower: How Pilates Helps Seniors Stay Stable and Confident",
      summary: "As we age, maintaining balance becomes crucial for preventing falls and staying independent. Learn how the specific principles of Pilates directly improve stability, proprioception, and confidence on your feet.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      date: "March 8, 2024",
      readTime: "7 min read",
      slug: "pilates-balance-seniors"
    },
    {
      title: "New to Pilates? 5 Things to Expect in Your First Class",
      summary: "Feeling a little nervous about your first Pilates class? Don't be! From the lingo to the focus on breath, we break down everything a beginner needs to know to walk into their first session with confidence.",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      date: "March 1, 2024",
      readTime: "4 min read",
      slug: "first-pilates-class-guide"
    }
  ];

  return (
    <div className="min-h-screen mobile-scroll">
      <Navigation />
      
      {/* Hero Section */}
      <section className="mobile-section-spacing bg-muted/30">
        <div className="max-w-4xl mx-auto mobile-container text-center">
          <h1 className="font-heading mobile-heading-optimize text-primary mb-4 sm:mb-6">
            Your Resource for <span className="text-primary">Mindful Movement</span>
          </h1>
          <p className="mobile-text-optimize text-muted-foreground max-w-3xl mx-auto">
            Explore our articles for tips, insights, and inspiration to support your wellness journey 
            both inside and outside the studio.
          </p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="mobile-section-spacing bg-background">
        <div className="max-w-6xl mx-auto mobile-container">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <Card key={index} className="group mobile-card hover:shadow-xl transition-all duration-300 overflow-hidden border-0 bg-card">
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                </div>
                
                <CardHeader className="pb-3 sm:pb-4 mobile-card-spacing">
                  <div className="flex items-center text-xs sm:text-sm text-muted-foreground mb-2">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="font-heading text-lg sm:text-xl font-semibold text-foreground leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0 mobile-card-spacing">
                  <p className="mobile-text-optimize text-muted-foreground mb-4">
                    {post.summary}
                  </p>
                  <Button asChild variant="outline" size="sm" className="rounded-full touch-target w-full sm:w-auto">
                    <Link to={`/blog/${post.slug}`}>Read More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingBookButton />
    </div>
  );
};

export default Blog;
