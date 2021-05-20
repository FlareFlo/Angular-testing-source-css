import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TokentesterComponent} from './tokentester.component';

describe('TokentesterComponent', () => {
	let component: TokentesterComponent;
	let fixture: ComponentFixture<TokentesterComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [TokentesterComponent]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(TokentesterComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
