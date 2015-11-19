/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');

class SpellForgottenMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5834;

    spellsId: number[];
    boostPoint: number;

    constructor() {
        this.spellsId = [];
        this.boostPoint = 0;
        super();
    }

    public getMessageId(): number {
        return SpellForgottenMessage.ID;
    }

    public reset(): void {
        this.spellsId = [];
        this.boostPoint = 0;
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
        this.serializeAs_SpellForgottenMessage(param1);
    }

    public serializeAs_SpellForgottenMessage(param1: ICustomDataOutput): void {
        param1.writeShort(this.spellsId.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.spellsId.length) {
            if (this.spellsId[_loc2_] < 0) {
                throw new Error('Forbidden value (' + this.spellsId[_loc2_] + ') on element 1 (starting at 1) of spellsId.');
            }
            param1.writeVarShort(this.spellsId[_loc2_]);
            _loc2_++;
        }
        if (this.boostPoint < 0) {
            throw new Error('Forbidden value (' + this.boostPoint + ') on element boostPoint.');
        }
        param1.writeVarShort(this.boostPoint);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_SpellForgottenMessage(param1);
    }

    public deserializeAs_SpellForgottenMessage(param1: ICustomDataInput): void {
        var _loc4_: number = 0;
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = param1.readVarUhShort();
            if (_loc4_ < 0) {
                throw new Error('Forbidden value (' + _loc4_ + ') on elements of spellsId.');
            }
            this.spellsId.push(_loc4_);
            _loc3_++;
        }
        this.boostPoint = param1.readVarUhShort();
        if (this.boostPoint < 0) {
            throw new Error('Forbidden value (' + this.boostPoint + ') on element of SpellForgottenMessage.boostPoint.');
        }

    }
}

export = SpellForgottenMessage;
