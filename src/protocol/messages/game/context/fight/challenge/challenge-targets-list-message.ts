/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');

class ChallengeTargetsListMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5613;

    targetIds: number[];
    targetCells: number[];

    constructor() {
        this.targetIds = [];
        this.targetCells = [];
        super();
    }

    public getMessageId(): number {
        return ChallengeTargetsListMessage.ID;
    }

    public reset(): void {
        this.targetIds = [];
        this.targetCells = [];
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
        this.serializeAs_ChallengeTargetsListMessage(param1);
    }

    public serializeAs_ChallengeTargetsListMessage(param1: ICustomDataOutput): void {
        param1.writeShort(this.targetIds.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.targetIds.length) {
            param1.writeInt(this.targetIds[_loc2_]);
            _loc2_++;
        }
        param1.writeShort(this.targetCells.length);
        var _loc3_: number = 0;
        while (_loc3_ < this.targetCells.length) {
            if (this.targetCells[_loc3_] < -1 || this.targetCells[_loc3_] > 559) {
                throw new Error('Forbidden value (' + this.targetCells[_loc3_] + ') on element 2 (starting at 1) of targetCells.');
            }
            param1.writeShort(this.targetCells[_loc3_]);
            _loc3_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ChallengeTargetsListMessage(param1);
    }

    public deserializeAs_ChallengeTargetsListMessage(param1: ICustomDataInput): void {
        var _loc6_: any = 0;
        var _loc7_: any = 0;
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc6_ = param1.readInt();
            this.targetIds.push(_loc6_);
            _loc3_++;
        }
        var _loc4_: number = param1.readUnsignedShort();
        var _loc5_: number = 0;
        while (_loc5_ < _loc4_) {
        _loc7_ = param1.readShort();
            if (_loc7_ < -1 || _loc7_ > 559) {
                throw new Error('Forbidden value (' + _loc7_ + ') on elements of targetCells.');
            }
            this.targetCells.push(_loc7_);
            _loc5_++;
        }

    }
}

export = ChallengeTargetsListMessage;
