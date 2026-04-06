import { Search, CalendarCheck, Video, Star } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Find a Mentor",
    description: "Browse skills and filter by availability, rating, session type, and expertise level.",
  },
  {
    icon: CalendarCheck,
    title: "Book a Session",
    description: "Pick a time that works for you. Video call, chat, or in-person — your choice.",
  },
  {
    icon: Video,
    title: "Learn Together",
    description: "Join your session, interact in real-time, and get personalized guidance.",
  },
  {
    icon: Star,
    title: "Rate & Grow",
    description: "Leave feedback, track your progress, and unlock new skills over time.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">How It Works</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Start learning in 4 simple steps
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="relative text-center group"
            >
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px border-t-2 border-dashed border-border" />
              )}
              <div className="relative z-10 w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-gradient-primary group-hover:shadow-glow transition-all duration-300">
                <step.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
