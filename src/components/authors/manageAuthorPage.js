"use strict";

var React = require('react');
var AuthorForm = require('./authorForm');
var AuthorApi = require('../../api/authorApi');

var ManageAuthorPage = React.createClass({
    getInitialState: function () {
        return {
            author: {id: '', firstName: '', lastName: ''}
        };
    },

    setAuthorState: function (event) {
        var field = event.target.name,
            value = event.target.value;

        this.state.author[field] = value;

        return this.setState({author: this.state.author});
    },

    saveAuthor: function (event) {
        event.preventDefault();

    },

    render: function () {
        return (
            <AuthorForm
                author={ this.state.author }
                onChange={ this.setAuthorState }
            />
        );
    }
});

module.exports = ManageAuthorPage;