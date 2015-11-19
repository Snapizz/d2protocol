/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import PlayableBreedEnum = require('../../../../../enums/playable-breed-enum');

class DungeonPartyFinderPlayer implements INetworkType {
    public static ID: number = 373;

    playerId: number;
    playerName: string;
    breed: number;
    sex: boolean;
    level: number;

    constructor() {
        this.playerId = 0;
        this.playerName = '';
        this.breed = 0;
        this.sex = false;
        this.level = 0;
    }

    public getTypeId(): number {
        return DungeonPartyFinderPlayer.ID;
    }

    public reset(): void {
        this.playerId = 0;
        this.playerName = '';
        this.breed = 0;
        this.sex = false;
        this.level = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_DungeonPartyFinderPlayer(param1);
    }

    public serializeAs_DungeonPartyFinderPlayer(param1: ICustomDataOutput): void {
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element playerId.');
        }
        param1.writeVarInt(this.playerId);
        param1.writeUTF(this.playerName);
        param1.writeByte(this.breed);
        param1.writeBoolean(this.sex);
        if (this.level < 0 || this.level > 255) {
            throw new Error('Forbidden value (' + this.level + ') on element level.');
        }
        param1.writeByte(this.level);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_DungeonPartyFinderPlayer(param1);
    }

    public deserializeAs_DungeonPartyFinderPlayer(param1: ICustomDataInput): void {
        this.playerId = param1.readVarUhInt();
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element of DungeonPartyFinderPlayer.playerId.');
        }
        this.playerName = param1.readUTF();
        this.breed = param1.readByte();
        if (this.breed < PlayableBreedEnum.Feca || this.breed > PlayableBreedEnum.Eliotrope) {
            throw new Error('Forbidden value (' + this.breed + ') on element of DungeonPartyFinderPlayer.breed.');
        }
        this.sex = param1.readBoolean();
        this.level = param1.readUnsignedByte();
        if (this.level < 0 || this.level > 255) {
            throw new Error('Forbidden value (' + this.level + ') on element of DungeonPartyFinderPlayer.level.');
        }

    }
}

export = DungeonPartyFinderPlayer;
