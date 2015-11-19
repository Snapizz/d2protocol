/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');

class PortalUseRequestMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6492;

    portalId: number;

    constructor() {
        this.portalId = 0;
        super();
    }

    public getMessageId(): number {
        return PortalUseRequestMessage.ID;
    }

    public reset(): void {
        this.portalId = 0;
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
        this.serializeAs_PortalUseRequestMessage(param1);
    }

    public serializeAs_PortalUseRequestMessage(param1: ICustomDataOutput): void {
        if (this.portalId < 0) {
            throw new Error('Forbidden value (' + this.portalId + ') on element portalId.');
        }
        param1.writeVarInt(this.portalId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PortalUseRequestMessage(param1);
    }

    public deserializeAs_PortalUseRequestMessage(param1: ICustomDataInput): void {
        this.portalId = param1.readVarUhInt();
        if (this.portalId < 0) {
            throw new Error('Forbidden value (' + this.portalId + ') on element of PortalUseRequestMessage.portalId.');
        }

    }
}

export = PortalUseRequestMessage;
