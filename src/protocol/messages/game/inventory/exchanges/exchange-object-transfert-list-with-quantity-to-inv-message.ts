/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class ExchangeObjectTransfertListWithQuantityToInvMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6470;

    ids: number[];
    qtys: number[];

    constructor() {
        this.ids = [];
        this.qtys = [];
        super();
    }

    public getMessageId(): number {
        return ExchangeObjectTransfertListWithQuantityToInvMessage.ID;
    }

    public reset(): void {
        this.ids = [];
        this.qtys = [];
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
        this.serializeAs_ExchangeObjectTransfertListWithQuantityToInvMessage(param1);
    }

    public serializeAs_ExchangeObjectTransfertListWithQuantityToInvMessage(param1: ICustomDataOutput): void {
        param1.writeShort(this.ids.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.ids.length) {
            if (this.ids[_loc2_] < 0) {
                throw new Error('Forbidden value (' + this.ids[_loc2_] + ') on element 1 (starting at 1) of ids.');
            }
            param1.writeVarInt(this.ids[_loc2_]);
            _loc2_++;
        }
        param1.writeShort(this.qtys.length);
        var _loc3_: number = 0;
        while (_loc3_ < this.qtys.length) {
            if (this.qtys[_loc3_] < 0) {
                throw new Error('Forbidden value (' + this.qtys[_loc3_] + ') on element 2 (starting at 1) of qtys.');
            }
            param1.writeVarInt(this.qtys[_loc3_]);
            _loc3_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ExchangeObjectTransfertListWithQuantityToInvMessage(param1);
    }

    public deserializeAs_ExchangeObjectTransfertListWithQuantityToInvMessage(param1: ICustomDataInput): void {
        var _loc6_: number = 0;
        var _loc7_: number = 0;
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc6_ = param1.readVarUhInt();
            if (_loc6_ < 0) {
                throw new Error('Forbidden value (' + _loc6_ + ') on elements of ids.');
            }
            this.ids.push(_loc6_);
            _loc3_++;
        }
        var _loc4_: number = param1.readUnsignedShort();
        var _loc5_: number = 0;
        while (_loc5_ < _loc4_) {
        _loc7_ = param1.readVarUhInt();
            if (_loc7_ < 0) {
                throw new Error('Forbidden value (' + _loc7_ + ') on elements of qtys.');
            }
            this.qtys.push(_loc7_);
            _loc5_++;
        }

    }
}

export = ExchangeObjectTransfertListWithQuantityToInvMessage;
