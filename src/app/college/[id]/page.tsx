import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  MapPin,
  IndianRupee,
  Star,
  TrendingUp,
  ArrowLeft,
} from "lucide-react";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function CollegeDetails({
  params,
}: Props) {
  const { id } = await params;

  const college = await prisma.college.findUnique({
    where: {
      id,
    },
  });

  if (!college) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white p-8">
      <div className="max-w-5xl mx-auto">

        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-xl mb-8 transition"
        >
          <ArrowLeft size={18} />
          Back to Colleges
        </Link>

        <div className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl">

          <div className="bg-gradient-to-r from-cyan-500 to-fuchsia-600 p-10">
            <h1 className="text-5xl font-bold">
              {college.name}
            </h1>

            <div className="flex items-center gap-2 mt-4 text-lg">
              <MapPin size={20} />
              {college.location}
            </div>
          </div>

          <div className="p-8">

            <div className="bg-slate-800 rounded-2xl p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">
                College Overview
              </h2>

              <p className="text-slate-300 leading-relaxed">
                {college.overview}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">

              <div className="bg-slate-800 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <IndianRupee
                    size={20}
                    className="text-cyan-400"
                  />
                  <h3 className="font-semibold">
                    Annual Fees
                  </h3>
                </div>

                <p className="text-3xl font-bold text-cyan-400">
                  ₹{college.fees.toLocaleString()}
                </p>
              </div>

              <div className="bg-slate-800 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Star
                    size={20}
                    className="text-yellow-400"
                  />
                  <h3 className="font-semibold">
                    Rating
                  </h3>
                </div>

                <p className="text-3xl font-bold text-yellow-400">
                  ⭐ {college.rating}
                </p>
              </div>

              <div className="bg-slate-800 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp
                    size={20}
                    className="text-green-400"
                  />
                  <h3 className="font-semibold">
                    Placement Package
                  </h3>
                </div>

                <p className="text-3xl font-bold text-green-400">
                  {college.placements}
                </p>
              </div>

            </div>

            <div className="mt-10 flex gap-4">
              <button className="bg-gradient-to-r from-cyan-500 to-fuchsia-600 px-8 py-3 rounded-xl font-bold hover:scale-105 transition">
                Save College
              </button>

              <button className="bg-slate-800 px-8 py-3 rounded-xl hover:bg-slate-700 transition">
                Compare
              </button>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}