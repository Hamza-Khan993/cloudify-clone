import React, { useState, useEffect } from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { createStyles, makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) =>
    createStyles({
        navBarStyle: {
            position: "fixed",
            borderRadius: "2px",
            boxShadow: "0px 2px 2px black",
            // transition: "0.2s"
        },

        navBarScrollStyle: {
            // width: "calc(100vh - 100px)",
            // height: "85%"
        }
    }
    ))


const logoStyle = {
    height: "42px",
    width: "200px"
}

const navContainer = {
    margin: "10px 250px 0px ",
    display: "flex",
    gap: "200px"
}
const mainStyle = {
    fontColor: "white",
    zIndex: 1
}

const navLists = {
    // margin: "0px 250px",
    // display: 'inline-block'

}

const navLink = {
    color: "white",
    marginRight: "20px",
    // width: "100%"
    // padding: "50px"

}

const navLinkLast = {
    color: "white",
    // marginRight: "20px",
    // width: "100%",
    // padding: "50px",
    display: "flex",
    // justify: "space-evenly",
    alignItems: "baseline",
    gap: '10px',
    alignSelf: "center"
}

const navListItems = {
    // alignSelf: "center",
    width: "100%",
}
export const Navbar = () => {
    const classes = useStyles();

    const [offset, setOffset] = useState(0)
    // const [navClass, setNavClass] = useState(classes.navBarStyle)

    useEffect(() => {
        window.onscroll = () => {
            setOffset(window.pageYOffset)
        }
    }, []);

    // console.log(offset);

    return (
        <Fragment>
            <div style={mainStyle}>
                <nav style={{ background: "#003473" }} className={offset < 10 ? 'navbar navbar-expand-lg navbar-light' : 'navbar navbar-expand-lg navbar-light ' + classes.navBarStyle}>
                    <div style={navContainer} className="container-fluid">
                        <Link className="navbar-brand" to="#">
                            <img style={logoStyle} src="https://marketplace.cloudify.biz/img/CloudifyMarketplace.8bcb0dfd.png" alt="" />
                        </Link>
                        <div style={navLists} className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li style={navListItems} className="nav-item">
                                    <Link style={navLink} className="nav-link active" aria-current="page" to="#">Home</Link>
                                </li>
                                <li style={navListItems} className="nav-item">
                                    <Link style={navLink} className="nav-link" to="#">Features</Link>
                                </li>
                                <li style={navListItems} className="nav-item dropdowns">

                                    <Link className="nav-link" style={{ color: "white", marginRight: "20px", marginBottom: "2px" }}>Packages</Link>
                                    <div className="dropdown-contents">
                                        <div className="crm-dropdowns">
                                            <Link style={{ color: "white", marginBottom: "0px" }}>CRM</Link>
                                            <div className="crm-dropdown-contents">
                                                <div className="pipedrive-dropdowns">
                                                    <Link>Pipedrive</Link>
                                                    <div className="pipedrive-dropdown-contents">
                                                        <Link>Pipedrive + Mailchimp</Link>
                                                        <Link>Pipedrive + MS Business Central</Link>
                                                        <Link>Pipedrive + e-conomic</Link>
                                                        <Link>Pipedrive + Magento</Link>
                                                        <Link>Pipedrive + WooCommerce</Link>
                                                        <Link>Pipedrive + Shopify</Link>
                                                    </div>

                                                </div>

                                                <Link to="#">Mailchimp</Link>
                                                <Link to="#">Hubspot</Link>
                                            </div>
                                        </div>
                                        <Link to="#">Webshop</Link>
                                        <Link to="#">Accounting</Link>
                                    </div>

                                </li>
                                <li style={navListItems} classNameName="nav-item">
                                    <Link style={navLink} className="nav-link" to="#">Apps</Link>
                                </li>
                                <li style={navListItems} className="nav-item">
                                    <Link style={navLink} className="nav-link" to="#">Pricing</Link>
                                </li>

                                <li style={navListItems} className="nav-item">
                                    <Link style={navLink} className="nav-link" to="#">Contact</Link>
                                </li>
                                <li style={navListItems} className="nav-item">
                                    <Link style={navLink} className="nav-link" to="#">Demo</Link>
                                </li>
                                <li style={navListItems} className="nav-item">
                                    <Link style={navLinkLast} className="nav-link" to="#">
                                        <img style={{ width: "20px", height: "15px" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA1CAMAAACA7r40AAAA/FBMVEWyIjNPN2Y8O27///8/PnBOTXxycpY9PG9RUX5HR3dIR3dLSnlPTny4uMpWVYFFRHVwb5VlZIx7e52DgqOIh6aIiKc+PXBJSHhTUn9hYYqyIjReXohgX4lYV4Lr6/C2tcjPdYB0c5haWYRYV4Nra5GJiac+PW/FxdTHYG1RUH3eoajltbtOTXvty89BQHHg3+hSUX6GYoC6usyVlbFycZa7u8yUk6+sq8FCQXO0tMe1tMhiYYpMS3pDQnNvbpTExNN8fJ7GxdTGxtWCgqLHx9WXlrLXi5SYl7Kiobrg4Oiiorrn5u3n5+2jo7ukpLvw8PTx8fX09Pf19firqsC5sMNxAAAAAnRSTlPQ9qN1Xw4AAAGlSURBVHhe7ZXFiiRBFEVjznvp5W7t7j3u7m7//y8D1dAMGbnI4jW5KOpsgjibCxFcrrtVEmcBGAGQJHB98d3EgEM/ygsg/nwRAy15rxQ4Ywh3JQX49hVgKA/Ad1hDkkGTMSQJjGkOEmo133FmwAEQyl8FfSj3gFgkzjsQAw6AZ796AP2fGcDBS8/ZQ7ZQlJ2d+bEFqp6zhuh9Cf9/pDtKkTs04KBTD4jgx3eICOodoshz1p7M6UUAUQ+Ap2Pf2UMI5UBBX18/Ut7ZQ84Jui10QKsbcA7dt77jxIBDt+sxMNzrD4HL+rZS4Iw9iTZkCjRFmsBUHkcUOGMI7dkpKezuQsrprM3zR76zN572ekdBX623gaONJ0d5B5sGHAA1+QTwRQJgX2Q/7+w9GZGlDZKERpoxgkbDc8s0WscGSo+WGMiNVlgwWuFNjdafPsDe7wzg3RvP2UNCFGVtbX6EoOo7PhgoO1rGnswHiquB4mqgfIcxpBTGkNslMf2JVMAShRxXgJtUwBKFbFbAqicL4U4qYNWThXCHFbDqyUK4swpY9WQhXBX8A2rVjaQ6HWXmAAAAAElFTkSuQmCC" alt="" />
                                        <p >English</p>
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

        </Fragment>
    )
}
