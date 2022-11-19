/*const element = document.createElement('h1')
element.innerText = 'Hello React'

const container = document.getElementById('root')

container.appendChild(element)
*/
import React from 'react'
import ReactDOM from 'react-dom'
import {App, Button} from "./App"
import { sideNav } from './sideMenu/sideMenu'

const ContainerNav = () => <nav><sideNav/></nav>
const ContainerBody = () => <div><App/></div>

const container = document.getElementById('root')
const sideNavBar = document.getElementById('sideNav')

// ReactDOM.render(__QUE__, __DONDE__)
ReactDOM.render(<App/>, container)
//ReactDOM.render(<sideNav/>, sideNavBar)