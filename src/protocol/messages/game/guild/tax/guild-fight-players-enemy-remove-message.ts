/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class GuildFightPlayersEnemyRemoveMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5929;

    fightId: number;
    playerId: number;

    constructor() {
        this.fightId = 0;
        this.playerId = 0;
        super();
    }

    public getMessageId(): number {
        return GuildFightPlayersEnemyRemoveMessage.ID;
    }

    public reset(): void {
        this.fightId = 0;
        this.playerId = 0;
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
        this.serializeAs_GuildFightPlayersEnemyRemoveMessage(param1);
    }

    public serializeAs_GuildFightPlayersEnemyRemoveMessage(param1: ICustomDataOutput): void {
        if (this.fightId < 0) {
            throw new Error('Forbidden value (' + this.fightId + ') on element fightId.');
        }
        param1.writeInt(this.fightId);
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element playerId.');
        }
        param1.writeVarInt(this.playerId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GuildFightPlayersEnemyRemoveMessage(param1);
    }

    public deserializeAs_GuildFightPlayersEnemyRemoveMessage(param1: ICustomDataInput): void {
        this.fightId = param1.readInt();
        if (this.fightId < 0) {
            throw new Error('Forbidden value (' + this.fightId + ') on element of GuildFightPlayersEnemyRemoveMessage.fightId.');
        }
        this.playerId = param1.readVarUhInt();
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element of GuildFightPlayersEnemyRemoveMessage.playerId.');
        }

    }
}

export = GuildFightPlayersEnemyRemoveMessage;
