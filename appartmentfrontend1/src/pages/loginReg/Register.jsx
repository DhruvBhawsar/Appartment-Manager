import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// import { Navbar } from "../navbar/navbar";
import { Link } from "react-router-dom";

export const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [append, setAppend] = useState(false);
  const navigate = useNavigate();

  

  const onSubmit = (data) => {
    console.log("submit", data);
    axios
      .post("https://flat-management.herokuapp.com/register", data)
      .then((res) => {
        console.log(res);
        setAppend(true);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      })
      .catch((err) => {
        alert("Enter Correct Details");
      });
  };

  return (
    <>
      <section className="h-100 h-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-8 col-xl-6">
              <div className="card rounded-3">
                <img
                  src="https://www.prestigeconstructions.com/admin/uploads/projects/meridian-park-@-the-prestige-city/meridian-park-@-the-prestige-city-featured.png"
                  className="w-100"
                  alt="Sample photo"
                />

                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
                    Registration Info
                  </h3>

                  <form className="px-md-2" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-outline mb-4">
                      <label className="form-label" for="form3Example1cg">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="form3Example1cg"
                        className="form-control form-control-lg"
                        {...register("name", { required: true })}
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" for="form3Example4cg">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="form3Example2cg"
                        className="form-control form-control-lg"
                        {...register("sir_name", { required: true })}
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" for="form3Example3cg">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="form3Example3cg"
                        className="form-control form-control-lg"
                        {...register("email", { required: true })}
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" for="form3Example4cg">
                        Password
                      </label>
                      <input
                        type="password"
                        id="form3Example4cg"
                        className="form-control form-control-lg"
                        {...register("password", { required: true })}
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" for="form3Example4cg">
                        Phone
                      </label>
                      <input
                        type="text"
                        id="form3Example5cg"
                        className="form-control form-control-lg"
                        {...register("mobile_number", { required: true })}
                      />
                    </div>

                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg btn-block"
                      >
                        Register
                      </button>
                      {append ? <p>Loading..</p> : ""}
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">
                      Have already an account?{" "}
                      <Link to="/login" className="fw-bold text-body">
                        <u>Login here</u>
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
