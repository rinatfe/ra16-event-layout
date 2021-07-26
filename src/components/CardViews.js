import {Component} from 'react';
import PropTypes from 'prop-types';

class CardViews extends Component {
    static propTypes = {
        cards:PropTypes.array
    }
    
    render() {
        const {cards} = this.props;
        return (
            <div className="CardView">
                {cards.map((item, ind)=> {
                    return <div className="ShopCard">
                        <div key={ind} className="card-name">{item.name}</div>
                        <div key={ind} className="card-color">{item.color}</div>
                        <img key={ind} className="card-img" src={item.img}/>
                        <div key={ind} className="card-footer">
                            <span className="price">${item.price}</span>
                            <button>ADD TO CART</button>
                        </div>
                    </div>
                })}
            </div>
        );
    }
}

export default CardViews;