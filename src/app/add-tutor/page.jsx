"use client";

import React from "react";
import { Button, Input, TextArea, Select, ListBox } from "@heroui/react";

const AddTutorPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const tutorData = Object.fromEntries(formData.entries());

    console.log(tutorData);
  };

  return (
    <div className="max-w-3xl mx-auto py-30 px-6">
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
        <form onSubmit={handleSubmit} className="space-y-10">
          {/* PERSONAL INFORMATION */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-green-600 border-b pb-3 mb-6">
              Personal Information
            </h3>

            <div className="flex flex-col gap-5">
              <label>Tutor Name</label>
              <Input
                name="tutorName"
                label="Tutor Name"
                placeholder="Enter full name"
                isRequired
                className="md:col-span-2"
              />

              <label>Image URL</label>
              <Input
                name="profileImage"
                label="Profile Image URL"
                placeholder="https://example.com/photo.jpg"
                isRequired
                className="md:col-span-2"
              />

              <div className="md:col-span-2 grid md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-5">
                  <label>Institution</label>
                  <Input
                    name="institution"
                    label="Institution"
                    placeholder="e.g. Dhaka University"
                    isRequired
                  />
                </div>

                <div className="flex flex-col gap-5">
                  <label>Location (Area / City)</label>
                  <Input
                    name="location"
                    label="Location (Area / City)"
                    placeholder="e.g. Rajshahi"
                    isRequired
                  />
                </div>
              </div>
            </div>
          </div>

          {/* TEACHING DETAILS */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-green-600 border-b pb-3 mb-6">
              Teaching Details
            </h3>

            <div className="grid md:grid-cols-2 gap-5">
              <label>Subject / Category</label>
              <Select label="Subject / Category" name="subject" isRequired>
                <Select.Trigger className="w-full">
                  <Select.Value placeholder="Select a subject" />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover className="max-w-xl">
                  <ListBox className="max-h-56 w-full overflow-auto rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-lg">
                    <ListBox.Item value="Math">Math</ListBox.Item>
                    <ListBox.Item value="Physics">Physics</ListBox.Item>
                    <ListBox.Item value="Chemistry">Chemistry</ListBox.Item>
                    <ListBox.Item value="Biology">Biology</ListBox.Item>
                    <ListBox.Item value="English">English</ListBox.Item>
                    <ListBox.Item value="ICT">ICT</ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>

              <label>Teaching Mode</label>
              <Select label="Teaching Mode" name="teachingMode" isRequired>
                <Select.Trigger className="w-full">
                  <Select.Value placeholder="Select a Mode" />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover className="max-w-xl">
                  <ListBox className="max-h-56 w-full overflow-auto rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-lg">
                    <ListBox.Item value="Online">Online</ListBox.Item>
                    <ListBox.Item value="Offline">Offline</ListBox.Item>
                    <ListBox.Item value="Both">Both</ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>

              <label>Available Days & Time</label>
              <Input
                name="availableDays"
                label="Available Days & Time"
                placeholder="Example: Sun - Thu 5:00 PM - 8:00 PM"
                isRequired
                required
                className="md:col-span-2"
              />

              <label>Session Start Date</label>
              <Input
                type="date"
                name="sessionStartDate"
                label="Session Start Date"
                isRequired
                className="md:col-span-2"
              />

              <label>Experience</label>
              <TextArea
                name="experience"
                label="Experience"
                placeholder="3 years of teaching experience..."
                rows={5}
                isRequired
                required
                className="md:col-span-2"
              />
            </div>
          </div>

          {/* AVAILABILITY & PRICING */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-green-600 border-b pb-3 mb-6">
              Availability & Pricing
            </h3>

            <div className="grid md:grid-cols-2 gap-5">
              <label>Hourly Fee (৳)</label>
              <Input
                name="hourlyFee"
                type="number"
                label="Hourly Fee (৳)"
                placeholder="e.g. 500"
                isRequired
              />

              <label>Total Slots</label>
              <Input
                name="totalSlots"
                type="number"
                label="Total Slots"
                placeholder="e.g. 20"
                isRequired
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-[#0d8a6c] text-white font-semibold h-12 hover:bg-[#0a6b52]"
          >
            Register Tutor
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddTutorPage;
