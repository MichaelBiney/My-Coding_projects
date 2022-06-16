import React from 'react'
import useForm from './useForm'
import validate from './validateinfo'

const FormSignup = ({submitForm}) => {
    const{handleChange, values, handleSubmit,errors}= useForm(submitForm,validate);

  return (
    <div className="form-content-right">
        <form className='form' onSubmit={handleSubmit}>
            <h1>Get started with us today! Create your account by filling out the informartion below.</h1>
                 <div className="form-inputs">
                     <label htmlFor="firstname"className="form-label">Firstname:
                        <input id="firstname" type="text" name="fristname"className='form-input'placeholder="Enter your Firstname "
                        value={values.firstname} onChange={handleChange}/>{errors.firstname && <p>{errors.firstname}</p>}

                     </label>
                   </div>
                   <div className="form-inputs">
                     <label htmlFor="lastname"className="form-label">Lastname:
                        <input id="lastname" type="text" name="lastname"className='form-input'placeholder="Enter your Lastname"
                         value={values.lastname} onChange={handleChange}/>{errors.lastname && <p>{errors.lastname}</p>}


                     </label>
                   </div>
                <div className="form-inputs">
                     <label htmlFor="Username"className="form-label">Username:
                        <input id="username" type="text" name="username"className='form-input'placeholder="Enter your Username"
                         value={values.username} onChange={handleChange}/>{errors.username && <p>{errors.username}</p>}


                     </label>
                   </div>
                        <div className="form-inputs">
                            <label htmlFor="email"className="form-label">Email:
                                 <input id="email" type="email" name="email"className='form-input'placeholder="Enter your Email"
                                  value={values.email} onChange={handleChange}/>{errors.email && <p>{errors.email}</p>}

                     </label>
                   </div>
                   <div className="form-inputs">
                            <label htmlFor="password"className="form-label">Password:
                                 <input id="password" type="passwrod" name="password"className='form-input'placeholder="Enter your Password"
                                  value={values.password} onChange={handleChange}/>{errors.password && <p>{errors.password}</p>}

                     </label>
                   </div>
                   <div className="form-inputs">
                            <label htmlFor="password2"className="form-label">Confirm Password:
                                 <input id="password2" type="password" name="password2"className='form-input'placeholder="Confirm your password"
                                  value={values.password2} onChange={handleChange}/> 
                                    {errors.password2 && <p>{errors.password2}</p>}

                     </label>
                   </div>
                   <button className='form-input-btn'type="submit">Signup</button>
                   
                 </form>
            </div>
  )
}

export default FormSignup