document.getElementById("link").addEventListener("submit", async function(event) {
    event.preventDefault();

    const link = document.getElementById("link_fb").value;
    let quality;
    if(document.getElementById('sd').checked) {
        quality = 'SD';
    } else{
        quality = 'HD';
    }
    const response = await fetch('/', {
        method: 'POST',
        body: JSON.stringify({
            link, quality
        }),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
    })
    if (!response.ok) {
        alert('Error');
    } else {
        const data = await response.json();

        if(data.url.url == null) {
            alert('Không tìm thấy !!!')
        } else {
            add(data.url.url);
        }
        return;
    }
});

function add(link) {
    document.getElementById('new_video').src = link;
}