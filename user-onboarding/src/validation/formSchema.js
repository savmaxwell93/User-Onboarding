import * as yup from 'yup';

const formSchema = yup.object().shape({
    first_name: yup
        .string()
        .trim()
        .required('You must enter your first name'),
    last_name: yup
        .string()
        .trim()
        .required('You must enter your last name'),
    email: yup
        .string()
        .email('Must be a valid email address')
        .required('Email is required'),
    password: yup
        .string()
        .required('Must enter a password')
        .min(8, 'Password must contain at least 8 characters'),
    terms: yup
        .boolean()
        .required('You must agree to TOS before becoming a user')
})

export default formSchema;