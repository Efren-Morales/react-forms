import React from 'react';
class Login extends React.Component {
    render() {
        return(
            <div>
            
    <label >username : <input name="username" id="username" type="text" /></label> 
    <br/> <label >password : <input name="password" id="password" type="password" /></label> 
    <label>confirm password: <input type="password" name="confirm_password" id="confirm_password" /> </label> 
    <br/>
    <label> <input type="submit" name="submit" value="submit" /> </label>
       </div>
        );
    }
}
export default Login
