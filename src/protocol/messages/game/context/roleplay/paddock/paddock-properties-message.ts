/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import PaddockInformations = require('../../../../../types/game/paddock/paddock-informations');
import ProtocolTypeManager = require('../../../../../protocol-type-manager');

class PaddockPropertiesMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5824;

    properties: PaddockInformations;

    constructor() {
        this.properties = new PaddockInformations();
        super();
    }

    public getMessageId(): number {
        return PaddockPropertiesMessage.ID;
    }

    public reset(): void {
        this.properties = new PaddockInformations();
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
        this.serializeAs_PaddockPropertiesMessage(param1);
    }

    public serializeAs_PaddockPropertiesMessage(param1: ICustomDataOutput): void {
        param1.writeShort(this.properties.getTypeId());
        this.properties.serialize(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PaddockPropertiesMessage(param1);
    }

    public deserializeAs_PaddockPropertiesMessage(param1: ICustomDataInput): void {
        var _loc2_: number = param1.readUnsignedShort();
        this.properties = <PaddockInformations>ProtocolTypeManager.getInstance(PaddockInformations, _loc2_);
        this.properties.deserialize(param1);

    }
}

export = PaddockPropertiesMessage;
