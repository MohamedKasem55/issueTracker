import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { List } from 'src/app/viewModels/list/list';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  lists:Array<List>
  listForm:NgForm
  selectedList:number;
  issueForm:FormGroup;
  defaultUser:string;
  draggedId:number
  constructor(private fb:FormBuilder) {
    this.lists=[];
    this.selectedList=null;
/*     this.listFormInit();
 */    this.taskFormInit();
    this.defaultUser='Mohamed Aboelkasem'
   }

  ngOnInit(): void {
   console.log(this.issueForm.value);
   console.log(this.issueForm.controls['issueTitle'].errors);
   
   
  }
/*   listFormInit(){
    this.listForm=new FormGroup({
      listTitle: new FormControl()
    })} */

/*     this.listForm=this.fb.group({
      listTitle:['',Validators.required]
    })} */


    listSubmit(newList){
      this.lists.push({
        title:newList.listTitle,
        issues:[]
      })
    }
    listSelect(i){
      if(this.selectedList===null||this.selectedList !== i)
      this.selectedList=i;
      else if (this.selectedList === i)
      this.selectedList=null;      
    }

    taskFormInit(){
      
      this.issueForm=this.fb.group({
        issueTitle:['',Validators.required],
        issueDescription:['',Validators.required],
        issueAttachment:null,
        issueDate:new Date()
      })
    }
    issueSubmit(){   
      
      let newIssueObject = this.issueForm.controls
       let newIssue = {
        title:newIssueObject.issueTitle.value,
        description:newIssueObject.issueDescription.value,
        date:newIssueObject.issueDate.value,
        attachment:newIssueObject.issueAttachment.value,
        user:this.defaultUser,
       }
      this.lists[this.selectedList].issues.push(newIssue)            
    }
/*     drag(i){
      this.draggedId=i;
      console.log(i);
      
    }
    drop(event){
      event.preventDefault()
      
    }
    allowDrop(ev){
      ev.preventDefault()
      console.log(ev.target.value);

    } */
    drop(event: CdkDragDrop<Array<List>>) {
      moveItemInArray(this.lists, event.previousIndex, event.currentIndex);
    }
}
