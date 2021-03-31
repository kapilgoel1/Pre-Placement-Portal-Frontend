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
  ResponsibilityNumber,
  Responsibiltity,
  WithDelete,
} from "../Resume.elements";

function FormStep5({
  workExperience,
  setWorkExperience,
  previousStep,
  nextStep,
}) {
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      test: workExperience,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "test",
  });

  const onSubmit = (data) => {
    console.log("data", data);
    setWorkExperience(data.test);
    nextStep();
  };

  return (
    <>
      <h1 className="text-white text-center">Resume Builder</h1>
      <h4 className="text-white text-center">
        Add your Work Experiences in chronological order (Adding work experience
        is optional)
      </h4>
      <DCard width="600px">
        <Form onSubmit={handleSubmit(onSubmit)}>
          {fields.map((item, index) => {
            return (
              <div key={item.id} className="mb-5">
                <WithDelete>
                  <h5>{`${ordinal_suffix_of(index + 1)} Work Experience`}</h5>
                  <Delete
                    type="button"
                    className="btn-color2"
                    onClick={() => remove(index)}
                  >
                    Delete
                  </Delete>
                </WithDelete>

                <Label htmlFor="">Company</Label>
                <Controller
                  name={`test[${index}].company`}
                  defaultValue={`${item.company}`}
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

                <Label htmlFor="">Role</Label>
                <Controller
                  name={`test[${index}].role`}
                  defaultValue={`${item.role}`}
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

                <Label htmlFor="">State</Label>
                <Controller
                  name={`test[${index}].state`}
                  defaultValue={`${item.state}`}
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

                <Label htmlFor="">From Year</Label>
                <Controller
                  name={`test[${index}].fromYear`}
                  defaultValue={`${item.fromYear}`}
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

                <Label htmlFor="">ToYear</Label>
                <Controller
                  name={`test[${index}].toYear`}
                  defaultValue={`${item.toYear}`}
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

                <Label htmlFor="">Responsibilities(ADD UPTO 4)</Label>
                <Responsibiltity>
                  <ResponsibilityNumber>1)</ResponsibilityNumber>
                  <Controller
                    name={`test[${index}].responsibility1`}
                    defaultValue={`${item.responsibility1}`}
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
                </Responsibiltity>
                <Responsibiltity>
                  <ResponsibilityNumber>2)</ResponsibilityNumber>
                  <Controller
                    name={`test[${index}].responsibility2`}
                    defaultValue={`${item.responsibility2}`}
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
                </Responsibiltity>
                <Responsibiltity>
                  <ResponsibilityNumber>3)</ResponsibilityNumber>
                  <Controller
                    name={`test[${index}].responsibility3`}
                    defaultValue={`${item.responsibility3}`}
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
                </Responsibiltity>
                <Responsibiltity>
                  <ResponsibilityNumber>4)</ResponsibilityNumber>
                  <Controller
                    name={`test[${index}].responsibility4`}
                    defaultValue={`${item.responsibility4}`}
                    rules={{}}
                    control={control}
                    render={(props) => (
                      <Input
                        type="text"
                        className="mb-2"
                        onChange={(e) => props.onChange(e.target.value)}
                        value={props.value}
                      />
                    )}
                  />
                </Responsibiltity>
              </div>
            );
          })}
          <Button
            type="button"
            className="btn-lg btn-color2 btn-block mt-4"
            onClick={() => {
              append({
                company: "",
                role: "",
                state: "",
                fromYear: "",
                toYear: "",
                responsibility1: "",
                responsibility2: "",
                responsibility3: "",
                responsibility4: "",
              });
            }}
          >
            ADD ANOTHER WORK EXPERIENCE
          </Button>
          <NavigationSection>
            <Previous
              onClick={(e) => {
                let data = watch();
                setWorkExperience(data.test);
                previousStep();
              }}
            >
              Previous
            </Previous>
            <Continue>Continue</Continue>
          </NavigationSection>
        </Form>
      </DCard>
    </>
  );
}

export default FormStep5;
