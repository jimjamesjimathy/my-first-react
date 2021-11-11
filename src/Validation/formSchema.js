import * as yup from 'yup';

const formSchema = yup.object().shape({
    first_name: yup
        .string()
        .trim()
        .required('Gotta type something, buddy')
        .min(3, 'Gotta type more than that, buddy.'),
    last_name: yup
        .string()
        .trim()
        .required('Gotta type something, buddy')
        .min(3, 'Gotta type more than that, buddy.'),
    email: yup
        .string()
        .email('Gimme a real email, buddy')
        .required('It\'s gotta be something, buddy'),
    password: yup
        .string()
        .required('Gotta type something, buddy')
        .min(8, 'Gonna need more than that, buddy'),
    tos: yup
        .boolean()
        .oneOf([true], 'Make sure you read and accepted the terms!')
})

export default formSchema;