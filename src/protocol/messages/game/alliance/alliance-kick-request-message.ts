/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class AllianceKickRequestMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6400;

    kickedId: number;

    constructor() {
        this.kickedId = 0;
        super();
    }

    public getMessageId(): number {
        return AllianceKickRequestMessage.ID;
    }

    public reset(): void {
        this.kickedId = 0;
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
        this.serializeAs_AllianceKickRequestMessage(param1);
    }

    public serializeAs_AllianceKickRequestMessage(param1: ICustomDataOutput): void {
        if (this.kickedId < 0) {
            throw new Error('Forbidden value (' + this.kickedId + ') on element kickedId.');
        }
        param1.writeVarInt(this.kickedId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_AllianceKickRequestMessage(param1);
    }

    public deserializeAs_AllianceKickRequestMessage(param1: ICustomDataInput): void {
        this.kickedId = param1.readVarUhInt();
        if (this.kickedId < 0) {
            throw new Error('Forbidden value (' + this.kickedId + ') on element of AllianceKickRequestMessage.kickedId.');
        }

    }
}

export = AllianceKickRequestMessage;
