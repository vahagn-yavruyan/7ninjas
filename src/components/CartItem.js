import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changePrice } from '../actions';

class CartItem extends Component {
    constructor(props) {
      super(props);
      const initialSku = props.item.sku[0];
      this.state = {
          imageUrl: initialSku.imageUrl,
          sku: initialSku,
          quantity: initialSku.min
      }
        
      this.increaseQuantity = this.increaseQuantity.bind(this);
      this.decreaseQuantity = this.decreaseQuantity.bind(this);
      this.handleSkuChange = this.handleSkuChange.bind(this);
  }
    
  componentWillMount() {
     const price = this.props.price + (this.state.quantity * this.state.sku.price); 
     this.props.changePrice(price);
  }
    
  componentWillUpdate(nextProps, nextState) {
    const price = this.props.price - (this.state.quantity * this.state.sku.price) + (nextState.quantity * nextState.sku.price);
    if (price !== this.props.price) {
      this.props.changePrice(price);
    }
  }
  
  renderSkuOptions() {
      return this.props.item.sku.map( ({ label }, index) => (
          <option value={index} key={label}>{label}</option>
      ))
  }
    
  increaseQuantity() {
      const { quantity } = this.state;
      this.setState({quantity: quantity + 1});
  }
    
  decreaseQuantity() {
      const { quantity } = this.state;
      this.setState({ quantity: quantity === 0 ? quantity : quantity - 1 });
      
  }
    
  handleSkuChange(e) {
      let sku = this.props.item.sku[e.target.value];
      this.setState({
          sku,
          quantity: sku.min
      });
  }
  
  render() {
    const { item: {id, title, subtitle, sku} } = this.props; 
    const { quantity } = this.state;
      
    return (
      <div className="cart-item-wrapper">
            <div className='image-box opacity-change'>
                <img src={process.env.PUBLIC_URL + '/images/image.jpg'} alt='img' />    
            </div>
            <div className='info-box'>
                <h3 className='item-title'>{this.props.item.title}</h3>
                <p className='item-info'>Lorem ipsum dolor sit amet, quis dictum mauris erat alium, ac in pehe pharetra quis non et.</p>
                <div className='sku-box-wrapper'>
                    <select className='sku-box' name="sku" onChange={this.handleSkuChange}>
                        {this.renderSkuOptions()}
                    </select>    
                </div>
            </div>
            <div className="quantity-box">
                <img className='garbage-img opacity-change' src={process.env.PUBLIC_URL + '/images/trash.svg'} alt='Trash' /> 
                <div className='price-quantity'>
                    <div className='quantity-wrapper'>
                        <span className='quantity-button decrease opacity-change' onClick={this.decreaseQuantity}></span>
                        <input className='quantity-field' type='text' value={quantity} readOnly />
                        <span className='quantity-button increase opacity-change' onClick={this.increaseQuantity}></span>
                    </div>
                    <p className='price-box'>{this.state.sku.price*quantity}.00 &euro;</p> 
                </div> 
            </div>
      </div>
    );
  }
}

function mapStateToProps( state ){
    return state.cart;
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ changePrice }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
