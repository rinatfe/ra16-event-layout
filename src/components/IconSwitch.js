import {Component} from 'react';


class IconSwitch extends Component {

    render() {
        const {icon, onSwitch} = this.props;
        return (
            <span className="material-icons" onClick={onSwitch}>{icon}</span>
        );
    }
}

export default IconSwitch;