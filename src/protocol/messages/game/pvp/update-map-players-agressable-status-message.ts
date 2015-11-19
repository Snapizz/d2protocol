/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class UpdateMapPlayersAgressableStatusMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6454;

    playerIds: number[];
    enable: number[];

    constructor() {
        this.playerIds = [];
        this.enable = [];
        super();
    }

    public getMessageId(): number {
        return UpdateMapPlayersAgressableStatusMessage.ID;
    }

    public reset(): void {
        this.playerIds = [];
        this.enable = [];
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
        this.serializeAs_UpdateMapPlayersAgressableStatusMessage(param1);
    }

    public serializeAs_UpdateMapPlayersAgressableStatusMessage(param1: ICustomDataOutput): void {
        param1.writeShort(this.playerIds.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.playerIds.length) {
            if (this.playerIds[_loc2_] < 0) {
                throw new Error('Forbidden value (' + this.playerIds[_loc2_] + ') on element 1 (starting at 1) of playerIds.');
            }
            param1.writeVarInt(this.playerIds[_loc2_]);
            _loc2_++;
        }
        param1.writeShort(this.enable.length);
        var _loc3_: number = 0;
        while (_loc3_ < this.enable.length) {
            param1.writeByte(this.enable[_loc3_]);
            _loc3_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_UpdateMapPlayersAgressableStatusMessage(param1);
    }

    public deserializeAs_UpdateMapPlayersAgressableStatusMessage(param1: ICustomDataInput): void {
        var _loc6_: number = 0;
        var _loc7_: number = 0;
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc6_ = param1.readVarUhInt();
            if (_loc6_ < 0) {
                throw new Error('Forbidden value (' + _loc6_ + ') on elements of playerIds.');
            }
            this.playerIds.push(_loc6_);
            _loc3_++;
        }
        var _loc4_: number = param1.readUnsignedShort();
        var _loc5_: number = 0;
        while (_loc5_ < _loc4_) {
        _loc7_ = param1.readByte();
            if (_loc7_ < 0) {
                throw new Error('Forbidden value (' + _loc7_ + ') on elements of enable.');
            }
            this.enable.push(_loc7_);
            _loc5_++;
        }

    }
}

export = UpdateMapPlayersAgressableStatusMessage;
