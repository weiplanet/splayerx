
const state = {
  CurrentTime: 0, // current position (in seconds) of the audio/video playback
  AccurateTime: 0.0, // current position (in ms) of the audio/video playback
  Duration: NaN,
  Volume: 0.2,
  SrcOfVideo: '',
  PlaybackRate: 1.0,

  FirstSubtitleState: false,
  SecondSubtitleState: false,
  SubtitleNameArr: [],
};

const getters = {
};

const mutations = {
  PlaybackRate(state, t) {
    state.PlaybackRate = t;
  },
  SrcOfVideo(state, t) {
    state.SrcOfVideo = t;
  },
  CurrentTime(state, t) {
    state.CurrentTime = t;
  },
  AccurateTime(state, t) {
    state.AccurateTime = t;
  },
  Duration(state, t) {
    state.Duration = t;
  },
  Volume(state, v) {
    state.Volume = v;
  },

  SubtitleNameArr(state, arr) {
    state.SubtitleNameArr = arr;
  },
  SubtitleOn(state, obj) {
    state.SubtitleNameArr[obj.index].status = obj.status === 'first' ? 'first' : 'second';
  },
  SubtitleOff(state, index) {
    state.SubtitleNameArr[index].status = undefined;
  },
  FirstSubtitleOn(state) {
    state.FirstSubtitleState = true;
  },
  FirstSubtitleOff(state) {
    state.FirstSubtitleState = false;
  },
};

const actions = {
};

export default {
  state,
  mutations,
  actions,
  getters,
};
