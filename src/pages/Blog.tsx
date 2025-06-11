
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const blogPosts = [
    {
      title: "5 Simple Pilates Exercises to Alleviate Desk-Related Back Pain",
      summary: "If you spend hours at a desk, your back is paying the price. Discover five gentle, effective Pilates movements you can do to strengthen your core, release tension, and improve your posture.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      date: "March 15, 2024",
      readTime: "5 min read"
    },
    {
      title: "Why Balance is a Superpower: How Pilates Helps Seniors Stay Stable and Confident",
      summary: "As we age, maintaining balance becomes crucial for preventing falls and staying independent. Learn how the specific principles of Pilates directly improve stability, proprioception, and confidence on your feet.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      date: "March 8, 2024",
      readTime: "7 min read"
    },
    {
      title: "New to Pilates? 5 Things to Expect in Your First Class",
      summary: "Feeling a little nervous about your first Pilates class? Don't be! From the lingo to the focus on breath, we break down everything a beginner needs to know to walk into their first session with confidence.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      date: "March 1, 2024",
      readTime: "4 min read"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Your Resource for <span className="text-primary">Mindful Movement</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Explore our articles for tips, insights, and inspiration to support your wellness journey 
            both inside and outside the studio.
          </p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 bg-card">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                </div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="font-heading text-xl font-semibold text-foreground leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {post.summary}
                  </p>
                  <Button variant="outline" size="sm" className="rounded-full">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
