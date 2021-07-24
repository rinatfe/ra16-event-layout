import {Component} from 'react';

class ListViews extends Component {
    render() {
        const {items} = this.props;
        return (
            <div className="ListView">
                {items.map((item, ind)=> {
                    return <ul className="ShopItem">
                        <li className="Item"><img key={ind} className="item-img-Items" src={item.img}/></li>
                        <li key={ind} className="item-name">{item.name}</li>
                        <li key={ind} className="item-color">{item.color}</li>
                        <li key={ind} className="item-footer">
                            <span className="price-Item">${item.price}</span>
                            <button className="list-button">ADD TO CART</button>
                        </li>
                    </ul>
                })}
            </div>
        );
    }
}

export default ListViews;