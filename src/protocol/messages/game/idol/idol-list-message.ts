/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import PartyIdol = require('../../../types/game/idol/party-idol');
import ProtocolTypeManager = require('../../../protocol-type-manager');

class IdolListMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6585;

    chosenIdols: number[];
    partyChosenIdols: number[];
    partyIdols: PartyIdol[];

    constructor() {
        this.chosenIdols = [];
        this.partyChosenIdols = [];
        this.partyIdols = [];
        super();
    }

    public getMessageId(): number {
        return IdolListMessage.ID;
    }

    public reset(): void {
        this.chosenIdols = [];
        this.partyChosenIdols = [];
        this.partyIdols = [];
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
        this.serializeAs_IdolListMessage(param1);
    }

    public serializeAs_IdolListMessage(param1: ICustomDataOutput): void {
        param1.writeShort(this.chosenIdols.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.chosenIdols.length) {
            if (this.chosenIdols[_loc2_] < 0) {
                throw new Error('Forbidden value (' + this.chosenIdols[_loc2_] + ') on element 1 (starting at 1) of chosenIdols.');
            }
            param1.writeVarShort(this.chosenIdols[_loc2_]);
            _loc2_++;
        }
        param1.writeShort(this.partyChosenIdols.length);
        var _loc3_: number = 0;
        while (_loc3_ < this.partyChosenIdols.length) {
            if (this.partyChosenIdols[_loc3_] < 0) {
                throw new Error('Forbidden value (' + this.partyChosenIdols[_loc3_] + ') on element 2 (starting at 1) of partyChosenIdols.');
            }
            param1.writeVarShort(this.partyChosenIdols[_loc3_]);
            _loc3_++;
        }
        param1.writeShort(this.partyIdols.length);
        var _loc4_: number = 0;
        while (_loc4_ < this.partyIdols.length) {
            param1.writeShort((this.partyIdols[_loc4_]).getTypeId());
            (this.partyIdols[_loc4_]).serialize(param1);
            _loc4_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_IdolListMessage(param1);
    }

    public deserializeAs_IdolListMessage(param1: ICustomDataInput): void {
        var _loc8_: number = 0;
        var _loc9_: number = 0;
        var _loc10_: number = 0;
        var _loc11_: PartyIdol = null;
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc8_ = param1.readVarUhShort();
            if (_loc8_ < 0) {
                throw new Error('Forbidden value (' + _loc8_ + ') on elements of chosenIdols.');
            }
            this.chosenIdols.push(_loc8_);
            _loc3_++;
        }
        var _loc4_: number = param1.readUnsignedShort();
        var _loc5_: number = 0;
        while (_loc5_ < _loc4_) {
        _loc9_ = param1.readVarUhShort();
            if (_loc9_ < 0) {
                throw new Error('Forbidden value (' + _loc9_ + ') on elements of partyChosenIdols.');
            }
            this.partyChosenIdols.push(_loc9_);
            _loc5_++;
        }
        var _loc6_: number = param1.readUnsignedShort();
        var _loc7_: number = 0;
        while (_loc7_ < _loc6_) {
        _loc10_ = param1.readUnsignedShort();
            _loc11_ = <PartyIdol>ProtocolTypeManager.getInstance(PartyIdol, _loc10_);
            _loc11_.deserialize(param1);
            this.partyIdols.push(_loc11_);
            _loc7_++;
        }

    }
}

export = IdolListMessage;
