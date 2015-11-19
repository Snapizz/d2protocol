/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class GuildInformationsGeneralMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5557;

    enabled: boolean;
    abandonnedPaddock: boolean;
    level: number;
    expLevelFloor: number;
    experience: number;
    expNextLevelFloor: number;
    creationDate: number;
    nbTotalMembers: number;
    nbConnectedMembers: number;

    constructor() {
        this.enabled = false;
        this.abandonnedPaddock = false;
        this.level = 0;
        this.expLevelFloor = 0;
        this.experience = 0;
        this.expNextLevelFloor = 0;
        this.creationDate = 0;
        this.nbTotalMembers = 0;
        this.nbConnectedMembers = 0;
        super();
    }

    public getMessageId(): number {
        return GuildInformationsGeneralMessage.ID;
    }

    public reset(): void {
        this.enabled = false;
        this.abandonnedPaddock = false;
        this.level = 0;
        this.expLevelFloor = 0;
        this.experience = 0;
        this.expNextLevelFloor = 0;
        this.creationDate = 0;
        this.nbTotalMembers = 0;
        this.nbConnectedMembers = 0;
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
        this.serializeAs_GuildInformationsGeneralMessage(param1);
    }

    public serializeAs_GuildInformationsGeneralMessage(param1: ICustomDataOutput): void {
        var _loc2_: number = 0;
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.enabled);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.abandonnedPaddock);
        param1.writeByte(_loc2_);
        if (this.level < 0 || this.level > 255) {
            throw new Error('Forbidden value (' + this.level + ') on element level.');
        }
        param1.writeByte(this.level);
        if (this.expLevelFloor < 0 || this.expLevelFloor > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.expLevelFloor + ') on element expLevelFloor.');
        }
        param1.writeVarLong(this.expLevelFloor);
        if (this.experience < 0 || this.experience > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.experience + ') on element experience.');
        }
        param1.writeVarLong(this.experience);
        if (this.expNextLevelFloor < 0 || this.expNextLevelFloor > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.expNextLevelFloor + ') on element expNextLevelFloor.');
        }
        param1.writeVarLong(this.expNextLevelFloor);
        if (this.creationDate < 0) {
            throw new Error('Forbidden value (' + this.creationDate + ') on element creationDate.');
        }
        param1.writeInt(this.creationDate);
        if (this.nbTotalMembers < 0) {
            throw new Error('Forbidden value (' + this.nbTotalMembers + ') on element nbTotalMembers.');
        }
        param1.writeVarShort(this.nbTotalMembers);
        if (this.nbConnectedMembers < 0) {
            throw new Error('Forbidden value (' + this.nbConnectedMembers + ') on element nbConnectedMembers.');
        }
        param1.writeVarShort(this.nbConnectedMembers);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GuildInformationsGeneralMessage(param1);
    }

    public deserializeAs_GuildInformationsGeneralMessage(param1: ICustomDataInput): void {
        var _loc2_: number = param1.readByte();
        this.enabled = BooleanByteWrapper.getFlag(_loc2_, 0);
        this.abandonnedPaddock = BooleanByteWrapper.getFlag(_loc2_, 1);
        this.level = param1.readUnsignedByte();
        if (this.level < 0 || this.level > 255) {
            throw new Error('Forbidden value (' + this.level + ') on element of GuildInformationsGeneralMessage.level.');
        }
        this.expLevelFloor = param1.readVarUhLong();
        if (this.expLevelFloor < 0 || this.expLevelFloor > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.expLevelFloor + ') on element of GuildInformationsGeneralMessage.expLevelFloor.');
        }
        this.experience = param1.readVarUhLong();
        if (this.experience < 0 || this.experience > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.experience + ') on element of GuildInformationsGeneralMessage.experience.');
        }
        this.expNextLevelFloor = param1.readVarUhLong();
        if (this.expNextLevelFloor < 0 || this.expNextLevelFloor > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.expNextLevelFloor + ') on element of GuildInformationsGeneralMessage.expNextLevelFloor.');
        }
        this.creationDate = param1.readInt();
        if (this.creationDate < 0) {
            throw new Error('Forbidden value (' + this.creationDate + ') on element of GuildInformationsGeneralMessage.creationDate.');
        }
        this.nbTotalMembers = param1.readVarUhShort();
        if (this.nbTotalMembers < 0) {
            throw new Error('Forbidden value (' + this.nbTotalMembers + ') on element of GuildInformationsGeneralMessage.nbTotalMembers.');
        }
        this.nbConnectedMembers = param1.readVarUhShort();
        if (this.nbConnectedMembers < 0) {
            throw new Error('Forbidden value (' + this.nbConnectedMembers + ') on element of GuildInformationsGeneralMessage.nbConnectedMembers.');
        }

    }
}

export = GuildInformationsGeneralMessage;
