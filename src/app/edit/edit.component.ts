import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from '../member.service';
import { FormGroup, FormBuilder, Validators,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  angForm:FormGroup;
  member: any = {};
  constructor(private route: ActivatedRoute, private router: Router, private ms: MemberService, 
    private fb: FormBuilder) { 
      this.createForm();
    }
    createForm(){
      this.angForm=this.fb.group({
        MemberName: ['', Validators.required],
        MemberBio: ['', Validators.required],
        MemberAge: ['', Validators.required],
      });
    }
    updateMember(MemberName,MemberBio,MemberAge){
      this.route.params.subscribe((params)=>{
        this.ms.updateMember(MemberName,MemberBio,MemberAge,params.id);
        this.router.navigate(['admin']);
      });
    }
  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.ms.editMember(params[`id`]).subscribe((res)=>{
        this.member=res;
      });
    });
  }
}
