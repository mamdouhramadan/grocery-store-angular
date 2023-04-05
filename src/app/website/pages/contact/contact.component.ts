import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactWidgets = [
    {
      icon: 'icon_phone',
      title: 'Phone Number',
      text: '(123) 456-7890'
    },
    {
      icon: 'icon_pin_alt',
      title: 'Address',
      text: '1234 Street Name, City Name, United States'
    },
    {
      icon: 'icon_clock_alt',
      title: 'Opening Hours',
      text: 'Mon - Fri: 9:00 - 18:00'
    },
    {
      icon: 'icon_mail_alt',
      title: 'Email Address',
      text: 'info@yourdomain.com'
    }
  ]
}
