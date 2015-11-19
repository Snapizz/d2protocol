/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class BasicWhoIsRequestMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 181;

    verbose: boolean;
    search: string;

    constructor() {
        this.verbose = false;
        this.search = '';
        super();
    }

    public getMessageId(): number {
        return BasicWhoIsRequestMessage.ID;
    }

    public reset(): void {
        this.verbose = false;
        this.search = '';
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
        this.serializeAs_BasicWhoIsRequestMessage(param1);
    }

    public serializeAs_BasicWhoIsRequestMessage(param1: ICustomDataOutput): void {
        param1.writeBoolean(this.verbose);
        param1.writeUTF(this.search);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_BasicWhoIsRequestMessage(param1);
    }

    public deserializeAs_BasicWhoIsRequestMessage(param1: ICustomDataInput): void {
        this.verbose = param1.readBoolean();
        this.search = param1.readUTF();

    }
}

export = BasicWhoIsRequestMessage;
