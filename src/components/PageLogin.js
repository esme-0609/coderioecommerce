import React, { useState } from "react";
import Users from "../data/Users.json"
import toast, {Toaster} from "react-hot-toast";

export default function PageLogin() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    hasError: false,
  });

  const emailRegexp = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);

  function handleSubmit(evt) {
    evt.preventDefault();
    let datfound = 0;
    for ( let x of Users["user"]) {
      if(x.email === values.email && x.password === values.password){
        datfound = 1;
      }
    }

    if(datfound === 1){
      toast.success('succesful !!');
    }else{
      toast.error('Incorrect data, try again');
    }

  }

  function handleChange(evt) {
    const { target } = evt;
    const { name, value } = target;
    const newValues = {
      ...values,
      [name]: value,
    };
    setValues(newValues);
  }

  function handleBlur() {
    const hasError = !emailRegexp.test(values.email);
    setValues((prevState) => ({ ...prevState, hasError }));
  }

  return (
    <div className="py-20">
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@email.com"
            required
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-errormessage="emailErrorID"
            aria-invalid={values.hasError}
          />
          <p
            id="msgID"
            className="text-red-400 font-bold"
            aria-live="assertive"
            style={{ visibility: values.hasError ? "visible" : "hidden" }}
          >
            Please enter a valid email !
          </p>
        </div>
        <div class="mb-5">
          <label
            for="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="*************"
            required
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <div class="flex items-start mb-5">
          <div class="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            />
          </div>
          <label
            for="remember"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Remember me
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-orange-400 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
        >
          Submit
        </button>
      </form>
      <Toaster />
    </div>  
  );
}
