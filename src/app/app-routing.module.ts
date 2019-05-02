import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './feature/user/user-list/user-list.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { UserDetailComponent } from './feature/user/user-detail/user-detail.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';
import { UserLoginComponent } from './feature/user/user-login/user-login.component';

import { VendorListComponent } from './feature/vendor/vendor-list/vendor-list.component';
import { VendorCreateComponent } from './feature/vendor/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './feature/vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './feature/vendor/vendor-edit/vendor-edit.component';

import { ProductListComponent } from './feature/product/product-list/product-list.component';
import { ProductCreateComponent } from './feature/product/product-create/product-create.component';
import { ProductEditComponent } from './feature/product/product-edit/product-edit.component';
import { ProductDetailComponent } from './feature/product/product-detail/product-detail.component';

import { PurchaseRequestListComponent } from './feature/pr/purchase-request-list/purchase-request-list.component';
import { PurchaseRequestDetailComponent } from './feature/pr/purchase-request-detail/purchase-request-detail.component';
import { PurchaseRequestCreateComponent } from './feature/pr/purchase-request-create/purchase-request-create.component';
import { PurchaseRequestReviewComponent } from './feature/pr/purchase-request-review/purchase-request-review.component';
import { PurchaseRequestLinesComponent } from './feature/pr/purchase-request-lines/purchase-request-lines.component';
import { PurchaseRequestEditComponent } from './feature/pr/purchase-request-edit/purchase-request-edit.component';

import { PurchaseRequestLineItemCreateComponent } from './feature/prli/purchase-request-line-item-create/purchase-request-line-item-create.component';
import { PurchaseRequestLineItemEditComponent } from './feature/prli/purchase-request-line-item-edit/purchase-request-line-item-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/user/list', pathMatch: 'full' },
  { path: 'user/login', component: UserLoginComponent },
  { path: 'user/list', component: UserListComponent },
  { path: 'user/create', component: UserCreateComponent },
  { path: 'user/detail/:id', component: UserDetailComponent },
  { path: 'user/edit/:id', component: UserEditComponent },
  { path: 'user/remove/:id', component: UserDetailComponent },
  { path: 'vendor/list', component: VendorListComponent },
  { path: 'vendor/create', component: VendorCreateComponent },
  { path: 'vendor/edit/:id', component: VendorEditComponent },
  { path: 'vendor/detail/:id', component: VendorDetailComponent },
  { path: 'vendor/remove/:id', component: VendorDetailComponent },
  { path: 'product/list', component: ProductListComponent },
  { path: 'product/create', component: ProductCreateComponent },
  { path: 'product/detail/:id', component: ProductDetailComponent },
  { path: 'product/edit/:id', component: ProductEditComponent },
  { path: 'product/remove/:id', component: ProductDetailComponent },
  { path: 'purchase-request/list', component: PurchaseRequestListComponent },
  { path: 'purchase-request/detail/:id', component: PurchaseRequestDetailComponent },
  { path: 'purchase-request/create', component: PurchaseRequestCreateComponent },
  { path: 'purchase-request/review', component: PurchaseRequestReviewComponent },
  { path: 'purchase-request/lines/:id', component: PurchaseRequestLinesComponent },
  { path: 'purchase-request/edit/:id', component: PurchaseRequestEditComponent },
  { path: 'purchase-request-line-item/create/:id', component: PurchaseRequestLineItemCreateComponent },
  { path: 'purchase-request-line-item/edit/:id', component: PurchaseRequestLineItemEditComponent },
  { path: '**', component: UserListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
