/*const element = document.createElement('h1')
element.innerText = 'Hello React'

const container = document.getElementById('root')

container.appendChild(element)
*/
import React from 'react'
import ReactDOM from 'react-dom'
import {App, Button} from "./App"

const ContainerBody = () => <div><Button/><App/></div>

// const element = alert("Prueba")
const container = document.getElementById('root')

// ReactDOM.render(__QUE__, __DONDE__)
ReactDOM.render(<App/>, container)