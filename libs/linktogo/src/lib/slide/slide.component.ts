import { Component, Input, OnInit } from '@angular/core';
import { ListSlide } from './model/list-slide.model';

@Component({
	selector: 'app-slide',
	templateUrl: './slide.component.html',
	styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {
	private max_size = 6;
	private current = 0;

	@Input()
	public list: ListSlide[];

	public listDisplay: ListSlide[];

	ngOnInit(): void {
		this.loadImages();
	}

	previous(): void {
		this.current = this.current - 1;
		this.loadImages();
	}

	next(): void {
		this.current = this.current+ 1;
		this.loadImages();
	}

	private loadImages() {
		this.listDisplay = this.list.slice(this.current, this.max_size+this.current);
	}
}
