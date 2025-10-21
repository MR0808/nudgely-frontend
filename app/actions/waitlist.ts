"use server"

import { z } from "zod"

const waitlistSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().min(2, "Name must be at least 2 characters"),
})

export async function submitWaitlist(data: { email: string; name: string }) {
  try {
    // Validate the data
    const validatedData = waitlistSchema.parse(data)

    console.log("[v0] Waitlist submission:", validatedData)

    // TODO: Store in database when integration is added
    // TODO: Send to Kit (email service) when integration is added

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return { success: true }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: error.errors[0].message,
      }
    }

    return {
      success: false,
      error: "Failed to join waitlist. Please try again.",
    }
  }
}
