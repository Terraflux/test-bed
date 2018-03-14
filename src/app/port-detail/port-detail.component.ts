import { Component, OnInit, Input } from '@angular/core';
import { Port } from '../port';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PortService } from '../port.service';


@Component({
  selector: 'app-port-detail',
  templateUrl: './port-detail.component.html',
  styleUrls: ['./port-detail.component.css']
})
export class PortDetailComponent implements OnInit {

  @Input() port: Port;

  constructor(
    private route: ActivatedRoute,
    private portService: PortService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getPort();
  }

  getPort(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.portService.getPort(id).subscribe(port => this.port = port);
  }

  goBack(): void {
    this.location.back();
  }

}
