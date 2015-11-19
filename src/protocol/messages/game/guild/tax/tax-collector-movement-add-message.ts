/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import TaxCollectorInformations = require('../../../../types/game/guild/tax/tax-collector-informations');
import ProtocolTypeManager = require('../../../../protocol-type-manager');

class TaxCollectorMovementAddMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5917;

    informations: TaxCollectorInformations;

    constructor() {
        this.informations = new TaxCollectorInformations();
        super();
    }

    public getMessageId(): number {
        return TaxCollectorMovementAddMessage.ID;
    }

    public reset(): void {
        this.informations = new TaxCollectorInformations();
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
        this.serializeAs_TaxCollectorMovementAddMessage(param1);
    }

    public serializeAs_TaxCollectorMovementAddMessage(param1: ICustomDataOutput): void {
        param1.writeShort(this.informations.getTypeId());
        this.informations.serialize(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_TaxCollectorMovementAddMessage(param1);
    }

    public deserializeAs_TaxCollectorMovementAddMessage(param1: ICustomDataInput): void {
        var _loc2_: number = param1.readUnsignedShort();
        this.informations = <TaxCollectorInformations>ProtocolTypeManager.getInstance(TaxCollectorInformations, _loc2_);
        this.informations.deserialize(param1);

    }
}

export = TaxCollectorMovementAddMessage;
