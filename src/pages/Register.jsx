import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../assets/register.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

function Register() {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;
  const [provinsiSelected, setProvinsiSelected] = useState("banten");
  const banten = ["Tangerang", "Serang", "Cilegon", "Lebak", "Pandeglang"];
  const jawaBarat = ["Depok", "Bogor", "Bandung", "Bekasi", "Ciamis"];

  function onSubmit(data) {
    // display form data on success
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(data, null, 4));
    return false;
  }

  const selectHandler = (event) => {
    const value = event.target.value;

    setProvinsiSelected(value);
  };

  return (
    <div className="outer">
      <div className="body-register">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="needs-validation"
          noValidate
        >
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input
              {...register("firstName")}
              name="firstName"
              className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
              type="text"
              aria-describedby="emailHelp"
              required
            />
            <div className="invalid-feedback">{errors.firstName?.message}</div>
          </div>

          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input
              {...register("lastName")}
              name="lastName"
              className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
              type="text"
              aria-describedby="emailHelp"
              required
            />
            <div className="invalid-feedback">{errors.lastName?.message}</div>
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              name="email"
              {...register("email")}
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              aria-describedby="emailHelp"
              required
            />
            <div className="invalid-feedback">{errors.email?.message}</div>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              name="password"
              {...register("password")}
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              type="password"
              required
            />
            <div className="invalid-feedback">{errors.password?.message}</div>
          </div>
          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input
              name="confirmPassword"
              {...register("confirmPassword")}
              className={`form-control ${
                errors.confirmPassword ? "is-invalid" : ""
              }`}
              type="password"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Jenis Kelamin</label>
            <select
              className="form-select"
              aria-label="Default select example"
              required
            >
              <option value="p">Pria</option>
              <option value="w">Wanita</option>
              <option value="o">Other</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Provinsi</label>
            <select
              name="pilihProvinsi"
              onChange={selectHandler}
              className="form-select"
              aria-label="Default select example"
              required
            >
              <option value="banten">Banten</option>
              <option value="jabar">Jawa Barat</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Kota</label>
            <select
              className="form-select"
              aria-label="Default select example"
              required
            >
              {provinsiSelected === "banten"
                ? banten.map((val, i) => (
                    <option key={i} value={val}>
                      {val}
                    </option>
                  ))
                : jawaBarat.map((val, i) => (
                    <option key={i} value={val}>
                      {val}
                    </option>
                  ))}
            </select>
          </div>

          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
