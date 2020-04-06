import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-manage-ipo',
  templateUrl: './manage-ipo.component.html',
  styleUrls: ['./manage-ipo.component.scss']
})
export class ManageIPOComponent implements OnInit {

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
    }, 
    {
      key: "",
      label: "Price",
      value: "Abc LTD"
    },{
      key: "",
      label: "IPO Date",
      value: ""
    }, {
      key: "",
      label: "",
      value: ""
    }
  ];

  bsModalRef: BsModalRef;
  slIPO: any;
  constructor(private modalService: BsModalService) {

  }

  openModal(template: TemplateRef<any>, slIPO:any) {
    // this.slIPO = slIPO;
    this.slIPO = {
      name: "",
      turnover: "",
      ceo: "",
      boardOfDirectors: "",
      stockExchanges: "",
      sector: "",
      writeup: ""
    };
    this.bsModalRef = this.modalService.show(template, { class: 'modal-dialog-centered', backdrop: "static" });
  }

  ngOnInit() {
  }

}
