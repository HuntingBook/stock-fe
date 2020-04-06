import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { UserService } from '../../services';

@Component({
  selector: 'app-manage-companies',
  templateUrl: './manage-companies.component.html',
  styleUrls: ['./manage-companies.component.scss']
})
export class ManageCompaniesComponent implements OnInit {

  columns: any = [
    {
      key: "",
      label: "",
      value: "Abc LTD"
    },
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
      label: "Brief Writeup",
      value: ""
    }, {
      key: "",
      label: "",
      value: ""
    }
  ];

  bsModalRef: BsModalRef;
  slCompany: any;
  constructor(private modalService: BsModalService, private userService: UserService) {

  }

  openModal(template: TemplateRef<any>, slCompany:any) {
    // this.slCompany = slCompany;
    this.slCompany = {
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
    this.userService.getUsers().subscribe(
      users => {
        console.log(users);
      },
      error => {
        console.log(error);
      });
  }

  update(){
  }

}
