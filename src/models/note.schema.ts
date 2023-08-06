import * as yup from "yup";
import { validCategories } from "../data/noteData";

const noteSchema = yup.object().shape({
  date: yup
    .string()
    .matches(
      /^(0[1-9]|[12][0-9]|3[01])[-/.](0[1-9]|1[0-2])[-/.]\d{4}$/,
      "Invalid date format (MM/DD/YYYY or MM-DD-YYYY)"
    )
    .required("Date is required"),
  category: yup
    .string()
    .oneOf(validCategories, "Invalid category")
    .required("Category is required"),
  content: yup.string().required("Content is required"),
  archived: yup.boolean().default(false),
});

export { noteSchema };
