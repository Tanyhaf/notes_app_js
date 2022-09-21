let notes = [{
        Name: "Task1" ,
        Created: 15/ 0o5 /22,
        Category: "TaskThought",
        Content: "Do task 1",
        Dates: 20/ 0o5 /2022,
        },
        {
                Name: "Task2" ,
                Created: 15/ 0o5 /22,
                Category: "Random",
                Content: "Do task 2",
                Dates: 20/ 0o5 /2022,
        },
        {
                Name: "Task3" ,
                Created: 15/ 0o5 /22,
                Category: "Idea",
                Content: "Do task 3",
                Dates: 20/ 0o5 /2022,
        }]

window.addEventListener('load',()=> {
        const form = document.querySelector("#form");
        const input_content = document.querySelector("#GET-content");
        const input_name = document.querySelector("#GET-name");
        const input_data = document.querySelector("#GET-data");
        const category = document.querySelector('#GET-category');
        const list = document.querySelector('#notes_list')

        form.addEventListener('submit', (e) => {
                e.preventDefault();

                if (!input_name.value) {
                        alert("Please add name ")
                } else if (!input_content.value) {
                        alert("Please add content")
                } else if (!input_data.value) {
                        alert("Please add data")
                } else if (!category) {
                        alert("Please select category")
                } else {
                        notes.push(
                            {
                                    Name: input_name.value,
                                    Category: category.value,
                                    Content: input_content.value,
                                    Dates: input_data.value
                            })

                        console.log(notes)
                    createNote(notes);
                        form.classList.remove('form_active')

                }

        })

    function createNote(noteItem){
            let tr = document.createElement("tr");
            tr.classList.add('table_row')
            tr.innerHTML = `
             <th class="table_th"><input type="text" value="${noteItem.Name}"></th>
             <th class="table_th"><input type="text" value="${noteItem.Created}"</th>
             <th class="table_th"><input type="text" value="${noteItem.Category}"</th>
             <th class="table_th"><input type="text" value="${noteItem.Content}"</th>
             <th class="table_th"><input type="text" value="${noteItem.Dates}"</th>
             <th class="table_th"><button class="edit">Edit</button></th>
             <th class="table_th"><button class="delete">Delete</button></th>
              
  `;

        list.append(tr);
    }

    notes.forEach(note=>{createNote(note)})
})


function setOpen(){
        form.classList.add('form_active');
}
function edit(){

}

function save(){

}
