import { Component, OnInit } from '@angular/core';
import {PanelModule} from 'primeng/panel';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private panel:PanelModule) { }

  ngOnInit(): void {
  }

}
