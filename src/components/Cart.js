import React, { Component } from 'react';
import { fetchItems } from '../actions';
import { connect } from 'react-redux';
import CartItem from './CartItem.js';
import { bindActionCreators } from 'redux';

class Cart extends Component {
    constructor(props){
        super(props);
        this.props.fetchItems();
    }
    
    componentDidMount() {
        this.props.fetchItems();
    }
    
    
    renderItems(){
        return this.props.items.map((item) => {
            return (
                <CartItem key={item.id} item={item} />
            );
        });
    }
    
    render() {
        return (
        <div className='cart-wrapper'>
            <div className='cart-inner'>
                {this.renderItems()}
                <h1 className='cart-summary'>{this.props.price}.00 &euro;</h1>    
            </div>
        </div>
        );
    }
}


function mapStateToProps({ items, cart: { price } }){
    return { items, price };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({fetchItems}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);