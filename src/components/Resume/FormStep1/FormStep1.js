import React from "react";
import { useForm } from "react-hook-form";

function FormStep1({ personalDetails, setPersonalDetails, nextStep }) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    setPersonalDetails(data);
    nextStep();
  }; // your form submit function which will invoke after successful validation

  // you can watch individual input by pass the name of the input

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Full Name</label>
        <input
          name="name"
          defaultValue={personalDetails.name}
          ref={register({ required: "This is required" })}
        />
        {errors.name?.message}
        <label>Address</label>
        <input
          name="address"
          defaultValue={personalDetails.address}
          ref={register({ required: "This is required" })}
        />
        {errors.address?.message}

        <label>Phone</label>
        <input
          name="phone"
          defaultValue={personalDetails.phone}
          ref={register({ required: "This is required" })}
        />
        {errors.phone?.message}

        <label>Email</label>
        <input
          name="email"
          defaultValue={personalDetails.email}
          ref={register({ required: "This is required" })}
        />
        {errors.email?.message}

        <label>DOB</label>
        <input
          name="dob"
          defaultValue={personalDetails.dob}
          ref={register({ required: "This is required" })}
        />
        {errors.dob?.message}
        <label>Languages Known</label>
        <input
          name="languagesKnown"
          defaultValue={personalDetails.languagesKnown}
          ref={register({ required: "This is required" })}
        />
        {errors.languagesKnown?.message}
        <label>Hobbies</label>
        <input
          name="hobbies"
          defaultValue={personalDetails.hobbies}
          ref={register({ required: "This is required" })}
        />
        {errors.hobbies?.message}
        <label>Career Objective</label>
        <input
          name="careerObjective"
          defaultValue={personalDetails.careerObjective}
          ref={register({ required: "This is required" })}
        />
        {errors.careerObjective?.message}
        <input type="submit" value="Continue" />
      </form>
    </div>
  );
}

export default FormStep1;
