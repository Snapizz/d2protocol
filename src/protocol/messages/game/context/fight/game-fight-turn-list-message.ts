/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class GameFightTurnListMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 713;

    ids: number[];
    deadsIds: number[];

    constructor() {
        this.ids = [];
        this.deadsIds = [];
        super();
    }

    public getMessageId(): number {
        return GameFightTurnListMessage.ID;
    }

    public reset(): void {
        this.ids = [];
        this.deadsIds = [];
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
        this.serializeAs_GameFightTurnListMessage(param1);
    }

    public serializeAs_GameFightTurnListMessage(param1: ICustomDataOutput): void {
        param1.writeShort(this.ids.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.ids.length) {
            param1.writeInt(this.ids[_loc2_]);
            _loc2_++;
        }
        param1.writeShort(this.deadsIds.length);
        var _loc3_: number = 0;
        while (_loc3_ < this.deadsIds.length) {
            param1.writeInt(this.deadsIds[_loc3_]);
            _loc3_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameFightTurnListMessage(param1);
    }

    public deserializeAs_GameFightTurnListMessage(param1: ICustomDataInput): void {
        var _loc6_: any = 0;
        var _loc7_: any = 0;
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc6_ = param1.readInt();
            this.ids.push(_loc6_);
            _loc3_++;
        }
        var _loc4_: number = param1.readUnsignedShort();
        var _loc5_: number = 0;
        while (_loc5_ < _loc4_) {
        _loc7_ = param1.readInt();
            this.deadsIds.push(_loc7_);
            _loc5_++;
        }

    }
}

export = GameFightTurnListMessage;
