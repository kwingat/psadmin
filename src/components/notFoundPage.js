"use strict";

var React = require('react');
var Link = require('react-router').Link;

var NotFoundPage = React.createClass({
   render: function () {
       return (
         <div>
             <h1>Page Not Found</h1>
             <p>Whoops! Sorry, there is nothing to see here.</p>
             <p><link to="app">Back to Home</link></p>
         </div>
       );
   }
});

module.exports = NotFoundPage;