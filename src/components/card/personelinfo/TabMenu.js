import React, { Component } from 'react'

export default class TabMenu extends Component {
    render() {
        return (
            <div>
                <section id="tab-section">
                    <div className="tabs">
                        <input name="tabs" type="radio" id="tab-1" className="input" checked/>
                        <label for="tab-1" className="label">Address</label>
                        <div className="panel" id="panel1">
                            <img className="address-image" src="https://ingilizcebankasi.com/wp-content/uploads/ytdfghjkl%C5%9F%C3%B6%C3%A7m.jpg" />
                            <div className="panel-grid">
                            <div className="adress">3309 Franecki Dam Apt. 701</div>
                            <div className="adress">London - United Kingdom</div>
                            <input type="button" value="Change" className="change-button"/>
                            </div>
                        </div>

                        <input name="tabs" type="radio" id="tab-2" className="input"/>
                        <label for="tab-2" className="label">Subscribe</label>
                        <div className="panel">
                          <form className="subscribe-form">
                            <input type="text" placeholder="Email adress" className="subscribe-input"/>
                            <input type="button" value="Subscribe" className="subscribe-button"/>
                          </form>
                        </div>

                    </div>
                </section>
            </div>
        )
    }
}
