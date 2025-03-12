import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";

const dummyMedicine = {
  name: "Paracetamol",
  company: "ABC Pharma",
  image: "https://i.ibb.co.com/kgcp8TmK/Adobe-Express-file.webp",
  price: 10,
  inStock: true,
  prescriptionRequired: false,
};

export default function AllMedicinePage() {
  return (
    <Card className="w-full max-w-sm border rounded-xl shadow-lg">
      <CardContent className="p-4 flex flex-col items-center">
        <Image
          src={dummyMedicine.image}
          alt={dummyMedicine.name}
          width={150}
          height={150}
          className="rounded-md object-cover"
        />
        <h2 className="text-lg font-semibold mt-2">{dummyMedicine.name}</h2>
        <p className="text-sm text-gray-500">{dummyMedicine.company}</p>
        <p className="text-lg font-bold text-blue-600">
          ${dummyMedicine.price}
        </p>
        <Badge
          className={`mt-2 ${
            dummyMedicine.inStock ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {dummyMedicine.inStock ? "In Stock" : "Out of Stock"}
        </Badge>
        {dummyMedicine.prescriptionRequired && (
          <Badge className="mt-2 bg-yellow-500">Prescription Required</Badge>
        )}
      </CardContent>
      <CardFooter className="flex justify-between p-4">
        <Button variant="outline">Details</Button>
        <Button variant="default" disabled={!dummyMedicine.inStock}>
          <ShoppingCart className="w-4 h-4 mr-2" /> Buy Now
        </Button>
      </CardFooter>
    </Card>
  );
}

// const AllMedicinePage = () => {
//   return (
//     <div>
//       <h1>This is All Medicine page</h1>
//     </div>
//   );
// };

// export default AllMedicinePage;
