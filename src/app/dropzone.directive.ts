import { Directive, Output ,HostListener,EventEmitter} from '@angular/core';

@Directive({
  selector: '[appDropzone]'
})
export class DropzoneDirective {
  @Output() dropped=new EventEmitter<FileList>();
  @Output() hovered=new EventEmitter<boolean>();

  constructor() { }
  @HostListener('drop',['$event'])
  onDrop($event){
    $event.preventDefault();
    this.dropped.emit($event.dataTransfer.files);

  }
  @HostListener('drop',['$event'])
  onDragLeave($event){
    $event.preventDefault();
    this.hovered.emit(false);

  }

}
