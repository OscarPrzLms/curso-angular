import { expressionType } from "@angular/compiler/src/output/output_ast";
import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador/contador.component';

@NgModule({
    declarations: [
        ContadorComponent
    ],
    exports: [
        ContadorComponent
    ]
})
export class ContadorModule {


}