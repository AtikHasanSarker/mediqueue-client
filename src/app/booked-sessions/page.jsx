"use client";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Button, Chip, Table } from "@heroui/react";

const MyBookedSessions = () => {
  
  const { data: session } = authClient.useSession();
    const user = session?.user;
    const [bookedSessions, setBookedSessions] = useState([]);
  
    useEffect(() => {
      if (!user?.id) return;
      const fetchBookedSessions = async () => {
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/booked-sessions/${user.id}`,
          );  
          const data = await res.json();
          setBookedSessions(data);
        } catch (error) {
          console.error("error in fetching");
        }
      };
  
      fetchBookedSessions();
    }, [user?.id]);

    const handleRemove = async(id) => {
      
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/booked-sessions/${id}`,
        {
          method: "PATCH",
        },
      );
    const data = await res.json();
    if(data.modifiedCount > 0){
      setBookedSessions((prev) =>
        prev.map((item) =>
          item._id === id ? { ...item, status: "Cancelled" } : item,
        ),
      );
    }
    }
  
  
  return (
    <div className="pt-24 md:pt-40 pb-20 min-h-screen max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {bookedSessions?.length > 0 ? (
        <div>
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold">Your Booked Sessions</h1>
            <p className="text-default-500 mt-2 max-w-2xl">
              Manage your enrolled tutors and sessions across mobile, tablet, and desktop.
            </p>
          </div>

          <div className="space-y-4 md:hidden">
            {bookedSessions.map((session) => (
              <article
                key={session._id}
                className="rounded-3xl border border-default-200 bg-white p-4 shadow-sm"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="text-lg font-semibold text-slate-900">
                      {session.tutorName}
                    </h2>
                    <p className="text-sm text-default-500">{session.subject}</p>
                  </div>
                  <Chip
                    color={session.status === "Booked" ? "success" : "danger"}
                    variant="flat"
                    className="self-start sm:self-auto"
                  >
                    {session.status}
                  </Chip>
                </div>

                <div className="mt-4 grid gap-2 text-sm text-slate-700">
                  <div>
                    <span className="font-semibold">Student:</span> {session.userName}
                  </div>
                  <div>
                    <span className="font-semibold">Phone:</span> {session.phone}
                  </div>
                  <div>
                    <span className="font-semibold">Email:</span> {session.email}
                  </div>
                </div>

                <Button
                  isDisabled={session.status === "Cancelled"}
                  onClick={() => handleRemove(session._id)}
                  variant="danger-soft"
                  className="mt-4 w-full text-red-600"
                >
                  Remove
                </Button>
              </article>
            ))}
          </div>

          <div className="hidden md:block">
            <Table>
              <Table.ScrollContainer>
                <Table.Content aria-label="Booked sessions" className="min-w-full">
                  <Table.Header>
                    <Table.Column isRowHeader>STUDENT NAME</Table.Column>
                    <Table.Column>PHONE</Table.Column>
                    <Table.Column>TUTOR NAME</Table.Column>
                    <Table.Column>SUBJECT</Table.Column>
                    <Table.Column>EMAIL</Table.Column>
                    <Table.Column>STATUS</Table.Column>
                    <Table.Column>CANCEL</Table.Column>
                  </Table.Header>
                  <Table.Body>
                    {bookedSessions.map((session) => (
                      <Table.Row key={session._id}>
                        <Table.Cell>{session.userName}</Table.Cell>
                        <Table.Cell>{session.phone}</Table.Cell>
                        <Table.Cell>{session.tutorName}</Table.Cell>
                        <Table.Cell>{session.subject}</Table.Cell>
                        <Table.Cell>{session.email}</Table.Cell>
                        <Table.Cell>
                          <Chip
                            color={session.status === "Booked" ? "success" : "danger"}
                            variant="flat"
                          >
                            {session.status}
                          </Chip>
                        </Table.Cell>
                        <Table.Cell>
                          <Button
                            isDisabled={session.status === "Cancelled"}
                            onClick={() => handleRemove(session._id)}
                            variant="danger-soft"
                            className="text-red-600"
                          >
                            Remove
                          </Button>
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
        <div className="flex min-h-[40vh] items-center justify-center">
          <h3 className="text-2xl font-semibold text-center">No sessions found.</h3>
        </div>
      )}
    </div>
  );
};

export default MyBookedSessions;

