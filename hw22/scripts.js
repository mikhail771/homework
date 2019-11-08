$("#input").autocomplete({
    source: "https://api.github.com/search/users?q={{serchWord}}", // url-адрес
    minLength: 2 // минимальное количество для совершения запроса
});