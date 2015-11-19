/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import AtlasPointsInformations = require('../../../types/game/context/roleplay/atlas-points-informations');

class AtlasPointInformationsMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5956;

    type: AtlasPointsInformations;

    constructor() {
        this.type = new AtlasPointsInformations();
        super();
    }

    public getMessageId(): number {
        return AtlasPointInformationsMessage.ID;
    }

    public reset(): void {
        this.type = new AtlasPointsInformations();
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
        this.serializeAs_AtlasPointInformationsMessage(param1);
    }

    public serializeAs_AtlasPointInformationsMessage(param1: ICustomDataOutput): void {
        this.type.serializeAs_AtlasPointsInformations(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_AtlasPointInformationsMessage(param1);
    }

    public deserializeAs_AtlasPointInformationsMessage(param1: ICustomDataInput): void {
        this.type = new AtlasPointsInformations();
        this.type.deserialize(param1);

    }
}

export = AtlasPointInformationsMessage;
