/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import AbstractPartyMessage = require('./abstract-party-message');

class PartyLeaveRequestMessage extends AbstractPartyMessage {
    public static ID: number = 5593;



    constructor() {

        super();
    }

    public getMessageId(): number {
        return PartyLeaveRequestMessage.ID;
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
        this.serializeAs_PartyLeaveRequestMessage(param1);
    }

    public serializeAs_PartyLeaveRequestMessage(param1: ICustomDataOutput): void {
        super.serializeAs_AbstractPartyMessage(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PartyLeaveRequestMessage(param1);
    }

    public deserializeAs_PartyLeaveRequestMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);

    }
}

export = PartyLeaveRequestMessage;
