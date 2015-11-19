/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class TitlesAndOrnamentsListMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6367;

    titles: number[];
    ornaments: number[];
    activeTitle: number;
    activeOrnament: number;

    constructor() {
        this.titles = [];
        this.ornaments = [];
        this.activeTitle = 0;
        this.activeOrnament = 0;
        super();
    }

    public getMessageId(): number {
        return TitlesAndOrnamentsListMessage.ID;
    }

    public reset(): void {
        this.titles = [];
        this.ornaments = [];
        this.activeTitle = 0;
        this.activeOrnament = 0;
    }

    public pack(param1: ICustomDataOutput): void {
        let loc2 = new ByteArray();
        this.serialize(new CustomDataWrapper(loc2));
        NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    }

    public unpack(param1: ICustomDataInput, param2: number): void {
        this.deserialize(param1);
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_TitlesAndOrnamentsListMessage(param1);
    }

    public serializeAs_TitlesAndOrnamentsListMessage(param1: ICustomDataOutput): void {
        param1.writeShort(this.titles.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.titles.length) {
            if (this.titles[_loc2_] < 0) {
                throw new Error('Forbidden value (' + this.titles[_loc2_] + ') on element 1 (starting at 1) of titles.');
            }
            param1.writeVarShort(this.titles[_loc2_]);
            _loc2_++;
        }
        param1.writeShort(this.ornaments.length);
        var _loc3_: number = 0;
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

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_TitlesAndOrnamentsListMessage(param1);
    }

    public deserializeAs_TitlesAndOrnamentsListMessage(param1: ICustomDataInput): void {
        var _loc6_: number = 0;
        var _loc7_: number = 0;
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc6_ = param1.readVarUhShort();
            if (_loc6_ < 0) {
                throw new Error('Forbidden value (' + _loc6_ + ') on elements of titles.');
            }
            this.titles.push(_loc6_);
            _loc3_++;
        }
        var _loc4_: number = param1.readUnsignedShort();
        var _loc5_: number = 0;
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

    }
}

export = TitlesAndOrnamentsListMessage;
