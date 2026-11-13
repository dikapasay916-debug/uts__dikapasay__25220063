document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-links a');
    const cards = document.querySelectorAll('.card');
    const headerTitle = document.getElementById('header-title');
    const headerSubtitle = document.getElementById('header-subtitle');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            if (this.classList.contains('sign-out')) return;
            e.preventDefault();

            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');

            const target = this.getAttribute('data-target');

            // Ganti teks header atas sesuai menu yang diklik
            if (target === 'home') {
                headerTitle.innerText = 'Selamat Datang, Nama Mahasiswa';
                headerSubtitle.innerText = 'Kelas ....';
            } else {
                headerTitle.innerText = 'Selamat Datang, dika pasay rahmadhan';
                headerSubtitle.innerText = 'Kelas SI-3C';
            }

            // Bersihkan semua efek warna merah sebelumnya
            cards.forEach(card => card.classList.remove('highlight-red'));

            // Cari elemen card yang sesuai ID lalu scroll & beri warna merah
            // (Kecuali home, mahasiswa, dan settings yang tidak punya card khusus)
            if (target !== 'home' && target !== 'mahasiswa' && target !== 'settings') {
                const targetCard = document.getElementById('card-' + target);
                if (targetCard) {
                    targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    targetCard.classList.add('highlight-red');
                }
            }
        });
    });
});