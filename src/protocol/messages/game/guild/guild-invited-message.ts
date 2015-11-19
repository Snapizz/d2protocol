/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import BasicGuildInformations = require('../../../types/game/context/roleplay/basic-guild-informations');

class GuildInvitedMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5552;

    recruterId: number;
    recruterName: string;
    guildInfo: BasicGuildInformations;

    constructor() {
        this.recruterId = 0;
        this.recruterName = '';
        this.guildInfo = new BasicGuildInformations();
        super();
    }

    public getMessageId(): number {
        return GuildInvitedMessage.ID;
    }

    public reset(): void {
        this.recruterId = 0;
        this.recruterName = '';
        this.guildInfo = new BasicGuildInformations();
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
        this.serializeAs_GuildInvitedMessage(param1);
    }

    public serializeAs_GuildInvitedMessage(param1: ICustomDataOutput): void {
        if (this.recruterId < 0) {
            throw new Error('Forbidden value (' + this.recruterId + ') on element recruterId.');
        }
        param1.writeVarInt(this.recruterId);
        param1.writeUTF(this.recruterName);
        this.guildInfo.serializeAs_BasicGuildInformations(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GuildInvitedMessage(param1);
    }

    public deserializeAs_GuildInvitedMessage(param1: ICustomDataInput): void {
        this.recruterId = param1.readVarUhInt();
        if (this.recruterId < 0) {
            throw new Error('Forbidden value (' + this.recruterId + ') on element of GuildInvitedMessage.recruterId.');
        }
        this.recruterName = param1.readUTF();
        this.guildInfo = new BasicGuildInformations();
        this.guildInfo.deserialize(param1);

    }
}

export = GuildInvitedMessage;
