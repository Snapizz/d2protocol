/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var ContentPart = (function () {
    function ContentPart() {
        this.id = '';
        this.state = 0;
    }
    ContentPart.prototype.getTypeId = function () {
        return ContentPart.ID;
    };
    ContentPart.prototype.reset = function () {
        this.id = '';
        this.state = 0;
    };
    ContentPart.prototype.serialize = function (param1) {
        this.serializeAs_ContentPart(param1);
    };
    ContentPart.prototype.serializeAs_ContentPart = function (param1) {
        param1.writeUTF(this.id);
        param1.writeByte(this.state);
    };
    ContentPart.prototype.deserialize = function (param1) {
        this.deserializeAs_ContentPart(param1);
    };
    ContentPart.prototype.deserializeAs_ContentPart = function (param1) {
        this.id = param1.readUTF();
        this.state = param1.readByte();
        if (this.state < 0) {
            throw new Error('Forbidden value (' + this.state + ') on element of ContentPart.state.');
        }
    };
    ContentPart.ID = 350;
    return ContentPart;
})();
module.exports = ContentPart;
