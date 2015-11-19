/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import ContentPart = require('../../../types/updater/content-part');

class PartInfoMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 1508;

    part: ContentPart;
    installationPercent: number;

    constructor() {
        this.part = new ContentPart();
        this.installationPercent = 0;
        super();
    }

    public getMessageId(): number {
        return PartInfoMessage.ID;
    }

    public reset(): void {
        this.part = new ContentPart();
        this.installationPercent = 0;
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
        this.serializeAs_PartInfoMessage(param1);
    }

    public serializeAs_PartInfoMessage(param1: ICustomDataOutput): void {
        this.part.serializeAs_ContentPart(param1);
        param1.writeFloat(this.installationPercent);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PartInfoMessage(param1);
    }

    public deserializeAs_PartInfoMessage(param1: ICustomDataInput): void {
        this.part = new ContentPart();
        this.part.deserialize(param1);
        this.installationPercent = param1.readFloat();

    }
}

export = PartInfoMessage;
