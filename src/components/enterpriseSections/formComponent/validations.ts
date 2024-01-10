import * as yup from "yup"

export const Schema = yup
  .object({
    fname: yup.string().required('FirstName is required').min(3,"Invalid Firstname"),
    lname:yup.string().required("LastName is required").min(3,"Invalid lastName"),
    email: yup.string().email('Invalid email').required('Email is Required'),
    select:yup.string().required('This Field is required'),
    city:yup.string().required("City is Required"),
    event:yup.string().required("Event is Required"),
    checkIn:yup.string().required("Valid Date is required"),
    checkOut:yup.string().required("Valid Date is required")
  })

  export const FormSchema = yup
  .object({
    fname: yup.string().required('FirstName is required').min(3,"Invalid Firstname"),
    lName:yup.string().required("LastName is required").min(3,"Invalid lastName"),
    email: yup.string().email('Invalid email').required('Email is Required'),
    city:yup.string().required("City is Required"),
    event:yup.string().required("Event is Required"),
    checkIn:yup.string().required("Valid Date is required"),
    checkOut:yup.string().required("Valid Date is required")
  })
