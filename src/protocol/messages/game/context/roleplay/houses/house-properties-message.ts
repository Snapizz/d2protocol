/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import HouseInformations = require('../../../../../types/game/house/house-informations');
import ProtocolTypeManager = require('../../../../../protocol-type-manager');

class HousePropertiesMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5734;

    properties: HouseInformations;

    constructor() {
        this.properties = new HouseInformations();
        super();
    }

    public getMessageId(): number {
        return HousePropertiesMessage.ID;
    }

    public reset(): void {
        this.properties = new HouseInformations();
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
        this.serializeAs_HousePropertiesMessage(param1);
    }

    public serializeAs_HousePropertiesMessage(param1: ICustomDataOutput): void {
        param1.writeShort(this.properties.getTypeId());
        this.properties.serialize(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_HousePropertiesMessage(param1);
    }

    public deserializeAs_HousePropertiesMessage(param1: ICustomDataInput): void {
        var _loc2_: number = param1.readUnsignedShort();
        this.properties = <HouseInformations>ProtocolTypeManager.getInstance(HouseInformations, _loc2_);
        this.properties.deserialize(param1);

    }
}

export = HousePropertiesMessage;
