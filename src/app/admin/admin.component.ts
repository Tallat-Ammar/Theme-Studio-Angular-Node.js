import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import  Member  from '../Member';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  members : Member[]=[];
  constructor(private ms: MemberService) { }
  deleteMember(id, index) { 
    this.ms.deleteMember(id).subscribe(res => { this.members.splice(index, 1); 
  });
}
  ngOnInit(): void {
    this.ms.getMembers().subscribe((data:Member[])=>{
      this.members=data;
    });
  }
}
