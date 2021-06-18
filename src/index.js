import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
//import Posts from './portal-example1'
//import ReactStates from './Revision20210601/ReactStates'
//import ReactProps from './Revision20210601/ReactProps'
//import Employee from './Revision20210601/FuncComponent'

//useState examples
//import Employee from './fucntional/UseStateFuncs'
//import Employee from './fucntional/UseStateSharing'
//import App from './fucntional/UseStateFuncs2'
//import App from './fucntional/UseContextConsumer'
//import TextToSpeech from './fucntional/CustomHookSpeechToText'
//end of useState examples

//useEffect examples
// import Albums from './fucntional/UseEffect1'
// import Albums from './fucntional/UseEffect2'
// import Albums from './fucntional/UseEffect3'
//end of useEffect examples

//useContext examples
//import TheBase from './fucntional/UseContext1'
//import App from './fucntional/UseContextConsumer'
//end of useContext examples

//custom Hooks HOC functional based
//import App from './fucntional/HocHook'
//end of custom Hooks

//routing/navigation examples
//import Routing1 from './routing/RouteExample1'
//import App from './routing/programmaticallyRoute'
//import ProtectedApp from './routing/protectedRouting'
//import PreventNavApp from './routing/PreventNavigationPrompt'
//end of routing/navigation examples

//redux examples
//import ReduxEmployee from './reduxExample/reduxExample1'
import ReduxApp from './reduxExample/reduxApp'
//end of redux example
//const element = <ReactStates/>
//const element = <ReactProps/>
//const element = <Employee/>
//const element = <Albums/>
//const element = <TextToSpeech/>
//const element = <BrowserRouter><PreventNavApp/></BrowserRouter>
const element = <ReduxApp/>

ReactDOM.render(element, document.getElementById("root"))
