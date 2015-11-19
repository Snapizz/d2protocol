/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import GuildMember = require('../../../types/game/guild/guild-member');

class GuildInformationsMemberUpdateMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5597;

    member: GuildMember;

    constructor() {
        this.member = new GuildMember();
        super();
    }

    public getMessageId(): number {
        return GuildInformationsMemberUpdateMessage.ID;
    }

    public reset(): void {
        this.member = new GuildMember();
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
        this.serializeAs_GuildInformationsMemberUpdateMessage(param1);
    }

    public serializeAs_GuildInformationsMemberUpdateMessage(param1: ICustomDataOutput): void {
        this.member.serializeAs_GuildMember(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GuildInformationsMemberUpdateMessage(param1);
    }

    public deserializeAs_GuildInformationsMemberUpdateMessage(param1: ICustomDataInput): void {
        this.member = new GuildMember();
        this.member.deserialize(param1);

    }
}

export = GuildInformationsMemberUpdateMessage;
