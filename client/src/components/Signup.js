
import React from 'react'
import axios from 'axios'

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        axios.post("/api/user/new",
                   {
                    email: this.state.email,
                    username: this.state.username,
                    password: this.state.password
                   })
             .then((resp) => {
                //placeholder code
                alert("You are now signed up! Nice!")
             })
             .catch((err) => {
                 console.error(err);
             });
    }

    render() {
        return (
            <form className="login-form" onSubmit={this.handleSubmit}>
                <h3>Digi-tome Sign Up</h3>
                <label>
                    Email:
                    <input name="email" type="text" value={this.state.email} onChange={this.handleChange} />
                </label>
                <label>
                    Username:
                    <input name="username" type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <label>
                    Password:
                    <input name="password" type="password" value={this.state.password} onChange={this.handleChange} />
                </label><br />
                <input className="submit" type="submit" value="Submit" />
                <button className="btn btn-primary" onClick={this.props.changeForm}>Login with existing account.</button>
            </form>
        );
    }
}

export default Signup;