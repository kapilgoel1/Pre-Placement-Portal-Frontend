import React from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import {
  NavigationSection,
  Previous,
  Continue,
  WithDelete,
  Delete,
} from "../Resume.elements";
import { Form, Input, Button, Label } from "reactstrap";
import DCard from "../../DCard/DCard";
import { ordinal_suffix_of } from "../../../utils";

function FormStep4({ education, setEducation, previousStep, nextStep }) {
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      test: education,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "test",
  });

  const onSubmit = (data) => {
    console.log("data", data);
    setEducation(data.test);
    nextStep();
  };

  return (
    <>
      <h1 className="text-white text-center">Resume Builder</h1>
      <h4 className="text-white text-center">
        Add your educational qualifications in chronological order
      </h4>
      <DCard width="600px">
        <Form onSubmit={handleSubmit(onSubmit)}>
          {fields.map((item, index) => {
            return (
              <div key={item.id} className="mb-5">
                <WithDelete>
                  <h5>{`${ordinal_suffix_of(index + 1)} Qualification`}</h5>
                  <Delete type="button" onClick={() => remove(index)}>
                    Delete
                  </Delete>
                </WithDelete>

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

                <Label htmlFor="">Qualification</Label>
                <Controller
                  name={`test[${index}].qualification`}
                  defaultValue={`${item.qualification}`}
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

                <Label htmlFor="">Institute/Board/University</Label>
                <Controller
                  name={`test[${index}].institute`}
                  defaultValue={`${item.institute}`}
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
            className="btn-lg btn-block mt-4"
            onClick={() => {
              append({
                fromYear: "",
                toYear: "",
                qualification: "",
                institute: "",
              });
            }}
          >
            ADD ANOTHER EDUCATION QUALIFICATION
          </Button>
          <NavigationSection>
            <Previous
              onClick={(e) => {
                let data = watch();
                setEducation(data.test);
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

export default FormStep4;
