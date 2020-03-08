export interface IToastr {
    info(message: string, title?: string): string;
    error(message: string, title?: string): string;
    success(message: string, title?: string): string;
    warning(message: string, title?: string): string;
}
