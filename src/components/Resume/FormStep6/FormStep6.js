import React from "react";
import { useForm, useFieldArray } from "react-hook-form";

let renderCount = 0;

function FormStep6({ projects, setProjects, previousStep, nextStep }) {
  const { register, control, handleSubmit, watch } = useForm({
    defaultValues: {
      test: projects,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "test",
  });

  const onSubmit = (data) => {
    console.log("data", data);
    setProjects(data.test);
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
        <h1>PROJECTS </h1>
        <p>The following demo allow you to delete, append, prepend items</p>
        <span className="counter">Render Count: {renderCount}</span>
        <ul>
          {fields.map((item, index) => {
            return (
              <li key={item.id}>
                <label htmlFor="">Project Title</label>
                <input
                  name={`test[${index}].title`}
                  defaultValue={`${item.title}`} // make sure to set up defaultValue
                  ref={register()}
                  required
                />
                <label htmlFor="">Technologies Used</label>
                <input
                  name={`test[${index}].technologiesUsed`}
                  defaultValue={`${item.technologiesUsed}`} // make sure to set up defaultValue
                  ref={register()}
                  required
                />
                <label htmlFor="">Description</label>
                <input
                  name={`test[${index}].description`}
                  defaultValue={`${item.description}`} // make sure to set up defaultValue
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
              append({
                title: "",
                technologiesUsed: "",
                description: "",
              });
            }}
          >
            append
          </button>
        </section>

        <button
          onClick={(e) => {
            let data = watch();
            setProjects(data.test);
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

export default FormStep6;
