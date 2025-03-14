import { Card } from "@/components/ui/card";
import { Users, ShieldCheck, DollarSign } from "lucide-react"; // Import relevant icons from lucide-react

export default function ChoosingUs() {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Free Consultation Card */}
          <Card className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
            <div className="flex items-center mb-4">
              <Users className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">
                Free Consultation with Certified Pharmacists
              </h3>
            </div>
            <p className="text-gray-600">
              Get expert advice from certified pharmacists, free of charge, to
              make informed decisions about your health.
            </p>
          </Card>

          {/* Authentic & Verified Medicines Card */}
          <Card className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
            <div className="flex items-center mb-4">
              <ShieldCheck className="w-8 h-8 text-green-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">
                100% Authentic & Verified Medicines
              </h3>
            </div>
            <p className="text-gray-600">
              We ensure that all medicines are genuine and sourced from trusted
              manufacturers.
            </p>
          </Card>

          {/* Competitive Pricing & Discounts Card */}
          <Card className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
            <div className="flex items-center mb-4">
              <DollarSign className="w-8 h-8 text-yellow-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">
                Competitive Pricing & Discounts
              </h3>
            </div>
            <p className="text-gray-600">
              Enjoy affordable prices and exclusive discounts on your favorite
              medicines and health products.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
