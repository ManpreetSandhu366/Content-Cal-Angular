import { IToastr } from './IToastr.service';
import { InjectionToken } from '@angular/core';

export const TOASTR_TOKEN = new InjectionToken<IToastr>('toastr');
