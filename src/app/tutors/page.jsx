import { TutorCard } from '@/components/TutorCard';
import { Field, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import React from 'react';

const TutorsPage = async() => {
    const res = await fetch("http://localhost:5000/tutors");
    const tutors = await res.json()
    return (
      <div className="pt-30 pb-20 max-w-6xl mx-auto">
        <h2 className="text-4xl my-20 text-center font-bold">All Tutors</h2>
        <div>
          <Field>
            <FieldLabel htmlFor="checkout-7j9-card-name-43j">
              Name on Card
            </FieldLabel>
            <Input
              id="checkout-7j9-card-name-43j"
              placeholder="Evil Rabbit"
              required
            />
          </Field>
        </div>
        <div className="grid grid-cols-3 gap-8 mt-10">
          {tutors.map((tutor) => (
            <TutorCard key={tutor._id} tutor={tutor}></TutorCard>
          ))}
        </div>
      </div>
    );
};

export default TutorsPage;