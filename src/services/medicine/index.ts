"use server";
import { cookies } from "next/headers";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const getAllMedicine = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/medicine`, {
      next: {
        tags: ["Medicine"],
      },
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};

export const getSingleMedicine = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/medicine/${id}`,
      {
        next: {
          tags: ["Medicine"],
        },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch medicine");
    }

    return await res.json();
  } catch (error: any) {
    return Error(error.message);
  }
};

export const createMedicine = async (data: FormData) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/medicine`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: (await cookies()).get("accessToken")!.value,
      },
      body: JSON.stringify(data),
      // body: data,
    });
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const updateMedicine = async (id: string, data: any) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/medicine/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: (await cookies()).get("accessToken")!.value,
        },
        body: JSON.stringify(data),
      }
    );

    if (!res.ok) {
      throw new Error("Failed to update medicine");
    }

    return await res.json();
  } catch (error: any) {
    return Error(error.message);
  }
};

export const deleteMedicine = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/medicine/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: (await cookies()).get("accessToken")!.value,
        },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to delete medicine");
    }

    return await res.json();
  } catch (error: any) {
    return Error(error.message);
  }
};
