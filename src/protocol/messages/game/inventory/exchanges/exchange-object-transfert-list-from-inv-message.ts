/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class ExchangeObjectTransfertListFromInvMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6183;

    ids: number[];

    constructor() {
        this.ids = [];
        super();
    }

    public getMessageId(): number {
        return ExchangeObjectTransfertListFromInvMessage.ID;
    }

    public reset(): void {
        this.ids = [];
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
        this.serializeAs_ExchangeObjectTransfertListFromInvMessage(param1);
    }

    public serializeAs_ExchangeObjectTransfertListFromInvMessage(param1: ICustomDataOutput): void {
        param1.writeShort(this.ids.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.ids.length) {
            if (this.ids[_loc2_] < 0) {
                throw new Error('Forbidden value (' + this.ids[_loc2_] + ') on element 1 (starting at 1) of ids.');
            }
            param1.writeVarInt(this.ids[_loc2_]);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ExchangeObjectTransfertListFromInvMessage(param1);
    }

    public deserializeAs_ExchangeObjectTransfertListFromInvMessage(param1: ICustomDataInput): void {
        var _loc4_: number = 0;
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = param1.readVarUhInt();
            if (_loc4_ < 0) {
                throw new Error('Forbidden value (' + _loc4_ + ') on elements of ids.');
            }
            this.ids.push(_loc4_);
            _loc3_++;
        }

    }
}

export = ExchangeObjectTransfertListFromInvMessage;
