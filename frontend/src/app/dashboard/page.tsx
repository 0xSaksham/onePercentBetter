"use client";

import { useState } from "react";
import {
  Bell,
  Search,
  Plus,
  Home,
  Activity,
  Calendar,
  User,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  const [userName] = useState("John Doe");

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-20 bg-black flex flex-col items-center py-8 gap-8">
        <div className="text-[#CCFF00] font-bold text-2xl">1%</div>
        <nav className="flex flex-col gap-6">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:text-[#CCFF00]"
          >
            <Home className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:text-[#CCFF00]"
          >
            <Activity className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:text-[#CCFF00]"
          >
            <Calendar className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:text-[#CCFF00]"
          >
            <User className="h-6 w-6" />
          </Button>
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="mt-auto text-white hover:text-[#CCFF00]"
        >
          <Settings className="h-6 w-6" />
        </Button>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="rounded-full"
            />
            <div>
              <h2 className="font-semibold">{userName}</h2>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </header>

        {/* Overview Section */}
        <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Habit Overview</h2>
            <select className="border rounded-md px-3 py-1">
              <option>Monthly</option>
              <option>Weekly</option>
              <option>Daily</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Stats Cards */}
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-sm text-gray-500 mb-2">Total Habits</h3>
              <div className="text-3xl font-bold">12</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-sm text-gray-500 mb-2">Completion Rate</h3>
              <div className="text-3xl font-bold">85%</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-sm text-gray-500 mb-2">Current Streak</h3>
              <div className="text-3xl font-bold">7 days</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-sm text-gray-500 mb-2">Best Streak</h3>
              <div className="text-3xl font-bold">14 days</div>
            </div>
          </div>
        </section>

        {/* Habits Section */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">My Habits</h2>
            <Button className="bg-[#CCFF00] text-black hover:bg-[#b3ff00]">
              <Plus className="h-5 w-5 mr-2" />
              Add Habit
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Habit Cards */}
            {["Exercise", "Reading", "Meditation"].map((habit) => (
              <div key={habit} className="bg-white p-6 rounded-xl shadow">
                <h3 className="font-semibold mb-2">{habit}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Today's Status</span>
                  <Button variant="outline" size="sm">
                    Mark Complete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
