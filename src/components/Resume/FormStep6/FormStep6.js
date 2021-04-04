import React from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { Button, Form, Input, Label } from "reactstrap";
import { ordinal_suffix_of } from "../../../utils";
import DCard from "../../DCard/DCard";
import {
  Continue,
  Delete,
  NavigationSection,
  Previous,
  WithDelete,
} from "../Resume.elements";

function FormStep6({ projects, setProjects, previousStep, nextStep }) {
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      test: projects,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "test",
  });

  const onSubmit = (data) => {
    setProjects(data.test);
    nextStep();
  };

  return (
    <>
      <h1 className="text-white text-center">Resume Builder</h1>
      <h4 className="text-white text-center">Add your projects</h4>
      <DCard width="600px">
        <Form onSubmit={handleSubmit(onSubmit)}>
          {fields.map((item, index) => {
            return (
              <div key={item.id} className="mb-5">
                <WithDelete>
                  <h5>{`${ordinal_suffix_of(index + 1)} Project`}</h5>
                  <Delete
                    type="button"
                    className="btn-color2"
                    onClick={() => remove(index)}
                  >
                    Delete
                  </Delete>
                </WithDelete>
                <Label htmlFor="">Project Title</Label>
                <Controller
                  name={`test[${index}].title`}
                  defaultValue={`${item.title}`}
                  rules={{}}
                  control={control}
                  render={(props) => (
                    <Input
                      type="text"
                      className="mb-2"
                      onChange={(e) => props.onChange(e.target.value)}
                      value={props.value}
                      required
                    />
                  )}
                />

                <Label htmlFor="">Technologies Used</Label>
                <Controller
                  name={`test[${index}].technologiesUsed`}
                  defaultValue={`${item.technologiesUsed}`}
                  rules={{}}
                  control={control}
                  render={(props) => (
                    <Input
                      type="text"
                      className="mb-2"
                      onChange={(e) => props.onChange(e.target.value)}
                      value={props.value}
                      required
                    />
                  )}
                />

                <Label htmlFor="">Description</Label>
                <Controller
                  name={`test[${index}].description`}
                  defaultValue={`${item.description}`}
                  rules={{}}
                  control={control}
                  render={(props) => (
                    <Input
                      type="text"
                      className="mb-2"
                      onChange={(e) => props.onChange(e.target.value)}
                      value={props.value}
                      required
                    />
                  )}
                />
              </div>
            );
          })}
          <Button
            type="button"
            className="btn-lg btn-color2 btn-block mt-4"
            onClick={() => {
              append({
                title: "",
                technologiesUsed: "",
                description: "",
              });
            }}
          >
            ADD ANOTHER PROJECT
          </Button>
          <NavigationSection>
            <Previous
              onClick={(e) => {
                let data = watch();
                setProjects(data.test);
                previousStep();
              }}
            >
              Previous
            </Previous>
            <Continue>Generate Resume</Continue>
          </NavigationSection>
        </Form>
      </DCard>
    </>
  );
}

export default FormStep6;
