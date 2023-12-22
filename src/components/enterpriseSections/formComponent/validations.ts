import * as yup from "yup"

export const Schema = yup
  .object({
    fname: yup.string().required('FirstName is required').min(3,"Invalid Firstname"),
    lname:yup.string().required("LastName is required").min(3,"Invalid lastName"),
    email: yup.string().email('Invalid email').required('Email is Required'),
    select:yup.string().required('This Field is required'),
  })
  .required()