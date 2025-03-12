// import { Button } from "@/components/ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[400px] md:min-h-[500px] flex items-center justify-center bg-gray-100">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://i.ibb.co.com/jP0725Dn/Generic-Healthcare-Photo-e5d7-1589311525.png"
          alt="Healthcare Banner"
          width={1200}
          height={500}
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white p-6 bg-black bg-opacity-50 rounded-lg max-w-md md:max-w-lg">
        <h1 className="text-3xl md:text-4xl font-bold">
          Your Trusted Online Pharmacy
        </h1>
        <p className="mt-2 text-base md:text-lg">
          Ensuring easy access to genuine medicines at your doorstep.
        </p>
        {/* <Button className="mt-4 text-base md:text-lg" variant="default">
          Shop Now
        </Button> */}
      </div>
    </section>
  );
};

export default HeroSection;
