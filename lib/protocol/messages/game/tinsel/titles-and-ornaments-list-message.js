/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var TitlesAndOrnamentsListMessage = (function (_super) {
    __extends(TitlesAndOrnamentsListMessage, _super);
    function TitlesAndOrnamentsListMessage() {
        this.titles = [];
        this.ornaments = [];
        this.activeTitle = 0;
        this.activeOrnament = 0;
        _super.call(this);
    }
    TitlesAndOrnamentsListMessage.prototype.getMessageId = function () {
        return TitlesAndOrnamentsListMessage.ID;
    };
    TitlesAndOrnamentsListMessage.prototype.reset = function () {
        this.titles = [];
        this.ornaments = [];
        this.activeTitle = 0;
        this.activeOrnament = 0;
    };
    TitlesAndOrnamentsListMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    TitlesAndOrnamentsListMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    TitlesAndOrnamentsListMessage.prototype.serialize = function (param1) {
        this.serializeAs_TitlesAndOrnamentsListMessage(param1);
    };
    TitlesAndOrnamentsListMessage.prototype.serializeAs_TitlesAndOrnamentsListMessage = function (param1) {
        param1.writeShort(this.titles.length);
        var _loc2_ = 0;
        while (_loc2_ < this.titles.length) {
            if (this.titles[_loc2_] < 0) {
                throw new Error('Forbidden value (' + this.titles[_loc2_] + ') on element 1 (starting at 1) of titles.');
            }
            param1.writeVarShort(this.titles[_loc2_]);
            _loc2_++;
        }
        param1.writeShort(this.ornaments.length);
        var _loc3_ = 0;
        while (_loc3_ < this.ornaments.length) {
            if (this.ornaments[_loc3_] < 0) {
                throw new Error('Forbidden value (' + this.ornaments[_loc3_] + ') on element 2 (starting at 1) of ornaments.');
            }
            param1.writeVarShort(this.ornaments[_loc3_]);
            _loc3_++;
        }
        if (this.activeTitle < 0) {
            throw new Error('Forbidden value (' + this.activeTitle + ') on element activeTitle.');
        }
        param1.writeVarShort(this.activeTitle);
        if (this.activeOrnament < 0) {
            throw new Error('Forbidden value (' + this.activeOrnament + ') on element activeOrnament.');
        }
        param1.writeVarShort(this.activeOrnament);
    };
    TitlesAndOrnamentsListMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_TitlesAndOrnamentsListMessage(param1);
    };
    TitlesAndOrnamentsListMessage.prototype.deserializeAs_TitlesAndOrnamentsListMessage = function (param1) {
        var _loc6_ = 0;
        var _loc7_ = 0;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc6_ = param1.readVarUhShort();
            if (_loc6_ < 0) {
                throw new Error('Forbidden value (' + _loc6_ + ') on elements of titles.');
            }
            this.titles.push(_loc6_);
            _loc3_++;
        }
        var _loc4_ = param1.readUnsignedShort();
        var _loc5_ = 0;
        while (_loc5_ < _loc4_) {
            _loc7_ = param1.readVarUhShort();
            if (_loc7_ < 0) {
                throw new Error('Forbidden value (' + _loc7_ + ') on elements of ornaments.');
            }
            this.ornaments.push(_loc7_);
            _loc5_++;
        }
        this.activeTitle = param1.readVarUhShort();
        if (this.activeTitle < 0) {
            throw new Error('Forbidden value (' + this.activeTitle + ') on element of TitlesAndOrnamentsListMessage.activeTitle.');
        }
        this.activeOrnament = param1.readVarUhShort();
        if (this.activeOrnament < 0) {
            throw new Error('Forbidden value (' + this.activeOrnament + ') on element of TitlesAndOrnamentsListMessage.activeOrnament.');
        }
    };
    TitlesAndOrnamentsListMessage.ID = 6367;
    return TitlesAndOrnamentsListMessage;
})(network_message_1.NetworkMessage);
module.exports = TitlesAndOrnamentsListMessage;
