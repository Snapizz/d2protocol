/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import PartyIdol = require('../../../types/game/idol/party-idol');

class IdolPartyRefreshMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6583;

    partyIdol: PartyIdol;

    constructor() {
        this.partyIdol = new PartyIdol();
        super();
    }

    public getMessageId(): number {
        return IdolPartyRefreshMessage.ID;
    }

    public reset(): void {
        this.partyIdol = new PartyIdol();
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
        this.serializeAs_IdolPartyRefreshMessage(param1);
    }

    public serializeAs_IdolPartyRefreshMessage(param1: ICustomDataOutput): void {
        this.partyIdol.serializeAs_PartyIdol(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_IdolPartyRefreshMessage(param1);
    }

    public deserializeAs_IdolPartyRefreshMessage(param1: ICustomDataInput): void {
        this.partyIdol = new PartyIdol();
        this.partyIdol.deserialize(param1);

    }
}

export = IdolPartyRefreshMessage;
