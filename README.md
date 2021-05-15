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





