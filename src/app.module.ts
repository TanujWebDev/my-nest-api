import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

import { AuthModule } from "./auth/auth.module";
import { SchemeModule } from "./scheme/scheme.module";

import { AddUccCsvModule } from "./ucc/add_ucc()/ADD_UCC_CSV/add-ucc-csv.module";
import { ResidentIndividualModule } from "./ucc/add_ucc()/ADD_UCC_WITHOUT_CSV/Resident Individual/resident-individual.module";
import { ResidentNonIndividualModule } from "./ucc/add_ucc()/ADD_UCC_WITHOUT_CSV/Resident Non Individual/resident-non-individual.module";
import { NonResidentNonIndividualModule } from "./ucc/add_ucc()/ADD_UCC_WITHOUT_CSV/Non Resident Non Individual/non-resident-non-individual.module";
import { NonResidentIndividualModule } from "./ucc/add_ucc()/ADD_UCC_WITHOUT_CSV/No Resident Individual/non-resident-individual.module";

import { ListUccModule } from "./ucc/list_ucc/list-ucc.module";
import { DeactivateUccModule } from "./ucc/deactivate_ucc/deactivate-ucc.module";
import { GetUccModule } from "./ucc/get_ucc()/get-ucc.module";
import { TwofaResendLinkModule } from "./ucc/twofa-resend-link/twofa-resend-link.module";

import { OrderNewModule } from "./order manager/order-new/order-new.module";
import { OrderUpdateModule } from "./order manager/order-update/order-update.module";

import { PaymentManagerModule } from "./payment-manager/payment-manager.module";

import { SxpRegisterModule } from "./systematic-order-engine/sxp_register/sxp-register.module";
import { SxpCancelModule } from "./systematic-order-engine/sxp-cancel/sxp-cancel.module";
import { SxpSetPauseModule } from "./systematic-order-engine/sxp_set_pause/sxp-set-pause.module";
import { SxpResumeModule } from "./systematic-order-engine/sxp-resume/sxp-resume.module";
import { SxpGetModule } from "./systematic-order-engine/sxp_get/sxp_get.module";

import { BankAccountChangeModule } from "./nft/kfin/bank-account-change/bank-account-change.module";
import { NomineeChangeModule } from "./nft/kfin/nomine-change/nominee-change.module";

import { NavModule } from "./nav/nav.module";

import { GetExchpgServiceModule } from "./payment-gateway/get-exchpg-service/get-exchpg-service.module";
import { SendPaymentInfoModule } from "./payment-gateway/send-payment-info/send-payment-info.module";

@Module({
  imports: [
    AuthModule,
    SchemeModule,
    AddUccCsvModule,
    ResidentIndividualModule,
    ResidentNonIndividualModule,
    NonResidentNonIndividualModule,
    NonResidentIndividualModule,
    ListUccModule,
    DeactivateUccModule,
    GetUccModule,
    TwofaResendLinkModule,
    OrderNewModule,
    OrderUpdateModule,
    PaymentManagerModule,
    SxpRegisterModule,
    SxpCancelModule,
    SxpSetPauseModule,
    SxpResumeModule,
    SxpGetModule,
    BankAccountChangeModule,
    NomineeChangeModule,
    NavModule,

    GetExchpgServiceModule,
    SendPaymentInfoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
