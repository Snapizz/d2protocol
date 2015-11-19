/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import AllianceInformations = require('../../../types/game/context/roleplay/alliance-informations');
import BasicAllianceInformations = require('../../../types/game/context/roleplay/basic-alliance-informations');

class KohUpdateMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6439;

    alliances: AllianceInformations[];
    allianceNbMembers: number[];
    allianceRoundWeigth: number[];
    allianceMatchScore: number[];
    allianceMapWinner: BasicAllianceInformations;
    allianceMapWinnerScore: number;
    allianceMapMyAllianceScore: number;
    nextTickTime: number;

    constructor() {
        this.alliances = [];
        this.allianceNbMembers = [];
        this.allianceRoundWeigth = [];
        this.allianceMatchScore = [];
        this.allianceMapWinner = new BasicAllianceInformations();
        this.allianceMapWinnerScore = 0;
        this.allianceMapMyAllianceScore = 0;
        this.nextTickTime = 0;
        super();
    }

    public getMessageId(): number {
        return KohUpdateMessage.ID;
    }

    public reset(): void {
        this.alliances = [];
        this.allianceNbMembers = [];
        this.allianceRoundWeigth = [];
        this.allianceMatchScore = [];
        this.allianceMapWinner = new BasicAllianceInformations();
        this.allianceMapWinnerScore = 0;
        this.allianceMapMyAllianceScore = 0;
        this.nextTickTime = 0;
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
        this.serializeAs_KohUpdateMessage(param1);
    }

    public serializeAs_KohUpdateMessage(param1: ICustomDataOutput): void {
        param1.writeShort(this.alliances.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.alliances.length) {
            (this.alliances[_loc2_]).serializeAs_AllianceInformations(param1);
            _loc2_++;
        }
        param1.writeShort(this.allianceNbMembers.length);
        var _loc3_: number = 0;
        while (_loc3_ < this.allianceNbMembers.length) {
            if (this.allianceNbMembers[_loc3_] < 0) {
                throw new Error('Forbidden value (' + this.allianceNbMembers[_loc3_] + ') on element 2 (starting at 1) of allianceNbMembers.');
            }
            param1.writeVarShort(this.allianceNbMembers[_loc3_]);
            _loc3_++;
        }
        param1.writeShort(this.allianceRoundWeigth.length);
        var _loc4_: number = 0;
        while (_loc4_ < this.allianceRoundWeigth.length) {
            if (this.allianceRoundWeigth[_loc4_] < 0) {
                throw new Error('Forbidden value (' + this.allianceRoundWeigth[_loc4_] + ') on element 3 (starting at 1) of allianceRoundWeigth.');
            }
            param1.writeVarInt(this.allianceRoundWeigth[_loc4_]);
            _loc4_++;
        }
        param1.writeShort(this.allianceMatchScore.length);
        var _loc5_: number = 0;
        while (_loc5_ < this.allianceMatchScore.length) {
            if (this.allianceMatchScore[_loc5_] < 0) {
                throw new Error('Forbidden value (' + this.allianceMatchScore[_loc5_] + ') on element 4 (starting at 1) of allianceMatchScore.');
            }
            param1.writeByte(this.allianceMatchScore[_loc5_]);
            _loc5_++;
        }
        this.allianceMapWinner.serializeAs_BasicAllianceInformations(param1);
        if (this.allianceMapWinnerScore < 0) {
            throw new Error('Forbidden value (' + this.allianceMapWinnerScore + ') on element allianceMapWinnerScore.');
        }
        param1.writeVarInt(this.allianceMapWinnerScore);
        if (this.allianceMapMyAllianceScore < 0) {
            throw new Error('Forbidden value (' + this.allianceMapMyAllianceScore + ') on element allianceMapMyAllianceScore.');
        }
        param1.writeVarInt(this.allianceMapMyAllianceScore);
        if (this.nextTickTime < 0 || this.nextTickTime > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.nextTickTime + ') on element nextTickTime.');
        }
        param1.writeDouble(this.nextTickTime);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_KohUpdateMessage(param1);
    }

    public deserializeAs_KohUpdateMessage(param1: ICustomDataInput): void {
        var _loc10_: AllianceInformations = null;
        var _loc11_: number = 0;
        var _loc12_: number = 0;
        var _loc13_: number = 0;
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc10_ = new AllianceInformations();
            _loc10_.deserialize(param1);
            this.alliances.push(_loc10_);
            _loc3_++;
        }
        var _loc4_: number = param1.readUnsignedShort();
        var _loc5_: number = 0;
        while (_loc5_ < _loc4_) {
        _loc11_ = param1.readVarUhShort();
            if (_loc11_ < 0) {
                throw new Error('Forbidden value (' + _loc11_ + ') on elements of allianceNbMembers.');
            }
            this.allianceNbMembers.push(_loc11_);
            _loc5_++;
        }
        var _loc6_: number = param1.readUnsignedShort();
        var _loc7_: number = 0;
        while (_loc7_ < _loc6_) {
        _loc12_ = param1.readVarUhInt();
            if (_loc12_ < 0) {
                throw new Error('Forbidden value (' + _loc12_ + ') on elements of allianceRoundWeigth.');
            }
            this.allianceRoundWeigth.push(_loc12_);
            _loc7_++;
        }
        var _loc8_: number = param1.readUnsignedShort();
        var _loc9_: number = 0;
        while (_loc9_ < _loc8_) {
        _loc13_ = param1.readByte();
            if (_loc13_ < 0) {
                throw new Error('Forbidden value (' + _loc13_ + ') on elements of allianceMatchScore.');
            }
            this.allianceMatchScore.push(_loc13_);
            _loc9_++;
        }
        this.allianceMapWinner = new BasicAllianceInformations();
        this.allianceMapWinner.deserialize(param1);
        this.allianceMapWinnerScore = param1.readVarUhInt();
        if (this.allianceMapWinnerScore < 0) {
            throw new Error('Forbidden value (' + this.allianceMapWinnerScore + ') on element of KohUpdateMessage.allianceMapWinnerScore.');
        }
        this.allianceMapMyAllianceScore = param1.readVarUhInt();
        if (this.allianceMapMyAllianceScore < 0) {
            throw new Error('Forbidden value (' + this.allianceMapMyAllianceScore + ') on element of KohUpdateMessage.allianceMapMyAllianceScore.');
        }
        this.nextTickTime = param1.readDouble();
        if (this.nextTickTime < 0 || this.nextTickTime > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.nextTickTime + ') on element of KohUpdateMessage.nextTickTime.');
        }

    }
}

export = KohUpdateMessage;
