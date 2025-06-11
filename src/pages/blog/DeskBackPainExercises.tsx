
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

const DeskBackPainExercises = () => {
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
            <span>March 15, 2024</span>
            <span className="mx-2">•</span>
            <Clock className="w-4 h-4 mr-2" />
            <span>5 min read</span>
          </div>
          
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
            5 Simple Pilates Exercises to Alleviate Desk-Related Back Pain
          </h1>
          
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden mb-8">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Person doing Pilates exercises"
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
              If you spend hours at a desk, your back is paying the price. Discover five gentle, effective Pilates movements you can do to strengthen your core, release tension, and improve your posture.
            </p>
            
            <p className="mb-6">
              The modern workplace has created an epidemic of back pain. Sitting for extended periods, hunching over computers, and maintaining poor posture throughout the day puts enormous strain on our spine and surrounding muscles. The good news? Pilates offers targeted solutions that can provide relief and prevention.
            </p>

            <h2 className="font-heading text-2xl font-bold text-primary mt-8 mb-4">Why Desk Work Hurts Your Back</h2>
            
            <p className="mb-6">
              When we sit for long periods, several things happen to our body:
            </p>
            
            <ul className="mb-6 space-y-2">
              <li>Hip flexors tighten and pull on the lower back</li>
              <li>Core muscles weaken from lack of engagement</li>
              <li>Shoulders round forward, creating upper back tension</li>
              <li>The natural curve of the spine flattens</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-primary mt-8 mb-4">5 Pilates Exercises for Back Relief</h2>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">1. Cat-Cow Stretch</h3>
            <p className="mb-4">
              This gentle spinal mobility exercise helps restore the natural curves of your spine and releases tension throughout your back.
            </p>
            <p className="mb-6">
              <strong>How to do it:</strong> Start on hands and knees. Slowly arch your back, lifting your chest and tailbone (Cow). Then round your spine toward the ceiling, tucking your chin to chest (Cat). Repeat 8-10 times with deep breathing.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">2. Pelvic Tilts</h3>
            <p className="mb-4">
              This exercise strengthens your deep abdominal muscles while gently mobilizing your lower back.
            </p>
            <p className="mb-6">
              <strong>How to do it:</strong> Lie on your back with knees bent. Gently tilt your pelvis, pressing your lower back into the floor, then release. Focus on using your core muscles rather than your glutes. Repeat 10-15 times.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">3. Thoracic Extension</h3>
            <p className="mb-4">
              Perfect for counteracting the forward head posture common in desk workers.
            </p>
            <p className="mb-6">
              <strong>How to do it:</strong> Sit tall with hands behind your head. Gently extend your upper back, opening your chest and squeezing your shoulder blades together. Hold for 5 seconds, repeat 8-10 times.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">4. Single Leg Circles</h3>
            <p className="mb-4">
              This exercise helps release tight hip flexors while strengthening your core stabilizers.
            </p>
            <p className="mb-6">
              <strong>How to do it:</strong> Lie on your back, one leg extended on the floor, the other leg reaching toward the ceiling. Draw small circles with the raised leg, keeping your pelvis stable. 5 circles each direction, then switch legs.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">5. Modified Swan</h3>
            <p className="mb-4">
              Strengthens the muscles along your spine while improving posture.
            </p>
            <p className="mb-6">
              <strong>How to do it:</strong> Lie face down, forehead resting on your hands. Slowly lift your head and chest, using your back muscles. Keep your gaze down to protect your neck. Hold for 3-5 seconds, repeat 5-8 times.
            </p>

            <h2 className="font-heading text-2xl font-bold text-primary mt-8 mb-4">Making It Work for You</h2>
            
            <p className="mb-6">
              The key to success with these exercises is consistency. Try to perform this sequence once in the morning and once in the evening. You can even do modified versions of some exercises right at your desk during work breaks.
            </p>
            
            <p className="mb-6">
              Remember, if you're experiencing chronic or severe back pain, it's important to consult with a healthcare provider before beginning any exercise program. At Pilates in Focus, we specialize in working with individuals who have back concerns, offering modifications and progressions tailored to your specific needs.
            </p>

            <div className="bg-muted/50 p-6 rounded-lg mt-8">
              <h3 className="font-heading text-lg font-semibold text-primary mb-3">Ready to Take Your Practice Further?</h3>
              <p className="mb-4">
                These exercises are just the beginning. In our studio sessions, we can work together to develop a comprehensive program that addresses your specific postural challenges and strengthens your body from the inside out.
              </p>
              <Button asChild>
                <Link to="/contact">Schedule Your Session</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DeskBackPainExercises;
