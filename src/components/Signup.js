import React , {useRef} from 'react'
export default function Signup() {
    const emailRef =  useRef()
    const passwordRef =  useRef()
    const passwordConfirmRef =  useRef()
    return (
        <div className="w-100 signup d-flex justify-content-center align-items-center">
            <div class="signup-form d-flex flex-column align-items-center justift-content-evenly">
                <h2 className="my-5">Signup Page</h2>
                <input className="signup-form-input my-3 py-2 px-3" ref={emailRef} type="email" required placeholder="Email"/>
                <input className="signup-form-input my-3 py-2 px-3" ref={passwordRef} type="password" required placeholder="Password"/>
                <input className="signup-form-input my-3 py-2 px-3" ref={passwordConfirmRef} type="password" required placeholder="Confirm Password"/>
                <button className="signup-form-button my-4 py-2 px-3" type="submit">Signup</button>
                <h6>Already have an account ? <a>Login</a></h6>
            </div>
        </div>
    )
}
