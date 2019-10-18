import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
import { User } from '../../services/user.model';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit, OnDestroy {

  ​opened: boolean;
  private user: User;

  mobileQuery: MediaQueryList;

  items: string[] = ['Bienvenidos', 'Empezar'];
  shouldRun = true;
  private _mobileQueryListener: () => void;
  router: any;
  afAuth: any;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
    public auth: AuthService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);      
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }





}
