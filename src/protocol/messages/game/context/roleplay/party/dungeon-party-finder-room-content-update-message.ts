/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import DungeonPartyFinderPlayer = require('../../../../../types/game/context/roleplay/party/dungeon-party-finder-player');

class DungeonPartyFinderRoomContentUpdateMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6250;

    dungeonId: number;
    addedPlayers: DungeonPartyFinderPlayer[];
    removedPlayersIds: number[];

    constructor() {
        this.dungeonId = 0;
        this.addedPlayers = [];
        this.removedPlayersIds = [];
        super();
    }

    public getMessageId(): number {
        return DungeonPartyFinderRoomContentUpdateMessage.ID;
    }

    public reset(): void {
        this.dungeonId = 0;
        this.addedPlayers = [];
        this.removedPlayersIds = [];
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
        this.serializeAs_DungeonPartyFinderRoomContentUpdateMessage(param1);
    }

    public serializeAs_DungeonPartyFinderRoomContentUpdateMessage(param1: ICustomDataOutput): void {
        if (this.dungeonId < 0) {
            throw new Error('Forbidden value (' + this.dungeonId + ') on element dungeonId.');
        }
        param1.writeVarShort(this.dungeonId);
        param1.writeShort(this.addedPlayers.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.addedPlayers.length) {
            (this.addedPlayers[_loc2_]).serializeAs_DungeonPartyFinderPlayer(param1);
            _loc2_++;
        }
        param1.writeShort(this.removedPlayersIds.length);
        var _loc3_: number = 0;
        while (_loc3_ < this.removedPlayersIds.length) {
            if (this.removedPlayersIds[_loc3_] < 0) {
                throw new Error('Forbidden value (' + this.removedPlayersIds[_loc3_] + ') on element 3 (starting at 1) of removedPlayersIds.');
            }
            param1.writeVarInt(this.removedPlayersIds[_loc3_]);
            _loc3_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_DungeonPartyFinderRoomContentUpdateMessage(param1);
    }

    public deserializeAs_DungeonPartyFinderRoomContentUpdateMessage(param1: ICustomDataInput): void {
        var _loc6_: DungeonPartyFinderPlayer = null;
        var _loc7_: number = 0;
        this.dungeonId = param1.readVarUhShort();
        if (this.dungeonId < 0) {
            throw new Error('Forbidden value (' + this.dungeonId + ') on element of DungeonPartyFinderRoomContentUpdateMessage.dungeonId.');
        }
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc6_ = new DungeonPartyFinderPlayer();
            _loc6_.deserialize(param1);
            this.addedPlayers.push(_loc6_);
            _loc3_++;
        }
        var _loc4_: number = param1.readUnsignedShort();
        var _loc5_: number = 0;
        while (_loc5_ < _loc4_) {
        _loc7_ = param1.readVarUhInt();
            if (_loc7_ < 0) {
                throw new Error('Forbidden value (' + _loc7_ + ') on elements of removedPlayersIds.');
            }
            this.removedPlayersIds.push(_loc7_);
            _loc5_++;
        }

    }
}

export = DungeonPartyFinderRoomContentUpdateMessage;
