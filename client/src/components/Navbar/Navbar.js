import React from 'react';
import SignIn from './SignIn'
import LoggedIn from './LoggedIn'

console.log(SignIn, LoggedIn)

class Navbar extends React.Component {
    state = {
        loggedIn: false
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">Digi-tome</a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <form className="navbar-form navbar-left" role="search">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Search" />
                                </div>
                                <button type="submit" className="btn btn-default">Submit</button>
                            </form>
                            <ul className="nav navbar-nav navbar-right">
                                {(this.state.loggedIn) ? <LoggedIn /> : <SignIn />}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;