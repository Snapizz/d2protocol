/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class GuildInvitationMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5551;

    targetId: number;

    constructor() {
        this.targetId = 0;
        super();
    }

    public getMessageId(): number {
        return GuildInvitationMessage.ID;
    }

    public reset(): void {
        this.targetId = 0;
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
        this.serializeAs_GuildInvitationMessage(param1);
    }

    public serializeAs_GuildInvitationMessage(param1: ICustomDataOutput): void {
        if (this.targetId < 0) {
            throw new Error('Forbidden value (' + this.targetId + ') on element targetId.');
        }
        param1.writeVarInt(this.targetId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GuildInvitationMessage(param1);
    }

    public deserializeAs_GuildInvitationMessage(param1: ICustomDataInput): void {
        this.targetId = param1.readVarUhInt();
        if (this.targetId < 0) {
            throw new Error('Forbidden value (' + this.targetId + ') on element of GuildInvitationMessage.targetId.');
        }

    }
}

export = GuildInvitationMessage;
