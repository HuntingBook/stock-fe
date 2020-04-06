import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-manage-stock-exchanges',
  templateUrl: './manage-stock-exchanges.component.html',
  styleUrls: ['./manage-stock-exchanges.component.scss']
})
export class ManageStockExchangesComponent implements OnInit {
  columns: any = [
    {
      key: "",
      label: "",
      value: "Abc LTD"
    },
    {
      key: "",
      label: "Name",
      value: "Abc LTD"
    },
    {
      key: "",
      label: "Address",
      value: "BSE(Bombay Stock Exchange)"
    }, {
      key: "",
      label: "Brief",
      value: ""
    }, {
      key: "",
      label: "",
      value: ""
    }
  ];

  bsModalRef: BsModalRef;
  slExchange: any;
  constructor(private modalService: BsModalService) {

  }

  openModal(template: TemplateRef<any>, slExchange:any) {
    // this.slExchange = slExchange;
    this.slExchange = {
      name: "",
      brief: "",
      address: "",
      remarks: ""
    };
    this.bsModalRef = this.modalService.show(template, { class: 'modal-dialog-centered', backdrop: "static" });
  }

  ngOnInit() {
  }

}
