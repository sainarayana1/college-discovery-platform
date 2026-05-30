import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.college.createMany({
    data: [
      {
        name: "IIT Hyderabad",
        location: "Hyderabad",
        fees: 240000,
        rating: 4.8,
        placements: "18 LPA",
        overview: "Premier engineering institute",
      },
      {
        name: "IIT Madras",
        location: "Chennai",
        fees: 250000,
        rating: 5.0,
        placements: "30 LPA",
        overview: "Top ranked IIT in India",
      },
      {
        name: "IIT Bombay",
        location: "Mumbai",
        fees: 260000,
        rating: 5.0,
        placements: "32 LPA",
        overview: "Leading engineering research institute",
      },
      {
        name: "IIT Delhi",
        location: "Delhi",
        fees: 250000,
        rating: 4.9,
        placements: "28 LPA",
        overview: "Excellent placements and innovation",
      },
      {
        name: "IIT Kanpur",
        location: "Kanpur",
        fees: 240000,
        rating: 4.8,
        placements: "25 LPA",
        overview: "Strong academics and research",
      },
      {
        name: "IIT Kharagpur",
        location: "Kharagpur",
        fees: 230000,
        rating: 4.8,
        placements: "24 LPA",
        overview: "Oldest IIT in India",
      },
      {
        name: "NIT Trichy",
        location: "Tamil Nadu",
        fees: 180000,
        rating: 4.7,
        placements: "15 LPA",
        overview: "Top NIT in India",
      },
      {
        name: "NIT Warangal",
        location: "Telangana",
        fees: 175000,
        rating: 4.7,
        placements: "14 LPA",
        overview: "Excellent placements",
      },
      {
        name: "NIT Surathkal",
        location: "Karnataka",
        fees: 185000,
        rating: 4.8,
        placements: "16 LPA",
        overview: "Beautiful campus near beach",
      },
      {
        name: "BITS Pilani",
        location: "Rajasthan",
        fees: 450000,
        rating: 4.8,
        placements: "20 LPA",
        overview: "Private deemed university",
      },
      {
        name: "BITS Goa",
        location: "Goa",
        fees: 450000,
        rating: 4.7,
        placements: "18 LPA",
        overview: "Strong placements",
      },
      {
        name: "BITS Hyderabad",
        location: "Hyderabad",
        fees: 450000,
        rating: 4.7,
        placements: "19 LPA",
        overview: "Modern infrastructure",
      },
      {
        name: "IIIT Hyderabad",
        location: "Hyderabad",
        fees: 350000,
        rating: 4.9,
        placements: "22 LPA",
        overview: "Research focused institute",
      },
      {
        name: "IIIT Bangalore",
        location: "Bangalore",
        fees: 330000,
        rating: 4.8,
        placements: "21 LPA",
        overview: "Top IT institute",
      },
      {
        name: "VIT Vellore",
        location: "Tamil Nadu",
        fees: 220000,
        rating: 4.5,
        placements: "10 LPA",
        overview: "Popular private engineering college",
      },
      {
        name: "SRM University",
        location: "Chennai",
        fees: 250000,
        rating: 4.4,
        placements: "8 LPA",
        overview: "Large campus and industry links",
      },
      {
        name: "Manipal Institute of Technology",
        location: "Manipal",
        fees: 300000,
        rating: 4.6,
        placements: "12 LPA",
        overview: "International reputation",
      },
      {
        name: "Amrita University",
        location: "Coimbatore",
        fees: 200000,
        rating: 4.5,
        placements: "9 LPA",
        overview: "Strong academic programs",
      },
      {
        name: "Thapar Institute",
        location: "Punjab",
        fees: 280000,
        rating: 4.5,
        placements: "11 LPA",
        overview: "Excellent engineering programs",
      },
      {
        name: "PES University",
        location: "Bangalore",
        fees: 260000,
        rating: 4.6,
        placements: "13 LPA",
        overview: "Strong software placements",
      },
    ],
  });

  console.log("Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });