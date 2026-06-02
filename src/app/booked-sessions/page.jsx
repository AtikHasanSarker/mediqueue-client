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
          const res = await fetch(`http://localhost:5000/booked-sessions/${user.id}`);  
          const data = await res.json();
          setBookedSessions(data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchBookedSessions();
    }, [user?.id]);
  
    console.log("bookedSessions", bookedSessions);
  
  return (
    <div className="pt-40 pb-20 text-center max-w-6xl min-h-screen mx-auto px-6">
      {bookedSessions?.length > 0 ? (
        <div>
          <div className="mb-8">
            <h1 className="text-4xl font-bold">Your Booked Session</h1>
            <p className="text-default-500 mt-2">
              Manage your enrolled tutors and sessions
            </p>
          </div>

          <Table>
            <Table.ScrollContainer>
              <Table.Content
                aria-label="Team members"
                className="min-w-[600px]"
              >
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
                        <Chip color="success" variant="flat">
                          Booked
                        </Chip>
                      </Table.Cell>
                      <Table.Cell>
                        <Button className="bg-emerald-600">Edit</Button>
                        <Button variant="danger" className="ml-2">
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
      ) : (
        <div className="flex items-center">
          <h3 className="text-xl font-semibold">No Sessions found.</h3>
        </div>
      )}
    </div>
  );
};

export default MyBookedSessions;

