//angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule, ReadyState } from '@angular/http';
//material
import { MatCardModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';

//components
import { ToasterComponent } from './toaster/toaster.component';
import { ModalComponent } from './modal/modal.component';
import { NotifierComponent } from './notifier/notifier.component';
// import { SplashComponent } from './splash/splash.component';
import { OverlayComponent } from '../overlay/overlay.component';
import { FootswitchComponent } from './footswitch/footswitch.component';
import { ItemViewComponent } from '../../features/products/item-view/item-view.component';
//directive
import { HostDirective } from './host/host.directive';

//service
import { OverlayService } from './services/overlay.service';
import { ModalNetService } from './modal/services/modal-net.service';
import { CatalogStore } from '../../features/products/store/catalog-store.service';
//modules
import { ProductsModule } from '../../features/products/products.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    HttpModule,
    ProductsModule
  ],
  providers: [CatalogStore, ModalNetService, OverlayService],
  declarations:[ NotifierComponent, ToasterComponent, FootswitchComponent, ModalComponent, OverlayComponent, HostDirective],
  exports:[OverlayComponent],
  entryComponents:[ItemViewComponent, ModalComponent]
})

export class OverlayModule { }
