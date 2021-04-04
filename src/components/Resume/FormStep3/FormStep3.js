import React from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { Button, Form, Input } from "reactstrap";
import DCard from "../../DCard/DCard";
import {
  Achievement,
  AchievementNumber,
  Continue,
  NavigationSection,
  Previous,
} from "../Resume.elements";

function FormStep3({ achievements, setAchievements, previousStep, nextStep }) {
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      test: achievements,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "test",
  });

  const onSubmit = (data) => {
    setAchievements(data.test.map((obj) => obj.achievement));
    nextStep();
  };

  return (
    <>
      <h1 className="text-white text-center">Resume Builder</h1>
      <h4 className="text-white text-center">
        Add your achievements in points
      </h4>
      <DCard width="600px">
        <Form onSubmit={handleSubmit(onSubmit)}>
          {fields.map((item, index) => {
            return (
              <Achievement key={item.id}>
                <AchievementNumber>{`${index + 1})`}</AchievementNumber>

                <Controller
                  name={`test[${index}].achievement`}
                  defaultValue={`${item.achievement}`}
                  rules={{}}
                  control={control}
                  render={(props) => (
                    <Input
                      type="textarea"
                      onChange={(e) => props.onChange(e.target.value)}
                      value={props.value}
                      required
                    />
                  )}
                />

                <Button
                  type="button"
                  className="btn-color2"
                  onClick={() => remove(index)}
                >
                  Delete
                </Button>
              </Achievement>
            );
          })}
          <Button
            type="button"
            className="btn-lg btn-color2 btn-block mt-4"
            onClick={() => {
              append({ achievement: "" });
            }}
          >
            ADD ANOTHER ACHIEVEMENT
          </Button>
          <NavigationSection>
            <Previous
              onClick={(e) => {
                let data = watch();
                setAchievements(data.test.map((obj) => obj.achievement));
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

export default FormStep3;
