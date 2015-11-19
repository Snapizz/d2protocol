/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class TeleportDestinationsListMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5960;

    teleporterType: number;
    mapIds: number[];
    subAreaIds: number[];
    costs: number[];
    destTeleporterType: number[];

    constructor() {
        this.teleporterType = 0;
        this.mapIds = [];
        this.subAreaIds = [];
        this.costs = [];
        this.destTeleporterType = [];
        super();
    }

    public getMessageId(): number {
        return TeleportDestinationsListMessage.ID;
    }

    public reset(): void {
        this.teleporterType = 0;
        this.mapIds = [];
        this.subAreaIds = [];
        this.costs = [];
        this.destTeleporterType = [];
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
        this.serializeAs_TeleportDestinationsListMessage(param1);
    }

    public serializeAs_TeleportDestinationsListMessage(param1: ICustomDataOutput): void {
        param1.writeByte(this.teleporterType);
        param1.writeShort(this.mapIds.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.mapIds.length) {
            if (this.mapIds[_loc2_] < 0) {
                throw new Error('Forbidden value (' + this.mapIds[_loc2_] + ') on element 2 (starting at 1) of mapIds.');
            }
            param1.writeInt(this.mapIds[_loc2_]);
            _loc2_++;
        }
        param1.writeShort(this.subAreaIds.length);
        var _loc3_: number = 0;
        while (_loc3_ < this.subAreaIds.length) {
            if (this.subAreaIds[_loc3_] < 0) {
                throw new Error('Forbidden value (' + this.subAreaIds[_loc3_] + ') on element 3 (starting at 1) of subAreaIds.');
            }
            param1.writeVarShort(this.subAreaIds[_loc3_]);
            _loc3_++;
        }
        param1.writeShort(this.costs.length);
        var _loc4_: number = 0;
        while (_loc4_ < this.costs.length) {
            if (this.costs[_loc4_] < 0) {
                throw new Error('Forbidden value (' + this.costs[_loc4_] + ') on element 4 (starting at 1) of costs.');
            }
            param1.writeVarShort(this.costs[_loc4_]);
            _loc4_++;
        }
        param1.writeShort(this.destTeleporterType.length);
        var _loc5_: number = 0;
        while (_loc5_ < this.destTeleporterType.length) {
            param1.writeByte(this.destTeleporterType[_loc5_]);
            _loc5_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_TeleportDestinationsListMessage(param1);
    }

    public deserializeAs_TeleportDestinationsListMessage(param1: ICustomDataInput): void {
        var _loc10_: number = 0;
        var _loc11_: number = 0;
        var _loc12_: number = 0;
        var _loc13_: number = 0;
        this.teleporterType = param1.readByte();
        if (this.teleporterType < 0) {
            throw new Error('Forbidden value (' + this.teleporterType + ') on element of TeleportDestinationsListMessage.teleporterType.');
        }
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc10_ = param1.readInt();
            if (_loc10_ < 0) {
                throw new Error('Forbidden value (' + _loc10_ + ') on elements of mapIds.');
            }
            this.mapIds.push(_loc10_);
            _loc3_++;
        }
        var _loc4_: number = param1.readUnsignedShort();
        var _loc5_: number = 0;
        while (_loc5_ < _loc4_) {
        _loc11_ = param1.readVarUhShort();
            if (_loc11_ < 0) {
                throw new Error('Forbidden value (' + _loc11_ + ') on elements of subAreaIds.');
            }
            this.subAreaIds.push(_loc11_);
            _loc5_++;
        }
        var _loc6_: number = param1.readUnsignedShort();
        var _loc7_: number = 0;
        while (_loc7_ < _loc6_) {
        _loc12_ = param1.readVarUhShort();
            if (_loc12_ < 0) {
                throw new Error('Forbidden value (' + _loc12_ + ') on elements of costs.');
            }
            this.costs.push(_loc12_);
            _loc7_++;
        }
        var _loc8_: number = param1.readUnsignedShort();
        var _loc9_: number = 0;
        while (_loc9_ < _loc8_) {
        _loc13_ = param1.readByte();
            if (_loc13_ < 0) {
                throw new Error('Forbidden value (' + _loc13_ + ') on elements of destTeleporterType.');
            }
            this.destTeleporterType.push(_loc13_);
            _loc9_++;
        }

    }
}

export = TeleportDestinationsListMessage;
