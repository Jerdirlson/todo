import { defineStore } from "pinia";
import { ref, type Ref } from "vue";


export const useTodosStore = defineStore("counter", () => {

    const todos: Ref<Array<any>> = ref([ ]) 

    const setTodo = (values: any) => {
        todos.value = values;
    }

    return { setTodo, todos };

})