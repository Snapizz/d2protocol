/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import GuildJoinedMessage = require('./guild-joined-message');
import GuildInformations = require('../../../types/game/context/roleplay/guild-informations');

class GuildMembershipMessage extends GuildJoinedMessage {
    public static ID: number = 5835;



    constructor() {

        super();
    }

    public getMessageId(): number {
        return GuildMembershipMessage.ID;
    }

    public reset(): void {

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
        this.serializeAs_GuildMembershipMessage(param1);
    }

    public serializeAs_GuildMembershipMessage(param1: ICustomDataOutput): void {
        super.serializeAs_GuildJoinedMessage(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GuildMembershipMessage(param1);
    }

    public deserializeAs_GuildMembershipMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);

    }
}

export = GuildMembershipMessage;
