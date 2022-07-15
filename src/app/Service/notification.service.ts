import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toasterService: ToastrService) { }

  showSuccess(message: any) {
    this.toasterService.success(message);
  }

  showInfo(message: any) {
    this.toasterService.info(message)
  }

  showWarning(message: any){
    this.toasterService.warning(message);
  }

  /**
  showError(message){
      this.toastr.error(message)
  }

  showInfo(message){
      this.toastr.info(message)
  }

  showWarning(message){
      this.toastr.warning(message)
  }
   */

}
