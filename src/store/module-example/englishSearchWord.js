export default {
  action: {

  },
  mutations: {

  },
  state: {
    allWord: [
      {
        word: "hello",
        def: 'def: "used as a greeting when you see or meet someone',
        audios: [
          "https://d27ucmmhxk51xv.cloudfront.net/media/english/breProns/hello0205.mp3?version=1.2.5",
          "https://d27ucmmhxk51xv.cloudfront.net/media/english/ameProns/hello.mp3?version=1.2.5",
        ],
        phrases: [
          {
            text: "Hello, John! How are you?",
            audio:
              "https://d27ucmmhxk51xv.cloudfront.net/media/english/exaProns/p008-001354151.mp3?version=1.2.5",
          },
          {
            text: "Well, hello there! I haven’t seen you for ages",
            audio:
              "https://d27ucmmhxk51xv.cloudfront.net/media/english/exaProns/p008-001725232.mp3?version=1.2.5",
          },
        ],
      },
      {
        word: "great",
        def: "very large in amount or degree",
        audios: [
          "https://d27ucmmhxk51xv.cloudfront.net/media/english/breProns/brelasdegreat.mp3?version=1.2.5",
          "https://d27ucmmhxk51xv.cloudfront.net/media/english/ameProns/grate1.mp3?version=1.2.5",
        ],
        phrases: [
          {
            text: "The movie was a great success.",
            audio:
              "https://d27ucmmhxk51xv.cloudfront.net/media/english/exaProns/p008-001780990.mp3?version=1.2.5",
          },
          {
            text: "The news came as possibly the greatest shock of my life",
            audio:
              "https://d27ucmmhxk51xv.cloudfront.net/media/english/exaProns/p008-001780991.mp3?version=1.2.5",
          },
        ],
      },
    ]
  },
  getters: {
    wordList(state)
    {
      return state.allWord;
    }
  },
}
