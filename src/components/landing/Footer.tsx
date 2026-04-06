import { BookOpen } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold text-foreground">SkillSwap</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The peer-to-peer platform where anyone can teach and learn new skills.
            </p>
          </div>

          {[
            { title: "Platform", links: ["Find Mentors", "Become a Mentor", "Browse Skills", "Pricing"] },
            { title: "Company", links: ["About Us", "Careers", "Blog", "Contact"] },
            { title: "Support", links: ["Help Center", "Safety", "Terms of Service", "Privacy Policy"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold text-foreground mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          © 2026 SkillSwap. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
