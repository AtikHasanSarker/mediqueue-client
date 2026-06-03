"use client";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Button, Table } from "@heroui/react";
import DeleteModal from "@/components/DeleteModal";
import { EditNodal } from "@/components/EditModal";

const MyTutorsPage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    if (!user?.id) return;
    const fetchTutors = async () => {
      const res = await fetch(`http://localhost:5000/my-tutors/${user.id}`);
      const data = await res.json();
      setTutors(data);
    };

    fetchTutors();
  }, [user?.id]);


  return (
    <div className="pt-40 pb-20 text-center max-w-6xl min-h-screen mx-auto px-6">
      {tutors?.length > 0 ? (
        <div>
          <h2 className="text-3xl font-bold mb-8">Here are your tutors</h2>
          <Table>
            <Table.ScrollContainer>
              <Table.Content
                aria-label="Team members"
                className="min-w-[600px]"
              >
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
                      <Table.Cell className="flex gap-2">
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
      ) : (
        <h3 className="text-2xl font-semibold">No tutors found.</h3>
      )}
    </div>
  );
};

export default MyTutorsPage;
