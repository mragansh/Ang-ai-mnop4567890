import { Component, OnInit, OnDestroy } from '@angular/core';
import { GetDataService } from './service/get-data.service'
import { MatTableDataSource } from '@angular/material';
import { DialogServiceService } from './service/dialog-service.service';
import { DilogBoxComponent } from './popup/dilog-box/dilog-box.component'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GetDataService, DialogServiceService]
})

export class AppComponent implements OnInit, OnDestroy {
  public tableDataSource: any
  public displayedColumns;
  constructor(public service: GetDataService,
    private dialogService: DialogServiceService) {
  }

  ngOnInit() {
    this.displayedColumns = ['created_at', 'title', 'url', 'author']
    this.service.getPollAftertimout()
      .subscribe(res => this.getsHits(res))
  }

  // @ this set subscribe data to dataSource of material
  public getsHits(res) {
    this.tableDataSource = new MatTableDataSource(res.hits);
    console.log(this.tableDataSource)
  }

  // @ function will search the textbox data and filter in datasource of table.
  public applyFilter(filterValue: string) {
    console.log(filterValue)
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.tableDataSource.filter = filterValue;
  }

  //@ trigger dilogue service, with specified component.
  open(data) {
    console.log(data)
    this.dialogService.createDialog(DilogBoxComponent, { width: '90%', height: '50%', data: { JSON: data } });
  }

  ngOnDestroy() {

  }

}