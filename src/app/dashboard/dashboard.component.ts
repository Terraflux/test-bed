import { Component, OnInit } from '@angular/core';
import { Port } from '../port';
import { PortService } from '../port.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ports: Port[] = [];

  constructor(private portService: PortService) { }

  ngOnInit() {
    this.getPorts();
  }

  getPorts(): void {
    this.portService.getPorts().subscribe(ports => this.ports = ports.slice(1,5));
  }

}
