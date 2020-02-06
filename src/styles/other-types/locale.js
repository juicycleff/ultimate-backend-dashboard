// @flow

declare interface AccordionLocale {
  collapse: string;
  expand: string;
}
declare interface BreadcrumbLocale {
  ariaLabel: string;
}
declare interface DatepickerLocale {
  ariaLabel: string;
  nextMonth: string;
  previousMonth: string;
  screenReaderMessageInput: string;
  timePickerAriaLabel: string;
  timezonePickerAriaLabel: string;
}
declare interface ButtonGroupLocale {
  ariaLabel: string;
}
declare interface FileUploaderLocale {
  dropFilesToUpload: string;
  or: string;
  browseFiles: string;
  retry: string;
  cancel: string;
}
declare interface MenuLocale {
  noResultsMsg: string;
}
declare interface ModalLocale {
  close: string;
}
declare interface PaginationLocale {
  prev: string;
  next: string;
  preposition: string;
}
declare interface SelectLocale {
  noResultsMsg: string;
  placeholder: string;
  create: string;
}
declare interface ToastLocale {
  close: string;
}

export interface Locale {
  accordion: AccordionLocale;
  breadcrumbs: BreadcrumbLocale;
  datepicker: DatepickerLocale;
  buttongroup: ButtonGroupLocale;
  fileuploader: FileUploaderLocale;
  menu: MenuLocale;
  modal: ModalLocale;
  pagination: PaginationLocale;
  select: SelectLocale;
  toast: ToastLocale;
}
