"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface College {
  id: string;
  name: string;
  location: string;
  fees: number;
  rating: number;
  placements: string;
  overview: string;
}

export default function Home() {
  const [colleges, setColleges] = useState<College[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/api/colleges")
      .then((res) => res.json())
      .then((data) => setColleges(data))
      .catch((err) => console.error(err));
  }, []);

  const filteredColleges = colleges.filter((college) =>
    college.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 rounded-full border border-cyan-500 text-cyan-400 mb-5">
            🚀 India's Smart College Finder
          </div>

          <h1 className="text-6xl md:text-7xl font-black mb-5">
            Find Your
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              Dream College
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Compare colleges, placements, fees and ratings to choose the best
            engineering institute for your future.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-5 mb-12">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
            <p className="text-gray-400">Colleges</p>
            <h2 className="text-4xl font-bold text-cyan-400">
              {colleges.length}
            </h2>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
            <p className="text-gray-400">Highest Rating</p>
            <h2 className="text-4xl font-bold text-yellow-400">
              5.0
            </h2>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
            <p className="text-gray-400">Top Package</p>
            <h2 className="text-4xl font-bold text-green-400">
              32 LPA
            </h2>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
            <p className="text-gray-400">Students</p>
            <h2 className="text-4xl font-bold text-pink-400">
              50K+
            </h2>
          </div>
        </div>

        {/* Search */}
        <div className="mb-10">
          <input
            type="text"
            placeholder="🔍 Search colleges..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-5 rounded-2xl bg-slate-900 border border-slate-700 focus:border-cyan-500 outline-none text-lg"
          />
        </div>

        {/* College Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredColleges.map((college) => (
            <div
              key={college.id}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 p-6">
                <h2 className="text-3xl font-bold">
                  {college.name}
                </h2>

                <p className="text-white/80 mt-1">
                  📍 {college.location}
                </p>
              </div>

              <div className="p-6">
                <p className="text-gray-300 mb-6">
                  {college.overview}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-5">
                  <div className="bg-slate-800 rounded-xl p-4">
                    <p className="text-gray-400 text-sm">
                      Fees
                    </p>

                    <p className="text-cyan-400 font-bold text-xl">
                      ₹{college.fees.toLocaleString()}
                    </p>
                  </div>

                  <div className="bg-slate-800 rounded-xl p-4">
                    <p className="text-gray-400 text-sm">
                      Rating
                    </p>

                    <p className="text-yellow-400 font-bold text-xl">
                      ⭐ {college.rating}
                    </p>
                  </div>
                </div>

                <div className="bg-slate-800 rounded-xl p-4 mb-6">
                  <p className="text-gray-400 text-sm">
                    Placement Package
                  </p>

                  <p className="text-green-400 font-bold text-2xl">
                    {college.placements}
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex gap-3">

                  <Link
                    href={`/college/${college.id}`}
                    className="flex-1 text-center bg-gradient-to-r from-cyan-500 to-purple-600 py-3 rounded-xl font-bold hover:opacity-90 transition"
                  >
                    View Details
                  </Link>

                  <button
                    className="px-5 py-3 bg-slate-800 rounded-xl hover:bg-slate-700 transition"
                  >
                    ❤️
                  </button>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}