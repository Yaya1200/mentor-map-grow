import { Video, MessageCircle, CalendarDays, BarChart3, Shield, Users, Sparkles, Bell } from "lucide-react";

const features = [
  { icon: Video, title: "Live Video Sessions", description: "HD video calls with screen sharing for immersive learning." },
  { icon: MessageCircle, title: "Real-Time Chat", description: "Instant messaging with mentors before, during, and after sessions." },
  { icon: CalendarDays, title: "Smart Scheduling", description: "Book sessions that fit your schedule with automatic reminders." },
  { icon: Sparkles, title: "AI-Powered Matching", description: "Get matched with the perfect mentor based on your goals and style." },
  { icon: Users, title: "Group Workshops", description: "Join collaborative sessions with multiple learners for shared growth." },
  { icon: BarChart3, title: "Progress Dashboard", description: "Track your learning journey with detailed analytics and milestones." },
  { icon: Shield, title: "Safe & Moderated", description: "Privacy controls, reporting tools, and moderated interactions." },
  { icon: Bell, title: "Smart Notifications", description: "Never miss a session with timely reminders across all devices." },
];

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Features</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Everything you need to learn & teach
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-card bg-card transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-gradient-primary group-hover:shadow-glow transition-all duration-300">
                <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
