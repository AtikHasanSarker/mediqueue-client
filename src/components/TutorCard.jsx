import { FaArrowRightLong } from "react-icons/fa6";
import { Button, Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

export function TutorCard({ tutor }) {
  const {
    name,
    photoURL,
    sessionStartDate,
    hourlyFee,
    availableDays,
    subject,
  } = tutor;
  return (
    <Card className="group relative border p-0 overflow-hidden hover:-translate-y-3 transition-transform duration-300">
      <div className="relative h-100 w-full overflow-hidden">
        <Image
          width={400}
          height={100}
          src={photoURL}
          alt="Event cover"
          className="h-full w-full object-cover object-top rounded-t-3xl group-hover:scale-115 transition-transform duration-400"
        />
      </div>
      <div className="p-6 space-y-4">
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl font-black">{name}</CardTitle>
          <CardDescription className="font-bold">{subject}</CardDescription>
          <p>
            <span className="font-semibold">Available:</span> {availableDays}
          </p>
          <p>
            <span className="font-semibold">Session Start:</span>{" "}
            {sessionStartDate}
          </p>
          <hr />
          <p className="text-[#0d8a6c] text-xl font-semibold">৳{hourlyFee}</p>
        </CardHeader>
        <CardFooter>
          <Link href={`/tutors/${tutor._id}`} className="w-full group">
            <Button className="w-full py-6 font-semibold bg-[#0d8a6c] hover:bg-[#0a6b52]">
              Book Session <FaArrowRightLong className="group-hover:translate-x-1 transition-transform duration-300 ml-2" />
            </Button>
          </Link>
        </CardFooter>
      </div>
    </Card>
  );
}
