import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PlayerComponent} from './url-components/player/player.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MAT_DATE_FORMATS} from '@angular/material/core';
import {OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime-ex';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        PlayerComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
        ReactiveFormsModule,
    ],
    providers: [
        {
            provide: MAT_DATE_FORMATS, useValue: {
                parse: {
                    dateInput: 'YYYY/MM',
                },
                display: {
                    dateInput: 'YYYY/MM',
                    monthYearLabel: 'YYYY MMM',
                    dateA11yLabel: 'LL',
                    monthYearA11yLabel: 'YYYY MMMM',
                }
            }
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
