/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class BasicWhoAmIRequestMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5664;

    verbose: boolean;

    constructor() {
        this.verbose = false;
        super();
    }

    public getMessageId(): number {
        return BasicWhoAmIRequestMessage.ID;
    }

    public reset(): void {
        this.verbose = false;
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
        this.serializeAs_BasicWhoAmIRequestMessage(param1);
    }

    public serializeAs_BasicWhoAmIRequestMessage(param1: ICustomDataOutput): void {
        param1.writeBoolean(this.verbose);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_BasicWhoAmIRequestMessage(param1);
    }

    public deserializeAs_BasicWhoAmIRequestMessage(param1: ICustomDataInput): void {
        this.verbose = param1.readBoolean();

    }
}

export = BasicWhoAmIRequestMessage;
