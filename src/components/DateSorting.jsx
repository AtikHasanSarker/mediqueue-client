'use client'
import { Input, Label, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";

const DateSorting = () => {
    const router = useRouter();
  const handleSorting = (e) => {
    const date = e.target.value;

    if (date) {
      router.push(`/tutors?date=${date}`);
    } else {
      router.push("/tutors");
    }
  };
  return (
    <div>
      <TextField className="flex-end" required name="sessionStartDate">
        <Label className="font-semibold">Session Start Date</Label>
        <Input
          onChange={handleSorting}
          type="date"
          label="Session Start Date"
          className="md:col-span-2 text-foreground"
        />
      </TextField>
    </div>
  );
};

export default DateSorting;
