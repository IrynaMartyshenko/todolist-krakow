import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todolist';
  items = [ 
    { id: "id1", value: "todosth", checked: false },
    { id: "id2", value: "todosth", checked: false }
  ];

  newItem = {
    id: "",
    value: "",
    checked: false
  }

  onClick(item:any) : void{
    item.checked = !item.checked;
    setTimeout(() => {this.items.splice(this.items.indexOf(item), 1)}, 1000);
  }

  Delete(item:any) : void{
    item.checked = !item.checked;
    setTimeout(() => {this.items.splice(this.items.indexOf(item), 1)}, 1);
  }

  addNewItem() {
    if( !this.newItem.value) {
     return false;
    }

    const id = `id ${this.items.length} `;
    this.newItem.id = id;
    this.items.push({...this.newItem});
    this.newItem.value = "";

    return;
  }
}
  