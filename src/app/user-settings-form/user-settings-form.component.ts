import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm } from '@angular/forms';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  originaluserSettings: UserSettings = {
    name :null,
    emailOffers: true,
    interfaceStyle: "light",
    subscriptionType:"Annual",
    notes: "Scribe something here..."
  };

  userSettings: UserSettings = {...this.originaluserSettings}

  constructor(private dataService : DataService) {}

  ngOnInit() {
  }

  onSubmit(form : NgForm){
    console.log('on submit',form.valid);
    this.dataService.postUserSettings(this.userSettings).subscribe(
      result=> console.log(result),
      error => console.log(error)
    );
  }

}
