import { FaArrowRightLong } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

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
    <Card className="relative w-85">
      <Image
        width={400}
        height={100}
        src={photoURL}
        alt="Event cover"
        className="h-80 w-full object-cover object-top"
      />
      <CardHeader>
        <CardTitle className="text-2xl font-black">{name}</CardTitle>
        <CardDescription className="font-bold">{subject}</CardDescription>
        <p>
          <span className="font-semibold">Available:</span> {availableDays}
        </p>
        <p>
          <span className="font-semibold">Session Start:</span>{" "}
          {sessionStartDate}
        </p>
        <p className="text-[#0d8a6c] text-xl font-semibold">৳{hourlyFee}</p>
      </CardHeader>
      <CardFooter>
        <Button className="w-full bg-[#0d8a6c]">
          Book Session <FaArrowRightLong />
        </Button>
      </CardFooter>
    </Card>
  );
}
