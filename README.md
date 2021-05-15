# react-basic

## What 
a JS library for building user interfaces in component-based way 

## npx create-react-app app-name

## public folder
update the index.html like deleting the icon/manifest
delete all other files

## manifest.json
mostly for when we want to do SPA on a mobile site in offline mode

## src folder
just left index.js and APP.js

## index.js
ReactDOM.render -> render whatever component you pass it in 
document.getElementById('root')

## App.js
import React from 'react' is not necessary for using JSX
must have all custom components start with a capital letter so that React knows to render them as a custom component and not a normal HTML element.

function App(){
    return (
        <>
           // nested tags here
        </>
    )
}

## JSX
let us write HTML inside our JS
so we don't need to write vanilla JS like document.createElement....

class -> className
the class keyword is completely reserved 

self closing tag or closing tag, can not just open tag, like input in HTML

## class component && functional component

### class component
the component will be rerendered when state/prop changes
only render this component and does not affect other components
this.props

export default class XX extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // JS Object - key value pair
        }
    }
    render(){
        return(
            <div>
                // use {javascrip code} in html
            </div>
        )
    }
}

#### this.setState
this.setState({key: xxx}) is called in asynchronously 
so in the counter app, it increment by 1 even we have 2 this.setState
so we can use prevState!!!

### function component + React Hooks(only used in function component)
props.xxx
no state so React Hooks
useState returns an array, and should be in the very top level of the function(can not be put in if statement or other...)


export default function XX(props or destructure{var_name}){
    return (
            <div>
            </div>
        )
}

#### React Hooks useContext 
Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.
 






