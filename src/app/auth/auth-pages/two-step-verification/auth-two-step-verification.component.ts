import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgOtpInputModule } from 'ng-otp-input';

@Component({
  selector: 'app-auth-two-step-verification',
  standalone: true,
  imports: [NgbCarouselModule, CommonModule, RouterModule, NgOtpInputModule],
  templateUrl: './auth-two-step-verification.component.html',
  styleUrl: './auth-two-step-verification.component.scss'
})
export class AuthTwoStepVerificationComponent {
  testimonials = [
    {
      title: '“I feel confident imposing on myself”',
      content:
        'Vestibulum auctor orci in risus iaculis consequat suscipit felis rutrum aliquet iaculis augue sed tempus In elementum ullamcorper lectus vitae pretium Nullam ultricies diam eu ultrices sagittis.',
    },
    {
      title: '“Our task must be to free widening circle”',
      content:
        'Curabitur eget nulla eget augue dignissim condintum Nunc imperdiet ligula porttitor commodo elementum Vivamus justo risus fringilla suscipit faucibus orci luctus ultrices posuere cubilia curae ultricies cursus.',
    },
    {
      title: '“I\'ve learned that people forget what you”',
      content:
        'Pellentesque lacinia scelerisque arcu in aliquam augue molestie rutrum Fusce dignissim dolor id auctor accumsan vehicula dolor vivamus feugiat odio erat sed  quis Donec nec scelerisque magna',
    },
  ];
  config: any = {
    allowNumbersOnly: true,
    length: 4,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      'width': '80px',
      'height': '50px'
    }
  };
}
