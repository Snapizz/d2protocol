/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class ServerExperienceModificatorMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6237;

    experiencePercent: number;

    constructor() {
        this.experiencePercent = 0;
        super();
    }

    public getMessageId(): number {
        return ServerExperienceModificatorMessage.ID;
    }

    public reset(): void {
        this.experiencePercent = 0;
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
        this.serializeAs_ServerExperienceModificatorMessage(param1);
    }

    public serializeAs_ServerExperienceModificatorMessage(param1: ICustomDataOutput): void {
        if (this.experiencePercent < 0) {
            throw new Error('Forbidden value (' + this.experiencePercent + ') on element experiencePercent.');
        }
        param1.writeVarShort(this.experiencePercent);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ServerExperienceModificatorMessage(param1);
    }

    public deserializeAs_ServerExperienceModificatorMessage(param1: ICustomDataInput): void {
        this.experiencePercent = param1.readVarUhShort();
        if (this.experiencePercent < 0) {
            throw new Error('Forbidden value (' + this.experiencePercent + ') on element of ServerExperienceModificatorMessage.experiencePercent.');
        }

    }
}

export = ServerExperienceModificatorMessage;
