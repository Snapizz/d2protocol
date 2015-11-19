/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import ExchangeMountsStableAddMessage = require('./exchange-mounts-stable-add-message');
import MountClientData = require('../../../../types/game/mount/mount-client-data');

class ExchangeMountsStableBornAddMessage extends ExchangeMountsStableAddMessage {
    public static ID: number = 6557;



    constructor() {

        super();
    }

    public getMessageId(): number {
        return ExchangeMountsStableBornAddMessage.ID;
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
        this.serializeAs_ExchangeMountsStableBornAddMessage(param1);
    }

    public serializeAs_ExchangeMountsStableBornAddMessage(param1: ICustomDataOutput): void {
        super.serializeAs_ExchangeMountsStableAddMessage(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ExchangeMountsStableBornAddMessage(param1);
    }

    public deserializeAs_ExchangeMountsStableBornAddMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);

    }
}

export = ExchangeMountsStableBornAddMessage;
