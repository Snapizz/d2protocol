/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import EntityDispositionInformations = require('./entity-disposition-informations');

class IdentifiedEntityDispositionInformations extends EntityDispositionInformations implements INetworkType {
    public static ID: number = 107;

    id: number;

    constructor() {
        this.id = 0;
        super();
    }

    public getTypeId(): number {
        return IdentifiedEntityDispositionInformations.ID;
    }

    public reset(): void {
        this.id = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_IdentifiedEntityDispositionInformations(param1);
    }

    public serializeAs_IdentifiedEntityDispositionInformations(param1: ICustomDataOutput): void {
        super.serializeAs_EntityDispositionInformations(param1);
        param1.writeInt(this.id);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_IdentifiedEntityDispositionInformations(param1);
    }

    public deserializeAs_IdentifiedEntityDispositionInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.id = param1.readInt();

    }
}

export = IdentifiedEntityDispositionInformations;
