/*
 * Copyright 2011 eBay Software Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var EventEmitter = require('events').EventEmitter;


var arrayFromArguments = require('raptor-util').arrayFromArguments;

var BaseSaxParser = function() {
    this.observable = new EventEmitter();
};

BaseSaxParser.prototype = {
    on: function(event, callback, thisObj) {

        if (typeof event === 'object') {
            thisObj = callback;
            var events = event;

            Object.keys(events).forEach(function(event) {
                callback = events[event];
                this.on(event, callback, thisObj);
            }, this);
            
            return;
        }

        this.observable.on.apply(this.observable, arguments);
    },

    _startElement: function(el) {
        this.observable.publish("startElement", el);
    },

    _endElement: function(el) {
        this.observable.publish("endElement", el);
    },

    _characters: function(text) {
        //Normalize EOL sequence...
        text = text.replace(/\r\n|\r/g, "\n");
        this.observable.publish("characters", text);
    },

    _cdata: function(text) {
        //Normalize EOL sequence...
        text = text.replace(/\r\n|\r/g, "\n");
        this.observable.publish("cdata", text);
    },

    _comment: function(comment) {
        this.observable.publish("comment", comment);
    },

    _error: function() {
        var args = arrayFromArguments(arguments);
        this.observable.publish("error", args);
    },

    getPos: function() {
        return "(unknown)";
    }
};

module.exports = BaseSaxParser;