    const textInput = document.getElementById('textInput');
    const speakBtn = document.getElementById('speakBtn');

    speakBtn.addEventListener('click', () => {
        const textToSpeak = textInput.value;

        if (textToSpeak.trim() !== '') {
            const utterance = new SpeechSynthesisUtterance(textToSpeak);

            // Optional: Configure voice, rate, and pitch
            // You can get available voices using window.speechSynthesis.getVoices()
            // utterance.voice = window.speechSynthesis.getVoices()[0];
            // utterance.rate = 1; // 0.1 to 10
            // utterance.pitch = 1; // 0 to 2

            window.speechSynthesis.speak(utterance);
        }
    });