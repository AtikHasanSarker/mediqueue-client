"use client";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Table } from "@heroui/react";
import DeleteModal from "@/components/DeleteModal";
import { EditNodal } from "@/components/EditModal";

const MyTutorsPage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    if (!user?.id) return;
    const fetchTutors = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/my-tutors/${user.id}`,
      );
      const data = await res.json();
      setTutors(data);
    };

    fetchTutors();
  }, [user?.id]);


  return (
    <div className="pt-40 pb-20 min-h-screen max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {tutors?.length > 0 ? (
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center sm:text-left">
            Here are your tutors
          </h2>

          <div className="space-y-4 md:hidden">
            {tutors.map((tutor) => (
              <article
                key={tutor._id}
                className="rounded-3xl border border-default-200 bg-white p-4 shadow-sm"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{tutor.name}</h3>
                    <p className="text-sm text-default-500 mt-1">{tutor.subject}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 text-sm text-slate-700">
                    <span className="rounded-full bg-slate-100 px-3 py-1">Fee: {tutor.hourlyFee}</span>
                    <span className="rounded-full bg-slate-100 px-3 py-1">Slots: {tutor.totalSlot}</span>
                  </div>
                </div>

                <div className="mt-4 grid gap-2 text-sm text-slate-700">
                  <div>
                    <span className="font-semibold">Session Start:</span> {tutor.sessionStartDate}
                  </div>
                </div>

                <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-end">
                  <EditNodal tutor={tutor} />
                  <DeleteModal tutor={tutor} />
                </div>
              </article>
            ))}
          </div>

          <div className="hidden md:block">
            <Table>
              <Table.ScrollContainer>
                <Table.Content aria-label="Team members" className="min-w-[600px]">
                  <Table.Header>
                    <Table.Column isRowHeader>TUTOR NAME</Table.Column>
                    <Table.Column>SUBJECT</Table.Column>
                    <Table.Column>HOURLY FEE</Table.Column>
                    <Table.Column>TOTAL SLOTS</Table.Column>
                    <Table.Column>SESSION START</Table.Column>
                    <Table.Column>ACTIONS</Table.Column>
                  </Table.Header>
                  <Table.Body>
                    {tutors.map((tutor) => (
                      <Table.Row key={tutor._id}>
                        <Table.Cell>{tutor.name}</Table.Cell>
                        <Table.Cell>{tutor.subject}</Table.Cell>
                        <Table.Cell>{tutor.hourlyFee}</Table.Cell>
                        <Table.Cell>{tutor.totalSlot}</Table.Cell>
                        <Table.Cell>{tutor.sessionStartDate}</Table.Cell>
                        <Table.Cell className="flex gap-2 flex-wrap">
                          <EditNodal tutor={tutor} />
                          <DeleteModal tutor={tutor} />
                        </Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table.Content>
              </Table.ScrollContainer>
            </Table>
          </div>
        </div>
      ) : (
        <h3 className="text-2xl font-semibold">No tutors found.</h3>
      )}
    </div>
  );
};

export default MyTutorsPage;
