/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState, useEffect } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Trash2, UploadIcon } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";
import { getAllMedicine, deleteMedicine } from "@/services/medicine";

const AllProducts = () => {
  const [medicines, setMedicines] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        const data = await getAllMedicine();
        setMedicines(data?.data || []);
        toast.success("Medicines loaded successfully!");
      } catch (err: any) {
        setError("Failed to load medicines");
        toast.error("Error loading medicines!");
      } finally {
        setLoading(false);
      }
    };

    fetchMedicines();
  }, []);

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this medicine?");
    if (!confirmDelete) return;

    try {
      await deleteMedicine(id);
      setMedicines((prev) => prev.filter((medicine) => medicine._id !== id));
      toast.success("Medicine deleted successfully!");
    } catch (error: any) {
      toast.error("Failed to delete medicine.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {(medicines as any)?.map((medicine: any, index: number) => (
        <Card
          key={medicine._id || index}
          className="w-full max-w-sm border rounded-xl shadow-lg"
        >
          <CardContent className="p-4 flex flex-col items-center">
            <Image
              src={medicine.image ? medicine.image : "/placeholder-image.jpg"}
              alt={medicine.name}
              width={150}
              height={150}
              className="rounded-md object-cover"
            />
            <h2 className="text-lg font-semibold mt-2">{medicine.name}</h2>
            <p className="text-sm text-gray-500">Company: {medicine.company}</p>
            <p className="text-sm text-gray-500">
              Expiry Date:{" "}
              {new Date(medicine.expiryDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="text-lg font-bold text-blue-600">${medicine.price}</p>
            <Badge
              className={`mt-2 ${
                medicine.inStock ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {medicine.inStock ? "In Stock" : "Out of Stock"}
            </Badge>
            {medicine.prescriptionRequired && (
              <Badge className="mt-2 bg-yellow-500">
                Prescription Required
              </Badge>
            )}
          </CardContent>
          <CardFooter className="flex justify-between p-4">
            <Link href={`/shop/${medicine._id}`}>
              <Button variant="outline">Details</Button>
            </Link>

            <Button variant="outline" onClick={() => handleDelete(medicine._id)}>
              <Trash2 className="w-4 h-4 mr-2" />
              Delete
            </Button>

            <Link href={`/admin/medicine/all-products/${medicine._id}`}>
              <Button variant="default">
                <UploadIcon className="w-4 h-4 mr-2" /> Update
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default AllProducts;
