import { writable } from "svelte/store";

export const user = writable(null);

export const store = writable({
    solicitante: "",
    data: "",
    descricao: "",
    encaminhamento: "",
    arquivo: "",
    stores: []
});