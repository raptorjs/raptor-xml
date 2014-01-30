function SaxParserDom(xmlDoc) {
    SaxParserDom.superclass.constructor.call(this);
}

SaxParserDom.prototype = {
    parse: function(xmlSrc, filePath) {
        var xmlDoc;
        if (xmlSrc.documentElement) {
            xmlDoc = xmlSrc;
        }
        else {
            var parser = require('raptor-xml/dom').createParser();
            xmlDoc = parser.parse(xmlSrc, filePath);    
        }
        
        require('raptor-xml/dom-to-sax').domToSax(xmlDoc.documentElement, {
            
            startElement: this._startElement,
            
            endElement: this._endElement,
            
            comment: this._comment,
            
            characters: this._characters
        }, this);
    }
};

module.exports = SaxParserDom;