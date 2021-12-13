import React, {useEffect} from 'react';
import {Formik, useField, useFormikContext} from "formik";
import Select from 'react-select'

export const FormikTemp = ({validationsSchema, val, children, funcSubmit}) => {
    return (
        <Formik
            initialValues={{...val}}
            validateOnBlur
            onSubmit={(values) => {
                funcSubmit(values)
            }}
            validationSchema={validationsSchema}
        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  isValid,
                  handleSubmit,
                  dirty
              }) => (
                <form onSubmit={handleSubmit}>
                    {children}
                </form>
            )}
        </Formik>
    );
};


export const Input = ({...props}) => {
    const [field] = useField(props);
    return (
        <>
            <input {...field} {...props} />
        </>
    );
};

export const SelectFormik = ({name, placeholder, fnForChange, options, customStyles}) => {
    const [field] = useField(name);
    const {setFieldValue} = useFormikContext();

    useEffect(() => {
        field.value && fnForChange && fnForChange(field.value)
    }, [field.value])
    return (
        <Select
            options={options}
            styles={customStyles}
            name={name}
            value={options ? options.find(option => option.value === field.value) : ''}
            onChange={(option) => setFieldValue(field.name, option.value)}
            onBlur={field.onBlur}
            placeholder={placeholder}
        />
    );
};


export const Button = ({text}) => {
    return <button type={"submit"}>{text}</button>
};