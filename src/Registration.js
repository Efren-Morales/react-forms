import React from 'react';
class Registration extends React.Component {
    render() {
        return(
            <div>
                First Name: <input type="text" name="firstName" required/><br/>

                Last Name: <input type="text" name="lastName" required/><br/>

                Email Address: <input type="email" name="email" required placeholder="Enter a valid email address"/><br/>

                Phone Number (format: xxx-xxx-xxxx):
                    <input type="tel" pattern="^\d{3}-\d{3}-\d{4}$" required /><br/>
                Age: <input type="number" size="6" name="age" min="0" max="99" value=""/><br/>

                Date of Birth<input type="text" name="input" placeholder="YYYY-MM-DD" required
                    pattern="(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))"
                    title="Enter a date in this format YYYY-MM-DD"/><br/>
                    <input type="submit" value="Submit"></input>
            </div>
        );
    }
}
export default Registration