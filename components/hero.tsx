"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8">
          {/* Coming Soon Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm text-muted-foreground border border-border">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal"></span>
            </span>
            Coming Soon
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
            Keep your team <span className="text-teal">aligned</span> with smart nudges
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            Nudgely helps teams stay on track with intelligent reminders and nudges. Never miss a deadline, follow-up,
            or important update again.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12 text-base"
              onClick={scrollToWaitlist}
            >
              Join the Waitlist
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 h-12 text-base bg-transparent"
              onClick={scrollToWaitlist}
            >
              Learn More
            </Button>
          </div>

          {/* Hero Visual */}
          <div className="pt-12">
            <div className="relative mx-auto max-w-5xl">
              <div className="absolute inset-0 bg-gradient-to-r from-teal/20 to-accent/20 blur-3xl -z-10" />
              <div className="bg-card border border-border rounded-2xl p-8 shadow-2xl">
                <div className="space-y-4">
                  {/* Mock notification cards */}
                  <div className="flex items-start gap-4 p-4 bg-secondary/50 rounded-lg border border-border">
                    <div className="h-10 w-10 rounded-full bg-teal/20 flex items-center justify-center flex-shrink-0">
                      <div className="h-5 w-5 rounded-full bg-teal" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-foreground/10 rounded w-3/4" />
                      <div className="h-3 bg-foreground/5 rounded w-1/2" />
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-secondary/50 rounded-lg border border-border">
                    <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <div className="h-5 w-5 rounded-full bg-accent" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-foreground/10 rounded w-2/3" />
                      <div className="h-3 bg-foreground/5 rounded w-1/3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
