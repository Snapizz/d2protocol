/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class DungeonKeyRingMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6299;

    availables: number[];
    unavailables: number[];

    constructor() {
        this.availables = [];
        this.unavailables = [];
        super();
    }

    public getMessageId(): number {
        return DungeonKeyRingMessage.ID;
    }

    public reset(): void {
        this.availables = [];
        this.unavailables = [];
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
        this.serializeAs_DungeonKeyRingMessage(param1);
    }

    public serializeAs_DungeonKeyRingMessage(param1: ICustomDataOutput): void {
        param1.writeShort(this.availables.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.availables.length) {
            if (this.availables[_loc2_] < 0) {
                throw new Error('Forbidden value (' + this.availables[_loc2_] + ') on element 1 (starting at 1) of availables.');
            }
            param1.writeVarShort(this.availables[_loc2_]);
            _loc2_++;
        }
        param1.writeShort(this.unavailables.length);
        var _loc3_: number = 0;
        while (_loc3_ < this.unavailables.length) {
            if (this.unavailables[_loc3_] < 0) {
                throw new Error('Forbidden value (' + this.unavailables[_loc3_] + ') on element 2 (starting at 1) of unavailables.');
            }
            param1.writeVarShort(this.unavailables[_loc3_]);
            _loc3_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_DungeonKeyRingMessage(param1);
    }

    public deserializeAs_DungeonKeyRingMessage(param1: ICustomDataInput): void {
        var _loc6_: number = 0;
        var _loc7_: number = 0;
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc6_ = param1.readVarUhShort();
            if (_loc6_ < 0) {
                throw new Error('Forbidden value (' + _loc6_ + ') on elements of availables.');
            }
            this.availables.push(_loc6_);
            _loc3_++;
        }
        var _loc4_: number = param1.readUnsignedShort();
        var _loc5_: number = 0;
        while (_loc5_ < _loc4_) {
        _loc7_ = param1.readVarUhShort();
            if (_loc7_ < 0) {
                throw new Error('Forbidden value (' + _loc7_ + ') on elements of unavailables.');
            }
            this.unavailables.push(_loc7_);
            _loc5_++;
        }

    }
}

export = DungeonKeyRingMessage;
