/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var AbstractContactInformations = (function () {
    function AbstractContactInformations() {
        this.accountId = 0;
        this.accountName = '';
    }
    AbstractContactInformations.prototype.getTypeId = function () {
        return AbstractContactInformations.ID;
    };
    AbstractContactInformations.prototype.reset = function () {
        this.accountId = 0;
        this.accountName = '';
    };
    AbstractContactInformations.prototype.serialize = function (param1) {
        this.serializeAs_AbstractContactInformations(param1);
    };
    AbstractContactInformations.prototype.serializeAs_AbstractContactInformations = function (param1) {
        if (this.accountId < 0) {
            throw new Error('Forbidden value (' + this.accountId + ') on element accountId.');
        }
        param1.writeInt(this.accountId);
        param1.writeUTF(this.accountName);
    };
    AbstractContactInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_AbstractContactInformations(param1);
    };
    AbstractContactInformations.prototype.deserializeAs_AbstractContactInformations = function (param1) {
        this.accountId = param1.readInt();
        if (this.accountId < 0) {
            throw new Error('Forbidden value (' + this.accountId + ') on element of AbstractContactInformations.accountId.');
        }
        this.accountName = param1.readUTF();
    };
    AbstractContactInformations.ID = 380;
    return AbstractContactInformations;
})();
module.exports = AbstractContactInformations;
