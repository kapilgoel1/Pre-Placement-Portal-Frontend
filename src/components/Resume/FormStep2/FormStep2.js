import React from "react";
import { useForm, useFieldArray } from "react-hook-form";

let renderCount = 0;

function FormStep2({ skills, setSkills, previousStep, nextStep }) {
  const { register, control, handleSubmit, watch } = useForm({
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

  // if you want to control your fields with watch
  // const watchResult = watch("test");
  // console.log(watchResult);

  // The following is useWatch example
  // console.log(useWatch({ name: "test", control }));

  renderCount++;

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>SKILLS </h1>
        <p>The following demo allow you to delete, append, prepend items</p>
        <span className="counter">Render Count: {renderCount}</span>
        <ul>
          {fields.map((item, index) => {
            return (
              <li key={item.id}>
                <input
                  name={`test[${index}].skill`}
                  defaultValue={`${item.skill}`} // make sure to set up defaultValue
                  ref={register()}
                  required
                />
                <button type="button" onClick={() => remove(index)}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
        <section>
          <button
            type="button"
            onClick={() => {
              append({ skill: "" });
            }}
          >
            append
          </button>
        </section>

        <button
          onClick={(e) => {
            let data = watch();
            setSkills(data.test.map((obj) => obj.skill));
            previousStep();
          }}
        >
          Previous
        </button>
        <input type="submit" value="Continue" />
      </form>
    </>
  );
}

export default FormStep2;
