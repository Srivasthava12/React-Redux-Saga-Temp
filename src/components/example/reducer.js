const initialState = {

}

export default function(state = initialState, action) {
  switch (action.type) {

  case "typeName":
    return { ...state }

  default:
    return state
  }
}
