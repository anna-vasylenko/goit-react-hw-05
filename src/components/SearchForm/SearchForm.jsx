import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import s from "./SearchForm.module.css";

const SearchForm = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    onSubmit(values.search);
    actions.resetForm();
  };

  const validationSchema = Yup.object().shape({
    search: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  return (
    <div>
      <Formik
        initialValues={{ search: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={s.form}>
          <Field type="text" name="search" className={s.input} />
          <ErrorMessage name="search" component="span" className={s.message} />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchForm;
