"use client";

import React from "react";
import {
  Button,
  Input,
  TextArea,
  Select,
  ListBox,
  TextField,
  Label,
  FieldError,
  Form,
} from "@heroui/react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

const AddTutorPage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const tutorData = Object.fromEntries(formData.entries());
    tutorData.userId = user?.id;
    console.log("tutorData from add-tutor page: ", tutorData);

    const res = await fetch("http://localhost:5000/tutors", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(tutorData),
    });
    const data = await res.json();
    if (data.acknowledged) {
      toast.success("Tutor added successfully!");
      // window.location.reload();
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-30 px-6">
      {/* Header */}
      <div className="mb-8">
        <span className="text-xs font-medium px-3 py-1 rounded-full bg-green-50 text-green-600 border border-green-200">
          TUTOR MANAGEMENT
        </span>

        <h1 className="text-4xl font-bold mt-4">Add New Tutor</h1>

        <p className="text-default-500 mt-2">
          Fill in the details below to register a new tutor profile.
        </p>
      </div>

      <div className="border rounded-2xl p-8 shadow-sm bg-white">
        <Form onSubmit={onSubmit} className="space-y-10">
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-10">
              {/* PERSONAL INFORMATION */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-green-600 border-b pb-3 mb-6">
                  Personal Information
                </h3>
                <div className="space-y-6">
                  <TextField
                    required
                    name="name"
                    validate={(value) => {
                      if (value.length < 3) {
                        return "Name must be at least 3 characters";
                      }
                      return null;
                    }}
                  >
                    <Label className="font-semibold">Tutor Name</Label>
                    <Input placeholder="Enter your full name" />
                    <FieldError />
                  </TextField>

                  <TextField name="photoURL" required>
                    <Label className="font-semibold">Image URL</Label>
                    <Input
                      type="url"
                      placeholder="https://example.com/tutor.jpg"
                      className="rounded-2xl"
                    />
                    <FieldError />
                  </TextField>

                  <TextField required name="institution">
                    <Label className="font-semibold">Institution</Label>
                    <Input placeholder="e.g. University of Rajshahi" />
                    <FieldError />
                  </TextField>
                  <TextField required name="location">
                    <Label className="font-semibold">
                      Location (Area / City)
                    </Label>
                    <Input placeholder="e.g. Rajshahi" />
                    <FieldError />
                  </TextField>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-green-600 border-b pb-3 mb-6">
                  Availability & Pricing
                </h3>

                <div className="grid md:grid-cols-2 gap-5">
                  <TextField required name="hourlyFee">
                    <Label className="font-semibold">Hourly Fee (৳)</Label>
                    <Input
                      type="number"
                      label="Hourly Fee (৳)"
                      placeholder="e.g. 500"
                    />
                    <FieldError />
                  </TextField>

                  <TextField required name="totalSlot">
                    <Label className="font-semibold">Total Slots</Label>
                    <Input
                      type="number"
                      label="Total Slots"
                      placeholder="e.g. 20"
                    />
                    <FieldError />
                  </TextField>
                </div>
              </div>
            </div>

            {/* TEACHING DETAILS */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-green-600 border-b pb-3 mb-6">
                Teaching Details
              </h3>

              <div className="space-y-6">
                <TextField required name="subject">
                  <Label className="font-semibold">Subject / Category</Label>
                  <Select label="subject" name="subject">
                    <Select.Trigger className="w-full">
                      <Select.Value placeholder="Select a subject" />
                      <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover className="max-w-xl">
                      <ListBox className="max-h-56 w-full overflow-auto rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-lg">
                        <ListBox.Item id="Math">Math</ListBox.Item>
                        <ListBox.Item id="Physics">Physics</ListBox.Item>
                        <ListBox.Item id="Chemistry">Chemistry</ListBox.Item>
                        <ListBox.Item id="Biology">Biology</ListBox.Item>
                        <ListBox.Item id="English">English</ListBox.Item>
                        <ListBox.Item id="ICT">ICT</ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>
                  <FieldError />
                </TextField>

                <TextField required name="teachingMode">
                  <Label className="font-semibold">Teaching Mode</Label>

                  <Select label="Teaching Mode" name="teachingMode">
                    <Select.Trigger className="w-full">
                      <Select.Value placeholder="Select a Mode" />
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

                <TextField required name="availableDays">
                  <Label className="font-semibold">Available Days & Time</Label>
                  <Input
                    
                    label="Available Days & Time"
                    placeholder="Example: Sun - Thu 5:00 PM - 8:00 PM"
                    className="md:col-span-2"
                  />
                  <FieldError />
                </TextField>

                <TextField required name="sessionStartDate">
                  <Label className="font-semibold">Session Start Date</Label>
                  <Input
                    type="date"
                    label="Session Start Date"
                    className="md:col-span-2"
                  />
                  <FieldError />
                </TextField>

                <TextField required name="experience">
                  <Label className="font-semibold">Experience</Label>
                  <TextArea
                    label="Experience"
                    placeholder="3 years of teaching experience..."
                    rows={5}
                    className="md:col-span-2"
                  />
                  <FieldError />
                </TextField>
              </div>
            </div>

            {/* AVAILABILITY & PRICING */}
          </div>

          <Button
            type="submit"
            className="w-full bg-[#0d8a6c] text-white font-semibold h-12 hover:bg-[#0a6b52]"
          >
            Register Tutor
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddTutorPage;
