"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation"; 
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { getSingleMedicine } from "@/services/medicine";
import { MedicineData } from "@/types/medicine";
import { ShoppingCart, ArrowLeft } from "lucide-react"; 
import { Button } from "@/components/ui/button";

const MedicineDetails = () => {
  const { id } = useParams();
  const [medicine, setMedicine] = useState<MedicineData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter(); 

  useEffect(() => {
    if (!id) return;
    const fetchMedicine = async () => {
      try {
        const data = await getSingleMedicine(id as string);
        setMedicine(data.data);
      } catch (error) {
        console.error("Error fetching medicine:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMedicine();
  }, [id]);

  const handleAddToCart = () => {
    // Logic to add the medicine to the cart
    console.log("Added to cart:", medicine?.name);
  };

  const handleGoBack = () => {
    router.back(); 
  };

  if (loading) {
    return (
      <div className="flex justify-center mt-10">
        <Skeleton className="w-96 h-40 rounded-lg" />
      </div>
    );
  }

  if (!medicine) {
    return (
      <p className="text-center text-red-500 mt-10">Medicine not found.</p>
    );
  }

  return (
    <div className="flex justify-center mt-10">
      <Card className="w-96 shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">
            {medicine.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          {medicine.image && (
            <Image
              src={medicine.image}
              alt={medicine.name}
              width={300}
              height={200}
              className="rounded-md mb-4"
            />
          )}
          <p className="text-gray-600">Details: {medicine.description}</p>
          <p className="text-sm text-gray-500">
            Expiry Date:{" "}
            {new Date(medicine.expiryDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className="mt-2 font-semibold">Price: ${medicine.price}</p>
          <p
            className={`mt-1 text-sm ${
              medicine.prescriptionRequired
                ? "text-orange-500 font-semibold"
                : "text-gray-500"
            }`}
          >
            Prescription Required:{" "}
            {medicine.prescriptionRequired ? "Yes" : "No"}
          </p>
          <p className="mt-1 text-sm text-gray-500">
            Manufacturer: {medicine.company}
          </p>
          <p className="mt-1 text-sm text-gray-500">
            Manufacturer: {medicine.manufacturerDetails}
          </p>

          {/* Add to Cart Button */}
          <div className="flex gap-5">
            <Button
              onClick={handleAddToCart}
              className="mt-4 bg-blue-500 text-white p-2 rounded-md flex items-center space-x-2"
            >
              <ShoppingCart size={18} /> {/* Shopping Cart Icon */}
              <span>Add to Cart</span>
            </Button>

            {/* Back Button */}
            <Button
              onClick={handleGoBack}
              className="mt-4 bg-blue-400 text-white p-2 rounded-md flex items-center space-x-2"
            >
              <ArrowLeft size={18} /> {/* Back Arrow Icon */}
              <span>Back</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MedicineDetails;
