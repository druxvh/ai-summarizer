import { Card, CardContent } from "@/components/ui/card";
import { Zap, Users, Shield, Gift } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Processing",
    description: "Paste your notes and get formatted bullet points in seconds. Clean, organized results every time.",
    highlight: "Lightning Fast"
  },
  {
    icon: Gift,
    title: "Always Free",
    description: "No hidden costs, no premium plans, no credit card required. Great tools should be accessible to everyone.",
    highlight: "Zero Cost"
  },
  {
    icon: Users,
    title: "No Signup",
    description: "Start using immediately without accounts or registration. Just paste your notes and go.",
    highlight: "Zero Friction"
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your notes are processed securely and never stored. Complete privacy guaranteed.",
    highlight: "Private & Safe"
  }
];

const Features = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up transition-opacity duration-1000 ease-out">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Why Choose Quick Summarizer
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Simple, fast, and effective note organization without the complexity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-card border border-border/50 shadow-sm transform transition-all duration-300 ease-in-out hover:shadow-md hover:-translate-y-1 hover:scale-[1.02] animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "both" }}
            >
              <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
                <div className="bg-foreground rounded-full w-14 h-14 lg:w-16 lg:h-16 flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110">
                  <feature.icon className="w-7 h-7 lg:w-8 lg:h-8 text-background" />
                </div>

                <div className="text-foreground/70 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                  {feature.highlight}
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">
                  {feature.title}
                </h3>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
