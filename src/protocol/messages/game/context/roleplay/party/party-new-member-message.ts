/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import PartyUpdateMessage = require('./party-update-message');
import PartyMemberInformations = require('../../../../../types/game/context/roleplay/party/party-member-informations');

class PartyNewMemberMessage extends PartyUpdateMessage {
    public static ID: number = 6306;



    constructor() {

        super();
    }

    public getMessageId(): number {
        return PartyNewMemberMessage.ID;
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
        this.serializeAs_PartyNewMemberMessage(param1);
    }

    public serializeAs_PartyNewMemberMessage(param1: ICustomDataOutput): void {
        super.serializeAs_PartyUpdateMessage(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PartyNewMemberMessage(param1);
    }

    public deserializeAs_PartyNewMemberMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);

    }
}

export = PartyNewMemberMessage;
