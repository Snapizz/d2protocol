/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class AllianceInvitationStateRecrutedMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6392;

    invitationState: number;

    constructor() {
        this.invitationState = 0;
        super();
    }

    public getMessageId(): number {
        return AllianceInvitationStateRecrutedMessage.ID;
    }

    public reset(): void {
        this.invitationState = 0;
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
        this.serializeAs_AllianceInvitationStateRecrutedMessage(param1);
    }

    public serializeAs_AllianceInvitationStateRecrutedMessage(param1: ICustomDataOutput): void {
        param1.writeByte(this.invitationState);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_AllianceInvitationStateRecrutedMessage(param1);
    }

    public deserializeAs_AllianceInvitationStateRecrutedMessage(param1: ICustomDataInput): void {
        this.invitationState = param1.readByte();
        if (this.invitationState < 0) {
            throw new Error('Forbidden value (' + this.invitationState + ') on element of AllianceInvitationStateRecrutedMessage.invitationState.');
        }

    }
}

export = AllianceInvitationStateRecrutedMessage;
