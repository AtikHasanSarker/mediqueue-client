import Image from "next/image";
import { Card, CardContent } from "@heroui/react";
import BookSession from "@/components/BookSession";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";


const TutorDetailPage = async ({ params }) => {
  const { id } = await params;
  const {token} = await auth.api.getToken({
    headers: await headers()
  });
  console.log(token)
  const res = await fetch(`http://localhost:5000/tutors/${id}`,{
    headers: {
      authorization: `Bearer ${token}`
    }
  });
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
    <div className="pt-40 pb-20 max-w-6xl mx-auto px-6">
      <Card className="border overflow-hidden p-6 grid grid-cols-1 gap-4 md:grid-cols-2 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="relative h-130 w-full">
          <Image
            width={400}
            height={100}
            src={photoURL}
            alt="Event cover"
            className="h-full w-full object-cover object-top rounded-2xl"
          />
        </div>

        <CardContent className="p-5 space-y-2">
          <h3 className="text-3xl md:text-4xl font-bold">{name}</h3>
          <p className="text-[#0d8a6c] font-semibold text-xl">{subject}</p>
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
            <span className="font-semibold">Remaining Slots:</span> {totalSlot}
          </p>
          <p>
            <span className="font-semibold">Session Start Date:</span>{" "}
            {sessionStartDate}
          </p>
          <p>
            <span className="font-semibold">Hourly Fee:</span>{" "}
            <span className="text-[#0d8a6c] font-bold">৳{hourlyFee}/hr</span>
          </p>

          <BookSession tutor={tutor} />
        </CardContent>
      </Card>
    </div>
  );
};

export default TutorDetailPage;
