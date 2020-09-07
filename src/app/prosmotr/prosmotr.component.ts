import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prosmotr',
  templateUrl: './prosmotr.component.html',
  styleUrls: ['./prosmotr.component.css']
})
export class ProsmotrComponent implements OnInit {
  id: string;

  constructor(private route: ActivatedRoute) {
    this.id = route.snapshot.params['id'];
   }

  ngOnInit(): void {
  }

}
