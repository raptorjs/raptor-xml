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


function Element(uri, localName, qName, prefix) {
    this.uri = uri;
    this.localName = localName;
    this.qName = qName;
}

Element.prototype = {
    /**
     * 
     * @returns
     */
    getNamespaceURI: function() {
        return this.uri;
    },
    
    /**
     * 
     * @returns
     */
    getLocalName: function() {
        return this.localName;
    },
    
    /**
     * 
     * @returns
     */
    getQName: function() {
        return this.qName;
    },
    
    /**
     * 
     */
    getPrefix: function() {
        
    },
    
    /**
     * @return {Array<raptor/xml/Attribute>}
     */
    getAttributes: function() {
        
    },
    
    /**
     * 
     */
    getNamespaceMappings: function() {
        
    }
};

module.exports = Element;