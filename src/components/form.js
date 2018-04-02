import React from 'react';
import axios from 'axios';

class Form extends React.Component {
    registerRequest = (e) =>{
        e.preventDefault();
        let userFullName = e.target.elements.fullName.value;
        let userEmail = e.target.elements.email.value;
        let userPassword = e.target.elements.pwd.value;
        axios({
          method: 'post',
          url: 'http://localhost:3000/signup',
          data: {
            userFullName,userEmail,userPassword
          }
        }).then((response)=>{
            console.log(response.data)
        }).catch((err)=>{
            alert(err)
        });
    }
    render() {
        return (

            <div className="container-fluid">
                <div className="form">
                    <form onSubmit={this.registerRequest}>
                        <div className="form-group">
                            <label htmlFor="text">Full Name:</label>
                            <input type="text" className="form-control" id="fullName" placeholder="Enter Full Name" name="fullName" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">Password:</label>
                            <input type="password" className="form-control " id="pwd" placeholder="Enter password" name="pwd" />
                        </div>
                        <button type="submit" className="btn btn-default">Register</button>
                    </form>
                </div>
            </div>

        );
    }
}

export default Form;