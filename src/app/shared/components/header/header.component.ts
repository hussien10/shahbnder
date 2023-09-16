import { Component } from '@angular/core';
import { IconDefinition, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faHeart} from '@fortawesome/free-solid-svg-icons';
import { faUser} from '@fortawesome/free-solid-svg-icons';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  faMagnifyingGlass:IconDefinition=faMagnifyingGlass
  faCartShopping:IconDefinition=faCartShopping
  faHeart:IconDefinition=faHeart
  faUser:IconDefinition=faUser
}
