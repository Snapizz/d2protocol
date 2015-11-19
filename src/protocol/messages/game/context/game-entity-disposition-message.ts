/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import IdentifiedEntityDispositionInformations = require('../../../types/game/context/identified-entity-disposition-informations');

class GameEntityDispositionMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5693;

    disposition: IdentifiedEntityDispositionInformations;

    constructor() {
        this.disposition = new IdentifiedEntityDispositionInformations();
        super();
    }

    public getMessageId(): number {
        return GameEntityDispositionMessage.ID;
    }

    public reset(): void {
        this.disposition = new IdentifiedEntityDispositionInformations();
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
        this.serializeAs_GameEntityDispositionMessage(param1);
    }

    public serializeAs_GameEntityDispositionMessage(param1: ICustomDataOutput): void {
        this.disposition.serializeAs_IdentifiedEntityDispositionInformations(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameEntityDispositionMessage(param1);
    }

    public deserializeAs_GameEntityDispositionMessage(param1: ICustomDataInput): void {
        this.disposition = new IdentifiedEntityDispositionInformations();
        this.disposition.deserialize(param1);

    }
}

export = GameEntityDispositionMessage;
