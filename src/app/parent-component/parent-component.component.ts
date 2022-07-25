import { Component } from '@angular/core';
import { SampleService } from '../sample-service.service';

@Component({
  selector: 'parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.scss']
})
export class ParentComponentComponent {

  // Anytime you need to use a service, you should declare it in the constructor and Angular will handle the rest
  // Once a service is injected/dependecy added, the component becomes "intelligent"
  constructor(private _sampleService: SampleService) {}

  // Reacts to child component's updateEvent stream
  updateEvent(event: string) {
    console.log(event);
    console.log(this._sampleService.getSampleProperty());
  }
}
