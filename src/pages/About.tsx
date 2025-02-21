
import { Users, Award, Shield, Globe } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "10K+",
    label: "Active Users",
  },
  {
    icon: Award,
    value: "15%",
    label: "Conversion Rate",
  },
  {
    icon: Shield,
    value: "99.9%",
    label: "Data Accuracy",
  },
  {
    icon: Globe,
    value: "24/7",
    label: "Support",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h1 className="text-4xl font-bold mb-6">About AutoLoan.ca</h1>
            <p className="text-gray-600 text-lg">
              We're revolutionizing the way auto dealerships connect with qualified buyers.
            </p>
          </div>

          <div className="prose prose-lg mx-auto mb-16 animate-fade-up">
            <p className="text-gray-600">
              Founded in 2020, AutoLoan.ca has quickly become Canada's leading
              platform for connecting auto dealerships with qualified auto loan
              leads. Our mission is to streamline the auto financing process,
              making it easier for dealerships to find and convert potential
              buyers.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-lg bg-secondary animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
