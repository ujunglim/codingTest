// 음악을 반복했을때 처음과 끝을 이어서 맞는 멜로디는 해당하지 않는다
// 음악이 중간에 끊기면 음악 원본에 멜로디가 있어도 해당되지 않는다.
// 음악이 여러개이면 재생된 시간이 제일 긴 음악을 반환
// 재생시간도 같으면 먼저 입력된 음악을 반환

// 그런데 라디오 방송에서는 한 음악을 반복해서 재생할 때도 있어서 네오가 기억하고 있는 멜로디는 음악 끝부분과 처음 부분이 이어서 재생된 멜로디일 수도 있다.  ?????????

// C, C#, D, D#, E, F, F#, G, G#, A, A#, B 주의 #은 알파벳과 같이 하나의 음으로 여겨진다.
// 문자열, regex, sort
function solution(m, musicinfos) {
  const results = []; // {name: , playtime: }
  const regex = /[A-G]{1}\#*/g;
  const mArr = m.match(regex); ////////
  const mArrLen = mArr.length;

  // [시작시각, 끝난시각, 이름, 음별 배열형식] 으로 파싱
  for (const info of musicinfos) {
    const [start, end, name, note] = info.split(",");
    // if (end === "00:00") continue;
    const playTime = convertToMinute(end) - convertToMinute(start);

    if (playTime < mArrLen) continue; // 멜로디길이보다 음악재생된 시간이 짧으면 패스

    const splittedNote = note.match(regex);
    const oneNoteLen = splittedNote.length;
    const doubleMLen = mArrLen * 2; //////////
    let totalMusic;
    const firstNote = mArr[0];

    // 음악이 반복했을때
    if (playTime > oneNoteLen) {
      const division = Math.floor(playTime / oneNoteLen);
      const remain = playTime % oneNoteLen;
      let tempArr = [];
      for (let i = 0; i < division; ++i) {
        tempArr = tempArr.concat(splittedNote);
      }
      totalMusic = [...tempArr, ...splittedNote.slice(0, remain)];

      for (let i = 0; i < totalMusic.length; i++) {
        if (totalMusic[i] === firstNote) {
          if (
            totalMusic.slice(i, i + mArrLen).join("") === m &&
            totalMusic[i + mArrLen] !== "#"
          ) {
            results.push({ name: name, playTime: playTime });
            break;
          }
        }
      }
      continue;
    } else if (playTime === oneNoteLen && note.includes(m)) {
      results.push({ name, playTime: playTime });
    }
    // 음악이 끊겼을때 끊길때까지의 음악에 멜로디가 포함되면 후보군에 들어간다.
    else if (playTime < oneNoteLen) {
      // totalMusic = note.substr(0, playTime); //////////////////////////////////////////////////
      totalMusic = splittedNote.slice(0, playTime);
      console.log(playTime, oneNoteLen, totalMusic);
      for (let i = 0; i < totalMusic.length; ++i) {
        if (totalMusic[i] === firstNote) {
          if (totalMusic.slice(i, i + mArrLen).join("") === m) {
            results.push({ name, playTime: playTime });
            break;
          }
        }
      }
      // if (totalMusic.join("").includes(m) && totalMusic[playTime + 1] !== "#") {
      //   ////////////////////
      //   results.push({ name, playTime: playTime });
      // }

      // for (let i = 0; i < totalMusic.length; i++) {
      //   if (totalMusic[i] === firstNote) {
      //     if (
      //       totalMusic.substr(i, i + mArrLen) === m &&
      //       totalMusic[i + mArrLen] !== "#"
      //     ) {
      //       results.push({ name, playTime: playTime });
      //       break;
      //     }
      //   }
      // }
    }
  }

  if (!results.length) return "(None)";
  if (!results.length === 1) return results[0].name;
  // sort
  results.sort((a, b) => {
    if (a.playTime === b.playTime) {
      return a.name - b.name;
    }
    return b.playTime - a.playTime;
  });
  return results[0].name;
}

function convertToMinute(time) {
  const [hour, min] = time.split(":");
  return Number(hour) * 60 + Number(min);
}

// console.log(solution("A", ["12:00,12:01,Song,BA"])); // none
// console.log(
//   solution("ABC", ["12:00,12:14,HELLO,C#DEFGAB", "13:00,13:05,WORLD,ABCDEF"])
// );

console.log(solution("ABC", ["12:00,12:06,HELLO,ABC#ABC#ABC"]));
