
import { Routes } from '@angular/router';
import { MainComponentComponent } from './components/main-component/main-component.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { PurchasesComponent } from './components/purchases/purchases.component';
import { ReceivablesComponent } from './components/receivables/receivables.component';
import { PayablesComponent } from './components/payables/payables.component';
import { HumanResourcesComponent } from './components/human-resources/human-resources.component';
import { AssetsComponent } from './components/assets/assets.component';
import { AdministrationComponent } from './components/administration/administration.component';
import { ProductionComponent } from './components/production/production.component';
import { CashAndBankComponent } from './components/cash-and-bank/cash-and-bank.component';
import { StoreInventoryComponent } from './components/store-inventory/store-inventory.component';
import { QuantityControlComponent } from './components/quantity-control/quantity-control.component';
import { SaleComponent } from './components/sale/sale.component';

export const routes: Routes = [
    {
        path: '',
        component: SaleComponent,
        // path: '',
        // component: MainComponentComponent,
        // // canActivate: [AdminGuard],
        // children: [
        //     {
        //         path: 'dashboard',
        //         component: DashboardComponent,
        //     }
        // ]
    },
    {
        path: 'sales',
        component: SaleComponent,
    },
    {
        path: 'inventory',
        component: InventoryComponent,
    },
    {
        path: 'accounts',
        component: AccountsComponent,
    },
    {
        path: 'purchases',
        component: PurchasesComponent,
    },
    {
        path: 'receivable',
        component: ReceivablesComponent,
    },
    {
        path: 'payables',
        component: PayablesComponent,
    },
    {
        path: 'humanResource',
        component: HumanResourcesComponent,
    },
    {
        path: 'assets',
        component: AssetsComponent,
    },
    {
        path: 'administration',
        component: AdministrationComponent,
    },
    {
        path: 'production',
        component: ProductionComponent,
    },
    {
        path: 'cashAndBank',
        component: CashAndBankComponent,
    },
    {
        path: 'storeInventory',
        component: StoreInventoryComponent,
    },
    {
        path: 'qualityControl',
        component: QuantityControlComponent,
    },
];
