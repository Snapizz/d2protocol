/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import TaxCollectorComplementaryInformations = require('./tax-collector-complementary-informations');
import ProtectedEntityWaitingForHelpInfo = require('../../fight/protected-entity-waiting-for-help-info');

class TaxCollectorWaitingForHelpInformations extends TaxCollectorComplementaryInformations implements INetworkType {
    public static ID: number = 447;

    waitingForHelpInfo: ProtectedEntityWaitingForHelpInfo;

    constructor() {
        this.waitingForHelpInfo = new ProtectedEntityWaitingForHelpInfo();
        super();
    }

    public getTypeId(): number {
        return TaxCollectorWaitingForHelpInformations.ID;
    }

    public reset(): void {
        this.waitingForHelpInfo = new ProtectedEntityWaitingForHelpInfo();
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_TaxCollectorWaitingForHelpInformations(param1);
    }

    public serializeAs_TaxCollectorWaitingForHelpInformations(param1: ICustomDataOutput): void {
        super.serializeAs_TaxCollectorComplementaryInformations(param1);
        this.waitingForHelpInfo.serializeAs_ProtectedEntityWaitingForHelpInfo(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_TaxCollectorWaitingForHelpInformations(param1);
    }

    public deserializeAs_TaxCollectorWaitingForHelpInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.waitingForHelpInfo = new ProtectedEntityWaitingForHelpInfo();
        this.waitingForHelpInfo.deserialize(param1);

    }
}

export = TaxCollectorWaitingForHelpInformations;
