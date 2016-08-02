<<<<<<< HEAD
"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
=======
'use strict';

var React = require('react');
>>>>>>> origin/master

var Header = React.createClass({
    render: function () {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
<<<<<<< HEAD
                    <Link to="app" className="navbar-brand">
                        <img src="images/pluralsight-logo.png" />
                    </Link>
                    <ul className="nav navbar-nav">
                        <li><Link to="app">Home</Link></li>
                        <li><Link to="authors">Authors</Link></li>
                        <li><Link to="about">About</Link></li>
=======
                    <a href="/" className="navbar-brand">
                        <img src="images/pluralsight-logo.png" />
                    </a>
                    <ul className="nav navbar-nav">
                        <li><a href="/">Home</a></li>
                        <li><a href="/#about">About</a></li>
>>>>>>> origin/master
                    </ul>
                </div>
            </nav>
        );
    }
<<<<<<< HEAD
});

module.exports = Header;
=======
});
>>>>>>> origin/master
