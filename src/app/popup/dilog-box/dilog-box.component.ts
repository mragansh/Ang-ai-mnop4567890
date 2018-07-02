import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dilog-box',
  templateUrl: './dilog-box.component.html',
  styleUrls: ['./dilog-box.component.css']
})
export class DilogBoxComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

}
