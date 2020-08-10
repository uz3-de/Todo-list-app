import React, {Component} from 'react'

class TodoApp extends Component{
    render(){
        return (
            <div className="TodoApp">
                    <LoginComponenet/>
            </div>
        )
    }
}

class LoginComponenet extends Component{
    render(){
        return (
            <div>
                User Name: <input type="text" name="useame"/>
                Password:  <input type="password" name="password"/> 
                <button>Login</button> 
            </div>    
        )
    }
}
export default TodoApp