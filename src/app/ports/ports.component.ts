import { Component, OnInit } from '@angular/core';
import { Port } from '../port';
import { PortService } from '../port.service'

@Component({
  selector: 'app-ports',
  templateUrl: './ports.component.html',
  styleUrls: ['./ports.component.css']
})

export class PortsComponent implements OnInit {

  ports: Port[];
  
  getPorts(): void {
    this.portService.getPorts().subscribe(ports => this.ports = ports);
  }

  constructor(private portService: PortService) {}

  ngOnInit() {
    this.getPorts();
  }

}
