/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import IgnoredInformations = require('./ignored-informations');
import PlayableBreedEnum = require('../../../enums/playable-breed-enum');

class IgnoredOnlineInformations extends IgnoredInformations implements INetworkType {
    public static ID: number = 105;

    playerId: number;
    playerName: string;
    breed: number;
    sex: boolean;

    constructor() {
        this.playerId = 0;
        this.playerName = '';
        this.breed = 0;
        this.sex = false;
        super();
    }

    public getTypeId(): number {
        return IgnoredOnlineInformations.ID;
    }

    public reset(): void {
        this.playerId = 0;
        this.playerName = '';
        this.breed = 0;
        this.sex = false;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_IgnoredOnlineInformations(param1);
    }

    public serializeAs_IgnoredOnlineInformations(param1: ICustomDataOutput): void {
        super.serializeAs_IgnoredInformations(param1);
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element playerId.');
        }
        param1.writeVarInt(this.playerId);
        param1.writeUTF(this.playerName);
        param1.writeByte(this.breed);
        param1.writeBoolean(this.sex);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_IgnoredOnlineInformations(param1);
    }

    public deserializeAs_IgnoredOnlineInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.playerId = param1.readVarUhInt();
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element of IgnoredOnlineInformations.playerId.');
        }
        this.playerName = param1.readUTF();
        this.breed = param1.readByte();
        if (this.breed < PlayableBreedEnum.Feca || this.breed > PlayableBreedEnum.Eliotrope) {
            throw new Error('Forbidden value (' + this.breed + ') on element of IgnoredOnlineInformations.breed.');
        }
        this.sex = param1.readBoolean();

    }
}

export = IgnoredOnlineInformations;
