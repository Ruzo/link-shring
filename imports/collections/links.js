import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
import validUrl from 'valid-url';
import {check, Match} from 'meteor/check';

Meteor.methods({
  'insert.link': function(url){
    check(url, Match.Where(url => validUrl.isUri(url)));

    let token = Math.random().toString(36).slice(-5);
    Links.insert({url, token, clicks: 0});
  }
});

export const Links = new Mongo.Collection('links');

// This module should be loaded in main client and server files
// for the methods to be available throughout the app.