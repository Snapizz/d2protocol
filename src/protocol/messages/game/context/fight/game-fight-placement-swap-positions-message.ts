/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import IdentifiedEntityDispositionInformations = require('../../../../types/game/context/identified-entity-disposition-informations');

class GameFightPlacementSwapPositionsMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6544;

    dispositions: IdentifiedEntityDispositionInformations[];

    constructor() {
        this.dispositions = [];
        super();
    }

    public getMessageId(): number {
        return GameFightPlacementSwapPositionsMessage.ID;
    }

    public reset(): void {
        this.dispositions = [];
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
        this.serializeAs_GameFightPlacementSwapPositionsMessage(param1);
    }

    public serializeAs_GameFightPlacementSwapPositionsMessage(param1: ICustomDataOutput): void {
        var _loc2_: number = 0;
        while (_loc2_ < 2) {
        this.dispositions[_loc2_].serializeAs_IdentifiedEntityDispositionInformations(param1);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameFightPlacementSwapPositionsMessage(param1);
    }

    public deserializeAs_GameFightPlacementSwapPositionsMessage(param1: ICustomDataInput): void {
        var _loc2_: number = 0;
        while (_loc2_ < 2) {
        this.dispositions[_loc2_] = new IdentifiedEntityDispositionInformations();
            this.dispositions[_loc2_].deserialize(param1);
            _loc2_++;
        }

    }
}

export = GameFightPlacementSwapPositionsMessage;
