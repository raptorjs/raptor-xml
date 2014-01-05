function DomParser(options) {
    
}

DomParser.prototype = {
        
    parse: function(xmlSrc) {
        try
        {
            var xmlDoc = $.parseXML(xmlSrc);
            return xmlDoc;
        }
        catch(e) {
            throw new Error("Invalid XML");
        }
    }
};

require('./parser').DomParser = DomParser;