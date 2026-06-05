import DateSorting from "@/components/DateSorting";
import SearchBar from "@/components/SearchBar";
import { TutorCard } from "@/components/TutorCard";

const TutorsPage = async ({ searchParams }) => {
  const params = await searchParams;
  const search = params?.search || "";
  const date = params?.date || "";
  
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/tutors?search=${search}&date=${date}`,
    {
      cache: "no-store",
    },
  );
  const tutors = await res.json();
  return (
    <div className="pt-20 md:pt-30 pb-20 max-w-6xl mx-auto px-8">
      <h2 className="text-4xl my-10 text-center font-bold">All Tutors</h2>

      <div className=" flex flex-col gap-10 md:flex-row justify-between">
        <SearchBar />
        <DateSorting/>
        
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {tutors.map((tutor) => (
          <TutorCard key={tutor._id} tutor={tutor}></TutorCard>
        ))}
      </div>
    </div>
  );
};

export default TutorsPage;
