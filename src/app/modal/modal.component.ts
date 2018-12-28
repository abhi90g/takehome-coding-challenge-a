import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../services/data.service';
import { Company } from '../classes/company';
import { Router } from '@angular/router'
import { Location } from '@angular/common';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input() buttonName: string = '';
  @Input() target: Object;
  closeResult: string;
  companyForm: FormGroup;
  header: string = 'Company';
  targets$;
  companyEdit: any = Object.assign({}, this.target);
  status;
  performance;

  statuses = ['', 'Researching', 'Pending Approval', 'Approved', 'Declined']
  Performance = ['', 'Excellent', 'Good', 'Moderate', 'Bad']


  constructor(private modal: NgbModal, private formBuilder: FormBuilder, private data: DataService, private router: Router, private location: Location, private cd: ChangeDetectorRef) {
    this.companyForm = this.createFormGroup()
  }

  ngOnInit() { }


  getAllData() {
    this.data.getAllData().subscribe(data => {
      this.targets$ = data;
      console.log(data);
    })
  }

  createFormGroup() {
    return new FormGroup({
      company_name: new FormControl(),
      status: new FormControl(),
      info: new FormControl(),
      performance: new FormControl(),
      key_contacts: new FormGroup({
        first_contact: new FormControl(),
        second_contact: new FormControl()
      }),
      website: new FormControl(),
      address: new FormGroup({
        street: new FormControl(),
        city: new FormControl(),
        state: new FormControl(),
        zip: new FormControl()
      }),
      company_phone: new FormControl(),
      revenue: new FormControl(),
      ebitda: new FormControl()
    })
  }

  modalFormOpen(content) {
    this.modal.open(content, { centered: true });
    console.log(this.buttonName)
    console.log('content - ', content)
  }

  updateForm(target) {
    const result = Object.assign({}, target, {
      status: ('undefined') ? this.status : target.status,
      performance: ('undefined') ? this.performance : target.performance
    })
    console.log('result - ', result)
    this.data.updateCompany(result)
      .subscribe(
        () => this.router.navigate(['']),
        error => {
          console.log(error)
        }
      )
      // this.cd.detectChanges();
      console.log(this.targets$)
    

    this.modal.dismissAll('Close click')

  }


  addCompany() {
    const result: Company = Object.assign({}, this.companyForm.value)
    console.log(result)
    this.data.createCompany(result).subscribe(data => {
      this.getAllData()
    })

    this.modal.dismissAll('Close click')
  }


}
