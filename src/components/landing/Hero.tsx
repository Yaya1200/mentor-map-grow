import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star, Users } from "lucide-react";
import heroImage from "@/assets/hero-illustration.jpg";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-warm" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Star className="w-4 h-4 fill-current" />
              <span>Trusted by 10,000+ learners worldwide</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground">
              Learn Any Skill from{" "}
              <span className="text-gradient">Real People</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Connect with expert mentors, book live sessions, and master new skills
              through personalized peer-to-peer learning. Video calls, chat, or in-person.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-glow text-base px-8">
                Start Learning
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <span><strong className="text-foreground">5,000+</strong> Mentors</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-accent fill-accent" />
                <span><strong className="text-foreground">4.9</strong> Avg Rating</span>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img src={heroImage} alt="People collaborating and sharing skills" className="w-full h-auto" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-4 -left-4 bg-card rounded-xl p-4 shadow-elevated animate-fade-up" style={{ animationDelay: "0.6s", opacity: 0 }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm">JS</div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Session Booked!</p>
                  <p className="text-xs text-muted-foreground">JavaScript Basics • 2pm Today</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
