import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleService {
  sampleProperty = 'hello';

  getSampleProperty() {
    return this.sampleProperty;
  }
}
