import { Component } from '@angular/core';
import {ProductService} from '../services/project.services'
@Component({
  selector: 'test',
  templateUrl: `home.html`,
  styleUrls: [`style.css`],
  providers: [ProductService]
})