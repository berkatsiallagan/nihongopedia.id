// js/tata-bahasa-n5.js

document.addEventListener('DOMContentLoaded', function() {
    // Cek apakah berada di halaman tata-bahasa-1
    if (document.querySelector('article h1').textContent.includes('Struktur Dasar ～です')) {
        setupTataBahasa1();
    }
    if (document.querySelector('article h1').textContent.includes('Kalimat Tanya dengan ～は～ですか')) {
        setupTataBahasa2();
    }
    // Tambahkan kondisi untuk halaman tata bahasa lainnya di sini
});

function setupTataBahasa1() {
    const answers = {
        1: "これはえんぴつです。",
        2: "私はいしゃです。",
        3: "それはくるまです。"
    };

    const alternativeAnswers = {
        1: [
            "これはえんぴつです。", "これはえんぴつです",
            "これはエンピツです。", "これはエンピツです",
            "これは鉛筆です。", "これは鉛筆です",
            "kore wa enpitsu desu.", "kore wa enpitsu desu", "korewaenpitsudesu",
            "enpitsu desu", "これはえんぴつだ", "これは鉛筆だ"
        ],
        2: [
            "私はいしゃです。", "私はいしゃです",
            "わたしはいしゃです。", "わたしはいしゃです",
            "私は医者です。", "私は医者です",
            "わたしは医者です。", "わたしは医者です",
            "watashi wa isha desu.", "watashi wa isha desu", "watashiwaishadesu",
            "isha desu", "医者です", "私はいしゃだ", "私は医者だ"
        ],
        3: [
            "それはくるまです。", "それはくるまです",
            "それはクルマです。", "それはクルマです",
            "それは車です。", "それは車です",
            "sore wa kuruma desu.", "sore wa kuruma desu", "sorewakurumadesu",
            "kuruma desu", "車です", "それはくるまだ", "それは車だ"
        ]
    };

    const checkButton = document.querySelector('.bg-gray-50 button');
    const inputs = document.querySelectorAll('.bg-gray-50 input');

    checkButton.addEventListener('click', function () {
        inputs.forEach((input, index) => {
            const questionNumber = index + 1;
            const userAnswer = input.value.trim();
            const correctAnswer = answers[questionNumber];

            // Hapus feedback sebelumnya
            input.classList.remove('border-red-500', 'border-green-500');
            const icon = input.parentNode.querySelector('.answer-icon');
            const correctAnswerElement = input.parentNode.querySelector('div.text-sm');
            if (icon) icon.remove();
            if (correctAnswerElement) correctAnswerElement.remove();

            // Validasi kosong
            if (userAnswer === '') {
                input.classList.add('border-red-500');
                const warning = document.createElement('div');
                warning.className = 'text-sm mt-1 text-red-500';
                warning.textContent = 'Jawaban tidak boleh kosong.';
                input.parentNode.appendChild(warning);
                return;
            }

            const isCorrect = userAnswer === correctAnswer ||
                (alternativeAnswers[questionNumber] &&
                    alternativeAnswers[questionNumber].includes(userAnswer));

            if (isCorrect) {
                input.classList.add('border-green-500');
                const icon = document.createElement('i');
                icon.className = 'fas fa-check text-green-500 ml-2 answer-icon';
                input.parentNode.appendChild(icon);
            } else {
                input.classList.add('border-red-500');
                const icon = document.createElement('i');
                icon.className = 'fas fa-times text-red-500 ml-2 answer-icon';
                input.parentNode.appendChild(icon);

                const correctDiv = document.createElement('div');
                correctDiv.className = 'text-sm mt-1 text-gray-600 dark:text-gray-300';
                correctDiv.textContent = `Jawaban benar: ${correctAnswer}`;
                input.parentNode.appendChild(correctDiv);
            }
        });

        document.querySelector('.bg-gray-50').scrollIntoView({ behavior: 'smooth' });
    });

    // Reset feedback saat mengetik
    inputs.forEach(input => {
        input.addEventListener('input', function () {
            this.classList.remove('border-red-500', 'border-green-500');

            const icon = this.parentNode.querySelector('.answer-icon');
            if (icon) icon.remove();

            const feedback = this.parentNode.querySelector('div.text-sm');
            if (feedback) feedback.remove();

            const warning = this.parentNode.querySelector('div.text-red-500');
            if (warning) warning.remove();
        });
    });
}