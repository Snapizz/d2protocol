/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import GameRolePlayNpcQuestFlag = require('../../../../../types/game/context/roleplay/quest/game-role-play-npc-quest-flag');

class MapNpcsQuestStatusUpdateMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5642;

    mapId: number;
    npcsIdsWithQuest: number[];
    questFlags: GameRolePlayNpcQuestFlag[];
    npcsIdsWithoutQuest: number[];

    constructor() {
        this.mapId = 0;
        this.npcsIdsWithQuest = [];
        this.questFlags = [];
        this.npcsIdsWithoutQuest = [];
        super();
    }

    public getMessageId(): number {
        return MapNpcsQuestStatusUpdateMessage.ID;
    }

    public reset(): void {
        this.mapId = 0;
        this.npcsIdsWithQuest = [];
        this.questFlags = [];
        this.npcsIdsWithoutQuest = [];
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
        this.serializeAs_MapNpcsQuestStatusUpdateMessage(param1);
    }

    public serializeAs_MapNpcsQuestStatusUpdateMessage(param1: ICustomDataOutput): void {
        param1.writeInt(this.mapId);
        param1.writeShort(this.npcsIdsWithQuest.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.npcsIdsWithQuest.length) {
            param1.writeInt(this.npcsIdsWithQuest[_loc2_]);
            _loc2_++;
        }
        param1.writeShort(this.questFlags.length);
        var _loc3_: number = 0;
        while (_loc3_ < this.questFlags.length) {
            (this.questFlags[_loc3_]).serializeAs_GameRolePlayNpcQuestFlag(param1);
            _loc3_++;
        }
        param1.writeShort(this.npcsIdsWithoutQuest.length);
        var _loc4_: number = 0;
        while (_loc4_ < this.npcsIdsWithoutQuest.length) {
            param1.writeInt(this.npcsIdsWithoutQuest[_loc4_]);
            _loc4_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_MapNpcsQuestStatusUpdateMessage(param1);
    }

    public deserializeAs_MapNpcsQuestStatusUpdateMessage(param1: ICustomDataInput): void {
        var _loc8_: any = 0;
        var _loc9_: GameRolePlayNpcQuestFlag = null;
        var _loc10_: any = 0;
        this.mapId = param1.readInt();
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc8_ = param1.readInt();
            this.npcsIdsWithQuest.push(_loc8_);
            _loc3_++;
        }
        var _loc4_: number = param1.readUnsignedShort();
        var _loc5_: number = 0;
        while (_loc5_ < _loc4_) {
        _loc9_ = new GameRolePlayNpcQuestFlag();
            _loc9_.deserialize(param1);
            this.questFlags.push(_loc9_);
            _loc5_++;
        }
        var _loc6_: number = param1.readUnsignedShort();
        var _loc7_: number = 0;
        while (_loc7_ < _loc6_) {
        _loc10_ = param1.readInt();
            this.npcsIdsWithoutQuest.push(_loc10_);
            _loc7_++;
        }

    }
}

export = MapNpcsQuestStatusUpdateMessage;
