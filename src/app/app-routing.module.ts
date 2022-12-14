import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { AccountDetailsComponent } from './dashboard/account-details/account-details.component';
import { AccountStatementComponent } from './dashboard/account-statement/account-statement.component';
import { AccountSummaryComponent } from './dashboard/account-summary/account-summary.component';
import { ChangeUserIdPasswordComponent } from './dashboard/change-user-id-password/change-user-id-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddPayeeComponent } from './dashboard/fund-transfer/add-payee/add-payee.component';
import { FundTransferComponent } from './dashboard/fund-transfer/fund-transfer.component';
import { ImpsComponent } from './dashboard/fund-transfer/imps/imps.component';
import { NeftComponent } from './dashboard/fund-transfer/neft/neft.component';
import { RtgsComponent } from './dashboard/fund-transfer/rtgs/rtgs.component';
import { TransferSuccessfulComponent } from './dashboard/fund-transfer/transfer-successful/transfer-successful.component';
import { SessionExpiredComponent } from './dashboard/session-expired/session-expired.component';
import { UserProfileComponent } from './dashboard/user-profile/user-profile.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ForgotPasswordComponent } from './home-page/login/forgot-password/forgot-password.component';
import { SetPasswordComponent } from './home-page/login/forgot-password/set-password/set-password.component';
import { ForgotUIDComponent } from './home-page/login/forgot-uid/forgot-uid.component';
import { LoginComponent } from './home-page/login/login.component';
import { OpenAnAccountComponent } from './home-page/open-an-account/open-an-account.component';
import { RegisterComponent } from './home-page/register/register.component';

const routes: Routes = [
  {
    path:'homePage', component:HomePageComponent,
    children: [
      {
        path: 'login', component: LoginComponent, 
        children:[
          {path:'forgotUID', component:ForgotUIDComponent},
          {
            path:'forgotPassword', component:ForgotPasswordComponent,
            children:[
              {path:'setPassword', component:SetPasswordComponent}
            ]
          }
        ]
      },
      {
        path: 'register', component:RegisterComponent
      },
      {
        path:'openAnAccount', component:OpenAnAccountComponent
      }
    ]
  },
  {
    path:'dashboard', component:DashboardComponent,
    children: [
      {
        path:'fundTransfer', component:FundTransferComponent, 
        children:[
          {path:'addPayee', component:AddPayeeComponent},
          {path:'imps', component:ImpsComponent},
          {path:'neft', component:NeftComponent},
          {path:'rtgs', component:RtgsComponent},
          {path:'transferSuccessful', component:TransferSuccessfulComponent},
        ]
      },
      {path:'changeUserIdPassword', component:ChangeUserIdPasswordComponent},
      {path: 'accountStatement', component: AccountStatementComponent},
      {path: 'accountSummary', component: AccountSummaryComponent},
      {path: 'accountDetails', component: AccountDetailsComponent},
      {path:'sessionExpired', component:SessionExpiredComponent},
      {path:'userProfile', component:UserProfileComponent},
    ], canActivate:[AuthGuard]
  },
  {
    path:'admin', component:AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
