const endPoint = "http://panganku.kakashispiritnews.my.id/api/region-food/";
document.getElementById('loginButton').addEventListener('click', function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const region = formData.get('region');
    const food = formData.get('food');
    const quantity = formData.get('quantity');

    const { data } = {
        region: region,
        food: food,
        quantity: quantity
    };

    axios.post(endPoint, {
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    }, data)
        .then(response => {
            console.log('Data penduduk berhasil dikirim:', response.data);
            // Lakukan sesuatu setelah data berhasil dikirim, jika perlu
        })
        .catch(error => {
            console.error('Gagal mengirim data penduduk:', error);
            // Lakukan sesuatu jika terjadi kesalahan, misalnya tampilkan pesan kepada pengguna
        });
});
