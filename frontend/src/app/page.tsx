"use client";

import { Menu, Target, TrendingUp, Star } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export function HeroSection() {
  return (
    <div className="h-screen flex flex-col items-center overflow-hidden">
      <header className="container mx-auto flex h-20 items-center justify-between px-4 w-full">
        <Link href="/" className="font-mono text-xl font-bold tracking-tighter">
          1% Better
        </Link>
        <nav className="absolute left-1/2 hidden -translate-x-1/2 transform space-x-12 md:flex">
          <Link href="#features" className="text-[15px] font-medium">
            Features
          </Link>
          <Link href="#how-it-works" className="text-[15px] font-medium">
            How It Works
          </Link>
          <Link href="#about" className="text-[15px] font-medium">
            About
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="rounded-full font-medium hidden md:inline-flex"
            asChild
          >
            <Link href="/dashboard">Start Tracking</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col space-y-4 mt-6">
                <Link href="#features" className="text-[15px] font-medium">
                  Features
                </Link>
                <Link href="#how-it-works" className="text-[15px] font-medium">
                  How It Works
                </Link>
                <Link href="#about" className="text-[15px] font-medium">
                  About
                </Link>
                <Button
                  variant="outline"
                  className="rounded-full font-medium w-full"
                  asChild
                >
                  <Link href="/dashboard">Start Tracking</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center w-full">
        <section className="container py-12 md:py-24 text-center px-4 flex flex-col items-center">
          <motion.h1
            className="relative mx-auto max-w-3xl font-mono text-xl sm:text-4xl md:text-6xl font-medium tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Build{" "}
            <motion.span
              className="relative inline-block bg-blue-500/20"
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              better habits
              <motion.div
                className="absolute -left-2 -top-2 h-3 w-3 rounded-full bg-blue-500"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, duration: 0.3 }}
              />
              <motion.div
                className="absolute -bottom-2 -right-2 h-3 w-3 rounded-full bg-blue-500"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, duration: 0.3 }}
              />
            </motion.span>{" "}
            one day at a time.
          </motion.h1>

          <motion.div
            className="mx-auto mt-8 md:mt-16 flex flex-col sm:flex-row max-w-2xl items-center justify-center gap-4 rounded-xl bg-muted p-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Button
              size="sm"
              variant="ghost"
              className="gap-2 w-full sm:w-auto"
            >
              <Target className="h-4 w-4" />
              Set Goals
            </Button>
            <div className="hidden sm:block h-6 w-px bg-foreground" />
            <Button
              size="sm"
              variant="ghost"
              className="gap-2 w-full sm:w-auto"
            >
              <TrendingUp className="h-4 w-4" />
              Track Progress
            </Button>
            <div className="hidden sm:block h-6 w-px bg-foreground" />
            <Button
              size="sm"
              variant="ghost"
              className="gap-2 w-full sm:w-auto"
            >
              <Star className="h-4 w-4" />
              Build Streaks
            </Button>
            <Button size="sm" className="rounded-lg w-full sm:w-auto" asChild>
              <Link href="/dashboard">Get Started</Link>
            </Button>
          </motion.div>
        </section>

        <motion.section className="container relative pb-12 md:pb-24 px-4">
          <div className="relative mx-auto max-w-5xl h-[600px] md:h-[400px]">
            <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-6 md:gap-0">
              <motion.div
                className="bg-background border-2 rounded-[32px] w-full md:w-[35%] md:absolute md:left-0 md:top-12 text-center"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1, rotate: [0, 0, -6] }}
                transition={{ duration: 0.6 }}
              >
                <div className="rounded-[32px] p-8 shadow-[0_8px_0px_0px_rgba(0,0,0,1)] transition-transform">
                  <div className="text-xs font-medium text-amber-600">
                    TRACK DAILY
                  </div>
                  <h3 className="px-6 mt-2 text-[28px] font-semibold leading-tight">
                    Build consistent habits
                  </h3>
                  <div className="mt-6 flex justify-center">
                    <Target className="h-24 w-24" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="z-10 bg-background border-2 rounded-[32px] w-full md:w-[38%] md:absolute md:top-20 text-center"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="rounded-[32px] p-8 shadow-[0_8px_0px_0px_rgba(0,0,0,1)] transition-transform">
                  <div className="text-xs font-medium text-amber-600">
                    STAY MOTIVATED
                  </div>
                  <h3 className="px-6 mt-2 text-[28px] font-semibold leading-tight">
                    Maintain your streaks
                  </h3>
                  <div className="mt-6 flex justify-center">
                    <TrendingUp className="h-24 w-24" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-background border-2 rounded-[32px] w-full md:w-[35%] md:absolute md:right-0 md:top-12 text-center"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1, rotate: [0, 0, 6] }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="rounded-[32px] p-8 shadow-[0_8px_0px_0px_rgba(0,0,0,1)] transition-transform">
                  <div className="text-xs font-medium text-amber-600">
                    ACHIEVE GOALS
                  </div>
                  <h3 className="px-6 mt-2 text-[28px] font-semibold leading-tight">
                    Become 1% better daily
                  </h3>
                  <div className="mt-6 flex justify-center">
                    <Star className="h-24 w-24" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}

export default function HomePage() {
  return <HeroSection />;
}
