import React, { Component } from 'react';
import TabMenu from './TabMenu';
import Section from './Section';
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
            <Section/>
            <TabMenu/>
          </div>
        )
    }
}

export default PersonalInfo;
