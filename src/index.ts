const utteranceObject = new SpeechSynthesisUtterance()

type Languages = "en-US" | "en-GB" | "es-ES" | "fr-FR" | "it-IT" | "de-DE" | "ja-JP" | "ko-KR" | "zh-CN" | "en-IN" | "sv-SE" | "fr-CA" | "he-IL" | "id-ID" | "es-AR" | "nl-BE" | "en" | "ro-RO" | "pt-PT" | "th-TH" | "en-AU" | "sk-SK" | "hi-IN" | "pt-BR" | "hu-HU" | "zh-TW" | "el-GR" | "ru-RU" | "en-IE" | "nb-NO" | "es-MX" | "da-DK" | "fi-FI" | "zh-HK" | "ar-SA" | "en-ZA" | "nl-NL" | "tr-TR" | "pl-PL" | "cs-CZ";

function speakError(): Error  {
    throw new Error('You must set a text first')
}


class Speech {
    private readonly utterance: SpeechSynthesisUtterance
    private readonly speechSynthesis : SpeechSynthesis

    constructor(speechSynthesisInstance = speechSynthesis, utterance = utteranceObject){
        this.utterance = utterance
        this.speechSynthesis = speechSynthesisInstance
    }


    public insertText(text: string): void {
        this.utterance.text = text
    }


    public changeLanguage(language: Languages): void {
        this.utterance.lang = language
    }

    public speak(): void | Error {
        if(this.utterance.text === "") return speakError()

        this.speechSynthesis.speak(this.utterance)
        this.utterance.text = ""
        return

    }

    public pause(): void {
        this.speechSynthesis.pause()
    }
}

export default Speech