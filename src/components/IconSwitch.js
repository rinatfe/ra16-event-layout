import {Component} from 'react';
import PropTypes from 'prop-types';


class IconSwitch extends Component {
    static propTypes = {
        icon:PropTypes.string,
        onSwitch:PropTypes.func
    }

    render() {
        const {icon, onSwitch} = this.props;
        return (
            <span className="material-icons" onClick={onSwitch}>{icon}</span>
        );
    }
}

export default IconSwitch;