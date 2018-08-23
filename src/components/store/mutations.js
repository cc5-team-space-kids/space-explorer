export const SET_MESSAGE = (state, message) => {
  state.message = message
}

export const SET_IMG_URL = (state, url) => {
  state.imgUrl = url;
  console.log("Hi I'm mutations")
  console.log(state.imgUrl)
}