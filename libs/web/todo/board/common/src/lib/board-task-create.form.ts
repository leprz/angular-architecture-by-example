import { FormControl, FormGroup } from '@angular/forms';

export class BoardTaskCreateForm {
  readonly TITLE = 'title';

  private readonly formGroup: FormGroup;

  public constructor() {
    this.formGroup = new FormGroup({
      [this.TITLE]: new FormControl(''),
    });
  }

  getFormGroup(): FormGroup {
    return this.formGroup;
  }

  clear(): void {
    this.formGroup.get(this.TITLE)?.setValue('');
  }

  getTitle(): string {
    return this.formGroup.get(this.TITLE)?.value;
  }

  isTitleEmpty(): boolean {
    return this.formGroup.get(this.TITLE)?.value === '';
  }
}
