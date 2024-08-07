import axios from "axios"

export const REQUEST_FILES = "REQUEST_FILES"
export const SEARCH_FILE = "SEARCH_FILE"

export async function searchFile(fileName) {
  return {
    type: SEARCH_FILE,
    fileName: fileName,
    filtered: (await axios.get(`files/data?fileName=${fileName}`)).data
  }
}

export async function requestFiles(state) {
  return {
    type: REQUEST_FILES,
    files: state.files.all.length
        ? state.files.all
        : (await axios.get("files/data")).data
  }
}
