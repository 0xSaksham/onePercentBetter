"use client";

import { Menu, Target, TrendingUp, Star, Bot, Moon, Sun } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import ScrollProgress from "@/components/ui/scroll-progress";
import { useTheme } from "next-themes";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex flex-col [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
      <ScrollProgress />
      <header className="container mx-auto flex h-20 items-center justify-between px-4 w-full">
        <Link href="/" className="font-mono text-xl font-bold tracking-tighter">
          1% Better
        </Link>
        <nav className="absolute left-1/2 hidden -translate-x-1/2 transform space-x-12 md:flex">
          <Link href="#whats-different" className="font-medium">
            What's different?
          </Link>
          <Link href="#how-it-works" className="font-medium">
            How It Works
          </Link>
          <Link href="#about" className="font-medium">
            About
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Link href="/dashboard">
            {" "}
            <ShimmerButton className="shadow-2xl">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Start Tracking
              </span>
            </ShimmerButton>
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col space-y-4 mt-6">
                <Link
                  href="#whats-different"
                  className="text-[15px] font-medium"
                >
                  What's Different?
                </Link>
                <Link href="#how-it-works" className="text-[15px] font-medium">
                  How It Works
                </Link>
                <Link href="#about" className="text-[15px] font-medium">
                  About
                </Link>
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

        <section id="whats-different" className="container py-24 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What's Different About Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 border rounded-xl">
              <Target className="h-8 w-8 mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-2">Goal Setting</h3>
              <p className="text-muted-foreground">
                Set clear, achievable goals and break them down into daily
                actionable steps.
              </p>
            </div>
            <div className="p-6 border rounded-xl">
              <TrendingUp className="h-8 w-8 mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
              <p className="text-muted-foreground">
                Monitor your daily progress with intuitive charts and
                visualizations.
              </p>
            </div>
            <div className="p-6 border rounded-xl">
              <Star className="h-8 w-8 mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-2">
                Earn While You Grow
              </h3>
              <p className="text-muted-foreground">
                Turn your dedication into rewards. Complete 21-day streaks to
                earn $HABIT tokens on Starknet - the first habit tracker that
                pays you for consistency.
              </p>
            </div>
            <div className="p-6 border rounded-xl">
              <Bot className="h-8 w-8 mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-2">AI-Powered Growth</h3>
              <p className="text-muted-foreground">
                Our smart AI ensures you're always progressing by automatically
                calculating your optimal next step - no more guessing what
                "better" looks like.
              </p>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="container py-24 px-4 bg-muted">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How It Works
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Create Your Goals
                </h3>
                <p className="text-muted-foreground">
                  Start by setting up your personal goals and habits you want to
                  develop. Our AI will help you break them down into achievable
                  daily targets.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Track Daily Progress
                </h3>
                <p className="text-muted-foreground">
                  Check in daily to mark your progress and maintain your streak.
                  The AI automatically adjusts tomorrow's goal to be 1% better
                  than today's achievement.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Stay Consistent</h3>
                <p className="text-muted-foreground">
                  Build momentum with daily improvements and watch your progress
                  grow. Small 1% increases compound over time, and after 21 days
                  of consistency, you'll earn $HABIT tokens as a reward for your
                  dedication.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="container py-24 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About 1% Better
            </h2>
            <div className="space-y-4 mb-8">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Our Philosophy</h3>
                <p className="text-muted-foreground">
                  Small, consistent improvements compound into remarkable
                  results
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Smart Progress</h3>
                <p className="text-muted-foreground">
                  AI automatically adjusts your daily targets by 1% to keep you
                  moving forward
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Rewarding Journey</h3>
                <p className="text-muted-foreground">
                  Earn $HABIT tokens on Starknet for every 21-day streak you
                  complete
                </p>
              </div>
            </div>
            <Button size="lg" className="rounded-full" asChild>
              <Link href="/dashboard">Start Your Journey</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
