/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class AllianceModificationNameAndTagValidMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6449;

    allianceName: string;
    allianceTag: string;

    constructor() {
        this.allianceName = '';
        this.allianceTag = '';
        super();
    }

    public getMessageId(): number {
        return AllianceModificationNameAndTagValidMessage.ID;
    }

    public reset(): void {
        this.allianceName = '';
        this.allianceTag = '';
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
        this.serializeAs_AllianceModificationNameAndTagValidMessage(param1);
    }

    public serializeAs_AllianceModificationNameAndTagValidMessage(param1: ICustomDataOutput): void {
        param1.writeUTF(this.allianceName);
        param1.writeUTF(this.allianceTag);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_AllianceModificationNameAndTagValidMessage(param1);
    }

    public deserializeAs_AllianceModificationNameAndTagValidMessage(param1: ICustomDataInput): void {
        this.allianceName = param1.readUTF();
        this.allianceTag = param1.readUTF();

    }
}

export = AllianceModificationNameAndTagValidMessage;
