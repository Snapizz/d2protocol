/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import CharacterMinimalPlusLookInformations = require('../../../../types/game/character/character-minimal-plus-look-informations');

class GuildFightPlayersEnemiesListMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5928;

    fightId: number;
    playerInfo: CharacterMinimalPlusLookInformations[];

    constructor() {
        this.fightId = 0;
        this.playerInfo = [];
        super();
    }

    public getMessageId(): number {
        return GuildFightPlayersEnemiesListMessage.ID;
    }

    public reset(): void {
        this.fightId = 0;
        this.playerInfo = [];
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
        this.serializeAs_GuildFightPlayersEnemiesListMessage(param1);
    }

    public serializeAs_GuildFightPlayersEnemiesListMessage(param1: ICustomDataOutput): void {
        if (this.fightId < 0) {
            throw new Error('Forbidden value (' + this.fightId + ') on element fightId.');
        }
        param1.writeInt(this.fightId);
        param1.writeShort(this.playerInfo.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.playerInfo.length) {
            (this.playerInfo[_loc2_]).serializeAs_CharacterMinimalPlusLookInformations(param1);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GuildFightPlayersEnemiesListMessage(param1);
    }

    public deserializeAs_GuildFightPlayersEnemiesListMessage(param1: ICustomDataInput): void {
        var _loc4_: CharacterMinimalPlusLookInformations = null;
        this.fightId = param1.readInt();
        if (this.fightId < 0) {
            throw new Error('Forbidden value (' + this.fightId + ') on element of GuildFightPlayersEnemiesListMessage.fightId.');
        }
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = new CharacterMinimalPlusLookInformations();
            _loc4_.deserialize(param1);
            this.playerInfo.push(_loc4_);
            _loc3_++;
        }

    }
}

export = GuildFightPlayersEnemiesListMessage;
