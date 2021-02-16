import React from "react";
import { useForm, useFieldArray } from "react-hook-form";

let renderCount = 0;

function FormStep5({
  workExperience,
  setWorkExperience,
  previousStep,
  nextStep,
}) {
  const { register, control, handleSubmit, watch } = useForm({
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
  // if you want to control your fields with watch
  // const watchResult = watch("test");
  // console.log(watchResult);

  // The following is useWatch example
  // console.log(useWatch({ name: "test", control }));

  renderCount++;

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>WORK EXPERIENCE </h1>
        <p>The following demo allow you to delete, append, prepend items</p>
        <span className="counter">Render Count: {renderCount}</span>
        <ul>
          {fields.map((item, index) => {
            return (
              <li key={item.id}>
                <label htmlFor="">Company</label>
                <input
                  name={`test[${index}].company`}
                  defaultValue={`${item.company}`} // make sure to set up defaultValue
                  ref={register()}
                  required
                />
                <label htmlFor="">Role</label>
                <input
                  name={`test[${index}].role`}
                  defaultValue={`${item.role}`} // make sure to set up defaultValue
                  ref={register()}
                  required
                />
                <label htmlFor="">State</label>
                <input
                  name={`test[${index}].state`}
                  defaultValue={`${item.state}`} // make sure to set up defaultValue
                  ref={register()}
                  required
                />
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
                <label htmlFor="">Responsibilities(ADD UPTO 4)</label>
                <input
                  name={`test[${index}].responsibility1`}
                  defaultValue={`${item.responsibility1}`} // make sure to set up defaultValue
                  ref={register()}
                />
                <input
                  name={`test[${index}].responsibility2`}
                  defaultValue={`${item.responsibility2}`} // make sure to set up defaultValue
                  ref={register()}
                />
                <input
                  name={`test[${index}].responsibility3`}
                  defaultValue={`${item.responsibility3}`} // make sure to set up defaultValue
                  ref={register()}
                />
                <input
                  name={`test[${index}].responsibility4`}
                  defaultValue={`${item.responsibility4}`} // make sure to set up defaultValue
                  ref={register()}
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
            append
          </button>
        </section>

        <button
          onClick={(e) => {
            let data = watch();
            setWorkExperience(data.test);
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

export default FormStep5;
