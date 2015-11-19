/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class GameFightPlacementSwapPositionsCancelMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6543;

    requestId: number;

    constructor() {
        this.requestId = 0;
        super();
    }

    public getMessageId(): number {
        return GameFightPlacementSwapPositionsCancelMessage.ID;
    }

    public reset(): void {
        this.requestId = 0;
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
        this.serializeAs_GameFightPlacementSwapPositionsCancelMessage(param1);
    }

    public serializeAs_GameFightPlacementSwapPositionsCancelMessage(param1: ICustomDataOutput): void {
        if (this.requestId < 0) {
            throw new Error('Forbidden value (' + this.requestId + ') on element requestId.');
        }
        param1.writeInt(this.requestId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameFightPlacementSwapPositionsCancelMessage(param1);
    }

    public deserializeAs_GameFightPlacementSwapPositionsCancelMessage(param1: ICustomDataInput): void {
        this.requestId = param1.readInt();
        if (this.requestId < 0) {
            throw new Error('Forbidden value (' + this.requestId + ') on element of GameFightPlacementSwapPositionsCancelMessage.requestId.');
        }

    }
}

export = GameFightPlacementSwapPositionsCancelMessage;
