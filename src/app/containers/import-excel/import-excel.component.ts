import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

//https://stackblitz.com/edit/angular-custom-file-input?file=src%2Fapp%2Fformcustom%2Fformcustom.component.html
@Component({
  selector: 'app-import-excel',
  templateUrl: './import-excel.component.html',
  styleUrls: ['./import-excel.component.scss']
})
export class ImportExcelComponent implements OnInit {

  @ViewChild('labelImport', { static: true })
  labelImport: ElementRef;

  formImport: FormGroup;
  fileToUpload: File = null;
  columns: any = [
    {
      key: "",
      label: "Company Name",
      value: "Abc LTD"
    },
    {
      key: "",
      label: "Stock Exchange",
      value: "BSE(Bombay Stock Exchange)"
    }, {
      key: "",
      label: "No. of Records Imported",
      value: "80"
    }, {
      key: "",
      label: "From Date",
      value: "2020-02-10"
    }
  ];

  constructor() {
    this.formImport = new FormGroup({
      dataFile: new FormControl('', Validators.required)
    });
  }

  onFileChange(files: FileList) {
    this.labelImport.nativeElement.innerText = Array.from(files)
      .map(f => f.name)
      .join(', ');
    this.fileToUpload = files.item(0);
  }

  import() {
    console.log('import ' + this.fileToUpload.name);
  }

  download() {
    console.log('import ' + this.fileToUpload.name);
  }

  ngOnInit() {

  }

}
