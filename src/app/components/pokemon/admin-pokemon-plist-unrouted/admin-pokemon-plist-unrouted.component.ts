import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { IPokemon, IPokemonPage } from 'src/app/model/model.interfaces';
import { PaginatorState } from 'primeng/paginator';
import { HttpErrorResponse } from '@angular/common/http';
import { PokemonAjaxService } from 'src/app/service/pokemon.ajax.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ConfirmationService, ConfirmEventType } from 'primeng/api';

@Component({
  selector: 'app-admin-pokemon-plist-unrouted',
  templateUrl: './admin-pokemon-plist-unrouted.component.html',
  styleUrls: ['./admin-pokemon-plist-unrouted.component.css']
})
export class AdminPokemonPlistUnroutedComponent implements OnInit {

  @Input() forceReload: Subject<boolean> = new Subject<boolean>();

  oPage: IPokemonPage | undefined;
  orderField: string = "id";
  orderDirection: string = "asc";
  oPaginatorState: PaginatorState = { first: 0, rows: 10, page: 0, pageCount: 0 };
  status: HttpErrorResponse | null = null;
  oPokemonToRemove: IPokemon | null = null;


  constructor(
    private oPokemonAjaxService: PokemonAjaxService,
    public oDialogService: DialogService,
    private oCconfirmationService: ConfirmationService,
  ) { }

  ngOnInit() {
    this.getPage();
    this.forceReload.subscribe({
      next: (v) => {
        if (v) {
          this.getPage();
        }
      }
    });
  }

  getPage(): void {
    this.oPokemonAjaxService.getPage(this.oPaginatorState.rows, this.oPaginatorState.page, this.orderField, this.orderDirection).subscribe({
      next: (data: IPokemonPage) => {
        this.oPage = data;
        this.oPaginatorState.pageCount = data.totalPages;
        console.log(this.oPaginatorState);
      },
      error: (error: HttpErrorResponse) => {
        this.status = error;
      }
    })
  }

  onPageChang(event: PaginatorState) {
    this.oPaginatorState.rows = event.rows;
    this.oPaginatorState.page = event.page;
    this.getPage();
  }

  doOrder(fieldorder: string) {
    this.orderField = fieldorder;
    if (this.orderDirection == "asc") {
      this.orderDirection = "desc";
    } else {
      this.orderDirection = "asc";
    }
    this.getPage();
  }

  ref: DynamicDialogRef | undefined;
/*
  doView(u: IPokemon) {
    this.ref = this.oDialogService.open(AdminPokemonDetailUnroutedComponent, {
      data: {
        id: u.id
      },
      header: 'View of user',
      width: '50%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false
    });
  }
  */

  doRemove(u: IPokemon) {
    this.oPokemonToRemove = u;
    this.oCconfirmationService.confirm({
      accept: () => {
        this.oPokemonAjaxService.removeOne(this.oPokemonToRemove?.id).subscribe({
          next: () => {
            this.getPage();
          },
          error: (error: HttpErrorResponse) => {
            this.status = error;
          }
        });
      },
      reject: (type: ConfirmEventType) => {
      }
    });
  }

}
