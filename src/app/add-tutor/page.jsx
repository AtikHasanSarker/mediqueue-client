
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function AddTutorPage() {
  return (
    <div className="min-h-screen flex justify-center my-32 px-4">
      <div className="w-3xl border rounded-2xl p-8 bg-white shadow-sm">
        <form className="space-y-6">
          {/* Tutor Name */}
          <div className="space-y-2">
            <Label>Tutor Name</Label>
            <Input placeholder="Rahim Ahmed" />
          </div>

          {/* Photo URL */}
          <div className="space-y-2">
            <Label>Photo URL</Label>
            <Input placeholder="imgbb / postimage link" />
          </div>

          {/* Subject */}
          <div className="space-y-2">
            <Label>Subject / Category</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="math">Math</SelectItem>
                <SelectItem value="physics">Physics</SelectItem>
                <SelectItem value="chemistry">Chemistry</SelectItem>
                <SelectItem value="english">English</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Available Time */}
          <div className="space-y-2">
            <Label>Available Days and Time</Label>
            <Input placeholder="Sun - Thu 5:00 PM - 8:00 PM" />
          </div>

          {/* Hourly Fee */}
          <div className="space-y-2">
            <Label>Hourly Fee</Label>
            <Input type="number" placeholder="500" />
          </div>

          {/* Total Slot */}
          <div className="space-y-2">
            <Label>Total Slot</Label>
            <Input type="number" placeholder="10" />
          </div>

          {/* Date */}
          <div className="space-y-2">
            <Label>Session Start Date</Label>
            <Input type="date" />
          </div>

          {/* Institution */}
          <div className="space-y-2">
            <Label>Institution</Label>
            <Input placeholder="Dhaka University" />
          </div>

          {/* Experience */}
          <div className="space-y-2">
            <Label>Experience</Label>
            <Textarea
              placeholder="3 years teaching experience..."
              className="min-h-[120px]"
            />
          </div>

          {/* Location */}
          <div className="space-y-2">
            <Label>Location (Area/City)</Label>
            <Input placeholder="Khulna" />
          </div>

          {/* Teaching Mode */}
          <div className="space-y-2">
            <Label>Teaching Mode</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Mode" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="online">Online</SelectItem>
                <SelectItem value="offline">Offline</SelectItem>
                <SelectItem value="both">Both</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button className="w-full bg-[#0d8a6c]">Submit Tutor</Button>
        </form>
      </div>
    </div>
  );
}