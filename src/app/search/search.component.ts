import { Component, OnInit } from '@angular/core';
import { BankService} from './bank.service'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  bankData:any;
  cities = ['MUMBAI','PUNE','SATARA','SANGLI','KOLHAPUR']
  bankName:any;
  serachData:any;
  constructor(private bankService: BankService) { }

  ngOnInit(): void {
    this.getDataByCity('MUMBAI')
  }

  getDataByCity(cityName:any) {
    this.bankService.getCity(cityName).subscribe(data=> this.bankData = data)
  }

  SearchBank(bankName) {
    if(bankName !== undefined) {
    this.serachData =  this.bankData.filter(x=> x.bank_name == bankName);
    if(this.serachData) {
      this.bankData =  this.serachData;
    }
  }
  }

}
