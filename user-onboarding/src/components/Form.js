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
                <div className='errors'>
                    <div>{errors.first_name}</div>
                    <div>{errors.last_name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.terms}</div>
                </div>
            </div>
            <div className='form-group-inputs'>
                <h4>General Information</h4>
                <label>First Name:
                    <input
                        values={values.first_name}
                        onChange={onChange}
                        name='first_name'
                        type='text'
                    />
                </label>
                <label>Last Name:
                    <input
                        values={values.last_name}
                        onChange={onChange}
                        name='last_name'
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
                <br></br>
                <button id='regBtn' disabled={disabled}>Register</button>
            </div>
        </form>
    )
}

export default Form;