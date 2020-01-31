import React from "react";
import Link from "next/link";

export default React.createClass({
    render() {
        return <Link {...this.props} activeClassName="active" />
    }
})