function loadItems(){
    return fetch('data/data.json')
    .then(response =>response.json())//json객체 형태로 변환
    .then(json =>json.items);
}

function displayItems(items){
    const container = document.querySelector('.items');
    const html = items.map(item => createHTMLString(item)) join('');
    console.log(html);
}

loadItems()
    .then(items => {
        console.log(items);
        displayItems(items);

    })
    .catch(consol.log);