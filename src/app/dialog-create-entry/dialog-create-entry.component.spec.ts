import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DialogCreateEntryComponent} from './dialog-create-entry.component';

describe('DialogCreateEntryComponent', () => {
	let component: DialogCreateEntryComponent;
	let fixture: ComponentFixture<DialogCreateEntryComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [DialogCreateEntryComponent]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(DialogCreateEntryComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
