import {Component} from 'react';

class CardViews extends Component {
    
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