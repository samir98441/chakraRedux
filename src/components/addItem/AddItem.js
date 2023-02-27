import { nanoid } from "nanoid";

import "./additem.css";
import { Button } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { useDispatch } from "react-redux";
import { addProducts } from "../../store/slices/productsSlice";
import { toggleAddItem } from "../../store/slices/productsSlice";
import { useState } from "react";

const AddItem = () => {
  const dispatch = useDispatch();

  const [buttonClick, setButtonClick] = useState("");

  const formik = useFormik({
    initialValues: {
      PId: "",
      PName: "",
      Price: "",
      formToggle: false,
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
      // alert(`Items added
      //  Name:${values.PName}
      // Price:${values.Price}`);
      console.log("ButtonClickToggle", buttonClick);
      if (buttonClick === "saveAndExit") {
        dispatch(toggleAddItem());
      }

      const tempData = { ...values, PId: nanoid() };
      dispatch(addProducts(tempData));
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
          type="number"
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

        <Button
          type="submit"
          colorScheme="blue"
          onClick={(event) => setButtonClick("saveAndExit")}
        >
          Add Item
        </Button>
        <Button
          type="submit"
          colorScheme="blue"
          onClick={(event) => setButtonClick("save")}
        >
          Add More
        </Button>
      </form>
    </div>
  );
};

export default AddItem;
