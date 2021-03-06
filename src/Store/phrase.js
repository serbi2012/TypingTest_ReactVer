import { createSlice } from "@reduxjs/toolkit";

const phrase = createSlice({
  name: "phrase",
  initialState: {
    phraseList: [
      "삶이 있는 한 희망은 있다.",
      "산다는 것 그것은 치열한 전투이다.",
      "하루에 3시간을 걸으면 7년 후에 지구를 한 바퀴 돌 수 있다.",
      "언제나 현재에 집중할 수 있다면 행복할 것이다.",
      "진정으로 웃으려면 고통을 참아야 하며, 나아가 고통을 즐길 줄 알아야 해.",
      "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다.",
      "신은 용기 있는 자를 결코 버리지 않는다.",
      "내일은 내일의 태양이 뜬다.",
      "피할 수 없으면 즐겨라.",
      "행복은 습관이다, 그것을 몸에 지니라.",
      "최고에 도달하려면 최저에서 시작하라.",
      "내 비장의 무기는 아직 손안에 있다. 그것은 희망이다.",
      "문제는 목적지에 얼마나 빨리 가는 내가 아니라 그 목적지가 어디냐는 것이다.",
      "한 번 실패와 영원한 실패를 혼동하지 마라.",
      "인간의 삶 전체는 단지 한순간에 불과하다. 인생을 즐기자.",
      "겨울이 오면 봄이 멀지 않으리.",
      "일하여 얻으라. 그러면 운명의 바퀴를 붙들어 잡은 것이다.",
      "당신의 행복은 무엇이 당신의 영혼을 노래하게 하는가에 따라 결정된다.",
      "자신이 해야 할 일을 결정하는 사람은 세상에서 단 한 사람, 오직 나 자신뿐이다.",
      "꿈을 꾸는자, 그 꿈을 닮아갈지니.",
    ],
    nowPhrase: 0,
  },
  reducers: {
    shuffle(state) {
      state.phraseList.sort(() => Math.random() - 0.5);
      state.nowPhrase = 0;
    },
    toNext(state) {
      state.nowPhrase++;
    },
  },
});

export const { shuffle, toNext } = phrase.actions;
export { phrase };
