import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GETtestComponent} from './GETtest.component';

describe('HomeComponent', () => {
	let component: GETtestComponent;
	let fixture: ComponentFixture<GETtestComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [GETtestComponent]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(GETtestComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
