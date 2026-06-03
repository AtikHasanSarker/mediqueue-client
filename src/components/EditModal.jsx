"use client";

import {
  Button,
  FieldError,
  Select,
  Input,
  Label,
  ListBox,
  TextArea,
  TextField,
  Modal,
  Surface,
  Form,
} from "@heroui/react";
import toast from "react-hot-toast";
import { FaEdit } from "react-icons/fa";

export function EditNodal({ tutor }) {
  const {
    name,
    photoURL,
    sessionStartDate,
    hourlyFee,
    availableDays,
    subject,
    institution,
    location,
    teachingMode,
    totalSlot,
    experience,
  } = tutor;

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const tutorData = Object.fromEntries(formData.entries());
    const res = await fetch(`http://localhost:5000/my-tutors/${tutor._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(tutorData),
    });
    const data = await res.json();
    if (data.modifiedCount > 0) {
      window.location.reload()
      toast.success("Updated Tutor Details Successfully!")
    }else{
      toast.error("Update Failed!")
    }
    console.log(data);
  };
  return (
    <Modal>
      <Button variant="secondary" className="text-green-600">
        <FaEdit />
        Edit
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <h2 className="text-2xl font-semibold mb-6 flex gap-3">
              <FaEdit />  Update Tutor Information
            </h2>
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>
                Update tutor details and save changes.
              </Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6 max-h-[calc(100vh-8rem)] overflow-y-auto">
              <Surface variant="default">
                <Form onSubmit={onSubmit} className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <TextField
                      name="name"
                      defaultValue={name}
                      validate={(value) => {
                        if (value.length < 3) {
                          return "Name must be at least 3 characters";
                        }
                        return null;
                      }}
                    >
                      <Label className="font-semibold">Tutor Name</Label>
                      <Input />
                      <FieldError />
                    </TextField>

                    <TextField name="photoUrl" defaultValue={photoURL}>
                      <Label className="font-semibold">Image URL</Label>
                      <Input type="url" />
                      <FieldError />
                    </TextField>

                    <TextField name="institution" defaultValue={institution}>
                      <Label className="font-semibold">Institution</Label>
                      <Input />
                      <FieldError />
                    </TextField>
                    <TextField defaultValue={location} name="location">
                      <Label className="font-semibold">
                        Location (Area / City)
                      </Label>
                      <Input />
                      <FieldError />
                    </TextField>

                    <TextField defaultValue={subject} name="subject">
                      <Label className="font-semibold">
                        Subject / Category
                      </Label>
                      <Select
                        defaultValue={subject}
                        label="Subject"
                        name="subject"
                      >
                        <Select.Trigger className="w-full">
                          <Select.Value />
                          <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover className="max-w-xl">
                          <ListBox className="max-h-56 w-full overflow-auto rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-lg">
                            <ListBox.Item id="Math">Math</ListBox.Item>
                            <ListBox.Item id="Physics">Physics</ListBox.Item>
                            <ListBox.Item id="Chemistry">
                              Chemistry
                            </ListBox.Item>
                            <ListBox.Item id="Biology">Biology</ListBox.Item>
                            <ListBox.Item id="English">English</ListBox.Item>
                            <ListBox.Item id="ICT">ICT</ListBox.Item>
                          </ListBox>
                        </Select.Popover>
                      </Select>
                      <FieldError />
                    </TextField>

                    <TextField name="teachingMode" defaultValue={teachingMode}>
                      <Label className="font-semibold">Teaching Mode</Label>

                      <Select
                        defaultValue={teachingMode}
                        label="Teaching Mode"
                        name="teachingMode"
                      >
                        <Select.Trigger className="w-full">
                          <Select.Value />
                          <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover className="max-w-xl">
                          <ListBox className="max-h-56 w-full overflow-auto rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-lg">
                            <ListBox.Item id="Online">Online</ListBox.Item>
                            <ListBox.Item id="Offline">Offline</ListBox.Item>
                            <ListBox.Item id="Both">Both</ListBox.Item>
                          </ListBox>
                        </Select.Popover>
                      </Select>
                      <FieldError />
                    </TextField>

                    <TextField
                      defaultValue={availableDays}
                      name="availableDays"
                    >
                      <Label className="font-semibold">
                        Available Days & Time
                      </Label>
                      <Input
                        name="availableDays"
                        label="Available Days & Time"
                      />
                      <FieldError />
                    </TextField>

                    <TextField
                      defaultValue={sessionStartDate}
                      name="sessionStartDate"
                    >
                      <Label className="font-semibold">
                        Session Start Date
                      </Label>
                      <Input
                        type="date"
                        name="sessionStartDate"
                        label="Session Start Date"
                        className="md:col-span-2"
                      />
                      <FieldError />
                    </TextField>

                    <TextField defaultValue={experience} name="experience">
                      <Label className="font-semibold">Experience</Label>
                      <TextArea
                        name="experience"
                        label="Experience"
                        placeholder="3 years of teaching experience..."
                      />
                      <FieldError />
                    </TextField>

                    <TextField defaultValue={hourlyFee} name="hourlyFee">
                      <Label className="font-semibold">Hourly Fee (৳)</Label>
                      <Input
                        name="hourlyFee"
                        type="number"
                        label="Hourly Fee (৳)"
                        placeholder="e.g. 500"
                      />
                      <FieldError />
                    </TextField>

                    <TextField defaultValue={totalSlot} name="totalSlots">
                      <Label className="font-semibold">Total Slots</Label>
                      <Input
                        name="totalSlots"
                        type="number"
                        label="Total Slots"
                        placeholder="e.g. 20"
                      />
                      <FieldError />
                    </TextField>
                  </div>
                  <Modal.Footer>
                    <Button variant="outline" slot="close">
                      Cancel
                    </Button>
                    <Button slot="close" type="submit" className="bg-[#0d8a6c]">
                      Update Tutor
                    </Button>
                  </Modal.Footer>
                </Form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
