/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class AllianceFactsErrorMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6423;

    allianceId: number;

    constructor() {
        this.allianceId = 0;
        super();
    }

    public getMessageId(): number {
        return AllianceFactsErrorMessage.ID;
    }

    public reset(): void {
        this.allianceId = 0;
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
        this.serializeAs_AllianceFactsErrorMessage(param1);
    }

    public serializeAs_AllianceFactsErrorMessage(param1: ICustomDataOutput): void {
        if (this.allianceId < 0) {
            throw new Error('Forbidden value (' + this.allianceId + ') on element allianceId.');
        }
        param1.writeVarInt(this.allianceId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_AllianceFactsErrorMessage(param1);
    }

    public deserializeAs_AllianceFactsErrorMessage(param1: ICustomDataInput): void {
        this.allianceId = param1.readVarUhInt();
        if (this.allianceId < 0) {
            throw new Error('Forbidden value (' + this.allianceId + ') on element of AllianceFactsErrorMessage.allianceId.');
        }

    }
}

export = AllianceFactsErrorMessage;
