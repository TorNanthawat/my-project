import { Component } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  
  addSign = '@';

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      form_name: ['', Validators.required],
      to_name: ['Tor'], 
      form_email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  // ส่งอีเมล //
  async send() {
    if (this.form.invalid) {
      // ทำการ mark ทุกฟิลด์เป็น touched เพื่อแสดงข้อความผิดพลาด
      this.form.markAllAsTouched();
      alert('กรุณากรอกข้อมูลในฟิลด์ที่จำเป็นให้ถูกต้อง.');
      return;
    }

    try {
      let response = await emailjs.send('service_n2x4agw', 'template_wcr6q0b', {
        to_name: this.form.value.to_name,
        from_name: this.form.value.form_name,
        from_email: this.form.value.form_email,
        message: this.form.value.message,
      });
      console.log('Email sent successfully:', response);
      alert('Message has been sent.');
      this.form.reset();

    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send the message. Please try again later.');
    }
  }
}
