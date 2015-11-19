/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class OrnamentSelectRequestMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6374;

    ornamentId: number;

    constructor() {
        this.ornamentId = 0;
        super();
    }

    public getMessageId(): number {
        return OrnamentSelectRequestMessage.ID;
    }

    public reset(): void {
        this.ornamentId = 0;
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
        this.serializeAs_OrnamentSelectRequestMessage(param1);
    }

    public serializeAs_OrnamentSelectRequestMessage(param1: ICustomDataOutput): void {
        if (this.ornamentId < 0) {
            throw new Error('Forbidden value (' + this.ornamentId + ') on element ornamentId.');
        }
        param1.writeVarShort(this.ornamentId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_OrnamentSelectRequestMessage(param1);
    }

    public deserializeAs_OrnamentSelectRequestMessage(param1: ICustomDataInput): void {
        this.ornamentId = param1.readVarUhShort();
        if (this.ornamentId < 0) {
            throw new Error('Forbidden value (' + this.ornamentId + ') on element of OrnamentSelectRequestMessage.ornamentId.');
        }

    }
}

export = OrnamentSelectRequestMessage;
