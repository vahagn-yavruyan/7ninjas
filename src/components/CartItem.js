import React, { Component } from 'react';
import Quantity from './Quantity.js';


class CartItem extends Component {
    constructor(props) {
      super(props);
  }
  render() {
    return (
      <div className="cart-item-wrapper">
            <div className='image-box opacity-change'>
                <img src={process.env.PUBLIC_URL + '/images/image.jpg'} alt='img' />    
            </div>
            <div className='info-box'>
                <h3 className='item-title'>Title lorem ipsum dolor sit</h3>
                <p className='item-info'>Lorem ipsum dolor sit amet, quis dictum mauris erat alium, ac in pehe pharetra quis non et.</p>
                <div className='sku-box-wrapper'>
                    <select className='sku-box' name="sku">
                        <option>SKU</option>
                        <option>SKU</option>
                        <option>SKU</option>
                    </select>    
                </div>
            </div>
            <Quantity itemPrice={this.props.itemPrice} />
      </div>
    );
  }
}

export default CartItem;
