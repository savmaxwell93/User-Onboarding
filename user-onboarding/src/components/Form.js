import React from 'react'

function Form(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const realValue = type === 'checkbox' ? checked : value;
        change(name, realValue)
    }

    return (
        <form className='form-container' onSubmit={onSubmit}>
            <div className='form-group-submit'>
                <h2>Become a User</h2>
                <button disabled={disabled}>Register</button>
                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.terms}</div>
                </div>
            </div>
            <div className='form-group-inputs'>
                <h4>General Information</h4>
                <label>Name:
                    <input
                        values={values.name}
                        onChange={onChange}
                        name='name'
                        type='text'
                    />
                </label>
                <label>Email:
                    <input
                        values={values.email}
                        onChange={onChange}
                        name='email'
                        type='text'
                    />
                </label>
                <label>Password:
                    <input
                        value={values.password}
                        onChange={onChange}
                        name='password'
                        type='password'
                    />
                </label>
                <label>Do you agree to the Terms of Service?
                    <input
                        onChange={onChange}
                        name='terms'
                        type='checkbox'
                        checked={values.terms}
                    />
                </label>
            </div>
        </form>
    )
}

export default Form;