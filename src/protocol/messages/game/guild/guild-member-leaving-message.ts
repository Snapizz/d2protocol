/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class GuildMemberLeavingMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5923;

    kicked: boolean;
    memberId: number;

    constructor() {
        this.kicked = false;
        this.memberId = 0;
        super();
    }

    public getMessageId(): number {
        return GuildMemberLeavingMessage.ID;
    }

    public reset(): void {
        this.kicked = false;
        this.memberId = 0;
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
        this.serializeAs_GuildMemberLeavingMessage(param1);
    }

    public serializeAs_GuildMemberLeavingMessage(param1: ICustomDataOutput): void {
        param1.writeBoolean(this.kicked);
        param1.writeInt(this.memberId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GuildMemberLeavingMessage(param1);
    }

    public deserializeAs_GuildMemberLeavingMessage(param1: ICustomDataInput): void {
        this.kicked = param1.readBoolean();
        this.memberId = param1.readInt();

    }
}

export = GuildMemberLeavingMessage;
