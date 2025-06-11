
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

const FirstPilatesClassGuide = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost" size="sm" className="mb-6">
            <Link to="/blog" className="flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
          
          <div className="flex items-center text-sm text-muted-foreground mb-4">
            <Calendar className="w-4 h-4 mr-2" />
            <span>March 1, 2024</span>
            <span className="mx-2">•</span>
            <Clock className="w-4 h-4 mr-2" />
            <span>4 min read</span>
          </div>
          
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
            New to Pilates? 5 Things to Expect in Your First Class
          </h1>
          
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden mb-8">
            <img 
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="First time Pilates class"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Feeling a little nervous about your first Pilates class? Don't be! From the lingo to the focus on breath, we break down everything a beginner needs to know to walk into their first session with confidence.
            </p>
            
            <p className="mb-6">
              Taking your first Pilates class is an exciting step toward better health and wellness. Like any new experience, it's natural to feel a mix of anticipation and uncertainty. The good news is that Pilates is incredibly welcoming to beginners, and instructors are trained to help you feel comfortable from the moment you walk in.
            </p>

            <h2 className="font-heading text-2xl font-bold text-primary mt-8 mb-4">1. You'll Learn About Breathing (And It's More Important Than You Think)</h2>
            
            <p className="mb-6">
              One of the first things you'll notice in Pilates is the emphasis on breathing. This isn't just about relaxation—proper breathing is fundamental to every Pilates movement. You'll learn about "lateral breathing," where you breathe into your ribcage rather than pushing your belly out.
            </p>
            
            <p className="mb-6">
              <strong>What to expect:</strong> Your instructor will guide you through breathing exercises at the beginning of class. Don't worry if it feels awkward at first—everyone starts here, and it becomes second nature with practice.
            </p>

            <h2 className="font-heading text-2xl font-bold text-primary mt-8 mb-4">2. You'll Discover Muscles You Didn't Know You Had</h2>
            
            <p className="mb-6">
              Pilates is famous for targeting deep stabilizing muscles, particularly in your core. You might find yourself working muscles that rarely get attention in other forms of exercise. This is especially true for the deep abdominal muscles, the muscles between your shoulder blades, and small stabilizers throughout your body.
            </p>
            
            <p className="mb-6">
              <strong>What to expect:</strong> You might feel a gentle burning sensation in muscles you've never felt before. This is completely normal and actually a sign that you're working the right muscles. Don't worry—the intensity is always manageable for beginners.
            </p>

            <h2 className="font-heading text-2xl font-bold text-primary mt-8 mb-4">3. Precision Matters More Than Power</h2>
            
            <p className="mb-6">
              If you're coming from other fitness backgrounds, you might be surprised by how much attention is paid to the quality of each movement. In Pilates, doing five perfect repetitions is much more valuable than doing twenty sloppy ones.
            </p>
            
            <p className="mb-6">
              <strong>What to expect:</strong> Your instructor will give you detailed cues about alignment, engagement, and movement quality. You'll move slowly and deliberately, which can be surprisingly challenging even for fit individuals.
            </p>

            <h2 className="font-heading text-2xl font-bold text-primary mt-8 mb-4">4. Modifications Are Normal and Encouraged</h2>
            
            <p className="mb-6">
              Every body is different, and every person comes to Pilates with different strengths, limitations, and goals. Good instructors will offer modifications for virtually every exercise, ensuring that everyone can participate safely and effectively.
            </p>
            
            <p className="mb-6">
              <strong>What to expect:</strong> Don't hesitate to ask for modifications if something doesn't feel right. Your instructor would much rather you do a modified version correctly than struggle with something that's not appropriate for your current level.
            </p>

            <h2 className="font-heading text-2xl font-bold text-primary mt-8 mb-4">5. You'll Leave Feeling Energized, Not Exhausted</h2>
            
            <p className="mb-6">
              Unlike some forms of exercise that leave you feeling drained, Pilates typically leaves people feeling energized and refreshed. This is partly due to the focus on alignment and breathing, which can help release tension and improve circulation.
            </p>
            
            <p className="mb-6">
              <strong>What to expect:</strong> You might notice improved posture immediately after class, and many people report feeling taller and more aligned. Some gentle muscle fatigue is normal, but you shouldn't feel completely wiped out.
            </p>

            <h2 className="font-heading text-2xl font-bold text-primary mt-8 mb-4">Preparing for Your First Class</h2>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">What to Wear</h3>
            <p className="mb-4">
              Comfortable, fitted clothing that allows you to move freely is best. Avoid loose shirts that might fall over your head during inversions. Most Pilates is done barefoot or in grip socks.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">What to Bring</h3>
            <p className="mb-4">
              Most studios provide all necessary equipment. Just bring water and an open mind. If you have any injuries or health concerns, make sure to mention them to your instructor before class begins.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Arriving Early</h3>
            <p className="mb-6">
              Plan to arrive 10-15 minutes early for your first class. This gives you time to complete any paperwork, meet your instructor, and get familiar with the studio space.
            </p>

            <h2 className="font-heading text-2xl font-bold text-primary mt-8 mb-4">After Your First Class</h2>
            
            <p className="mb-6">
              It's completely normal if you don't "get" everything in your first class. Pilates has a learning curve, and the mind-body connection that experienced practitioners talk about develops over time. Focus on how you feel rather than how you performed.
            </p>
            
            <p className="mb-6">
              Most people find that the benefits become more apparent after 3-4 sessions, as your body begins to understand the movement patterns and your strength starts to build.
            </p>

            <div className="bg-muted/50 p-6 rounded-lg mt-8">
              <h3 className="font-heading text-lg font-semibold text-primary mb-3">Ready to Take the Plunge?</h3>
              <p className="mb-4">
                Remember, everyone in that room was a beginner once. At Pilates in Focus, we pride ourselves on creating a welcoming, supportive environment where you can learn and grow at your own pace. Your Pilates journey starts with a single class—why not make today that day?
              </p>
              <Button asChild>
                <Link to="/contact">Book Your First Class</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FirstPilatesClassGuide;
