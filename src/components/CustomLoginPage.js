// LoginPage.js
import React from "react"
import { Login, LoginForm } from "react-admin"

const CustomLoginForm = props => (
  <>
    <LoginForm {...props} />
  </>
)

const CustomLoginPage = props => (
  <Login loginForm={<CustomLoginForm />} {...props} />
)

export default CustomLoginPage
