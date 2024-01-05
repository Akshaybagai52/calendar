import * as yup from "yup"

export const Schema = yup
  .object({
    fname: yup.string().required('FirstName is required').min(3,"Invalid Firstname"),
    lname:yup.string().required("LastName is required").min(3,"Invalid lastName"),
    email: yup.string().email('Invalid email').required('Email is Required'),
    select:yup.string().required('This Field is required'),
    city:yup.string().required("City is Required"),
    event:yup.string().required("Event is Required"),
    chechIn:yup.date().default(() => new Date()),
    checkOut:yup.date().default(() => new Date())
  })
