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

document.addEventListener('DOMContentLoaded', function() {
    // Cek apakah berada di halaman tata-bahasa-1
    if (document.querySelector('article h1').textContent.includes('Kalimat Tanya dengan ～は～ですか')) {
        setupTataBahasa2();
    }
    // Tambahkan kondisi untuk halaman tata bahasa lainnya di sini
});
function setupTataBahasa1() {
    const answers = {
        1: "これはほんです。",
        2: "これはえんぴつです。",
        3: "これはつくえです。",
        4: "これはいすです。",
        5: "これはくるまです。",
        6: "わたしはせんせいです。",
        7: "わたしはいしゃです。",
        8: "これはねこです。",
        9: "これはいぬです。",
        10:"これはじてんしゃです。"
    };
    
    const alternativeAnswers = {
        1: ["これはほんです","これは本です","kore wa hon desu","korewahondesu","これはほんだ","これは本だ"],
        2: ["これはえんぴつです","これは鉛筆です","kore wa enpitsu desu","korewaenpitsudesu","これはえんぴつだ","これは鉛筆だ"],
        3: ["これはつくえです","これは机です","kore wa tsukue desu","korewatsukuedesu","これはつくえだ","これは机だ"],
        4: ["これはいすです","これは椅子です","kore wa isu desu","korewaisudesu","これはいすだ","これは椅子だ"],
        5: ["これはくるまです","これは車です","kore wa kuruma desu","korewakurumadesu","これはくるまだ","これは車だ"],
        6: ["わたしはせんせいです","私は先生です","watashi wa sensei desu","watashiwasenseidesu","わたしはせんせいだ","私は先生だ"],
        7: ["わたしはいしゃです","私は医者です","watashi wa isha desu","watashiwaishadesu","わたしはいしゃだ","私は医者だ"],
        8: ["これはねこです","これは猫です","kore wa neko desu","korewanekodesu","これはねこだ","これは猫だ"],
        9: ["これはいぬです","これは犬です","kore wa inu desu","korewainudesu","これはいぬだ","これは犬だ"],
        10:["これはじてんしゃです","これは自転車です","kore wa jitensha desu","korewajitenshadesu","これはじてんしゃだ","これは自転車だ"]
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

function setupTataBahasa2() {
    const answers = {
        1: "これはえんぴつですか？",
        2: "お名前は何ですか？",
        3: "お国はどこですか？",
        4: "それは本ですか？",
        5: "これは何ですか？",
        6: "お家はどこですか？",
        7: "お誕生日はいつですか？",
        8: "あの人は誰ですか？",
        9: "これはつくえですか？",
        10: "お国の名前は何ですか？"
    };

    const alternativeAnswers = {
        1: ["これはえんぴつですか","これは鉛筆ですか","kore wa enpitsu desu ka","korewaenpitsudesuka","これはえんぴつですか？","これは鉛筆ですか？"],
        2: ["お名前は何ですか","お名前はなんですか","おなまえはなんですか","onamae wa nan desu ka","onamae wa nani desu ka","お名前は何ですか？"],
        3: ["お国はどこですか","おくにはどこですか","okuni wa doko desu ka","okuni wa doko desu ka?","お国はどこですか？"],
        4: ["それは本ですか","それはほんですか","sore wa hon desu ka","sore wa hon desu ka?","それは本ですか？"],
        5: ["これは何ですか","これはなんですか","kore wa nan desu ka","kore wa nani desu ka","これは何ですか？"],
        6: ["お家はどこですか","おうちはどこですか","ouchi wa doko desu ka","ouchi wa doko desu ka?","お家はどこですか？"],
        7: ["お誕生日はいつですか","おたんじょうびはいつですか","otanjoubi wa itsu desu ka","otanjoubi wa itsu desu ka?","お誕生日はいつですか？"],
        8: ["あの人は誰ですか","あのひとはだれですか","ano hito wa dare desu ka","ano hito wa dare desu ka?","あの人は誰ですか？"],
        9: ["これはつくえですか","これは机ですか","kore wa tsukue desu ka","kore wa tsukue desu ka?","これはつくえですか？"],
        10:["お国の名前は何ですか","おくにのなまえはなんですか","okuni no namae wa nan desu ka","okuni no namae wa nani desu ka","お国の名前は何ですか？"]
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