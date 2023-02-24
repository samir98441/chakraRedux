import { nanoid } from "nanoid";
import { useDataContext } from "../../context/ContextProvider";
import "./additem.css";
import { Button } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";

const AddItem = () => {
  const { handelAddItem, handleUpdate } = useDataContext();

  const formik = useFormik({
    initialValues: {
      PId: "",
      UpdateToggle: false,
      PName: "",
      Price: "",
      PImageUrl: "",
    },
    validationSchema: Yup.object().shape({
      PName: Yup.string("Must be string")
        .label("Full Name")
        .required("PName required"),
      Price: Yup.number("Must be number")
        .min(500, "Price must be greater than 500")
        .required("Price Required"),
    }),

    onSubmit: function (values) {
      alert(`Items added
       Name:${values.PName}
      Price:${values.Price}`);

      const tempData = { ...values, PId: nanoid() };
      handelAddItem(tempData);
    },
  });

  return (
    <div className="additem">
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="PName"
          value={formik.values.PName}
          placeholder="pname"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        {formik.errors.PName && formik.touched.PName ? (
          <div>{formik.errors.PName}</div>
        ) : null}

        <hr />

        <input
          type="text"
          name="Price"
          value={formik.values.Price}
          placeholder="price"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        {formik.errors.Price && formik.touched.Price ? (
          <div>{formik.errors.Price}</div>
        ) : null}

        <hr />

        {/* <input
          type="text"
          name="PImageUrl"
          value={formik.values.PImageUrl}
          placeholder="imageurl"
          onChange={formik.handleChange}
          onBlur={formik.onBlur}
        /> */}

        <Button type="submit" colorScheme="blue">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddItem;
