/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import AbstractPartyEventMessage = require('./abstract-party-event-message');
import PartyGuestInformations = require('../../../../../types/game/context/roleplay/party/party-guest-informations');

class PartyNewGuestMessage extends AbstractPartyEventMessage {
    public static ID: number = 6260;

    guest: PartyGuestInformations;

    constructor() {
        this.guest = new PartyGuestInformations();
        super();
    }

    public getMessageId(): number {
        return PartyNewGuestMessage.ID;
    }

    public reset(): void {
        this.guest = new PartyGuestInformations();
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
        this.serializeAs_PartyNewGuestMessage(param1);
    }

    public serializeAs_PartyNewGuestMessage(param1: ICustomDataOutput): void {
        super.serializeAs_AbstractPartyEventMessage(param1);
        this.guest.serializeAs_PartyGuestInformations(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PartyNewGuestMessage(param1);
    }

    public deserializeAs_PartyNewGuestMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.guest = new PartyGuestInformations();
        this.guest.deserialize(param1);

    }
}

export = PartyNewGuestMessage;
