import {Component} from '@angular/core';
import {Logger} from 'angular2-logger/core';

import {AppService, DataStore} from '../app.service';


//noinspection TypeScriptValidateTypes
@Component({
  selector: 'term-leftbar',
  templateUrl: './leftbar.html',
  styleUrls: ['../../../node_modules/filetree-css/filetree.css', './leftbar.css'],

})


export class TermLeftBar {
  // DataStore = DataStore;
  HostGroups = [
    {
      name: "msa-us",
      id: "ccc",
      children: [
        {
          name: "ops-redis",
          id: "xxxx"
        }
      ],
    }];

  constructor(private _appService: AppService,
              private _logger: Logger) {
    this._logger.log('nav.ts:NavComponent');
    // this._appService.getnav()
  }

  TerminalConnect() {
    this._appService.TerminalConnect("sss");
  }

}
