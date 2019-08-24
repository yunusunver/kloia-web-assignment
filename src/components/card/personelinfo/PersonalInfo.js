import React, { Component } from 'react';
import Diego from './Diego';
import TabMenu from './TabMenu';
import { connect } from 'react-redux';
import {openClose} from '../../../actions/index';
class PersonalInfo extends Component {
    //redux kullanmadan önce kullandığım yöntem
    // openClose=(data)=>{
    //     const { first,second }=this.state;
    //         if (data === "first") {
    //             this.setState({
    //                 first:!first
    //             })
    //         }
    //         else if(data==="second"){
    //             this.setState({
    //                 second:!second
    //             })
    //         }
    //     }


    render() {
        return (
            <div className="personal">
            <section id="itemHeader" >
                <a className="itemInfo">Personal Information</a>
            </section>
            <section id="item1" >
                
                <a href="#item1" className={this.props.openclose.first===true?"btn":"empty"} onClick={()=>this.props.openClose('first',this.props.openclose.first)}>{this.props.openclose.first==true?<i className="fa fa-minus-circle"></i>:<i className="fa fa-plus icon-plus"></i>} Diego Morata</a>
               {this.props.openclose.first===true?<Diego/>:""} 
               
            </section>
            <section id="item2">
                <a href="#item2" className={this.props.openclose.second===true?"btn":"empty"}   onClick={()=>this.props.openClose('second',this.props.openclose.second)}>{this.props.openclose.second==true?<i className="fa fa-minus-circle"></i>:<i className="fa fa-plus icon-plus"></i>} Family</a>
                {this.props.openclose.second===true?<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>:""}
            </section>
            
            <TabMenu/>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
  return {
    openclose: state.rootReducer
  }
}

const mapDispatchToProps = {
  openClose
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfo)
