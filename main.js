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

window.addEventListener('load',()=>{
        const form = document.querySelector("#form");
        const input_content = document.querySelector("#GET-content");
        const input_name = document.querySelector("#GET-name");
        const input_data = document.querySelector("#GET-data");
        const category = document.querySelector('#GET-category')
        const list = document.querySelector("#notes_list");

        form.addEventListener('submit', (e) =>{
                e.preventDefault();

                if (!input_name.value) {
                        alert("Please add name ")
                }else if (!input_content.value){
                        alert("Please add content")
                }else if (!input_data.value){
                        alert("Please add data")
                }else if (!category){
                        alert("Please select category")
                }else{
                        notes.push(
                                {Name:input_name.value,
                                Categoty: category.value,
                                Content:input_content.value,
                                Dates: input_data.value})

                        console.log(notes)
                        form.classList.add('form_close')
                        for (const i in notes) {
                                const task_el = document.createElement('div');
                                task_el.classList.add('task');

                                const task_content_el = document.createElement('div');
                                task_content_el.classList.add('content');

                                task_el.appendChild(task_content_el);

                                const task_input_el = document.createElement('input');
                                task_input_el.classList.add('text');
                                task_input_el.type = 'text';
                                task_input_el.value = task;
                                task_input_el.setAttribute('readonly', 'readonly');

                                task_content_el.appendChild(task_input_el);

                                const task_actions_el = document.createElement('div');
                                task_actions_el.classList.add('actions');

                                const task_edit_el = document.createElement('button');
                                task_edit_el.classList.add('edit');
                                task_edit_el.innerText = 'Edit';

                                const task_delete_el = document.createElement('button');
                                task_delete_el.classList.add('delete');
                                task_delete_el.innerText = 'Delete';

                                task_actions_el.appendChild(task_edit_el);
                                task_actions_el.appendChild(task_delete_el);

                                task_el.appendChild(task_actions_el);

                                list_el.appendChild(task_el);

                                input.value = '';
                        }
                }
        })
})


function setOpen(){
        form.classList.add('form_active');
}
function edit(){

}

function save(){

}
