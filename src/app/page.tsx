import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function CollegePage({
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
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white">
      <div className="max-w-5xl mx-auto px-6 py-12">

        <Link
          href="/"
          className="inline-block mb-8 px-5 py-3 bg-slate-800 rounded-xl hover:bg-slate-700"
        >
          ← Back To Colleges
        </Link>

        <div className="rounded-3xl overflow-hidden border border-slate-700 shadow-2xl">

          <div className="bg-gradient-to-r from-cyan-500 to-fuchsia-600 p-10">
            <h1 className="text-5xl font-black">
              {college.name}
            </h1>

            <p className="mt-3 text-xl">
              📍 {college.location}
            </p>
          </div>

          <div className="p-8">

            <h2 className="text-2xl font-bold mb-4">
              About College
            </h2>

            <p className="text-slate-300 text-lg mb-8">
              {college.overview}
            </p>

            <div className="grid md:grid-cols-3 gap-6">

              <div className="bg-slate-800 rounded-2xl p-6">
                <h3 className="text-slate-400 mb-2">
                  Fees
                </h3>

                <p className="text-3xl font-bold text-cyan-400">
                  ₹{college.fees.toLocaleString()}
                </p>
              </div>

              <div className="bg-slate-800 rounded-2xl p-6">
                <h3 className="text-slate-400 mb-2">
                  Rating
                </h3>

                <p className="text-3xl font-bold text-yellow-400">
                  ⭐ {college.rating}
                </p>
              </div>

              <div className="bg-slate-800 rounded-2xl p-6">
                <h3 className="text-slate-400 mb-2">
                  Placements
                </h3>

                <p className="text-3xl font-bold text-green-400">
                  {college.placements}
                </p>
              </div>

            </div>

            <div className="mt-10 bg-slate-900 rounded-2xl p-6 border border-slate-700">
              <h3 className="text-2xl font-bold mb-4">
                Highlights
              </h3>

              <ul className="space-y-3 text-slate-300">
                <li>✔ Excellent Campus Infrastructure</li>
                <li>✔ Strong Placement Support</li>
                <li>✔ Industry Collaboration</li>
                <li>✔ Research Opportunities</li>
                <li>✔ Student Clubs & Activities</li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}