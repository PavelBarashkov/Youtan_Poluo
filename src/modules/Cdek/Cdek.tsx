import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

export const Cdek = () => {
  return (
    <div>
      <h1>Корзина</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors: any = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="formik">
            <label htmlFor="email">
              Email
              <Field type="email" name="email" id={"email"} />
              <ErrorMessage name="email" component="div" />
            </label>

            <label htmlFor="name">
              Имя
              <Field type="text" name="name" id={"name"} />
              <ErrorMessage name="password" component="div" />
            </label>

            <label htmlFor="surname">
              Фамилия
              <Field type="text" name="surname" id={"surname"} />
              <ErrorMessage name="surname" component="div" />
            </label>

            <label htmlFor="phone">
              Телефон
              <Field type="tel" name="phone" id={"phone"} />
              <ErrorMessage name="phone" component="div" />
            </label>

            <label htmlFor="Locality">
              Населенный пункт
              <Field type="text" name="Locality" id={"Locality"} />
              <ErrorMessage name="Locality" component="div" />
            </label>

            <label htmlFor="Locality">
              Населенный пункт
              <Field type="text" name="Locality" id={"Locality"} />
              <ErrorMessage name="Locality" component="div" />
            </label>

            <div
              className="radio-formik"
              role="group"
              aria-labelledby="my-radio-group"
            >
              <label>
                <Field type="radio" name="picked" value="One" />
                Курьер
              </label>
              <label>
                <Field type="radio" name="picked" value="Two" />
                Пункт выдачи BoxBerry
              </label>
              <label>
                <Field type="radio" name="picked" value="three" />
                Самовывоз из магазина
              </label>
            </div>

            <label htmlFor="street">
              Улица
              <Field type="text" name="street" id={"street"} />
              <ErrorMessage name="street" component="div" />
            </label>

            <label htmlFor="home">
              Дом
              <Field type="text" name="home" id={"home"} />
              <ErrorMessage name="home" component="div" />
            </label>

            <label htmlFor="Apartment">
              Квартира/офис
              <Field type="text" name="Apartment" id={"Apartment"} />
              <ErrorMessage name="Apartment" component="div" />
            </label>

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
