import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';

import { FilterBySymbolPipe } from './pipes/filter-by-symbol.pipe';
import { SortByDataPipe } from './pipes/sort-by-data.pipe';
import { FilterPanelComponent } from './components/filter-panel/filter-panel.component';
import { MainComponent } from './components/main/main.component';
import { YoutubeService } from './services/youtube.service';
import { CardComponent } from './components/main/card/card.component';
import { DetailedPageComponent } from './pages/detailed-page/detailed-page.component';
import { YoutubeComponent } from './components/youtube.component';
import { CoreModuleModule } from '../core/core-module.module';
import { NonFoundComponent } from './pages/non-found/non-found.component';

@NgModule({
  declarations: [
    FilterPanelComponent,
    MainComponent,
    CardComponent,
    DetailedPageComponent,
    YoutubeComponent,
    NonFoundComponent,

    SortByDataPipe,
    FilterBySymbolPipe,
    DetailedPageComponent,
    YoutubeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoreModuleModule,
    RouterModule
  ],
  providers: [YoutubeService],
  exports: [
    FilterPanelComponent,
    MainComponent,
    CardComponent,
    DetailedPageComponent,
    YoutubeComponent,
    NonFoundComponent,

    SortByDataPipe,
    FilterBySymbolPipe,
  ]
})
export class YoutubeModule { }
