
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-b from-secondary to-white min-h-screen pt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between pt-12 lg:pt-24">
          <div className="lg:w-1/2 animate-fade-up">
            <div className="mb-8">
              <h2 className="text-sm font-semibold text-primary mb-4 tracking-wider">
                GET QUALITY AUTO FINANCE LEADS TODAY
              </h2>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                LEADS YOU CAN TRUST
              </h1>
              <p className="text-gray-600 text-lg mb-8 max-w-lg">
                Receive real time, exclusive, high quality, local auto loans leads with one of our monthly or yearly subscription packages.
              </p>
              <Button size="lg" className="animate-fade-up">
                Get Started
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0 animate-slide-in">
            <img
              src="/placeholder.svg"
              alt="Premium vehicle"
              className="w-full h-auto object-cover rounded-lg shadow-2xl"
              style={{ maxWidth: "600px" }}
            />
          </div>
        </div>
      </div>
      
      {/* Curved bottom edge */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 100L60 91.7C120 83.3 240 66.7 360 58.3C480 50 600 50 720 54.2C840 58.3 960 66.7 1080 70.8C1200 75 1320 75 1380 75L1440 75V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V100Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};
