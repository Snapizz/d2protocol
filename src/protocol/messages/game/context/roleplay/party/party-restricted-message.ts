/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import AbstractPartyMessage = require('./abstract-party-message');

class PartyRestrictedMessage extends AbstractPartyMessage {
    public static ID: number = 6175;

    restricted: boolean;

    constructor() {
        this.restricted = false;
        super();
    }

    public getMessageId(): number {
        return PartyRestrictedMessage.ID;
    }

    public reset(): void {
        this.restricted = false;
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
        this.serializeAs_PartyRestrictedMessage(param1);
    }

    public serializeAs_PartyRestrictedMessage(param1: ICustomDataOutput): void {
        super.serializeAs_AbstractPartyMessage(param1);
        param1.writeBoolean(this.restricted);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PartyRestrictedMessage(param1);
    }

    public deserializeAs_PartyRestrictedMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.restricted = param1.readBoolean();

    }
}

export = PartyRestrictedMessage;
