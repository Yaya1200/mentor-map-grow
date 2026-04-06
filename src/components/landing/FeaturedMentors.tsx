import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Video, MessageCircle, MapPin } from "lucide-react";

const mentors = [
  {
    name: "Sarah Chen",
    initials: "SC",
    title: "Senior Frontend Developer",
    skills: ["React", "TypeScript", "CSS"],
    rating: 4.9,
    reviews: 128,
    rate: "$35/hr",
    types: ["video", "chat"],
    color: "from-primary to-primary-glow",
  },
  {
    name: "Marcus Johnson",
    initials: "MJ",
    title: "UX Design Lead",
    skills: ["Figma", "User Research", "Prototyping"],
    rating: 5.0,
    reviews: 96,
    rate: "$45/hr",
    types: ["video", "in-person"],
    color: "from-accent to-orange-400",
  },
  {
    name: "Aisha Patel",
    initials: "AP",
    title: "Data Scientist",
    skills: ["Python", "Machine Learning", "SQL"],
    rating: 4.8,
    reviews: 74,
    rate: "$40/hr",
    types: ["video", "chat"],
    color: "from-emerald-500 to-teal-500",
  },
];

const typeIcons: Record<string, React.ReactNode> = {
  video: <Video className="w-3.5 h-3.5" />,
  chat: <MessageCircle className="w-3.5 h-3.5" />,
  "in-person": <MapPin className="w-3.5 h-3.5" />,
};

const FeaturedMentors = () => {
  return (
    <section id="mentors" className="py-20 md:py-28 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Featured Mentors</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Learn from the best in the community
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {mentors.map((mentor) => (
            <div
              key={mentor.name}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${mentor.color} flex items-center justify-center text-lg font-bold text-primary-foreground`}>
                  {mentor.initials}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{mentor.name}</h3>
                  <p className="text-sm text-muted-foreground">{mentor.title}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {mentor.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs font-medium">
                    {skill}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-accent fill-accent" />
                  <span className="text-sm font-semibold text-foreground">{mentor.rating}</span>
                  <span className="text-xs text-muted-foreground">({mentor.reviews})</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  {mentor.types.map((t) => (
                    <span key={t} title={t}>{typeIcons[t]}</span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-foreground">{mentor.rate}</span>
                <Button size="sm" className="bg-gradient-primary text-primary-foreground hover:opacity-90">
                  Book Session
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="text-base">
            Browse All Mentors
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMentors;
