import { useFormik } from "formik";
import React from "react";
import { toast } from "react-toastify";

function Contactme() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: (values) => {
      console.log(values,"ddfdffdfdf");
      toast.success("Form submitted successfully!");
    },
  });
  return <div>
    <form onSubmit={formik.handleSubmit}>
        <div>
        <label htmlFor="name">Name</label>
        <input value={formik.values.name} onChange={formik.handleChange} type="text" name="name" id="name" className="border border-gray-300 rounded-md p-2"/>    

        </div>
        <div>
        <label htmlFor="email">Email</label>
        <input value={formik.values.email} onChange={formik.handleChange} type="email" name="email" id="email" className="border border-gray-300 rounded-md p-2"/>
        </div>
        <div>
        <label htmlFor="message">Message</label>
        <textarea value={formik.values.message} onChange={formik.handleChange} name="message" id="message" className="border border-gray-300 rounded-md p-2"></textarea>
        </div>
        <button type="submit">Submit</button>
    </form>
  </div>;
}

export default Contactme;
