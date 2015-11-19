/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import EntityLook = require('../look/entity-look');
import BasicGuildInformations = require('../context/roleplay/basic-guild-informations');

class FriendSpouseInformations implements INetworkType {
    public static ID: number = 77;

    spouseAccountId: number;
    spouseId: number;
    spouseName: string;
    spouseLevel: number;
    breed: number;
    sex: number;
    spouseEntityLook: EntityLook;
    guildInfo: BasicGuildInformations;
    alignmentSide: number;

    constructor() {
        this.spouseAccountId = 0;
        this.spouseId = 0;
        this.spouseName = '';
        this.spouseLevel = 0;
        this.breed = 0;
        this.sex = 0;
        this.spouseEntityLook = new EntityLook();
        this.guildInfo = new BasicGuildInformations();
        this.alignmentSide = 0;
    }

    public getTypeId(): number {
        return FriendSpouseInformations.ID;
    }

    public reset(): void {
        this.spouseAccountId = 0;
        this.spouseId = 0;
        this.spouseName = '';
        this.spouseLevel = 0;
        this.breed = 0;
        this.sex = 0;
        this.spouseEntityLook = new EntityLook();
        this.guildInfo = new BasicGuildInformations();
        this.alignmentSide = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_FriendSpouseInformations(param1);
    }

    public serializeAs_FriendSpouseInformations(param1: ICustomDataOutput): void {
        if (this.spouseAccountId < 0) {
            throw new Error('Forbidden value (' + this.spouseAccountId + ') on element spouseAccountId.');
        }
        param1.writeInt(this.spouseAccountId);
        if (this.spouseId < 0) {
            throw new Error('Forbidden value (' + this.spouseId + ') on element spouseId.');
        }
        param1.writeVarInt(this.spouseId);
        param1.writeUTF(this.spouseName);
        if (this.spouseLevel < 1 || this.spouseLevel > 200) {
            throw new Error('Forbidden value (' + this.spouseLevel + ') on element spouseLevel.');
        }
        param1.writeByte(this.spouseLevel);
        param1.writeByte(this.breed);
        param1.writeByte(this.sex);
        this.spouseEntityLook.serializeAs_EntityLook(param1);
        this.guildInfo.serializeAs_BasicGuildInformations(param1);
        param1.writeByte(this.alignmentSide);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_FriendSpouseInformations(param1);
    }

    public deserializeAs_FriendSpouseInformations(param1: ICustomDataInput): void {
        this.spouseAccountId = param1.readInt();
        if (this.spouseAccountId < 0) {
            throw new Error('Forbidden value (' + this.spouseAccountId + ') on element of FriendSpouseInformations.spouseAccountId.');
        }
        this.spouseId = param1.readVarUhInt();
        if (this.spouseId < 0) {
            throw new Error('Forbidden value (' + this.spouseId + ') on element of FriendSpouseInformations.spouseId.');
        }
        this.spouseName = param1.readUTF();
        this.spouseLevel = param1.readUnsignedByte();
        if (this.spouseLevel < 1 || this.spouseLevel > 200) {
            throw new Error('Forbidden value (' + this.spouseLevel + ') on element of FriendSpouseInformations.spouseLevel.');
        }
        this.breed = param1.readByte();
        this.sex = param1.readByte();
        this.spouseEntityLook = new EntityLook();
        this.spouseEntityLook.deserialize(param1);
        this.guildInfo = new BasicGuildInformations();
        this.guildInfo.deserialize(param1);
        this.alignmentSide = param1.readByte();

    }
}

export = FriendSpouseInformations;
