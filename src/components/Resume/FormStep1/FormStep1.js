import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Form, FormGroup, Input, Label } from "reactstrap";
import DCard from "../../DCard/DCard";
import { Continue, NavigationSection } from "../Resume.elements";

function FormStep1({ personalDetails, setPersonalDetails, nextStep }) {
  const { handleSubmit, errors, control } = useForm({
    defaultValues: {
      name: personalDetails.name,
      address: personalDetails.address,
      phone: personalDetails.phone,
      email: personalDetails.email,
      dob: personalDetails.dob,
      languagesKnown: personalDetails.languagesKnown,
      hobbies: personalDetails.hobbies,
      careerObjective: personalDetails.careerObjective,
    },
  });
  const onSubmit = (data) => {
    setPersonalDetails(data);
    nextStep();
  };

  return (
    <>
      <h1 className="text-center text-white">Resume Builder</h1>
      <h4 className="text-center text-white">
        Fill Personal Details & Career Objective
      </h4>
      <DCard width="600px">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Label>Full Name</Label>
            <Controller
              name="name"
              rules={{ required: "This is required" }}
              control={control}
              render={(props) => (
                <Input
                  type="text"
                  onChange={(e) => props.onChange(e.target.value)}
                  value={props.value}
                />
              )}
            />
            {errors.name?.message}
          </FormGroup>
          <FormGroup>
            <Label>Address</Label>
            <Controller
              name="address"
              rules={{ required: "This is required" }}
              control={control}
              render={(props) => (
                <Input
                  type="text"
                  onChange={(e) => props.onChange(e.target.value)}
                  value={props.value}
                />
              )}
            />

            {errors.address?.message}
          </FormGroup>
          <FormGroup>
            <Label>Phone</Label>
            <Controller
              name="phone"
              rules={{ required: "This is required" }}
              control={control}
              render={(props) => (
                <Input
                  type="text"
                  onChange={(e) => props.onChange(e.target.value)}
                  value={props.value}
                />
              )}
            />

            {errors.phone?.message}
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Controller
              name="email"
              rules={{ required: "This is required" }}
              control={control}
              render={(props) => (
                <Input
                  type="text"
                  onChange={(e) => props.onChange(e.target.value)}
                  value={props.value}
                />
              )}
            />

            {errors.email?.message}
          </FormGroup>
          <FormGroup>
            <Label>DOB</Label>
            <Controller
              name="dob"
              rules={{ required: "This is required" }}
              control={control}
              render={(props) => (
                <Input
                  type="text"
                  onChange={(e) => props.onChange(e.target.value)}
                  value={props.value}
                />
              )}
            />

            {errors.dob?.message}
          </FormGroup>

          <FormGroup>
            <Label>Languages Known</Label>
            <Controller
              name="languagesKnown"
              rules={{ required: "This is required" }}
              control={control}
              render={(props) => (
                <Input
                  type="text"
                  onChange={(e) => props.onChange(e.target.value)}
                  value={props.value}
                />
              )}
            />

            {errors.languagesKnown?.message}
          </FormGroup>
          <FormGroup>
            <Label>Hobbies</Label>
            <Controller
              name="hobbies"
              rules={{ required: "This is required" }}
              control={control}
              render={(props) => (
                <Input
                  type="text"
                  onChange={(e) => props.onChange(e.target.value)}
                  value={props.value}
                />
              )}
            />
            {errors.hobbies?.message}
          </FormGroup>
          <FormGroup>
            <Label>Career Objective</Label>
            <Controller
              name="careerObjective"
              rules={{ required: "This is required" }}
              control={control}
              render={(props) => (
                <Input
                  type="textarea"
                  rows={3}
                  onChange={(e) => props.onChange(e.target.value)}
                  value={props.value}
                />
              )}
            />
            {errors.careerObjective?.message}
          </FormGroup>
          <NavigationSection>
            <Continue>Continue</Continue>
          </NavigationSection>
        </Form>
      </DCard>
    </>
  );
}

export default FormStep1;
