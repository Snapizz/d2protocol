/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class CinematicMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6053;

    cinematicId: number;

    constructor() {
        this.cinematicId = 0;
        super();
    }

    public getMessageId(): number {
        return CinematicMessage.ID;
    }

    public reset(): void {
        this.cinematicId = 0;
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
        this.serializeAs_CinematicMessage(param1);
    }

    public serializeAs_CinematicMessage(param1: ICustomDataOutput): void {
        if (this.cinematicId < 0) {
            throw new Error('Forbidden value (' + this.cinematicId + ') on element cinematicId.');
        }
        param1.writeVarShort(this.cinematicId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_CinematicMessage(param1);
    }

    public deserializeAs_CinematicMessage(param1: ICustomDataInput): void {
        this.cinematicId = param1.readVarUhShort();
        if (this.cinematicId < 0) {
            throw new Error('Forbidden value (' + this.cinematicId + ') on element of CinematicMessage.cinematicId.');
        }

    }
}

export = CinematicMessage;
