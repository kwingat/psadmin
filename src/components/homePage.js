'use strict';

var React = require('react');
<<<<<<< HEAD
var Router = require('react-router');
var Link = Router.Link;
=======
>>>>>>> origin/master

var Home = React.createClass({
    render: function () {
        return (
<<<<<<< HEAD
            <div className='jumbotron'>
                <h1>Pluralsight Administration</h1>
                <p>React, React Router, and Flux for ultra responsive web apps.</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
=======
            <div className="jumbotron">
                <h1>Pluralsight Administration</h1>
                <p>React, React Router, and Flux for ultra responsive web apps.</p>
>>>>>>> origin/master
            </div>
        );
    }
});

module.exports = Home;