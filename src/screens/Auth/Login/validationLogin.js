import * as yup from 'yup';
import { I18nManager } from 'react-native';

  export const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      I18nManager.isRTL? 'أدخل بريد إلكترونى صحيح':'Enter valid email')
      .required(I18nManager.isRTL?'البريد الإلكترونى مطلوب': 'Email is required'),
    password: yup
      .string()
      .min(8, ({ min }) => I18nManager.isRTL?`كلمة المرور يجب ان تكون ${min} على الأقل`:`Password must be at least ${min} characters`)
      .required(I18nManager.isRTL?'كلمة المرور مطلوبة':'Password is required'),
  })


  // fullName: yup
  //   .string()
  //   .matches(/(\w.+\s).+/, 'Enter at least 2 names')
  //   .required('Full name is required'),
  // phoneNumber: yup
  //   .string()
  //   .matches(/(01)(\d){8}\b/, 'Enter a valid phone number')
  //   .required('Phone number is required'),
  // email: yup
  //   .string()
  //   .email("Please enter valid email")
  //   .required('Email is required'),
  // password: yup
  //   .string()
  //   .matches(/\w*[a-z]\w*/,  "Password must have a small letter")
  //   .matches(/\w*[A-Z]\w*/,  "Password must have a capital letter")
  //   .matches(/\d/, "Password must have a number")
  //   .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
  //   .min(8, ({ min }) => `Password must be at least ${min} characters`)
  //   .required('Password is required'),
  // confirmPassword: yup
  //   .string()
  //   .oneOf([yup.ref('password')], 'Passwords do not match')
  //   .required('Confirm password is required'),
