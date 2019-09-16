import { UserService } from './../../core/security/user.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { PublishService } from './publish.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ecm-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})
export class PublishComponent implements OnInit {

  user = null;
  submitted = false;
  publishForm = this.formBuilder.group({
    name: ['', Validators.required],
    price: ['', [Validators.required]],
    description: ['', [Validators.required]]
  });

  MAX_FILES = 6;
  MIN_FILES = 1;
  VALID_FILES = ['image/jpeg', 'image/png'];

  isHovering: boolean;
  files: File[] = [];
  previews = [];

  constructor(private formBuilder: FormBuilder, private publishService: PublishService, private router: Router,
    private userService: UserService) { }

  ngOnInit() {
    this.userService.get().subscribe(
      (user => this.user = user)
    );
  }

  isInvalidControl(name: string) {
    const control = this.publishForm.get(name);
    return control.invalid && (control.dirty || this.submitted);
  }

  isInvalidFilesLength() {
    return (this.files.length < this.MIN_FILES || this.files.length > this.MAX_FILES) && this.submitted;
  }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {

    for (let i = 0; i < files.length; i++) {

      const file = files.item(i);
      if (this.VALID_FILES.includes(file.type)) {

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => this.previews.push(reader.result);
        this.files.push(file);
      }
    }
  }

  onRemove(index) {
    this.files.splice(index, 1);
    this.previews.splice(index, 1);
  }

  onSubmit() {
    this.submitted = true;
    if (this.publishForm.invalid || this.isInvalidFilesLength()) {
      return;
    }

    this.publishService.uploadFiles(this.files).subscribe(
      response => {
        const product = this.publishForm.value;
        product.images = response;
        product.user = this.user.uid;
        this.publishService.saveProduct(product).then(
          () => this.router.navigate(['sales'])
        );
      }
    );
  }
}
