/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PrismInformation = require('./prism-information');
var PrismSubareaEmptyInfo = require('./prism-subarea-empty-info');
var ProtocolTypeManager = require('../../../protocol-type-manager');
var PrismGeolocalizedInformation = (function (_super) {
    __extends(PrismGeolocalizedInformation, _super);
    function PrismGeolocalizedInformation() {
        this.worldX = 0;
        this.worldY = 0;
        this.mapId = 0;
        this.prism = new PrismInformation();
        _super.call(this);
    }
    PrismGeolocalizedInformation.prototype.getTypeId = function () {
        return PrismGeolocalizedInformation.ID;
    };
    PrismGeolocalizedInformation.prototype.reset = function () {
        this.worldX = 0;
        this.worldY = 0;
        this.mapId = 0;
        this.prism = new PrismInformation();
    };
    PrismGeolocalizedInformation.prototype.serialize = function (param1) {
        this.serializeAs_PrismGeolocalizedInformation(param1);
    };
    PrismGeolocalizedInformation.prototype.serializeAs_PrismGeolocalizedInformation = function (param1) {
        _super.prototype.serializeAs_PrismSubareaEmptyInfo.call(this, param1);
        if (this.worldX < -255 || this.worldX > 255) {
            throw new Error('Forbidden value (' + this.worldX + ') on element worldX.');
        }
        param1.writeShort(this.worldX);
        if (this.worldY < -255 || this.worldY > 255) {
            throw new Error('Forbidden value (' + this.worldY + ') on element worldY.');
        }
        param1.writeShort(this.worldY);
        param1.writeInt(this.mapId);
        param1.writeShort(this.prism.getTypeId());
        this.prism.serialize(param1);
    };
    PrismGeolocalizedInformation.prototype.deserialize = function (param1) {
        this.deserializeAs_PrismGeolocalizedInformation(param1);
    };
    PrismGeolocalizedInformation.prototype.deserializeAs_PrismGeolocalizedInformation = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.worldX = param1.readShort();
        if (this.worldX < -255 || this.worldX > 255) {
            throw new Error('Forbidden value (' + this.worldX + ') on element of PrismGeolocalizedInformation.worldX.');
        }
        this.worldY = param1.readShort();
        if (this.worldY < -255 || this.worldY > 255) {
            throw new Error('Forbidden value (' + this.worldY + ') on element of PrismGeolocalizedInformation.worldY.');
        }
        this.mapId = param1.readInt();
        var _loc2_ = param1.readUnsignedShort();
        this.prism = ProtocolTypeManager.getInstance(PrismInformation, _loc2_);
        this.prism.deserialize(param1);
    };
    PrismGeolocalizedInformation.ID = 434;
    return PrismGeolocalizedInformation;
})(PrismSubareaEmptyInfo);
module.exports = PrismGeolocalizedInformation;
