import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const TutorDetailPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:5000/tutors/${id}`);
  const tutor = await res.json();
  const {
    name,
    photoURL,
    sessionStartDate,
    hourlyFee,
    availableDays,
    subject,
    totalSlot,
    institution,
    location,
    experience,
    teachingMode,
  } = tutor;

  return (
    <div>
      <Card className="overflow-hidden p-6 grid grid-cols-1 gap-6 md:grid-cols-2 rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="relative h-56 w-full">
          <Image
            width={400}
            height={100}
            src={photoURL}
            alt="Event cover"
            className="h-80 w-full object-cover object-top"
          />
        </div>

        <CardContent className="p-5">
          <h3 className="text-3xl font-bold">{name}</h3>
          <p className="text-muted-foreground">{subject}</p>
          <p>
            <span className="font-semibold">Institution:</span> {institution}
          </p>
          <p>
            <span className="font-semibold">Experience:</span> {experience}{" "}
            years teaching SSC and HSC students
          </p>
          <p>
            <span className="font-semibold">Location:</span> {location}
          </p>
          <p>
            <span className="font-semibold">Mode:</span> {teachingMode}
          </p>
          <p>
            <span className="font-semibold">Available & Time Slot:</span>{" "}
            {availableDays}
          </p>
          <p>
            <span className="font-semibold">Hourly Fee:</span> ৳{hourlyFee}/hr
          </p>
          <p>
            <span className="font-semibold">Remaining Slots:</span>{" "}
            {totalSlot}
          </p>
          <p>
            <span className="font-semibold">Session Start Date:</span>{" "}
            {sessionStartDate}
          </p>

          <Button variant="ghost">Book Session</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default TutorDetailPage;
