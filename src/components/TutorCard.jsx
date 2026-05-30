
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
    const { name, photoURL, sessionStartDate, hourlyFee, availableDays, subject} = tutor;
  return (
    <Card className="relative w-85">
      <Image
        width={400}
        height={100}
        src={photoURL}
        alt="Event cover"
        className="h-80 w-full object-cover"
      />
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>
          {subject}
        </CardDescription>
        <p>{availableDays}</p>
        <p>{sessionStartDate}</p>
        <p>{hourlyFee}</p>
      </CardHeader>
      <CardFooter>
        <Button className="w-full bg-[#0d8a6c]">Book Session</Button>
      </CardFooter>
    </Card>
  );
}
