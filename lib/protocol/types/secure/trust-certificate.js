/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var TrustCertificate = (function () {
    function TrustCertificate() {
        this.id = 0;
        this.hash = '';
    }
    TrustCertificate.prototype.getTypeId = function () {
        return TrustCertificate.ID;
    };
    TrustCertificate.prototype.reset = function () {
        this.id = 0;
        this.hash = '';
    };
    TrustCertificate.prototype.serialize = function (param1) {
        this.serializeAs_TrustCertificate(param1);
    };
    TrustCertificate.prototype.serializeAs_TrustCertificate = function (param1) {
        if (this.id < 0) {
            throw new Error('Forbidden value (' + this.id + ') on element id.');
        }
        param1.writeInt(this.id);
        param1.writeUTF(this.hash);
    };
    TrustCertificate.prototype.deserialize = function (param1) {
        this.deserializeAs_TrustCertificate(param1);
    };
    TrustCertificate.prototype.deserializeAs_TrustCertificate = function (param1) {
        this.id = param1.readInt();
        if (this.id < 0) {
            throw new Error('Forbidden value (' + this.id + ') on element of TrustCertificate.id.');
        }
        this.hash = param1.readUTF();
    };
    TrustCertificate.ID = 377;
    return TrustCertificate;
})();
module.exports = TrustCertificate;
