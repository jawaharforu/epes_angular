import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Ng4LoadingSpinnerService } from '../modules/ng4-loading-spinner-master/src';
import { ToastService } from '../../../ng-uikit-pro-standard';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private isLoading = new Subject<any>();
  public link: String = 'http://localhost:3000/api';
  public jdUpload: any = 'http://localhost:3000/api/jds/upload';
  public uploadImage: any = 'http://localhost:3000/api/commons/upload/image';
  public serverUrl: any = 'http://localhost:3000/images/';
  // link: String = '';
  // tslint:disable-next-line:max-line-length
  // tslint:disable-next-line:no-inferrable-types
  public userDetail: string = 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViMTBlN2ZhNmRkOGM1MzY2OGYyMDNkZSIsImNvbXBhbnlpZCI6IjViMTBlNzczNmRkOGM1MzY2OGYyMDNkZCIsImZpcnN0bmFtZSI6Imphd2FoYXIiLCJsYXN0bmFtZSI6ImoiLCJlbWFpbCI6Imphd2FoYXJAem9saXBlLmNvbSIsInJvbGUiOiJzdXBlcmFkbWluIiwic3Vic2NyaWJlIjoxLCJwYXNzd29yZCI6IiQyYSQxMCRrejZ3dmdmSkxtTUtwMTFCU2xpZVV1bWZPSGY0V0VtTUVjN1pyaFZXNi5zSkswdVFuUnNvdSIsImlhdCI6MTUzMzIwNzE4OCwiZXhwIjoxNTMzODExOTg4fQ.LwLKuSMtY9EigFucozK10UCXFNg3d_9zlqe5TvbhypQ';

  constructor(
    private spinnerService: Ng4LoadingSpinnerService,
    private toastrService: ToastService,
    private router: Router
  ) {
    this.isLoading.next(true);
  }

  setLoader(loading: boolean) {
    this.isLoading.next(loading);
  }

  getLoader(): Observable<any> {
      return this.isLoading.asObservable();
  }

  loader(event: boolean) {
    ( event === true ) ? this.spinnerService.show() : this.spinnerService.hide();
  }

  showMessage(alert: string, message: string) {
    switch (alert) {
      case 'success':
        this.toastrService.success(message);
        break;
      case 'error':
        this.toastrService.error(message);
        break;
      case 'info':
        this.toastrService.info(message);
        break;
      case 'warning':
        this.toastrService.warning(message);
        break;
      default:
        this.toastrService.error(message);
    }
  }

  getUserToken() {
    return this.userDetail;
  }

  redirectTo(path: any) {
    this.router.navigate([path]);
  }
}
