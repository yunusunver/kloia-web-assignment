import React, { Component } from 'react'
import Diego from './Diego';
import { connect } from 'react-redux';
import {openClose} from '../../../actions/index';
import './section.css';
import './diego.css';
import TabMenu from './TabMenu';

class Section extends Component {
    render() {
        return (
            <div>
              <section id="itemHeader" >
                <a className="itemInfo">Personal Information</a>
              </section>
              <section id="item1" >
                <div className={this.props.openclose.first===true?"diegodivclick":"diegodiv"}>
                <a href="#item1" 
                  className={this.props.openclose.first===true?"btn":"empty"} 
                  onClick={()=>this.props.openClose('first',this.props.openclose.first)}>{this.props.openclose.first==true?<i className="fa fa-minus-circle"></i>:<i className="fa fa-plus icon-plus"></i>} Diego Morata</a>
                </div>
               <div>
                  {this.props.openclose.first===true?<Diego/>:""} 
               </div>
            </section>
            <section id="item2">
              <div className={this.props.openclose.second===true?"diegodivclick":"diegodiv"}>
              <a href="#item2" className={this.props.openclose.second===true?"btn":"empty"}   onClick={()=>this.props.openClose('second',this.props.openclose.second)}>{this.props.openclose.second==true?<i className="fa fa-minus-circle"></i>:<i className="fa fa-plus icon-plus"></i>} Family</a>
              </div>
                
                {this.props.openclose.second===true?<div className="diego"><p className="familyparagraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></div>:""}
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

export default connect(mapStateToProps, mapDispatchToProps)(Section);
