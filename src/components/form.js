import React from 'react';
import axios from 'axios';

class Form extends React.Component {
    registerRequest = (e) => {
        e.preventDefault();
        let name = e.target.elements.fullName.value;
        let email = e.target.elements.email.value;
        let password = e.target.elements.pwd.value;
        axios.post('http://localhost:3000/signin', {
            email, password
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        return (

            <div className="container-fluid">
                <div className="form">
                    <form action="http://localhost:3000/signin" method="post">
                        <div className="form-group">
                            <label htmlFor="text">Full Name:</label>
                            <input type="text" className="form-control" id="fullName" placeholder="Enter Full Name" name="name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="text" className="form-control" id="email" placeholder="Enter email" name="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">Password:</label>
                            <input type="password" className="form-control " id="pwd" placeholder="Enter password" name="password" />
                        </div>
                        <button type="submit" className="btn btn-default">Register</button>
                    </form>
                </div>
            </div>

        );
    }
}

export default Form;