import { UntypedFormControl, FormGroupDirective, NgForm } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";

export class RepeatPasswordMatcher implements ErrorStateMatcher {
	isErrorState(control: UntypedFormControl | null, form: FormGroupDirective | NgForm | null): boolean {
		return (control && control.parent.get('password').value !== control.parent.get('passwordRepeat').value && control.dirty);
	}
}
