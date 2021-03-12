import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Input, Form, FormGroup, Label } from "reactstrap";
import swal from "sweetalert";
import DCard from "../DCard/DCard";

function CreateAccount() {
  const { errors, handleSubmit, control, register, reset } = useForm({
    defaultValues: {
      email: "",
      password: "",
      role: "",
      firstname: "",
      lastname: "",
    },
  });

  const onSubmit = (data, e) => {
    fetch("http://localhost:4000/user/registerwithoutlogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.error) swal(swal(result.error));
        else swal("Account Created");
        reset({
          email: "",
          password: "",
          role: "",
          firstname: "",
          lastname: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h1 className="text-center mb-3 text-white">Create Account</h1>

      <DCard width="600px">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Label>
              Email<span className="text-primary"> *</span>
            </Label>
            <Controller
              name="email"
              rules={{
                required: "This is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              }}
              control={control}
              render={(props) => (
                <Input
                  type="text"
                  onChange={(e) => props.onChange(e.target.value)}
                  value={props.value}
                />
              )}
            />
            <span className="text-primary">{errors.email?.message}</span>
          </FormGroup>
          <FormGroup>
            <Label>
              Password<span className="text-primary"> *</span>
            </Label>
            <Controller
              name="password"
              rules={{
                required: "This is required",
              }}
              control={control}
              render={(props) => (
                <Input
                  type="password"
                  onChange={(e) => props.onChange(e.target.value)}
                  value={props.value}
                />
              )}
            />
            <span className="text-primary">{errors.password?.message}</span>
          </FormGroup>
          <FormGroup>
            <Label>
              Type Of Account<span className="text-primary"> *</span>
            </Label>

            <select
              name="role"
              ref={register({ required: "This is required" })}
              className="form-control"
            >
              <option value="">--Select an option--</option>
              <option value="student">Student</option>
              <option value="faculty">Faculty</option>
              <option value="admin">Admin</option>
            </select>
            <span className="text-primary">{errors.role?.message}</span>
          </FormGroup>
          <FormGroup>
            <Label>First Name</Label>
            <Controller
              name="firstname"
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
          </FormGroup>

          <FormGroup>
            <Label>Last Name</Label>
            <Controller
              name="lastname"
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
          </FormGroup>
          <FormGroup className="mt-4 py-4">
            <Input type="submit" value="Create Account" />
          </FormGroup>
        </Form>
      </DCard>
    </>
  );
}

export default CreateAccount;
