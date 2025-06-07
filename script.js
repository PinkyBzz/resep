// Database resep: masakan, kue, dessert
const recipes = [
    {
        name: "Nasi Goreng Spesial",
        category: "Masakan",
        ingredients: ["nasi", "telur", "bawang merah", "bawang putih", "kecap manis", "ayam", "minyak goreng", "garam", "merica"],
        steps: [
            "Panaskan minyak, tumis bawang merah dan bawang putih hingga harum.",
            "Masukkan ayam, aduk hingga berubah warna.",
            "Masukkan telur, orak-arik hingga matang.",
            "Masukkan nasi, aduk rata.",
            "Tambahkan kecap manis, garam, dan merica. Aduk rata dan masak hingga nasi panas.",
            "Angkat dan sajikan dengan pelengkap sesuai selera."
        ]
    },
    {
        name: "Ayam Goreng Tepung",
        category: "Masakan",
        ingredients: ["ayam", "tepung terigu", "telur", "bawang putih", "garam", "merica", "minyak goreng"],
        steps: [
            "Lumuri ayam dengan bawang putih, garam, dan merica.",
            "Celupkan ayam ke telur kocok, lalu balur dengan tepung terigu.",
            "Goreng ayam dalam minyak panas hingga kuning keemasan dan matang.",
            "Angkat dan tiriskan. Sajikan hangat."
        ]
    },
    {
        name: "Pancake Sederhana",
        category: "Kue & Dessert",
        ingredients: ["tepung terigu", "telur", "gula", "susu cair", "baking powder", "mentega"],
        steps: [
            "Campur tepung, gula, dan baking powder.",
            "Tambahkan telur dan susu, aduk rata.",
            "Panaskan wajan anti lengket, olesi mentega.",
            "Tuang adonan, masak hingga muncul gelembung, balik dan masak sisi lainnya.",
            "Sajikan dengan topping sesuai selera."
        ]
    },
    {
        name: "Bolu Kukus Mekar",
        category: "Kue & Dessert",
        ingredients: ["tepung terigu", "gula", "telur", "susu cair", "baking powder", "vanili", "minyak goreng"],
        steps: [
            "Kocok telur dan gula hingga mengembang.",
            "Masukkan tepung, baking powder, vanili, dan susu cair, aduk rata.",
            "Tambahkan minyak, aduk balik hingga rata.",
            "Tuang ke cetakan, kukus 15 menit hingga mekar.",
            "Angkat dan sajikan."
        ]
    },
    {
        name: "Puding Coklat Susu",
        category: "Kue & Dessert",
        ingredients: ["agar-agar bubuk", "susu cair", "gula", "coklat bubuk", "air"],
        steps: [
            "Campur semua bahan, aduk rata.",
            "Masak sambil diaduk hingga mendidih.",
            "Tuang ke cetakan, dinginkan hingga set.",
            "Sajikan dingin."
        ]
    },
    {
        name: "Sambal Goreng Kentang",
        category: "Masakan",
        ingredients: ["kentang", "bawang merah", "bawang putih", "cabai merah", "daun salam", "gula", "garam", "minyak goreng"],
        steps: [
            "Potong kentang dadu, goreng hingga matang.",
            "Tumis bumbu halus dan daun salam hingga harum.",
            "Masukkan kentang, aduk rata.",
            "Tambahkan gula dan garam, aduk rata.",
            "Masak sebentar, angkat dan sajikan."
        ]
    },
    {
        name: "Kue Cubit",
        category: "Kue & Dessert",
        ingredients: ["tepung terigu", "gula", "telur", "susu cair", "baking powder", "vanili", "margarin"],
        steps: [
            "Campur semua bahan, aduk rata.",
            "Panaskan cetakan, olesi margarin.",
            "Tuang adonan, masak hingga setengah matang, beri topping jika suka.",
            "Tutup cetakan, masak hingga matang.",
            "Angkat dan sajikan."
        ]
    },
    {
        name: "Opor Ayam",
        category: "Masakan",
        ingredients: ["ayam", "santan", "bawang merah", "bawang putih", "jahe", "kunyit", "daun salam", "serai", "garam", "minyak goreng"],
        steps: [
            "Tumis bumbu halus dan rempah hingga harum.",
            "Masukkan ayam, aduk hingga berubah warna.",
            "Tuang santan, masak dengan api kecil hingga ayam empuk.",
            "Tambahkan garam, masak hingga bumbu meresap.",
            "Angkat dan sajikan."
        ]
    },
    {
        name: "Brownies Kukus",
        category: "Kue & Dessert",
        ingredients: ["tepung terigu", "gula", "telur", "coklat bubuk", "coklat batang", "mentega", "baking powder"],
        steps: [
            "Lelehkan coklat batang dan mentega.",
            "Kocok telur dan gula hingga mengembang.",
            "Masukkan tepung, coklat bubuk, dan baking powder, aduk rata.",
            "Tambahkan coklat leleh, aduk balik.",
            "Tuang ke loyang, kukus 30 menit hingga matang.",
            "Angkat dan sajikan."
        ]
    },
    {
        name: "Es Buah Segar",
        category: "Kue & Dessert",
        ingredients: ["buah-buahan", "sirup", "susu kental manis", "es batu", "air"],
        steps: [
            "Potong buah-buahan sesuai selera.",
            "Campur buah, sirup, susu, dan air dalam mangkuk.",
            "Tambahkan es batu, aduk rata.",
            "Sajikan dingin."
        ]
    },
    {
        name: "Soto Ayam Bening",
        category: "Masakan",
        ingredients: ["ayam", "bawang putih", "bawang merah", "jahe", "serai", "daun salam", "daun bawang", "seledri", "garam", "merica", "air"],
        steps: [
            "Rebus ayam hingga matang, angkat dan suwir-suwir dagingnya.",
            "Tumis bumbu halus (bawang putih, bawang merah, jahe) hingga harum.",
            "Masukkan bumbu tumis ke air rebusan ayam, tambahkan serai, daun salam, garam, dan merica.",
            "Masukkan suwiran ayam, masak hingga bumbu meresap.",
            "Sajikan dengan taburan daun bawang dan seledri."
        ]
    },
    {
        name: "Perkedel Kentang",
        category: "Masakan",
        ingredients: ["kentang", "telur", "bawang putih", "bawang merah", "daun seledri", "garam", "merica", "minyak goreng"],
        steps: [
            "Goreng kentang hingga matang, haluskan.",
            "Campur kentang dengan bawang goreng, seledri, garam, merica, dan telur.",
            "Bentuk bulat pipih, goreng hingga kuning keemasan.",
            "Angkat dan tiriskan."
        ]
    },
    {
        name: "Sayur Asem",
        category: "Masakan",
        ingredients: ["kacang panjang", "labu siam", "jagung", "melinjo", "daun melinjo", "asam jawa", "bawang merah", "bawang putih", "cabai merah", "gula", "garam", "air"],
        steps: [
            "Rebus air, masukkan bumbu halus (bawang, cabai, asam jawa).",
            "Masukkan jagung, labu siam, kacang panjang, melinjo, dan daun melinjo.",
            "Tambahkan gula dan garam, masak hingga sayuran matang.",
            "Angkat dan sajikan."
        ]
    },
    {
        name: "Dadar Gulung",
        category: "Kue & Dessert",
        ingredients: ["tepung terigu", "telur", "santan", "gula", "kelapa parut", "daun pandan", "garam"],
        steps: [
            "Campur kelapa parut, gula, dan daun pandan, masak hingga gula larut.",
            "Buat adonan kulit dari tepung, telur, santan, dan garam.",
            "Buat dadar tipis di wajan, isi dengan unti kelapa, gulung.",
            "Sajikan."
        ]
    },
    {
        name: "Klepon",
        category: "Kue & Dessert",
        ingredients: ["tepung ketan", "air daun pandan", "gula merah", "kelapa parut", "garam"],
        steps: [
            "Campur tepung ketan dan air pandan, uleni hingga kalis.",
            "Bentuk bulat, isi gula merah, rebus hingga mengapung.",
            "Gulingkan di kelapa parut yang sudah dikukus dengan garam.",
            "Sajikan."
        ]
    },
    {
        name: "Lemper Ayam",
        category: "Kue & Dessert",
        ingredients: ["beras ketan", "santan", "ayam suwir", "bawang putih", "bawang merah", "daun salam", "daun pisang", "garam"],
        steps: [
            "Kukus beras ketan hingga setengah matang, campur santan dan garam, kukus lagi hingga matang.",
            "Tumis bumbu halus, masukkan ayam suwir, masak hingga kering.",
            "Ambil ketan, pipihkan, beri isi ayam, bungkus dengan daun pisang.",
            "Kukus sebentar, sajikan."
        ]
    },
    {
        name: "Tahu Isi Goreng",
        category: "Masakan",
        ingredients: ["tahu", "wortel", "kol", "bawang putih", "bawang merah", "daun bawang", "tepung terigu", "air", "garam", "merica", "minyak goreng"],
        steps: [
            "Belah tahu, keluarkan sebagian isinya.",
            "Tumis sayuran dan bumbu, masukkan ke dalam tahu.",
            "Celupkan tahu ke adonan tepung, goreng hingga kuning keemasan.",
            "Angkat dan sajikan."
        ]
    },
    {
        name: "Martabak Manis Mini",
        category: "Kue & Dessert",
        ingredients: ["tepung terigu", "gula", "telur", "ragi instan", "susu cair", "baking powder", "mentega", "keju", "coklat meses"],
        steps: [
            "Campur tepung, gula, ragi, telur, susu, dan baking powder, diamkan 30 menit.",
            "Tuang adonan ke teflon kecil, masak hingga berpori.",
            "Olesi mentega, taburi keju dan meses, lipat.",
            "Sajikan hangat."
        ]
    },
    {
        name: "Pisang Goreng Crispy",
        category: "Kue & Dessert",
        ingredients: ["pisang", "tepung terigu", "tepung beras", "gula", "air", "garam", "minyak goreng"],
        steps: [
            "Campur tepung terigu, tepung beras, gula, dan garam, tambahkan air hingga adonan kental.",
            "Celupkan pisang ke adonan, goreng hingga kuning keemasan.",
            "Angkat dan tiriskan."
        ]
    },
    {
        name: "Kolak Pisang Ubi",
        category: "Kue & Dessert",
        ingredients: ["pisang", "ubi", "santan", "gula merah", "daun pandan", "garam", "air"],
        steps: [
            "Rebus santan, gula merah, daun pandan, dan garam.",
            "Masukkan ubi dan pisang, masak hingga empuk.",
            "Sajikan hangat atau dingin."
        ]
    },
    {
        name: "Capcay Goreng",
        category: "Masakan",
        ingredients: ["wortel", "kol", "buncis", "kembang kol", "ayam", "bawang putih", "saus tiram", "garam", "merica", "minyak goreng"],
        steps: [
            "Tumis bawang putih hingga harum, masukkan ayam, aduk hingga matang.",
            "Masukkan semua sayuran, aduk rata.",
            "Tambahkan saus tiram, garam, dan merica, masak hingga sayur matang.",
            "Angkat dan sajikan."
        ]
    },
    {
        name: "Sup Jagung Telur",
        category: "Masakan",
        ingredients: ["jagung manis", "telur", "wortel", "daun bawang", "bawang putih", "air", "garam", "merica"],
        steps: [
            "Tumis bawang putih hingga harum, masukkan air dan jagung.",
            "Masukkan wortel, masak hingga empuk.",
            "Tuang telur kocok sambil diaduk perlahan.",
            "Tambahkan daun bawang, garam, dan merica, masak sebentar.",
            "Angkat dan sajikan."
        ]
    },
    {
        name: "Omelet Sayur",
        category: "Masakan",
        ingredients: ["telur", "wortel", "daun bawang", "kol", "garam", "merica", "minyak goreng"],
        steps: [
            "Kocok telur, masukkan sayuran, garam, dan merica.",
            "Panaskan minyak, tuang adonan telur, masak hingga matang kedua sisi.",
            "Angkat dan sajikan."
        ]
    },
    {
        name: "Puding Mangga Susu",
        category: "Kue & Dessert",
        ingredients: ["agar-agar bubuk", "mangga", "susu cair", "gula", "air"],
        steps: [
            "Blender mangga dengan sedikit air.",
            "Campur semua bahan, masak hingga mendidih.",
            "Tuang ke cetakan, dinginkan hingga set.",
            "Sajikan dingin."
        ]
    }
    // Tambahkan resep lain di sini jika ingin lebih banyak
];

function findMatchingRecipes(inputIngredients) {
    const input = inputIngredients.map(i => i.trim().toLowerCase()).filter(Boolean);
    return recipes.filter(recipe =>
        input.every(ing => recipe.ingredients.some(ring => ring.toLowerCase().includes(ing)))
    );
}

function createRecipeOption(recipe) {
    const option = document.createElement('div');
    option.className = 'recipe-option';
    option.innerHTML = `
        <div class="option-header">
            <span class="option-title">${recipe.name}</span>
            <button class="option-toggle-btn" aria-label="Lihat detail resep">&#9660;</button>
        </div>
        <div class="option-detail" style="display:none;">
            <span class="badge">${recipe.category}</span>
            <strong>Bahan-bahan:</strong>
            <ul>${recipe.ingredients.map(i => `<li>${i}</li>`).join('')}</ul>
            <strong>Tata Cara:</strong>
            <ol>${recipe.steps.map(s => `<li>${s}</li>`).join('')}</ol>
        </div>
    `;
    const btn = option.querySelector('.option-toggle-btn');
    const detail = option.querySelector('.option-detail');
    btn.addEventListener('click', function() {
        const isOpen = detail.style.display === 'block';
        detail.style.display = isOpen ? 'none' : 'block';
        btn.innerHTML = isOpen ? '&#9660;' : '&#9650;';
        if (!isOpen) {
            detail.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
    return option;
}

document.getElementById('findRecipes').addEventListener('click', () => {
    const input = document.getElementById('ingredients').value.split(',');
    const results = findMatchingRecipes(input);
    const section = document.getElementById('recipesSection');
    section.innerHTML = '';
    if (results.length === 0) {
        section.innerHTML = '<div class="recipe-card"><h2>Tidak ada resep yang cocok 😢</h2><p>Coba masukkan bahan lain atau lebih banyak bahan.</p></div>';
        return;
    }
    results.forEach(recipe => {
        section.appendChild(createRecipeOption(recipe));
    });
});

// Animasi input
const inputBox = document.getElementById('ingredients');
inputBox.addEventListener('focus', () => {
    inputBox.style.boxShadow = '0 0 8px #ffb3c6';
});
inputBox.addEventListener('blur', () => {
    inputBox.style.boxShadow = 'none';
});

// Enter key support
inputBox.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        document.getElementById('findRecipes').click();
    }
});
