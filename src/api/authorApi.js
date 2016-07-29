"use strict";

// this file is mocking a web api by hitting hard coded data.
var authors = require('./authorData').authors;
var _ = require('lodash');

var _generateId = function (author) {
    return author.firstName.toLowerCase() + '-' + author.lastName.toLowerCase();
};

var _clone = function (item) {
    return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of
};

var AuthorApi = {
    getAllAuthors: function () {
        return _clone(authors);
    },
    getAuthorById: function (id) {
        var author = _.find(authors, {id: id});
        return _clone(author);
    },
    saveAuthor: function (author) {
        // pretend an ajax call to web api is made here
        console.log('pretend this just saved the author t the db via ajax call...');

        if(author.id){
            var existingAuthorIndex = _.indexOf(authors, _.find(authors, {id: author.id}));
            authors.splice(existingAuthorIndex, 1, author);
        } else {
            //just simulating creating here.
            //the server would generate ids for the new authors in a real app.
            //cloning so copy returned is passed by value rather than by reference.
            author.id = _generateId(author);
            author.push(author);
        }

        return _clone(author);
    },
    deleteAuthor: function (id) {
        console.log('Pretend this just deleted the author from the db via an ajax call...');
        _.remove(authors, {id: id});
    }
};

module.exports = AuthorApi;