import { Component, OnInit } from '@angular/core';
import { OffcanvasService } from '../../Services/offcanvas.service';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private offService: OffcanvasService) { }

  ngOnInit(): void {
  }

  onMenuClose(e: Event) {
    this.offService.closeOffcanvasNavigation();
  }


}
