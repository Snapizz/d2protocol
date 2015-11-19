/// <reference path="../../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../../boolean-byte-wrapper');

class GameRolePlayArenaUpdatePlayerInfosMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6301;

    rank: number;
    bestDailyRank: number;
    bestRank: number;
    victoryCount: number;
    arenaFightcount: number;

    constructor() {
        this.rank = 0;
        this.bestDailyRank = 0;
        this.bestRank = 0;
        this.victoryCount = 0;
        this.arenaFightcount = 0;
        super();
    }

    public getMessageId(): number {
        return GameRolePlayArenaUpdatePlayerInfosMessage.ID;
    }

    public reset(): void {
        this.rank = 0;
        this.bestDailyRank = 0;
        this.bestRank = 0;
        this.victoryCount = 0;
        this.arenaFightcount = 0;
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
        this.serializeAs_GameRolePlayArenaUpdatePlayerInfosMessage(param1);
    }

    public serializeAs_GameRolePlayArenaUpdatePlayerInfosMessage(param1: ICustomDataOutput): void {
        if (this.rank < 0 || this.rank > 2300) {
            throw new Error('Forbidden value (' + this.rank + ') on element rank.');
        }
        param1.writeVarShort(this.rank);
        if (this.bestDailyRank < 0 || this.bestDailyRank > 2300) {
            throw new Error('Forbidden value (' + this.bestDailyRank + ') on element bestDailyRank.');
        }
        param1.writeVarShort(this.bestDailyRank);
        if (this.bestRank < 0 || this.bestRank > 2300) {
            throw new Error('Forbidden value (' + this.bestRank + ') on element bestRank.');
        }
        param1.writeVarShort(this.bestRank);
        if (this.victoryCount < 0) {
            throw new Error('Forbidden value (' + this.victoryCount + ') on element victoryCount.');
        }
        param1.writeVarShort(this.victoryCount);
        if (this.arenaFightcount < 0) {
            throw new Error('Forbidden value (' + this.arenaFightcount + ') on element arenaFightcount.');
        }
        param1.writeVarShort(this.arenaFightcount);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameRolePlayArenaUpdatePlayerInfosMessage(param1);
    }

    public deserializeAs_GameRolePlayArenaUpdatePlayerInfosMessage(param1: ICustomDataInput): void {
        this.rank = param1.readVarUhShort();
        if (this.rank < 0 || this.rank > 2300) {
            throw new Error('Forbidden value (' + this.rank + ') on element of GameRolePlayArenaUpdatePlayerInfosMessage.rank.');
        }
        this.bestDailyRank = param1.readVarUhShort();
        if (this.bestDailyRank < 0 || this.bestDailyRank > 2300) {
            throw new Error('Forbidden value (' + this.bestDailyRank + ') on element of GameRolePlayArenaUpdatePlayerInfosMessage.bestDailyRank.');
        }
        this.bestRank = param1.readVarUhShort();
        if (this.bestRank < 0 || this.bestRank > 2300) {
            throw new Error('Forbidden value (' + this.bestRank + ') on element of GameRolePlayArenaUpdatePlayerInfosMessage.bestRank.');
        }
        this.victoryCount = param1.readVarUhShort();
        if (this.victoryCount < 0) {
            throw new Error('Forbidden value (' + this.victoryCount + ') on element of GameRolePlayArenaUpdatePlayerInfosMessage.victoryCount.');
        }
        this.arenaFightcount = param1.readVarUhShort();
        if (this.arenaFightcount < 0) {
            throw new Error('Forbidden value (' + this.arenaFightcount + ') on element of GameRolePlayArenaUpdatePlayerInfosMessage.arenaFightcount.');
        }

    }
}

export = GameRolePlayArenaUpdatePlayerInfosMessage;
