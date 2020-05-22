import * as yup from "yup";

const formSchema = yup.object().shape({
	name: yup
		.string()
		.trim()
		.required("Name is required")
		.min(2, "Name must be at least two characters"),

	size: yup.string().required("Please Select a size"),

	specialInt: yup.string(),
});

export default formSchema;
