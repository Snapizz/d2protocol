/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class GuildMemberOnlineStatusMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6061;

    memberId: number;
    online: boolean;

    constructor() {
        this.memberId = 0;
        this.online = false;
        super();
    }

    public getMessageId(): number {
        return GuildMemberOnlineStatusMessage.ID;
    }

    public reset(): void {
        this.memberId = 0;
        this.online = false;
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
        this.serializeAs_GuildMemberOnlineStatusMessage(param1);
    }

    public serializeAs_GuildMemberOnlineStatusMessage(param1: ICustomDataOutput): void {
        if (this.memberId < 0) {
            throw new Error('Forbidden value (' + this.memberId + ') on element memberId.');
        }
        param1.writeVarInt(this.memberId);
        param1.writeBoolean(this.online);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GuildMemberOnlineStatusMessage(param1);
    }

    public deserializeAs_GuildMemberOnlineStatusMessage(param1: ICustomDataInput): void {
        this.memberId = param1.readVarUhInt();
        if (this.memberId < 0) {
            throw new Error('Forbidden value (' + this.memberId + ') on element of GuildMemberOnlineStatusMessage.memberId.');
        }
        this.online = param1.readBoolean();

    }
}

export = GuildMemberOnlineStatusMessage;
