/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import PrismsListMessage = require('./prisms-list-message');
import PrismSubareaEmptyInfo = require('../../../types/game/prism/prism-subarea-empty-info');

class PrismsListUpdateMessage extends PrismsListMessage {
    public static ID: number = 6438;



    constructor() {

        super();
    }

    public getMessageId(): number {
        return PrismsListUpdateMessage.ID;
    }

    public reset(): void {

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
        this.serializeAs_PrismsListUpdateMessage(param1);
    }

    public serializeAs_PrismsListUpdateMessage(param1: ICustomDataOutput): void {
        super.serializeAs_PrismsListMessage(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PrismsListUpdateMessage(param1);
    }

    public deserializeAs_PrismsListUpdateMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);

    }
}

export = PrismsListUpdateMessage;
