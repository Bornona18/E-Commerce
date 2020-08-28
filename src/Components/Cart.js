import React, { Component } from 'react'
import axios from 'axios'
import './CSS/men.css'
// import {BrowserHistory} from 'react-router'
import './CSS/choice.css'
import './CSS/home.css'
import { shoes, dress } from './../redux/Action/actioncreator'
import { connect } from 'react-redux'

class Cart extends Component {
    constructor(props) {
        super(props)
    }

    shop() {
        this.props.history
            .push(`/choice/${this.props.match.params.FullName}`)
    }

    checkout() {
        this.props.history
            .push(`/check`)
    }
    render() {
        let MenDressData
        let MenShoeData
        let WomenDressData
        let WomenShoeData
        let ChildrenDressData
        let ChildrenShoeData

        if (this.props.mendress.length > 0) {
            MenDressData = <div>
                <b>Men's Dresses</b>
                <table className="table">
                    <thead>
                        <tr>
                            <th>PRODUCT NAME</th>
                            <th>QUANTITY</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.mendress[0].map(p =>
                                <tr>
                                    <td>{p.name}</td>
                                    <td>{p.quantity}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table></div>
        }
        if (this.props.menshoes.length > 0) {
            MenShoeData = <div>
                <b>Men's Shoes</b>
                <table className="table">
                    <thead>
                        <tr>
                            <th>PRODUCT NAME</th>
                            <th>QUANTITY</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.menshoes[0].map(p =>
                                <tr>
                                    <td>{p.name}</td>
                                    <td>{p.quantity}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table></div>
        }
        if (this.props.womendress.length > 0) {
            WomenDressData = <div>
                <b>Women's Dresses</b>
                <table className="table">
                    <thead>
                        <tr>
                            <th>PRODUCT NAME</th>
                            <th>QUANTITY</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.womendress[0].map(p =>
                                <tr>
                                    <td>{p.name}</td>
                                    <td>{p.quantity}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table></div>
        }
        if (this.props.womenshoes.length > 0) {
            WomenShoeData = <div>
                <b>Women's Shoes</b>
                <table className="table">
                    <thead>
                        <tr>
                            <th>PRODUCT NAME</th>
                            <th>QUANTITY</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.womenshoes[0].map(p =>
                                <tr>
                                    <td>{p.name}</td>
                                    <td>{p.quantity}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table></div>
        }
        if (this.props.childrendress.length > 0) {
            ChildrenDressData = <div>
                <b>Children's Dresses</b>
                <table className="table">
                    <thead>
                        <tr>
                            <th>PRODUCT NAME</th>
                            <th>QUANTITY</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.childrendress[0].map(p =>
                                <tr>
                                    <td>{p.name}</td>
                                    <td>{p.quantity}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table></div>
        }
        if (this.props.childrenshoes.length > 0) {
            ChildrenShoeData = <div>
                <b>Children's Shoes</b>
                <table className="table">
                    <thead>
                        <tr>
                            <th>PRODUCT NAME</th>
                            <th>QUANTITY</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.childrenshoes[0].map(p =>
                                <tr>
                                    <td>{p.name}</td>
                                    <td>{p.quantity}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table></div>
        }
        return (
            <div>
            <h1>Your Cart is ready</h1> <br/><br/><br/>
 {MenDressData}
                {MenShoeData}
               {WomenDressData}
                {WomenShoeData}
                {ChildrenDressData}
                {ChildrenShoeData}
                <br /><br /><br />
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-6 col-xl-6">
                        <button className="choice  btn btn-dark" onClick={this.shop.bind(this)}>Continue Shopping</button>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-6 col-xl-6">
                        <button className=" choice btn btn-dark" onClick={this.checkout.bind(this)}>Checkout</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        menshoes: state.menshoes,
        mendress: state.mendress,
        womenshoes: state.womenshoes,
        womendress: state.womendress,
        childrenshoes: state.childrenshoes,
        childrendress: state.childrendress
    }
}

const mapdispatchToProps = dispatch => {
    return {
        // addshoes:(d)=>dispatch(shoes(d)),
        // adddress:(d)=>dispatch(dress(d))
    }
}
export default connect(mapStateToProps, mapdispatchToProps)(Cart)
