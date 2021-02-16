import React from "react";
import { useForm, useFieldArray } from "react-hook-form";

let renderCount = 0;

function FormStep4({ education, setEducation, previousStep, nextStep }) {
  const { register, control, handleSubmit, watch } = useForm({
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
  // if you want to control your fields with watch
  // const watchResult = watch("test");
  // console.log(watchResult);

  // The following is useWatch example
  // console.log(useWatch({ name: "test", control }));

  renderCount++;

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>EDUCATION </h1>
        <p>The following demo allow you to delete, append, prepend items</p>
        <span className="counter">Render Count: {renderCount}</span>
        <ul>
          {fields.map((item, index) => {
            return (
              <li key={item.id}>
                <label htmlFor="">From Year</label>
                <input
                  name={`test[${index}].fromYear`}
                  defaultValue={`${item.fromYear}`} // make sure to set up defaultValue
                  ref={register()}
                  required
                />
                <label htmlFor="">ToYear</label>
                <input
                  name={`test[${index}].toYear`}
                  defaultValue={`${item.toYear}`} // make sure to set up defaultValue
                  ref={register()}
                  required
                />
                <label htmlFor="">Qualification</label>
                <input
                  name={`test[${index}].qualification`}
                  defaultValue={`${item.qualification}`} // make sure to set up defaultValue
                  ref={register()}
                  required
                />
                <label htmlFor="">Institute/Board/University</label>
                <input
                  name={`test[${index}].institute`}
                  defaultValue={`${item.institute}`} // make sure to set up defaultValue
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
                fromYear: "",
                toYear: "",
                qualification: "",
                institute: "",
              });
            }}
          >
            append
          </button>
        </section>

        <button
          onClick={(e) => {
            let data = watch();
            setEducation(data.test);
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

export default FormStep4;
