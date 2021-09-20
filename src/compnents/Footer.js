import React, { Fragment } from 'react'

const Footer = ({ email }) => {
    return (
        <Fragment >
            <div style={{ margin: "100px 20px" }} className="text-center">
                <div style={footerStyle} className="grid-4 footer">
                    <div style={{ textAlign: "start" }}>
                        <p style={footerHeading}>Solutions</p>
                        <ul style={footerList}>
                            <li><a href="#!">Intergration</a> </li>
                            <li><a href="#!">Implementation</a> </li>
                            <li><a href="#!">Workflow Automation</a> </li>
                            <li><a href="#!">API Development</a> </li>
                        </ul>
                    </div>
                    <div style={{ textAlign: "start" }}>
                        <p style={footerHeading}>Cloudify</p>
                        <ul style={footerList}>
                            <li><a href="#!">Blog</a> </li>
                            <li><a href="#!">Contact</a> </li>
                            <li><a href="#!">Support</a> </li>
                        </ul>
                    </div>
                    <div style={{ textAlign: "start" }}>
                        <p style={footerHeading}>Legal</p>
                        <ul style={footerList}>
                            <li><a href="#!">About Cloudify</a> </li>
                            <li><a href="#!">Terms and Conditions</a> </li>
                            <li><a href="#!">Privacy Policy</a> </li>
                            <li><a href="#!">Data Processing Agreement (DPA)</a> </li>
                            <li><a href="#!">Cookie Settings</a> </li>
                        </ul>
                    </div>
                    <div style={{ textAlign: "start" }}>
                        <p style={footerHeading}>Contact Info</p>
                        <ul style={footerContactList}>
                            <li><i class="fas fa-map-marker-alt" /> <span style={{ marginLeft: "10px" }}>2605 Brondby, Denmark</span></li>
                            <li><i className="fas fa-envelope" /> <span style={{ marginLeft: "10px" }}>info@cloudify.biz</span> </li>
                            <li><i className="fas fa-globe" /> <span style={{ marginLeft: "10px" }}>https://www.cloudify.biz</span> </li>
                            <li><i className="fas fa-book" /> <span style={{ marginLeft: "10px" }}>VAT number: 33066287</span> </li>

                        </ul>
                    </div>

                </div>
                <div style={{ marginTop: "20px" }}>
                    Copyright <span> <i className="fas fa-copyright"></i></span> 2020 Hamza Khan
                </div>
            </div>

        </Fragment>
    )
}

const footerHeading = {
    fontSize: "20px",
    fontWeight: "700",
    lineHeight: "24px"

}

const footerStyle = {
    // margin: "50px 100px 0",

}

const footerList = {
    marginTop: "3px",
    listStyleType: "none",
    textDecoration: "none",
    padding: "0rem",
    fontSize: "1.01625rem",
    color: 'rgb(112, 127, 143)',
    display: "flex",
    flexDirection: "column",
    gap: "14px"
}

const footerContactList = {
    marginTop: "3px",
    listStyleType: "none",
    textDecoration: "none",
    padding: "0rem",
    fontSize: "15px",
    color: 'rgb(112, 127, 143)',
    display: "flex",
    flexDirection: "column",
    gap: "16px"
}


export default Footer
