/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class ExchangeHandleMountsStableMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6562;

    actionType: number;
    ridesId: number[];

    constructor() {
        this.actionType = 0;
        this.ridesId = [];
        super();
    }

    public getMessageId(): number {
        return ExchangeHandleMountsStableMessage.ID;
    }

    public reset(): void {
        this.actionType = 0;
        this.ridesId = [];
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
        this.serializeAs_ExchangeHandleMountsStableMessage(param1);
    }

    public serializeAs_ExchangeHandleMountsStableMessage(param1: ICustomDataOutput): void {
        param1.writeByte(this.actionType);
        param1.writeShort(this.ridesId.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.ridesId.length) {
            if (this.ridesId[_loc2_] < 0) {
                throw new Error('Forbidden value (' + this.ridesId[_loc2_] + ') on element 2 (starting at 1) of ridesId.');
            }
            param1.writeVarInt(this.ridesId[_loc2_]);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ExchangeHandleMountsStableMessage(param1);
    }

    public deserializeAs_ExchangeHandleMountsStableMessage(param1: ICustomDataInput): void {
        var _loc4_: number = 0;
        this.actionType = param1.readByte();
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = param1.readVarUhInt();
            if (_loc4_ < 0) {
                throw new Error('Forbidden value (' + _loc4_ + ') on elements of ridesId.');
            }
            this.ridesId.push(_loc4_);
            _loc3_++;
        }

    }
}

export = ExchangeHandleMountsStableMessage;
