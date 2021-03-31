import React, { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import swal from "sweetalert";
import DCard from "../../DCard/DCard";
import CourseContext from "../../../CourseContext";
import "./AddJob.scss";

const AddJob = () => {
  const { course } = useContext(CourseContext);

  const { handleSubmit, errors, control, reset } = useForm({
    defaultValues: {
      company: "",
      role: "",
      salaryrange: "",
      requirements: "",
      description: "",
    },
  });
  const onSubmit = (data) => {
    data.course = course;
    fetch("http://localhost:4000/jobposting/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.error) swal(swal(result.error));
        else swal("Job Posted!", "", "success");
        reset({
          company: "",
          role: "",
          salaryrange: "",
          requirements: "",
          description: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h1 className="text-center text-white">Post Jobs</h1>

      <DCard width="600px">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Label>
              Company Title<span className="text-primary"> *</span>
            </Label>
            <Controller
              name="company"
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
            <span className="text-primary">{errors.company?.message}</span>
          </FormGroup>
          <FormGroup>
            <Label>
              Job Title (Role)<span className="text-primary"> *</span>
            </Label>
            <Controller
              name="role"
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

            <span className="text-primary">{errors.role?.message}</span>
          </FormGroup>
          <FormGroup>
            <Label>Salary Range</Label>
            <Controller
              name="salaryrange"
              rules={{}}
              control={control}
              render={(props) => (
                <Input
                  type="text"
                  onChange={(e) => props.onChange(e.target.value)}
                  value={props.value}
                />
              )}
            />
          </FormGroup>
          <FormGroup>
            <Label>Job Eligibility Requirements</Label>
            <Controller
              name="requirements"
              rules={{}}
              control={control}
              render={(props) => (
                <Input
                  type="textarea"
                  rows={7}
                  onChange={(e) => props.onChange(e.target.value)}
                  value={props.value}
                />
              )}
            />
          </FormGroup>
          <FormGroup>
            <Label>Job Description</Label>
            <Controller
              name="description"
              rules={{}}
              control={control}
              render={(props) => (
                <Input
                  type="textarea"
                  rows={6}
                  onChange={(e) => props.onChange(e.target.value)}
                  value={props.value}
                />
              )}
            />
          </FormGroup>
          <FormGroup align="center">
            <Button type="submit">Submit</Button>
          </FormGroup>
        </Form>
      </DCard>
    </>
  );
};

export default AddJob;
