/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import CharacterMinimalPlusLookInformations = require('../../../../types/game/character/character-minimal-plus-look-informations');

class GuildFightPlayersHelpersJoinMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5720;

    fightId: number;
    playerInfo: CharacterMinimalPlusLookInformations;

    constructor() {
        this.fightId = 0;
        this.playerInfo = new CharacterMinimalPlusLookInformations();
        super();
    }

    public getMessageId(): number {
        return GuildFightPlayersHelpersJoinMessage.ID;
    }

    public reset(): void {
        this.fightId = 0;
        this.playerInfo = new CharacterMinimalPlusLookInformations();
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
        this.serializeAs_GuildFightPlayersHelpersJoinMessage(param1);
    }

    public serializeAs_GuildFightPlayersHelpersJoinMessage(param1: ICustomDataOutput): void {
        if (this.fightId < 0) {
            throw new Error('Forbidden value (' + this.fightId + ') on element fightId.');
        }
        param1.writeInt(this.fightId);
        this.playerInfo.serializeAs_CharacterMinimalPlusLookInformations(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GuildFightPlayersHelpersJoinMessage(param1);
    }

    public deserializeAs_GuildFightPlayersHelpersJoinMessage(param1: ICustomDataInput): void {
        this.fightId = param1.readInt();
        if (this.fightId < 0) {
            throw new Error('Forbidden value (' + this.fightId + ') on element of GuildFightPlayersHelpersJoinMessage.fightId.');
        }
        this.playerInfo = new CharacterMinimalPlusLookInformations();
        this.playerInfo.deserialize(param1);

    }
}

export = GuildFightPlayersHelpersJoinMessage;
