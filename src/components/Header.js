import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styles from "./Header.css";

const Header = ( { loggedIn } ) => (
    <div>
        <Link to="/" className={ styles.link }>Home</Link>
        <Link to="/about" className={ styles.link }>About</Link>
        <Link to="/contact" className={ styles.link }>Contact</Link>
        { loggedIn && <Link to="/secret" className={ styles.link }>Secret</Link> }
    </div>
);

const mapStateToProps = ( state ) => ( {
    loggedIn: state.loggedIn,
} );

export default connect( mapStateToProps )( Header );
