/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import DecraftedItemStackInfo = require('../../../../types/game/context/roleplay/job/decrafted-item-stack-info');

class DecraftResultMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6569;

    results: DecraftedItemStackInfo[];

    constructor() {
        this.results = [];
        super();
    }

    public getMessageId(): number {
        return DecraftResultMessage.ID;
    }

    public reset(): void {
        this.results = [];
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
        this.serializeAs_DecraftResultMessage(param1);
    }

    public serializeAs_DecraftResultMessage(param1: ICustomDataOutput): void {
        param1.writeShort(this.results.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.results.length) {
            (this.results[_loc2_]).serializeAs_DecraftedItemStackInfo(param1);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_DecraftResultMessage(param1);
    }

    public deserializeAs_DecraftResultMessage(param1: ICustomDataInput): void {
        var _loc4_: DecraftedItemStackInfo = null;
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = new DecraftedItemStackInfo();
            _loc4_.deserialize(param1);
            this.results.push(_loc4_);
            _loc3_++;
        }

    }
}

export = DecraftResultMessage;
