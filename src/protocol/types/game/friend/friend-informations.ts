/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import AbstractContactInformations = require('./abstract-contact-informations');

class FriendInformations extends AbstractContactInformations implements INetworkType {
    public static ID: number = 78;

    playerState: number;
    lastConnection: number;
    achievementPoints: number;

    constructor() {
        this.playerState = 99;
        this.lastConnection = 0;
        this.achievementPoints = 0;
        super();
    }

    public getTypeId(): number {
        return FriendInformations.ID;
    }

    public reset(): void {
        this.playerState = 99;
        this.lastConnection = 0;
        this.achievementPoints = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_FriendInformations(param1);
    }

    public serializeAs_FriendInformations(param1: ICustomDataOutput): void {
        super.serializeAs_AbstractContactInformations(param1);
        param1.writeByte(this.playerState);
        if (this.lastConnection < 0) {
            throw new Error('Forbidden value (' + this.lastConnection + ') on element lastConnection.');
        }
        param1.writeVarShort(this.lastConnection);
        param1.writeInt(this.achievementPoints);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_FriendInformations(param1);
    }

    public deserializeAs_FriendInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.playerState = param1.readByte();
        if (this.playerState < 0) {
            throw new Error('Forbidden value (' + this.playerState + ') on element of FriendInformations.playerState.');
        }
        this.lastConnection = param1.readVarUhShort();
        if (this.lastConnection < 0) {
            throw new Error('Forbidden value (' + this.lastConnection + ') on element of FriendInformations.lastConnection.');
        }
        this.achievementPoints = param1.readInt();

    }
}

export = FriendInformations;
