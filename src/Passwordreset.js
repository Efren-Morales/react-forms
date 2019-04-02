import React from 'react';
class Passwordreset extends React.Component {
    render() {
        return(
            <div>
                <label for="newPassword">New Password:</label> 
                <input type="password" id="newPassword" name="newPassword" title="New password"/>
            <br></br>
                <label for="confirmPassword">Confirm Password:</label> 
                <input type="password" id="confirmPassword" name="confirmPassword" title="Confirm new password" />
            <p class="form-actions">
            <input type="submit" value="Change Password" title="Change password" />
            </p>

            </div>
        );
    }
}
export default Passwordreset