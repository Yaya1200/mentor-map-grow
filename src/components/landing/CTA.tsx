import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl bg-gradient-primary p-12 md:p-20 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(168_70%_60%/0.3),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,hsl(30_80%_55%/0.15),transparent_60%)]" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Ready to start your learning journey?
            </h2>
            <p className="text-lg text-primary-foreground/80">
              Join thousands of learners and mentors already sharing skills on SkillSwap. It's free to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-base px-8 font-semibold">
                Sign Up Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="ghost" className="text-base px-8 text-primary-foreground border-primary-foreground/30 border hover:bg-primary-foreground/10">
                Become a Mentor
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
