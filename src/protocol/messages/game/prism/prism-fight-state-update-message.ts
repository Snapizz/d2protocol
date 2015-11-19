/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class PrismFightStateUpdateMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6040;

    state: number;

    constructor() {
        this.state = 0;
        super();
    }

    public getMessageId(): number {
        return PrismFightStateUpdateMessage.ID;
    }

    public reset(): void {
        this.state = 0;
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
        this.serializeAs_PrismFightStateUpdateMessage(param1);
    }

    public serializeAs_PrismFightStateUpdateMessage(param1: ICustomDataOutput): void {
        if (this.state < 0) {
            throw new Error('Forbidden value (' + this.state + ') on element state.');
        }
        param1.writeByte(this.state);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PrismFightStateUpdateMessage(param1);
    }

    public deserializeAs_PrismFightStateUpdateMessage(param1: ICustomDataInput): void {
        this.state = param1.readByte();
        if (this.state < 0) {
            throw new Error('Forbidden value (' + this.state + ') on element of PrismFightStateUpdateMessage.state.');
        }

    }
}

export = PrismFightStateUpdateMessage;
