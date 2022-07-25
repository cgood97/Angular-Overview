import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'child-component[sampleInput]',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush // Only runs change detection when an Input's value changes
})
// OnInit, OnChanges, OnDestroy = Lifecycle Methods/Hooks
export class ChildComponent implements OnInit, OnChanges, OnDestroy {

  // Class property
  // Can also assign a constant here for use in template/html
  sampleProperty = 'hey';

  @Input() // Passed in from parent/host component
  sampleInput!: string; // Required Input - needs to be declared on line 4 (selector definition)

  @Input()
  secondInput?: string // Optional Input

  @Output() // Parent/host component can optionally use this event binding
  updateEvent = new EventEmitter<string>();

  // Can omit this if you are not injecting any dependencies
  constructor() {}

  // Anytime change detection runs, this method is invoked
  // Change detection runs when an Input's value changes
  // Actually fires before ngOnInit
  ngOnChanges(changes: SimpleChanges) {
    // If you want to respond to an Input's change in value, you can do that here
    const sampleInputChange = changes['sampleInput'];

    if (sampleInputChange) {
      console.log('Previous Value: ', sampleInputChange.previousValue);
      console.log('Current Value: ', sampleInputChange.currentValue);
    }
  }

  // Fires on initialization of the component, only fires once
  ngOnInit() {
    // Store an initial Input value

  }

  // Fires on destruction of the component, only fires once
  ngOnDestroy() {
    // Clean up lingering subscriptions
    // Store last selected preferences
  }

  // Class method that emits an event
  emitEvent() {
    this.updateEvent.emit('Button Clicked!');
    this._helperMethod();
  }

  // Private helper method
  // Can only be used in this file
  // Use private keyword and prefix method name with an underscore
  private _helperMethod() {
    console.log('I am a helper method');
  }
}
