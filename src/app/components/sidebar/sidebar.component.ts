import { Component, OnInit } from '@angular/core';
import { OffcanvasService } from '../../Services/offcanvas.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    public offService: OffcanvasService,
  ) { }

  ngOnInit(): void {
  }
  public onNavigationClick() {
    this.offService.closeOffcanvasNavigation();
  }

}
