import { Card } from "@/components/ui/card";

export default function OfferSection() {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Online Medicine Ordering System Card */}
          <Card className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Online Medicine Ordering System
            </h3>
            <p className="text-gray-600">
              Order your medicines online easily and have them delivered to your
              door.
            </p>
          </Card>

          {/* Prescription-Based Medicine Fulfillment Card */}
          <Card className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Prescription-Based Medicine Fulfillment
            </h3>
            <p className="text-gray-600">
              Upload your prescription and receive the correct medicine
              promptly.
            </p>
          </Card>

          {/* Fast Delivery & Easy Returns Card */}
          <Card className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Fast Delivery & Easy Returns
            </h3>
            <p className="text-gray-600">
              Get your medicines delivered quickly and return them hassle-free
              if necessary.
            </p>
          </Card>

          {/* 24/7 Customer Support Card */}
          <Card className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              24/7 Customer Support
            </h3>
            <p className="text-gray-600">
              Our support team is available around the clock to assist you with
              any queries.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
