import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/pages/dashboard/home/home.component';
import { DashboardComponent } from './dashboard.component';
import { SummaryComponent } from 'src/app/pages/dashboard/send-money/summary/summary.component';
import { AuthViewComponent } from 'src/app/pages/dashboard/send-money/auth-view/auth-view.component';
import { UserDetailsComponent } from 'src/app/pages/dashboard/send-money/user-details/user-details.component';
import { CatalogComponent } from 'src/app/pages/dashboard/shop/catalog/catalog.component';
import { ProductDetailComponent } from 'src/app/pages/dashboard/shop/product-detail/product-detail.component';
import { CheckoutComponent } from 'src/app/pages/dashboard/shop/checkout/checkout.component';
import { ShippingComponent } from 'src/app/pages/dashboard/shop/shipping/shipping.component';

const routes:Routes = [
  { path: "", component: DashboardComponent, children:[
    { path: "", component: HomeComponent},
    { path: "send-money", component: UserDetailsComponent },
    { path: "auth-view", component: AuthViewComponent },
    { path: "summary", component: SummaryComponent },
    { path: "catalog", component: CatalogComponent },
    { path: "product-detail", component: ProductDetailComponent },
    { path: "checkout", component: CheckoutComponent },
    { path: "shipping", component: ShippingComponent }
  ] }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
 
}
