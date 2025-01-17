"use client";
import Link from "next/link";
import { BorderBeam } from "@/components/ui/border-beam";
import ShineBorder from "@/components/ui/shine-border";
import { useTheme } from "next-themes";

export default function Home() {
  const theme = useTheme();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold text-center">
        <ShineBorder
          className="text-center text-2xl font-bold capitalize"
          color={theme.theme === "dark" ? "white" : "black"}
        >
          1% Better
        </ShineBorder>
      </h1>

      <Link href="/login" />
    </div>
  );
}
