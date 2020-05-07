import { Component } from '@angular/core';
import {ProductService} from '../services/project.services'
@Component({
  selector: 'test',
  templateUrl: `home1.html`,
  styleUrls: [`style.css`],
  providers: [ProductService]
})