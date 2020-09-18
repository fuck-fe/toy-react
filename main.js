import {render, ToycreateElement, Component} from './toy-react'

class MyComponent extends Component{
    render(){
        return <div>
            <h1>my component</h1>
            {this.children}
        </div>
    }
}

render(<MyComponent id="a" class="c">
        <div>abc</div>
        <div>123</div>
        <div>asd</div>
    </MyComponent>, document.body)