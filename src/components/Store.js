import {Component, UseState} from 'react';
import IconSwitch from './IconSwitch';
import { products } from './products';
import CardViews from './CardViews';
import ListViews from './ListViews';



class Store extends Component {
    
    constructor(props) {
        super(props);
        this.onSwitch=this.onSwitch.bind(this);
    }
    state = {icon: 'view_list', list:<CardViews cards={products} />}

    onSwitch(evt) {
        let icon = null;
        let list = null;
            if(evt.target.innerText == "view_list") {
                icon =  'view_module';
                list = <ListViews items={products} />
                
            } else {
                icon = 'view_list';
                list = <CardViews cards={products} />
                 
            }
        this.setState( { 
                icon: icon,
                list: list
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