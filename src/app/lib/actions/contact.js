"use server";

import { supabaseAdmin } from "../supabase/admin";

export async function guestsComments(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  const subject = formData.get("subject");
  if (!name || !email || !message || !subject) {
    return { error: "All Fileds Are Required" };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { error: "Please enter a valid email address" };
  }
  try {
    const { error } = await supabaseAdmin.from("GuestsMessage").insert([
      {
        name,
        email,
        message,
        subject,
      },
    ]);
    if (error) throw new Error(error.message);
    return { success: true };
  } catch (error) {
    return { error: "Failed to submit form." };
  }
}
