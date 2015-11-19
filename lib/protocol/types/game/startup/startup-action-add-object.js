/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var ObjectItemInformationWithQuantity = require('../data/items/object-item-information-with-quantity');
var StartupActionAddObject = (function () {
    function StartupActionAddObject() {
        this.uid = 0;
        this.title = '';
        this.text = '';
        this.descUrl = '';
        this.pictureUrl = '';
        this.items = [];
    }
    StartupActionAddObject.prototype.getTypeId = function () {
        return StartupActionAddObject.ID;
    };
    StartupActionAddObject.prototype.reset = function () {
        this.uid = 0;
        this.title = '';
        this.text = '';
        this.descUrl = '';
        this.pictureUrl = '';
        this.items = [];
    };
    StartupActionAddObject.prototype.serialize = function (param1) {
        this.serializeAs_StartupActionAddObject(param1);
    };
    StartupActionAddObject.prototype.serializeAs_StartupActionAddObject = function (param1) {
        if (this.uid < 0) {
            throw new Error('Forbidden value (' + this.uid + ') on element uid.');
        }
        param1.writeInt(this.uid);
        param1.writeUTF(this.title);
        param1.writeUTF(this.text);
        param1.writeUTF(this.descUrl);
        param1.writeUTF(this.pictureUrl);
        param1.writeShort(this.items.length);
        var _loc2_ = 0;
        while (_loc2_ < this.items.length) {
            (this.items[_loc2_]).serializeAs_ObjectItemInformationWithQuantity(param1);
            _loc2_++;
        }
    };
    StartupActionAddObject.prototype.deserialize = function (param1) {
        this.deserializeAs_StartupActionAddObject(param1);
    };
    StartupActionAddObject.prototype.deserializeAs_StartupActionAddObject = function (param1) {
        var _loc4_ = null;
        this.uid = param1.readInt();
        if (this.uid < 0) {
            throw new Error('Forbidden value (' + this.uid + ') on element of StartupActionAddObject.uid.');
        }
        this.title = param1.readUTF();
        this.text = param1.readUTF();
        this.descUrl = param1.readUTF();
        this.pictureUrl = param1.readUTF();
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new ObjectItemInformationWithQuantity();
            _loc4_.deserialize(param1);
            this.items.push(_loc4_);
            _loc3_++;
        }
    };
    StartupActionAddObject.ID = 52;
    return StartupActionAddObject;
})();
module.exports = StartupActionAddObject;
