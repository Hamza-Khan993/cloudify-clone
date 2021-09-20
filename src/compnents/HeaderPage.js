import React, { Fragment } from 'react'

const HeaderPage = () => {
    return (
        <Fragment>

            <div className="overlay">
                <div className="text-center">
                    <div style={{ padding: "180px 500px" }} >
                        <h2 className="into-line">
                            It's easy to get started
                        </h2>
                        <p style={{ fontSize: "15px", bold: "400", color: "rgb(172, 193, 217)" }}>
                            All plans include 20+ advanced tools and features to optimize your workflows. Choose the
                            best plan to fit your needs.
                        </p>
                    </div>
                </div>
            </div>
            <img className="overlayImage" src="https://marketplace.cloudify.biz/img/Bg_04.6a30e541.png" alt="" />
        </Fragment>

    )
}

export default HeaderPage
