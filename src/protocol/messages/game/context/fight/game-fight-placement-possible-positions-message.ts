/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class GameFightPlacementPossiblePositionsMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 703;

    positionsForChallengers: number[];
    positionsForDefenders: number[];
    teamNumber: number;

    constructor() {
        this.positionsForChallengers = [];
        this.positionsForDefenders = [];
        this.teamNumber = 2;
        super();
    }

    public getMessageId(): number {
        return GameFightPlacementPossiblePositionsMessage.ID;
    }

    public reset(): void {
        this.positionsForChallengers = [];
        this.positionsForDefenders = [];
        this.teamNumber = 2;
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
        this.serializeAs_GameFightPlacementPossiblePositionsMessage(param1);
    }

    public serializeAs_GameFightPlacementPossiblePositionsMessage(param1: ICustomDataOutput): void {
        param1.writeShort(this.positionsForChallengers.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.positionsForChallengers.length) {
            if (this.positionsForChallengers[_loc2_] < 0 || this.positionsForChallengers[_loc2_] > 559) {
                throw new Error('Forbidden value (' + this.positionsForChallengers[_loc2_] + ') on element 1 (starting at 1) of positionsForChallengers.');
            }
            param1.writeVarShort(this.positionsForChallengers[_loc2_]);
            _loc2_++;
        }
        param1.writeShort(this.positionsForDefenders.length);
        var _loc3_: number = 0;
        while (_loc3_ < this.positionsForDefenders.length) {
            if (this.positionsForDefenders[_loc3_] < 0 || this.positionsForDefenders[_loc3_] > 559) {
                throw new Error('Forbidden value (' + this.positionsForDefenders[_loc3_] + ') on element 2 (starting at 1) of positionsForDefenders.');
            }
            param1.writeVarShort(this.positionsForDefenders[_loc3_]);
            _loc3_++;
        }
        param1.writeByte(this.teamNumber);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameFightPlacementPossiblePositionsMessage(param1);
    }

    public deserializeAs_GameFightPlacementPossiblePositionsMessage(param1: ICustomDataInput): void {
        var _loc6_: number = 0;
        var _loc7_: number = 0;
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc6_ = param1.readVarUhShort();
            if (_loc6_ < 0 || _loc6_ > 559) {
                throw new Error('Forbidden value (' + _loc6_ + ') on elements of positionsForChallengers.');
            }
            this.positionsForChallengers.push(_loc6_);
            _loc3_++;
        }
        var _loc4_: number = param1.readUnsignedShort();
        var _loc5_: number = 0;
        while (_loc5_ < _loc4_) {
        _loc7_ = param1.readVarUhShort();
            if (_loc7_ < 0 || _loc7_ > 559) {
                throw new Error('Forbidden value (' + _loc7_ + ') on elements of positionsForDefenders.');
            }
            this.positionsForDefenders.push(_loc7_);
            _loc5_++;
        }
        this.teamNumber = param1.readByte();
        if (this.teamNumber < 0) {
            throw new Error('Forbidden value (' + this.teamNumber + ') on element of GameFightPlacementPossiblePositionsMessage.teamNumber.');
        }

    }
}

export = GameFightPlacementPossiblePositionsMessage;
