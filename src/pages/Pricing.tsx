
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingPlans = [
  {
    name: "Basic",
    price: "$99",
    period: "/month",
    description: "Perfect for smaller dealerships",
    features: [
      "100 leads per month",
      "Basic lead filtering",
      "Email support",
      "Basic analytics",
    ],
  },
  {
    name: "Professional",
    price: "$199",
    period: "/month",
    description: "Ideal for growing dealerships",
    features: [
      "300 leads per month",
      "Advanced lead filtering",
      "Priority email & phone support",
      "Advanced analytics",
      "Custom territory selection",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$399",
    period: "/month",
    description: "For large dealership networks",
    features: [
      "Unlimited leads",
      "Premium lead filtering",
      "24/7 dedicated support",
      "Advanced analytics & reporting",
      "Custom territory selection",
      "API access",
    ],
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl font-bold mb-4">Choose Your Plan</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select the perfect plan for your dealership. All plans include access to our premium auto loan leads platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-lg ${
                plan.popular
                  ? "bg-primary text-white shadow-xl scale-105"
                  : "bg-white border border-gray-200"
              } animate-fade-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent text-white px-3 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p
                  className={`text-sm mb-4 ${
                    plan.popular ? "text-gray-100" : "text-gray-600"
                  }`}
                >
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-sm">{plan.period}</span>
                </div>

                <Button
                  variant={plan.popular ? "secondary" : "default"}
                  className="w-full mb-6"
                >
                  Get Started
                </Button>

                <ul className="space-y-4 text-left">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check
                        className={`w-5 h-5 mr-2 ${
                          plan.popular ? "text-white" : "text-primary"
                        }`}
                      />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
