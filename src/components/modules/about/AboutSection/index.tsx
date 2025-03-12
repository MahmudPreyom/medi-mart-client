// import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <section className="w-full py-16 bg-gray-100 flex flex-col items-center text-center">
      {/* Company Background */}
      <div className="max-w-3xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Story
        </h2>
        <p className="mt-4 text-gray-700 text-lg">
          Founded with a vision to make healthcare more accessible, our journey
          began with a simple mission: ensuring that everyone has access to
          genuine medicines at their doorstep. Our founders, passionate about
          revolutionizing the pharmaceutical industry, embarked on this mission
          to bridge the gap between healthcare providers and patients.
        </p>
      </div>

      {/* Timeline */}
      <div className="mt-8 w-full max-w-4xl px-4">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-blue-600">
              2015 - The Beginning
            </h3>
            <p className="mt-2 text-gray-600">
              We started with a small team determined to make medicine more
              accessible online.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-blue-600">
              2018 - Expansion
            </h3>
            <p className="mt-2 text-gray-600">
              Expanded our services nationwide, serving thousands of customers
              daily.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-blue-600">
              2021 - Innovation
            </h3>
            <p className="mt-2 text-gray-600">
              Launched our mobile app to ensure even easier access to
              medications.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-blue-600">
              2024 - Trusted by Millions
            </h3>
            <p className="mt-2 text-gray-600">
              Today, we serve millions of customers, staying committed to our
              mission.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      {/* <div className="mt-8">
        <Button className="text-lg" variant="default">
          Learn More
        </Button>
      </div> */}
    </section>
  );
}
