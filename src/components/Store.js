import {Component, UseState} from 'react';
import IconSwitch from './IconSwitch';
import { products } from './products';
import CardViews from './CardViews';
import ListViews from './ListViews';



class Store extends Component {
    
    constructor(props) {
        super(props)
        this.onSwitch=this.onSwitch.bind(this);
    }
    state = {icon: 'view_list', list:<CardViews cards={products} />}

    onSwitch(evt) {
        this.setState(()=> {
            let arr = null
            if(evt.target.innerText == "view_list") {
                return { 
                    icon: 'view_module',
                    list: <ListViews items={products} />
                } 
            } else {
                return { 
                    icon: 'view_list',
                    list: <CardViews cards={products} />
                } 
            }
           
        });
    }

    render() {
        return (
            <div className="crad-container">
                <IconSwitch icon={this.state.icon} onSwitch={this.onSwitch} />
                <div>{this.state.list}</div>
            </div>
        );
    }
}

export default Store;