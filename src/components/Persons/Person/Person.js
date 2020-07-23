import React, { Component } from 'react'
import classes from './Person.module.css'
import AuthContext from '../../../context/auth-context'

class Person extends Component {
    constructor(props) {
        super(props)
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext
    componentDidMount() {
        this.inputElementRef.current.focus()
        console.log(`Is Authenticated: ${this.context.authenticated}`)
    }

    render() {
        return (
            <div className={classes.Person}>
                {this.context.authenticated ? <p>Authenticated!</p> : <p>Please Log in</p>}
                <p onClick={this.props.click}>
                    I'm {this.props.name} ! and I am {this.props.age} years old!
                </p>
                <p>
                    {this.props.children}
                </p>
                <input 
                    key="i3"
                    ref={this.inputElementRef}
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name} />
            </div>          
        )
    }
}

export default Person;