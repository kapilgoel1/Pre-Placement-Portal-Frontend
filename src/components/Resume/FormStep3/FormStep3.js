import React from "react";
import { useForm, useFieldArray } from "react-hook-form";

let renderCount = 0;

function FormStep3({ achievements, setAchievements, previousStep, nextStep }) {
  const { register, control, handleSubmit, watch } = useForm({
    defaultValues: {
      test: achievements,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "test",
  });

  const onSubmit = (data) => {
    console.log("data", data);
    setAchievements(data.test.map((obj) => obj.achievement));
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
        <h1>ACHIEVEMENTS </h1>
        <p>The following demo allow you to delete, append, prepend items</p>
        <span className="counter">Render Count: {renderCount}</span>
        <ul>
          {fields.map((item, index) => {
            return (
              <li key={item.id}>
                <input
                  name={`test[${index}].achievement`}
                  defaultValue={`${item.achievement}`} // make sure to set up defaultValue
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
              append({ achievement: "" });
            }}
          >
            append
          </button>
        </section>

        <button
          onClick={(e) => {
            let data = watch();
            setAchievements(data.test.map((obj) => obj.achievement));
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

export default FormStep3;
