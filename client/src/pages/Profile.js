import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';
import axios from 'axios'
import ProfileChange from '../components/ProfileChange.js'
import UserIcon from '../images/user.png'

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            books: null,
            bookCount: 0,
            username: '',
            title: '',
            author: '',
            genre: '',
            description: '',
            profileChange: false
        }
    }

    handleClick = () => {
        this.setState({
            profileChange: !(this.state.profileChange)
        })
    }

    componentDidMount() {
        const loginToken = window.localStorage.getItem("token");
        let username = (this.props.match.params.username) ? this.props.match.params.username : JSON.parse(window.atob(loginToken.split('.')[1])).username;
        axios({
            url: '/api/profile/' + username,
            method: 'get',
            headers: { "Authorization": "Bearer " + loginToken }
        })
            .then((resp) => {
                console.log(resp);
                this.setState({
                    books: resp.data.PublishedBooks,
                    bookCount: resp.data.PublishedBooks.length,
                    username: resp.data.username
                })


            }).catch((error) => {
                console.error(error);
            })
    }

    render() {
        const profileChange = this.state.profileChange;

        var username = this.state.username;
        if (this.state.books) {
            var bookList = this.state.books.map(function (item, i) {
                console.log(item);
                return (
                    <div key={i}>
                        <div className="story-title-author">
                            <Link to={'./book/' + item.id} activeClassName="active">
                                <h3 className="story-title">{item.title}</h3>
                            </Link>
                            <h5 className="story-author"><span>Author: </span>{username}</h5>
                        </div>
                        <h6><i>{item.genre.split(',').join(', ')}</i></h6>
                        <p>{item.description}</p>
                        <br />
                    </div>
                )

            })
        }
        else {
            return <div>
                <p>None found</p>
            </div>
        }
        const loginToken = window.localStorage.getItem("token");
        return (
            <div>
                <div className="text-center" id="my-profile">
                    <h2 id="my-profile-header">My Profile</h2>
                    <img style={{width: 200, height: 200, margin: "0 auto"}} className="img-responsive text-center" src={"/assets/images/users/" + JSON.parse(window.atob(loginToken.split('.')[1])).id + "/user.png"} />
                    <h5><span>Username: </span>{this.state.username}
                    {!(this.props.match.params.username) 
                        ? <img onClick={this.handleClick} alt="change-user" id="user-change" src={UserIcon} />  
                        : null
                    }
                    </h5>
                    <h6><span>Books Published: </span>{this.state.bookCount}</h6>
                    {/* {!(this.props.match.params.username) 
                        ? <button className="btn btn-default" onClick={this.handleClick}>Change Info</button> 
                        : null
                    } */}
                    {/* checking if profileChange is true and whether a url param username does not exist */}
                    {(this.state.profileChange) && !(this.props.match.params.username) 
                        ? <ProfileChange />
                        : null
                    }

                </div>

                <div id="profile-stories">
                    <div id="profile-stories-header">
                        <h2>Published Books</h2>
                    </div>
                    <div className="story">
                        {bookList}
                    </div>
                    <div className="story-synopsis">
                        <p></p>
                    </div>
                </div>
            </div>
        );
    }

}


export default Profile;