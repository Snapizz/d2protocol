/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import TeleportDestinationsListMessage = require('./teleport-destinations-list-message');

class ZaapListMessage extends TeleportDestinationsListMessage {
    public static ID: number = 1604;

    spawnMapId: number;

    constructor() {
        this.spawnMapId = 0;
        super();
    }

    public getMessageId(): number {
        return ZaapListMessage.ID;
    }

    public reset(): void {
        this.spawnMapId = 0;
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
        this.serializeAs_ZaapListMessage(param1);
    }

    public serializeAs_ZaapListMessage(param1: ICustomDataOutput): void {
        super.serializeAs_TeleportDestinationsListMessage(param1);
        if (this.spawnMapId < 0) {
            throw new Error('Forbidden value (' + this.spawnMapId + ') on element spawnMapId.');
        }
        param1.writeInt(this.spawnMapId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ZaapListMessage(param1);
    }

    public deserializeAs_ZaapListMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.spawnMapId = param1.readInt();
        if (this.spawnMapId < 0) {
            throw new Error('Forbidden value (' + this.spawnMapId + ') on element of ZaapListMessage.spawnMapId.');
        }

    }
}

export = ZaapListMessage;
