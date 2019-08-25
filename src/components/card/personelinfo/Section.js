import React, { Component } from 'react'
import Diego from './Diego';
import { connect } from 'react-redux';
import {openClose} from '../../../actions/index';

class Section extends Component {
    render() {
        return (
            <div>
              <section id="itemHeader" >
                <a className="itemInfo">Personal Information</a>
              </section>
              <section id="item1" >
                <a href="#item1" 
                  className={this.props.openclose.first===true?"btn":"empty"} 
                  onClick={()=>this.props.openClose('first',this.props.openclose.first)}>{this.props.openclose.first==true?<i className="fa fa-minus-circle"></i>:<i className="fa fa-plus icon-plus"></i>} Diego Morata</a>
               {this.props.openclose.first===true?<Diego/>:""} 
            </section>
            <section id="item2">
                <a href="#item2" className={this.props.openclose.second===true?"btn":"empty"}   onClick={()=>this.props.openClose('second',this.props.openclose.second)}>{this.props.openclose.second==true?<i className="fa fa-minus-circle"></i>:<i className="fa fa-plus icon-plus"></i>} Family</a>
                {this.props.openclose.second===true?<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>:""}
            </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(Section);
