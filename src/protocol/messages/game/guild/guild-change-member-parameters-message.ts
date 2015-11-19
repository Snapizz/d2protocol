/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class GuildChangeMemberParametersMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5549;

    memberId: number;
    rank: number;
    experienceGivenPercent: number;
    rights: number;

    constructor() {
        this.memberId = 0;
        this.rank = 0;
        this.experienceGivenPercent = 0;
        this.rights = 0;
        super();
    }

    public getMessageId(): number {
        return GuildChangeMemberParametersMessage.ID;
    }

    public reset(): void {
        this.memberId = 0;
        this.rank = 0;
        this.experienceGivenPercent = 0;
        this.rights = 0;
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
        this.serializeAs_GuildChangeMemberParametersMessage(param1);
    }

    public serializeAs_GuildChangeMemberParametersMessage(param1: ICustomDataOutput): void {
        if (this.memberId < 0) {
            throw new Error('Forbidden value (' + this.memberId + ') on element memberId.');
        }
        param1.writeVarInt(this.memberId);
        if (this.rank < 0) {
            throw new Error('Forbidden value (' + this.rank + ') on element rank.');
        }
        param1.writeVarShort(this.rank);
        if (this.experienceGivenPercent < 0 || this.experienceGivenPercent > 100) {
            throw new Error('Forbidden value (' + this.experienceGivenPercent + ') on element experienceGivenPercent.');
        }
        param1.writeByte(this.experienceGivenPercent);
        if (this.rights < 0) {
            throw new Error('Forbidden value (' + this.rights + ') on element rights.');
        }
        param1.writeVarInt(this.rights);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GuildChangeMemberParametersMessage(param1);
    }

    public deserializeAs_GuildChangeMemberParametersMessage(param1: ICustomDataInput): void {
        this.memberId = param1.readVarUhInt();
        if (this.memberId < 0) {
            throw new Error('Forbidden value (' + this.memberId + ') on element of GuildChangeMemberParametersMessage.memberId.');
        }
        this.rank = param1.readVarUhShort();
        if (this.rank < 0) {
            throw new Error('Forbidden value (' + this.rank + ') on element of GuildChangeMemberParametersMessage.rank.');
        }
        this.experienceGivenPercent = param1.readByte();
        if (this.experienceGivenPercent < 0 || this.experienceGivenPercent > 100) {
            throw new Error('Forbidden value (' + this.experienceGivenPercent + ') on element of GuildChangeMemberParametersMessage.experienceGivenPercent.');
        }
        this.rights = param1.readVarUhInt();
        if (this.rights < 0) {
            throw new Error('Forbidden value (' + this.rights + ') on element of GuildChangeMemberParametersMessage.rights.');
        }

    }
}

export = GuildChangeMemberParametersMessage;
