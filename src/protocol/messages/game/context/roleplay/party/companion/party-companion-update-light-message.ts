/// <reference path="../../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../../boolean-byte-wrapper');
import PartyUpdateLightMessage = require('./../party-update-light-message');

class PartyCompanionUpdateLightMessage extends PartyUpdateLightMessage {
    public static ID: number = 6472;

    indexId: number;

    constructor() {
        this.indexId = 0;
        super();
    }

    public getMessageId(): number {
        return PartyCompanionUpdateLightMessage.ID;
    }

    public reset(): void {
        this.indexId = 0;
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
        this.serializeAs_PartyCompanionUpdateLightMessage(param1);
    }

    public serializeAs_PartyCompanionUpdateLightMessage(param1: ICustomDataOutput): void {
        super.serializeAs_PartyUpdateLightMessage(param1);
        if (this.indexId < 0) {
            throw new Error('Forbidden value (' + this.indexId + ') on element indexId.');
        }
        param1.writeByte(this.indexId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PartyCompanionUpdateLightMessage(param1);
    }

    public deserializeAs_PartyCompanionUpdateLightMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.indexId = param1.readByte();
        if (this.indexId < 0) {
            throw new Error('Forbidden value (' + this.indexId + ') on element of PartyCompanionUpdateLightMessage.indexId.');
        }

    }
}

export = PartyCompanionUpdateLightMessage;
