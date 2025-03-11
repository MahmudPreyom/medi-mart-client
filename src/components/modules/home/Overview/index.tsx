import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ShoppingCart, Store } from "lucide-react";
import Image from "next/image";
import image from "../../../../assets/images (1).png";

const shopOverview = {
  name: "MediMart Pharmacy",
  description:
    "Your trusted online medicine store, offering quality and affordable medicines.",
  image: image,
};

const medicineCategories = {
  "Fever & Pain Relief": [
    {
      name: "Paracetamol",
      description: "Used for fever and mild to moderate pain relief.",
      image: "https://i.ibb.co.com/kgcp8TmK/Adobe-Express-file.webp",
    },
    {
      name: "Ibuprofen",
      description: "Reduces inflammation and pain.",
      image: "https://i.ibb.co.com/zT8SyQ1b/Ibuprofen-600mg.jpg",
    },
  ],
  "Allergy & Skin Reactions": [
    {
      name: "Cetirizine",
      description: "Relieves allergy symptoms like runny nose and itching.",
      image: "https://i.ibb.co.com/pBY7fNLM/Adobe-Express-file-5.png",
    },
  ],
  "Infections & Antibiotics": [
    {
      name: "Amoxicillin",
      description: "Treats bacterial infections like pneumonia and bronchitis.",
      image: "https://i.ibb.co.com/qYgHZXd2/Adobe-Express-file-4.png",
    },
  ],
  "Digestive Health": [
    {
      name: "Omeprazole",
      description: "Reduces stomach acid and treats heartburn.",
      image: "https://i.ibb.co.com/mC99rpVh/Adobe-Express-file-3.png",
    },
  ],
};

export default function Overview() {
  return (
    <div className="p-6">
      <div className="bg-blue-100 p-6 rounded-lg flex items-center gap-4 mb-6">
        <Image
          src={shopOverview.image}
          alt={shopOverview.name}
          width={80}
          height={80}
          className="rounded-md"
        />
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Store size={24} /> {shopOverview.name}
          </h1>
          <p className="text-gray-600">{shopOverview.description}</p>
        </div>
      </div>

      <h2 className="text-4xl font-semibold mb-4 flex justify-center">
        Featured Medicines
      </h2>
      <Tabs defaultValue="Fever & Pain Relief" className="w-full">
        <div className="flex justify-center">
          <TabsList className="md:flex grid grid-cols-1 md:mb-0 mb-40 space-x-4 py-5">
            {Object.keys(medicineCategories).map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="px-4 py-2 bg-blue-200 rounded-md md:mb-0 mb-4"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        {Object.entries(medicineCategories).map(([category, medicines]) => (
          <TabsContent
            key={category}
            value={category}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4"
          >
            {medicines.map((medicine, index) => (
              <Card key={index} className="shadow-lg">
                <CardHeader>
                  <Image
                    src={medicine.image}
                    alt={medicine.name}
                    width={500}
                    height={100}
                    className="rounded-md object-cover"
                  />
                  <CardTitle className="text-lg mt-2">
                    {medicine.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    {medicine.description}
                  </p>
                  <Button className="mt-4 flex items-center gap-2">
                    <ShoppingCart size={16} /> Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
