"use client";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Bike } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";

export const LoginForm: React.FC = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof LoginSchema>> = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen w-full bg-background overflow-y-auto">
      <div className="min-h-screen flex flex-col lg:flex-row">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center min-h-[50vh] lg:min-h-screen">
          <div className="mb-12 pt-8 lg:pt-0">
            <div className="text-[#CCFF00] font-bold text-2xl mb-6">1%</div>
            <h1 className="text-3xl font-bold mb-2">
              Start your 21-day Habit Streak
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Recieve 1 $HABIT on 22nd Day of Streak!
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow">
              <div className="w-10 h-10 rounded-full bg-[#CCFF00]/10 flex items-center justify-center">
                <span className="text-[#CCFF00]">
                  <Bike />
                </span>
              </div>
              <div>
                <h3 className="font-semibold">Create Multiple Habits</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Become part of growing community of Habit Builders!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center bg-white dark:bg-gray-800 min-h-screen">
          <div className="max-w-md mx-auto pt-8 lg:pt-0">
            <h1 className="text-3xl font-bold mb-4 text-center ">
              Sign in to your account
            </h1>

            <div className="grid grid-cols-1 gap-4 mb-8">
              <Button variant="outline" className="w-full">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Google
              </Button>
            </div>

            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-gray-800 text-gray-500">
                  Or
                </span>
              </div>
            </div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Type Your Email Here..."
                          className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 bg-background dark:bg-gray-800 focus:ring-2 focus:ring-[#CCFF00] focus:border-transparent"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormError message="" />
                <FormSuccess message="" />

                <Button
                  type="submit"
                  className="w-full bg-[#CCFF00] text-black hover:bg-[#b3ff00]"
                >
                  Sign Up
                </Button>
              </form>
            </Form>

            <p className="mt-6 text-sm text-gray-500 dark:text-gray-400 text-center">
              By creating an account, you agree to the{" "}
              <a href="#" className="text-[#CCFF00] hover:underline">
                Terms of Service
              </a>
              . We'll occasionally send you account-related emails.
            </p>

            <p className="mt-4 text-center text-gray-500 dark:text-gray-400">
              Already have an account?{" "}
              <a href="/login" className="text-[#CCFF00] hover:underline">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
