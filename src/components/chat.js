import React, { Component } from 'react'
import './Chat.css'
import { FormControl, Row, Col } from 'react-bootstrap';
// import axios from 'axios'
// import Pusher from 'pusher-js'

class Chat extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         value: '',
    //         username: '',
    //         messages: [],
    //     };
    //     this.sendMessage = this.sendMessage.bind(this);
    //     this.handleChange = this.handleChange.bind(this);
    // }
    // componentWillMount() {
    //     this.setState({ username: localStorage.username });
    //     this.pusher = new Pusher('753fa0e07c31c514709e', {
    //         authEndpoint: '/pusher/auth',
    //         cluster: 'us2'
    //     });
    //     this.chatRoom = this.pusher.subscribe('private-reactchat');
    // }
    // componentDidMount() {
    //     this.chatRoom.bind('messages', newmessage => {
    //         this.setState({messages: this.state.messages.concat(newmessage)})
    //     }, this);

    // }
    // handleChange(event) {
    //     this.setState({value: event.target.value});
    // }
    // sendMessage(event) {
    //     event.preventDefault();
    //     if (this.state.value !== '') {
    //         axios.post('/message/send', {
    //             username: this.state.username,
    //             message: this.state.value
    //         })
    //             .then(response => {
    //                 console.log(response)
    //             })
    //             .catch(error => {
    //                 console.log(error)
    //             })
    //         this.setState({value: ''})
    //     }
    //     else {
    //         console.log('enter message')
    //     }
    // }
    render() {
        // const messages = this.state.messages;

        // const message = messages.map(item => {
        //     return (
        //         <Grid className="chat-container">
        //             {message}
        //             <Row className="show-grid">
        //                 <Col xs={12}>
        //                     <div className="chatmessage-container">
        //                         <div key={item.id} className="message-box">
        //                             <h2><strong>{item.username}</strong></h2>
        //                             <p>{item.message}</p>
        //                         </div>
        //                     </div>
        //                 </Col>
        //             </Row>
        //         </Grid>
        //     )
        // })
        return (
            // <Grid className="chat-container">
            //     <Row className="show-grid">
            //         <Col xs={12}>
            //             {/* <h4 className="text-center">Welcome, {this.state.username}</h4> */}
            //             Chat
                        <div className="chat-message">
                            <form id="chat">
                                <Col className="chat-form">
                                    <FormControl
                                        type="text"
                                        placeholder="Enter message here"
                                    />
                                </Col>
                                <Col xs={4} className="chat-button">
                                    <input className="btn btn-primary" value="Send" type="submit" />
                                </Col>
                            </form>
                        </div>
            //         </Col>
            //     </Row>
            // </Grid>
        )
    }
}

export default Chat;