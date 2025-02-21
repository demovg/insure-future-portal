
import { Clock, Target, Award, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "RECEIVE IN REAL TIME",
    description: "Get instant access to new leads as they come in",
  },
  {
    icon: Target,
    title: "EXCLUSIVE LEAD",
    description: "Unique leads available only to you",
  },
  {
    icon: Award,
    title: "HIGH QUALITY",
    description: "Verified and qualified leads for better conversion",
  },
  {
    icon: TrendingUp,
    title: "15% CONVERSION RATE",
    description: "Industry-leading conversion rates",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-lg transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
