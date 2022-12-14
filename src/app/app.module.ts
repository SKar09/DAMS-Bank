import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AccountStatementComponent } from './dashboard/account-statement/account-statement.component';
import { FundTransferComponent } from './dashboard/fund-transfer/fund-transfer.component';
import { UserProfileComponent } from './dashboard/user-profile/user-profile.component';
import { ChangeUserIdPasswordComponent } from './dashboard/change-user-id-password/change-user-id-password.component';
import { SessionExpiredComponent } from './dashboard/session-expired/session-expired.component';
import { ImpsComponent } from './dashboard/fund-transfer/imps/imps.component';
import { NeftComponent } from './dashboard/fund-transfer/neft/neft.component';
import { RtgsComponent } from './dashboard/fund-transfer/rtgs/rtgs.component';
import { AddPayeeComponent } from './dashboard/fund-transfer/add-payee/add-payee.component';
import { TransferSuccessfulComponent } from './dashboard/fund-transfer/transfer-successful/transfer-successful.component';
import { LoginComponent } from './home-page/login/login.component';
import { ForgotUIDComponent } from './home-page/login/forgot-uid/forgot-uid.component';
import { ForgotPasswordComponent } from './home-page/login/forgot-password/forgot-password.component';
import { RegisterComponent } from './home-page/register/register.component';
import { OpenAnAccountComponent } from './home-page/open-an-account/open-an-account.component';
import { AccountSummaryComponent } from './dashboard/account-summary/account-summary.component';
import { AccountDetailsComponent } from './dashboard/account-details/account-details.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomePageComponent,
    AccountStatementComponent,
    FundTransferComponent,
    UserProfileComponent,
    ChangeUserIdPasswordComponent,
    SessionExpiredComponent,
    ImpsComponent,
    NeftComponent,
    RtgsComponent,
    AddPayeeComponent,
    TransferSuccessfulComponent,
    LoginComponent,
    ForgotUIDComponent,
    ForgotPasswordComponent,
    RegisterComponent,
    OpenAnAccountComponent,
    AccountSummaryComponent,
    AccountDetailsComponent,
    AdminComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
