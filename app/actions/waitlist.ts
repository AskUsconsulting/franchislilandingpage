"use server";

import { createClient } from "@supabase/supabase-js";

export interface DemoRequest {
  full_name: string;
  business_name: string;
  locations_count: number;
  email: string;
  phone?: string;
}

type Result =
  | { success: true }
  | { success: false; message: string };

export async function joinWaitlist(data: DemoRequest): Promise<Result> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    console.error("Missing Supabase env vars");
    return { success: false, message: "Server configuration error. Please try again later." };
  }

  const supabase = createClient(url, key);

  const { error } = await supabase
    .from("waitlist")
    .insert({
      email: data.email.toLowerCase().trim(),
      full_name: data.full_name.trim(),
      business_name: data.business_name.trim(),
      locations_count: data.locations_count,
      phone: data.phone?.trim() || null,
    });

  if (error) {
    if (error.code === "23505") {
      return { success: false, message: "That email is already on the list." };
    }
    console.error("Waitlist insert error:", error.message);
    return { success: false, message: "Something went wrong. Please try again." };
  }

  return { success: true };
}
