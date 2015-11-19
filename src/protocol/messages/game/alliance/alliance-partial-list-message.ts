/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import AllianceListMessage = require('./alliance-list-message');
import AllianceFactSheetInformations = require('../../../types/game/social/alliance-fact-sheet-informations');

class AlliancePartialListMessage extends AllianceListMessage {
    public static ID: number = 6427;



    constructor() {

        super();
    }

    public getMessageId(): number {
        return AlliancePartialListMessage.ID;
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
        this.serializeAs_AlliancePartialListMessage(param1);
    }

    public serializeAs_AlliancePartialListMessage(param1: ICustomDataOutput): void {
        super.serializeAs_AllianceListMessage(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_AlliancePartialListMessage(param1);
    }

    public deserializeAs_AlliancePartialListMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);

    }
}

export = AlliancePartialListMessage;
