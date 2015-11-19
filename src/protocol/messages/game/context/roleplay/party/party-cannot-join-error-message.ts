/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import AbstractPartyMessage = require('./abstract-party-message');

class PartyCannotJoinErrorMessage extends AbstractPartyMessage {
    public static ID: number = 5583;

    reason: number;

    constructor() {
        this.reason = 0;
        super();
    }

    public getMessageId(): number {
        return PartyCannotJoinErrorMessage.ID;
    }

    public reset(): void {
        this.reason = 0;
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
        this.serializeAs_PartyCannotJoinErrorMessage(param1);
    }

    public serializeAs_PartyCannotJoinErrorMessage(param1: ICustomDataOutput): void {
        super.serializeAs_AbstractPartyMessage(param1);
        param1.writeByte(this.reason);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PartyCannotJoinErrorMessage(param1);
    }

    public deserializeAs_PartyCannotJoinErrorMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.reason = param1.readByte();
        if (this.reason < 0) {
            throw new Error('Forbidden value (' + this.reason + ') on element of PartyCannotJoinErrorMessage.reason.');
        }

    }
}

export = PartyCannotJoinErrorMessage;
