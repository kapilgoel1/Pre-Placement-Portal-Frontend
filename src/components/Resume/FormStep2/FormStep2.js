import React from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { Form, Button, Input } from "reactstrap";
import {
  NavigationSection,
  Previous,
  Continue,
  Skill,
  SkillNumber,
} from "../Resume.elements";
import DCard from "../../DCard/DCard";

function FormStep2({ skills, setSkills, previousStep, nextStep }) {
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      test: skills,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "test",
  });

  const onSubmit = (data) => {
    console.log("data", data);
    setSkills(data.test.map((obj) => obj.skill));
    nextStep();
  };

  return (
    <>
      <h1 className="text-white text-center">Resume Builder</h1>
      <h4 className="text-white text-center">Add your skills in points</h4>
      <DCard width="600px">
        <Form onSubmit={handleSubmit(onSubmit)}>
          {fields.map((item, index) => {
            return (
              <Skill key={item.id}>
                <SkillNumber>{`${index + 1})`}</SkillNumber>
                <Controller
                  name={`test[${index}].skill`}
                  defaultValue={`${item.skill}`}
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
              </Skill>
            );
          })}

          <Button
            type="button"
            className="btn-lg btn-color2 btn-block mt-4"
            onClick={() => {
              append({ skill: "" });
            }}
          >
            ADD ANOTHER SKILL
          </Button>
          <NavigationSection>
            <Previous
              onClick={(e) => {
                let data = watch();
                setSkills(data.test.map((obj) => obj.skill));
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

export default FormStep2;
