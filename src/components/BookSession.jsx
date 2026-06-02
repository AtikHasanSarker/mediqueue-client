"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaUserPlus } from "react-icons/fa";
import { MdOutlineBookmarks } from "react-icons/md";

const BookSession = ({ tutor }) => {
  const [loading, setLoading] = useState(false);
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const { name, _id, subject } = tutor;

const onSubmit = async(e)=>{
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const bookingData = Object.fromEntries(formData.entries());
  
        setLoading(true);   
        const res = await fetch('http://localhost:5000/booked-sessions', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        });
        const data = await res.json()
        if(data.acknowledged){
            toast.success('Session booked successfully!')
        }
        setLoading(false)
      }



  return (
    <Modal>
      <Button
        isDisabled={loading}
        className="mt-4 bg-[#0d8a6c] hover:bg-[#0a6b52] py-6 font-semibold"
      >
        {" "}
        {loading ? " <Spinner /> Booking..." : "Book Session"}
        <MdOutlineBookmarks />
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-emerald-200/40 text-[#0d8a6c]">
                <FaUserPlus className="size-5" />
              </Modal.Icon>
              <Modal.Heading className="text-[#0d8a6c] font-bold text-2xl">
                Book This Session
              </Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Fill out the form below to book this session. We'll get back to
                you soon.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <TextField
                    defaultValue={user?.id}
                    className="w-full"
                    name="userId"
                    variant="secondary"
                  >
                    <Label className="font-semibold">User ID</Label>
                    <Input />
                  </TextField>
                  <TextField
                    defaultValue={user?.name}
                    className="w-full"
                    name="userName"
                    type="text"
                    variant="secondary"
                  >
                    <Label className="font-semibold">Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField
                    defaultValue={user?.email}
                    className="w-full"
                    name="email"
                    type="email"
                    variant="secondary"
                  >
                    <Label className="font-semibold">Email</Label>
                    <Input placeholder="Enter your email" />
                  </TextField>
                  <TextField
                    className="w-full"
                    name="phone"
                    type="tel"
                    variant="secondary"
                  >
                    <Label className="font-semibold">Phone</Label>
                    <Input placeholder="Enter your phone number" />
                  </TextField>
                  <TextField
                    defaultValue={_id}
                    className="w-full"
                    name="tutorId"
                    variant="secondary"
                  >
                    <Label className="font-semibold">Tutor ID</Label>
                    <Input />
                  </TextField>
                  <TextField
                    defaultValue={name}
                    className="w-full"
                    name="tutorName"
                    variant="secondary"
                  >
                    <Label className="font-semibold">Tutor Name</Label>
                    <Input />
                  </TextField>
                  <TextField
                    defaultValue={subject}
                    className="w-full"
                    name="subject"
                    variant="secondary"
                  >
                    <Label className="font-semibold">Subject</Label>
                    <Input />
                  </TextField>
                  <Modal.Footer>
                    <Button
                      slot="close"
                      variant="secondary"
                      className="text-[#0d8a6c] font-semibold"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      slot="close"
                      className="bg-[#0d8a6c] hover:bg-[#0a6b52] py-3 font-semibold"
                    >
                      Book Session
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default BookSession;
