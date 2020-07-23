import React, { useEffect, useContext } from 'react'
import AuthContext from '../../context/auth-context'

import classes from './Cockpit.module.css'

const Cockpit = (props) => {
    const authContext = useContext(AuthContext)
    // works as component did mount and willunmount
    useEffect(() => {
        //console.log('[Cockpit.js] useEffect (componentDidMount')
        const timer = setTimeout(() => {
            //alert("Fetch something")
        }, 1000)
        return () => {
            clearTimeout(timer)
            //console.log("[Cockpit.js] Clean up (componentWillUnmount)")
        }
    }, [])

    // works for every single render
    useEffect(() => {
        //console.log("[Cockpit.js] 2nd useEffect")
        return () => console.log("[Cockpit.js] clean up after render (componend did update)")
    })
    let btnClass = ''
    const assignedClasses = [];

    if(props.showPersons) {
        btnClass = classes.Red;
    }

    
    if(props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }

    if(props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return(
        <div className={classes.Cockpit}>
                <h1>{props.title}</h1>
                <p className={assignedClasses.join(' ')}> this is really working</p>
                <button 
                    className={btnClass} 
                    onClick={props.clicked}>
                    Toggle Persons
                </button>
                <button onClick={authContext.login}>Log in</button>
        </div>

    )
}

export default Cockpit