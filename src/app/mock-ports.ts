import { Port } from './port';

export const PORTS: Port[] = [
  {id: 20, name: 'ftp data', protocol: 'tcp'},
  {id: 21, name: 'ftp control', protocol: 'tcp'},
  {id: 22, name: 'ssh', protocol: 'tcp'},
  {id: 23, name: 'telnet', protocol: 'tcp'},
  {id: 25, name: 'smtp', protocol: 'tcp'},
  {id: 80, name: 'http', protocol: 'tcp'},
  {id: 88, name: 'kerberos', protocol: 'tcp'},
  {id: 109, name: 'pop2', protocol: 'tcp'},
  {id: 110, name: 'pop3', protocol: 'tcp'},
  {id: 118, name: 'sql', protocol: 'tcp'},
  {id: 156, name: 'sql', protocol: 'tcp'}
]
