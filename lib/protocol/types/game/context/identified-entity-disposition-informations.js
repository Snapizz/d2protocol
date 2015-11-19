/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var EntityDispositionInformations = require('./entity-disposition-informations');
var IdentifiedEntityDispositionInformations = (function (_super) {
    __extends(IdentifiedEntityDispositionInformations, _super);
    function IdentifiedEntityDispositionInformations() {
        this.id = 0;
        _super.call(this);
    }
    IdentifiedEntityDispositionInformations.prototype.getTypeId = function () {
        return IdentifiedEntityDispositionInformations.ID;
    };
    IdentifiedEntityDispositionInformations.prototype.reset = function () {
        this.id = 0;
    };
    IdentifiedEntityDispositionInformations.prototype.serialize = function (param1) {
        this.serializeAs_IdentifiedEntityDispositionInformations(param1);
    };
    IdentifiedEntityDispositionInformations.prototype.serializeAs_IdentifiedEntityDispositionInformations = function (param1) {
        _super.prototype.serializeAs_EntityDispositionInformations.call(this, param1);
        param1.writeInt(this.id);
    };
    IdentifiedEntityDispositionInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_IdentifiedEntityDispositionInformations(param1);
    };
    IdentifiedEntityDispositionInformations.prototype.deserializeAs_IdentifiedEntityDispositionInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.id = param1.readInt();
    };
    IdentifiedEntityDispositionInformations.ID = 107;
    return IdentifiedEntityDispositionInformations;
})(EntityDispositionInformations);
module.exports = IdentifiedEntityDispositionInformations;
