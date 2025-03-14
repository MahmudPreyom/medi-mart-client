/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { updateMedicine, getSingleMedicine } from "@/services/medicine";
import { toast } from "sonner";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function MedicineUpdate() {
  const { id } = useParams();
  console.log(id);

  const medicineId = Array.isArray(id) ? id[0] : id;

  const form = useForm({
    defaultValues: {
      name: undefined,
      company: undefined,
      image: undefined,
      price: undefined,
      type: undefined,
      symptoms: undefined,
      description: undefined,
      manufacturerDetails: undefined,
      quantity: undefined,
      inStock: undefined,
      prescriptionRequired: undefined,
      expiryDate: undefined,
    },
  });

  useEffect(() => {
    if (medicineId) {
      getSingleMedicine(medicineId)
        .then((data) => {
          console.log("Fetched data:", data);
          if (data) {
            form.reset({
              name: data.name || undefined,
              company: data.company || undefined,
              image: data.image || undefined,
              price: data.price ?? undefined,
              type: data.type || undefined,
              symptoms: Array.isArray(data.symptoms)
                ? data.symptoms.join(", ")
                : data.symptoms || undefined,
              description: data.description || undefined,
              manufacturerDetails: data.manufacturerDetails || undefined,
              quantity: data.quantity ?? undefined,
              inStock: data.inStock ?? undefined,
              prescriptionRequired: data.prescriptionRequired ?? undefined,
              expiryDate: data.expiryDate || undefined,
            });
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [medicineId, form]);

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<any> = async (data) => {
    try {
      const formattedData: any = {
        ...data,
        symptoms: data.symptoms
          ? data.symptoms.split(",").map((s: string) => s.trim())
          : undefined,
        price: data.price !== undefined ? Number(data.price) : undefined,
        quantity:
          data.quantity !== undefined ? Number(data.quantity) : undefined,
        expiryDate: data.expiryDate ? new Date(data.expiryDate) : undefined,
      };

      const res = await updateMedicine(medicineId as string, formattedData);
      console.log("Response from updateMedicine:", res);

      if (res.message) {
        // console.log(res.success);

        toast.success("Medicine updated successfully");
      } else {
        toast.error("Failed to update medicine.");
      }
    } catch (err) {
      console.error("Error during update:", err);
      toast.error("An error occurred while updating the medicine.");
    }
  };

  return (
    <div className="border-2 border-gray-300 rounded-xl max-w-2xl p-5 my-5">
      <h1 className="text-xl font-semibold mb-5">Update Medicine</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Company */}
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Image URL */}
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image URL</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Price */}
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input {...field} type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Type */}
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type (e.g., Tablet, Syrup)</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Symptoms (Comma-separated) */}
            <FormField
              control={form.control}
              name="symptoms"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Symptoms (comma separated)</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="E.g., Fever, Headache, Cold"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Description */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Manufacturer Details */}
            <FormField
              control={form.control}
              name="manufacturerDetails"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Manufacturer Details</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Quantity */}
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantity</FormLabel>
                  <FormControl>
                    <Input {...field} type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Expiry Date */}
            <FormField
              control={form.control}
              name="expiryDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Expiry Date</FormLabel>
                  <FormControl>
                    <Input {...field} type="date" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Prescription Required */}
            <FormField
              control={form.control}
              name="prescriptionRequired"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Prescription Required</FormLabel>
                  <Select
                    value={field.value ? "true" : "false"}
                    onValueChange={(value) => field.onChange(value === "true")}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="true">Yes</SelectItem>
                        <SelectItem value="false">No</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Submit Button */}
          <Button type="submit" className="mt-5 w-full">
            {isSubmitting ? "Updating..." : "Update Medicine"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
