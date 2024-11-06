
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
import { ArReceiptsComponent } from './components/sale/transaction/components/ar-receipts/ar-receipts.component';
import { AccountSetupComponent } from './components/accounts/Maintenance/components/account-setup/account-setup.component';
import { AccountSettingsComponent } from './components/accounts/Maintenance/components/account-setup/account-settings/account-settings.component';
import { NewCustomersComponent } from './components/receivables/Maintenance/components/customers/new-customers/new-customers.component';
import {CustomersComponent} from "./components/receivables/Maintenance/components/customers/customers.component"


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'sales',
        pathMatch: 'full',
    },
    {
        path: 'sales',
        component: SaleComponent,
        // children: [
        //     {
        //         path: 'transaction/arReceipt',
        //         component: ArReceiptsComponent,
        //     }
        // ]
    },
    {
        path: 'sales/transaction/arReceipt',
        component: ArReceiptsComponent,
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
        path: 'accounts/maintenance/accountSetup',
        component: AccountSetupComponent,
    },
    {
        path: 'accounts/maintenance/accountSetting',
        component: AccountSettingsComponent,
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
        path: 'receivable/maintenance/customers/newCustomers',
        component: NewCustomersComponent,
    },

    {
        path: 'receivable/maintenance/customers',
        component: CustomersComponent,
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
