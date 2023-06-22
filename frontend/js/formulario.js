window.onload = async () => {

let query = new URLSearchParams(location.search)
    console.log(query.has('id') && query.get('id'));
    /* location.href

    try {
        let response = await fetch('http://localhost:3031/api/movies')
    } catch (error) {
        
    } */
}