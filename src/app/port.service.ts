import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { MessageService } from './message.service';

import { Port } from './port';
import { PORTS } from './mock-ports';

@Injectable()
export class PortService {

  getPort(id: number): Observable<Port> {
    this.messageService.add(`PortService: fetched port id=${id}`);
    return of(PORTS.find(port => port.id === id))
  }

  getPorts(): Observable<Port[]> {
    this.messageService.add('PortService: fetched ports');
    return of(PORTS);
  }

  constructor(private messageService: MessageService) { }

}
