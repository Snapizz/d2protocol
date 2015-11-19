/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import AbstractPartyEventMessage = require('./abstract-party-event-message');
import PartyMemberInformations = require('../../../../../types/game/context/roleplay/party/party-member-informations');
import ProtocolTypeManager = require('../../../../../protocol-type-manager');

class PartyUpdateMessage extends AbstractPartyEventMessage {
    public static ID: number = 5575;

    memberInformations: PartyMemberInformations;

    constructor() {
        this.memberInformations = new PartyMemberInformations();
        super();
    }

    public getMessageId(): number {
        return PartyUpdateMessage.ID;
    }

    public reset(): void {
        this.memberInformations = new PartyMemberInformations();
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
        this.serializeAs_PartyUpdateMessage(param1);
    }

    public serializeAs_PartyUpdateMessage(param1: ICustomDataOutput): void {
        super.serializeAs_AbstractPartyEventMessage(param1);
        param1.writeShort(this.memberInformations.getTypeId());
        this.memberInformations.serialize(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PartyUpdateMessage(param1);
    }

    public deserializeAs_PartyUpdateMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        var _loc2_: number = param1.readUnsignedShort();
        this.memberInformations = <PartyMemberInformations>ProtocolTypeManager.getInstance(PartyMemberInformations, _loc2_);
        this.memberInformations.deserialize(param1);

    }
}

export = PartyUpdateMessage;
