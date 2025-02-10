import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from 'src/app/pages/dashboard/home/home.component';
import { UserDetailsComponent } from 'src/app/pages/dashboard/send-money/user-details/user-details.component';
import { SummaryComponent } from 'src/app/pages/dashboard/send-money/summary/summary.component';
import { AuthViewComponent } from 'src/app/pages/dashboard/send-money/auth-view/auth-view.component';
import { ComponentsModule } from "../../common/components/components.module";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CatalogComponent } from 'src/app/pages/dashboard/shop/catalog/catalog.component';
import { ProductDetailComponent } from 'src/app/pages/dashboard/shop/product-detail/product-detail.component';
import { CheckoutComponent } from 'src/app/pages/dashboard/shop/checkout/checkout.component';
import { ShippingComponent } from 'src/app/pages/dashboard/shop/shipping/shipping.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    UserDetailsComponent,
    SummaryComponent,
    AuthViewComponent,

    //shop
    CatalogComponent,
    ProductDetailComponent,
    CheckoutComponent,
    ShippingComponent
  ],
  imports: [CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    DashboardRoutingModule,
    ComponentsModule],
  exports: []
})
export class DashboardModule {
  
}
