/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import PartyFollowMemberRequestMessage = require('./party-follow-member-request-message');

class PartyFollowThisMemberRequestMessage extends PartyFollowMemberRequestMessage {
    public static ID: number = 5588;

    enabled: boolean;

    constructor() {
        this.enabled = false;
        super();
    }

    public getMessageId(): number {
        return PartyFollowThisMemberRequestMessage.ID;
    }

    public reset(): void {
        this.enabled = false;
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
        this.serializeAs_PartyFollowThisMemberRequestMessage(param1);
    }

    public serializeAs_PartyFollowThisMemberRequestMessage(param1: ICustomDataOutput): void {
        super.serializeAs_PartyFollowMemberRequestMessage(param1);
        param1.writeBoolean(this.enabled);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PartyFollowThisMemberRequestMessage(param1);
    }

    public deserializeAs_PartyFollowThisMemberRequestMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.enabled = param1.readBoolean();

    }
}

export = PartyFollowThisMemberRequestMessage;
